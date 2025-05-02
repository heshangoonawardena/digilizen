"use client";

import { createLicense, getVehicleCategories } from "@/actions/actions";
import {
  BloodGroup,
  District,
  Gender,
  LicenseType,
  Province,
} from "@/generated/prisma/client";
import { cn } from "@/lib/utils";
import { licenseSchema, type LicenseSchema } from "@/schemas/licenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Avatar } from "../ui/avatar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { PhoneInput } from "../ui/phone-input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Separator } from "../ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Textarea } from "../ui/textarea";
import { FileUpload } from "../upload/fileUpload";

const bloodGroups = Object.values(BloodGroup);
const genders = Object.values(Gender);
const provinces = Object.values(Province);
const districts = Object.values(District);
const licenseType = Object.values(LicenseType);

const AddLicenseForm = () => {
  const [tab, setTab] = useState("details");

  const form = useForm<LicenseSchema>({
    mode: "onBlur",
    resolver: zodResolver(licenseSchema),
    defaultValues: {
      nic: "",
      firstName: "",
      lastName: "",
      licenseClasses: [],
      dateOfBirth: undefined,
      email: "",
      city: "",
      nicFrontUrl: "",
      nicBackUrl: "",
      medicalUrl: "",
      previousLicenseUrl: "",
    },
  });

  const { fields, append, remove, update } = useFieldArray({
    control: form.control,
    name: "licenseClasses",
  });

  const [vehicleCategories, setVehicleCategories] = useState<
    {
      id: string;
      vehicleType: string;
      vehicleClass: string;
      validityPeriod: number;
    }[]
  >([]);

  useEffect(() => {
    async function fetchCategories() {
      const cats = await getVehicleCategories();
      setVehicleCategories(cats);
    }
    fetchCategories();
  }, []);

  // Helper to get vehicle category and class label by value
  function getCategoryAndClassLabel(vehicleClass: string) {
    const cat = vehicleCategories.find((c) => c.vehicleClass === vehicleClass);
    if (!cat) return { vehicleType: vehicleClass, vehicleClass };
    return { vehicleType: cat.vehicleType, vehicleClass: cat.vehicleClass };
  }

  // Helper to get restrictions
  function getRestrictions() {
    const restrictions: string[] = [];
    if (form.getValues("correctiveLens"))
      restrictions.push("Corrective Lenses");
    if (form.getValues("autoOnly"))
      restrictions.push("Automatic Transmission Only");
    return restrictions.length > 0 ? restrictions.join(", ") : "None";
  }

  // Add License Class
  function addLicenseClass() {
    const today = new Date();
    append({
      id: "",
      vehicleClass: "",
      issueDate: today,
      expiryDate: today,
    });
  }

  // Update License Class
  function updateLicenseClass(idx: number, field: string, value: any) {
    const items = form.getValues("licenseClasses") ?? [];
    const item = {
      id: "",
      vehicleClass: "",
      issueDate: new Date(),
      expiryDate: new Date(),
      ...items[idx],
    };
    let updated = { ...item, [field]: value };
    if (field === "vehicleClass") {
      const issueDate = item.issueDate ? new Date(item.issueDate) : new Date();
      const selectedCategory = vehicleCategories.find(
        (cat) => cat.vehicleClass === value,
      );
      const validityPeriod = selectedCategory?.validityPeriod ?? 0;
      updated = {
        ...updated,
        id: selectedCategory?.id ?? "",
        vehicleClass: value.charAt(0).toUpperCase() + value.slice(1),
        expiryDate: new Date(
          issueDate.getTime() +
            (form.getValues("licenseType") === "LEARNER"
              ? 182 * 24 * 60 * 60 * 1000
              : validityPeriod * 24 * 60 * 60 * 1000),
        ),
      };
    }
    update(idx, updated);
  }

  async function handleDetailsSaveContinue() {
    // console.log(form.getValues("licenseClasses"));

    const valid = await form.trigger([
      "nic",
      "phoneNumber",
      "firstName",
      "lastName",
      "dateOfBirth",
      "gender",
      "bloodGroup",
      "email",
      "province",
      "district",
      "city",
      "address",
      "licenseType",
      "correctiveLens",
      "autoOnly",
      "licenseClasses",
    ]);
    if (valid) {
      setTab("documents");
    }
  }

  async function handleDocumentsSaveContinue() {
    const valid = await form.trigger([
      "nicFrontUrl",
      "nicBackUrl",
      "medicalUrl",
    ]);

    if (valid) {
      setTab("photo");
    }
  }

  async function handlePhotoSaveContinue() {
    const valid = await form.trigger(["photoUrl"]);

    if (valid) {
      setTab("review");
    }
  }

  const onSubmit = async (values: LicenseSchema) => {
    try {
      const result = licenseSchema.safeParse(values);
      if (result.error) {
        let errorMessage = "";
        result.error.issues.forEach((issue) => {
          errorMessage =
            errorMessage + issue.path[0] + ": " + issue.message + ". ";
        });
        toast.error(errorMessage);
        return;
      }
      console.log(result.data);
      const response = await createLicense(result.data);

      if (response?.error) {
        toast.error(response.error);
      } else {
        toast.success("License created successfully!");
        form.reset();
        setTab("details");
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  return (
    <Tabs value={tab} onValueChange={setTab} className="space-y-4">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="details">Personal Details</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
        <TabsTrigger value="photo">Photo</TabsTrigger>
        <TabsTrigger value="review">Review & Issue</TabsTrigger>
      </TabsList>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <TabsContent value="details">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Enter the citizen&apos;s personal details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <FormField
                      control={form.control}
                      name="nic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>NIC</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter NIC number"
                              type="text"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem className="flex flex-col items-start">
                          <FormLabel>Phone number</FormLabel>
                          <FormControl className="w-full">
                            <PhoneInput
                              placeholder="Enter phone number"
                              {...field}
                              defaultCountry="LK"
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter first name"
                              type="text"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter last name"
                              type="text"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground",
                                  )}
                                >
                                  {field.value ? (
                                    format(new Date(field.value), "P")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={
                                  field.value
                                    ? new Date(field.value)
                                    : undefined
                                }
                                onSelect={(date) =>
                                  field.onChange(date ?? undefined)
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl className="min-w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select a gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {genders.map((gender) => (
                                <SelectItem key={gender} value={gender}>
                                  {gender.charAt(0) +
                                    gender.slice(1).toLowerCase()}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="bloodGroup"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Blood Group</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="min-w-full">
                                <SelectValue placeholder="Select blood group" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {bloodGroups.map((group) => (
                                <SelectItem key={group} value={group}>
                                  {group}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter email address"
                              type="email"
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Residential Details</h3>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                      <FormField
                        control={form.control}
                        name="province"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Province</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl className="min-w-full">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a province" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {provinces.map((province) => (
                                  <SelectItem key={province} value={province}>
                                    {province.charAt(0) +
                                      province.slice(1).toLowerCase()}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="col-span-2 md:col-span-1">
                      <FormField
                        control={form.control}
                        name="district"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>District</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl className="min-w-full">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a district" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {districts.map((district) => (
                                  <SelectItem key={district} value={district}>
                                    {district.charAt(0) +
                                      district.slice(1).toLowerCase()}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="col-span-2">
                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter city"
                                type="text"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="col-span-2 md:col-span-4">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Permanant Address</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter full address"
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">License Details</h3>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <FormField
                        control={form.control}
                        name="licenseType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>License Type</FormLabel>
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value);
                                form.setValue("licenseClasses", []);
                              }}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="min-w-full">
                                  <SelectValue placeholder="Select license type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {licenseType.map((licenseType) => (
                                  <SelectItem
                                    key={licenseType}
                                    value={licenseType}
                                  >
                                    {licenseType.charAt(0) +
                                      licenseType.slice(1).toLowerCase()}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>License Classes</Label>
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          addLicenseClass();
                        }}
                      >
                        Add Class
                      </Button>
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Vehicle Class</TableHead>
                          <TableHead>Vehicle Type</TableHead>
                          <TableHead>Issue Date</TableHead>
                          <TableHead>Expiry Date</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {fields.map((row, idx) => (
                          <TableRow key={row.id || idx}>
                            <TableCell>
                              <Badge>Class {row.vehicleClass ?? "N/A"}</Badge>
                            </TableCell>
                            <TableCell>
                              <FormField
                                control={form.control}
                                name={`licenseClasses.${idx}.vehicleClass`}
                                render={({ field }) => (
                                  <FormItem>
                                    <Select
                                      onValueChange={(value) => {
                                        field.onChange(value);
                                        updateLicenseClass(
                                          idx,
                                          "vehicleClass",
                                          value,
                                        );
                                      }}
                                      value={field.value}
                                    >
                                      <FormControl>
                                        <SelectTrigger>
                                          <SelectValue placeholder="Select vehicle class" />
                                        </SelectTrigger>
                                      </FormControl>
                                      <SelectContent>
                                        {vehicleCategories.map((category) => (
                                          <SelectItem
                                            key={category.vehicleClass}
                                            value={category.vehicleClass}
                                          >
                                            <div className="flex items-center gap-2">
                                              {category.vehicleClass} -{" "}
                                              {category.vehicleType}
                                            </div>
                                          </SelectItem>
                                        ))}
                                      </SelectContent>
                                    </Select>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="date"
                                value={
                                  row.issueDate
                                    ? format(
                                        new Date(row.issueDate),
                                        "yyyy-MM-dd",
                                      )
                                    : ""
                                }
                                disabled
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="date"
                                value={
                                  row.expiryDate
                                    ? format(
                                        new Date(row.expiryDate),
                                        "yyyy-MM-dd",
                                      )
                                    : ""
                                }
                                disabled
                              />
                            </TableCell>
                            <TableCell>
                              <Button
                                variant="destructive"
                                size="sm"
                                onClick={() => remove(idx)}
                              >
                                Remove
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    {form.formState.errors.licenseClasses && (
                      <p className="text-destructive mt-1 text-xs">
                        {form.formState.errors.licenseClasses.message}
                      </p>
                    )}
                    <p className="text-muted-foreground text-xs">
                      Note: Expiry dates are automatically calculated based on
                      the vehicle class
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label>Restrictions</Label>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <FormField
                          control={form.control}
                          name="correctiveLens"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Corrective Lenses</FormLabel>

                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                      <div>
                        <FormField
                          control={form.control}
                          name="autoOnly"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-y-0 space-x-3 rounded-md border p-4">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  Automatic Transmission Only
                                </FormLabel>

                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button type="button" onClick={handleDetailsSaveContinue}>
                  Save & Continue
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
                <CardDescription>Upload all required documents</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>National ID Card (Front)</Label>
                    <FileUpload
                      endpoint="nicFrontUploader"
                      onChange={(url) => {
                        form.setValue("nicFrontUrl", url ?? "");
                        form.clearErrors("nicFrontUrl");
                      }}
                    />
                    {form.formState.errors.nicFrontUrl && (
                      <p className="text-destructive mt-1 text-xs">
                        {form.formState.errors.nicFrontUrl.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>National ID Card (Back)</Label>
                    <FileUpload
                      endpoint="nicBackUploader"
                      onChange={(url) => {
                        form.setValue("nicBackUrl", url ?? "");
                        form.clearErrors("nicBackUrl");
                      }}
                    />
                    {form.formState.errors.nicBackUrl && (
                      <p className="text-destructive mt-1 text-xs">
                        {form.formState.errors.nicBackUrl.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Medical Certificate</Label>
                    <FileUpload
                      endpoint="medicalUploader"
                      onChange={(url) => {
                        form.setValue("medicalUrl", url ?? "");
                        form.clearErrors("medicalUrl");
                      }}
                    />
                    {form.formState.errors.medicalUrl && (
                      <p className="text-destructive mt-1 text-xs">
                        {form.formState.errors.medicalUrl.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>Previous License (if applicable)</Label>
                    <FileUpload
                      endpoint="previousLicenseUploader"
                      onChange={(url) => {
                        form.setValue("previousLicenseUrl", url ?? "");
                      }}
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setTab("details")}>
                  Back
                </Button>
                <Button type="button" onClick={handleDocumentsSaveContinue}>
                  Save & Continue
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="photo">
            <Card>
              <CardHeader>
                <CardTitle>Photo</CardTitle>
                <CardDescription>Capture or upload photo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Photo</Label>
                  <FileUpload
                    endpoint="photo"
                    onChange={(url) => form.setValue("photoUrl", url ?? "")}
                  />
                  {form.formState.errors.photoUrl && (
                    <p className="text-destructive mt-1 text-xs">
                      {form.formState.errors.photoUrl.message}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back</Button>
                <Button onClick={handlePhotoSaveContinue}>
                  Save & Continue
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="review">
            <Card>
              <CardHeader>
                <CardTitle>Review & Issue License</CardTitle>
                <CardDescription>
                  Verify all information before issuing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Full Name:
                        </span>
                        <span className="text-sm font-medium">
                          {`${form.getValues("firstName")} ${form.getValues("lastName")}`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          NIC:
                        </span>
                        <span className="text-sm font-medium">
                          {form.getValues("nic") || "-"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Date of Birth:
                        </span>
                        <span className="text-sm font-medium">
                          {form.getValues("dateOfBirth")
                            ? format(
                                new Date(form.getValues("dateOfBirth")),
                                "PPP",
                              )
                            : "-"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Gender:
                        </span>
                        <span className="text-sm font-medium">
                          {form.getValues("gender")
                            ? form.getValues("gender").charAt(0).toUpperCase() +
                              form.getValues("gender").slice(1)
                            : "-"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Blood Group:
                        </span>
                        <span className="text-sm font-medium">
                          {form.getValues("bloodGroup") || "-"}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Address:
                        </span>
                        <span className="text-sm font-medium">
                          {form.getValues("address") || "-"}
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">
                        License Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          License Type:
                        </span>
                        <span className="text-sm font-medium">
                          {form.getValues("licenseType") === "LEARNER"
                            ? "Learner"
                            : form.getValues("licenseType") === "PERMANENT"
                              ? "Permanent"
                              : "-"}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <span className="text-muted-foreground text-sm">
                          License Classes:
                        </span>
                        <div className="space-y-2">
                          {(form.getValues("licenseClasses") || []).length ===
                            0 && (
                            <span className="text-muted-foreground text-xs">
                              No classes added
                            </span>
                          )}
                          {(form.getValues("licenseClasses") || []).map(
                            (cls, idx) => {
                              const catLabel = getCategoryAndClassLabel(
                                cls.vehicleClass,
                              );
                              return (
                                <div
                                  key={cls.id || idx}
                                  className="bg-muted/30 flex items-center justify-between rounded-md p-2"
                                >
                                  <div>
                                    <Badge>
                                      Class {catLabel.vehicleClass || "-"}
                                    </Badge>
                                    <span className="ml-2 text-xs">
                                      {catLabel.vehicleType}
                                    </span>
                                  </div>
                                  <div className="text-xs">
                                    <span className="text-muted-foreground">
                                      Issue:{" "}
                                    </span>
                                    <span className="font-medium">
                                      {cls.issueDate
                                        ? format(new Date(cls.issueDate), "PPP")
                                        : "-"}
                                    </span>
                                    <span className="text-muted-foreground ml-2">
                                      Expiry:{" "}
                                    </span>
                                    <span className="font-medium">
                                      {cls.expiryDate
                                        ? format(
                                            new Date(cls.expiryDate),
                                            "PPP",
                                          )
                                        : "-"}
                                    </span>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <span className="text-muted-foreground text-sm">
                          Restrictions:
                        </span>
                        <span className="text-sm font-medium">
                          {getRestrictions()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-muted/30 rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-24 w-24">
                      {form.getValues("photoUrl") &&
                        form.getValues("photoUrl").trim() !== "" && (
                          <Image
                            src={form.getValues("photoUrl")}
                            alt="Photo"
                            height={24}
                            width={24}
                            className="h-24 w-24 rounded-full object-cover"
                          />
                        )}
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-bold">License Preview</h3>
                      <p className="text-muted-foreground mb-2 text-sm">
                        Digital license will be generated with the following
                        information
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Back</Button>
                <Button type="submit">Issue License</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </form>
      </Form>
    </Tabs>
  );
};

export default AddLicenseForm;

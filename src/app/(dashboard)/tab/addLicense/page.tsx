"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/ui/phone-input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { FileUpload } from "@/components/upload/fileUpload";
import { cn } from "@/lib/utils";
import { licenseSchema } from "@/schemas/licenseSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Save, UserCheck } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const vehicleCategories = [
  { class: "A1", label: "Light motor cycles", value: "A1" },
  { class: "A", label: "Motorcycles", value: "A" },
  { class: "B1", label: "Motor Tricycle", value: "B1" },
  { class: "B", label: "Dual purpose Motor vehicle", value: "B" },
  { class: "C1", label: "Light Motor Lorry", value: "C1" },
  { class: "C", label: "Motor Lorry", value: "C" },
  { class: "CE", label: "Heavy Motor Lorry", value: "CE" },
  { class: "D1", label: "Light Motor Coach", value: "D1" },
  { class: "D", label: "Motor Coach", value: "D" },
  { class: "DE", label: "Heavy Motor Coach", value: "DE" },
  { class: "G1", label: "Hand Tractors", value: "G1" },
  { class: "G", label: "Land Vehicle", value: "G" },
  { class: "J", label: "Special purpose Vehicle", value: "J" },
];

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const categoryExpiryMap: Record<string, number> = {
  A1: 365 * 5, // 5 years
  A: 365 * 5, // 5 years
  B1: 365 * 8, // 8 years
  B: 365 * 8, // 8 years
  C1: 365 * 10, // 10 years
  C: 365 * 10, // 10 years
  CE: 365 * 12, // 12 years
  D1: 365 * 7, // 7 years
  D: 365 * 7, // 7 years
  DE: 365 * 9, // 9 years
  G1: 365 * 4, // 4 years
  G: 365 * 4, // 4 years
  J: 365 * 6, // 6 years
};

export default function NewLicense() {
  const [tab, setTab] = useState("details");

  const form = useForm<z.infer<typeof licenseSchema>>({
    mode: "onBlur",
    resolver: zodResolver(licenseSchema),
    defaultValues: {
      nic: "",
      firstName: "",
      lastName: "",
      licenseClasses: [],
      dateOfBirth: undefined,
      email: "",
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

  function addLicenseClass() {
    const today = new Date();
    append({
      id:
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Math.random().toString(36).slice(2),
      vehicleClass: "",
      vehicleCategory: "",
      issueDate: today,
      expiryDate: today,
    });
  }

  function updateLicenseClass(idx: number, field: string, value: any) {
    const items = form.getValues("licenseClasses") ?? [];
    const item = {
      id: "",
      vehicleClass: "",
      vehicleCategory: "",
      issueDate: new Date(),
      expiryDate: new Date(),
      ...items[idx],
    };
    let updated = { ...item, [field]: value };
    if (field === "vehicleCategory") {
      const issueDate = item.issueDate ? new Date(item.issueDate) : new Date();
      updated = {
        ...updated,
        vehicleClass: value.charAt(0).toUpperCase() + value.slice(1),
        expiryDate: new Date(
          issueDate.getTime() +
            (form.getValues("licenseType") === "LEARNERSPERMIT"
              ? 182 * 24 * 60 * 60 * 1000
              : (categoryExpiryMap[value] ?? 0) * 24 * 60 * 60 * 1000),
        ),
      };
    }
    update(idx, updated);
  }

  async function handleDetailsSaveContinue() {
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

  function onSubmit(values: z.infer<typeof licenseSchema>) {
    try {
      const formData = { ...values };
      console.log(formData);
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  // Helper to get vehicle category label by value
  function getCategoryLabel(value: string) {
    const cat = vehicleCategories.find((c) => c.value === value);
    return cat ? cat.label : value;
  }

  // Helper to get full name
  function getFullName() {
    return `${form.getValues("firstName") || ""} ${
      form.getValues("lastName") || ""
    }`.trim();
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

  // Helper to get initials for AvatarFallback
  function getInitials() {
    const first = form.getValues("firstName") || "";
    const last = form.getValues("lastName") || "";
    return `${first.charAt(0)}${last.charAt(0)}`.toUpperCase();
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Issue New License</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <UserCheck className="h-4 w-4" />
            Verify Citizen
          </Button>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Draft
          </Button>
        </div>
      </div>

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
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
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
                      <div>
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
                                  <SelectItem value="male">setup</SelectItem>
                                  <SelectItem value="female">setup</SelectItem>
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
                                  <SelectItem value="male">setup</SelectItem>
                                  <SelectItem value="female">setup</SelectItem>
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

                      <div className="md:col-span-4">
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
                                  <SelectItem value="LEARNERSPERMIT">
                                    Learner&apos;s Permit - L
                                  </SelectItem>
                                  <SelectItem value="PERMANENT">
                                    Permanant - P
                                  </SelectItem>
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
                            <TableHead>Vehicle Category</TableHead>
                            <TableHead>Issue Date</TableHead>
                            <TableHead>Expiry Date</TableHead>
                            <TableHead>Actions</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {fields.map((row, idx) => (
                            <TableRow key={row.id}>
                              <TableCell>
                                <Badge>Class {row.vehicleClass ?? "N/A"}</Badge>
                              </TableCell>
                              <TableCell>
                                <FormField
                                  control={form.control}
                                  name={`licenseClasses.${idx}.vehicleCategory`}
                                  render={({ field }) => (
                                    <FormItem>
                                      <Select
                                        onValueChange={(value) => {
                                          field.onChange(value);
                                          updateLicenseClass(
                                            idx,
                                            "vehicleCategory",
                                            value,
                                          );
                                        }}
                                        value={field.value}
                                      >
                                        <FormControl>
                                          <SelectTrigger>
                                            <SelectValue placeholder="Select vehicle category" />
                                          </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                          {vehicleCategories.map((category) => (
                                            <SelectItem
                                              key={category.value}
                                              value={category.value}
                                            >
                                              <div className="flex items-center gap-2">
                                                {category.label}
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
                        the vehicle category
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
                  <CardDescription>
                    Upload all required documents
                  </CardDescription>
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
                            {getFullName() || "-"}
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
                              ? form
                                  .getValues("gender")
                                  .charAt(0)
                                  .toUpperCase() +
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
                            {form.getValues("licenseType") === "LEARNERSPERMIT"
                              ? "Learner's Permit"
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
                              (cls, idx) => (
                                <div
                                  key={cls.id || idx}
                                  className="bg-muted/30 flex items-center justify-between rounded-md p-2"
                                >
                                  <div>
                                    <Badge>
                                      Class {cls.vehicleClass || "-"}
                                    </Badge>
                                    <span className="ml-2 text-xs">
                                      {getCategoryLabel(cls.vehicleCategory)}
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
                              ),
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
                        {form.getValues("photoUrl") ? (
                          <Image
                            src={form.getValues("photoUrl")}
                            alt="Photo"
                            height={24}
                            width={24}
                            className="h-24 w-24 rounded-full object-cover"
                          />
                        ) : (
                          <AvatarFallback>
                            {getInitials() || "?"}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-bold">License Preview</h3>
                        <p className="text-muted-foreground mb-2 text-sm">
                          Digital license will be generated with the following
                          information
                        </p>
                        {/* <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="gap-2">
                            <QrCode className="h-4 w-4" />
                            Generate QR
                          </Button>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  {/* <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="confirm" />
                      <label htmlFor="confirm" className="text-sm">
                        I confirm that all information provided is accurate and
                        complete
                      </label>
                    </div>
                  </div> */}
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
    </div>
  );
}

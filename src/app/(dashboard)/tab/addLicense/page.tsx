// progress

"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Camera,
  FileUp,
  QrCode,
  Save,
  Upload,
  UserCheck,
  Calendar as CalendarIcon,
  CreditCard,
} from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format, addYears } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PhoneInput } from "@/components/ui/phone-input";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

const formSchema = z.object({
  nic: z.string().min(1),
  phoneNumber: z.string(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z.coerce.date(),
  gender: z.string(),
  bloodGroup: z.string(),
  email: z.string(),
  address: z.string(),
  licenseType: z.string(),
  licenseClass: z.string(),
  dateOfIssue: z.coerce.date(),
  expiryDate: z.coerce.date().optional(),
  correctiveLens: z.boolean(),
  autoOnly: z.boolean(),
});

export default function NewLicense() {
  const today = format(new Date(), "yyyy-MM-dd");
  const expiryDate = format(addYears(new Date(), 8), "yyyy-MM-dd");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dateOfBirth: new Date(),
      expiryDate: new Date(),
      dateOfIssue: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>,
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
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

      <Tabs defaultValue="details" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="details">Personal Details</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="photo">Photo & Signature</TabsTrigger>
          <TabsTrigger value="review">Review & Issue</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mx-auto space-y-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Enter the citizen's personal details
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
                                      format(field.value, "PPP")
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
                                  selected={field.value}
                                  onSelect={field.onChange}
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
                                <SelectItem value="A">A</SelectItem>
                                <SelectItem value="A+">A+</SelectItem>
                                <SelectItem value="B">B</SelectItem>
                                <SelectItem value="B+">B+</SelectItem>
                                <SelectItem value="AB">AB</SelectItem>
                                <SelectItem value="AB+">AB+</SelectItem>
                                <SelectItem value="O">O</SelectItem>
                                <SelectItem value="O+">O+</SelectItem>
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

                    <div className="md:col-span-2">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Permanant Address</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter full address"
                                className="resize-none"
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
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="min-w-full">
                                    <SelectValue placeholder="Select license type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="learnerspermit">
                                    Learner's Permit - L
                                  </SelectItem>
                                  <SelectItem value="permanant">
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
                        <Button size="sm">Add Class</Button>
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
                          <TableRow>
                            <TableCell>
                              <Badge>Class A</Badge>
                            </TableCell>
                            <TableCell>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select vehicle category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="car">car</SelectItem>
                                  <SelectItem value="bike">bike</SelectItem>
                                  <SelectItem value="van">van</SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <FormField
                                control={form.control}
                                name="dateOfIssue"
                                render={({ field }) => (
                                  <FormItem className="flex flex-col">
                                    <Popover>
                                      <PopoverTrigger asChild>
                                        <FormControl>
                                          <Button
                                            variant={"outline"}
                                            className={cn(
                                              "pl-3 text-left font-normal",
                                            )}
                                          >
                                            {format(field.value, "PPP")}
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
                                          selected={field.value}
                                          onSelect={field.onChange}
                                          initialFocus
                                        />
                                      </PopoverContent>
                                    </Popover>
                                  </FormItem>
                                )}
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="date"
                                defaultValue={expiryDate}
                                disabled
                                className="w-full"
                              />
                            </TableCell>
                            <TableCell>
                              <Button variant="destructive" size="sm">
                                Remove
                              </Button>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              <Badge>Class B</Badge>
                            </TableCell>
                            <TableCell>
                              <Select>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select vehicle category" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="car">car</SelectItem>
                                  <SelectItem value="bike">bike</SelectItem>
                                  <SelectItem value="van">van</SelectItem>
                                </SelectContent>
                              </Select>
                            </TableCell>
                            <TableCell>
                              <Input
                                type="date"
                                defaultValue={today}
                                className="w-full"
                              />
                            </TableCell>
                            <TableCell>
                              <Input
                                type="date"
                                defaultValue={expiryDate}
                                disabled
                                className="w-full"
                              />
                            </TableCell>
                            <TableCell>
                              <Button variant="destructive" size="sm">
                                Remove
                              </Button>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                      <p className="text-muted-foreground text-xs">
                        Note: Expiry dates are automatically set up to 8 years
                        from the issue date
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
                  <Button type="submit">Save & Continue</Button>
                </CardFooter>
              </Card>
            </form>
          </Form>
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
                  <Label>National ID Card (Front & Back)</Label>
                  <div className="bg-muted/50 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6">
                    <FileUp className="text-muted-foreground mb-2 h-8 w-8" />
                    <p className="text-muted-foreground mb-2 text-sm">
                      Drag & drop or click to upload
                    </p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Medical Certificate</Label>
                  <div className="bg-muted/50 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6">
                    <FileUp className="text-muted-foreground mb-2 h-8 w-8" />
                    <p className="text-muted-foreground mb-2 text-sm">
                      Drag & drop or click to upload
                    </p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Proof of Address</Label>
                  <div className="bg-muted/50 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6">
                    <FileUp className="text-muted-foreground mb-2 h-8 w-8" />
                    <p className="text-muted-foreground mb-2 text-sm">
                      Drag & drop or click to upload
                    </p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Previous License (if applicable)</Label>
                  <div className="bg-muted/50 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6">
                    <FileUp className="text-muted-foreground mb-2 h-8 w-8" />
                    <p className="text-muted-foreground mb-2 text-sm">
                      Drag & drop or click to upload
                    </p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Upload className="h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Back</Button>
              <Button>Save & Continue</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="photo">
          <Card>
            <CardHeader>
              <CardTitle>Photo & Signature</CardTitle>
              <CardDescription>
                Capture or upload photo and signature
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Photo</Label>
                  <div className="bg-muted/50 flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed p-6">
                    <Avatar className="mb-4 h-32 w-32">
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Camera className="h-4 w-4" />
                        Capture
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Signature</Label>
                  <div className="bg-muted/50 flex h-64 flex-col items-center justify-center rounded-lg border-2 border-dashed p-6">
                    <div className="mb-4 flex h-32 w-full items-center justify-center rounded-md bg-white">
                      <p className="text-muted-foreground">
                        Signature will appear here
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Camera className="h-4 w-4" />
                        Capture
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Upload className="h-4 w-4" />
                        Upload
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Biometric Data</Label>
                <div className="space-y-2">
                  <Label>Fingerprints</Label>
                  <div className="bg-muted/50 flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6">
                    <Button variant="outline" className="gap-2">
                      <Camera className="h-4 w-4" />
                      Capture Fingerprints
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Back</Button>
              <Button>Save & Continue</Button>
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
                      <span className="text-sm font-medium">John Smith</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">
                        NIC:
                      </span>
                      <span className="text-sm font-medium">123456789V</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">
                        Date of Birth:
                      </span>
                      <span className="text-sm font-medium">Jan 15, 1985</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">
                        Gender:
                      </span>
                      <span className="text-sm font-medium">Male</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">
                        Blood Group:
                      </span>
                      <span className="text-sm font-medium">O+</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">
                        Address:
                      </span>
                      <span className="text-sm font-medium">
                        123 Main Street, Anytown
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
                      <span className="text-sm font-medium">New License</span>
                    </div>

                    <div className="space-y-2">
                      <span className="text-muted-foreground text-sm">
                        License Classes:
                      </span>
                      <div className="space-y-2">
                        <div className="bg-muted/30 flex items-center justify-between rounded-md p-2">
                          <div>
                            <Badge>Class A</Badge>
                            <span className="ml-2 text-xs">Motorcycle</span>
                          </div>
                          <div className="text-xs">
                            <span className="text-muted-foreground">
                              Issue:{" "}
                            </span>
                            <span className="font-medium">Apr 13, 2025</span>
                            <span className="text-muted-foreground ml-2">
                              Expiry:{" "}
                            </span>
                            <span className="font-medium">Apr 13, 2033</span>
                          </div>
                        </div>
                        <div className="bg-muted/30 flex items-center justify-between rounded-md p-2">
                          <div>
                            <Badge>Class B</Badge>
                            <span className="ml-2 text-xs">
                              Car/Light Vehicle
                            </span>
                          </div>
                          <div className="text-xs">
                            <span className="text-muted-foreground">
                              Issue:{" "}
                            </span>
                            <span className="font-medium">Apr 13, 2025</span>
                            <span className="text-muted-foreground ml-2">
                              Expiry:{" "}
                            </span>
                            <span className="font-medium">Apr 13, 2033</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">
                        Restrictions:
                      </span>
                      <span className="text-sm font-medium">
                        Corrective Lenses
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/30 rounded-lg border p-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-bold">License Preview</h3>
                    <p className="text-muted-foreground mb-2 text-sm">
                      Digital license will be generated with the following
                      information
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <QrCode className="h-4 w-4" />
                        Generate QR
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="confirm" />
                  <label htmlFor="confirm" className="text-sm">
                    I confirm that all information provided is accurate and
                    complete
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Back</Button>
              <Button>Issue License</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, FileText, Ticket } from "lucide-react";

export default async function CitizenDashboard() {

  // const user = await currentUser();

  // Fetch license data with relations
  // const licenseData = await prisma.license.findFirst({
  //   where: {
  //     user: {
  //       clerkId: user?.id,
  //     },
  //   },
  //   include: {
  //     address: true,
  //     medical: true,
  //     licenseVehicleCategories: {
  //       include: {
  //         vehicleCategory: true,
  //       },
  //       orderBy: {
  //         dateOfExpiry: "desc",
  //       },
  //     },
  //   },
  // });

  const licenseData = {
    id: "cm9v21w3a0003mfucjuhgmgzx",
    licenseNumber: "101",
    nic: "200233900111",
    photo:
      "https://hfs4q2pwcf.ufs.sh/f/uEo9AmFegi6au2VJxUFegi6aSDNjmJpbMoV7FA3fTsyRkql8",
    nicFront:
      "https://hfs4q2pwcf.ufs.sh/f/uEo9AmFegi6aKHzbFiIWfcd3QymUobYI1FNtXPu9aCBnSweE",
    nicBack:
      "https://hfs4q2pwcf.ufs.sh/f/uEo9AmFegi6a1iWj74ovh3yTl4IH2zcBf5XW67uPGLmNqbYk",
    previousLicense: "",
    phone: "+94764468108",
    firstName: "Heshan",
    lastName: "Goonawardena",
    licenseType: "PERMANENT",
    status: "ACTIVE",
    dateOfIssue: "2025-04-24T07:42:30.070Z",
    dateOfExpiry: null,
    createdAt: "2025-04-24T07:42:30.070Z",
    updatedAt: "2025-04-24T07:42:30.070Z",
    deletedAt: null,
    deleted: false,
    addressId: "cm9v21vok0000mfucy0m5ew8u",
    medicalId: "cm9v21vw80001mfucgw9d1dz7",
    address: {
      id: "cm9v21vok0000mfucy0m5ew8u",
      address: "Carmel Lane, Palliyawatta, Hendala",
      city: "Wattala",
      district: "GAMPAHA",
      province: "WESTERN",
      country: "Sri Lanka",
      createdAt: "2025-04-24T07:42:29.540Z",
      updatedAt: "2025-04-24T07:42:29.540Z",
      deletedAt: null,
      deleted: false,
    },
    medical: {
      id: "cm9v21vw80001mfucgw9d1dz7",
      medical_report_photo:
        "https://hfs4q2pwcf.ufs.sh/f/uEo9AmFegi6apXCiUngCqE34ifPcMA8k5r10sbBQUYWI7lxe",
      blood_group: "A_POS",
      blood_pressure: null,
      height: null,
      weight: null,
      dateOfBirth: "2002-12-03T18:00:00.000Z",
      gender: "MALE",
      restrictions: [],
      createdAt: "2025-04-24T07:42:29.816Z",
      updatedAt: "2025-04-24T07:42:29.816Z",
      deletedAt: null,
      deleted: false,
    },
    licenseVehicleCategories: [
      {
        id: "cm9v21wl10009mfucw3lfjth5",
        dateOfIssue: "2025-04-24T07:37:46.370Z",
        dateOfExpiry: "2025-04-28T07:37:46.370Z",
        categoryStatus: "ACTIVE",
        createdAt: "2025-04-24T07:42:30.709Z",
        updatedAt: "2025-04-24T07:42:30.709Z",
        deletedAt: null,
        deleted: false,
        vehicleCategoryId: "cm9uwn4yj0005mf14wmvri36k",
        licenseId: "cm9v21w3a0003mfucjuhgmgzx",
        vehicleCategory: {
          id: "cm9uwn4yj0005mf14wmvri36k",
          vehicleDescription:
            "Motorcycles of which Engine capacity exceeds 100cc",
          vehicleType: "Motorcycle",
          vehicleClass: "A",
          otherAllowedVehicleClasses: ["A1", "G1"],
          validityPeriod: 4,
          createdAt: "2025-04-24T05:11:03.643Z",
          updatedAt: "2025-04-24T05:11:03.643Z",
          deletedAt: null,
          deleted: false,
        },
      },
      {
        id: "cm9v21whq0007mfuci99p0yc3",
        dateOfIssue: "2025-04-24T07:37:45.775Z",
        dateOfExpiry: "2025-04-28T07:37:45.775Z",
        categoryStatus: "ACTIVE",
        createdAt: "2025-04-24T07:42:30.590Z",
        updatedAt: "2025-04-24T07:42:30.590Z",
        deletedAt: null,
        deleted: false,
        vehicleCategoryId: "cm9uwn4yk000fmf14kbet4lbw",
        licenseId: "cm9v21w3a0003mfucjuhgmgzx",
        vehicleCategory: {
          id: "cm9uwn4yk000fmf14kbet4lbw",
          vehicleDescription:
            "Land vehicle - Agricultural Land vehicle with or without a trailer",
          vehicleType: "Agricultural Land Vehicle",
          vehicleClass: "G",
          otherAllowedVehicleClasses: ["G1"],
          validityPeriod: 4,
          createdAt: "2025-04-24T05:11:03.643Z",
          updatedAt: "2025-04-24T05:11:03.643Z",
          deletedAt: null,
          deleted: false,
        },
      },
      {
        id: "cm9v21wac0005mfucbj2diwod",
        dateOfIssue: "2025-04-24T07:37:44.319Z",
        dateOfExpiry: "2025-04-28T07:37:44.319Z",
        categoryStatus: "ACTIVE",
        createdAt: "2025-04-24T07:42:30.324Z",
        updatedAt: "2025-04-24T07:42:30.324Z",
        deletedAt: null,
        deleted: false,
        vehicleCategoryId: "cm9uwn4yj0007mf14zpll0jdq",
        licenseId: "cm9v21w3a0003mfucjuhgmgzx",
        vehicleCategory: {
          id: "cm9uwn4yj0007mf14zpll0jdq",
          vehicleDescription:
            "Dual purpose Motor vehicle of which Gross Vehicle Weight does not exceed 3500kg and the seating capacity does not exceed 9 seats inclusive of the driver's seat...",
          vehicleType: "Car / Dual Purpose Vehicle",
          vehicleClass: "B",
          otherAllowedVehicleClasses: ["G1"],
          validityPeriod: 4,
          createdAt: "2025-04-24T05:11:03.643Z",
          updatedAt: "2025-04-24T05:11:03.643Z",
          deletedAt: null,
          deleted: false,
        },
      },
    ],
  };

  console.log(licenseData);
  
  return (
    <div>
      {!licenseData ? (
        <div className="flex h-fit flex-col items-center justify-center">
          <p className="mb-4 text-lg text-gray-600">No License Found</p>
          <Button>Add License</Button>
        </div>
      ) : (
        <>
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">My License</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline" className="gap-2">
                <Ticket className="h-4 w-4" />
                Pay a Fine
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Digital License</CardTitle>
                  </div>
                  <Badge
                    className={
                      licenseData?.status === "ACTIVE"
                        ? "bg-green-100 text-green-800 hover:bg-green-100"
                        : licenseData?.status === "EXPIRED"
                          ? "bg-red-100 text-red-800 hover:bg-red-100"
                          : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                    }
                  >
                    {licenseData?.status ?? "Unknown"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="relative overflow-hidden rounded-xl border bg-gradient-to-r from-green-50 to-green-100 p-6">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="flex items-center justify-around md:flex-col">
                      <Avatar className="h-32 w-32 border-4 border-white">
                        <AvatarImage
                          src={licenseData?.photo || "/placeholder-user.jpg"}
                          alt={licenseData?.firstName || "User"}
                        />
                      </Avatar>
                        {/* <DisplayQr licenseId={ licenseData.licenseNumber} /> */}
                    </div>
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold">
                          {licenseData?.firstName} {licenseData?.lastName}
                        </h3>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {licenseData?.licenseVehicleCategories?.map((cat) => (
                            <Badge
                              key={cat.id}
                              variant="outline"
                              className="bg-white"
                            >
                              {cat.vehicleCategory?.vehicleType}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">
                            License Number
                          </p>
                          <p className="font-medium">
                            {licenseData?.licenseNumber}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">NIC</p>
                          <p className="font-medium">{licenseData?.nic}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Issue Date</p>
                          <p className="font-medium">
                            {licenseData?.dateOfIssue
                              ? new Date(licenseData.dateOfIssue).toDateString()
                              : "-"}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Expiry Date</p>
                          <p className="font-medium">
                            {licenseData?.dateOfExpiry
                              ? new Date(
                                  licenseData.dateOfExpiry,
                                ).toDateString()
                              : "-"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* check again */}
                  <div className="absolute inset-0 z-[-1] bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute top-0 right-0 z-[-1] h-32 w-32 rounded-full bg-green-200 opacity-30 blur-3xl filter"></div>
                  <div className="absolute bottom-0 left-0 z-[-1] h-32 w-32 rounded-full bg-blue-200 opacity-30 blur-3xl filter"></div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>License Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Validity</span>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Active
                    </Badge>
                  </div>
                  {/* Show each vehicle class validity */}
                  <div className="space-y-2">
                    {licenseData?.licenseVehicleCategories?.length ? (
                      licenseData.licenseVehicleCategories.map((cat) => {
                        // Calculate progress (time left until expiry)
                        const now = new Date();
                        const issue = cat.dateOfIssue
                          ? new Date(cat.dateOfIssue)
                          : null;
                        const expiry = cat.dateOfExpiry
                          ? new Date(cat.dateOfExpiry)
                          : null;
                        let progress = 0;
                        if (issue && expiry && expiry > issue) {
                          const total = expiry.getTime() - issue.getTime();
                          const elapsed = now.getTime() - issue.getTime();
                          progress = Math.max(
                            0,
                            Math.min(100, 100 - (elapsed / total) * 100),
                          );
                        }
                        return (
                          <div
                            key={cat.id}
                            className="flex flex-col gap-1 rounded border px-2 py-1"
                          >
                            <div className="flex items-center justify-between text-sm">
                              <span>
                                {cat.vehicleCategory?.vehicleType || "Unknown"}
                              </span>
                              <span>
                                {cat.dateOfExpiry
                                  ? new Date(
                                      cat.dateOfExpiry,
                                    ).toLocaleDateString()
                                  : "-"}
                              </span>
                              <Badge
                                className={
                                  cat.categoryStatus === "ACTIVE"
                                    ? "bg-green-100 text-green-800 hover:bg-green-100"
                                    : cat.categoryStatus === "EXPIRED"
                                      ? "bg-red-100 text-red-800 hover:bg-red-100"
                                      : "bg-orange-100 text-orange-800 hover:bg-orange-100"
                                }
                              >
                                {cat.categoryStatus}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2">
                              <Progress
                                value={progress}
                                className="h-2 flex-1"
                              />
                              <span className="w-12 text-right text-xs text-gray-500">
                                {progress.toFixed(0)}%
                              </span>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="text-xs text-gray-500">
                        No vehicle classes found.
                      </div>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Quick Actions</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-auto justify-start py-2"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      <span className="text-xs">Book Appointment</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-auto justify-start py-2"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      <span className="text-xs">View Fines</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Tabs defaultValue="fines">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="fines">Traffic Fines</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
              </TabsList>
              <TabsContent value="fines" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Fines</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        {
                          violation: "Speeding (15mph over limit)",
                          date: "Feb 15, 2025",
                          amount: "$150",
                          status: "Paid",
                        },
                        {
                          violation: "Red Light",
                          date: "Apr 10, 2025",
                          amount: "$200",
                          status: "Unpaid",
                        },
                      ].map((fine, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-md border p-3"
                        >
                          <div>
                            <p className="font-medium">{fine.violation}</p>
                            <p className="text-muted-foreground text-xs">
                              {fine.date} • {fine.amount}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={
                                fine.status === "Paid"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100"
                                  : "bg-red-100 text-red-800 hover:bg-red-100"
                              }
                            >
                              {fine.status}
                            </Badge>
                            {fine.status === "Unpaid" && (
                              <Button size="sm" variant="outline">
                                Pay
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="link" className="mt-2 h-auto p-0">
                      View all fines →
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="appointments" className="mt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Appointment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">License Renewal</h3>
                          <p className="text-muted-foreground text-sm">
                            Apr 20, 2025 • 10:30 AM
                          </p>
                          <p className="text-muted-foreground text-sm">
                            Main RMV Office
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button variant="link" className="mt-2 h-auto p-0">
                      Manage appointments →
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </>
      )}
    </div>
  );
}

import {
  District,
  Gender,
  PrismaClient,
  Province,
} from "../src/generated/prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Seed Address
  await prisma.address.createMany({
    data: [
      {
        address: "123 Main Street",
        city: "Colombo",
        district: District.COLOMBO,
        province: Province.WESTERN,
      },
      {
        address: "456 Second Street",
        city: "Kandy",
        district: District.KANDY,
        province: Province.CENTRAL,
      },
    ],
    skipDuplicates: true,
  });

  // Seed Medical
  await prisma.medical.createMany({
    data: [
      {
        medical_report_photo: "https://placehold.co/300x400",
        blood_group: "AB_POS",
        blood_pressure: "120/80",
        height: "170",
        weight: "70",
        dateOfBirth: new Date("1990-01-01"),
        gender: Gender.MALE,
      },
      {
        medical_report_photo: "https://placehold.co/300x400",
        blood_group: "O_NEG",
        blood_pressure: "110/70",
        height: "160",
        weight: "60",
        dateOfBirth: new Date("1985-05-15"),
        gender: Gender.FEMALE,
      },
    ],
    skipDuplicates: true,
  });

  // Seed VehicleCategory
  const vehicleCategories = [
    {
      vehicleDescription:
        "Light motor cycles of which Engine Capacity does not exceeds 100cc",
      vehicle_class: "A1",
      other_classes: ["G1"],
      vehicle_type: "Light Motorcycle",
    },
    {
      vehicleDescription: "Motorcycles of which Engine capacity exceeds 100cc",
      vehicle_class: "A",
      other_classes: ["A1", "G1"],
      vehicle_type: "Motorcycle",
    },
    {
      vehicleDescription:
        "Motor Tricycle or van of which tare does not exceed 500kg and Gross vehicle weight does not exceed 1000 kg; Motor vehicle in this class include an invalid carriage",
      vehicle_class: "B1",
      other_classes: ["G1"],
      vehicle_type: "Tricycle or Small Van",
    },
    {
      vehicleDescription:
        "Dual purpose Motor vehicle of which Gross Vehicle Weight does not exceed 3500kg and the seating capacity does not exceed 9 seats inclusive of the driver's seat...",
      vehicle_class: "B",
      other_classes: ["G1"],
      vehicle_type: "Car / Dual Purpose Vehicle",
    },
    {
      vehicleDescription:
        "Light Motor Lorry – Motor Lorry of which Gross Vehicle Weight exceeds 3500 kg and does not exceed 17000kg...",
      vehicle_class: "C1",
      other_classes: ["B", "G1"],
      vehicle_type: "Light Motor Lorry",
    },
    {
      vehicleDescription:
        "Motor Lorry of which Gross vehicle Weight is more than 17000kg...",
      vehicle_class: "C",
      other_classes: ["C1", "B1", "B", "G", "G1"],
      vehicle_type: "Heavy Motor Lorry",
    },
    {
      vehicleDescription:
        "Heavy Motor Lorry; combination of motor lorry and trailer...",
      vehicle_class: "CE",
      other_classes: ["C", "C1", "B1", "B", "G1", "J"],
      vehicle_type: "Articulated Lorry / Trailer",
    },
    {
      vehicleDescription:
        "Light Motor Coach; Motor vehicles used for the carriage of persons and having a seating capacity of not less than 9 seats and not more than 33 seats...",
      vehicle_class: "D1",
      other_classes: ["C1", "B1", "B", "G1"],
      vehicle_type: "Light Motor Coach",
    },
    {
      vehicleDescription:
        "Motor Coach where the seating capacity does not exceed 33 seats inclusive of the driver's seat...",
      vehicle_class: "D",
      other_classes: ["D1", "C1", "B1", "B", "G1"],
      vehicle_type: "Motor Coach",
    },
    {
      vehicleDescription:
        "Heavy Motor Coach – Combination of motor coach having a seating capacity of 33 seats inclusive of the driver's seat and its trailer...",
      vehicle_class: "DE",
      other_classes: ["D", "D1", "C", "C1", "E", "B1", "B", "G", "G1"],
      vehicle_type: "Heavy Motor Coach",
    },
    {
      vehicleDescription: "Hand Tractors - Two Wheel Tractor with a Trailer",
      vehicle_class: "G1",
      vehicle_type: "Hand Tractor",
    },
    {
      vehicleDescription:
        "Land vehicle - Agricultural Land vehicle with or without a trailer",
      vehicle_class: "G",
      other_classes: ["G1"],
      vehicle_type: "Agricultural Land Vehicle",
    },
    {
      vehicleDescription:
        "Special purpose Vehicle: Vehicle used for construction, loading & unloading excluding motor lorries...",
      vehicle_class: "J",
      other_classes: ["G1"],
      vehicle_type: "Special Purpose Vehicle",
    },
  ];

  await prisma.vehicleCategory.createMany({
    data: vehicleCategories.map((vc) => ({
      vehicleDescription: vc.vehicleDescription,
      vehicleType: vc.vehicle_type,
      vehicleClass: vc.vehicle_class,
      otherAllowedVehicleClasses: vc?.other_classes,
      validityPeriod: 4, // default validity period, adjust as needed
    })),
    skipDuplicates: true,
  });
}

main()
  .then(() => {
    console.log("Seeding completed.");
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error(e);
    return prisma.$disconnect();
  });

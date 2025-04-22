
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.AddressScalarFieldEnum = {
  id: 'id',
  address: 'address',
  city: 'city',
  district: 'district',
  province: 'province',
  country: 'country',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted'
};

exports.Prisma.MedicalScalarFieldEnum = {
  id: 'id',
  medical_report_photo: 'medical_report_photo',
  blood_group: 'blood_group',
  blood_pressure: 'blood_pressure',
  height: 'height',
  weight: 'weight',
  dateOfBirth: 'dateOfBirth',
  gender: 'gender',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted'
};

exports.Prisma.VehicleCategoryScalarFieldEnum = {
  id: 'id',
  vehicleDescription: 'vehicleDescription',
  vehicleType: 'vehicleType',
  vehicleClass: 'vehicleClass',
  otherAllowedVehicleClasses: 'otherAllowedVehicleClasses',
  validityPeriod: 'validityPeriod',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted'
};

exports.Prisma.LicenseScalarFieldEnum = {
  id: 'id',
  licenseNumber: 'licenseNumber',
  nic: 'nic',
  photo: 'photo',
  nicFront: 'nicFront',
  nicBack: 'nicBack',
  previousLicense: 'previousLicense',
  phone: 'phone',
  firstName: 'firstName',
  lastName: 'lastName',
  licenseType: 'licenseType',
  status: 'status',
  dateOfIssue: 'dateOfIssue',
  dateOfExpiry: 'dateOfExpiry',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted',
  addressId: 'addressId',
  medicalId: 'medicalId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  clerkId: 'clerkId',
  firstName: 'firstName',
  lastName: 'lastName',
  nic: 'nic',
  phone: 'phone',
  email: 'email',
  addressId: 'addressId',
  licenseId: 'licenseId',
  appointmentId: 'appointmentId'
};

exports.Prisma.StaffScalarFieldEnum = {
  id: 'id',
  contactNumber: 'contactNumber',
  email: 'email',
  role: 'role',
  permission: 'permission',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted',
  userId: 'userId'
};

exports.Prisma.LicenseVehicleCategoryScalarFieldEnum = {
  id: 'id',
  dateOfIssue: 'dateOfIssue',
  dateOfExpiry: 'dateOfExpiry',
  categoryStatus: 'categoryStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted',
  vehicleCategoryId: 'vehicleCategoryId',
  licenseId: 'licenseId'
};

exports.Prisma.FineScalarFieldEnum = {
  id: 'id',
  fineCategory: 'fineCategory',
  violationType: 'violationType',
  fineCharge: 'fineCharge',
  provision: 'provision',
  sectionOfAct: 'sectionOfAct',
  violationDescription: 'violationDescription',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  amount: 'amount',
  paymentStatus: 'paymentStatus',
  transactionId: 'transactionId',
  paymentDate: 'paymentDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted',
  issueId: 'issueId',
  fineId: 'fineId'
};

exports.Prisma.IssueScalarFieldEnum = {
  id: 'id',
  paymentId: 'paymentId',
  vehicleNo: 'vehicleNo',
  courtDate: 'courtDate',
  location: 'location',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted',
  fineId: 'fineId',
  enforcerId: 'enforcerId',
  licenseId: 'licenseId'
};

exports.Prisma.AppointmentScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  scheduledAt: 'scheduledAt',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted'
};

exports.Prisma.LogScalarFieldEnum = {
  id: 'id',
  tableName: 'tableName',
  recordId: 'recordId',
  action: 'action',
  oldValue: 'oldValue',
  newValue: 'newValue',
  timestamp: 'timestamp',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  deleted: 'deleted',
  userId: 'userId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Province = exports.$Enums.Province = {
  WESTERN: 'WESTERN',
  CENTRAL: 'CENTRAL',
  SOUTHERN: 'SOUTHERN',
  NORTHERN: 'NORTHERN',
  EASTERN: 'EASTERN',
  NORTHWESTERN: 'NORTHWESTERN',
  NORTHCENTRAL: 'NORTHCENTRAL',
  UVA: 'UVA',
  SABARAGAMUWA: 'SABARAGAMUWA'
};

exports.BloodGroup = exports.$Enums.BloodGroup = {
  A_POS: 'A_POS',
  A_NEG: 'A_NEG',
  B_POS: 'B_POS',
  B_NEG: 'B_NEG',
  AB_POS: 'AB_POS',
  AB_NEG: 'AB_NEG',
  O_POS: 'O_POS',
  O_NEG: 'O_NEG'
};

exports.Gender = exports.$Enums.Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

exports.LicenseType = exports.$Enums.LicenseType = {
  LEARNERSPERMIT: 'LEARNERSPERMIT',
  PERMANENT: 'PERMANENT'
};

exports.LicenseStatus = exports.$Enums.LicenseStatus = {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  SUSPENDED: 'SUSPENDED'
};

exports.Role = exports.$Enums.Role = {
  TRAFFIC_OFFICER: 'TRAFFIC_OFFICER',
  POLICE_SERGEANT: 'POLICE_SERGEANT',
  SENIOR_OFFICER: 'SENIOR_OFFICER',
  ADMIN: 'ADMIN'
};

exports.CategoryStatus = exports.$Enums.CategoryStatus = {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  SUSPENDED: 'SUSPENDED',
  REVOKED: 'REVOKED'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

exports.IssueStatus = exports.$Enums.IssueStatus = {
  ISSUED: 'ISSUED',
  DISPUTED: 'DISPUTED',
  PAID: 'PAID',
  ESCALATED_TO_COURT: 'ESCALATED_TO_COURT',
  WARRANT_ISSUED: 'WARRANT_ISSUED'
};

exports.AppointmentType = exports.$Enums.AppointmentType = {
  RENEWAL: 'RENEWAL',
  DISPUTED: 'DISPUTED',
  COURT: 'COURT'
};

exports.AppointmentStatus = exports.$Enums.AppointmentStatus = {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

exports.Action = exports.$Enums.Action = {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

exports.Prisma.ModelName = {
  Address: 'Address',
  Medical: 'Medical',
  VehicleCategory: 'VehicleCategory',
  License: 'License',
  User: 'User',
  Staff: 'Staff',
  LicenseVehicleCategory: 'LicenseVehicleCategory',
  Fine: 'Fine',
  Payment: 'Payment',
  Issue: 'Issue',
  Appointment: 'Appointment',
  Log: 'Log'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

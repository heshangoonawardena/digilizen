
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Medical
 * 
 */
export type Medical = $Result.DefaultSelection<Prisma.$MedicalPayload>
/**
 * Model VehicleCategory
 * 
 */
export type VehicleCategory = $Result.DefaultSelection<Prisma.$VehicleCategoryPayload>
/**
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Staff
 * 
 */
export type Staff = $Result.DefaultSelection<Prisma.$StaffPayload>
/**
 * Model LicenseVehicleCategory
 * 
 */
export type LicenseVehicleCategory = $Result.DefaultSelection<Prisma.$LicenseVehicleCategoryPayload>
/**
 * Model Fine
 * 
 */
export type Fine = $Result.DefaultSelection<Prisma.$FinePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Issue
 * 
 */
export type Issue = $Result.DefaultSelection<Prisma.$IssuePayload>
/**
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model Log
 * 
 */
export type Log = $Result.DefaultSelection<Prisma.$LogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Province: {
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

export type Province = (typeof Province)[keyof typeof Province]


export const LicenseType: {
  LEARNERSPERMIT: 'LEARNERSPERMIT',
  PERMANENT: 'PERMANENT'
};

export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType]


export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const LicenseStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  SUSPENDED: 'SUSPENDED'
};

export type LicenseStatus = (typeof LicenseStatus)[keyof typeof LicenseStatus]


export const CategoryStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  SUSPENDED: 'SUSPENDED',
  REVOKED: 'REVOKED'
};

export type CategoryStatus = (typeof CategoryStatus)[keyof typeof CategoryStatus]


export const Role: {
  TRAFFIC_OFFICER: 'TRAFFIC_OFFICER',
  POLICE_SERGEANT: 'POLICE_SERGEANT',
  SENIOR_OFFICER: 'SENIOR_OFFICER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const IssueStatus: {
  ISSUED: 'ISSUED',
  DISPUTED: 'DISPUTED',
  PAID: 'PAID',
  ESCALATED_TO_COURT: 'ESCALATED_TO_COURT',
  WARRANT_ISSUED: 'WARRANT_ISSUED'
};

export type IssueStatus = (typeof IssueStatus)[keyof typeof IssueStatus]


export const AppointmentType: {
  RENEWAL: 'RENEWAL',
  DISPUTED: 'DISPUTED',
  COURT: 'COURT'
};

export type AppointmentType = (typeof AppointmentType)[keyof typeof AppointmentType]


export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const Action: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type Action = (typeof Action)[keyof typeof Action]


export const BloodGroup: {
  A_POS: 'A_POS',
  A_NEG: 'A_NEG',
  B_POS: 'B_POS',
  B_NEG: 'B_NEG',
  AB_POS: 'AB_POS',
  AB_NEG: 'AB_NEG',
  O_POS: 'O_POS',
  O_NEG: 'O_NEG'
};

export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup]

}

export type Province = $Enums.Province

export const Province: typeof $Enums.Province

export type LicenseType = $Enums.LicenseType

export const LicenseType: typeof $Enums.LicenseType

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type LicenseStatus = $Enums.LicenseStatus

export const LicenseStatus: typeof $Enums.LicenseStatus

export type CategoryStatus = $Enums.CategoryStatus

export const CategoryStatus: typeof $Enums.CategoryStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type IssueStatus = $Enums.IssueStatus

export const IssueStatus: typeof $Enums.IssueStatus

export type AppointmentType = $Enums.AppointmentType

export const AppointmentType: typeof $Enums.AppointmentType

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type Action = $Enums.Action

export const Action: typeof $Enums.Action

export type BloodGroup = $Enums.BloodGroup

export const BloodGroup: typeof $Enums.BloodGroup

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medical`: Exposes CRUD operations for the **Medical** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicals
    * const medicals = await prisma.medical.findMany()
    * ```
    */
  get medical(): Prisma.MedicalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleCategory`: Exposes CRUD operations for the **VehicleCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleCategories
    * const vehicleCategories = await prisma.vehicleCategory.findMany()
    * ```
    */
  get vehicleCategory(): Prisma.VehicleCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **Staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.StaffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.licenseVehicleCategory`: Exposes CRUD operations for the **LicenseVehicleCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseVehicleCategories
    * const licenseVehicleCategories = await prisma.licenseVehicleCategory.findMany()
    * ```
    */
  get licenseVehicleCategory(): Prisma.LicenseVehicleCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fine`: Exposes CRUD operations for the **Fine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fines
    * const fines = await prisma.fine.findMany()
    * ```
    */
  get fine(): Prisma.FineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issue.findMany()
    * ```
    */
  get issue(): Prisma.IssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log`: Exposes CRUD operations for the **Log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.log.findMany()
    * ```
    */
  get log(): Prisma.LogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "address" | "medical" | "vehicleCategory" | "license" | "user" | "staff" | "licenseVehicleCategory" | "fine" | "payment" | "issue" | "appointment" | "log"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Medical: {
        payload: Prisma.$MedicalPayload<ExtArgs>
        fields: Prisma.MedicalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          findFirst: {
            args: Prisma.MedicalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          findMany: {
            args: Prisma.MedicalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>[]
          }
          create: {
            args: Prisma.MedicalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          createMany: {
            args: Prisma.MedicalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>[]
          }
          delete: {
            args: Prisma.MedicalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          update: {
            args: Prisma.MedicalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          deleteMany: {
            args: Prisma.MedicalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>[]
          }
          upsert: {
            args: Prisma.MedicalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicalPayload>
          }
          aggregate: {
            args: Prisma.MedicalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedical>
          }
          groupBy: {
            args: Prisma.MedicalGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicalGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicalCountArgs<ExtArgs>
            result: $Utils.Optional<MedicalCountAggregateOutputType> | number
          }
        }
      }
      VehicleCategory: {
        payload: Prisma.$VehicleCategoryPayload<ExtArgs>
        fields: Prisma.VehicleCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload>
          }
          findFirst: {
            args: Prisma.VehicleCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload>
          }
          findMany: {
            args: Prisma.VehicleCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload>[]
          }
          create: {
            args: Prisma.VehicleCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload>
          }
          createMany: {
            args: Prisma.VehicleCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload>[]
          }
          delete: {
            args: Prisma.VehicleCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload>
          }
          update: {
            args: Prisma.VehicleCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload>
          }
          deleteMany: {
            args: Prisma.VehicleCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload>[]
          }
          upsert: {
            args: Prisma.VehicleCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleCategoryPayload>
          }
          aggregate: {
            args: Prisma.VehicleCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleCategory>
          }
          groupBy: {
            args: Prisma.VehicleCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCategoryCountAggregateOutputType> | number
          }
        }
      }
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Staff: {
        payload: Prisma.$StaffPayload<ExtArgs>
        fields: Prisma.StaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findFirst: {
            args: Prisma.StaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          findMany: {
            args: Prisma.StaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          create: {
            args: Prisma.StaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          createMany: {
            args: Prisma.StaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          delete: {
            args: Prisma.StaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          update: {
            args: Prisma.StaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          deleteMany: {
            args: Prisma.StaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>[]
          }
          upsert: {
            args: Prisma.StaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.StaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      LicenseVehicleCategory: {
        payload: Prisma.$LicenseVehicleCategoryPayload<ExtArgs>
        fields: Prisma.LicenseVehicleCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseVehicleCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseVehicleCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload>
          }
          findFirst: {
            args: Prisma.LicenseVehicleCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseVehicleCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload>
          }
          findMany: {
            args: Prisma.LicenseVehicleCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload>[]
          }
          create: {
            args: Prisma.LicenseVehicleCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload>
          }
          createMany: {
            args: Prisma.LicenseVehicleCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseVehicleCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload>[]
          }
          delete: {
            args: Prisma.LicenseVehicleCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload>
          }
          update: {
            args: Prisma.LicenseVehicleCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload>
          }
          deleteMany: {
            args: Prisma.LicenseVehicleCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseVehicleCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenseVehicleCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload>[]
          }
          upsert: {
            args: Prisma.LicenseVehicleCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseVehicleCategoryPayload>
          }
          aggregate: {
            args: Prisma.LicenseVehicleCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseVehicleCategory>
          }
          groupBy: {
            args: Prisma.LicenseVehicleCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseVehicleCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseVehicleCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseVehicleCategoryCountAggregateOutputType> | number
          }
        }
      }
      Fine: {
        payload: Prisma.$FinePayload<ExtArgs>
        fields: Prisma.FineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          findFirst: {
            args: Prisma.FineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          findMany: {
            args: Prisma.FineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          create: {
            args: Prisma.FineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          createMany: {
            args: Prisma.FineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          delete: {
            args: Prisma.FineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          update: {
            args: Prisma.FineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          deleteMany: {
            args: Prisma.FineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>[]
          }
          upsert: {
            args: Prisma.FineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinePayload>
          }
          aggregate: {
            args: Prisma.FineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFine>
          }
          groupBy: {
            args: Prisma.FineGroupByArgs<ExtArgs>
            result: $Utils.Optional<FineGroupByOutputType>[]
          }
          count: {
            args: Prisma.FineCountArgs<ExtArgs>
            result: $Utils.Optional<FineCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Issue: {
        payload: Prisma.$IssuePayload<ExtArgs>
        fields: Prisma.IssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findFirst: {
            args: Prisma.IssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findMany: {
            args: Prisma.IssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          create: {
            args: Prisma.IssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          createMany: {
            args: Prisma.IssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          delete: {
            args: Prisma.IssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          update: {
            args: Prisma.IssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          deleteMany: {
            args: Prisma.IssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          upsert: {
            args: Prisma.IssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          aggregate: {
            args: Prisma.IssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssue>
          }
          groupBy: {
            args: Prisma.IssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueCountArgs<ExtArgs>
            result: $Utils.Optional<IssueCountAggregateOutputType> | number
          }
        }
      }
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppointmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppointmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      Log: {
        payload: Prisma.$LogPayload<ExtArgs>
        fields: Prisma.LogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findFirst: {
            args: Prisma.LogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          findMany: {
            args: Prisma.LogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          create: {
            args: Prisma.LogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          createMany: {
            args: Prisma.LogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          delete: {
            args: Prisma.LogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          update: {
            args: Prisma.LogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          deleteMany: {
            args: Prisma.LogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>[]
          }
          upsert: {
            args: Prisma.LogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogPayload>
          }
          aggregate: {
            args: Prisma.LogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog>
          }
          groupBy: {
            args: Prisma.LogGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogCountArgs<ExtArgs>
            result: $Utils.Optional<LogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    address?: AddressOmit
    medical?: MedicalOmit
    vehicleCategory?: VehicleCategoryOmit
    license?: LicenseOmit
    user?: UserOmit
    staff?: StaffOmit
    licenseVehicleCategory?: LicenseVehicleCategoryOmit
    fine?: FineOmit
    payment?: PaymentOmit
    issue?: IssueOmit
    appointment?: AppointmentOmit
    log?: LogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type VehicleCategoryCountOutputType
   */

  export type VehicleCategoryCountOutputType = {
    licenseVehicleCategories: number
  }

  export type VehicleCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenseVehicleCategories?: boolean | VehicleCategoryCountOutputTypeCountLicenseVehicleCategoriesArgs
  }

  // Custom InputTypes
  /**
   * VehicleCategoryCountOutputType without action
   */
  export type VehicleCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategoryCountOutputType
     */
    select?: VehicleCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCategoryCountOutputType without action
   */
  export type VehicleCategoryCountOutputTypeCountLicenseVehicleCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseVehicleCategoryWhereInput
  }


  /**
   * Count Type LicenseCountOutputType
   */

  export type LicenseCountOutputType = {
    issues: number
    licenseVehicleCategories: number
  }

  export type LicenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | LicenseCountOutputTypeCountIssuesArgs
    licenseVehicleCategories?: boolean | LicenseCountOutputTypeCountLicenseVehicleCategoriesArgs
  }

  // Custom InputTypes
  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseCountOutputType
     */
    select?: LicenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountLicenseVehicleCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseVehicleCategoryWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UserCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    issues: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | StaffCountOutputTypeCountIssuesArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }


  /**
   * Count Type FineCountOutputType
   */

  export type FineCountOutputType = {
    issues: number
    payments: number
  }

  export type FineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | FineCountOutputTypeCountIssuesArgs
    payments?: boolean | FineCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * FineCountOutputType without action
   */
  export type FineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FineCountOutputType
     */
    select?: FineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FineCountOutputType without action
   */
  export type FineCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }

  /**
   * FineCountOutputType without action
   */
  export type FineCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    users: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AppointmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    address: string | null
    city: string | null
    district: string | null
    province: $Enums.Province | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    address: string | null
    city: string | null
    district: string | null
    province: $Enums.Province | null
    country: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    address: number
    city: number
    district: number
    province: number
    country: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    district?: true
    province?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    district?: true
    province?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    district?: true
    province?: true
    country?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: string
    address: string
    city: string
    district: string
    province: $Enums.Province
    country: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    district?: boolean
    province?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
    License?: boolean | Address$LicenseArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    district?: boolean
    province?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    district?: boolean
    province?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    district?: boolean
    province?: boolean
    country?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "district" | "province" | "country" | "createdAt" | "updatedAt" | "deletedAt" | "deleted", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
    License?: boolean | Address$LicenseArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      License: Prisma.$LicensePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string
      city: string
      district: string
      province: $Enums.Province
      country: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Address$userArgs<ExtArgs> = {}>(args?: Subset<T, Address$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    License<T extends Address$LicenseArgs<ExtArgs> = {}>(args?: Subset<T, Address$LicenseArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */ 
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'String'>
    readonly address: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly district: FieldRef<"Address", 'String'>
    readonly province: FieldRef<"Address", 'Province'>
    readonly country: FieldRef<"Address", 'String'>
    readonly createdAt: FieldRef<"Address", 'DateTime'>
    readonly updatedAt: FieldRef<"Address", 'DateTime'>
    readonly deletedAt: FieldRef<"Address", 'DateTime'>
    readonly deleted: FieldRef<"Address", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.user
   */
  export type Address$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Address.License
   */
  export type Address$LicenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Medical
   */

  export type AggregateMedical = {
    _count: MedicalCountAggregateOutputType | null
    _min: MedicalMinAggregateOutputType | null
    _max: MedicalMaxAggregateOutputType | null
  }

  export type MedicalMinAggregateOutputType = {
    id: string | null
    medical_report_photo: string | null
    blood_group: $Enums.BloodGroup | null
    blood_pressure: string | null
    height: string | null
    weight: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
  }

  export type MedicalMaxAggregateOutputType = {
    id: string | null
    medical_report_photo: string | null
    blood_group: $Enums.BloodGroup | null
    blood_pressure: string | null
    height: string | null
    weight: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
  }

  export type MedicalCountAggregateOutputType = {
    id: number
    medical_report_photo: number
    blood_group: number
    blood_pressure: number
    height: number
    weight: number
    dateOfBirth: number
    gender: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    _all: number
  }


  export type MedicalMinAggregateInputType = {
    id?: true
    medical_report_photo?: true
    blood_group?: true
    blood_pressure?: true
    height?: true
    weight?: true
    dateOfBirth?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
  }

  export type MedicalMaxAggregateInputType = {
    id?: true
    medical_report_photo?: true
    blood_group?: true
    blood_pressure?: true
    height?: true
    weight?: true
    dateOfBirth?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
  }

  export type MedicalCountAggregateInputType = {
    id?: true
    medical_report_photo?: true
    blood_group?: true
    blood_pressure?: true
    height?: true
    weight?: true
    dateOfBirth?: true
    gender?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    _all?: true
  }

  export type MedicalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medical to aggregate.
     */
    where?: MedicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicals to fetch.
     */
    orderBy?: MedicalOrderByWithRelationInput | MedicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicals
    **/
    _count?: true | MedicalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicalMaxAggregateInputType
  }

  export type GetMedicalAggregateType<T extends MedicalAggregateArgs> = {
        [P in keyof T & keyof AggregateMedical]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedical[P]>
      : GetScalarType<T[P], AggregateMedical[P]>
  }




  export type MedicalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicalWhereInput
    orderBy?: MedicalOrderByWithAggregationInput | MedicalOrderByWithAggregationInput[]
    by: MedicalScalarFieldEnum[] | MedicalScalarFieldEnum
    having?: MedicalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicalCountAggregateInputType | true
    _min?: MedicalMinAggregateInputType
    _max?: MedicalMaxAggregateInputType
  }

  export type MedicalGroupByOutputType = {
    id: string
    medical_report_photo: string
    blood_group: $Enums.BloodGroup
    blood_pressure: string
    height: string
    weight: string
    dateOfBirth: Date
    gender: $Enums.Gender
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    _count: MedicalCountAggregateOutputType | null
    _min: MedicalMinAggregateOutputType | null
    _max: MedicalMaxAggregateOutputType | null
  }

  type GetMedicalGroupByPayload<T extends MedicalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicalGroupByOutputType[P]>
            : GetScalarType<T[P], MedicalGroupByOutputType[P]>
        }
      >
    >


  export type MedicalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medical_report_photo?: boolean
    blood_group?: boolean
    blood_pressure?: boolean
    height?: boolean
    weight?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    license?: boolean | Medical$licenseArgs<ExtArgs>
  }, ExtArgs["result"]["medical"]>

  export type MedicalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medical_report_photo?: boolean
    blood_group?: boolean
    blood_pressure?: boolean
    height?: boolean
    weight?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["medical"]>

  export type MedicalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medical_report_photo?: boolean
    blood_group?: boolean
    blood_pressure?: boolean
    height?: boolean
    weight?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["medical"]>

  export type MedicalSelectScalar = {
    id?: boolean
    medical_report_photo?: boolean
    blood_group?: boolean
    blood_pressure?: boolean
    height?: boolean
    weight?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }

  export type MedicalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medical_report_photo" | "blood_group" | "blood_pressure" | "height" | "weight" | "dateOfBirth" | "gender" | "createdAt" | "updatedAt" | "deletedAt" | "deleted", ExtArgs["result"]["medical"]>
  export type MedicalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | Medical$licenseArgs<ExtArgs>
  }
  export type MedicalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medical"
    objects: {
      license: Prisma.$LicensePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medical_report_photo: string
      blood_group: $Enums.BloodGroup
      blood_pressure: string
      height: string
      weight: string
      dateOfBirth: Date
      gender: $Enums.Gender
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
    }, ExtArgs["result"]["medical"]>
    composites: {}
  }

  type MedicalGetPayload<S extends boolean | null | undefined | MedicalDefaultArgs> = $Result.GetResult<Prisma.$MedicalPayload, S>

  type MedicalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicalCountAggregateInputType | true
    }

  export interface MedicalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medical'], meta: { name: 'Medical' } }
    /**
     * Find zero or one Medical that matches the filter.
     * @param {MedicalFindUniqueArgs} args - Arguments to find a Medical
     * @example
     * // Get one Medical
     * const medical = await prisma.medical.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicalFindUniqueArgs>(args: SelectSubset<T, MedicalFindUniqueArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medical that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicalFindUniqueOrThrowArgs} args - Arguments to find a Medical
     * @example
     * // Get one Medical
     * const medical = await prisma.medical.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicalFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medical that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalFindFirstArgs} args - Arguments to find a Medical
     * @example
     * // Get one Medical
     * const medical = await prisma.medical.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicalFindFirstArgs>(args?: SelectSubset<T, MedicalFindFirstArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medical that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalFindFirstOrThrowArgs} args - Arguments to find a Medical
     * @example
     * // Get one Medical
     * const medical = await prisma.medical.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicalFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicalFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicals
     * const medicals = await prisma.medical.findMany()
     * 
     * // Get first 10 Medicals
     * const medicals = await prisma.medical.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicalWithIdOnly = await prisma.medical.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicalFindManyArgs>(args?: SelectSubset<T, MedicalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medical.
     * @param {MedicalCreateArgs} args - Arguments to create a Medical.
     * @example
     * // Create one Medical
     * const Medical = await prisma.medical.create({
     *   data: {
     *     // ... data to create a Medical
     *   }
     * })
     * 
     */
    create<T extends MedicalCreateArgs>(args: SelectSubset<T, MedicalCreateArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicals.
     * @param {MedicalCreateManyArgs} args - Arguments to create many Medicals.
     * @example
     * // Create many Medicals
     * const medical = await prisma.medical.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicalCreateManyArgs>(args?: SelectSubset<T, MedicalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicals and returns the data saved in the database.
     * @param {MedicalCreateManyAndReturnArgs} args - Arguments to create many Medicals.
     * @example
     * // Create many Medicals
     * const medical = await prisma.medical.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicals and only return the `id`
     * const medicalWithIdOnly = await prisma.medical.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicalCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medical.
     * @param {MedicalDeleteArgs} args - Arguments to delete one Medical.
     * @example
     * // Delete one Medical
     * const Medical = await prisma.medical.delete({
     *   where: {
     *     // ... filter to delete one Medical
     *   }
     * })
     * 
     */
    delete<T extends MedicalDeleteArgs>(args: SelectSubset<T, MedicalDeleteArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medical.
     * @param {MedicalUpdateArgs} args - Arguments to update one Medical.
     * @example
     * // Update one Medical
     * const medical = await prisma.medical.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicalUpdateArgs>(args: SelectSubset<T, MedicalUpdateArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicals.
     * @param {MedicalDeleteManyArgs} args - Arguments to filter Medicals to delete.
     * @example
     * // Delete a few Medicals
     * const { count } = await prisma.medical.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicalDeleteManyArgs>(args?: SelectSubset<T, MedicalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicals
     * const medical = await prisma.medical.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicalUpdateManyArgs>(args: SelectSubset<T, MedicalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicals and returns the data updated in the database.
     * @param {MedicalUpdateManyAndReturnArgs} args - Arguments to update many Medicals.
     * @example
     * // Update many Medicals
     * const medical = await prisma.medical.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicals and only return the `id`
     * const medicalWithIdOnly = await prisma.medical.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicalUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medical.
     * @param {MedicalUpsertArgs} args - Arguments to update or create a Medical.
     * @example
     * // Update or create a Medical
     * const medical = await prisma.medical.upsert({
     *   create: {
     *     // ... data to create a Medical
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medical we want to update
     *   }
     * })
     */
    upsert<T extends MedicalUpsertArgs>(args: SelectSubset<T, MedicalUpsertArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalCountArgs} args - Arguments to filter Medicals to count.
     * @example
     * // Count the number of Medicals
     * const count = await prisma.medical.count({
     *   where: {
     *     // ... the filter for the Medicals we want to count
     *   }
     * })
    **/
    count<T extends MedicalCountArgs>(
      args?: Subset<T, MedicalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medical.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicalAggregateArgs>(args: Subset<T, MedicalAggregateArgs>): Prisma.PrismaPromise<GetMedicalAggregateType<T>>

    /**
     * Group by Medical.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicalGroupByArgs['orderBy'] }
        : { orderBy?: MedicalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medical model
   */
  readonly fields: MedicalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medical.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    license<T extends Medical$licenseArgs<ExtArgs> = {}>(args?: Subset<T, Medical$licenseArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medical model
   */ 
  interface MedicalFieldRefs {
    readonly id: FieldRef<"Medical", 'String'>
    readonly medical_report_photo: FieldRef<"Medical", 'String'>
    readonly blood_group: FieldRef<"Medical", 'BloodGroup'>
    readonly blood_pressure: FieldRef<"Medical", 'String'>
    readonly height: FieldRef<"Medical", 'String'>
    readonly weight: FieldRef<"Medical", 'String'>
    readonly dateOfBirth: FieldRef<"Medical", 'DateTime'>
    readonly gender: FieldRef<"Medical", 'Gender'>
    readonly createdAt: FieldRef<"Medical", 'DateTime'>
    readonly updatedAt: FieldRef<"Medical", 'DateTime'>
    readonly deletedAt: FieldRef<"Medical", 'DateTime'>
    readonly deleted: FieldRef<"Medical", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Medical findUnique
   */
  export type MedicalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalInclude<ExtArgs> | null
    /**
     * Filter, which Medical to fetch.
     */
    where: MedicalWhereUniqueInput
  }

  /**
   * Medical findUniqueOrThrow
   */
  export type MedicalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalInclude<ExtArgs> | null
    /**
     * Filter, which Medical to fetch.
     */
    where: MedicalWhereUniqueInput
  }

  /**
   * Medical findFirst
   */
  export type MedicalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalInclude<ExtArgs> | null
    /**
     * Filter, which Medical to fetch.
     */
    where?: MedicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicals to fetch.
     */
    orderBy?: MedicalOrderByWithRelationInput | MedicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicals.
     */
    cursor?: MedicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicals.
     */
    distinct?: MedicalScalarFieldEnum | MedicalScalarFieldEnum[]
  }

  /**
   * Medical findFirstOrThrow
   */
  export type MedicalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalInclude<ExtArgs> | null
    /**
     * Filter, which Medical to fetch.
     */
    where?: MedicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicals to fetch.
     */
    orderBy?: MedicalOrderByWithRelationInput | MedicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicals.
     */
    cursor?: MedicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicals.
     */
    distinct?: MedicalScalarFieldEnum | MedicalScalarFieldEnum[]
  }

  /**
   * Medical findMany
   */
  export type MedicalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalInclude<ExtArgs> | null
    /**
     * Filter, which Medicals to fetch.
     */
    where?: MedicalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicals to fetch.
     */
    orderBy?: MedicalOrderByWithRelationInput | MedicalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicals.
     */
    cursor?: MedicalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicals.
     */
    skip?: number
    distinct?: MedicalScalarFieldEnum | MedicalScalarFieldEnum[]
  }

  /**
   * Medical create
   */
  export type MedicalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalInclude<ExtArgs> | null
    /**
     * The data needed to create a Medical.
     */
    data: XOR<MedicalCreateInput, MedicalUncheckedCreateInput>
  }

  /**
   * Medical createMany
   */
  export type MedicalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicals.
     */
    data: MedicalCreateManyInput | MedicalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medical createManyAndReturn
   */
  export type MedicalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * The data used to create many Medicals.
     */
    data: MedicalCreateManyInput | MedicalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medical update
   */
  export type MedicalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalInclude<ExtArgs> | null
    /**
     * The data needed to update a Medical.
     */
    data: XOR<MedicalUpdateInput, MedicalUncheckedUpdateInput>
    /**
     * Choose, which Medical to update.
     */
    where: MedicalWhereUniqueInput
  }

  /**
   * Medical updateMany
   */
  export type MedicalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicals.
     */
    data: XOR<MedicalUpdateManyMutationInput, MedicalUncheckedUpdateManyInput>
    /**
     * Filter which Medicals to update
     */
    where?: MedicalWhereInput
    /**
     * Limit how many Medicals to update.
     */
    limit?: number
  }

  /**
   * Medical updateManyAndReturn
   */
  export type MedicalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * The data used to update Medicals.
     */
    data: XOR<MedicalUpdateManyMutationInput, MedicalUncheckedUpdateManyInput>
    /**
     * Filter which Medicals to update
     */
    where?: MedicalWhereInput
    /**
     * Limit how many Medicals to update.
     */
    limit?: number
  }

  /**
   * Medical upsert
   */
  export type MedicalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalInclude<ExtArgs> | null
    /**
     * The filter to search for the Medical to update in case it exists.
     */
    where: MedicalWhereUniqueInput
    /**
     * In case the Medical found by the `where` argument doesn't exist, create a new Medical with this data.
     */
    create: XOR<MedicalCreateInput, MedicalUncheckedCreateInput>
    /**
     * In case the Medical was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicalUpdateInput, MedicalUncheckedUpdateInput>
  }

  /**
   * Medical delete
   */
  export type MedicalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalInclude<ExtArgs> | null
    /**
     * Filter which Medical to delete.
     */
    where: MedicalWhereUniqueInput
  }

  /**
   * Medical deleteMany
   */
  export type MedicalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicals to delete
     */
    where?: MedicalWhereInput
    /**
     * Limit how many Medicals to delete.
     */
    limit?: number
  }

  /**
   * Medical.license
   */
  export type Medical$licenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
  }

  /**
   * Medical without action
   */
  export type MedicalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medical
     */
    select?: MedicalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medical
     */
    omit?: MedicalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicalInclude<ExtArgs> | null
  }


  /**
   * Model VehicleCategory
   */

  export type AggregateVehicleCategory = {
    _count: VehicleCategoryCountAggregateOutputType | null
    _avg: VehicleCategoryAvgAggregateOutputType | null
    _sum: VehicleCategorySumAggregateOutputType | null
    _min: VehicleCategoryMinAggregateOutputType | null
    _max: VehicleCategoryMaxAggregateOutputType | null
  }

  export type VehicleCategoryAvgAggregateOutputType = {
    validityPeriod: number | null
  }

  export type VehicleCategorySumAggregateOutputType = {
    validityPeriod: number | null
  }

  export type VehicleCategoryMinAggregateOutputType = {
    id: string | null
    vehicleDescription: string | null
    vehicleType: string | null
    vehicleClass: string | null
    validityPeriod: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
  }

  export type VehicleCategoryMaxAggregateOutputType = {
    id: string | null
    vehicleDescription: string | null
    vehicleType: string | null
    vehicleClass: string | null
    validityPeriod: number | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
  }

  export type VehicleCategoryCountAggregateOutputType = {
    id: number
    vehicleDescription: number
    vehicleType: number
    vehicleClass: number
    otherAllowedVehicleClasses: number
    validityPeriod: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    _all: number
  }


  export type VehicleCategoryAvgAggregateInputType = {
    validityPeriod?: true
  }

  export type VehicleCategorySumAggregateInputType = {
    validityPeriod?: true
  }

  export type VehicleCategoryMinAggregateInputType = {
    id?: true
    vehicleDescription?: true
    vehicleType?: true
    vehicleClass?: true
    validityPeriod?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
  }

  export type VehicleCategoryMaxAggregateInputType = {
    id?: true
    vehicleDescription?: true
    vehicleType?: true
    vehicleClass?: true
    validityPeriod?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
  }

  export type VehicleCategoryCountAggregateInputType = {
    id?: true
    vehicleDescription?: true
    vehicleType?: true
    vehicleClass?: true
    otherAllowedVehicleClasses?: true
    validityPeriod?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    _all?: true
  }

  export type VehicleCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleCategory to aggregate.
     */
    where?: VehicleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleCategories to fetch.
     */
    orderBy?: VehicleCategoryOrderByWithRelationInput | VehicleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleCategories
    **/
    _count?: true | VehicleCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleCategoryMaxAggregateInputType
  }

  export type GetVehicleCategoryAggregateType<T extends VehicleCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleCategory[P]>
      : GetScalarType<T[P], AggregateVehicleCategory[P]>
  }




  export type VehicleCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleCategoryWhereInput
    orderBy?: VehicleCategoryOrderByWithAggregationInput | VehicleCategoryOrderByWithAggregationInput[]
    by: VehicleCategoryScalarFieldEnum[] | VehicleCategoryScalarFieldEnum
    having?: VehicleCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCategoryCountAggregateInputType | true
    _avg?: VehicleCategoryAvgAggregateInputType
    _sum?: VehicleCategorySumAggregateInputType
    _min?: VehicleCategoryMinAggregateInputType
    _max?: VehicleCategoryMaxAggregateInputType
  }

  export type VehicleCategoryGroupByOutputType = {
    id: string
    vehicleDescription: string
    vehicleType: string
    vehicleClass: string
    otherAllowedVehicleClasses: string[]
    validityPeriod: number
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    _count: VehicleCategoryCountAggregateOutputType | null
    _avg: VehicleCategoryAvgAggregateOutputType | null
    _sum: VehicleCategorySumAggregateOutputType | null
    _min: VehicleCategoryMinAggregateOutputType | null
    _max: VehicleCategoryMaxAggregateOutputType | null
  }

  type GetVehicleCategoryGroupByPayload<T extends VehicleCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleCategoryGroupByOutputType[P]>
        }
      >
    >


  export type VehicleCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleDescription?: boolean
    vehicleType?: boolean
    vehicleClass?: boolean
    otherAllowedVehicleClasses?: boolean
    validityPeriod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    licenseVehicleCategories?: boolean | VehicleCategory$licenseVehicleCategoriesArgs<ExtArgs>
    _count?: boolean | VehicleCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleCategory"]>

  export type VehicleCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleDescription?: boolean
    vehicleType?: boolean
    vehicleClass?: boolean
    otherAllowedVehicleClasses?: boolean
    validityPeriod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["vehicleCategory"]>

  export type VehicleCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicleDescription?: boolean
    vehicleType?: boolean
    vehicleClass?: boolean
    otherAllowedVehicleClasses?: boolean
    validityPeriod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["vehicleCategory"]>

  export type VehicleCategorySelectScalar = {
    id?: boolean
    vehicleDescription?: boolean
    vehicleType?: boolean
    vehicleClass?: boolean
    otherAllowedVehicleClasses?: boolean
    validityPeriod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }

  export type VehicleCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicleDescription" | "vehicleType" | "vehicleClass" | "otherAllowedVehicleClasses" | "validityPeriod" | "createdAt" | "updatedAt" | "deletedAt" | "deleted", ExtArgs["result"]["vehicleCategory"]>
  export type VehicleCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenseVehicleCategories?: boolean | VehicleCategory$licenseVehicleCategoriesArgs<ExtArgs>
    _count?: boolean | VehicleCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehicleCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleCategory"
    objects: {
      licenseVehicleCategories: Prisma.$LicenseVehicleCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicleDescription: string
      vehicleType: string
      vehicleClass: string
      otherAllowedVehicleClasses: string[]
      validityPeriod: number
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
    }, ExtArgs["result"]["vehicleCategory"]>
    composites: {}
  }

  type VehicleCategoryGetPayload<S extends boolean | null | undefined | VehicleCategoryDefaultArgs> = $Result.GetResult<Prisma.$VehicleCategoryPayload, S>

  type VehicleCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCategoryCountAggregateInputType | true
    }

  export interface VehicleCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleCategory'], meta: { name: 'VehicleCategory' } }
    /**
     * Find zero or one VehicleCategory that matches the filter.
     * @param {VehicleCategoryFindUniqueArgs} args - Arguments to find a VehicleCategory
     * @example
     * // Get one VehicleCategory
     * const vehicleCategory = await prisma.vehicleCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleCategoryFindUniqueArgs>(args: SelectSubset<T, VehicleCategoryFindUniqueArgs<ExtArgs>>): Prisma__VehicleCategoryClient<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleCategoryFindUniqueOrThrowArgs} args - Arguments to find a VehicleCategory
     * @example
     * // Get one VehicleCategory
     * const vehicleCategory = await prisma.vehicleCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleCategoryClient<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCategoryFindFirstArgs} args - Arguments to find a VehicleCategory
     * @example
     * // Get one VehicleCategory
     * const vehicleCategory = await prisma.vehicleCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleCategoryFindFirstArgs>(args?: SelectSubset<T, VehicleCategoryFindFirstArgs<ExtArgs>>): Prisma__VehicleCategoryClient<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCategoryFindFirstOrThrowArgs} args - Arguments to find a VehicleCategory
     * @example
     * // Get one VehicleCategory
     * const vehicleCategory = await prisma.vehicleCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleCategoryClient<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleCategories
     * const vehicleCategories = await prisma.vehicleCategory.findMany()
     * 
     * // Get first 10 VehicleCategories
     * const vehicleCategories = await prisma.vehicleCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleCategoryWithIdOnly = await prisma.vehicleCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleCategoryFindManyArgs>(args?: SelectSubset<T, VehicleCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleCategory.
     * @param {VehicleCategoryCreateArgs} args - Arguments to create a VehicleCategory.
     * @example
     * // Create one VehicleCategory
     * const VehicleCategory = await prisma.vehicleCategory.create({
     *   data: {
     *     // ... data to create a VehicleCategory
     *   }
     * })
     * 
     */
    create<T extends VehicleCategoryCreateArgs>(args: SelectSubset<T, VehicleCategoryCreateArgs<ExtArgs>>): Prisma__VehicleCategoryClient<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleCategories.
     * @param {VehicleCategoryCreateManyArgs} args - Arguments to create many VehicleCategories.
     * @example
     * // Create many VehicleCategories
     * const vehicleCategory = await prisma.vehicleCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCategoryCreateManyArgs>(args?: SelectSubset<T, VehicleCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleCategories and returns the data saved in the database.
     * @param {VehicleCategoryCreateManyAndReturnArgs} args - Arguments to create many VehicleCategories.
     * @example
     * // Create many VehicleCategories
     * const vehicleCategory = await prisma.vehicleCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleCategories and only return the `id`
     * const vehicleCategoryWithIdOnly = await prisma.vehicleCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleCategory.
     * @param {VehicleCategoryDeleteArgs} args - Arguments to delete one VehicleCategory.
     * @example
     * // Delete one VehicleCategory
     * const VehicleCategory = await prisma.vehicleCategory.delete({
     *   where: {
     *     // ... filter to delete one VehicleCategory
     *   }
     * })
     * 
     */
    delete<T extends VehicleCategoryDeleteArgs>(args: SelectSubset<T, VehicleCategoryDeleteArgs<ExtArgs>>): Prisma__VehicleCategoryClient<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleCategory.
     * @param {VehicleCategoryUpdateArgs} args - Arguments to update one VehicleCategory.
     * @example
     * // Update one VehicleCategory
     * const vehicleCategory = await prisma.vehicleCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleCategoryUpdateArgs>(args: SelectSubset<T, VehicleCategoryUpdateArgs<ExtArgs>>): Prisma__VehicleCategoryClient<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleCategories.
     * @param {VehicleCategoryDeleteManyArgs} args - Arguments to filter VehicleCategories to delete.
     * @example
     * // Delete a few VehicleCategories
     * const { count } = await prisma.vehicleCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleCategoryDeleteManyArgs>(args?: SelectSubset<T, VehicleCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleCategories
     * const vehicleCategory = await prisma.vehicleCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleCategoryUpdateManyArgs>(args: SelectSubset<T, VehicleCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleCategories and returns the data updated in the database.
     * @param {VehicleCategoryUpdateManyAndReturnArgs} args - Arguments to update many VehicleCategories.
     * @example
     * // Update many VehicleCategories
     * const vehicleCategory = await prisma.vehicleCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleCategories and only return the `id`
     * const vehicleCategoryWithIdOnly = await prisma.vehicleCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehicleCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleCategory.
     * @param {VehicleCategoryUpsertArgs} args - Arguments to update or create a VehicleCategory.
     * @example
     * // Update or create a VehicleCategory
     * const vehicleCategory = await prisma.vehicleCategory.upsert({
     *   create: {
     *     // ... data to create a VehicleCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleCategory we want to update
     *   }
     * })
     */
    upsert<T extends VehicleCategoryUpsertArgs>(args: SelectSubset<T, VehicleCategoryUpsertArgs<ExtArgs>>): Prisma__VehicleCategoryClient<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCategoryCountArgs} args - Arguments to filter VehicleCategories to count.
     * @example
     * // Count the number of VehicleCategories
     * const count = await prisma.vehicleCategory.count({
     *   where: {
     *     // ... the filter for the VehicleCategories we want to count
     *   }
     * })
    **/
    count<T extends VehicleCategoryCountArgs>(
      args?: Subset<T, VehicleCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleCategoryAggregateArgs>(args: Subset<T, VehicleCategoryAggregateArgs>): Prisma.PrismaPromise<GetVehicleCategoryAggregateType<T>>

    /**
     * Group by VehicleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleCategoryGroupByArgs['orderBy'] }
        : { orderBy?: VehicleCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleCategory model
   */
  readonly fields: VehicleCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    licenseVehicleCategories<T extends VehicleCategory$licenseVehicleCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, VehicleCategory$licenseVehicleCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VehicleCategory model
   */ 
  interface VehicleCategoryFieldRefs {
    readonly id: FieldRef<"VehicleCategory", 'String'>
    readonly vehicleDescription: FieldRef<"VehicleCategory", 'String'>
    readonly vehicleType: FieldRef<"VehicleCategory", 'String'>
    readonly vehicleClass: FieldRef<"VehicleCategory", 'String'>
    readonly otherAllowedVehicleClasses: FieldRef<"VehicleCategory", 'String[]'>
    readonly validityPeriod: FieldRef<"VehicleCategory", 'Int'>
    readonly createdAt: FieldRef<"VehicleCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"VehicleCategory", 'DateTime'>
    readonly deletedAt: FieldRef<"VehicleCategory", 'DateTime'>
    readonly deleted: FieldRef<"VehicleCategory", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * VehicleCategory findUnique
   */
  export type VehicleCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which VehicleCategory to fetch.
     */
    where: VehicleCategoryWhereUniqueInput
  }

  /**
   * VehicleCategory findUniqueOrThrow
   */
  export type VehicleCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which VehicleCategory to fetch.
     */
    where: VehicleCategoryWhereUniqueInput
  }

  /**
   * VehicleCategory findFirst
   */
  export type VehicleCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which VehicleCategory to fetch.
     */
    where?: VehicleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleCategories to fetch.
     */
    orderBy?: VehicleCategoryOrderByWithRelationInput | VehicleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleCategories.
     */
    cursor?: VehicleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleCategories.
     */
    distinct?: VehicleCategoryScalarFieldEnum | VehicleCategoryScalarFieldEnum[]
  }

  /**
   * VehicleCategory findFirstOrThrow
   */
  export type VehicleCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which VehicleCategory to fetch.
     */
    where?: VehicleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleCategories to fetch.
     */
    orderBy?: VehicleCategoryOrderByWithRelationInput | VehicleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleCategories.
     */
    cursor?: VehicleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleCategories.
     */
    distinct?: VehicleCategoryScalarFieldEnum | VehicleCategoryScalarFieldEnum[]
  }

  /**
   * VehicleCategory findMany
   */
  export type VehicleCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which VehicleCategories to fetch.
     */
    where?: VehicleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleCategories to fetch.
     */
    orderBy?: VehicleCategoryOrderByWithRelationInput | VehicleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleCategories.
     */
    cursor?: VehicleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleCategories.
     */
    skip?: number
    distinct?: VehicleCategoryScalarFieldEnum | VehicleCategoryScalarFieldEnum[]
  }

  /**
   * VehicleCategory create
   */
  export type VehicleCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleCategory.
     */
    data: XOR<VehicleCategoryCreateInput, VehicleCategoryUncheckedCreateInput>
  }

  /**
   * VehicleCategory createMany
   */
  export type VehicleCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleCategories.
     */
    data: VehicleCategoryCreateManyInput | VehicleCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleCategory createManyAndReturn
   */
  export type VehicleCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleCategories.
     */
    data: VehicleCategoryCreateManyInput | VehicleCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleCategory update
   */
  export type VehicleCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleCategory.
     */
    data: XOR<VehicleCategoryUpdateInput, VehicleCategoryUncheckedUpdateInput>
    /**
     * Choose, which VehicleCategory to update.
     */
    where: VehicleCategoryWhereUniqueInput
  }

  /**
   * VehicleCategory updateMany
   */
  export type VehicleCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleCategories.
     */
    data: XOR<VehicleCategoryUpdateManyMutationInput, VehicleCategoryUncheckedUpdateManyInput>
    /**
     * Filter which VehicleCategories to update
     */
    where?: VehicleCategoryWhereInput
    /**
     * Limit how many VehicleCategories to update.
     */
    limit?: number
  }

  /**
   * VehicleCategory updateManyAndReturn
   */
  export type VehicleCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * The data used to update VehicleCategories.
     */
    data: XOR<VehicleCategoryUpdateManyMutationInput, VehicleCategoryUncheckedUpdateManyInput>
    /**
     * Filter which VehicleCategories to update
     */
    where?: VehicleCategoryWhereInput
    /**
     * Limit how many VehicleCategories to update.
     */
    limit?: number
  }

  /**
   * VehicleCategory upsert
   */
  export type VehicleCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleCategory to update in case it exists.
     */
    where: VehicleCategoryWhereUniqueInput
    /**
     * In case the VehicleCategory found by the `where` argument doesn't exist, create a new VehicleCategory with this data.
     */
    create: XOR<VehicleCategoryCreateInput, VehicleCategoryUncheckedCreateInput>
    /**
     * In case the VehicleCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleCategoryUpdateInput, VehicleCategoryUncheckedUpdateInput>
  }

  /**
   * VehicleCategory delete
   */
  export type VehicleCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter which VehicleCategory to delete.
     */
    where: VehicleCategoryWhereUniqueInput
  }

  /**
   * VehicleCategory deleteMany
   */
  export type VehicleCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleCategories to delete
     */
    where?: VehicleCategoryWhereInput
    /**
     * Limit how many VehicleCategories to delete.
     */
    limit?: number
  }

  /**
   * VehicleCategory.licenseVehicleCategories
   */
  export type VehicleCategory$licenseVehicleCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    where?: LicenseVehicleCategoryWhereInput
    orderBy?: LicenseVehicleCategoryOrderByWithRelationInput | LicenseVehicleCategoryOrderByWithRelationInput[]
    cursor?: LicenseVehicleCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseVehicleCategoryScalarFieldEnum | LicenseVehicleCategoryScalarFieldEnum[]
  }

  /**
   * VehicleCategory without action
   */
  export type VehicleCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCategory
     */
    select?: VehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleCategory
     */
    omit?: VehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleCategoryInclude<ExtArgs> | null
  }


  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseMinAggregateOutputType = {
    id: string | null
    licenseNumber: string | null
    nic: string | null
    photo: string | null
    nicFront: string | null
    nicBack: string | null
    previousLicense: string | null
    phone: string | null
    firstName: string | null
    lastName: string | null
    licenseType: $Enums.LicenseType | null
    status: $Enums.LicenseStatus | null
    dateOfIssue: Date | null
    dateOfExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    addressId: string | null
    medicalId: string | null
  }

  export type LicenseMaxAggregateOutputType = {
    id: string | null
    licenseNumber: string | null
    nic: string | null
    photo: string | null
    nicFront: string | null
    nicBack: string | null
    previousLicense: string | null
    phone: string | null
    firstName: string | null
    lastName: string | null
    licenseType: $Enums.LicenseType | null
    status: $Enums.LicenseStatus | null
    dateOfIssue: Date | null
    dateOfExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    addressId: string | null
    medicalId: string | null
  }

  export type LicenseCountAggregateOutputType = {
    id: number
    licenseNumber: number
    nic: number
    photo: number
    nicFront: number
    nicBack: number
    previousLicense: number
    phone: number
    firstName: number
    lastName: number
    licenseType: number
    status: number
    dateOfIssue: number
    dateOfExpiry: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    addressId: number
    medicalId: number
    _all: number
  }


  export type LicenseMinAggregateInputType = {
    id?: true
    licenseNumber?: true
    nic?: true
    photo?: true
    nicFront?: true
    nicBack?: true
    previousLicense?: true
    phone?: true
    firstName?: true
    lastName?: true
    licenseType?: true
    status?: true
    dateOfIssue?: true
    dateOfExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    addressId?: true
    medicalId?: true
  }

  export type LicenseMaxAggregateInputType = {
    id?: true
    licenseNumber?: true
    nic?: true
    photo?: true
    nicFront?: true
    nicBack?: true
    previousLicense?: true
    phone?: true
    firstName?: true
    lastName?: true
    licenseType?: true
    status?: true
    dateOfIssue?: true
    dateOfExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    addressId?: true
    medicalId?: true
  }

  export type LicenseCountAggregateInputType = {
    id?: true
    licenseNumber?: true
    nic?: true
    photo?: true
    nicFront?: true
    nicBack?: true
    previousLicense?: true
    phone?: true
    firstName?: true
    lastName?: true
    licenseType?: true
    status?: true
    dateOfIssue?: true
    dateOfExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    addressId?: true
    medicalId?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    id: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status: $Enums.LicenseStatus
    dateOfIssue: Date
    dateOfExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    addressId: string
    medicalId: string
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseNumber?: boolean
    nic?: boolean
    photo?: boolean
    nicFront?: boolean
    nicBack?: boolean
    previousLicense?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    licenseType?: boolean
    status?: boolean
    dateOfIssue?: boolean
    dateOfExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    addressId?: boolean
    medicalId?: boolean
    user?: boolean | License$userArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    medical?: boolean | MedicalDefaultArgs<ExtArgs>
    issues?: boolean | License$issuesArgs<ExtArgs>
    licenseVehicleCategories?: boolean | License$licenseVehicleCategoriesArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseNumber?: boolean
    nic?: boolean
    photo?: boolean
    nicFront?: boolean
    nicBack?: boolean
    previousLicense?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    licenseType?: boolean
    status?: boolean
    dateOfIssue?: boolean
    dateOfExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    addressId?: boolean
    medicalId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    medical?: boolean | MedicalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseNumber?: boolean
    nic?: boolean
    photo?: boolean
    nicFront?: boolean
    nicBack?: boolean
    previousLicense?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    licenseType?: boolean
    status?: boolean
    dateOfIssue?: boolean
    dateOfExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    addressId?: boolean
    medicalId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    medical?: boolean | MedicalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectScalar = {
    id?: boolean
    licenseNumber?: boolean
    nic?: boolean
    photo?: boolean
    nicFront?: boolean
    nicBack?: boolean
    previousLicense?: boolean
    phone?: boolean
    firstName?: boolean
    lastName?: boolean
    licenseType?: boolean
    status?: boolean
    dateOfIssue?: boolean
    dateOfExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    addressId?: boolean
    medicalId?: boolean
  }

  export type LicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "licenseNumber" | "nic" | "photo" | "nicFront" | "nicBack" | "previousLicense" | "phone" | "firstName" | "lastName" | "licenseType" | "status" | "dateOfIssue" | "dateOfExpiry" | "createdAt" | "updatedAt" | "deletedAt" | "deleted" | "addressId" | "medicalId", ExtArgs["result"]["license"]>
  export type LicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | License$userArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    medical?: boolean | MedicalDefaultArgs<ExtArgs>
    issues?: boolean | License$issuesArgs<ExtArgs>
    licenseVehicleCategories?: boolean | License$licenseVehicleCategoriesArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LicenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    medical?: boolean | MedicalDefaultArgs<ExtArgs>
  }
  export type LicenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    medical?: boolean | MedicalDefaultArgs<ExtArgs>
  }

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      address: Prisma.$AddressPayload<ExtArgs>
      medical: Prisma.$MedicalPayload<ExtArgs>
      issues: Prisma.$IssuePayload<ExtArgs>[]
      licenseVehicleCategories: Prisma.$LicenseVehicleCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseNumber: string
      nic: string
      photo: string
      nicFront: string
      nicBack: string
      previousLicense: string | null
      phone: string
      firstName: string
      lastName: string
      licenseType: $Enums.LicenseType
      status: $Enums.LicenseStatus
      dateOfIssue: Date
      dateOfExpiry: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
      addressId: string
      medicalId: string
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseWithIdOnly = await prisma.license.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licenses and returns the data saved in the database.
     * @param {LicenseCreateManyAndReturnArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses and returns the data updated in the database.
     * @param {LicenseUpdateManyAndReturnArgs} args - Arguments to update many Licenses.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LicenseUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends License$userArgs<ExtArgs> = {}>(args?: Subset<T, License$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medical<T extends MedicalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicalDefaultArgs<ExtArgs>>): Prisma__MedicalClient<$Result.GetResult<Prisma.$MedicalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    issues<T extends License$issuesArgs<ExtArgs> = {}>(args?: Subset<T, License$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    licenseVehicleCategories<T extends License$licenseVehicleCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, License$licenseVehicleCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the License model
   */ 
  interface LicenseFieldRefs {
    readonly id: FieldRef<"License", 'String'>
    readonly licenseNumber: FieldRef<"License", 'String'>
    readonly nic: FieldRef<"License", 'String'>
    readonly photo: FieldRef<"License", 'String'>
    readonly nicFront: FieldRef<"License", 'String'>
    readonly nicBack: FieldRef<"License", 'String'>
    readonly previousLicense: FieldRef<"License", 'String'>
    readonly phone: FieldRef<"License", 'String'>
    readonly firstName: FieldRef<"License", 'String'>
    readonly lastName: FieldRef<"License", 'String'>
    readonly licenseType: FieldRef<"License", 'LicenseType'>
    readonly status: FieldRef<"License", 'LicenseStatus'>
    readonly dateOfIssue: FieldRef<"License", 'DateTime'>
    readonly dateOfExpiry: FieldRef<"License", 'DateTime'>
    readonly createdAt: FieldRef<"License", 'DateTime'>
    readonly updatedAt: FieldRef<"License", 'DateTime'>
    readonly deletedAt: FieldRef<"License", 'DateTime'>
    readonly deleted: FieldRef<"License", 'Boolean'>
    readonly addressId: FieldRef<"License", 'String'>
    readonly medicalId: FieldRef<"License", 'String'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License createManyAndReturn
   */
  export type LicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License updateManyAndReturn
   */
  export type LicenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to delete.
     */
    limit?: number
  }

  /**
   * License.user
   */
  export type License$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * License.issues
   */
  export type License$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * License.licenseVehicleCategories
   */
  export type License$licenseVehicleCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    where?: LicenseVehicleCategoryWhereInput
    orderBy?: LicenseVehicleCategoryOrderByWithRelationInput | LicenseVehicleCategoryOrderByWithRelationInput[]
    cursor?: LicenseVehicleCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseVehicleCategoryScalarFieldEnum | LicenseVehicleCategoryScalarFieldEnum[]
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    firstName: string | null
    lastName: string | null
    nic: string | null
    phone: string | null
    email: string | null
    addressId: string | null
    licenseId: string | null
    appointmentId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    firstName: string | null
    lastName: string | null
    nic: string | null
    phone: string | null
    email: string | null
    addressId: string | null
    licenseId: string | null
    appointmentId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    firstName: number
    lastName: number
    nic: number
    phone: number
    email: number
    addressId: number
    licenseId: number
    appointmentId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    nic?: true
    phone?: true
    email?: true
    addressId?: true
    licenseId?: true
    appointmentId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    nic?: true
    phone?: true
    email?: true
    addressId?: true
    licenseId?: true
    appointmentId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    firstName?: true
    lastName?: true
    nic?: true
    phone?: true
    email?: true
    addressId?: true
    licenseId?: true
    appointmentId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    addressId: string
    licenseId: string
    appointmentId: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    nic?: boolean
    phone?: boolean
    email?: boolean
    addressId?: boolean
    licenseId?: boolean
    appointmentId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    nic?: boolean
    phone?: boolean
    email?: boolean
    addressId?: boolean
    licenseId?: boolean
    appointmentId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    nic?: boolean
    phone?: boolean
    email?: boolean
    addressId?: boolean
    licenseId?: boolean
    appointmentId?: boolean
    address?: boolean | AddressDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    firstName?: boolean
    lastName?: boolean
    nic?: boolean
    phone?: boolean
    email?: boolean
    addressId?: boolean
    licenseId?: boolean
    appointmentId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "firstName" | "lastName" | "nic" | "phone" | "email" | "addressId" | "licenseId" | "appointmentId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    staff?: boolean | User$staffArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
    logs?: boolean | User$logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    address?: boolean | AddressDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      address: Prisma.$AddressPayload<ExtArgs>
      staff: Prisma.$StaffPayload<ExtArgs> | null
      license: Prisma.$LicensePayload<ExtArgs>
      appointment: Prisma.$AppointmentPayload<ExtArgs>
      logs: Prisma.$LogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      firstName: string
      lastName: string
      nic: string
      phone: string
      email: string
      addressId: string
      licenseId: string
      appointmentId: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends User$staffArgs<ExtArgs> = {}>(args?: Subset<T, User$staffArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    license<T extends LicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseDefaultArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly nic: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly addressId: FieldRef<"User", 'String'>
    readonly licenseId: FieldRef<"User", 'String'>
    readonly appointmentId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.staff
   */
  export type User$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    where?: StaffWhereInput
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    where?: LogWhereInput
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    cursor?: LogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffMinAggregateOutputType = {
    id: string | null
    contactNumber: string | null
    email: string | null
    role: $Enums.Role | null
    permission: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    userId: string | null
  }

  export type StaffMaxAggregateOutputType = {
    id: string | null
    contactNumber: string | null
    email: string | null
    role: $Enums.Role | null
    permission: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    userId: string | null
  }

  export type StaffCountAggregateOutputType = {
    id: number
    contactNumber: number
    email: number
    role: number
    permission: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    userId: number
    _all: number
  }


  export type StaffMinAggregateInputType = {
    id?: true
    contactNumber?: true
    email?: true
    role?: true
    permission?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    userId?: true
  }

  export type StaffMaxAggregateInputType = {
    id?: true
    contactNumber?: true
    email?: true
    role?: true
    permission?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    userId?: true
  }

  export type StaffCountAggregateInputType = {
    id?: true
    contactNumber?: true
    email?: true
    role?: true
    permission?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    userId?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to aggregate.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type StaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaffWhereInput
    orderBy?: StaffOrderByWithAggregationInput | StaffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: StaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    id: string
    contactNumber: string
    email: string
    role: $Enums.Role
    permission: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    userId: string
    _count: StaffCountAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends StaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type StaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactNumber?: boolean
    email?: boolean
    role?: boolean
    permission?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    issues?: boolean | Staff$issuesArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactNumber?: boolean
    email?: boolean
    role?: boolean
    permission?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contactNumber?: boolean
    email?: boolean
    role?: boolean
    permission?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type StaffSelectScalar = {
    id?: boolean
    contactNumber?: boolean
    email?: boolean
    role?: boolean
    permission?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    userId?: boolean
  }

  export type StaffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contactNumber" | "email" | "role" | "permission" | "createdAt" | "updatedAt" | "deletedAt" | "deleted" | "userId", ExtArgs["result"]["staff"]>
  export type StaffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    issues?: boolean | Staff$issuesArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StaffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Staff"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      issues: Prisma.$IssuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contactNumber: string
      email: string
      role: $Enums.Role
      permission: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
      userId: string
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type StaffGetPayload<S extends boolean | null | undefined | StaffDefaultArgs> = $Result.GetResult<Prisma.$StaffPayload, S>

  type StaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface StaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Staff'], meta: { name: 'Staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {StaffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaffFindUniqueArgs>(args: SelectSubset<T, StaffFindUniqueArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaffFindUniqueOrThrowArgs>(args: SelectSubset<T, StaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaffFindFirstArgs>(args?: SelectSubset<T, StaffFindFirstArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaffFindFirstOrThrowArgs>(args?: SelectSubset<T, StaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staffWithIdOnly = await prisma.staff.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaffFindManyArgs>(args?: SelectSubset<T, StaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {StaffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends StaffCreateArgs>(args: SelectSubset<T, StaffCreateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {StaffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaffCreateManyArgs>(args?: SelectSubset<T, StaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {StaffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaffCreateManyAndReturnArgs>(args?: SelectSubset<T, StaffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {StaffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends StaffDeleteArgs>(args: SelectSubset<T, StaffDeleteArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {StaffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaffUpdateArgs>(args: SelectSubset<T, StaffUpdateArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {StaffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaffDeleteManyArgs>(args?: SelectSubset<T, StaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaffUpdateManyArgs>(args: SelectSubset<T, StaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {StaffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `id`
     * const staffWithIdOnly = await prisma.staff.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaffUpdateManyAndReturnArgs>(args: SelectSubset<T, StaffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {StaffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends StaffUpsertArgs>(args: SelectSubset<T, StaffUpsertArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends StaffCountArgs>(
      args?: Subset<T, StaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaffGroupByArgs['orderBy'] }
        : { orderBy?: StaffGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Staff model
   */
  readonly fields: StaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    issues<T extends Staff$issuesArgs<ExtArgs> = {}>(args?: Subset<T, Staff$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Staff model
   */ 
  interface StaffFieldRefs {
    readonly id: FieldRef<"Staff", 'String'>
    readonly contactNumber: FieldRef<"Staff", 'String'>
    readonly email: FieldRef<"Staff", 'String'>
    readonly role: FieldRef<"Staff", 'Role'>
    readonly permission: FieldRef<"Staff", 'String'>
    readonly createdAt: FieldRef<"Staff", 'DateTime'>
    readonly updatedAt: FieldRef<"Staff", 'DateTime'>
    readonly deletedAt: FieldRef<"Staff", 'DateTime'>
    readonly deleted: FieldRef<"Staff", 'Boolean'>
    readonly userId: FieldRef<"Staff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Staff findUnique
   */
  export type StaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findUniqueOrThrow
   */
  export type StaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff findFirst
   */
  export type StaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findFirstOrThrow
   */
  export type StaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff findMany
   */
  export type StaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter, which Staff to fetch.
     */
    where?: StaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Staff to fetch.
     */
    orderBy?: StaffOrderByWithRelationInput | StaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Staff.
     */
    cursor?: StaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * Staff create
   */
  export type StaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to create a Staff.
     */
    data: XOR<StaffCreateInput, StaffUncheckedCreateInput>
  }

  /**
   * Staff createMany
   */
  export type StaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Staff createManyAndReturn
   */
  export type StaffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to create many Staff.
     */
    data: StaffCreateManyInput | StaffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff update
   */
  export type StaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The data needed to update a Staff.
     */
    data: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
    /**
     * Choose, which Staff to update.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff updateMany
   */
  export type StaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
  }

  /**
   * Staff updateManyAndReturn
   */
  export type StaffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * The data used to update Staff.
     */
    data: XOR<StaffUpdateManyMutationInput, StaffUncheckedUpdateManyInput>
    /**
     * Filter which Staff to update
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Staff upsert
   */
  export type StaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * The filter to search for the Staff to update in case it exists.
     */
    where: StaffWhereUniqueInput
    /**
     * In case the Staff found by the `where` argument doesn't exist, create a new Staff with this data.
     */
    create: XOR<StaffCreateInput, StaffUncheckedCreateInput>
    /**
     * In case the Staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaffUpdateInput, StaffUncheckedUpdateInput>
  }

  /**
   * Staff delete
   */
  export type StaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
    /**
     * Filter which Staff to delete.
     */
    where: StaffWhereUniqueInput
  }

  /**
   * Staff deleteMany
   */
  export type StaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Staff to delete
     */
    where?: StaffWhereInput
    /**
     * Limit how many Staff to delete.
     */
    limit?: number
  }

  /**
   * Staff.issues
   */
  export type Staff$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Staff without action
   */
  export type StaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Staff
     */
    select?: StaffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Staff
     */
    omit?: StaffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaffInclude<ExtArgs> | null
  }


  /**
   * Model LicenseVehicleCategory
   */

  export type AggregateLicenseVehicleCategory = {
    _count: LicenseVehicleCategoryCountAggregateOutputType | null
    _min: LicenseVehicleCategoryMinAggregateOutputType | null
    _max: LicenseVehicleCategoryMaxAggregateOutputType | null
  }

  export type LicenseVehicleCategoryMinAggregateOutputType = {
    id: string | null
    dateOfIssue: Date | null
    dateOfExpiry: Date | null
    categoryStatus: $Enums.CategoryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    vehicleCategoryId: string | null
    licenseId: string | null
  }

  export type LicenseVehicleCategoryMaxAggregateOutputType = {
    id: string | null
    dateOfIssue: Date | null
    dateOfExpiry: Date | null
    categoryStatus: $Enums.CategoryStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    vehicleCategoryId: string | null
    licenseId: string | null
  }

  export type LicenseVehicleCategoryCountAggregateOutputType = {
    id: number
    dateOfIssue: number
    dateOfExpiry: number
    categoryStatus: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    vehicleCategoryId: number
    licenseId: number
    _all: number
  }


  export type LicenseVehicleCategoryMinAggregateInputType = {
    id?: true
    dateOfIssue?: true
    dateOfExpiry?: true
    categoryStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    vehicleCategoryId?: true
    licenseId?: true
  }

  export type LicenseVehicleCategoryMaxAggregateInputType = {
    id?: true
    dateOfIssue?: true
    dateOfExpiry?: true
    categoryStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    vehicleCategoryId?: true
    licenseId?: true
  }

  export type LicenseVehicleCategoryCountAggregateInputType = {
    id?: true
    dateOfIssue?: true
    dateOfExpiry?: true
    categoryStatus?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    vehicleCategoryId?: true
    licenseId?: true
    _all?: true
  }

  export type LicenseVehicleCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseVehicleCategory to aggregate.
     */
    where?: LicenseVehicleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseVehicleCategories to fetch.
     */
    orderBy?: LicenseVehicleCategoryOrderByWithRelationInput | LicenseVehicleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseVehicleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseVehicleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseVehicleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseVehicleCategories
    **/
    _count?: true | LicenseVehicleCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseVehicleCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseVehicleCategoryMaxAggregateInputType
  }

  export type GetLicenseVehicleCategoryAggregateType<T extends LicenseVehicleCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseVehicleCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseVehicleCategory[P]>
      : GetScalarType<T[P], AggregateLicenseVehicleCategory[P]>
  }




  export type LicenseVehicleCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseVehicleCategoryWhereInput
    orderBy?: LicenseVehicleCategoryOrderByWithAggregationInput | LicenseVehicleCategoryOrderByWithAggregationInput[]
    by: LicenseVehicleCategoryScalarFieldEnum[] | LicenseVehicleCategoryScalarFieldEnum
    having?: LicenseVehicleCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseVehicleCategoryCountAggregateInputType | true
    _min?: LicenseVehicleCategoryMinAggregateInputType
    _max?: LicenseVehicleCategoryMaxAggregateInputType
  }

  export type LicenseVehicleCategoryGroupByOutputType = {
    id: string
    dateOfIssue: Date
    dateOfExpiry: Date
    categoryStatus: $Enums.CategoryStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    vehicleCategoryId: string
    licenseId: string
    _count: LicenseVehicleCategoryCountAggregateOutputType | null
    _min: LicenseVehicleCategoryMinAggregateOutputType | null
    _max: LicenseVehicleCategoryMaxAggregateOutputType | null
  }

  type GetLicenseVehicleCategoryGroupByPayload<T extends LicenseVehicleCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseVehicleCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseVehicleCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseVehicleCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseVehicleCategoryGroupByOutputType[P]>
        }
      >
    >


  export type LicenseVehicleCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateOfIssue?: boolean
    dateOfExpiry?: boolean
    categoryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    vehicleCategoryId?: boolean
    licenseId?: boolean
    vehicleCategory?: boolean | VehicleCategoryDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseVehicleCategory"]>

  export type LicenseVehicleCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateOfIssue?: boolean
    dateOfExpiry?: boolean
    categoryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    vehicleCategoryId?: boolean
    licenseId?: boolean
    vehicleCategory?: boolean | VehicleCategoryDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseVehicleCategory"]>

  export type LicenseVehicleCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dateOfIssue?: boolean
    dateOfExpiry?: boolean
    categoryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    vehicleCategoryId?: boolean
    licenseId?: boolean
    vehicleCategory?: boolean | VehicleCategoryDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["licenseVehicleCategory"]>

  export type LicenseVehicleCategorySelectScalar = {
    id?: boolean
    dateOfIssue?: boolean
    dateOfExpiry?: boolean
    categoryStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    vehicleCategoryId?: boolean
    licenseId?: boolean
  }

  export type LicenseVehicleCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dateOfIssue" | "dateOfExpiry" | "categoryStatus" | "createdAt" | "updatedAt" | "deletedAt" | "deleted" | "vehicleCategoryId" | "licenseId", ExtArgs["result"]["licenseVehicleCategory"]>
  export type LicenseVehicleCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleCategory?: boolean | VehicleCategoryDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }
  export type LicenseVehicleCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleCategory?: boolean | VehicleCategoryDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }
  export type LicenseVehicleCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleCategory?: boolean | VehicleCategoryDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }

  export type $LicenseVehicleCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseVehicleCategory"
    objects: {
      vehicleCategory: Prisma.$VehicleCategoryPayload<ExtArgs>
      license: Prisma.$LicensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dateOfIssue: Date
      dateOfExpiry: Date
      categoryStatus: $Enums.CategoryStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
      vehicleCategoryId: string
      licenseId: string
    }, ExtArgs["result"]["licenseVehicleCategory"]>
    composites: {}
  }

  type LicenseVehicleCategoryGetPayload<S extends boolean | null | undefined | LicenseVehicleCategoryDefaultArgs> = $Result.GetResult<Prisma.$LicenseVehicleCategoryPayload, S>

  type LicenseVehicleCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseVehicleCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseVehicleCategoryCountAggregateInputType | true
    }

  export interface LicenseVehicleCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseVehicleCategory'], meta: { name: 'LicenseVehicleCategory' } }
    /**
     * Find zero or one LicenseVehicleCategory that matches the filter.
     * @param {LicenseVehicleCategoryFindUniqueArgs} args - Arguments to find a LicenseVehicleCategory
     * @example
     * // Get one LicenseVehicleCategory
     * const licenseVehicleCategory = await prisma.licenseVehicleCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseVehicleCategoryFindUniqueArgs>(args: SelectSubset<T, LicenseVehicleCategoryFindUniqueArgs<ExtArgs>>): Prisma__LicenseVehicleCategoryClient<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LicenseVehicleCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseVehicleCategoryFindUniqueOrThrowArgs} args - Arguments to find a LicenseVehicleCategory
     * @example
     * // Get one LicenseVehicleCategory
     * const licenseVehicleCategory = await prisma.licenseVehicleCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseVehicleCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseVehicleCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseVehicleCategoryClient<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LicenseVehicleCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseVehicleCategoryFindFirstArgs} args - Arguments to find a LicenseVehicleCategory
     * @example
     * // Get one LicenseVehicleCategory
     * const licenseVehicleCategory = await prisma.licenseVehicleCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseVehicleCategoryFindFirstArgs>(args?: SelectSubset<T, LicenseVehicleCategoryFindFirstArgs<ExtArgs>>): Prisma__LicenseVehicleCategoryClient<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LicenseVehicleCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseVehicleCategoryFindFirstOrThrowArgs} args - Arguments to find a LicenseVehicleCategory
     * @example
     * // Get one LicenseVehicleCategory
     * const licenseVehicleCategory = await prisma.licenseVehicleCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseVehicleCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseVehicleCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseVehicleCategoryClient<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LicenseVehicleCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseVehicleCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseVehicleCategories
     * const licenseVehicleCategories = await prisma.licenseVehicleCategory.findMany()
     * 
     * // Get first 10 LicenseVehicleCategories
     * const licenseVehicleCategories = await prisma.licenseVehicleCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseVehicleCategoryWithIdOnly = await prisma.licenseVehicleCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseVehicleCategoryFindManyArgs>(args?: SelectSubset<T, LicenseVehicleCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LicenseVehicleCategory.
     * @param {LicenseVehicleCategoryCreateArgs} args - Arguments to create a LicenseVehicleCategory.
     * @example
     * // Create one LicenseVehicleCategory
     * const LicenseVehicleCategory = await prisma.licenseVehicleCategory.create({
     *   data: {
     *     // ... data to create a LicenseVehicleCategory
     *   }
     * })
     * 
     */
    create<T extends LicenseVehicleCategoryCreateArgs>(args: SelectSubset<T, LicenseVehicleCategoryCreateArgs<ExtArgs>>): Prisma__LicenseVehicleCategoryClient<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LicenseVehicleCategories.
     * @param {LicenseVehicleCategoryCreateManyArgs} args - Arguments to create many LicenseVehicleCategories.
     * @example
     * // Create many LicenseVehicleCategories
     * const licenseVehicleCategory = await prisma.licenseVehicleCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseVehicleCategoryCreateManyArgs>(args?: SelectSubset<T, LicenseVehicleCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicenseVehicleCategories and returns the data saved in the database.
     * @param {LicenseVehicleCategoryCreateManyAndReturnArgs} args - Arguments to create many LicenseVehicleCategories.
     * @example
     * // Create many LicenseVehicleCategories
     * const licenseVehicleCategory = await prisma.licenseVehicleCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicenseVehicleCategories and only return the `id`
     * const licenseVehicleCategoryWithIdOnly = await prisma.licenseVehicleCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseVehicleCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseVehicleCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LicenseVehicleCategory.
     * @param {LicenseVehicleCategoryDeleteArgs} args - Arguments to delete one LicenseVehicleCategory.
     * @example
     * // Delete one LicenseVehicleCategory
     * const LicenseVehicleCategory = await prisma.licenseVehicleCategory.delete({
     *   where: {
     *     // ... filter to delete one LicenseVehicleCategory
     *   }
     * })
     * 
     */
    delete<T extends LicenseVehicleCategoryDeleteArgs>(args: SelectSubset<T, LicenseVehicleCategoryDeleteArgs<ExtArgs>>): Prisma__LicenseVehicleCategoryClient<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LicenseVehicleCategory.
     * @param {LicenseVehicleCategoryUpdateArgs} args - Arguments to update one LicenseVehicleCategory.
     * @example
     * // Update one LicenseVehicleCategory
     * const licenseVehicleCategory = await prisma.licenseVehicleCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseVehicleCategoryUpdateArgs>(args: SelectSubset<T, LicenseVehicleCategoryUpdateArgs<ExtArgs>>): Prisma__LicenseVehicleCategoryClient<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LicenseVehicleCategories.
     * @param {LicenseVehicleCategoryDeleteManyArgs} args - Arguments to filter LicenseVehicleCategories to delete.
     * @example
     * // Delete a few LicenseVehicleCategories
     * const { count } = await prisma.licenseVehicleCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseVehicleCategoryDeleteManyArgs>(args?: SelectSubset<T, LicenseVehicleCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseVehicleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseVehicleCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseVehicleCategories
     * const licenseVehicleCategory = await prisma.licenseVehicleCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseVehicleCategoryUpdateManyArgs>(args: SelectSubset<T, LicenseVehicleCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseVehicleCategories and returns the data updated in the database.
     * @param {LicenseVehicleCategoryUpdateManyAndReturnArgs} args - Arguments to update many LicenseVehicleCategories.
     * @example
     * // Update many LicenseVehicleCategories
     * const licenseVehicleCategory = await prisma.licenseVehicleCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LicenseVehicleCategories and only return the `id`
     * const licenseVehicleCategoryWithIdOnly = await prisma.licenseVehicleCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LicenseVehicleCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenseVehicleCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LicenseVehicleCategory.
     * @param {LicenseVehicleCategoryUpsertArgs} args - Arguments to update or create a LicenseVehicleCategory.
     * @example
     * // Update or create a LicenseVehicleCategory
     * const licenseVehicleCategory = await prisma.licenseVehicleCategory.upsert({
     *   create: {
     *     // ... data to create a LicenseVehicleCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseVehicleCategory we want to update
     *   }
     * })
     */
    upsert<T extends LicenseVehicleCategoryUpsertArgs>(args: SelectSubset<T, LicenseVehicleCategoryUpsertArgs<ExtArgs>>): Prisma__LicenseVehicleCategoryClient<$Result.GetResult<Prisma.$LicenseVehicleCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LicenseVehicleCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseVehicleCategoryCountArgs} args - Arguments to filter LicenseVehicleCategories to count.
     * @example
     * // Count the number of LicenseVehicleCategories
     * const count = await prisma.licenseVehicleCategory.count({
     *   where: {
     *     // ... the filter for the LicenseVehicleCategories we want to count
     *   }
     * })
    **/
    count<T extends LicenseVehicleCategoryCountArgs>(
      args?: Subset<T, LicenseVehicleCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseVehicleCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseVehicleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseVehicleCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LicenseVehicleCategoryAggregateArgs>(args: Subset<T, LicenseVehicleCategoryAggregateArgs>): Prisma.PrismaPromise<GetLicenseVehicleCategoryAggregateType<T>>

    /**
     * Group by LicenseVehicleCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseVehicleCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LicenseVehicleCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseVehicleCategoryGroupByArgs['orderBy'] }
        : { orderBy?: LicenseVehicleCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LicenseVehicleCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseVehicleCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseVehicleCategory model
   */
  readonly fields: LicenseVehicleCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseVehicleCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseVehicleCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicleCategory<T extends VehicleCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleCategoryDefaultArgs<ExtArgs>>): Prisma__VehicleCategoryClient<$Result.GetResult<Prisma.$VehicleCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    license<T extends LicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseDefaultArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LicenseVehicleCategory model
   */ 
  interface LicenseVehicleCategoryFieldRefs {
    readonly id: FieldRef<"LicenseVehicleCategory", 'String'>
    readonly dateOfIssue: FieldRef<"LicenseVehicleCategory", 'DateTime'>
    readonly dateOfExpiry: FieldRef<"LicenseVehicleCategory", 'DateTime'>
    readonly categoryStatus: FieldRef<"LicenseVehicleCategory", 'CategoryStatus'>
    readonly createdAt: FieldRef<"LicenseVehicleCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"LicenseVehicleCategory", 'DateTime'>
    readonly deletedAt: FieldRef<"LicenseVehicleCategory", 'DateTime'>
    readonly deleted: FieldRef<"LicenseVehicleCategory", 'Boolean'>
    readonly vehicleCategoryId: FieldRef<"LicenseVehicleCategory", 'String'>
    readonly licenseId: FieldRef<"LicenseVehicleCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LicenseVehicleCategory findUnique
   */
  export type LicenseVehicleCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LicenseVehicleCategory to fetch.
     */
    where: LicenseVehicleCategoryWhereUniqueInput
  }

  /**
   * LicenseVehicleCategory findUniqueOrThrow
   */
  export type LicenseVehicleCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LicenseVehicleCategory to fetch.
     */
    where: LicenseVehicleCategoryWhereUniqueInput
  }

  /**
   * LicenseVehicleCategory findFirst
   */
  export type LicenseVehicleCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LicenseVehicleCategory to fetch.
     */
    where?: LicenseVehicleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseVehicleCategories to fetch.
     */
    orderBy?: LicenseVehicleCategoryOrderByWithRelationInput | LicenseVehicleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseVehicleCategories.
     */
    cursor?: LicenseVehicleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseVehicleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseVehicleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseVehicleCategories.
     */
    distinct?: LicenseVehicleCategoryScalarFieldEnum | LicenseVehicleCategoryScalarFieldEnum[]
  }

  /**
   * LicenseVehicleCategory findFirstOrThrow
   */
  export type LicenseVehicleCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LicenseVehicleCategory to fetch.
     */
    where?: LicenseVehicleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseVehicleCategories to fetch.
     */
    orderBy?: LicenseVehicleCategoryOrderByWithRelationInput | LicenseVehicleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseVehicleCategories.
     */
    cursor?: LicenseVehicleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseVehicleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseVehicleCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseVehicleCategories.
     */
    distinct?: LicenseVehicleCategoryScalarFieldEnum | LicenseVehicleCategoryScalarFieldEnum[]
  }

  /**
   * LicenseVehicleCategory findMany
   */
  export type LicenseVehicleCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LicenseVehicleCategories to fetch.
     */
    where?: LicenseVehicleCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseVehicleCategories to fetch.
     */
    orderBy?: LicenseVehicleCategoryOrderByWithRelationInput | LicenseVehicleCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseVehicleCategories.
     */
    cursor?: LicenseVehicleCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseVehicleCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseVehicleCategories.
     */
    skip?: number
    distinct?: LicenseVehicleCategoryScalarFieldEnum | LicenseVehicleCategoryScalarFieldEnum[]
  }

  /**
   * LicenseVehicleCategory create
   */
  export type LicenseVehicleCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LicenseVehicleCategory.
     */
    data: XOR<LicenseVehicleCategoryCreateInput, LicenseVehicleCategoryUncheckedCreateInput>
  }

  /**
   * LicenseVehicleCategory createMany
   */
  export type LicenseVehicleCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseVehicleCategories.
     */
    data: LicenseVehicleCategoryCreateManyInput | LicenseVehicleCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseVehicleCategory createManyAndReturn
   */
  export type LicenseVehicleCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many LicenseVehicleCategories.
     */
    data: LicenseVehicleCategoryCreateManyInput | LicenseVehicleCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseVehicleCategory update
   */
  export type LicenseVehicleCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LicenseVehicleCategory.
     */
    data: XOR<LicenseVehicleCategoryUpdateInput, LicenseVehicleCategoryUncheckedUpdateInput>
    /**
     * Choose, which LicenseVehicleCategory to update.
     */
    where: LicenseVehicleCategoryWhereUniqueInput
  }

  /**
   * LicenseVehicleCategory updateMany
   */
  export type LicenseVehicleCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseVehicleCategories.
     */
    data: XOR<LicenseVehicleCategoryUpdateManyMutationInput, LicenseVehicleCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LicenseVehicleCategories to update
     */
    where?: LicenseVehicleCategoryWhereInput
    /**
     * Limit how many LicenseVehicleCategories to update.
     */
    limit?: number
  }

  /**
   * LicenseVehicleCategory updateManyAndReturn
   */
  export type LicenseVehicleCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * The data used to update LicenseVehicleCategories.
     */
    data: XOR<LicenseVehicleCategoryUpdateManyMutationInput, LicenseVehicleCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LicenseVehicleCategories to update
     */
    where?: LicenseVehicleCategoryWhereInput
    /**
     * Limit how many LicenseVehicleCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseVehicleCategory upsert
   */
  export type LicenseVehicleCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LicenseVehicleCategory to update in case it exists.
     */
    where: LicenseVehicleCategoryWhereUniqueInput
    /**
     * In case the LicenseVehicleCategory found by the `where` argument doesn't exist, create a new LicenseVehicleCategory with this data.
     */
    create: XOR<LicenseVehicleCategoryCreateInput, LicenseVehicleCategoryUncheckedCreateInput>
    /**
     * In case the LicenseVehicleCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseVehicleCategoryUpdateInput, LicenseVehicleCategoryUncheckedUpdateInput>
  }

  /**
   * LicenseVehicleCategory delete
   */
  export type LicenseVehicleCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
    /**
     * Filter which LicenseVehicleCategory to delete.
     */
    where: LicenseVehicleCategoryWhereUniqueInput
  }

  /**
   * LicenseVehicleCategory deleteMany
   */
  export type LicenseVehicleCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseVehicleCategories to delete
     */
    where?: LicenseVehicleCategoryWhereInput
    /**
     * Limit how many LicenseVehicleCategories to delete.
     */
    limit?: number
  }

  /**
   * LicenseVehicleCategory without action
   */
  export type LicenseVehicleCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseVehicleCategory
     */
    select?: LicenseVehicleCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseVehicleCategory
     */
    omit?: LicenseVehicleCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseVehicleCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Fine
   */

  export type AggregateFine = {
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  export type FineAvgAggregateOutputType = {
    fineCharge: number | null
  }

  export type FineSumAggregateOutputType = {
    fineCharge: number | null
  }

  export type FineMinAggregateOutputType = {
    id: string | null
    fineCategory: string | null
    violationType: string | null
    fineCharge: number | null
    provision: string | null
    sectionOfAct: string | null
    violationDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
  }

  export type FineMaxAggregateOutputType = {
    id: string | null
    fineCategory: string | null
    violationType: string | null
    fineCharge: number | null
    provision: string | null
    sectionOfAct: string | null
    violationDescription: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
  }

  export type FineCountAggregateOutputType = {
    id: number
    fineCategory: number
    violationType: number
    fineCharge: number
    provision: number
    sectionOfAct: number
    violationDescription: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    _all: number
  }


  export type FineAvgAggregateInputType = {
    fineCharge?: true
  }

  export type FineSumAggregateInputType = {
    fineCharge?: true
  }

  export type FineMinAggregateInputType = {
    id?: true
    fineCategory?: true
    violationType?: true
    fineCharge?: true
    provision?: true
    sectionOfAct?: true
    violationDescription?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
  }

  export type FineMaxAggregateInputType = {
    id?: true
    fineCategory?: true
    violationType?: true
    fineCharge?: true
    provision?: true
    sectionOfAct?: true
    violationDescription?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
  }

  export type FineCountAggregateInputType = {
    id?: true
    fineCategory?: true
    violationType?: true
    fineCharge?: true
    provision?: true
    sectionOfAct?: true
    violationDescription?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    _all?: true
  }

  export type FineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fine to aggregate.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fines
    **/
    _count?: true | FineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FineMaxAggregateInputType
  }

  export type GetFineAggregateType<T extends FineAggregateArgs> = {
        [P in keyof T & keyof AggregateFine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFine[P]>
      : GetScalarType<T[P], AggregateFine[P]>
  }




  export type FineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FineWhereInput
    orderBy?: FineOrderByWithAggregationInput | FineOrderByWithAggregationInput[]
    by: FineScalarFieldEnum[] | FineScalarFieldEnum
    having?: FineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FineCountAggregateInputType | true
    _avg?: FineAvgAggregateInputType
    _sum?: FineSumAggregateInputType
    _min?: FineMinAggregateInputType
    _max?: FineMaxAggregateInputType
  }

  export type FineGroupByOutputType = {
    id: string
    fineCategory: string
    violationType: string
    fineCharge: number
    provision: string
    sectionOfAct: string
    violationDescription: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    _count: FineCountAggregateOutputType | null
    _avg: FineAvgAggregateOutputType | null
    _sum: FineSumAggregateOutputType | null
    _min: FineMinAggregateOutputType | null
    _max: FineMaxAggregateOutputType | null
  }

  type GetFineGroupByPayload<T extends FineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FineGroupByOutputType[P]>
            : GetScalarType<T[P], FineGroupByOutputType[P]>
        }
      >
    >


  export type FineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fineCategory?: boolean
    violationType?: boolean
    fineCharge?: boolean
    provision?: boolean
    sectionOfAct?: boolean
    violationDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    issues?: boolean | Fine$issuesArgs<ExtArgs>
    payments?: boolean | Fine$paymentsArgs<ExtArgs>
    _count?: boolean | FineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fine"]>

  export type FineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fineCategory?: boolean
    violationType?: boolean
    fineCharge?: boolean
    provision?: boolean
    sectionOfAct?: boolean
    violationDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["fine"]>

  export type FineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fineCategory?: boolean
    violationType?: boolean
    fineCharge?: boolean
    provision?: boolean
    sectionOfAct?: boolean
    violationDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["fine"]>

  export type FineSelectScalar = {
    id?: boolean
    fineCategory?: boolean
    violationType?: boolean
    fineCharge?: boolean
    provision?: boolean
    sectionOfAct?: boolean
    violationDescription?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }

  export type FineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fineCategory" | "violationType" | "fineCharge" | "provision" | "sectionOfAct" | "violationDescription" | "createdAt" | "updatedAt" | "deletedAt" | "deleted", ExtArgs["result"]["fine"]>
  export type FineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | Fine$issuesArgs<ExtArgs>
    payments?: boolean | Fine$paymentsArgs<ExtArgs>
    _count?: boolean | FineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fine"
    objects: {
      issues: Prisma.$IssuePayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fineCategory: string
      violationType: string
      fineCharge: number
      provision: string
      sectionOfAct: string
      violationDescription: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
    }, ExtArgs["result"]["fine"]>
    composites: {}
  }

  type FineGetPayload<S extends boolean | null | undefined | FineDefaultArgs> = $Result.GetResult<Prisma.$FinePayload, S>

  type FineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FineCountAggregateInputType | true
    }

  export interface FineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fine'], meta: { name: 'Fine' } }
    /**
     * Find zero or one Fine that matches the filter.
     * @param {FineFindUniqueArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FineFindUniqueArgs>(args: SelectSubset<T, FineFindUniqueArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FineFindUniqueOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FineFindUniqueOrThrowArgs>(args: SelectSubset<T, FineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindFirstArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FineFindFirstArgs>(args?: SelectSubset<T, FineFindFirstArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindFirstOrThrowArgs} args - Arguments to find a Fine
     * @example
     * // Get one Fine
     * const fine = await prisma.fine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FineFindFirstOrThrowArgs>(args?: SelectSubset<T, FineFindFirstOrThrowArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fines
     * const fines = await prisma.fine.findMany()
     * 
     * // Get first 10 Fines
     * const fines = await prisma.fine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fineWithIdOnly = await prisma.fine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FineFindManyArgs>(args?: SelectSubset<T, FineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fine.
     * @param {FineCreateArgs} args - Arguments to create a Fine.
     * @example
     * // Create one Fine
     * const Fine = await prisma.fine.create({
     *   data: {
     *     // ... data to create a Fine
     *   }
     * })
     * 
     */
    create<T extends FineCreateArgs>(args: SelectSubset<T, FineCreateArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fines.
     * @param {FineCreateManyArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FineCreateManyArgs>(args?: SelectSubset<T, FineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fines and returns the data saved in the database.
     * @param {FineCreateManyAndReturnArgs} args - Arguments to create many Fines.
     * @example
     * // Create many Fines
     * const fine = await prisma.fine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fines and only return the `id`
     * const fineWithIdOnly = await prisma.fine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FineCreateManyAndReturnArgs>(args?: SelectSubset<T, FineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fine.
     * @param {FineDeleteArgs} args - Arguments to delete one Fine.
     * @example
     * // Delete one Fine
     * const Fine = await prisma.fine.delete({
     *   where: {
     *     // ... filter to delete one Fine
     *   }
     * })
     * 
     */
    delete<T extends FineDeleteArgs>(args: SelectSubset<T, FineDeleteArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fine.
     * @param {FineUpdateArgs} args - Arguments to update one Fine.
     * @example
     * // Update one Fine
     * const fine = await prisma.fine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FineUpdateArgs>(args: SelectSubset<T, FineUpdateArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fines.
     * @param {FineDeleteManyArgs} args - Arguments to filter Fines to delete.
     * @example
     * // Delete a few Fines
     * const { count } = await prisma.fine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FineDeleteManyArgs>(args?: SelectSubset<T, FineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FineUpdateManyArgs>(args: SelectSubset<T, FineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fines and returns the data updated in the database.
     * @param {FineUpdateManyAndReturnArgs} args - Arguments to update many Fines.
     * @example
     * // Update many Fines
     * const fine = await prisma.fine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fines and only return the `id`
     * const fineWithIdOnly = await prisma.fine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FineUpdateManyAndReturnArgs>(args: SelectSubset<T, FineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fine.
     * @param {FineUpsertArgs} args - Arguments to update or create a Fine.
     * @example
     * // Update or create a Fine
     * const fine = await prisma.fine.upsert({
     *   create: {
     *     // ... data to create a Fine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fine we want to update
     *   }
     * })
     */
    upsert<T extends FineUpsertArgs>(args: SelectSubset<T, FineUpsertArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineCountArgs} args - Arguments to filter Fines to count.
     * @example
     * // Count the number of Fines
     * const count = await prisma.fine.count({
     *   where: {
     *     // ... the filter for the Fines we want to count
     *   }
     * })
    **/
    count<T extends FineCountArgs>(
      args?: Subset<T, FineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FineAggregateArgs>(args: Subset<T, FineAggregateArgs>): Prisma.PrismaPromise<GetFineAggregateType<T>>

    /**
     * Group by Fine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FineGroupByArgs['orderBy'] }
        : { orderBy?: FineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fine model
   */
  readonly fields: FineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issues<T extends Fine$issuesArgs<ExtArgs> = {}>(args?: Subset<T, Fine$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Fine$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Fine$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Fine model
   */ 
  interface FineFieldRefs {
    readonly id: FieldRef<"Fine", 'String'>
    readonly fineCategory: FieldRef<"Fine", 'String'>
    readonly violationType: FieldRef<"Fine", 'String'>
    readonly fineCharge: FieldRef<"Fine", 'Float'>
    readonly provision: FieldRef<"Fine", 'String'>
    readonly sectionOfAct: FieldRef<"Fine", 'String'>
    readonly violationDescription: FieldRef<"Fine", 'String'>
    readonly createdAt: FieldRef<"Fine", 'DateTime'>
    readonly updatedAt: FieldRef<"Fine", 'DateTime'>
    readonly deletedAt: FieldRef<"Fine", 'DateTime'>
    readonly deleted: FieldRef<"Fine", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Fine findUnique
   */
  export type FineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine findUniqueOrThrow
   */
  export type FineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine findFirst
   */
  export type FineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine findFirstOrThrow
   */
  export type FineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fine to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fines.
     */
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine findMany
   */
  export type FineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter, which Fines to fetch.
     */
    where?: FineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fines to fetch.
     */
    orderBy?: FineOrderByWithRelationInput | FineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fines.
     */
    cursor?: FineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fines.
     */
    skip?: number
    distinct?: FineScalarFieldEnum | FineScalarFieldEnum[]
  }

  /**
   * Fine create
   */
  export type FineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The data needed to create a Fine.
     */
    data: XOR<FineCreateInput, FineUncheckedCreateInput>
  }

  /**
   * Fine createMany
   */
  export type FineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fines.
     */
    data: FineCreateManyInput | FineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fine createManyAndReturn
   */
  export type FineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * The data used to create many Fines.
     */
    data: FineCreateManyInput | FineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fine update
   */
  export type FineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The data needed to update a Fine.
     */
    data: XOR<FineUpdateInput, FineUncheckedUpdateInput>
    /**
     * Choose, which Fine to update.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine updateMany
   */
  export type FineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fines.
     */
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyInput>
    /**
     * Filter which Fines to update
     */
    where?: FineWhereInput
    /**
     * Limit how many Fines to update.
     */
    limit?: number
  }

  /**
   * Fine updateManyAndReturn
   */
  export type FineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * The data used to update Fines.
     */
    data: XOR<FineUpdateManyMutationInput, FineUncheckedUpdateManyInput>
    /**
     * Filter which Fines to update
     */
    where?: FineWhereInput
    /**
     * Limit how many Fines to update.
     */
    limit?: number
  }

  /**
   * Fine upsert
   */
  export type FineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * The filter to search for the Fine to update in case it exists.
     */
    where: FineWhereUniqueInput
    /**
     * In case the Fine found by the `where` argument doesn't exist, create a new Fine with this data.
     */
    create: XOR<FineCreateInput, FineUncheckedCreateInput>
    /**
     * In case the Fine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FineUpdateInput, FineUncheckedUpdateInput>
  }

  /**
   * Fine delete
   */
  export type FineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
    /**
     * Filter which Fine to delete.
     */
    where: FineWhereUniqueInput
  }

  /**
   * Fine deleteMany
   */
  export type FineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fines to delete
     */
    where?: FineWhereInput
    /**
     * Limit how many Fines to delete.
     */
    limit?: number
  }

  /**
   * Fine.issues
   */
  export type Fine$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Fine.payments
   */
  export type Fine$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Fine without action
   */
  export type FineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fine
     */
    select?: FineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fine
     */
    omit?: FineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FineInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    paymentStatus: $Enums.PaymentStatus | null
    transactionId: string | null
    paymentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    issueId: string | null
    fineId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    paymentStatus: $Enums.PaymentStatus | null
    transactionId: string | null
    paymentDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    issueId: string | null
    fineId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    paymentStatus: number
    transactionId: number
    paymentDate: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    issueId: number
    fineId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentStatus?: true
    transactionId?: true
    paymentDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    issueId?: true
    fineId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentStatus?: true
    transactionId?: true
    paymentDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    issueId?: true
    fineId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    paymentStatus?: true
    transactionId?: true
    paymentDate?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    issueId?: true
    fineId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    userId: string
    amount: number
    paymentStatus: $Enums.PaymentStatus
    transactionId: string
    paymentDate: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    issueId: string
    fineId: string
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentStatus?: boolean
    transactionId?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    issueId?: boolean
    fineId?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    fine?: boolean | FineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentStatus?: boolean
    transactionId?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    issueId?: boolean
    fineId?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    fine?: boolean | FineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentStatus?: boolean
    transactionId?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    issueId?: boolean
    fineId?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    fine?: boolean | FineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    paymentStatus?: boolean
    transactionId?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    issueId?: boolean
    fineId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "paymentStatus" | "transactionId" | "paymentDate" | "createdAt" | "updatedAt" | "deletedAt" | "deleted" | "issueId" | "fineId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    fine?: boolean | FineDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    fine?: boolean | FineDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    fine?: boolean | FineDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      issue: Prisma.$IssuePayload<ExtArgs>
      fine: Prisma.$FinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      paymentStatus: $Enums.PaymentStatus
      transactionId: string
      paymentDate: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
      issueId: string
      fineId: string
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fine<T extends FineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FineDefaultArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */ 
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paymentStatus: FieldRef<"Payment", 'PaymentStatus'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
    readonly deletedAt: FieldRef<"Payment", 'DateTime'>
    readonly deleted: FieldRef<"Payment", 'Boolean'>
    readonly issueId: FieldRef<"Payment", 'String'>
    readonly fineId: FieldRef<"Payment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Issue
   */

  export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  export type IssueMinAggregateOutputType = {
    id: string | null
    paymentId: string | null
    vehicleNo: string | null
    courtDate: Date | null
    location: string | null
    status: $Enums.IssueStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    fineId: string | null
    enforcerId: string | null
    licenseId: string | null
  }

  export type IssueMaxAggregateOutputType = {
    id: string | null
    paymentId: string | null
    vehicleNo: string | null
    courtDate: Date | null
    location: string | null
    status: $Enums.IssueStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    fineId: string | null
    enforcerId: string | null
    licenseId: string | null
  }

  export type IssueCountAggregateOutputType = {
    id: number
    paymentId: number
    vehicleNo: number
    courtDate: number
    location: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    fineId: number
    enforcerId: number
    licenseId: number
    _all: number
  }


  export type IssueMinAggregateInputType = {
    id?: true
    paymentId?: true
    vehicleNo?: true
    courtDate?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    fineId?: true
    enforcerId?: true
    licenseId?: true
  }

  export type IssueMaxAggregateInputType = {
    id?: true
    paymentId?: true
    vehicleNo?: true
    courtDate?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    fineId?: true
    enforcerId?: true
    licenseId?: true
  }

  export type IssueCountAggregateInputType = {
    id?: true
    paymentId?: true
    vehicleNo?: true
    courtDate?: true
    location?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    fineId?: true
    enforcerId?: true
    licenseId?: true
    _all?: true
  }

  export type IssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType
  }

  export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssue[P]>
      : GetScalarType<T[P], AggregateIssue[P]>
  }




  export type IssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithAggregationInput | IssueOrderByWithAggregationInput[]
    by: IssueScalarFieldEnum[] | IssueScalarFieldEnum
    having?: IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueCountAggregateInputType | true
    _min?: IssueMinAggregateInputType
    _max?: IssueMaxAggregateInputType
  }

  export type IssueGroupByOutputType = {
    id: string
    paymentId: string
    vehicleNo: string
    courtDate: Date
    location: string
    status: $Enums.IssueStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    fineId: string
    enforcerId: string
    licenseId: string
    _count: IssueCountAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueGroupByOutputType[P]>
            : GetScalarType<T[P], IssueGroupByOutputType[P]>
        }
      >
    >


  export type IssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    vehicleNo?: boolean
    courtDate?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    fineId?: boolean
    enforcerId?: boolean
    licenseId?: boolean
    fine?: boolean | FineDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    payment?: boolean | Issue$paymentArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    vehicleNo?: boolean
    courtDate?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    fineId?: boolean
    enforcerId?: boolean
    licenseId?: boolean
    fine?: boolean | FineDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    paymentId?: boolean
    vehicleNo?: boolean
    courtDate?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    fineId?: boolean
    enforcerId?: boolean
    licenseId?: boolean
    fine?: boolean | FineDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectScalar = {
    id?: boolean
    paymentId?: boolean
    vehicleNo?: boolean
    courtDate?: boolean
    location?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    fineId?: boolean
    enforcerId?: boolean
    licenseId?: boolean
  }

  export type IssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "paymentId" | "vehicleNo" | "courtDate" | "location" | "status" | "createdAt" | "updatedAt" | "deletedAt" | "deleted" | "fineId" | "enforcerId" | "licenseId", ExtArgs["result"]["issue"]>
  export type IssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | FineDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    payment?: boolean | Issue$paymentArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }
  export type IssueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | FineDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }
  export type IssueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fine?: boolean | FineDefaultArgs<ExtArgs>
    staff?: boolean | StaffDefaultArgs<ExtArgs>
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }

  export type $IssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issue"
    objects: {
      fine: Prisma.$FinePayload<ExtArgs>
      staff: Prisma.$StaffPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      license: Prisma.$LicensePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      paymentId: string
      vehicleNo: string
      courtDate: Date
      location: string
      status: $Enums.IssueStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
      fineId: string
      enforcerId: string
      licenseId: string
    }, ExtArgs["result"]["issue"]>
    composites: {}
  }

  type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = $Result.GetResult<Prisma.$IssuePayload, S>

  type IssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssueCountAggregateInputType | true
    }

  export interface IssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issue'], meta: { name: 'Issue' } }
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueFindUniqueArgs>(args: SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Issue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueFindFirstArgs>(args?: SelectSubset<T, IssueFindFirstArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssueFindManyArgs>(args?: SelectSubset<T, IssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     * 
     */
    create<T extends IssueCreateArgs>(args: SelectSubset<T, IssueCreateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Issues.
     * @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueCreateManyArgs>(args?: SelectSubset<T, IssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Issues and returns the data saved in the database.
     * @param {IssueCreateManyAndReturnArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssueCreateManyAndReturnArgs>(args?: SelectSubset<T, IssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     * 
     */
    delete<T extends IssueDeleteArgs>(args: SelectSubset<T, IssueDeleteArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueUpdateArgs>(args: SelectSubset<T, IssueUpdateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueDeleteManyArgs>(args?: SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueUpdateManyArgs>(args: SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues and returns the data updated in the database.
     * @param {IssueUpdateManyAndReturnArgs} args - Arguments to update many Issues.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IssueUpdateManyAndReturnArgs>(args: SelectSubset<T, IssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
     */
    upsert<T extends IssueUpsertArgs>(args: SelectSubset<T, IssueUpsertArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(
      args?: Subset<T, IssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssueAggregateArgs>(args: Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>

    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueGroupByArgs['orderBy'] }
        : { orderBy?: IssueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issue model
   */
  readonly fields: IssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fine<T extends FineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FineDefaultArgs<ExtArgs>>): Prisma__FineClient<$Result.GetResult<Prisma.$FinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends StaffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaffDefaultArgs<ExtArgs>>): Prisma__StaffClient<$Result.GetResult<Prisma.$StaffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Issue$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Issue$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    license<T extends LicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseDefaultArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Issue model
   */ 
  interface IssueFieldRefs {
    readonly id: FieldRef<"Issue", 'String'>
    readonly paymentId: FieldRef<"Issue", 'String'>
    readonly vehicleNo: FieldRef<"Issue", 'String'>
    readonly courtDate: FieldRef<"Issue", 'DateTime'>
    readonly location: FieldRef<"Issue", 'String'>
    readonly status: FieldRef<"Issue", 'IssueStatus'>
    readonly createdAt: FieldRef<"Issue", 'DateTime'>
    readonly updatedAt: FieldRef<"Issue", 'DateTime'>
    readonly deletedAt: FieldRef<"Issue", 'DateTime'>
    readonly deleted: FieldRef<"Issue", 'Boolean'>
    readonly fineId: FieldRef<"Issue", 'String'>
    readonly enforcerId: FieldRef<"Issue", 'String'>
    readonly licenseId: FieldRef<"Issue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Issue findUnique
   */
  export type IssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findUniqueOrThrow
   */
  export type IssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findFirst
   */
  export type IssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findFirstOrThrow
   */
  export type IssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findMany
   */
  export type IssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue create
   */
  export type IssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to create a Issue.
     */
    data: XOR<IssueCreateInput, IssueUncheckedCreateInput>
  }

  /**
   * Issue createMany
   */
  export type IssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issue createManyAndReturn
   */
  export type IssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue update
   */
  export type IssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to update a Issue.
     */
    data: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
    /**
     * Choose, which Issue to update.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue updateMany
   */
  export type IssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
  }

  /**
   * Issue updateManyAndReturn
   */
  export type IssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue upsert
   */
  export type IssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: IssueWhereUniqueInput
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: XOR<IssueCreateInput, IssueUncheckedCreateInput>
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
  }

  /**
   * Issue delete
   */
  export type IssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter which Issue to delete.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue deleteMany
   */
  export type IssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to delete.
     */
    limit?: number
  }

  /**
   * Issue.payment
   */
  export type Issue$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Issue without action
   */
  export type IssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
  }


  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.AppointmentType | null
    scheduledAt: Date | null
    status: $Enums.AppointmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.AppointmentType | null
    scheduledAt: Date | null
    status: $Enums.AppointmentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    scheduledAt: number
    status: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    _all: number
  }


  export type AppointmentMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    scheduledAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    scheduledAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    scheduledAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.AppointmentType
    scheduledAt: Date
    status: $Enums.AppointmentStatus
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    _count: AppointmentCountAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    scheduledAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    users?: boolean | Appointment$usersArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    scheduledAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    scheduledAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }, ExtArgs["result"]["appointment"]>

  export type AppointmentSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    scheduledAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "scheduledAt" | "status" | "createdAt" | "updatedAt" | "deletedAt" | "deleted", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Appointment$usersArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppointmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AppointmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.AppointmentType
      scheduledAt: Date
      status: $Enums.AppointmentStatus
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Appointments and returns the data saved in the database.
     * @param {AppointmentCreateManyAndReturnArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppointmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AppointmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments and returns the data updated in the database.
     * @param {AppointmentUpdateManyAndReturnArgs} args - Arguments to update many Appointments.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Appointments and only return the `id`
     * const appointmentWithIdOnly = await prisma.appointment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppointmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AppointmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Appointment$usersArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Appointment model
   */ 
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly userId: FieldRef<"Appointment", 'String'>
    readonly type: FieldRef<"Appointment", 'AppointmentType'>
    readonly scheduledAt: FieldRef<"Appointment", 'DateTime'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
    readonly deletedAt: FieldRef<"Appointment", 'DateTime'>
    readonly deleted: FieldRef<"Appointment", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment createManyAndReturn
   */
  export type AppointmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment updateManyAndReturn
   */
  export type AppointmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.users
   */
  export type Appointment$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model Log
   */

  export type AggregateLog = {
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  export type LogMinAggregateOutputType = {
    id: string | null
    tableName: string | null
    recordId: string | null
    action: $Enums.Action | null
    oldValue: string | null
    newValue: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    userId: string | null
  }

  export type LogMaxAggregateOutputType = {
    id: string | null
    tableName: string | null
    recordId: string | null
    action: $Enums.Action | null
    oldValue: string | null
    newValue: string | null
    timestamp: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
    deleted: boolean | null
    userId: string | null
  }

  export type LogCountAggregateOutputType = {
    id: number
    tableName: number
    recordId: number
    action: number
    oldValue: number
    newValue: number
    timestamp: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    deleted: number
    userId: number
    _all: number
  }


  export type LogMinAggregateInputType = {
    id?: true
    tableName?: true
    recordId?: true
    action?: true
    oldValue?: true
    newValue?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    userId?: true
  }

  export type LogMaxAggregateInputType = {
    id?: true
    tableName?: true
    recordId?: true
    action?: true
    oldValue?: true
    newValue?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    userId?: true
  }

  export type LogCountAggregateInputType = {
    id?: true
    tableName?: true
    recordId?: true
    action?: true
    oldValue?: true
    newValue?: true
    timestamp?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    deleted?: true
    userId?: true
    _all?: true
  }

  export type LogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log to aggregate.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Logs
    **/
    _count?: true | LogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogMaxAggregateInputType
  }

  export type GetLogAggregateType<T extends LogAggregateArgs> = {
        [P in keyof T & keyof AggregateLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog[P]>
      : GetScalarType<T[P], AggregateLog[P]>
  }




  export type LogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogWhereInput
    orderBy?: LogOrderByWithAggregationInput | LogOrderByWithAggregationInput[]
    by: LogScalarFieldEnum[] | LogScalarFieldEnum
    having?: LogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogCountAggregateInputType | true
    _min?: LogMinAggregateInputType
    _max?: LogMaxAggregateInputType
  }

  export type LogGroupByOutputType = {
    id: string
    tableName: string
    recordId: string
    action: $Enums.Action
    oldValue: string
    newValue: string
    timestamp: Date
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    deleted: boolean
    userId: string
    _count: LogCountAggregateOutputType | null
    _min: LogMinAggregateOutputType | null
    _max: LogMaxAggregateOutputType | null
  }

  type GetLogGroupByPayload<T extends LogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogGroupByOutputType[P]>
            : GetScalarType<T[P], LogGroupByOutputType[P]>
        }
      >
    >


  export type LogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableName?: boolean
    recordId?: boolean
    action?: boolean
    oldValue?: boolean
    newValue?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableName?: boolean
    recordId?: boolean
    action?: boolean
    oldValue?: boolean
    newValue?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tableName?: boolean
    recordId?: boolean
    action?: boolean
    oldValue?: boolean
    newValue?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log"]>

  export type LogSelectScalar = {
    id?: boolean
    tableName?: boolean
    recordId?: boolean
    action?: boolean
    oldValue?: boolean
    newValue?: boolean
    timestamp?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deleted?: boolean
    userId?: boolean
  }

  export type LogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tableName" | "recordId" | "action" | "oldValue" | "newValue" | "timestamp" | "createdAt" | "updatedAt" | "deletedAt" | "deleted" | "userId", ExtArgs["result"]["log"]>
  export type LogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tableName: string
      recordId: string
      action: $Enums.Action
      oldValue: string
      newValue: string
      timestamp: Date
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
      deleted: boolean
      userId: string
    }, ExtArgs["result"]["log"]>
    composites: {}
  }

  type LogGetPayload<S extends boolean | null | undefined | LogDefaultArgs> = $Result.GetResult<Prisma.$LogPayload, S>

  type LogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogCountAggregateInputType | true
    }

  export interface LogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log'], meta: { name: 'Log' } }
    /**
     * Find zero or one Log that matches the filter.
     * @param {LogFindUniqueArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogFindUniqueArgs>(args: SelectSubset<T, LogFindUniqueArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogFindUniqueOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogFindUniqueOrThrowArgs>(args: SelectSubset<T, LogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogFindFirstArgs>(args?: SelectSubset<T, LogFindFirstArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindFirstOrThrowArgs} args - Arguments to find a Log
     * @example
     * // Get one Log
     * const log = await prisma.log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogFindFirstOrThrowArgs>(args?: SelectSubset<T, LogFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.log.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.log.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logWithIdOnly = await prisma.log.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LogFindManyArgs>(args?: SelectSubset<T, LogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log.
     * @param {LogCreateArgs} args - Arguments to create a Log.
     * @example
     * // Create one Log
     * const Log = await prisma.log.create({
     *   data: {
     *     // ... data to create a Log
     *   }
     * })
     * 
     */
    create<T extends LogCreateArgs>(args: SelectSubset<T, LogCreateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {LogCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogCreateManyArgs>(args?: SelectSubset<T, LogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Logs and returns the data saved in the database.
     * @param {LogCreateManyAndReturnArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const log = await prisma.log.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogCreateManyAndReturnArgs>(args?: SelectSubset<T, LogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log.
     * @param {LogDeleteArgs} args - Arguments to delete one Log.
     * @example
     * // Delete one Log
     * const Log = await prisma.log.delete({
     *   where: {
     *     // ... filter to delete one Log
     *   }
     * })
     * 
     */
    delete<T extends LogDeleteArgs>(args: SelectSubset<T, LogDeleteArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log.
     * @param {LogUpdateArgs} args - Arguments to update one Log.
     * @example
     * // Update one Log
     * const log = await prisma.log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogUpdateArgs>(args: SelectSubset<T, LogUpdateArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {LogDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogDeleteManyArgs>(args?: SelectSubset<T, LogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogUpdateManyArgs>(args: SelectSubset<T, LogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs and returns the data updated in the database.
     * @param {LogUpdateManyAndReturnArgs} args - Arguments to update many Logs.
     * @example
     * // Update many Logs
     * const log = await prisma.log.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Logs and only return the `id`
     * const logWithIdOnly = await prisma.log.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LogUpdateManyAndReturnArgs>(args: SelectSubset<T, LogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log.
     * @param {LogUpsertArgs} args - Arguments to update or create a Log.
     * @example
     * // Update or create a Log
     * const log = await prisma.log.upsert({
     *   create: {
     *     // ... data to create a Log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log we want to update
     *   }
     * })
     */
    upsert<T extends LogUpsertArgs>(args: SelectSubset<T, LogUpsertArgs<ExtArgs>>): Prisma__LogClient<$Result.GetResult<Prisma.$LogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.log.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends LogCountArgs>(
      args?: Subset<T, LogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LogAggregateArgs>(args: Subset<T, LogAggregateArgs>): Prisma.PrismaPromise<GetLogAggregateType<T>>

    /**
     * Group by Log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogGroupByArgs['orderBy'] }
        : { orderBy?: LogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log model
   */
  readonly fields: LogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log model
   */ 
  interface LogFieldRefs {
    readonly id: FieldRef<"Log", 'String'>
    readonly tableName: FieldRef<"Log", 'String'>
    readonly recordId: FieldRef<"Log", 'String'>
    readonly action: FieldRef<"Log", 'Action'>
    readonly oldValue: FieldRef<"Log", 'String'>
    readonly newValue: FieldRef<"Log", 'String'>
    readonly timestamp: FieldRef<"Log", 'DateTime'>
    readonly createdAt: FieldRef<"Log", 'DateTime'>
    readonly updatedAt: FieldRef<"Log", 'DateTime'>
    readonly deletedAt: FieldRef<"Log", 'DateTime'>
    readonly deleted: FieldRef<"Log", 'Boolean'>
    readonly userId: FieldRef<"Log", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Log findUnique
   */
  export type LogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findUniqueOrThrow
   */
  export type LogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log findFirst
   */
  export type LogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findFirstOrThrow
   */
  export type LogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Log to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Logs.
     */
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log findMany
   */
  export type LogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter, which Logs to fetch.
     */
    where?: LogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Logs to fetch.
     */
    orderBy?: LogOrderByWithRelationInput | LogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Logs.
     */
    cursor?: LogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Logs.
     */
    skip?: number
    distinct?: LogScalarFieldEnum | LogScalarFieldEnum[]
  }

  /**
   * Log create
   */
  export type LogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to create a Log.
     */
    data: XOR<LogCreateInput, LogUncheckedCreateInput>
  }

  /**
   * Log createMany
   */
  export type LogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log createManyAndReturn
   */
  export type LogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to create many Logs.
     */
    data: LogCreateManyInput | LogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log update
   */
  export type LogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The data needed to update a Log.
     */
    data: XOR<LogUpdateInput, LogUncheckedUpdateInput>
    /**
     * Choose, which Log to update.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log updateMany
   */
  export type LogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
  }

  /**
   * Log updateManyAndReturn
   */
  export type LogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * The data used to update Logs.
     */
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyInput>
    /**
     * Filter which Logs to update
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log upsert
   */
  export type LogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * The filter to search for the Log to update in case it exists.
     */
    where: LogWhereUniqueInput
    /**
     * In case the Log found by the `where` argument doesn't exist, create a new Log with this data.
     */
    create: XOR<LogCreateInput, LogUncheckedCreateInput>
    /**
     * In case the Log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogUpdateInput, LogUncheckedUpdateInput>
  }

  /**
   * Log delete
   */
  export type LogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
    /**
     * Filter which Log to delete.
     */
    where: LogWhereUniqueInput
  }

  /**
   * Log deleteMany
   */
  export type LogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Logs to delete
     */
    where?: LogWhereInput
    /**
     * Limit how many Logs to delete.
     */
    limit?: number
  }

  /**
   * Log without action
   */
  export type LogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log
     */
    select?: LogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log
     */
    omit?: LogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressScalarFieldEnum: {
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

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const MedicalScalarFieldEnum: {
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

  export type MedicalScalarFieldEnum = (typeof MedicalScalarFieldEnum)[keyof typeof MedicalScalarFieldEnum]


  export const VehicleCategoryScalarFieldEnum: {
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

  export type VehicleCategoryScalarFieldEnum = (typeof VehicleCategoryScalarFieldEnum)[keyof typeof VehicleCategoryScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
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

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StaffScalarFieldEnum: {
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

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const LicenseVehicleCategoryScalarFieldEnum: {
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

  export type LicenseVehicleCategoryScalarFieldEnum = (typeof LicenseVehicleCategoryScalarFieldEnum)[keyof typeof LicenseVehicleCategoryScalarFieldEnum]


  export const FineScalarFieldEnum: {
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

  export type FineScalarFieldEnum = (typeof FineScalarFieldEnum)[keyof typeof FineScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
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

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const IssueScalarFieldEnum: {
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

  export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum]


  export const AppointmentScalarFieldEnum: {
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

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const LogScalarFieldEnum: {
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

  export type LogScalarFieldEnum = (typeof LogScalarFieldEnum)[keyof typeof LogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Province'
   */
  export type EnumProvinceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Province'>
    


  /**
   * Reference to a field of type 'Province[]'
   */
  export type ListEnumProvinceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Province[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BloodGroup'
   */
  export type EnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup'>
    


  /**
   * Reference to a field of type 'BloodGroup[]'
   */
  export type ListEnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'LicenseType'
   */
  export type EnumLicenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseType'>
    


  /**
   * Reference to a field of type 'LicenseType[]'
   */
  export type ListEnumLicenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseType[]'>
    


  /**
   * Reference to a field of type 'LicenseStatus'
   */
  export type EnumLicenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseStatus'>
    


  /**
   * Reference to a field of type 'LicenseStatus[]'
   */
  export type ListEnumLicenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseStatus[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'CategoryStatus'
   */
  export type EnumCategoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryStatus'>
    


  /**
   * Reference to a field of type 'CategoryStatus[]'
   */
  export type ListEnumCategoryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'IssueStatus'
   */
  export type EnumIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueStatus'>
    


  /**
   * Reference to a field of type 'IssueStatus[]'
   */
  export type ListEnumIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueStatus[]'>
    


  /**
   * Reference to a field of type 'AppointmentType'
   */
  export type EnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType'>
    


  /**
   * Reference to a field of type 'AppointmentType[]'
   */
  export type ListEnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType[]'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'AppointmentStatus[]'
   */
  export type ListEnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus[]'>
    


  /**
   * Reference to a field of type 'Action'
   */
  export type EnumActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Action'>
    


  /**
   * Reference to a field of type 'Action[]'
   */
  export type ListEnumActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Action[]'>
    
  /**
   * Deep Input Types
   */


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: StringFilter<"Address"> | string
    address?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    province?: EnumProvinceFilter<"Address"> | $Enums.Province
    country?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    deleted?: BoolFilter<"Address"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    License?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    province?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    user?: UserOrderByWithRelationInput
    License?: LicenseOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    address?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    district?: StringFilter<"Address"> | string
    province?: EnumProvinceFilter<"Address"> | $Enums.Province
    country?: StringFilter<"Address"> | string
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeFilter<"Address"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    deleted?: BoolFilter<"Address"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    License?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    province?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Address"> | string
    address?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    district?: StringWithAggregatesFilter<"Address"> | string
    province?: EnumProvinceWithAggregatesFilter<"Address"> | $Enums.Province
    country?: StringWithAggregatesFilter<"Address"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Address"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"Address"> | boolean
  }

  export type MedicalWhereInput = {
    AND?: MedicalWhereInput | MedicalWhereInput[]
    OR?: MedicalWhereInput[]
    NOT?: MedicalWhereInput | MedicalWhereInput[]
    id?: StringFilter<"Medical"> | string
    medical_report_photo?: StringFilter<"Medical"> | string
    blood_group?: EnumBloodGroupFilter<"Medical"> | $Enums.BloodGroup
    blood_pressure?: StringFilter<"Medical"> | string
    height?: StringFilter<"Medical"> | string
    weight?: StringFilter<"Medical"> | string
    dateOfBirth?: DateTimeFilter<"Medical"> | Date | string
    gender?: EnumGenderFilter<"Medical"> | $Enums.Gender
    createdAt?: DateTimeFilter<"Medical"> | Date | string
    updatedAt?: DateTimeFilter<"Medical"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Medical"> | Date | string | null
    deleted?: BoolFilter<"Medical"> | boolean
    license?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
  }

  export type MedicalOrderByWithRelationInput = {
    id?: SortOrder
    medical_report_photo?: SortOrder
    blood_group?: SortOrder
    blood_pressure?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    license?: LicenseOrderByWithRelationInput
  }

  export type MedicalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicalWhereInput | MedicalWhereInput[]
    OR?: MedicalWhereInput[]
    NOT?: MedicalWhereInput | MedicalWhereInput[]
    medical_report_photo?: StringFilter<"Medical"> | string
    blood_group?: EnumBloodGroupFilter<"Medical"> | $Enums.BloodGroup
    blood_pressure?: StringFilter<"Medical"> | string
    height?: StringFilter<"Medical"> | string
    weight?: StringFilter<"Medical"> | string
    dateOfBirth?: DateTimeFilter<"Medical"> | Date | string
    gender?: EnumGenderFilter<"Medical"> | $Enums.Gender
    createdAt?: DateTimeFilter<"Medical"> | Date | string
    updatedAt?: DateTimeFilter<"Medical"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Medical"> | Date | string | null
    deleted?: BoolFilter<"Medical"> | boolean
    license?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
  }, "id">

  export type MedicalOrderByWithAggregationInput = {
    id?: SortOrder
    medical_report_photo?: SortOrder
    blood_group?: SortOrder
    blood_pressure?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: MedicalCountOrderByAggregateInput
    _max?: MedicalMaxOrderByAggregateInput
    _min?: MedicalMinOrderByAggregateInput
  }

  export type MedicalScalarWhereWithAggregatesInput = {
    AND?: MedicalScalarWhereWithAggregatesInput | MedicalScalarWhereWithAggregatesInput[]
    OR?: MedicalScalarWhereWithAggregatesInput[]
    NOT?: MedicalScalarWhereWithAggregatesInput | MedicalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medical"> | string
    medical_report_photo?: StringWithAggregatesFilter<"Medical"> | string
    blood_group?: EnumBloodGroupWithAggregatesFilter<"Medical"> | $Enums.BloodGroup
    blood_pressure?: StringWithAggregatesFilter<"Medical"> | string
    height?: StringWithAggregatesFilter<"Medical"> | string
    weight?: StringWithAggregatesFilter<"Medical"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"Medical"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"Medical"> | $Enums.Gender
    createdAt?: DateTimeWithAggregatesFilter<"Medical"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medical"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Medical"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"Medical"> | boolean
  }

  export type VehicleCategoryWhereInput = {
    AND?: VehicleCategoryWhereInput | VehicleCategoryWhereInput[]
    OR?: VehicleCategoryWhereInput[]
    NOT?: VehicleCategoryWhereInput | VehicleCategoryWhereInput[]
    id?: StringFilter<"VehicleCategory"> | string
    vehicleDescription?: StringFilter<"VehicleCategory"> | string
    vehicleType?: StringFilter<"VehicleCategory"> | string
    vehicleClass?: StringFilter<"VehicleCategory"> | string
    otherAllowedVehicleClasses?: StringNullableListFilter<"VehicleCategory">
    validityPeriod?: IntFilter<"VehicleCategory"> | number
    createdAt?: DateTimeFilter<"VehicleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"VehicleCategory"> | Date | string | null
    deleted?: BoolFilter<"VehicleCategory"> | boolean
    licenseVehicleCategories?: LicenseVehicleCategoryListRelationFilter
  }

  export type VehicleCategoryOrderByWithRelationInput = {
    id?: SortOrder
    vehicleDescription?: SortOrder
    vehicleType?: SortOrder
    vehicleClass?: SortOrder
    otherAllowedVehicleClasses?: SortOrder
    validityPeriod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    licenseVehicleCategories?: LicenseVehicleCategoryOrderByRelationAggregateInput
  }

  export type VehicleCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vehicleClass?: string
    AND?: VehicleCategoryWhereInput | VehicleCategoryWhereInput[]
    OR?: VehicleCategoryWhereInput[]
    NOT?: VehicleCategoryWhereInput | VehicleCategoryWhereInput[]
    vehicleDescription?: StringFilter<"VehicleCategory"> | string
    vehicleType?: StringFilter<"VehicleCategory"> | string
    otherAllowedVehicleClasses?: StringNullableListFilter<"VehicleCategory">
    validityPeriod?: IntFilter<"VehicleCategory"> | number
    createdAt?: DateTimeFilter<"VehicleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"VehicleCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"VehicleCategory"> | Date | string | null
    deleted?: BoolFilter<"VehicleCategory"> | boolean
    licenseVehicleCategories?: LicenseVehicleCategoryListRelationFilter
  }, "id" | "vehicleClass">

  export type VehicleCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    vehicleDescription?: SortOrder
    vehicleType?: SortOrder
    vehicleClass?: SortOrder
    otherAllowedVehicleClasses?: SortOrder
    validityPeriod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: VehicleCategoryCountOrderByAggregateInput
    _avg?: VehicleCategoryAvgOrderByAggregateInput
    _max?: VehicleCategoryMaxOrderByAggregateInput
    _min?: VehicleCategoryMinOrderByAggregateInput
    _sum?: VehicleCategorySumOrderByAggregateInput
  }

  export type VehicleCategoryScalarWhereWithAggregatesInput = {
    AND?: VehicleCategoryScalarWhereWithAggregatesInput | VehicleCategoryScalarWhereWithAggregatesInput[]
    OR?: VehicleCategoryScalarWhereWithAggregatesInput[]
    NOT?: VehicleCategoryScalarWhereWithAggregatesInput | VehicleCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VehicleCategory"> | string
    vehicleDescription?: StringWithAggregatesFilter<"VehicleCategory"> | string
    vehicleType?: StringWithAggregatesFilter<"VehicleCategory"> | string
    vehicleClass?: StringWithAggregatesFilter<"VehicleCategory"> | string
    otherAllowedVehicleClasses?: StringNullableListFilter<"VehicleCategory">
    validityPeriod?: IntWithAggregatesFilter<"VehicleCategory"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VehicleCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VehicleCategory"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"VehicleCategory"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"VehicleCategory"> | boolean
  }

  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    id?: StringFilter<"License"> | string
    licenseNumber?: StringFilter<"License"> | string
    nic?: StringFilter<"License"> | string
    photo?: StringFilter<"License"> | string
    nicFront?: StringFilter<"License"> | string
    nicBack?: StringFilter<"License"> | string
    previousLicense?: StringNullableFilter<"License"> | string | null
    phone?: StringFilter<"License"> | string
    firstName?: StringFilter<"License"> | string
    lastName?: StringFilter<"License"> | string
    licenseType?: EnumLicenseTypeFilter<"License"> | $Enums.LicenseType
    status?: EnumLicenseStatusFilter<"License"> | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFilter<"License"> | Date | string
    dateOfExpiry?: DateTimeNullableFilter<"License"> | Date | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    deletedAt?: DateTimeNullableFilter<"License"> | Date | string | null
    deleted?: BoolFilter<"License"> | boolean
    addressId?: StringFilter<"License"> | string
    medicalId?: StringFilter<"License"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    medical?: XOR<MedicalScalarRelationFilter, MedicalWhereInput>
    issues?: IssueListRelationFilter
    licenseVehicleCategories?: LicenseVehicleCategoryListRelationFilter
  }

  export type LicenseOrderByWithRelationInput = {
    id?: SortOrder
    licenseNumber?: SortOrder
    nic?: SortOrder
    photo?: SortOrder
    nicFront?: SortOrder
    nicBack?: SortOrder
    previousLicense?: SortOrderInput | SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    licenseType?: SortOrder
    status?: SortOrder
    dateOfIssue?: SortOrder
    dateOfExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    addressId?: SortOrder
    medicalId?: SortOrder
    user?: UserOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    medical?: MedicalOrderByWithRelationInput
    issues?: IssueOrderByRelationAggregateInput
    licenseVehicleCategories?: LicenseVehicleCategoryOrderByRelationAggregateInput
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseNumber?: string
    addressId?: string
    medicalId?: string
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    nic?: StringFilter<"License"> | string
    photo?: StringFilter<"License"> | string
    nicFront?: StringFilter<"License"> | string
    nicBack?: StringFilter<"License"> | string
    previousLicense?: StringNullableFilter<"License"> | string | null
    phone?: StringFilter<"License"> | string
    firstName?: StringFilter<"License"> | string
    lastName?: StringFilter<"License"> | string
    licenseType?: EnumLicenseTypeFilter<"License"> | $Enums.LicenseType
    status?: EnumLicenseStatusFilter<"License"> | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFilter<"License"> | Date | string
    dateOfExpiry?: DateTimeNullableFilter<"License"> | Date | string | null
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    deletedAt?: DateTimeNullableFilter<"License"> | Date | string | null
    deleted?: BoolFilter<"License"> | boolean
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    medical?: XOR<MedicalScalarRelationFilter, MedicalWhereInput>
    issues?: IssueListRelationFilter
    licenseVehicleCategories?: LicenseVehicleCategoryListRelationFilter
  }, "id" | "licenseNumber" | "addressId" | "medicalId">

  export type LicenseOrderByWithAggregationInput = {
    id?: SortOrder
    licenseNumber?: SortOrder
    nic?: SortOrder
    photo?: SortOrder
    nicFront?: SortOrder
    nicBack?: SortOrder
    previousLicense?: SortOrderInput | SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    licenseType?: SortOrder
    status?: SortOrder
    dateOfIssue?: SortOrder
    dateOfExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    addressId?: SortOrder
    medicalId?: SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"License"> | string
    licenseNumber?: StringWithAggregatesFilter<"License"> | string
    nic?: StringWithAggregatesFilter<"License"> | string
    photo?: StringWithAggregatesFilter<"License"> | string
    nicFront?: StringWithAggregatesFilter<"License"> | string
    nicBack?: StringWithAggregatesFilter<"License"> | string
    previousLicense?: StringNullableWithAggregatesFilter<"License"> | string | null
    phone?: StringWithAggregatesFilter<"License"> | string
    firstName?: StringWithAggregatesFilter<"License"> | string
    lastName?: StringWithAggregatesFilter<"License"> | string
    licenseType?: EnumLicenseTypeWithAggregatesFilter<"License"> | $Enums.LicenseType
    status?: EnumLicenseStatusWithAggregatesFilter<"License"> | $Enums.LicenseStatus
    dateOfIssue?: DateTimeWithAggregatesFilter<"License"> | Date | string
    dateOfExpiry?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"License"> | boolean
    addressId?: StringWithAggregatesFilter<"License"> | string
    medicalId?: StringWithAggregatesFilter<"License"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    nic?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    addressId?: StringFilter<"User"> | string
    licenseId?: StringFilter<"User"> | string
    appointmentId?: StringFilter<"User"> | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    logs?: LogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nic?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    addressId?: SortOrder
    licenseId?: SortOrder
    appointmentId?: SortOrder
    address?: AddressOrderByWithRelationInput
    staff?: StaffOrderByWithRelationInput
    license?: LicenseOrderByWithRelationInput
    appointment?: AppointmentOrderByWithRelationInput
    logs?: LogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    addressId?: string
    licenseId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    nic?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    appointmentId?: StringFilter<"User"> | string
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    staff?: XOR<StaffNullableScalarRelationFilter, StaffWhereInput> | null
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
    logs?: LogListRelationFilter
  }, "id" | "clerkId" | "email" | "addressId" | "licenseId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nic?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    addressId?: SortOrder
    licenseId?: SortOrder
    appointmentId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    nic?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    addressId?: StringWithAggregatesFilter<"User"> | string
    licenseId?: StringWithAggregatesFilter<"User"> | string
    appointmentId?: StringWithAggregatesFilter<"User"> | string
  }

  export type StaffWhereInput = {
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    id?: StringFilter<"Staff"> | string
    contactNumber?: StringFilter<"Staff"> | string
    email?: StringFilter<"Staff"> | string
    role?: EnumRoleFilter<"Staff"> | $Enums.Role
    permission?: StringNullableFilter<"Staff"> | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Staff"> | Date | string | null
    deleted?: BoolFilter<"Staff"> | boolean
    userId?: StringFilter<"Staff"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    issues?: IssueListRelationFilter
  }

  export type StaffOrderByWithRelationInput = {
    id?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    role?: SortOrder
    permission?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    issues?: IssueOrderByRelationAggregateInput
  }

  export type StaffWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    userId?: string
    AND?: StaffWhereInput | StaffWhereInput[]
    OR?: StaffWhereInput[]
    NOT?: StaffWhereInput | StaffWhereInput[]
    contactNumber?: StringFilter<"Staff"> | string
    role?: EnumRoleFilter<"Staff"> | $Enums.Role
    permission?: StringNullableFilter<"Staff"> | string | null
    createdAt?: DateTimeFilter<"Staff"> | Date | string
    updatedAt?: DateTimeFilter<"Staff"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Staff"> | Date | string | null
    deleted?: BoolFilter<"Staff"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    issues?: IssueListRelationFilter
  }, "id" | "email" | "userId">

  export type StaffOrderByWithAggregationInput = {
    id?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    role?: SortOrder
    permission?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    userId?: SortOrder
    _count?: StaffCountOrderByAggregateInput
    _max?: StaffMaxOrderByAggregateInput
    _min?: StaffMinOrderByAggregateInput
  }

  export type StaffScalarWhereWithAggregatesInput = {
    AND?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    OR?: StaffScalarWhereWithAggregatesInput[]
    NOT?: StaffScalarWhereWithAggregatesInput | StaffScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Staff"> | string
    contactNumber?: StringWithAggregatesFilter<"Staff"> | string
    email?: StringWithAggregatesFilter<"Staff"> | string
    role?: EnumRoleWithAggregatesFilter<"Staff"> | $Enums.Role
    permission?: StringNullableWithAggregatesFilter<"Staff"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Staff"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Staff"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"Staff"> | boolean
    userId?: StringWithAggregatesFilter<"Staff"> | string
  }

  export type LicenseVehicleCategoryWhereInput = {
    AND?: LicenseVehicleCategoryWhereInput | LicenseVehicleCategoryWhereInput[]
    OR?: LicenseVehicleCategoryWhereInput[]
    NOT?: LicenseVehicleCategoryWhereInput | LicenseVehicleCategoryWhereInput[]
    id?: StringFilter<"LicenseVehicleCategory"> | string
    dateOfIssue?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    dateOfExpiry?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    categoryStatus?: EnumCategoryStatusFilter<"LicenseVehicleCategory"> | $Enums.CategoryStatus
    createdAt?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"LicenseVehicleCategory"> | Date | string | null
    deleted?: BoolFilter<"LicenseVehicleCategory"> | boolean
    vehicleCategoryId?: StringFilter<"LicenseVehicleCategory"> | string
    licenseId?: StringFilter<"LicenseVehicleCategory"> | string
    vehicleCategory?: XOR<VehicleCategoryScalarRelationFilter, VehicleCategoryWhereInput>
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
  }

  export type LicenseVehicleCategoryOrderByWithRelationInput = {
    id?: SortOrder
    dateOfIssue?: SortOrder
    dateOfExpiry?: SortOrder
    categoryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    vehicleCategoryId?: SortOrder
    licenseId?: SortOrder
    vehicleCategory?: VehicleCategoryOrderByWithRelationInput
    license?: LicenseOrderByWithRelationInput
  }

  export type LicenseVehicleCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LicenseVehicleCategoryWhereInput | LicenseVehicleCategoryWhereInput[]
    OR?: LicenseVehicleCategoryWhereInput[]
    NOT?: LicenseVehicleCategoryWhereInput | LicenseVehicleCategoryWhereInput[]
    dateOfIssue?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    dateOfExpiry?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    categoryStatus?: EnumCategoryStatusFilter<"LicenseVehicleCategory"> | $Enums.CategoryStatus
    createdAt?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"LicenseVehicleCategory"> | Date | string | null
    deleted?: BoolFilter<"LicenseVehicleCategory"> | boolean
    vehicleCategoryId?: StringFilter<"LicenseVehicleCategory"> | string
    licenseId?: StringFilter<"LicenseVehicleCategory"> | string
    vehicleCategory?: XOR<VehicleCategoryScalarRelationFilter, VehicleCategoryWhereInput>
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
  }, "id">

  export type LicenseVehicleCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    dateOfIssue?: SortOrder
    dateOfExpiry?: SortOrder
    categoryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    vehicleCategoryId?: SortOrder
    licenseId?: SortOrder
    _count?: LicenseVehicleCategoryCountOrderByAggregateInput
    _max?: LicenseVehicleCategoryMaxOrderByAggregateInput
    _min?: LicenseVehicleCategoryMinOrderByAggregateInput
  }

  export type LicenseVehicleCategoryScalarWhereWithAggregatesInput = {
    AND?: LicenseVehicleCategoryScalarWhereWithAggregatesInput | LicenseVehicleCategoryScalarWhereWithAggregatesInput[]
    OR?: LicenseVehicleCategoryScalarWhereWithAggregatesInput[]
    NOT?: LicenseVehicleCategoryScalarWhereWithAggregatesInput | LicenseVehicleCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicenseVehicleCategory"> | string
    dateOfIssue?: DateTimeWithAggregatesFilter<"LicenseVehicleCategory"> | Date | string
    dateOfExpiry?: DateTimeWithAggregatesFilter<"LicenseVehicleCategory"> | Date | string
    categoryStatus?: EnumCategoryStatusWithAggregatesFilter<"LicenseVehicleCategory"> | $Enums.CategoryStatus
    createdAt?: DateTimeWithAggregatesFilter<"LicenseVehicleCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LicenseVehicleCategory"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"LicenseVehicleCategory"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"LicenseVehicleCategory"> | boolean
    vehicleCategoryId?: StringWithAggregatesFilter<"LicenseVehicleCategory"> | string
    licenseId?: StringWithAggregatesFilter<"LicenseVehicleCategory"> | string
  }

  export type FineWhereInput = {
    AND?: FineWhereInput | FineWhereInput[]
    OR?: FineWhereInput[]
    NOT?: FineWhereInput | FineWhereInput[]
    id?: StringFilter<"Fine"> | string
    fineCategory?: StringFilter<"Fine"> | string
    violationType?: StringFilter<"Fine"> | string
    fineCharge?: FloatFilter<"Fine"> | number
    provision?: StringFilter<"Fine"> | string
    sectionOfAct?: StringFilter<"Fine"> | string
    violationDescription?: StringFilter<"Fine"> | string
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Fine"> | Date | string | null
    deleted?: BoolFilter<"Fine"> | boolean
    issues?: IssueListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type FineOrderByWithRelationInput = {
    id?: SortOrder
    fineCategory?: SortOrder
    violationType?: SortOrder
    fineCharge?: SortOrder
    provision?: SortOrder
    sectionOfAct?: SortOrder
    violationDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    issues?: IssueOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type FineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FineWhereInput | FineWhereInput[]
    OR?: FineWhereInput[]
    NOT?: FineWhereInput | FineWhereInput[]
    fineCategory?: StringFilter<"Fine"> | string
    violationType?: StringFilter<"Fine"> | string
    fineCharge?: FloatFilter<"Fine"> | number
    provision?: StringFilter<"Fine"> | string
    sectionOfAct?: StringFilter<"Fine"> | string
    violationDescription?: StringFilter<"Fine"> | string
    createdAt?: DateTimeFilter<"Fine"> | Date | string
    updatedAt?: DateTimeFilter<"Fine"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Fine"> | Date | string | null
    deleted?: BoolFilter<"Fine"> | boolean
    issues?: IssueListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type FineOrderByWithAggregationInput = {
    id?: SortOrder
    fineCategory?: SortOrder
    violationType?: SortOrder
    fineCharge?: SortOrder
    provision?: SortOrder
    sectionOfAct?: SortOrder
    violationDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: FineCountOrderByAggregateInput
    _avg?: FineAvgOrderByAggregateInput
    _max?: FineMaxOrderByAggregateInput
    _min?: FineMinOrderByAggregateInput
    _sum?: FineSumOrderByAggregateInput
  }

  export type FineScalarWhereWithAggregatesInput = {
    AND?: FineScalarWhereWithAggregatesInput | FineScalarWhereWithAggregatesInput[]
    OR?: FineScalarWhereWithAggregatesInput[]
    NOT?: FineScalarWhereWithAggregatesInput | FineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fine"> | string
    fineCategory?: StringWithAggregatesFilter<"Fine"> | string
    violationType?: StringWithAggregatesFilter<"Fine"> | string
    fineCharge?: FloatWithAggregatesFilter<"Fine"> | number
    provision?: StringWithAggregatesFilter<"Fine"> | string
    sectionOfAct?: StringWithAggregatesFilter<"Fine"> | string
    violationDescription?: StringWithAggregatesFilter<"Fine"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fine"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Fine"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"Fine"> | boolean
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    deleted?: BoolFilter<"Payment"> | boolean
    issueId?: StringFilter<"Payment"> | string
    fineId?: StringFilter<"Payment"> | string
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
    fine?: XOR<FineScalarRelationFilter, FineWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentStatus?: SortOrder
    transactionId?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    issueId?: SortOrder
    fineId?: SortOrder
    issue?: IssueOrderByWithRelationInput
    fine?: FineOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    issueId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    deleted?: BoolFilter<"Payment"> | boolean
    fineId?: StringFilter<"Payment"> | string
    issue?: XOR<IssueScalarRelationFilter, IssueWhereInput>
    fine?: XOR<FineScalarRelationFilter, FineWhereInput>
  }, "id" | "issueId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentStatus?: SortOrder
    transactionId?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    issueId?: SortOrder
    fineId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    userId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringWithAggregatesFilter<"Payment"> | string
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"Payment"> | boolean
    issueId?: StringWithAggregatesFilter<"Payment"> | string
    fineId?: StringWithAggregatesFilter<"Payment"> | string
  }

  export type IssueWhereInput = {
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    id?: StringFilter<"Issue"> | string
    paymentId?: StringFilter<"Issue"> | string
    vehicleNo?: StringFilter<"Issue"> | string
    courtDate?: DateTimeFilter<"Issue"> | Date | string
    location?: StringFilter<"Issue"> | string
    status?: EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Issue"> | Date | string | null
    deleted?: BoolFilter<"Issue"> | boolean
    fineId?: StringFilter<"Issue"> | string
    enforcerId?: StringFilter<"Issue"> | string
    licenseId?: StringFilter<"Issue"> | string
    fine?: XOR<FineScalarRelationFilter, FineWhereInput>
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
  }

  export type IssueOrderByWithRelationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    vehicleNo?: SortOrder
    courtDate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    fineId?: SortOrder
    enforcerId?: SortOrder
    licenseId?: SortOrder
    fine?: FineOrderByWithRelationInput
    staff?: StaffOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    license?: LicenseOrderByWithRelationInput
  }

  export type IssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseId?: string
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    paymentId?: StringFilter<"Issue"> | string
    vehicleNo?: StringFilter<"Issue"> | string
    courtDate?: DateTimeFilter<"Issue"> | Date | string
    location?: StringFilter<"Issue"> | string
    status?: EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Issue"> | Date | string | null
    deleted?: BoolFilter<"Issue"> | boolean
    fineId?: StringFilter<"Issue"> | string
    enforcerId?: StringFilter<"Issue"> | string
    fine?: XOR<FineScalarRelationFilter, FineWhereInput>
    staff?: XOR<StaffScalarRelationFilter, StaffWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
  }, "id" | "licenseId">

  export type IssueOrderByWithAggregationInput = {
    id?: SortOrder
    paymentId?: SortOrder
    vehicleNo?: SortOrder
    courtDate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    fineId?: SortOrder
    enforcerId?: SortOrder
    licenseId?: SortOrder
    _count?: IssueCountOrderByAggregateInput
    _max?: IssueMaxOrderByAggregateInput
    _min?: IssueMinOrderByAggregateInput
  }

  export type IssueScalarWhereWithAggregatesInput = {
    AND?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    OR?: IssueScalarWhereWithAggregatesInput[]
    NOT?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Issue"> | string
    paymentId?: StringWithAggregatesFilter<"Issue"> | string
    vehicleNo?: StringWithAggregatesFilter<"Issue"> | string
    courtDate?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    location?: StringWithAggregatesFilter<"Issue"> | string
    status?: EnumIssueStatusWithAggregatesFilter<"Issue"> | $Enums.IssueStatus
    createdAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Issue"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"Issue"> | boolean
    fineId?: StringWithAggregatesFilter<"Issue"> | string
    enforcerId?: StringWithAggregatesFilter<"Issue"> | string
    licenseId?: StringWithAggregatesFilter<"Issue"> | string
  }

  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    userId?: StringFilter<"Appointment"> | string
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    scheduledAt?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    deleted?: BoolFilter<"Appointment"> | boolean
    users?: UserListRelationFilter
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    userId?: StringFilter<"Appointment"> | string
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    scheduledAt?: DateTimeFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    deleted?: BoolFilter<"Appointment"> | boolean
    users?: UserListRelationFilter
  }, "id">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    userId?: StringWithAggregatesFilter<"Appointment"> | string
    type?: EnumAppointmentTypeWithAggregatesFilter<"Appointment"> | $Enums.AppointmentType
    scheduledAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"Appointment"> | boolean
  }

  export type LogWhereInput = {
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    id?: StringFilter<"Log"> | string
    tableName?: StringFilter<"Log"> | string
    recordId?: StringFilter<"Log"> | string
    action?: EnumActionFilter<"Log"> | $Enums.Action
    oldValue?: StringFilter<"Log"> | string
    newValue?: StringFilter<"Log"> | string
    timestamp?: DateTimeFilter<"Log"> | Date | string
    createdAt?: DateTimeFilter<"Log"> | Date | string
    updatedAt?: DateTimeFilter<"Log"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Log"> | Date | string | null
    deleted?: BoolFilter<"Log"> | boolean
    userId?: StringFilter<"Log"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LogOrderByWithRelationInput = {
    id?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    action?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LogWhereInput | LogWhereInput[]
    OR?: LogWhereInput[]
    NOT?: LogWhereInput | LogWhereInput[]
    tableName?: StringFilter<"Log"> | string
    recordId?: StringFilter<"Log"> | string
    action?: EnumActionFilter<"Log"> | $Enums.Action
    oldValue?: StringFilter<"Log"> | string
    newValue?: StringFilter<"Log"> | string
    timestamp?: DateTimeFilter<"Log"> | Date | string
    createdAt?: DateTimeFilter<"Log"> | Date | string
    updatedAt?: DateTimeFilter<"Log"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Log"> | Date | string | null
    deleted?: BoolFilter<"Log"> | boolean
    userId?: StringFilter<"Log"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LogOrderByWithAggregationInput = {
    id?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    action?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deleted?: SortOrder
    userId?: SortOrder
    _count?: LogCountOrderByAggregateInput
    _max?: LogMaxOrderByAggregateInput
    _min?: LogMinOrderByAggregateInput
  }

  export type LogScalarWhereWithAggregatesInput = {
    AND?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    OR?: LogScalarWhereWithAggregatesInput[]
    NOT?: LogScalarWhereWithAggregatesInput | LogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Log"> | string
    tableName?: StringWithAggregatesFilter<"Log"> | string
    recordId?: StringWithAggregatesFilter<"Log"> | string
    action?: EnumActionWithAggregatesFilter<"Log"> | $Enums.Action
    oldValue?: StringWithAggregatesFilter<"Log"> | string
    newValue?: StringWithAggregatesFilter<"Log"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Log"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Log"> | Date | string | null
    deleted?: BoolWithAggregatesFilter<"Log"> | boolean
    userId?: StringWithAggregatesFilter<"Log"> | string
  }

  export type AddressCreateInput = {
    id?: string
    address: string
    city: string
    district: string
    province: $Enums.Province
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user?: UserCreateNestedOneWithoutAddressInput
    License?: LicenseCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    address: string
    city: string
    district: string
    province: $Enums.Province
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user?: UserUncheckedCreateNestedOneWithoutAddressInput
    License?: LicenseUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: EnumProvinceFieldUpdateOperationsInput | $Enums.Province
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutAddressNestedInput
    License?: LicenseUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: EnumProvinceFieldUpdateOperationsInput | $Enums.Province
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutAddressNestedInput
    License?: LicenseUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    address: string
    city: string
    district: string
    province: $Enums.Province
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: EnumProvinceFieldUpdateOperationsInput | $Enums.Province
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: EnumProvinceFieldUpdateOperationsInput | $Enums.Province
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicalCreateInput = {
    id?: string
    medical_report_photo: string
    blood_group: $Enums.BloodGroup
    blood_pressure: string
    height: string
    weight: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    license?: LicenseCreateNestedOneWithoutMedicalInput
  }

  export type MedicalUncheckedCreateInput = {
    id?: string
    medical_report_photo: string
    blood_group: $Enums.BloodGroup
    blood_pressure: string
    height: string
    weight: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    license?: LicenseUncheckedCreateNestedOneWithoutMedicalInput
  }

  export type MedicalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medical_report_photo?: StringFieldUpdateOperationsInput | string
    blood_group?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    blood_pressure?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    license?: LicenseUpdateOneWithoutMedicalNestedInput
  }

  export type MedicalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medical_report_photo?: StringFieldUpdateOperationsInput | string
    blood_group?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    blood_pressure?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    license?: LicenseUncheckedUpdateOneWithoutMedicalNestedInput
  }

  export type MedicalCreateManyInput = {
    id?: string
    medical_report_photo: string
    blood_group: $Enums.BloodGroup
    blood_pressure: string
    height: string
    weight: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type MedicalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    medical_report_photo?: StringFieldUpdateOperationsInput | string
    blood_group?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    blood_pressure?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medical_report_photo?: StringFieldUpdateOperationsInput | string
    blood_group?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    blood_pressure?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleCategoryCreateInput = {
    id?: string
    vehicleDescription: string
    vehicleType: string
    vehicleClass: string
    otherAllowedVehicleClasses?: VehicleCategoryCreateotherAllowedVehicleClassesInput | string[]
    validityPeriod: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    licenseVehicleCategories?: LicenseVehicleCategoryCreateNestedManyWithoutVehicleCategoryInput
  }

  export type VehicleCategoryUncheckedCreateInput = {
    id?: string
    vehicleDescription: string
    vehicleType: string
    vehicleClass: string
    otherAllowedVehicleClasses?: VehicleCategoryCreateotherAllowedVehicleClassesInput | string[]
    validityPeriod: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedCreateNestedManyWithoutVehicleCategoryInput
  }

  export type VehicleCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleDescription?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    vehicleClass?: StringFieldUpdateOperationsInput | string
    otherAllowedVehicleClasses?: VehicleCategoryUpdateotherAllowedVehicleClassesInput | string[]
    validityPeriod?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    licenseVehicleCategories?: LicenseVehicleCategoryUpdateManyWithoutVehicleCategoryNestedInput
  }

  export type VehicleCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleDescription?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    vehicleClass?: StringFieldUpdateOperationsInput | string
    otherAllowedVehicleClasses?: VehicleCategoryUpdateotherAllowedVehicleClassesInput | string[]
    validityPeriod?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedUpdateManyWithoutVehicleCategoryNestedInput
  }

  export type VehicleCategoryCreateManyInput = {
    id?: string
    vehicleDescription: string
    vehicleType: string
    vehicleClass: string
    otherAllowedVehicleClasses?: VehicleCategoryCreateotherAllowedVehicleClassesInput | string[]
    validityPeriod: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type VehicleCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleDescription?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    vehicleClass?: StringFieldUpdateOperationsInput | string
    otherAllowedVehicleClasses?: VehicleCategoryUpdateotherAllowedVehicleClassesInput | string[]
    validityPeriod?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleDescription?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    vehicleClass?: StringFieldUpdateOperationsInput | string
    otherAllowedVehicleClasses?: VehicleCategoryUpdateotherAllowedVehicleClassesInput | string[]
    validityPeriod?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LicenseCreateInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user?: UserCreateNestedOneWithoutLicenseInput
    address: AddressCreateNestedOneWithoutLicenseInput
    medical: MedicalCreateNestedOneWithoutLicenseInput
    issues?: IssueCreateNestedManyWithoutLicenseInput
    licenseVehicleCategories?: LicenseVehicleCategoryCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    addressId: string
    medicalId: string
    user?: UserUncheckedCreateNestedOneWithoutLicenseInput
    issues?: IssueUncheckedCreateNestedManyWithoutLicenseInput
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutLicenseNestedInput
    address?: AddressUpdateOneRequiredWithoutLicenseNestedInput
    medical?: MedicalUpdateOneRequiredWithoutLicenseNestedInput
    issues?: IssueUpdateManyWithoutLicenseNestedInput
    licenseVehicleCategories?: LicenseVehicleCategoryUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    addressId?: StringFieldUpdateOperationsInput | string
    medicalId?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutLicenseNestedInput
    issues?: IssueUncheckedUpdateManyWithoutLicenseNestedInput
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseCreateManyInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    addressId: string
    medicalId: string
  }

  export type LicenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LicenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    addressId?: StringFieldUpdateOperationsInput | string
    medicalId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    address: AddressCreateNestedOneWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    license: LicenseCreateNestedOneWithoutUserInput
    appointment: AppointmentCreateNestedOneWithoutUsersInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    addressId: string
    licenseId: string
    appointmentId: string
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    license?: LicenseUpdateOneRequiredWithoutUserNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutUsersNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    addressId: string
    licenseId: string
    appointmentId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
  }

  export type StaffCreateInput = {
    id?: string
    contactNumber: string
    email: string
    role: $Enums.Role
    permission?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user: UserCreateNestedOneWithoutStaffInput
    issues?: IssueCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateInput = {
    id?: string
    contactNumber: string
    email: string
    role: $Enums.Role
    permission?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    userId: string
    issues?: IssueUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutStaffNestedInput
    issues?: IssueUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    issues?: IssueUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type StaffCreateManyInput = {
    id?: string
    contactNumber: string
    email: string
    role: $Enums.Role
    permission?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    userId: string
  }

  export type StaffUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StaffUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseVehicleCategoryCreateInput = {
    id?: string
    dateOfIssue: Date | string
    dateOfExpiry: Date | string
    categoryStatus: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    vehicleCategory: VehicleCategoryCreateNestedOneWithoutLicenseVehicleCategoriesInput
    license: LicenseCreateNestedOneWithoutLicenseVehicleCategoriesInput
  }

  export type LicenseVehicleCategoryUncheckedCreateInput = {
    id?: string
    dateOfIssue: Date | string
    dateOfExpiry: Date | string
    categoryStatus: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    vehicleCategoryId: string
    licenseId: string
  }

  export type LicenseVehicleCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryStatus?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    vehicleCategory?: VehicleCategoryUpdateOneRequiredWithoutLicenseVehicleCategoriesNestedInput
    license?: LicenseUpdateOneRequiredWithoutLicenseVehicleCategoriesNestedInput
  }

  export type LicenseVehicleCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryStatus?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    vehicleCategoryId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseVehicleCategoryCreateManyInput = {
    id?: string
    dateOfIssue: Date | string
    dateOfExpiry: Date | string
    categoryStatus: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    vehicleCategoryId: string
    licenseId: string
  }

  export type LicenseVehicleCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryStatus?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LicenseVehicleCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryStatus?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    vehicleCategoryId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
  }

  export type FineCreateInput = {
    id?: string
    fineCategory: string
    violationType: string
    fineCharge: number
    provision: string
    sectionOfAct: string
    violationDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issues?: IssueCreateNestedManyWithoutFineInput
    payments?: PaymentCreateNestedManyWithoutFineInput
  }

  export type FineUncheckedCreateInput = {
    id?: string
    fineCategory: string
    violationType: string
    fineCharge: number
    provision: string
    sectionOfAct: string
    violationDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issues?: IssueUncheckedCreateNestedManyWithoutFineInput
    payments?: PaymentUncheckedCreateNestedManyWithoutFineInput
  }

  export type FineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fineCategory?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    fineCharge?: FloatFieldUpdateOperationsInput | number
    provision?: StringFieldUpdateOperationsInput | string
    sectionOfAct?: StringFieldUpdateOperationsInput | string
    violationDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issues?: IssueUpdateManyWithoutFineNestedInput
    payments?: PaymentUpdateManyWithoutFineNestedInput
  }

  export type FineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fineCategory?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    fineCharge?: FloatFieldUpdateOperationsInput | number
    provision?: StringFieldUpdateOperationsInput | string
    sectionOfAct?: StringFieldUpdateOperationsInput | string
    violationDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issues?: IssueUncheckedUpdateManyWithoutFineNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutFineNestedInput
  }

  export type FineCreateManyInput = {
    id?: string
    fineCategory: string
    violationType: string
    fineCharge: number
    provision: string
    sectionOfAct: string
    violationDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type FineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fineCategory?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    fineCharge?: FloatFieldUpdateOperationsInput | number
    provision?: StringFieldUpdateOperationsInput | string
    sectionOfAct?: StringFieldUpdateOperationsInput | string
    violationDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fineCategory?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    fineCharge?: FloatFieldUpdateOperationsInput | number
    provision?: StringFieldUpdateOperationsInput | string
    sectionOfAct?: StringFieldUpdateOperationsInput | string
    violationDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentCreateInput = {
    id?: string
    userId: string
    amount: number
    paymentStatus: $Enums.PaymentStatus
    transactionId: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issue: IssueCreateNestedOneWithoutPaymentInput
    fine: FineCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    paymentStatus: $Enums.PaymentStatus
    transactionId: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issueId: string
    fineId: string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issue?: IssueUpdateOneRequiredWithoutPaymentNestedInput
    fine?: FineUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issueId?: StringFieldUpdateOperationsInput | string
    fineId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    amount: number
    paymentStatus: $Enums.PaymentStatus
    transactionId: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issueId: string
    fineId: string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issueId?: StringFieldUpdateOperationsInput | string
    fineId?: StringFieldUpdateOperationsInput | string
  }

  export type IssueCreateInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fine: FineCreateNestedOneWithoutIssuesInput
    staff: StaffCreateNestedOneWithoutIssuesInput
    payment?: PaymentCreateNestedOneWithoutIssueInput
    license: LicenseCreateNestedOneWithoutIssuesInput
  }

  export type IssueUncheckedCreateInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fineId: string
    enforcerId: string
    licenseId: string
    payment?: PaymentUncheckedCreateNestedOneWithoutIssueInput
  }

  export type IssueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fine?: FineUpdateOneRequiredWithoutIssuesNestedInput
    staff?: StaffUpdateOneRequiredWithoutIssuesNestedInput
    payment?: PaymentUpdateOneWithoutIssueNestedInput
    license?: LicenseUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fineId?: StringFieldUpdateOperationsInput | string
    enforcerId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateOneWithoutIssueNestedInput
  }

  export type IssueCreateManyInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fineId: string
    enforcerId: string
    licenseId: string
  }

  export type IssueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IssueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fineId?: StringFieldUpdateOperationsInput | string
    enforcerId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
  }

  export type AppointmentCreateInput = {
    id?: string
    userId: string
    type: $Enums.AppointmentType
    scheduledAt: Date | string
    status: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    users?: UserCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.AppointmentType
    scheduledAt: Date | string
    status: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    users?: UserUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.AppointmentType
    scheduledAt: Date | string
    status: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogCreateInput = {
    id?: string
    tableName: string
    recordId: string
    action: $Enums.Action
    oldValue: string
    newValue: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type LogUncheckedCreateInput = {
    id?: string
    tableName: string
    recordId: string
    action: $Enums.Action
    oldValue: string
    newValue: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    userId: string
  }

  export type LogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LogCreateManyInput = {
    id?: string
    tableName: string
    recordId: string
    action: $Enums.Action
    oldValue: string
    newValue: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    userId: string
  }

  export type LogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumProvinceFilter<$PrismaModel = never> = {
    equals?: $Enums.Province | EnumProvinceFieldRefInput<$PrismaModel>
    in?: $Enums.Province[] | ListEnumProvinceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Province[] | ListEnumProvinceFieldRefInput<$PrismaModel>
    not?: NestedEnumProvinceFilter<$PrismaModel> | $Enums.Province
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LicenseNullableScalarRelationFilter = {
    is?: LicenseWhereInput | null
    isNot?: LicenseWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    province?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    province?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    district?: SortOrder
    province?: SortOrder
    country?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumProvinceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Province | EnumProvinceFieldRefInput<$PrismaModel>
    in?: $Enums.Province[] | ListEnumProvinceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Province[] | ListEnumProvinceFieldRefInput<$PrismaModel>
    not?: NestedEnumProvinceWithAggregatesFilter<$PrismaModel> | $Enums.Province
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProvinceFilter<$PrismaModel>
    _max?: NestedEnumProvinceFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type MedicalCountOrderByAggregateInput = {
    id?: SortOrder
    medical_report_photo?: SortOrder
    blood_group?: SortOrder
    blood_pressure?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type MedicalMaxOrderByAggregateInput = {
    id?: SortOrder
    medical_report_photo?: SortOrder
    blood_group?: SortOrder
    blood_pressure?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type MedicalMinOrderByAggregateInput = {
    id?: SortOrder
    medical_report_photo?: SortOrder
    blood_group?: SortOrder
    blood_pressure?: SortOrder
    height?: SortOrder
    weight?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type EnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type LicenseVehicleCategoryListRelationFilter = {
    every?: LicenseVehicleCategoryWhereInput
    some?: LicenseVehicleCategoryWhereInput
    none?: LicenseVehicleCategoryWhereInput
  }

  export type LicenseVehicleCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    vehicleDescription?: SortOrder
    vehicleType?: SortOrder
    vehicleClass?: SortOrder
    otherAllowedVehicleClasses?: SortOrder
    validityPeriod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type VehicleCategoryAvgOrderByAggregateInput = {
    validityPeriod?: SortOrder
  }

  export type VehicleCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicleDescription?: SortOrder
    vehicleType?: SortOrder
    vehicleClass?: SortOrder
    validityPeriod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type VehicleCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    vehicleDescription?: SortOrder
    vehicleType?: SortOrder
    vehicleClass?: SortOrder
    validityPeriod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type VehicleCategorySumOrderByAggregateInput = {
    validityPeriod?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumLicenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeFilter<$PrismaModel> | $Enums.LicenseType
  }

  export type EnumLicenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusFilter<$PrismaModel> | $Enums.LicenseStatus
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type MedicalScalarRelationFilter = {
    is?: MedicalWhereInput
    isNot?: MedicalWhereInput
  }

  export type IssueListRelationFilter = {
    every?: IssueWhereInput
    some?: IssueWhereInput
    none?: IssueWhereInput
  }

  export type IssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseCountOrderByAggregateInput = {
    id?: SortOrder
    licenseNumber?: SortOrder
    nic?: SortOrder
    photo?: SortOrder
    nicFront?: SortOrder
    nicBack?: SortOrder
    previousLicense?: SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    licenseType?: SortOrder
    status?: SortOrder
    dateOfIssue?: SortOrder
    dateOfExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    addressId?: SortOrder
    medicalId?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseNumber?: SortOrder
    nic?: SortOrder
    photo?: SortOrder
    nicFront?: SortOrder
    nicBack?: SortOrder
    previousLicense?: SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    licenseType?: SortOrder
    status?: SortOrder
    dateOfIssue?: SortOrder
    dateOfExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    addressId?: SortOrder
    medicalId?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    id?: SortOrder
    licenseNumber?: SortOrder
    nic?: SortOrder
    photo?: SortOrder
    nicFront?: SortOrder
    nicBack?: SortOrder
    previousLicense?: SortOrder
    phone?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    licenseType?: SortOrder
    status?: SortOrder
    dateOfIssue?: SortOrder
    dateOfExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    addressId?: SortOrder
    medicalId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumLicenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.LicenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseTypeFilter<$PrismaModel>
    _max?: NestedEnumLicenseTypeFilter<$PrismaModel>
  }

  export type EnumLicenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.LicenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseStatusFilter<$PrismaModel>
    _max?: NestedEnumLicenseStatusFilter<$PrismaModel>
  }

  export type StaffNullableScalarRelationFilter = {
    is?: StaffWhereInput | null
    isNot?: StaffWhereInput | null
  }

  export type LicenseScalarRelationFilter = {
    is?: LicenseWhereInput
    isNot?: LicenseWhereInput
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type LogListRelationFilter = {
    every?: LogWhereInput
    some?: LogWhereInput
    none?: LogWhereInput
  }

  export type LogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nic?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    addressId?: SortOrder
    licenseId?: SortOrder
    appointmentId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nic?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    addressId?: SortOrder
    licenseId?: SortOrder
    appointmentId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    nic?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    addressId?: SortOrder
    licenseId?: SortOrder
    appointmentId?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StaffCountOrderByAggregateInput = {
    id?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    role?: SortOrder
    permission?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
  }

  export type StaffMaxOrderByAggregateInput = {
    id?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    role?: SortOrder
    permission?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
  }

  export type StaffMinOrderByAggregateInput = {
    id?: SortOrder
    contactNumber?: SortOrder
    email?: SortOrder
    role?: SortOrder
    permission?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumCategoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryStatusFilter<$PrismaModel> | $Enums.CategoryStatus
  }

  export type VehicleCategoryScalarRelationFilter = {
    is?: VehicleCategoryWhereInput
    isNot?: VehicleCategoryWhereInput
  }

  export type LicenseVehicleCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    dateOfIssue?: SortOrder
    dateOfExpiry?: SortOrder
    categoryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    vehicleCategoryId?: SortOrder
    licenseId?: SortOrder
  }

  export type LicenseVehicleCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    dateOfIssue?: SortOrder
    dateOfExpiry?: SortOrder
    categoryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    vehicleCategoryId?: SortOrder
    licenseId?: SortOrder
  }

  export type LicenseVehicleCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    dateOfIssue?: SortOrder
    dateOfExpiry?: SortOrder
    categoryStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    vehicleCategoryId?: SortOrder
    licenseId?: SortOrder
  }

  export type EnumCategoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.CategoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryStatusFilter<$PrismaModel>
    _max?: NestedEnumCategoryStatusFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FineCountOrderByAggregateInput = {
    id?: SortOrder
    fineCategory?: SortOrder
    violationType?: SortOrder
    fineCharge?: SortOrder
    provision?: SortOrder
    sectionOfAct?: SortOrder
    violationDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type FineAvgOrderByAggregateInput = {
    fineCharge?: SortOrder
  }

  export type FineMaxOrderByAggregateInput = {
    id?: SortOrder
    fineCategory?: SortOrder
    violationType?: SortOrder
    fineCharge?: SortOrder
    provision?: SortOrder
    sectionOfAct?: SortOrder
    violationDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type FineMinOrderByAggregateInput = {
    id?: SortOrder
    fineCategory?: SortOrder
    violationType?: SortOrder
    fineCharge?: SortOrder
    provision?: SortOrder
    sectionOfAct?: SortOrder
    violationDescription?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type FineSumOrderByAggregateInput = {
    fineCharge?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type IssueScalarRelationFilter = {
    is?: IssueWhereInput
    isNot?: IssueWhereInput
  }

  export type FineScalarRelationFilter = {
    is?: FineWhereInput
    isNot?: FineWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentStatus?: SortOrder
    transactionId?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    issueId?: SortOrder
    fineId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentStatus?: SortOrder
    transactionId?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    issueId?: SortOrder
    fineId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    paymentStatus?: SortOrder
    transactionId?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    issueId?: SortOrder
    fineId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumIssueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusFilter<$PrismaModel> | $Enums.IssueStatus
  }

  export type StaffScalarRelationFilter = {
    is?: StaffWhereInput
    isNot?: StaffWhereInput
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type IssueCountOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    vehicleNo?: SortOrder
    courtDate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    fineId?: SortOrder
    enforcerId?: SortOrder
    licenseId?: SortOrder
  }

  export type IssueMaxOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    vehicleNo?: SortOrder
    courtDate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    fineId?: SortOrder
    enforcerId?: SortOrder
    licenseId?: SortOrder
  }

  export type IssueMinOrderByAggregateInput = {
    id?: SortOrder
    paymentId?: SortOrder
    vehicleNo?: SortOrder
    courtDate?: SortOrder
    location?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    fineId?: SortOrder
    enforcerId?: SortOrder
    licenseId?: SortOrder
  }

  export type EnumIssueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusWithAggregatesFilter<$PrismaModel> | $Enums.IssueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIssueStatusFilter<$PrismaModel>
    _max?: NestedEnumIssueStatusFilter<$PrismaModel>
  }

  export type EnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    scheduledAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
  }

  export type EnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type EnumActionFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionFilter<$PrismaModel> | $Enums.Action
  }

  export type LogCountOrderByAggregateInput = {
    id?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    action?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
  }

  export type LogMaxOrderByAggregateInput = {
    id?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    action?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
  }

  export type LogMinOrderByAggregateInput = {
    id?: SortOrder
    tableName?: SortOrder
    recordId?: SortOrder
    action?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deleted?: SortOrder
    userId?: SortOrder
  }

  export type EnumActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionWithAggregatesFilter<$PrismaModel> | $Enums.Action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionFilter<$PrismaModel>
    _max?: NestedEnumActionFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type LicenseCreateNestedOneWithoutAddressInput = {
    create?: XOR<LicenseCreateWithoutAddressInput, LicenseUncheckedCreateWithoutAddressInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutAddressInput
    connect?: LicenseWhereUniqueInput
  }

  export type UserUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type LicenseUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<LicenseCreateWithoutAddressInput, LicenseUncheckedCreateWithoutAddressInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutAddressInput
    connect?: LicenseWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumProvinceFieldUpdateOperationsInput = {
    set?: $Enums.Province
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
  }

  export type LicenseUpdateOneWithoutAddressNestedInput = {
    create?: XOR<LicenseCreateWithoutAddressInput, LicenseUncheckedCreateWithoutAddressInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutAddressInput
    upsert?: LicenseUpsertWithoutAddressInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutAddressInput, LicenseUpdateWithoutAddressInput>, LicenseUncheckedUpdateWithoutAddressInput>
  }

  export type UserUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
  }

  export type LicenseUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<LicenseCreateWithoutAddressInput, LicenseUncheckedCreateWithoutAddressInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutAddressInput
    upsert?: LicenseUpsertWithoutAddressInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutAddressInput, LicenseUpdateWithoutAddressInput>, LicenseUncheckedUpdateWithoutAddressInput>
  }

  export type LicenseCreateNestedOneWithoutMedicalInput = {
    create?: XOR<LicenseCreateWithoutMedicalInput, LicenseUncheckedCreateWithoutMedicalInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutMedicalInput
    connect?: LicenseWhereUniqueInput
  }

  export type LicenseUncheckedCreateNestedOneWithoutMedicalInput = {
    create?: XOR<LicenseCreateWithoutMedicalInput, LicenseUncheckedCreateWithoutMedicalInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutMedicalInput
    connect?: LicenseWhereUniqueInput
  }

  export type EnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type LicenseUpdateOneWithoutMedicalNestedInput = {
    create?: XOR<LicenseCreateWithoutMedicalInput, LicenseUncheckedCreateWithoutMedicalInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutMedicalInput
    upsert?: LicenseUpsertWithoutMedicalInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutMedicalInput, LicenseUpdateWithoutMedicalInput>, LicenseUncheckedUpdateWithoutMedicalInput>
  }

  export type LicenseUncheckedUpdateOneWithoutMedicalNestedInput = {
    create?: XOR<LicenseCreateWithoutMedicalInput, LicenseUncheckedCreateWithoutMedicalInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutMedicalInput
    upsert?: LicenseUpsertWithoutMedicalInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutMedicalInput, LicenseUpdateWithoutMedicalInput>, LicenseUncheckedUpdateWithoutMedicalInput>
  }

  export type VehicleCategoryCreateotherAllowedVehicleClassesInput = {
    set: string[]
  }

  export type LicenseVehicleCategoryCreateNestedManyWithoutVehicleCategoryInput = {
    create?: XOR<LicenseVehicleCategoryCreateWithoutVehicleCategoryInput, LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput> | LicenseVehicleCategoryCreateWithoutVehicleCategoryInput[] | LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput[]
    connectOrCreate?: LicenseVehicleCategoryCreateOrConnectWithoutVehicleCategoryInput | LicenseVehicleCategoryCreateOrConnectWithoutVehicleCategoryInput[]
    createMany?: LicenseVehicleCategoryCreateManyVehicleCategoryInputEnvelope
    connect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
  }

  export type LicenseVehicleCategoryUncheckedCreateNestedManyWithoutVehicleCategoryInput = {
    create?: XOR<LicenseVehicleCategoryCreateWithoutVehicleCategoryInput, LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput> | LicenseVehicleCategoryCreateWithoutVehicleCategoryInput[] | LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput[]
    connectOrCreate?: LicenseVehicleCategoryCreateOrConnectWithoutVehicleCategoryInput | LicenseVehicleCategoryCreateOrConnectWithoutVehicleCategoryInput[]
    createMany?: LicenseVehicleCategoryCreateManyVehicleCategoryInputEnvelope
    connect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
  }

  export type VehicleCategoryUpdateotherAllowedVehicleClassesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LicenseVehicleCategoryUpdateManyWithoutVehicleCategoryNestedInput = {
    create?: XOR<LicenseVehicleCategoryCreateWithoutVehicleCategoryInput, LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput> | LicenseVehicleCategoryCreateWithoutVehicleCategoryInput[] | LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput[]
    connectOrCreate?: LicenseVehicleCategoryCreateOrConnectWithoutVehicleCategoryInput | LicenseVehicleCategoryCreateOrConnectWithoutVehicleCategoryInput[]
    upsert?: LicenseVehicleCategoryUpsertWithWhereUniqueWithoutVehicleCategoryInput | LicenseVehicleCategoryUpsertWithWhereUniqueWithoutVehicleCategoryInput[]
    createMany?: LicenseVehicleCategoryCreateManyVehicleCategoryInputEnvelope
    set?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    disconnect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    delete?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    connect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    update?: LicenseVehicleCategoryUpdateWithWhereUniqueWithoutVehicleCategoryInput | LicenseVehicleCategoryUpdateWithWhereUniqueWithoutVehicleCategoryInput[]
    updateMany?: LicenseVehicleCategoryUpdateManyWithWhereWithoutVehicleCategoryInput | LicenseVehicleCategoryUpdateManyWithWhereWithoutVehicleCategoryInput[]
    deleteMany?: LicenseVehicleCategoryScalarWhereInput | LicenseVehicleCategoryScalarWhereInput[]
  }

  export type LicenseVehicleCategoryUncheckedUpdateManyWithoutVehicleCategoryNestedInput = {
    create?: XOR<LicenseVehicleCategoryCreateWithoutVehicleCategoryInput, LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput> | LicenseVehicleCategoryCreateWithoutVehicleCategoryInput[] | LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput[]
    connectOrCreate?: LicenseVehicleCategoryCreateOrConnectWithoutVehicleCategoryInput | LicenseVehicleCategoryCreateOrConnectWithoutVehicleCategoryInput[]
    upsert?: LicenseVehicleCategoryUpsertWithWhereUniqueWithoutVehicleCategoryInput | LicenseVehicleCategoryUpsertWithWhereUniqueWithoutVehicleCategoryInput[]
    createMany?: LicenseVehicleCategoryCreateManyVehicleCategoryInputEnvelope
    set?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    disconnect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    delete?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    connect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    update?: LicenseVehicleCategoryUpdateWithWhereUniqueWithoutVehicleCategoryInput | LicenseVehicleCategoryUpdateWithWhereUniqueWithoutVehicleCategoryInput[]
    updateMany?: LicenseVehicleCategoryUpdateManyWithWhereWithoutVehicleCategoryInput | LicenseVehicleCategoryUpdateManyWithWhereWithoutVehicleCategoryInput[]
    deleteMany?: LicenseVehicleCategoryScalarWhereInput | LicenseVehicleCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLicenseInput = {
    create?: XOR<UserCreateWithoutLicenseInput, UserUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: UserCreateOrConnectWithoutLicenseInput
    connect?: UserWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutLicenseInput = {
    create?: XOR<AddressCreateWithoutLicenseInput, AddressUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: AddressCreateOrConnectWithoutLicenseInput
    connect?: AddressWhereUniqueInput
  }

  export type MedicalCreateNestedOneWithoutLicenseInput = {
    create?: XOR<MedicalCreateWithoutLicenseInput, MedicalUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: MedicalCreateOrConnectWithoutLicenseInput
    connect?: MedicalWhereUniqueInput
  }

  export type IssueCreateNestedManyWithoutLicenseInput = {
    create?: XOR<IssueCreateWithoutLicenseInput, IssueUncheckedCreateWithoutLicenseInput> | IssueCreateWithoutLicenseInput[] | IssueUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutLicenseInput | IssueCreateOrConnectWithoutLicenseInput[]
    createMany?: IssueCreateManyLicenseInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type LicenseVehicleCategoryCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseVehicleCategoryCreateWithoutLicenseInput, LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput> | LicenseVehicleCategoryCreateWithoutLicenseInput[] | LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseVehicleCategoryCreateOrConnectWithoutLicenseInput | LicenseVehicleCategoryCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseVehicleCategoryCreateManyLicenseInputEnvelope
    connect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedOneWithoutLicenseInput = {
    create?: XOR<UserCreateWithoutLicenseInput, UserUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: UserCreateOrConnectWithoutLicenseInput
    connect?: UserWhereUniqueInput
  }

  export type IssueUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<IssueCreateWithoutLicenseInput, IssueUncheckedCreateWithoutLicenseInput> | IssueCreateWithoutLicenseInput[] | IssueUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutLicenseInput | IssueCreateOrConnectWithoutLicenseInput[]
    createMany?: IssueCreateManyLicenseInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type LicenseVehicleCategoryUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseVehicleCategoryCreateWithoutLicenseInput, LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput> | LicenseVehicleCategoryCreateWithoutLicenseInput[] | LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseVehicleCategoryCreateOrConnectWithoutLicenseInput | LicenseVehicleCategoryCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseVehicleCategoryCreateManyLicenseInputEnvelope
    connect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLicenseTypeFieldUpdateOperationsInput = {
    set?: $Enums.LicenseType
  }

  export type EnumLicenseStatusFieldUpdateOperationsInput = {
    set?: $Enums.LicenseStatus
  }

  export type UserUpdateOneWithoutLicenseNestedInput = {
    create?: XOR<UserCreateWithoutLicenseInput, UserUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: UserCreateOrConnectWithoutLicenseInput
    upsert?: UserUpsertWithoutLicenseInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLicenseInput, UserUpdateWithoutLicenseInput>, UserUncheckedUpdateWithoutLicenseInput>
  }

  export type AddressUpdateOneRequiredWithoutLicenseNestedInput = {
    create?: XOR<AddressCreateWithoutLicenseInput, AddressUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: AddressCreateOrConnectWithoutLicenseInput
    upsert?: AddressUpsertWithoutLicenseInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutLicenseInput, AddressUpdateWithoutLicenseInput>, AddressUncheckedUpdateWithoutLicenseInput>
  }

  export type MedicalUpdateOneRequiredWithoutLicenseNestedInput = {
    create?: XOR<MedicalCreateWithoutLicenseInput, MedicalUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: MedicalCreateOrConnectWithoutLicenseInput
    upsert?: MedicalUpsertWithoutLicenseInput
    connect?: MedicalWhereUniqueInput
    update?: XOR<XOR<MedicalUpdateToOneWithWhereWithoutLicenseInput, MedicalUpdateWithoutLicenseInput>, MedicalUncheckedUpdateWithoutLicenseInput>
  }

  export type IssueUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<IssueCreateWithoutLicenseInput, IssueUncheckedCreateWithoutLicenseInput> | IssueCreateWithoutLicenseInput[] | IssueUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutLicenseInput | IssueCreateOrConnectWithoutLicenseInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutLicenseInput | IssueUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: IssueCreateManyLicenseInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutLicenseInput | IssueUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutLicenseInput | IssueUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type LicenseVehicleCategoryUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseVehicleCategoryCreateWithoutLicenseInput, LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput> | LicenseVehicleCategoryCreateWithoutLicenseInput[] | LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseVehicleCategoryCreateOrConnectWithoutLicenseInput | LicenseVehicleCategoryCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseVehicleCategoryUpsertWithWhereUniqueWithoutLicenseInput | LicenseVehicleCategoryUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseVehicleCategoryCreateManyLicenseInputEnvelope
    set?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    disconnect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    delete?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    connect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    update?: LicenseVehicleCategoryUpdateWithWhereUniqueWithoutLicenseInput | LicenseVehicleCategoryUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseVehicleCategoryUpdateManyWithWhereWithoutLicenseInput | LicenseVehicleCategoryUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseVehicleCategoryScalarWhereInput | LicenseVehicleCategoryScalarWhereInput[]
  }

  export type UserUncheckedUpdateOneWithoutLicenseNestedInput = {
    create?: XOR<UserCreateWithoutLicenseInput, UserUncheckedCreateWithoutLicenseInput>
    connectOrCreate?: UserCreateOrConnectWithoutLicenseInput
    upsert?: UserUpsertWithoutLicenseInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLicenseInput, UserUpdateWithoutLicenseInput>, UserUncheckedUpdateWithoutLicenseInput>
  }

  export type IssueUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<IssueCreateWithoutLicenseInput, IssueUncheckedCreateWithoutLicenseInput> | IssueCreateWithoutLicenseInput[] | IssueUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutLicenseInput | IssueCreateOrConnectWithoutLicenseInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutLicenseInput | IssueUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: IssueCreateManyLicenseInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutLicenseInput | IssueUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutLicenseInput | IssueUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type LicenseVehicleCategoryUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseVehicleCategoryCreateWithoutLicenseInput, LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput> | LicenseVehicleCategoryCreateWithoutLicenseInput[] | LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseVehicleCategoryCreateOrConnectWithoutLicenseInput | LicenseVehicleCategoryCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseVehicleCategoryUpsertWithWhereUniqueWithoutLicenseInput | LicenseVehicleCategoryUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseVehicleCategoryCreateManyLicenseInputEnvelope
    set?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    disconnect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    delete?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    connect?: LicenseVehicleCategoryWhereUniqueInput | LicenseVehicleCategoryWhereUniqueInput[]
    update?: LicenseVehicleCategoryUpdateWithWhereUniqueWithoutLicenseInput | LicenseVehicleCategoryUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseVehicleCategoryUpdateManyWithWhereWithoutLicenseInput | LicenseVehicleCategoryUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseVehicleCategoryScalarWhereInput | LicenseVehicleCategoryScalarWhereInput[]
  }

  export type AddressCreateNestedOneWithoutUserInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    connect?: AddressWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    connect?: StaffWhereUniqueInput
  }

  export type LicenseCreateNestedOneWithoutUserInput = {
    create?: XOR<LicenseCreateWithoutUserInput, LicenseUncheckedCreateWithoutUserInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutUserInput
    connect?: LicenseWhereUniqueInput
  }

  export type AppointmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<AppointmentCreateWithoutUsersInput, AppointmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutUsersInput
    connect?: AppointmentWhereUniqueInput
  }

  export type LogCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type StaffUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    connect?: StaffWhereUniqueInput
  }

  export type LogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
  }

  export type AddressUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUserInput
    upsert?: AddressUpsertWithoutUserInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutUserInput, AddressUpdateWithoutUserInput>, AddressUncheckedUpdateWithoutUserInput>
  }

  export type StaffUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    upsert?: StaffUpsertWithoutUserInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserInput, StaffUpdateWithoutUserInput>, StaffUncheckedUpdateWithoutUserInput>
  }

  export type LicenseUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<LicenseCreateWithoutUserInput, LicenseUncheckedCreateWithoutUserInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutUserInput
    upsert?: LicenseUpsertWithoutUserInput
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutUserInput, LicenseUpdateWithoutUserInput>, LicenseUncheckedUpdateWithoutUserInput>
  }

  export type AppointmentUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AppointmentCreateWithoutUsersInput, AppointmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutUsersInput
    upsert?: AppointmentUpsertWithoutUsersInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutUsersInput, AppointmentUpdateWithoutUsersInput>, AppointmentUncheckedUpdateWithoutUsersInput>
  }

  export type LogUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type StaffUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    connectOrCreate?: StaffCreateOrConnectWithoutUserInput
    upsert?: StaffUpsertWithoutUserInput
    disconnect?: StaffWhereInput | boolean
    delete?: StaffWhereInput | boolean
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutUserInput, StaffUpdateWithoutUserInput>, StaffUncheckedUpdateWithoutUserInput>
  }

  export type LogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput> | LogCreateWithoutUserInput[] | LogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogCreateOrConnectWithoutUserInput | LogCreateOrConnectWithoutUserInput[]
    upsert?: LogUpsertWithWhereUniqueWithoutUserInput | LogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogCreateManyUserInputEnvelope
    set?: LogWhereUniqueInput | LogWhereUniqueInput[]
    disconnect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    delete?: LogWhereUniqueInput | LogWhereUniqueInput[]
    connect?: LogWhereUniqueInput | LogWhereUniqueInput[]
    update?: LogUpdateWithWhereUniqueWithoutUserInput | LogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogUpdateManyWithWhereWithoutUserInput | LogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogScalarWhereInput | LogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutStaffInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    connect?: UserWhereUniqueInput
  }

  export type IssueCreateNestedManyWithoutStaffInput = {
    create?: XOR<IssueCreateWithoutStaffInput, IssueUncheckedCreateWithoutStaffInput> | IssueCreateWithoutStaffInput[] | IssueUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutStaffInput | IssueCreateOrConnectWithoutStaffInput[]
    createMany?: IssueCreateManyStaffInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type IssueUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<IssueCreateWithoutStaffInput, IssueUncheckedCreateWithoutStaffInput> | IssueCreateWithoutStaffInput[] | IssueUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutStaffInput | IssueCreateOrConnectWithoutStaffInput[]
    createMany?: IssueCreateManyStaffInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserUpdateOneRequiredWithoutStaffNestedInput = {
    create?: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    connectOrCreate?: UserCreateOrConnectWithoutStaffInput
    upsert?: UserUpsertWithoutStaffInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStaffInput, UserUpdateWithoutStaffInput>, UserUncheckedUpdateWithoutStaffInput>
  }

  export type IssueUpdateManyWithoutStaffNestedInput = {
    create?: XOR<IssueCreateWithoutStaffInput, IssueUncheckedCreateWithoutStaffInput> | IssueCreateWithoutStaffInput[] | IssueUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutStaffInput | IssueCreateOrConnectWithoutStaffInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutStaffInput | IssueUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: IssueCreateManyStaffInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutStaffInput | IssueUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutStaffInput | IssueUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type IssueUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<IssueCreateWithoutStaffInput, IssueUncheckedCreateWithoutStaffInput> | IssueCreateWithoutStaffInput[] | IssueUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutStaffInput | IssueCreateOrConnectWithoutStaffInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutStaffInput | IssueUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: IssueCreateManyStaffInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutStaffInput | IssueUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutStaffInput | IssueUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type VehicleCategoryCreateNestedOneWithoutLicenseVehicleCategoriesInput = {
    create?: XOR<VehicleCategoryCreateWithoutLicenseVehicleCategoriesInput, VehicleCategoryUncheckedCreateWithoutLicenseVehicleCategoriesInput>
    connectOrCreate?: VehicleCategoryCreateOrConnectWithoutLicenseVehicleCategoriesInput
    connect?: VehicleCategoryWhereUniqueInput
  }

  export type LicenseCreateNestedOneWithoutLicenseVehicleCategoriesInput = {
    create?: XOR<LicenseCreateWithoutLicenseVehicleCategoriesInput, LicenseUncheckedCreateWithoutLicenseVehicleCategoriesInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutLicenseVehicleCategoriesInput
    connect?: LicenseWhereUniqueInput
  }

  export type EnumCategoryStatusFieldUpdateOperationsInput = {
    set?: $Enums.CategoryStatus
  }

  export type VehicleCategoryUpdateOneRequiredWithoutLicenseVehicleCategoriesNestedInput = {
    create?: XOR<VehicleCategoryCreateWithoutLicenseVehicleCategoriesInput, VehicleCategoryUncheckedCreateWithoutLicenseVehicleCategoriesInput>
    connectOrCreate?: VehicleCategoryCreateOrConnectWithoutLicenseVehicleCategoriesInput
    upsert?: VehicleCategoryUpsertWithoutLicenseVehicleCategoriesInput
    connect?: VehicleCategoryWhereUniqueInput
    update?: XOR<XOR<VehicleCategoryUpdateToOneWithWhereWithoutLicenseVehicleCategoriesInput, VehicleCategoryUpdateWithoutLicenseVehicleCategoriesInput>, VehicleCategoryUncheckedUpdateWithoutLicenseVehicleCategoriesInput>
  }

  export type LicenseUpdateOneRequiredWithoutLicenseVehicleCategoriesNestedInput = {
    create?: XOR<LicenseCreateWithoutLicenseVehicleCategoriesInput, LicenseUncheckedCreateWithoutLicenseVehicleCategoriesInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutLicenseVehicleCategoriesInput
    upsert?: LicenseUpsertWithoutLicenseVehicleCategoriesInput
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutLicenseVehicleCategoriesInput, LicenseUpdateWithoutLicenseVehicleCategoriesInput>, LicenseUncheckedUpdateWithoutLicenseVehicleCategoriesInput>
  }

  export type IssueCreateNestedManyWithoutFineInput = {
    create?: XOR<IssueCreateWithoutFineInput, IssueUncheckedCreateWithoutFineInput> | IssueCreateWithoutFineInput[] | IssueUncheckedCreateWithoutFineInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutFineInput | IssueCreateOrConnectWithoutFineInput[]
    createMany?: IssueCreateManyFineInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutFineInput = {
    create?: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput> | PaymentCreateWithoutFineInput[] | PaymentUncheckedCreateWithoutFineInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFineInput | PaymentCreateOrConnectWithoutFineInput[]
    createMany?: PaymentCreateManyFineInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type IssueUncheckedCreateNestedManyWithoutFineInput = {
    create?: XOR<IssueCreateWithoutFineInput, IssueUncheckedCreateWithoutFineInput> | IssueCreateWithoutFineInput[] | IssueUncheckedCreateWithoutFineInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutFineInput | IssueCreateOrConnectWithoutFineInput[]
    createMany?: IssueCreateManyFineInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutFineInput = {
    create?: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput> | PaymentCreateWithoutFineInput[] | PaymentUncheckedCreateWithoutFineInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFineInput | PaymentCreateOrConnectWithoutFineInput[]
    createMany?: PaymentCreateManyFineInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IssueUpdateManyWithoutFineNestedInput = {
    create?: XOR<IssueCreateWithoutFineInput, IssueUncheckedCreateWithoutFineInput> | IssueCreateWithoutFineInput[] | IssueUncheckedCreateWithoutFineInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutFineInput | IssueCreateOrConnectWithoutFineInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutFineInput | IssueUpsertWithWhereUniqueWithoutFineInput[]
    createMany?: IssueCreateManyFineInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutFineInput | IssueUpdateWithWhereUniqueWithoutFineInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutFineInput | IssueUpdateManyWithWhereWithoutFineInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutFineNestedInput = {
    create?: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput> | PaymentCreateWithoutFineInput[] | PaymentUncheckedCreateWithoutFineInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFineInput | PaymentCreateOrConnectWithoutFineInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutFineInput | PaymentUpsertWithWhereUniqueWithoutFineInput[]
    createMany?: PaymentCreateManyFineInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutFineInput | PaymentUpdateWithWhereUniqueWithoutFineInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutFineInput | PaymentUpdateManyWithWhereWithoutFineInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type IssueUncheckedUpdateManyWithoutFineNestedInput = {
    create?: XOR<IssueCreateWithoutFineInput, IssueUncheckedCreateWithoutFineInput> | IssueCreateWithoutFineInput[] | IssueUncheckedCreateWithoutFineInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutFineInput | IssueCreateOrConnectWithoutFineInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutFineInput | IssueUpsertWithWhereUniqueWithoutFineInput[]
    createMany?: IssueCreateManyFineInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutFineInput | IssueUpdateWithWhereUniqueWithoutFineInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutFineInput | IssueUpdateManyWithWhereWithoutFineInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutFineNestedInput = {
    create?: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput> | PaymentCreateWithoutFineInput[] | PaymentUncheckedCreateWithoutFineInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutFineInput | PaymentCreateOrConnectWithoutFineInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutFineInput | PaymentUpsertWithWhereUniqueWithoutFineInput[]
    createMany?: PaymentCreateManyFineInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutFineInput | PaymentUpdateWithWhereUniqueWithoutFineInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutFineInput | PaymentUpdateManyWithWhereWithoutFineInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type IssueCreateNestedOneWithoutPaymentInput = {
    create?: XOR<IssueCreateWithoutPaymentInput, IssueUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: IssueCreateOrConnectWithoutPaymentInput
    connect?: IssueWhereUniqueInput
  }

  export type FineCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<FineCreateWithoutPaymentsInput, FineUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: FineCreateOrConnectWithoutPaymentsInput
    connect?: FineWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type IssueUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<IssueCreateWithoutPaymentInput, IssueUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: IssueCreateOrConnectWithoutPaymentInput
    upsert?: IssueUpsertWithoutPaymentInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutPaymentInput, IssueUpdateWithoutPaymentInput>, IssueUncheckedUpdateWithoutPaymentInput>
  }

  export type FineUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<FineCreateWithoutPaymentsInput, FineUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: FineCreateOrConnectWithoutPaymentsInput
    upsert?: FineUpsertWithoutPaymentsInput
    connect?: FineWhereUniqueInput
    update?: XOR<XOR<FineUpdateToOneWithWhereWithoutPaymentsInput, FineUpdateWithoutPaymentsInput>, FineUncheckedUpdateWithoutPaymentsInput>
  }

  export type FineCreateNestedOneWithoutIssuesInput = {
    create?: XOR<FineCreateWithoutIssuesInput, FineUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: FineCreateOrConnectWithoutIssuesInput
    connect?: FineWhereUniqueInput
  }

  export type StaffCreateNestedOneWithoutIssuesInput = {
    create?: XOR<StaffCreateWithoutIssuesInput, StaffUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutIssuesInput
    connect?: StaffWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutIssueInput = {
    create?: XOR<PaymentCreateWithoutIssueInput, PaymentUncheckedCreateWithoutIssueInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutIssueInput
    connect?: PaymentWhereUniqueInput
  }

  export type LicenseCreateNestedOneWithoutIssuesInput = {
    create?: XOR<LicenseCreateWithoutIssuesInput, LicenseUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutIssuesInput
    connect?: LicenseWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutIssueInput = {
    create?: XOR<PaymentCreateWithoutIssueInput, PaymentUncheckedCreateWithoutIssueInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutIssueInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumIssueStatusFieldUpdateOperationsInput = {
    set?: $Enums.IssueStatus
  }

  export type FineUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<FineCreateWithoutIssuesInput, FineUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: FineCreateOrConnectWithoutIssuesInput
    upsert?: FineUpsertWithoutIssuesInput
    connect?: FineWhereUniqueInput
    update?: XOR<XOR<FineUpdateToOneWithWhereWithoutIssuesInput, FineUpdateWithoutIssuesInput>, FineUncheckedUpdateWithoutIssuesInput>
  }

  export type StaffUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<StaffCreateWithoutIssuesInput, StaffUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: StaffCreateOrConnectWithoutIssuesInput
    upsert?: StaffUpsertWithoutIssuesInput
    connect?: StaffWhereUniqueInput
    update?: XOR<XOR<StaffUpdateToOneWithWhereWithoutIssuesInput, StaffUpdateWithoutIssuesInput>, StaffUncheckedUpdateWithoutIssuesInput>
  }

  export type PaymentUpdateOneWithoutIssueNestedInput = {
    create?: XOR<PaymentCreateWithoutIssueInput, PaymentUncheckedCreateWithoutIssueInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutIssueInput
    upsert?: PaymentUpsertWithoutIssueInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutIssueInput, PaymentUpdateWithoutIssueInput>, PaymentUncheckedUpdateWithoutIssueInput>
  }

  export type LicenseUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<LicenseCreateWithoutIssuesInput, LicenseUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutIssuesInput
    upsert?: LicenseUpsertWithoutIssuesInput
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutIssuesInput, LicenseUpdateWithoutIssuesInput>, LicenseUncheckedUpdateWithoutIssuesInput>
  }

  export type PaymentUncheckedUpdateOneWithoutIssueNestedInput = {
    create?: XOR<PaymentCreateWithoutIssueInput, PaymentUncheckedCreateWithoutIssueInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutIssueInput
    upsert?: PaymentUpsertWithoutIssueInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutIssueInput, PaymentUpdateWithoutIssueInput>, PaymentUncheckedUpdateWithoutIssueInput>
  }

  export type UserCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<UserCreateWithoutAppointmentInput, UserUncheckedCreateWithoutAppointmentInput> | UserCreateWithoutAppointmentInput[] | UserUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentInput | UserCreateOrConnectWithoutAppointmentInput[]
    createMany?: UserCreateManyAppointmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<UserCreateWithoutAppointmentInput, UserUncheckedCreateWithoutAppointmentInput> | UserCreateWithoutAppointmentInput[] | UserUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentInput | UserCreateOrConnectWithoutAppointmentInput[]
    createMany?: UserCreateManyAppointmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type EnumAppointmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentType
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type UserUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentInput, UserUncheckedCreateWithoutAppointmentInput> | UserCreateWithoutAppointmentInput[] | UserUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentInput | UserCreateOrConnectWithoutAppointmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAppointmentInput | UserUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: UserCreateManyAppointmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAppointmentInput | UserUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAppointmentInput | UserUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<UserCreateWithoutAppointmentInput, UserUncheckedCreateWithoutAppointmentInput> | UserCreateWithoutAppointmentInput[] | UserUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAppointmentInput | UserCreateOrConnectWithoutAppointmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAppointmentInput | UserUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: UserCreateManyAppointmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAppointmentInput | UserUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAppointmentInput | UserUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActionFieldUpdateOperationsInput = {
    set?: $Enums.Action
  }

  export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumProvinceFilter<$PrismaModel = never> = {
    equals?: $Enums.Province | EnumProvinceFieldRefInput<$PrismaModel>
    in?: $Enums.Province[] | ListEnumProvinceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Province[] | ListEnumProvinceFieldRefInput<$PrismaModel>
    not?: NestedEnumProvinceFilter<$PrismaModel> | $Enums.Province
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumProvinceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Province | EnumProvinceFieldRefInput<$PrismaModel>
    in?: $Enums.Province[] | ListEnumProvinceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Province[] | ListEnumProvinceFieldRefInput<$PrismaModel>
    not?: NestedEnumProvinceWithAggregatesFilter<$PrismaModel> | $Enums.Province
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProvinceFilter<$PrismaModel>
    _max?: NestedEnumProvinceFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | EnumBloodGroupFieldRefInput<$PrismaModel>
    in?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    notIn?: $Enums.BloodGroup[] | ListEnumBloodGroupFieldRefInput<$PrismaModel>
    not?: NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBloodGroupFilter<$PrismaModel>
    _max?: NestedEnumBloodGroupFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumLicenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeFilter<$PrismaModel> | $Enums.LicenseType
  }

  export type NestedEnumLicenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusFilter<$PrismaModel> | $Enums.LicenseStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.LicenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseTypeFilter<$PrismaModel>
    _max?: NestedEnumLicenseTypeFilter<$PrismaModel>
  }

  export type NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.LicenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseStatusFilter<$PrismaModel>
    _max?: NestedEnumLicenseStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumCategoryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryStatusFilter<$PrismaModel> | $Enums.CategoryStatus
  }

  export type NestedEnumCategoryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryStatus | EnumCategoryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryStatus[] | ListEnumCategoryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryStatusWithAggregatesFilter<$PrismaModel> | $Enums.CategoryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryStatusFilter<$PrismaModel>
    _max?: NestedEnumCategoryStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumIssueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusFilter<$PrismaModel> | $Enums.IssueStatus
  }

  export type NestedEnumIssueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusWithAggregatesFilter<$PrismaModel> | $Enums.IssueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIssueStatusFilter<$PrismaModel>
    _max?: NestedEnumIssueStatusFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentType[] | ListEnumAppointmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppointmentStatus[] | ListEnumAppointmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumActionFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionFilter<$PrismaModel> | $Enums.Action
  }

  export type NestedEnumActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Action | EnumActionFieldRefInput<$PrismaModel>
    in?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Action[] | ListEnumActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActionWithAggregatesFilter<$PrismaModel> | $Enums.Action
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActionFilter<$PrismaModel>
    _max?: NestedEnumActionFilter<$PrismaModel>
  }

  export type UserCreateWithoutAddressInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    staff?: StaffCreateNestedOneWithoutUserInput
    license: LicenseCreateNestedOneWithoutUserInput
    appointment: AppointmentCreateNestedOneWithoutUsersInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    licenseId: string
    appointmentId: string
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type LicenseCreateWithoutAddressInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user?: UserCreateNestedOneWithoutLicenseInput
    medical: MedicalCreateNestedOneWithoutLicenseInput
    issues?: IssueCreateNestedManyWithoutLicenseInput
    licenseVehicleCategories?: LicenseVehicleCategoryCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutAddressInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    medicalId: string
    user?: UserUncheckedCreateNestedOneWithoutLicenseInput
    issues?: IssueUncheckedCreateNestedManyWithoutLicenseInput
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutAddressInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutAddressInput, LicenseUncheckedCreateWithoutAddressInput>
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    staff?: StaffUpdateOneWithoutUserNestedInput
    license?: LicenseUpdateOneRequiredWithoutUserNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutUsersNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LicenseUpsertWithoutAddressInput = {
    update: XOR<LicenseUpdateWithoutAddressInput, LicenseUncheckedUpdateWithoutAddressInput>
    create: XOR<LicenseCreateWithoutAddressInput, LicenseUncheckedCreateWithoutAddressInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutAddressInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutAddressInput, LicenseUncheckedUpdateWithoutAddressInput>
  }

  export type LicenseUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutLicenseNestedInput
    medical?: MedicalUpdateOneRequiredWithoutLicenseNestedInput
    issues?: IssueUpdateManyWithoutLicenseNestedInput
    licenseVehicleCategories?: LicenseVehicleCategoryUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    medicalId?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutLicenseNestedInput
    issues?: IssueUncheckedUpdateManyWithoutLicenseNestedInput
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseCreateWithoutMedicalInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user?: UserCreateNestedOneWithoutLicenseInput
    address: AddressCreateNestedOneWithoutLicenseInput
    issues?: IssueCreateNestedManyWithoutLicenseInput
    licenseVehicleCategories?: LicenseVehicleCategoryCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutMedicalInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    addressId: string
    user?: UserUncheckedCreateNestedOneWithoutLicenseInput
    issues?: IssueUncheckedCreateNestedManyWithoutLicenseInput
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutMedicalInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutMedicalInput, LicenseUncheckedCreateWithoutMedicalInput>
  }

  export type LicenseUpsertWithoutMedicalInput = {
    update: XOR<LicenseUpdateWithoutMedicalInput, LicenseUncheckedUpdateWithoutMedicalInput>
    create: XOR<LicenseCreateWithoutMedicalInput, LicenseUncheckedCreateWithoutMedicalInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutMedicalInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutMedicalInput, LicenseUncheckedUpdateWithoutMedicalInput>
  }

  export type LicenseUpdateWithoutMedicalInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutLicenseNestedInput
    address?: AddressUpdateOneRequiredWithoutLicenseNestedInput
    issues?: IssueUpdateManyWithoutLicenseNestedInput
    licenseVehicleCategories?: LicenseVehicleCategoryUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutMedicalInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    addressId?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutLicenseNestedInput
    issues?: IssueUncheckedUpdateManyWithoutLicenseNestedInput
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseVehicleCategoryCreateWithoutVehicleCategoryInput = {
    id?: string
    dateOfIssue: Date | string
    dateOfExpiry: Date | string
    categoryStatus: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    license: LicenseCreateNestedOneWithoutLicenseVehicleCategoriesInput
  }

  export type LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput = {
    id?: string
    dateOfIssue: Date | string
    dateOfExpiry: Date | string
    categoryStatus: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    licenseId: string
  }

  export type LicenseVehicleCategoryCreateOrConnectWithoutVehicleCategoryInput = {
    where: LicenseVehicleCategoryWhereUniqueInput
    create: XOR<LicenseVehicleCategoryCreateWithoutVehicleCategoryInput, LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput>
  }

  export type LicenseVehicleCategoryCreateManyVehicleCategoryInputEnvelope = {
    data: LicenseVehicleCategoryCreateManyVehicleCategoryInput | LicenseVehicleCategoryCreateManyVehicleCategoryInput[]
    skipDuplicates?: boolean
  }

  export type LicenseVehicleCategoryUpsertWithWhereUniqueWithoutVehicleCategoryInput = {
    where: LicenseVehicleCategoryWhereUniqueInput
    update: XOR<LicenseVehicleCategoryUpdateWithoutVehicleCategoryInput, LicenseVehicleCategoryUncheckedUpdateWithoutVehicleCategoryInput>
    create: XOR<LicenseVehicleCategoryCreateWithoutVehicleCategoryInput, LicenseVehicleCategoryUncheckedCreateWithoutVehicleCategoryInput>
  }

  export type LicenseVehicleCategoryUpdateWithWhereUniqueWithoutVehicleCategoryInput = {
    where: LicenseVehicleCategoryWhereUniqueInput
    data: XOR<LicenseVehicleCategoryUpdateWithoutVehicleCategoryInput, LicenseVehicleCategoryUncheckedUpdateWithoutVehicleCategoryInput>
  }

  export type LicenseVehicleCategoryUpdateManyWithWhereWithoutVehicleCategoryInput = {
    where: LicenseVehicleCategoryScalarWhereInput
    data: XOR<LicenseVehicleCategoryUpdateManyMutationInput, LicenseVehicleCategoryUncheckedUpdateManyWithoutVehicleCategoryInput>
  }

  export type LicenseVehicleCategoryScalarWhereInput = {
    AND?: LicenseVehicleCategoryScalarWhereInput | LicenseVehicleCategoryScalarWhereInput[]
    OR?: LicenseVehicleCategoryScalarWhereInput[]
    NOT?: LicenseVehicleCategoryScalarWhereInput | LicenseVehicleCategoryScalarWhereInput[]
    id?: StringFilter<"LicenseVehicleCategory"> | string
    dateOfIssue?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    dateOfExpiry?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    categoryStatus?: EnumCategoryStatusFilter<"LicenseVehicleCategory"> | $Enums.CategoryStatus
    createdAt?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    updatedAt?: DateTimeFilter<"LicenseVehicleCategory"> | Date | string
    deletedAt?: DateTimeNullableFilter<"LicenseVehicleCategory"> | Date | string | null
    deleted?: BoolFilter<"LicenseVehicleCategory"> | boolean
    vehicleCategoryId?: StringFilter<"LicenseVehicleCategory"> | string
    licenseId?: StringFilter<"LicenseVehicleCategory"> | string
  }

  export type UserCreateWithoutLicenseInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    address: AddressCreateNestedOneWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    appointment: AppointmentCreateNestedOneWithoutUsersInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLicenseInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    addressId: string
    appointmentId: string
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLicenseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLicenseInput, UserUncheckedCreateWithoutLicenseInput>
  }

  export type AddressCreateWithoutLicenseInput = {
    id?: string
    address: string
    city: string
    district: string
    province: $Enums.Province
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user?: UserCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutLicenseInput = {
    id?: string
    address: string
    city: string
    district: string
    province: $Enums.Province
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user?: UserUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutLicenseInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutLicenseInput, AddressUncheckedCreateWithoutLicenseInput>
  }

  export type MedicalCreateWithoutLicenseInput = {
    id?: string
    medical_report_photo: string
    blood_group: $Enums.BloodGroup
    blood_pressure: string
    height: string
    weight: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type MedicalUncheckedCreateWithoutLicenseInput = {
    id?: string
    medical_report_photo: string
    blood_group: $Enums.BloodGroup
    blood_pressure: string
    height: string
    weight: string
    dateOfBirth: Date | string
    gender: $Enums.Gender
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type MedicalCreateOrConnectWithoutLicenseInput = {
    where: MedicalWhereUniqueInput
    create: XOR<MedicalCreateWithoutLicenseInput, MedicalUncheckedCreateWithoutLicenseInput>
  }

  export type IssueCreateWithoutLicenseInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fine: FineCreateNestedOneWithoutIssuesInput
    staff: StaffCreateNestedOneWithoutIssuesInput
    payment?: PaymentCreateNestedOneWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutLicenseInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fineId: string
    enforcerId: string
    payment?: PaymentUncheckedCreateNestedOneWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutLicenseInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutLicenseInput, IssueUncheckedCreateWithoutLicenseInput>
  }

  export type IssueCreateManyLicenseInputEnvelope = {
    data: IssueCreateManyLicenseInput | IssueCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type LicenseVehicleCategoryCreateWithoutLicenseInput = {
    id?: string
    dateOfIssue: Date | string
    dateOfExpiry: Date | string
    categoryStatus: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    vehicleCategory: VehicleCategoryCreateNestedOneWithoutLicenseVehicleCategoriesInput
  }

  export type LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput = {
    id?: string
    dateOfIssue: Date | string
    dateOfExpiry: Date | string
    categoryStatus: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    vehicleCategoryId: string
  }

  export type LicenseVehicleCategoryCreateOrConnectWithoutLicenseInput = {
    where: LicenseVehicleCategoryWhereUniqueInput
    create: XOR<LicenseVehicleCategoryCreateWithoutLicenseInput, LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseVehicleCategoryCreateManyLicenseInputEnvelope = {
    data: LicenseVehicleCategoryCreateManyLicenseInput | LicenseVehicleCategoryCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLicenseInput = {
    update: XOR<UserUpdateWithoutLicenseInput, UserUncheckedUpdateWithoutLicenseInput>
    create: XOR<UserCreateWithoutLicenseInput, UserUncheckedCreateWithoutLicenseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLicenseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLicenseInput, UserUncheckedUpdateWithoutLicenseInput>
  }

  export type UserUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutUsersNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddressUpsertWithoutLicenseInput = {
    update: XOR<AddressUpdateWithoutLicenseInput, AddressUncheckedUpdateWithoutLicenseInput>
    create: XOR<AddressCreateWithoutLicenseInput, AddressUncheckedCreateWithoutLicenseInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutLicenseInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutLicenseInput, AddressUncheckedUpdateWithoutLicenseInput>
  }

  export type AddressUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: EnumProvinceFieldUpdateOperationsInput | $Enums.Province
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: EnumProvinceFieldUpdateOperationsInput | $Enums.Province
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type MedicalUpsertWithoutLicenseInput = {
    update: XOR<MedicalUpdateWithoutLicenseInput, MedicalUncheckedUpdateWithoutLicenseInput>
    create: XOR<MedicalCreateWithoutLicenseInput, MedicalUncheckedCreateWithoutLicenseInput>
    where?: MedicalWhereInput
  }

  export type MedicalUpdateToOneWithWhereWithoutLicenseInput = {
    where?: MedicalWhereInput
    data: XOR<MedicalUpdateWithoutLicenseInput, MedicalUncheckedUpdateWithoutLicenseInput>
  }

  export type MedicalUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    medical_report_photo?: StringFieldUpdateOperationsInput | string
    blood_group?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    blood_pressure?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MedicalUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    medical_report_photo?: StringFieldUpdateOperationsInput | string
    blood_group?: EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup
    blood_pressure?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    weight?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IssueUpsertWithWhereUniqueWithoutLicenseInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutLicenseInput, IssueUncheckedUpdateWithoutLicenseInput>
    create: XOR<IssueCreateWithoutLicenseInput, IssueUncheckedCreateWithoutLicenseInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutLicenseInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutLicenseInput, IssueUncheckedUpdateWithoutLicenseInput>
  }

  export type IssueUpdateManyWithWhereWithoutLicenseInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutLicenseInput>
  }

  export type IssueScalarWhereInput = {
    AND?: IssueScalarWhereInput | IssueScalarWhereInput[]
    OR?: IssueScalarWhereInput[]
    NOT?: IssueScalarWhereInput | IssueScalarWhereInput[]
    id?: StringFilter<"Issue"> | string
    paymentId?: StringFilter<"Issue"> | string
    vehicleNo?: StringFilter<"Issue"> | string
    courtDate?: DateTimeFilter<"Issue"> | Date | string
    location?: StringFilter<"Issue"> | string
    status?: EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Issue"> | Date | string | null
    deleted?: BoolFilter<"Issue"> | boolean
    fineId?: StringFilter<"Issue"> | string
    enforcerId?: StringFilter<"Issue"> | string
    licenseId?: StringFilter<"Issue"> | string
  }

  export type LicenseVehicleCategoryUpsertWithWhereUniqueWithoutLicenseInput = {
    where: LicenseVehicleCategoryWhereUniqueInput
    update: XOR<LicenseVehicleCategoryUpdateWithoutLicenseInput, LicenseVehicleCategoryUncheckedUpdateWithoutLicenseInput>
    create: XOR<LicenseVehicleCategoryCreateWithoutLicenseInput, LicenseVehicleCategoryUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseVehicleCategoryUpdateWithWhereUniqueWithoutLicenseInput = {
    where: LicenseVehicleCategoryWhereUniqueInput
    data: XOR<LicenseVehicleCategoryUpdateWithoutLicenseInput, LicenseVehicleCategoryUncheckedUpdateWithoutLicenseInput>
  }

  export type LicenseVehicleCategoryUpdateManyWithWhereWithoutLicenseInput = {
    where: LicenseVehicleCategoryScalarWhereInput
    data: XOR<LicenseVehicleCategoryUpdateManyMutationInput, LicenseVehicleCategoryUncheckedUpdateManyWithoutLicenseInput>
  }

  export type AddressCreateWithoutUserInput = {
    id?: string
    address: string
    city: string
    district: string
    province: $Enums.Province
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    License?: LicenseCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: string
    address: string
    city: string
    district: string
    province: $Enums.Province
    country?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    License?: LicenseUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type StaffCreateWithoutUserInput = {
    id?: string
    contactNumber: string
    email: string
    role: $Enums.Role
    permission?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issues?: IssueCreateNestedManyWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutUserInput = {
    id?: string
    contactNumber: string
    email: string
    role: $Enums.Role
    permission?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issues?: IssueUncheckedCreateNestedManyWithoutStaffInput
  }

  export type StaffCreateOrConnectWithoutUserInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
  }

  export type LicenseCreateWithoutUserInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    address: AddressCreateNestedOneWithoutLicenseInput
    medical: MedicalCreateNestedOneWithoutLicenseInput
    issues?: IssueCreateNestedManyWithoutLicenseInput
    licenseVehicleCategories?: LicenseVehicleCategoryCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutUserInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    addressId: string
    medicalId: string
    issues?: IssueUncheckedCreateNestedManyWithoutLicenseInput
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutUserInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutUserInput, LicenseUncheckedCreateWithoutUserInput>
  }

  export type AppointmentCreateWithoutUsersInput = {
    id?: string
    userId: string
    type: $Enums.AppointmentType
    scheduledAt: Date | string
    status: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type AppointmentUncheckedCreateWithoutUsersInput = {
    id?: string
    userId: string
    type: $Enums.AppointmentType
    scheduledAt: Date | string
    status: $Enums.AppointmentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type AppointmentCreateOrConnectWithoutUsersInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutUsersInput, AppointmentUncheckedCreateWithoutUsersInput>
  }

  export type LogCreateWithoutUserInput = {
    id?: string
    tableName: string
    recordId: string
    action: $Enums.Action
    oldValue: string
    newValue: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type LogUncheckedCreateWithoutUserInput = {
    id?: string
    tableName: string
    recordId: string
    action: $Enums.Action
    oldValue: string
    newValue: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type LogCreateOrConnectWithoutUserInput = {
    where: LogWhereUniqueInput
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogCreateManyUserInputEnvelope = {
    data: LogCreateManyUserInput | LogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AddressUpsertWithoutUserInput = {
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutUserInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: EnumProvinceFieldUpdateOperationsInput | $Enums.Province
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    License?: LicenseUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: EnumProvinceFieldUpdateOperationsInput | $Enums.Province
    country?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    License?: LicenseUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type StaffUpsertWithoutUserInput = {
    update: XOR<StaffUpdateWithoutUserInput, StaffUncheckedUpdateWithoutUserInput>
    create: XOR<StaffCreateWithoutUserInput, StaffUncheckedCreateWithoutUserInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutUserInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutUserInput, StaffUncheckedUpdateWithoutUserInput>
  }

  export type StaffUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issues?: IssueUpdateManyWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issues?: IssueUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type LicenseUpsertWithoutUserInput = {
    update: XOR<LicenseUpdateWithoutUserInput, LicenseUncheckedUpdateWithoutUserInput>
    create: XOR<LicenseCreateWithoutUserInput, LicenseUncheckedCreateWithoutUserInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutUserInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutUserInput, LicenseUncheckedUpdateWithoutUserInput>
  }

  export type LicenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    address?: AddressUpdateOneRequiredWithoutLicenseNestedInput
    medical?: MedicalUpdateOneRequiredWithoutLicenseNestedInput
    issues?: IssueUpdateManyWithoutLicenseNestedInput
    licenseVehicleCategories?: LicenseVehicleCategoryUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    addressId?: StringFieldUpdateOperationsInput | string
    medicalId?: StringFieldUpdateOperationsInput | string
    issues?: IssueUncheckedUpdateManyWithoutLicenseNestedInput
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type AppointmentUpsertWithoutUsersInput = {
    update: XOR<AppointmentUpdateWithoutUsersInput, AppointmentUncheckedUpdateWithoutUsersInput>
    create: XOR<AppointmentCreateWithoutUsersInput, AppointmentUncheckedCreateWithoutUsersInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutUsersInput, AppointmentUncheckedUpdateWithoutUsersInput>
  }

  export type AppointmentUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppointmentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogUpsertWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    update: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
    create: XOR<LogCreateWithoutUserInput, LogUncheckedCreateWithoutUserInput>
  }

  export type LogUpdateWithWhereUniqueWithoutUserInput = {
    where: LogWhereUniqueInput
    data: XOR<LogUpdateWithoutUserInput, LogUncheckedUpdateWithoutUserInput>
  }

  export type LogUpdateManyWithWhereWithoutUserInput = {
    where: LogScalarWhereInput
    data: XOR<LogUpdateManyMutationInput, LogUncheckedUpdateManyWithoutUserInput>
  }

  export type LogScalarWhereInput = {
    AND?: LogScalarWhereInput | LogScalarWhereInput[]
    OR?: LogScalarWhereInput[]
    NOT?: LogScalarWhereInput | LogScalarWhereInput[]
    id?: StringFilter<"Log"> | string
    tableName?: StringFilter<"Log"> | string
    recordId?: StringFilter<"Log"> | string
    action?: EnumActionFilter<"Log"> | $Enums.Action
    oldValue?: StringFilter<"Log"> | string
    newValue?: StringFilter<"Log"> | string
    timestamp?: DateTimeFilter<"Log"> | Date | string
    createdAt?: DateTimeFilter<"Log"> | Date | string
    updatedAt?: DateTimeFilter<"Log"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Log"> | Date | string | null
    deleted?: BoolFilter<"Log"> | boolean
    userId?: StringFilter<"Log"> | string
  }

  export type UserCreateWithoutStaffInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    address: AddressCreateNestedOneWithoutUserInput
    license: LicenseCreateNestedOneWithoutUserInput
    appointment: AppointmentCreateNestedOneWithoutUsersInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStaffInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    addressId: string
    licenseId: string
    appointmentId: string
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStaffInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
  }

  export type IssueCreateWithoutStaffInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fine: FineCreateNestedOneWithoutIssuesInput
    payment?: PaymentCreateNestedOneWithoutIssueInput
    license: LicenseCreateNestedOneWithoutIssuesInput
  }

  export type IssueUncheckedCreateWithoutStaffInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fineId: string
    licenseId: string
    payment?: PaymentUncheckedCreateNestedOneWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutStaffInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutStaffInput, IssueUncheckedCreateWithoutStaffInput>
  }

  export type IssueCreateManyStaffInputEnvelope = {
    data: IssueCreateManyStaffInput | IssueCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStaffInput = {
    update: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
    create: XOR<UserCreateWithoutStaffInput, UserUncheckedCreateWithoutStaffInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStaffInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStaffInput, UserUncheckedUpdateWithoutStaffInput>
  }

  export type UserUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutUserNestedInput
    license?: LicenseUpdateOneRequiredWithoutUserNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutUsersNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IssueUpsertWithWhereUniqueWithoutStaffInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutStaffInput, IssueUncheckedUpdateWithoutStaffInput>
    create: XOR<IssueCreateWithoutStaffInput, IssueUncheckedCreateWithoutStaffInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutStaffInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutStaffInput, IssueUncheckedUpdateWithoutStaffInput>
  }

  export type IssueUpdateManyWithWhereWithoutStaffInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutStaffInput>
  }

  export type VehicleCategoryCreateWithoutLicenseVehicleCategoriesInput = {
    id?: string
    vehicleDescription: string
    vehicleType: string
    vehicleClass: string
    otherAllowedVehicleClasses?: VehicleCategoryCreateotherAllowedVehicleClassesInput | string[]
    validityPeriod: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type VehicleCategoryUncheckedCreateWithoutLicenseVehicleCategoriesInput = {
    id?: string
    vehicleDescription: string
    vehicleType: string
    vehicleClass: string
    otherAllowedVehicleClasses?: VehicleCategoryCreateotherAllowedVehicleClassesInput | string[]
    validityPeriod: number
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type VehicleCategoryCreateOrConnectWithoutLicenseVehicleCategoriesInput = {
    where: VehicleCategoryWhereUniqueInput
    create: XOR<VehicleCategoryCreateWithoutLicenseVehicleCategoriesInput, VehicleCategoryUncheckedCreateWithoutLicenseVehicleCategoriesInput>
  }

  export type LicenseCreateWithoutLicenseVehicleCategoriesInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user?: UserCreateNestedOneWithoutLicenseInput
    address: AddressCreateNestedOneWithoutLicenseInput
    medical: MedicalCreateNestedOneWithoutLicenseInput
    issues?: IssueCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutLicenseVehicleCategoriesInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    addressId: string
    medicalId: string
    user?: UserUncheckedCreateNestedOneWithoutLicenseInput
    issues?: IssueUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutLicenseVehicleCategoriesInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutLicenseVehicleCategoriesInput, LicenseUncheckedCreateWithoutLicenseVehicleCategoriesInput>
  }

  export type VehicleCategoryUpsertWithoutLicenseVehicleCategoriesInput = {
    update: XOR<VehicleCategoryUpdateWithoutLicenseVehicleCategoriesInput, VehicleCategoryUncheckedUpdateWithoutLicenseVehicleCategoriesInput>
    create: XOR<VehicleCategoryCreateWithoutLicenseVehicleCategoriesInput, VehicleCategoryUncheckedCreateWithoutLicenseVehicleCategoriesInput>
    where?: VehicleCategoryWhereInput
  }

  export type VehicleCategoryUpdateToOneWithWhereWithoutLicenseVehicleCategoriesInput = {
    where?: VehicleCategoryWhereInput
    data: XOR<VehicleCategoryUpdateWithoutLicenseVehicleCategoriesInput, VehicleCategoryUncheckedUpdateWithoutLicenseVehicleCategoriesInput>
  }

  export type VehicleCategoryUpdateWithoutLicenseVehicleCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleDescription?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    vehicleClass?: StringFieldUpdateOperationsInput | string
    otherAllowedVehicleClasses?: VehicleCategoryUpdateotherAllowedVehicleClassesInput | string[]
    validityPeriod?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehicleCategoryUncheckedUpdateWithoutLicenseVehicleCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicleDescription?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    vehicleClass?: StringFieldUpdateOperationsInput | string
    otherAllowedVehicleClasses?: VehicleCategoryUpdateotherAllowedVehicleClassesInput | string[]
    validityPeriod?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LicenseUpsertWithoutLicenseVehicleCategoriesInput = {
    update: XOR<LicenseUpdateWithoutLicenseVehicleCategoriesInput, LicenseUncheckedUpdateWithoutLicenseVehicleCategoriesInput>
    create: XOR<LicenseCreateWithoutLicenseVehicleCategoriesInput, LicenseUncheckedCreateWithoutLicenseVehicleCategoriesInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutLicenseVehicleCategoriesInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutLicenseVehicleCategoriesInput, LicenseUncheckedUpdateWithoutLicenseVehicleCategoriesInput>
  }

  export type LicenseUpdateWithoutLicenseVehicleCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutLicenseNestedInput
    address?: AddressUpdateOneRequiredWithoutLicenseNestedInput
    medical?: MedicalUpdateOneRequiredWithoutLicenseNestedInput
    issues?: IssueUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutLicenseVehicleCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    addressId?: StringFieldUpdateOperationsInput | string
    medicalId?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutLicenseNestedInput
    issues?: IssueUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type IssueCreateWithoutFineInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    staff: StaffCreateNestedOneWithoutIssuesInput
    payment?: PaymentCreateNestedOneWithoutIssueInput
    license: LicenseCreateNestedOneWithoutIssuesInput
  }

  export type IssueUncheckedCreateWithoutFineInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    enforcerId: string
    licenseId: string
    payment?: PaymentUncheckedCreateNestedOneWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutFineInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutFineInput, IssueUncheckedCreateWithoutFineInput>
  }

  export type IssueCreateManyFineInputEnvelope = {
    data: IssueCreateManyFineInput | IssueCreateManyFineInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutFineInput = {
    id?: string
    userId: string
    amount: number
    paymentStatus: $Enums.PaymentStatus
    transactionId: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issue: IssueCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutFineInput = {
    id?: string
    userId: string
    amount: number
    paymentStatus: $Enums.PaymentStatus
    transactionId: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issueId: string
  }

  export type PaymentCreateOrConnectWithoutFineInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput>
  }

  export type PaymentCreateManyFineInputEnvelope = {
    data: PaymentCreateManyFineInput | PaymentCreateManyFineInput[]
    skipDuplicates?: boolean
  }

  export type IssueUpsertWithWhereUniqueWithoutFineInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutFineInput, IssueUncheckedUpdateWithoutFineInput>
    create: XOR<IssueCreateWithoutFineInput, IssueUncheckedCreateWithoutFineInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutFineInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutFineInput, IssueUncheckedUpdateWithoutFineInput>
  }

  export type IssueUpdateManyWithWhereWithoutFineInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutFineInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutFineInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutFineInput, PaymentUncheckedUpdateWithoutFineInput>
    create: XOR<PaymentCreateWithoutFineInput, PaymentUncheckedCreateWithoutFineInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutFineInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutFineInput, PaymentUncheckedUpdateWithoutFineInput>
  }

  export type PaymentUpdateManyWithWhereWithoutFineInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutFineInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    transactionId?: StringFilter<"Payment"> | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    deleted?: BoolFilter<"Payment"> | boolean
    issueId?: StringFilter<"Payment"> | string
    fineId?: StringFilter<"Payment"> | string
  }

  export type IssueCreateWithoutPaymentInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fine: FineCreateNestedOneWithoutIssuesInput
    staff: StaffCreateNestedOneWithoutIssuesInput
    license: LicenseCreateNestedOneWithoutIssuesInput
  }

  export type IssueUncheckedCreateWithoutPaymentInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fineId: string
    enforcerId: string
    licenseId: string
  }

  export type IssueCreateOrConnectWithoutPaymentInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutPaymentInput, IssueUncheckedCreateWithoutPaymentInput>
  }

  export type FineCreateWithoutPaymentsInput = {
    id?: string
    fineCategory: string
    violationType: string
    fineCharge: number
    provision: string
    sectionOfAct: string
    violationDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issues?: IssueCreateNestedManyWithoutFineInput
  }

  export type FineUncheckedCreateWithoutPaymentsInput = {
    id?: string
    fineCategory: string
    violationType: string
    fineCharge: number
    provision: string
    sectionOfAct: string
    violationDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issues?: IssueUncheckedCreateNestedManyWithoutFineInput
  }

  export type FineCreateOrConnectWithoutPaymentsInput = {
    where: FineWhereUniqueInput
    create: XOR<FineCreateWithoutPaymentsInput, FineUncheckedCreateWithoutPaymentsInput>
  }

  export type IssueUpsertWithoutPaymentInput = {
    update: XOR<IssueUpdateWithoutPaymentInput, IssueUncheckedUpdateWithoutPaymentInput>
    create: XOR<IssueCreateWithoutPaymentInput, IssueUncheckedCreateWithoutPaymentInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutPaymentInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutPaymentInput, IssueUncheckedUpdateWithoutPaymentInput>
  }

  export type IssueUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fine?: FineUpdateOneRequiredWithoutIssuesNestedInput
    staff?: StaffUpdateOneRequiredWithoutIssuesNestedInput
    license?: LicenseUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssueUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fineId?: StringFieldUpdateOperationsInput | string
    enforcerId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
  }

  export type FineUpsertWithoutPaymentsInput = {
    update: XOR<FineUpdateWithoutPaymentsInput, FineUncheckedUpdateWithoutPaymentsInput>
    create: XOR<FineCreateWithoutPaymentsInput, FineUncheckedCreateWithoutPaymentsInput>
    where?: FineWhereInput
  }

  export type FineUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: FineWhereInput
    data: XOR<FineUpdateWithoutPaymentsInput, FineUncheckedUpdateWithoutPaymentsInput>
  }

  export type FineUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fineCategory?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    fineCharge?: FloatFieldUpdateOperationsInput | number
    provision?: StringFieldUpdateOperationsInput | string
    sectionOfAct?: StringFieldUpdateOperationsInput | string
    violationDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issues?: IssueUpdateManyWithoutFineNestedInput
  }

  export type FineUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fineCategory?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    fineCharge?: FloatFieldUpdateOperationsInput | number
    provision?: StringFieldUpdateOperationsInput | string
    sectionOfAct?: StringFieldUpdateOperationsInput | string
    violationDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issues?: IssueUncheckedUpdateManyWithoutFineNestedInput
  }

  export type FineCreateWithoutIssuesInput = {
    id?: string
    fineCategory: string
    violationType: string
    fineCharge: number
    provision: string
    sectionOfAct: string
    violationDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    payments?: PaymentCreateNestedManyWithoutFineInput
  }

  export type FineUncheckedCreateWithoutIssuesInput = {
    id?: string
    fineCategory: string
    violationType: string
    fineCharge: number
    provision: string
    sectionOfAct: string
    violationDescription: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    payments?: PaymentUncheckedCreateNestedManyWithoutFineInput
  }

  export type FineCreateOrConnectWithoutIssuesInput = {
    where: FineWhereUniqueInput
    create: XOR<FineCreateWithoutIssuesInput, FineUncheckedCreateWithoutIssuesInput>
  }

  export type StaffCreateWithoutIssuesInput = {
    id?: string
    contactNumber: string
    email: string
    role: $Enums.Role
    permission?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user: UserCreateNestedOneWithoutStaffInput
  }

  export type StaffUncheckedCreateWithoutIssuesInput = {
    id?: string
    contactNumber: string
    email: string
    role: $Enums.Role
    permission?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    userId: string
  }

  export type StaffCreateOrConnectWithoutIssuesInput = {
    where: StaffWhereUniqueInput
    create: XOR<StaffCreateWithoutIssuesInput, StaffUncheckedCreateWithoutIssuesInput>
  }

  export type PaymentCreateWithoutIssueInput = {
    id?: string
    userId: string
    amount: number
    paymentStatus: $Enums.PaymentStatus
    transactionId: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fine: FineCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutIssueInput = {
    id?: string
    userId: string
    amount: number
    paymentStatus: $Enums.PaymentStatus
    transactionId: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fineId: string
  }

  export type PaymentCreateOrConnectWithoutIssueInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutIssueInput, PaymentUncheckedCreateWithoutIssueInput>
  }

  export type LicenseCreateWithoutIssuesInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    user?: UserCreateNestedOneWithoutLicenseInput
    address: AddressCreateNestedOneWithoutLicenseInput
    medical: MedicalCreateNestedOneWithoutLicenseInput
    licenseVehicleCategories?: LicenseVehicleCategoryCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutIssuesInput = {
    id?: string
    licenseNumber: string
    nic: string
    photo: string
    nicFront: string
    nicBack: string
    previousLicense?: string | null
    phone: string
    firstName: string
    lastName: string
    licenseType: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    dateOfIssue?: Date | string
    dateOfExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    addressId: string
    medicalId: string
    user?: UserUncheckedCreateNestedOneWithoutLicenseInput
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutIssuesInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutIssuesInput, LicenseUncheckedCreateWithoutIssuesInput>
  }

  export type FineUpsertWithoutIssuesInput = {
    update: XOR<FineUpdateWithoutIssuesInput, FineUncheckedUpdateWithoutIssuesInput>
    create: XOR<FineCreateWithoutIssuesInput, FineUncheckedCreateWithoutIssuesInput>
    where?: FineWhereInput
  }

  export type FineUpdateToOneWithWhereWithoutIssuesInput = {
    where?: FineWhereInput
    data: XOR<FineUpdateWithoutIssuesInput, FineUncheckedUpdateWithoutIssuesInput>
  }

  export type FineUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fineCategory?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    fineCharge?: FloatFieldUpdateOperationsInput | number
    provision?: StringFieldUpdateOperationsInput | string
    sectionOfAct?: StringFieldUpdateOperationsInput | string
    violationDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    payments?: PaymentUpdateManyWithoutFineNestedInput
  }

  export type FineUncheckedUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fineCategory?: StringFieldUpdateOperationsInput | string
    violationType?: StringFieldUpdateOperationsInput | string
    fineCharge?: FloatFieldUpdateOperationsInput | number
    provision?: StringFieldUpdateOperationsInput | string
    sectionOfAct?: StringFieldUpdateOperationsInput | string
    violationDescription?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    payments?: PaymentUncheckedUpdateManyWithoutFineNestedInput
  }

  export type StaffUpsertWithoutIssuesInput = {
    update: XOR<StaffUpdateWithoutIssuesInput, StaffUncheckedUpdateWithoutIssuesInput>
    create: XOR<StaffCreateWithoutIssuesInput, StaffUncheckedCreateWithoutIssuesInput>
    where?: StaffWhereInput
  }

  export type StaffUpdateToOneWithWhereWithoutIssuesInput = {
    where?: StaffWhereInput
    data: XOR<StaffUpdateWithoutIssuesInput, StaffUncheckedUpdateWithoutIssuesInput>
  }

  export type StaffUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutStaffNestedInput
  }

  export type StaffUncheckedUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactNumber?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    permission?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUpsertWithoutIssueInput = {
    update: XOR<PaymentUpdateWithoutIssueInput, PaymentUncheckedUpdateWithoutIssueInput>
    create: XOR<PaymentCreateWithoutIssueInput, PaymentUncheckedCreateWithoutIssueInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutIssueInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutIssueInput, PaymentUncheckedUpdateWithoutIssueInput>
  }

  export type PaymentUpdateWithoutIssueInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fine?: FineUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutIssueInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fineId?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseUpsertWithoutIssuesInput = {
    update: XOR<LicenseUpdateWithoutIssuesInput, LicenseUncheckedUpdateWithoutIssuesInput>
    create: XOR<LicenseCreateWithoutIssuesInput, LicenseUncheckedCreateWithoutIssuesInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutIssuesInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutIssuesInput, LicenseUncheckedUpdateWithoutIssuesInput>
  }

  export type LicenseUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneWithoutLicenseNestedInput
    address?: AddressUpdateOneRequiredWithoutLicenseNestedInput
    medical?: MedicalUpdateOneRequiredWithoutLicenseNestedInput
    licenseVehicleCategories?: LicenseVehicleCategoryUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    photo?: StringFieldUpdateOperationsInput | string
    nicFront?: StringFieldUpdateOperationsInput | string
    nicBack?: StringFieldUpdateOperationsInput | string
    previousLicense?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    licenseType?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    addressId?: StringFieldUpdateOperationsInput | string
    medicalId?: StringFieldUpdateOperationsInput | string
    user?: UserUncheckedUpdateOneWithoutLicenseNestedInput
    licenseVehicleCategories?: LicenseVehicleCategoryUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type UserCreateWithoutAppointmentInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    address: AddressCreateNestedOneWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    license: LicenseCreateNestedOneWithoutUserInput
    logs?: LogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAppointmentInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    addressId: string
    licenseId: string
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
    logs?: LogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAppointmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAppointmentInput, UserUncheckedCreateWithoutAppointmentInput>
  }

  export type UserCreateManyAppointmentInputEnvelope = {
    data: UserCreateManyAppointmentInput | UserCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAppointmentInput, UserUncheckedUpdateWithoutAppointmentInput>
    create: XOR<UserCreateWithoutAppointmentInput, UserUncheckedCreateWithoutAppointmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAppointmentInput, UserUncheckedUpdateWithoutAppointmentInput>
  }

  export type UserUpdateManyWithWhereWithoutAppointmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    nic?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    addressId?: StringFilter<"User"> | string
    licenseId?: StringFilter<"User"> | string
    appointmentId?: StringFilter<"User"> | string
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    address: AddressCreateNestedOneWithoutUserInput
    staff?: StaffCreateNestedOneWithoutUserInput
    license: LicenseCreateNestedOneWithoutUserInput
    appointment: AppointmentCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    addressId: string
    licenseId: string
    appointmentId: string
    staff?: StaffUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    license?: LicenseUpdateOneRequiredWithoutUserNestedInput
    appointment?: AppointmentUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
  }

  export type LicenseVehicleCategoryCreateManyVehicleCategoryInput = {
    id?: string
    dateOfIssue: Date | string
    dateOfExpiry: Date | string
    categoryStatus: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    licenseId: string
  }

  export type LicenseVehicleCategoryUpdateWithoutVehicleCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryStatus?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    license?: LicenseUpdateOneRequiredWithoutLicenseVehicleCategoriesNestedInput
  }

  export type LicenseVehicleCategoryUncheckedUpdateWithoutVehicleCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryStatus?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    licenseId?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseVehicleCategoryUncheckedUpdateManyWithoutVehicleCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryStatus?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    licenseId?: StringFieldUpdateOperationsInput | string
  }

  export type IssueCreateManyLicenseInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fineId: string
    enforcerId: string
  }

  export type LicenseVehicleCategoryCreateManyLicenseInput = {
    id?: string
    dateOfIssue: Date | string
    dateOfExpiry: Date | string
    categoryStatus: $Enums.CategoryStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    vehicleCategoryId: string
  }

  export type IssueUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fine?: FineUpdateOneRequiredWithoutIssuesNestedInput
    staff?: StaffUpdateOneRequiredWithoutIssuesNestedInput
    payment?: PaymentUpdateOneWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fineId?: StringFieldUpdateOperationsInput | string
    enforcerId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateOneWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateManyWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fineId?: StringFieldUpdateOperationsInput | string
    enforcerId?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseVehicleCategoryUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryStatus?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    vehicleCategory?: VehicleCategoryUpdateOneRequiredWithoutLicenseVehicleCategoriesNestedInput
  }

  export type LicenseVehicleCategoryUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryStatus?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    vehicleCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseVehicleCategoryUncheckedUpdateManyWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    dateOfIssue?: DateTimeFieldUpdateOperationsInput | Date | string
    dateOfExpiry?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryStatus?: EnumCategoryStatusFieldUpdateOperationsInput | $Enums.CategoryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    vehicleCategoryId?: StringFieldUpdateOperationsInput | string
  }

  export type LogCreateManyUserInput = {
    id?: string
    tableName: string
    recordId: string
    action: $Enums.Action
    oldValue: string
    newValue: string
    timestamp: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
  }

  export type LogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
    action?: EnumActionFieldUpdateOperationsInput | $Enums.Action
    oldValue?: StringFieldUpdateOperationsInput | string
    newValue?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IssueCreateManyStaffInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    fineId: string
    licenseId: string
  }

  export type IssueUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fine?: FineUpdateOneRequiredWithoutIssuesNestedInput
    payment?: PaymentUpdateOneWithoutIssueNestedInput
    license?: LicenseUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssueUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fineId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateOneWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    fineId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
  }

  export type IssueCreateManyFineInput = {
    id?: string
    paymentId: string
    vehicleNo: string
    courtDate: Date | string
    location: string
    status: $Enums.IssueStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    enforcerId: string
    licenseId: string
  }

  export type PaymentCreateManyFineInput = {
    id?: string
    userId: string
    amount: number
    paymentStatus: $Enums.PaymentStatus
    transactionId: string
    paymentDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deleted?: boolean
    issueId: string
  }

  export type IssueUpdateWithoutFineInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    staff?: StaffUpdateOneRequiredWithoutIssuesNestedInput
    payment?: PaymentUpdateOneWithoutIssueNestedInput
    license?: LicenseUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssueUncheckedUpdateWithoutFineInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    enforcerId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    payment?: PaymentUncheckedUpdateOneWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateManyWithoutFineInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    vehicleNo?: StringFieldUpdateOperationsInput | string
    courtDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    enforcerId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUpdateWithoutFineInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issue?: IssueUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutFineInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issueId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUncheckedUpdateManyWithoutFineInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    transactionId?: StringFieldUpdateOperationsInput | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted?: BoolFieldUpdateOperationsInput | boolean
    issueId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyAppointmentInput = {
    id?: string
    clerkId: string
    firstName: string
    lastName: string
    nic: string
    phone: string
    email: string
    addressId: string
    licenseId: string
  }

  export type UserUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutUserNestedInput
    staff?: StaffUpdateOneWithoutUserNestedInput
    license?: LicenseUpdateOneRequiredWithoutUserNestedInput
    logs?: LogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    staff?: StaffUncheckedUpdateOneWithoutUserNestedInput
    logs?: LogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    addressId?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
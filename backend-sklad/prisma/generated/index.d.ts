
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
 * Model Reports
 * 
 */
export type Reports = $Result.DefaultSelection<Prisma.$ReportsPayload>
/**
 * Model Codes
 * 
 */
export type Codes = $Result.DefaultSelection<Prisma.$CodesPayload>
/**
 * Model ShipmentTask
 * 
 */
export type ShipmentTask = $Result.DefaultSelection<Prisma.$ShipmentTaskPayload>
/**
 * Model ShipmentProduct
 * 
 */
export type ShipmentProduct = $Result.DefaultSelection<Prisma.$ShipmentProductPayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model ShipmentLabel
 * 
 */
export type ShipmentLabel = $Result.DefaultSelection<Prisma.$ShipmentLabelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CodeStatus: {
  IN_STOCK: 'IN_STOCK',
  DAMAGED: 'DAMAGED',
  RESERVE: 'RESERVE',
  SHIPPED: 'SHIPPED'
};

export type CodeStatus = (typeof CodeStatus)[keyof typeof CodeStatus]


export const ReportStatus: {
  IN_STOCK: 'IN_STOCK',
  RESERVE: 'RESERVE',
  SHIPPED: 'SHIPPED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]

}

export type CodeStatus = $Enums.CodeStatus

export const CodeStatus: typeof $Enums.CodeStatus

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Reports
 * const reports = await prisma.reports.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Reports
   * const reports = await prisma.reports.findMany()
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
   * `prisma.reports`: Exposes CRUD operations for the **Reports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.reports.findMany()
    * ```
    */
  get reports(): Prisma.ReportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codes`: Exposes CRUD operations for the **Codes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Codes
    * const codes = await prisma.codes.findMany()
    * ```
    */
  get codes(): Prisma.CodesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentTask`: Exposes CRUD operations for the **ShipmentTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentTasks
    * const shipmentTasks = await prisma.shipmentTask.findMany()
    * ```
    */
  get shipmentTask(): Prisma.ShipmentTaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentProduct`: Exposes CRUD operations for the **ShipmentProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentProducts
    * const shipmentProducts = await prisma.shipmentProduct.findMany()
    * ```
    */
  get shipmentProduct(): Prisma.ShipmentProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipmentLabel`: Exposes CRUD operations for the **ShipmentLabel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShipmentLabels
    * const shipmentLabels = await prisma.shipmentLabel.findMany()
    * ```
    */
  get shipmentLabel(): Prisma.ShipmentLabelDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Reports: 'Reports',
    Codes: 'Codes',
    ShipmentTask: 'ShipmentTask',
    ShipmentProduct: 'ShipmentProduct',
    Certificate: 'Certificate',
    ShipmentLabel: 'ShipmentLabel'
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
      modelProps: "reports" | "codes" | "shipmentTask" | "shipmentProduct" | "certificate" | "shipmentLabel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Reports: {
        payload: Prisma.$ReportsPayload<ExtArgs>
        fields: Prisma.ReportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          findFirst: {
            args: Prisma.ReportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          findMany: {
            args: Prisma.ReportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>[]
          }
          create: {
            args: Prisma.ReportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          createMany: {
            args: Prisma.ReportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>[]
          }
          delete: {
            args: Prisma.ReportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          update: {
            args: Prisma.ReportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          deleteMany: {
            args: Prisma.ReportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>[]
          }
          upsert: {
            args: Prisma.ReportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportsPayload>
          }
          aggregate: {
            args: Prisma.ReportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReports>
          }
          groupBy: {
            args: Prisma.ReportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportsCountArgs<ExtArgs>
            result: $Utils.Optional<ReportsCountAggregateOutputType> | number
          }
        }
      }
      Codes: {
        payload: Prisma.$CodesPayload<ExtArgs>
        fields: Prisma.CodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          findFirst: {
            args: Prisma.CodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          findMany: {
            args: Prisma.CodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>[]
          }
          create: {
            args: Prisma.CodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          createMany: {
            args: Prisma.CodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>[]
          }
          delete: {
            args: Prisma.CodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          update: {
            args: Prisma.CodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          deleteMany: {
            args: Prisma.CodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>[]
          }
          upsert: {
            args: Prisma.CodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodesPayload>
          }
          aggregate: {
            args: Prisma.CodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodes>
          }
          groupBy: {
            args: Prisma.CodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodesCountArgs<ExtArgs>
            result: $Utils.Optional<CodesCountAggregateOutputType> | number
          }
        }
      }
      ShipmentTask: {
        payload: Prisma.$ShipmentTaskPayload<ExtArgs>
        fields: Prisma.ShipmentTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload>
          }
          findFirst: {
            args: Prisma.ShipmentTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload>
          }
          findMany: {
            args: Prisma.ShipmentTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload>[]
          }
          create: {
            args: Prisma.ShipmentTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload>
          }
          createMany: {
            args: Prisma.ShipmentTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload>[]
          }
          delete: {
            args: Prisma.ShipmentTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload>
          }
          update: {
            args: Prisma.ShipmentTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentTaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentTaskPayload>
          }
          aggregate: {
            args: Prisma.ShipmentTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentTask>
          }
          groupBy: {
            args: Prisma.ShipmentTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentTaskCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentTaskCountAggregateOutputType> | number
          }
        }
      }
      ShipmentProduct: {
        payload: Prisma.$ShipmentProductPayload<ExtArgs>
        fields: Prisma.ShipmentProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload>
          }
          findFirst: {
            args: Prisma.ShipmentProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload>
          }
          findMany: {
            args: Prisma.ShipmentProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload>[]
          }
          create: {
            args: Prisma.ShipmentProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload>
          }
          createMany: {
            args: Prisma.ShipmentProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload>[]
          }
          delete: {
            args: Prisma.ShipmentProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload>
          }
          update: {
            args: Prisma.ShipmentProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentProductPayload>
          }
          aggregate: {
            args: Prisma.ShipmentProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentProduct>
          }
          groupBy: {
            args: Prisma.ShipmentProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentProductCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentProductCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      ShipmentLabel: {
        payload: Prisma.$ShipmentLabelPayload<ExtArgs>
        fields: Prisma.ShipmentLabelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentLabelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentLabelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload>
          }
          findFirst: {
            args: Prisma.ShipmentLabelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentLabelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload>
          }
          findMany: {
            args: Prisma.ShipmentLabelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload>[]
          }
          create: {
            args: Prisma.ShipmentLabelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload>
          }
          createMany: {
            args: Prisma.ShipmentLabelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentLabelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload>[]
          }
          delete: {
            args: Prisma.ShipmentLabelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload>
          }
          update: {
            args: Prisma.ShipmentLabelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentLabelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentLabelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentLabelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentLabelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentLabelPayload>
          }
          aggregate: {
            args: Prisma.ShipmentLabelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipmentLabel>
          }
          groupBy: {
            args: Prisma.ShipmentLabelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentLabelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentLabelCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentLabelCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    reports?: ReportsOmit
    codes?: CodesOmit
    shipmentTask?: ShipmentTaskOmit
    shipmentProduct?: ShipmentProductOmit
    certificate?: CertificateOmit
    shipmentLabel?: ShipmentLabelOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type ReportsCountOutputType
   */

  export type ReportsCountOutputType = {
    codes: number
  }

  export type ReportsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codes?: boolean | ReportsCountOutputTypeCountCodesArgs
  }

  // Custom InputTypes
  /**
   * ReportsCountOutputType without action
   */
  export type ReportsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReportsCountOutputType
     */
    select?: ReportsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReportsCountOutputType without action
   */
  export type ReportsCountOutputTypeCountCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodesWhereInput
  }


  /**
   * Count Type ShipmentTaskCountOutputType
   */

  export type ShipmentTaskCountOutputType = {
    products: number
    labels: number
  }

  export type ShipmentTaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ShipmentTaskCountOutputTypeCountProductsArgs
    labels?: boolean | ShipmentTaskCountOutputTypeCountLabelsArgs
  }

  // Custom InputTypes
  /**
   * ShipmentTaskCountOutputType without action
   */
  export type ShipmentTaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTaskCountOutputType
     */
    select?: ShipmentTaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentTaskCountOutputType without action
   */
  export type ShipmentTaskCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentProductWhereInput
  }

  /**
   * ShipmentTaskCountOutputType without action
   */
  export type ShipmentTaskCountOutputTypeCountLabelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentLabelWhereInput
  }


  /**
   * Count Type ShipmentProductCountOutputType
   */

  export type ShipmentProductCountOutputType = {
    certificates: number
  }

  export type ShipmentProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificates?: boolean | ShipmentProductCountOutputTypeCountCertificatesArgs
  }

  // Custom InputTypes
  /**
   * ShipmentProductCountOutputType without action
   */
  export type ShipmentProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProductCountOutputType
     */
    select?: ShipmentProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentProductCountOutputType without action
   */
  export type ShipmentProductCountOutputTypeCountCertificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Reports
   */

  export type AggregateReports = {
    _count: ReportsCountAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  export type ReportsMinAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    gtin: string | null
    manufactureDate: string | null
    bbd: string | null
    batch: string | null
    name: string | null
    description: string | null
    status: $Enums.ReportStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportsMaxAggregateOutputType = {
    id: string | null
    startDate: Date | null
    endDate: Date | null
    gtin: string | null
    manufactureDate: string | null
    bbd: string | null
    batch: string | null
    name: string | null
    description: string | null
    status: $Enums.ReportStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReportsCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    gtin: number
    manufactureDate: number
    bbd: number
    batch: number
    name: number
    description: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReportsMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    gtin?: true
    manufactureDate?: true
    bbd?: true
    batch?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportsMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    gtin?: true
    manufactureDate?: true
    bbd?: true
    batch?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReportsCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    gtin?: true
    manufactureDate?: true
    bbd?: true
    batch?: true
    name?: true
    description?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to aggregate.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationInput | ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportsMaxAggregateInputType
  }

  export type GetReportsAggregateType<T extends ReportsAggregateArgs> = {
        [P in keyof T & keyof AggregateReports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReports[P]>
      : GetScalarType<T[P], AggregateReports[P]>
  }




  export type ReportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportsWhereInput
    orderBy?: ReportsOrderByWithAggregationInput | ReportsOrderByWithAggregationInput[]
    by: ReportsScalarFieldEnum[] | ReportsScalarFieldEnum
    having?: ReportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportsCountAggregateInputType | true
    _min?: ReportsMinAggregateInputType
    _max?: ReportsMaxAggregateInputType
  }

  export type ReportsGroupByOutputType = {
    id: string
    startDate: Date
    endDate: Date
    gtin: string
    manufactureDate: string
    bbd: string
    batch: string
    name: string
    description: string
    status: $Enums.ReportStatus
    createdAt: Date
    updatedAt: Date
    _count: ReportsCountAggregateOutputType | null
    _min: ReportsMinAggregateOutputType | null
    _max: ReportsMaxAggregateOutputType | null
  }

  type GetReportsGroupByPayload<T extends ReportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportsGroupByOutputType[P]>
            : GetScalarType<T[P], ReportsGroupByOutputType[P]>
        }
      >
    >


  export type ReportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    gtin?: boolean
    manufactureDate?: boolean
    bbd?: boolean
    batch?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    codes?: boolean | Reports$codesArgs<ExtArgs>
    _count?: boolean | ReportsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reports"]>

  export type ReportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    gtin?: boolean
    manufactureDate?: boolean
    bbd?: boolean
    batch?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reports"]>

  export type ReportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    gtin?: boolean
    manufactureDate?: boolean
    bbd?: boolean
    batch?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["reports"]>

  export type ReportsSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    gtin?: boolean
    manufactureDate?: boolean
    bbd?: boolean
    batch?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "gtin" | "manufactureDate" | "bbd" | "batch" | "name" | "description" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["reports"]>
  export type ReportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    codes?: boolean | Reports$codesArgs<ExtArgs>
    _count?: boolean | ReportsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReportsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reports"
    objects: {
      codes: Prisma.$CodesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      startDate: Date
      endDate: Date
      gtin: string
      manufactureDate: string
      bbd: string
      batch: string
      name: string
      description: string
      status: $Enums.ReportStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["reports"]>
    composites: {}
  }

  type ReportsGetPayload<S extends boolean | null | undefined | ReportsDefaultArgs> = $Result.GetResult<Prisma.$ReportsPayload, S>

  type ReportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportsCountAggregateInputType | true
    }

  export interface ReportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reports'], meta: { name: 'Reports' } }
    /**
     * Find zero or one Reports that matches the filter.
     * @param {ReportsFindUniqueArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportsFindUniqueArgs>(args: SelectSubset<T, ReportsFindUniqueArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportsFindUniqueOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindFirstArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportsFindFirstArgs>(args?: SelectSubset<T, ReportsFindFirstArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindFirstOrThrowArgs} args - Arguments to find a Reports
     * @example
     * // Get one Reports
     * const reports = await prisma.reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.reports.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.reports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportsWithIdOnly = await prisma.reports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportsFindManyArgs>(args?: SelectSubset<T, ReportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reports.
     * @param {ReportsCreateArgs} args - Arguments to create a Reports.
     * @example
     * // Create one Reports
     * const Reports = await prisma.reports.create({
     *   data: {
     *     // ... data to create a Reports
     *   }
     * })
     * 
     */
    create<T extends ReportsCreateArgs>(args: SelectSubset<T, ReportsCreateArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportsCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportsCreateManyArgs>(args?: SelectSubset<T, ReportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportsCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const reports = await prisma.reports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportsWithIdOnly = await prisma.reports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reports.
     * @param {ReportsDeleteArgs} args - Arguments to delete one Reports.
     * @example
     * // Delete one Reports
     * const Reports = await prisma.reports.delete({
     *   where: {
     *     // ... filter to delete one Reports
     *   }
     * })
     * 
     */
    delete<T extends ReportsDeleteArgs>(args: SelectSubset<T, ReportsDeleteArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reports.
     * @param {ReportsUpdateArgs} args - Arguments to update one Reports.
     * @example
     * // Update one Reports
     * const reports = await prisma.reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportsUpdateArgs>(args: SelectSubset<T, ReportsUpdateArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportsDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportsDeleteManyArgs>(args?: SelectSubset<T, ReportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportsUpdateManyArgs>(args: SelectSubset<T, ReportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportsUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const reports = await prisma.reports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportsWithIdOnly = await prisma.reports.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReportsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reports.
     * @param {ReportsUpsertArgs} args - Arguments to update or create a Reports.
     * @example
     * // Update or create a Reports
     * const reports = await prisma.reports.upsert({
     *   create: {
     *     // ... data to create a Reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reports we want to update
     *   }
     * })
     */
    upsert<T extends ReportsUpsertArgs>(args: SelectSubset<T, ReportsUpsertArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.reports.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportsCountArgs>(
      args?: Subset<T, ReportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportsAggregateArgs>(args: Subset<T, ReportsAggregateArgs>): Prisma.PrismaPromise<GetReportsAggregateType<T>>

    /**
     * Group by Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportsGroupByArgs} args - Group by arguments.
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
      T extends ReportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportsGroupByArgs['orderBy'] }
        : { orderBy?: ReportsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reports model
   */
  readonly fields: ReportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    codes<T extends Reports$codesArgs<ExtArgs> = {}>(args?: Subset<T, Reports$codesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Reports model
   */
  interface ReportsFieldRefs {
    readonly id: FieldRef<"Reports", 'String'>
    readonly startDate: FieldRef<"Reports", 'DateTime'>
    readonly endDate: FieldRef<"Reports", 'DateTime'>
    readonly gtin: FieldRef<"Reports", 'String'>
    readonly manufactureDate: FieldRef<"Reports", 'String'>
    readonly bbd: FieldRef<"Reports", 'String'>
    readonly batch: FieldRef<"Reports", 'String'>
    readonly name: FieldRef<"Reports", 'String'>
    readonly description: FieldRef<"Reports", 'String'>
    readonly status: FieldRef<"Reports", 'ReportStatus'>
    readonly createdAt: FieldRef<"Reports", 'DateTime'>
    readonly updatedAt: FieldRef<"Reports", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reports findUnique
   */
  export type ReportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports findUniqueOrThrow
   */
  export type ReportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports findFirst
   */
  export type ReportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationInput | ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports findFirstOrThrow
   */
  export type ReportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationInput | ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports findMany
   */
  export type ReportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportsOrderByWithRelationInput | ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportsScalarFieldEnum | ReportsScalarFieldEnum[]
  }

  /**
   * Reports create
   */
  export type ReportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reports.
     */
    data: XOR<ReportsCreateInput, ReportsUncheckedCreateInput>
  }

  /**
   * Reports createMany
   */
  export type ReportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportsCreateManyInput | ReportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reports createManyAndReturn
   */
  export type ReportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportsCreateManyInput | ReportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reports update
   */
  export type ReportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reports.
     */
    data: XOR<ReportsUpdateInput, ReportsUncheckedUpdateInput>
    /**
     * Choose, which Reports to update.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports updateMany
   */
  export type ReportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportsUpdateManyMutationInput, ReportsUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportsWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Reports updateManyAndReturn
   */
  export type ReportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportsUpdateManyMutationInput, ReportsUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportsWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Reports upsert
   */
  export type ReportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reports to update in case it exists.
     */
    where: ReportsWhereUniqueInput
    /**
     * In case the Reports found by the `where` argument doesn't exist, create a new Reports with this data.
     */
    create: XOR<ReportsCreateInput, ReportsUncheckedCreateInput>
    /**
     * In case the Reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportsUpdateInput, ReportsUncheckedUpdateInput>
  }

  /**
   * Reports delete
   */
  export type ReportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
    /**
     * Filter which Reports to delete.
     */
    where: ReportsWhereUniqueInput
  }

  /**
   * Reports deleteMany
   */
  export type ReportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportsWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Reports.codes
   */
  export type Reports$codesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
    where?: CodesWhereInput
    orderBy?: CodesOrderByWithRelationInput | CodesOrderByWithRelationInput[]
    cursor?: CodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CodesScalarFieldEnum | CodesScalarFieldEnum[]
  }

  /**
   * Reports without action
   */
  export type ReportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reports
     */
    select?: ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reports
     */
    omit?: ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportsInclude<ExtArgs> | null
  }


  /**
   * Model Codes
   */

  export type AggregateCodes = {
    _count: CodesCountAggregateOutputType | null
    _avg: CodesAvgAggregateOutputType | null
    _sum: CodesSumAggregateOutputType | null
    _min: CodesMinAggregateOutputType | null
    _max: CodesMaxAggregateOutputType | null
  }

  export type CodesAvgAggregateOutputType = {
    boxNumber: number | null
    palletNumber: number | null
  }

  export type CodesSumAggregateOutputType = {
    boxNumber: number | null
    palletNumber: number | null
  }

  export type CodesMinAggregateOutputType = {
    id: string | null
    code: string | null
    gtin: string | null
    boxNumber: number | null
    boxLabel: string | null
    palletNumber: number | null
    palletLabel: string | null
    status: $Enums.CodeStatus | null
    reportId: string | null
  }

  export type CodesMaxAggregateOutputType = {
    id: string | null
    code: string | null
    gtin: string | null
    boxNumber: number | null
    boxLabel: string | null
    palletNumber: number | null
    palletLabel: string | null
    status: $Enums.CodeStatus | null
    reportId: string | null
  }

  export type CodesCountAggregateOutputType = {
    id: number
    code: number
    gtin: number
    boxNumber: number
    boxLabel: number
    palletNumber: number
    palletLabel: number
    status: number
    reportId: number
    _all: number
  }


  export type CodesAvgAggregateInputType = {
    boxNumber?: true
    palletNumber?: true
  }

  export type CodesSumAggregateInputType = {
    boxNumber?: true
    palletNumber?: true
  }

  export type CodesMinAggregateInputType = {
    id?: true
    code?: true
    gtin?: true
    boxNumber?: true
    boxLabel?: true
    palletNumber?: true
    palletLabel?: true
    status?: true
    reportId?: true
  }

  export type CodesMaxAggregateInputType = {
    id?: true
    code?: true
    gtin?: true
    boxNumber?: true
    boxLabel?: true
    palletNumber?: true
    palletLabel?: true
    status?: true
    reportId?: true
  }

  export type CodesCountAggregateInputType = {
    id?: true
    code?: true
    gtin?: true
    boxNumber?: true
    boxLabel?: true
    palletNumber?: true
    palletLabel?: true
    status?: true
    reportId?: true
    _all?: true
  }

  export type CodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Codes to aggregate.
     */
    where?: CodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodesOrderByWithRelationInput | CodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Codes
    **/
    _count?: true | CodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodesMaxAggregateInputType
  }

  export type GetCodesAggregateType<T extends CodesAggregateArgs> = {
        [P in keyof T & keyof AggregateCodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodes[P]>
      : GetScalarType<T[P], AggregateCodes[P]>
  }




  export type CodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodesWhereInput
    orderBy?: CodesOrderByWithAggregationInput | CodesOrderByWithAggregationInput[]
    by: CodesScalarFieldEnum[] | CodesScalarFieldEnum
    having?: CodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodesCountAggregateInputType | true
    _avg?: CodesAvgAggregateInputType
    _sum?: CodesSumAggregateInputType
    _min?: CodesMinAggregateInputType
    _max?: CodesMaxAggregateInputType
  }

  export type CodesGroupByOutputType = {
    id: string
    code: string
    gtin: string
    boxNumber: number | null
    boxLabel: string | null
    palletNumber: number | null
    palletLabel: string | null
    status: $Enums.CodeStatus
    reportId: string
    _count: CodesCountAggregateOutputType | null
    _avg: CodesAvgAggregateOutputType | null
    _sum: CodesSumAggregateOutputType | null
    _min: CodesMinAggregateOutputType | null
    _max: CodesMaxAggregateOutputType | null
  }

  type GetCodesGroupByPayload<T extends CodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodesGroupByOutputType[P]>
            : GetScalarType<T[P], CodesGroupByOutputType[P]>
        }
      >
    >


  export type CodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    gtin?: boolean
    boxNumber?: boolean
    boxLabel?: boolean
    palletNumber?: boolean
    palletLabel?: boolean
    status?: boolean
    reportId?: boolean
    report?: boolean | ReportsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codes"]>

  export type CodesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    gtin?: boolean
    boxNumber?: boolean
    boxLabel?: boolean
    palletNumber?: boolean
    palletLabel?: boolean
    status?: boolean
    reportId?: boolean
    report?: boolean | ReportsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codes"]>

  export type CodesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    gtin?: boolean
    boxNumber?: boolean
    boxLabel?: boolean
    palletNumber?: boolean
    palletLabel?: boolean
    status?: boolean
    reportId?: boolean
    report?: boolean | ReportsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["codes"]>

  export type CodesSelectScalar = {
    id?: boolean
    code?: boolean
    gtin?: boolean
    boxNumber?: boolean
    boxLabel?: boolean
    palletNumber?: boolean
    palletLabel?: boolean
    status?: boolean
    reportId?: boolean
  }

  export type CodesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "gtin" | "boxNumber" | "boxLabel" | "palletNumber" | "palletLabel" | "status" | "reportId", ExtArgs["result"]["codes"]>
  export type CodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportsDefaultArgs<ExtArgs>
  }
  export type CodesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportsDefaultArgs<ExtArgs>
  }
  export type CodesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report?: boolean | ReportsDefaultArgs<ExtArgs>
  }

  export type $CodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Codes"
    objects: {
      report: Prisma.$ReportsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      gtin: string
      boxNumber: number | null
      boxLabel: string | null
      palletNumber: number | null
      palletLabel: string | null
      status: $Enums.CodeStatus
      reportId: string
    }, ExtArgs["result"]["codes"]>
    composites: {}
  }

  type CodesGetPayload<S extends boolean | null | undefined | CodesDefaultArgs> = $Result.GetResult<Prisma.$CodesPayload, S>

  type CodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodesCountAggregateInputType | true
    }

  export interface CodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Codes'], meta: { name: 'Codes' } }
    /**
     * Find zero or one Codes that matches the filter.
     * @param {CodesFindUniqueArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodesFindUniqueArgs>(args: SelectSubset<T, CodesFindUniqueArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Codes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodesFindUniqueOrThrowArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodesFindUniqueOrThrowArgs>(args: SelectSubset<T, CodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesFindFirstArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodesFindFirstArgs>(args?: SelectSubset<T, CodesFindFirstArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Codes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesFindFirstOrThrowArgs} args - Arguments to find a Codes
     * @example
     * // Get one Codes
     * const codes = await prisma.codes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodesFindFirstOrThrowArgs>(args?: SelectSubset<T, CodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Codes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Codes
     * const codes = await prisma.codes.findMany()
     * 
     * // Get first 10 Codes
     * const codes = await prisma.codes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codesWithIdOnly = await prisma.codes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodesFindManyArgs>(args?: SelectSubset<T, CodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Codes.
     * @param {CodesCreateArgs} args - Arguments to create a Codes.
     * @example
     * // Create one Codes
     * const Codes = await prisma.codes.create({
     *   data: {
     *     // ... data to create a Codes
     *   }
     * })
     * 
     */
    create<T extends CodesCreateArgs>(args: SelectSubset<T, CodesCreateArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Codes.
     * @param {CodesCreateManyArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const codes = await prisma.codes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodesCreateManyArgs>(args?: SelectSubset<T, CodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Codes and returns the data saved in the database.
     * @param {CodesCreateManyAndReturnArgs} args - Arguments to create many Codes.
     * @example
     * // Create many Codes
     * const codes = await prisma.codes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Codes and only return the `id`
     * const codesWithIdOnly = await prisma.codes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodesCreateManyAndReturnArgs>(args?: SelectSubset<T, CodesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Codes.
     * @param {CodesDeleteArgs} args - Arguments to delete one Codes.
     * @example
     * // Delete one Codes
     * const Codes = await prisma.codes.delete({
     *   where: {
     *     // ... filter to delete one Codes
     *   }
     * })
     * 
     */
    delete<T extends CodesDeleteArgs>(args: SelectSubset<T, CodesDeleteArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Codes.
     * @param {CodesUpdateArgs} args - Arguments to update one Codes.
     * @example
     * // Update one Codes
     * const codes = await prisma.codes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodesUpdateArgs>(args: SelectSubset<T, CodesUpdateArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Codes.
     * @param {CodesDeleteManyArgs} args - Arguments to filter Codes to delete.
     * @example
     * // Delete a few Codes
     * const { count } = await prisma.codes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodesDeleteManyArgs>(args?: SelectSubset<T, CodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Codes
     * const codes = await prisma.codes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodesUpdateManyArgs>(args: SelectSubset<T, CodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Codes and returns the data updated in the database.
     * @param {CodesUpdateManyAndReturnArgs} args - Arguments to update many Codes.
     * @example
     * // Update many Codes
     * const codes = await prisma.codes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Codes and only return the `id`
     * const codesWithIdOnly = await prisma.codes.updateManyAndReturn({
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
    updateManyAndReturn<T extends CodesUpdateManyAndReturnArgs>(args: SelectSubset<T, CodesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Codes.
     * @param {CodesUpsertArgs} args - Arguments to update or create a Codes.
     * @example
     * // Update or create a Codes
     * const codes = await prisma.codes.upsert({
     *   create: {
     *     // ... data to create a Codes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Codes we want to update
     *   }
     * })
     */
    upsert<T extends CodesUpsertArgs>(args: SelectSubset<T, CodesUpsertArgs<ExtArgs>>): Prisma__CodesClient<$Result.GetResult<Prisma.$CodesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesCountArgs} args - Arguments to filter Codes to count.
     * @example
     * // Count the number of Codes
     * const count = await prisma.codes.count({
     *   where: {
     *     // ... the filter for the Codes we want to count
     *   }
     * })
    **/
    count<T extends CodesCountArgs>(
      args?: Subset<T, CodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CodesAggregateArgs>(args: Subset<T, CodesAggregateArgs>): Prisma.PrismaPromise<GetCodesAggregateType<T>>

    /**
     * Group by Codes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodesGroupByArgs} args - Group by arguments.
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
      T extends CodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodesGroupByArgs['orderBy'] }
        : { orderBy?: CodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Codes model
   */
  readonly fields: CodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Codes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report<T extends ReportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReportsDefaultArgs<ExtArgs>>): Prisma__ReportsClient<$Result.GetResult<Prisma.$ReportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Codes model
   */
  interface CodesFieldRefs {
    readonly id: FieldRef<"Codes", 'String'>
    readonly code: FieldRef<"Codes", 'String'>
    readonly gtin: FieldRef<"Codes", 'String'>
    readonly boxNumber: FieldRef<"Codes", 'Int'>
    readonly boxLabel: FieldRef<"Codes", 'String'>
    readonly palletNumber: FieldRef<"Codes", 'Int'>
    readonly palletLabel: FieldRef<"Codes", 'String'>
    readonly status: FieldRef<"Codes", 'CodeStatus'>
    readonly reportId: FieldRef<"Codes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Codes findUnique
   */
  export type CodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where: CodesWhereUniqueInput
  }

  /**
   * Codes findUniqueOrThrow
   */
  export type CodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where: CodesWhereUniqueInput
  }

  /**
   * Codes findFirst
   */
  export type CodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where?: CodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodesOrderByWithRelationInput | CodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodesScalarFieldEnum | CodesScalarFieldEnum[]
  }

  /**
   * Codes findFirstOrThrow
   */
  export type CodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where?: CodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodesOrderByWithRelationInput | CodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Codes.
     */
    cursor?: CodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Codes.
     */
    distinct?: CodesScalarFieldEnum | CodesScalarFieldEnum[]
  }

  /**
   * Codes findMany
   */
  export type CodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
    /**
     * Filter, which Codes to fetch.
     */
    where?: CodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Codes to fetch.
     */
    orderBy?: CodesOrderByWithRelationInput | CodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Codes.
     */
    cursor?: CodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Codes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Codes.
     */
    skip?: number
    distinct?: CodesScalarFieldEnum | CodesScalarFieldEnum[]
  }

  /**
   * Codes create
   */
  export type CodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
    /**
     * The data needed to create a Codes.
     */
    data: XOR<CodesCreateInput, CodesUncheckedCreateInput>
  }

  /**
   * Codes createMany
   */
  export type CodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Codes.
     */
    data: CodesCreateManyInput | CodesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Codes createManyAndReturn
   */
  export type CodesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * The data used to create many Codes.
     */
    data: CodesCreateManyInput | CodesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Codes update
   */
  export type CodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
    /**
     * The data needed to update a Codes.
     */
    data: XOR<CodesUpdateInput, CodesUncheckedUpdateInput>
    /**
     * Choose, which Codes to update.
     */
    where: CodesWhereUniqueInput
  }

  /**
   * Codes updateMany
   */
  export type CodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Codes.
     */
    data: XOR<CodesUpdateManyMutationInput, CodesUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodesWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
  }

  /**
   * Codes updateManyAndReturn
   */
  export type CodesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * The data used to update Codes.
     */
    data: XOR<CodesUpdateManyMutationInput, CodesUncheckedUpdateManyInput>
    /**
     * Filter which Codes to update
     */
    where?: CodesWhereInput
    /**
     * Limit how many Codes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Codes upsert
   */
  export type CodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
    /**
     * The filter to search for the Codes to update in case it exists.
     */
    where: CodesWhereUniqueInput
    /**
     * In case the Codes found by the `where` argument doesn't exist, create a new Codes with this data.
     */
    create: XOR<CodesCreateInput, CodesUncheckedCreateInput>
    /**
     * In case the Codes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodesUpdateInput, CodesUncheckedUpdateInput>
  }

  /**
   * Codes delete
   */
  export type CodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
    /**
     * Filter which Codes to delete.
     */
    where: CodesWhereUniqueInput
  }

  /**
   * Codes deleteMany
   */
  export type CodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Codes to delete
     */
    where?: CodesWhereInput
    /**
     * Limit how many Codes to delete.
     */
    limit?: number
  }

  /**
   * Codes without action
   */
  export type CodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Codes
     */
    select?: CodesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Codes
     */
    omit?: CodesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CodesInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentTask
   */

  export type AggregateShipmentTask = {
    _count: ShipmentTaskCountAggregateOutputType | null
    _avg: ShipmentTaskAvgAggregateOutputType | null
    _sum: ShipmentTaskSumAggregateOutputType | null
    _min: ShipmentTaskMinAggregateOutputType | null
    _max: ShipmentTaskMaxAggregateOutputType | null
  }

  export type ShipmentTaskAvgAggregateOutputType = {
    agent: number | null
    count: number | null
  }

  export type ShipmentTaskSumAggregateOutputType = {
    agent: number | null
    count: number | null
  }

  export type ShipmentTaskMinAggregateOutputType = {
    id: string | null
    group: string | null
    shippingDoc: string | null
    nomerTn: string | null
    country: string | null
    agent: number | null
    contract: string | null
    count: number | null
    operationDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShipmentTaskMaxAggregateOutputType = {
    id: string | null
    group: string | null
    shippingDoc: string | null
    nomerTn: string | null
    country: string | null
    agent: number | null
    contract: string | null
    count: number | null
    operationDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShipmentTaskCountAggregateOutputType = {
    id: number
    group: number
    shippingDoc: number
    nomerTn: number
    country: number
    agent: number
    contract: number
    count: number
    operationDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShipmentTaskAvgAggregateInputType = {
    agent?: true
    count?: true
  }

  export type ShipmentTaskSumAggregateInputType = {
    agent?: true
    count?: true
  }

  export type ShipmentTaskMinAggregateInputType = {
    id?: true
    group?: true
    shippingDoc?: true
    nomerTn?: true
    country?: true
    agent?: true
    contract?: true
    count?: true
    operationDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShipmentTaskMaxAggregateInputType = {
    id?: true
    group?: true
    shippingDoc?: true
    nomerTn?: true
    country?: true
    agent?: true
    contract?: true
    count?: true
    operationDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShipmentTaskCountAggregateInputType = {
    id?: true
    group?: true
    shippingDoc?: true
    nomerTn?: true
    country?: true
    agent?: true
    contract?: true
    count?: true
    operationDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShipmentTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentTask to aggregate.
     */
    where?: ShipmentTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentTasks to fetch.
     */
    orderBy?: ShipmentTaskOrderByWithRelationInput | ShipmentTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentTasks
    **/
    _count?: true | ShipmentTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentTaskMaxAggregateInputType
  }

  export type GetShipmentTaskAggregateType<T extends ShipmentTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentTask[P]>
      : GetScalarType<T[P], AggregateShipmentTask[P]>
  }




  export type ShipmentTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentTaskWhereInput
    orderBy?: ShipmentTaskOrderByWithAggregationInput | ShipmentTaskOrderByWithAggregationInput[]
    by: ShipmentTaskScalarFieldEnum[] | ShipmentTaskScalarFieldEnum
    having?: ShipmentTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentTaskCountAggregateInputType | true
    _avg?: ShipmentTaskAvgAggregateInputType
    _sum?: ShipmentTaskSumAggregateInputType
    _min?: ShipmentTaskMinAggregateInputType
    _max?: ShipmentTaskMaxAggregateInputType
  }

  export type ShipmentTaskGroupByOutputType = {
    id: string
    group: string
    shippingDoc: string
    nomerTn: string | null
    country: string
    agent: number
    contract: string | null
    count: number
    operationDate: Date
    createdAt: Date
    updatedAt: Date
    _count: ShipmentTaskCountAggregateOutputType | null
    _avg: ShipmentTaskAvgAggregateOutputType | null
    _sum: ShipmentTaskSumAggregateOutputType | null
    _min: ShipmentTaskMinAggregateOutputType | null
    _max: ShipmentTaskMaxAggregateOutputType | null
  }

  type GetShipmentTaskGroupByPayload<T extends ShipmentTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentTaskGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentTaskGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group?: boolean
    shippingDoc?: boolean
    nomerTn?: boolean
    country?: boolean
    agent?: boolean
    contract?: boolean
    count?: boolean
    operationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | ShipmentTask$productsArgs<ExtArgs>
    labels?: boolean | ShipmentTask$labelsArgs<ExtArgs>
    _count?: boolean | ShipmentTaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentTask"]>

  export type ShipmentTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group?: boolean
    shippingDoc?: boolean
    nomerTn?: boolean
    country?: boolean
    agent?: boolean
    contract?: boolean
    count?: boolean
    operationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shipmentTask"]>

  export type ShipmentTaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    group?: boolean
    shippingDoc?: boolean
    nomerTn?: boolean
    country?: boolean
    agent?: boolean
    contract?: boolean
    count?: boolean
    operationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shipmentTask"]>

  export type ShipmentTaskSelectScalar = {
    id?: boolean
    group?: boolean
    shippingDoc?: boolean
    nomerTn?: boolean
    country?: boolean
    agent?: boolean
    contract?: boolean
    count?: boolean
    operationDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShipmentTaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "group" | "shippingDoc" | "nomerTn" | "country" | "agent" | "contract" | "count" | "operationDate" | "createdAt" | "updatedAt", ExtArgs["result"]["shipmentTask"]>
  export type ShipmentTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ShipmentTask$productsArgs<ExtArgs>
    labels?: boolean | ShipmentTask$labelsArgs<ExtArgs>
    _count?: boolean | ShipmentTaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShipmentTaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShipmentTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentTask"
    objects: {
      products: Prisma.$ShipmentProductPayload<ExtArgs>[]
      labels: Prisma.$ShipmentLabelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      group: string
      shippingDoc: string
      nomerTn: string | null
      country: string
      agent: number
      contract: string | null
      count: number
      operationDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shipmentTask"]>
    composites: {}
  }

  type ShipmentTaskGetPayload<S extends boolean | null | undefined | ShipmentTaskDefaultArgs> = $Result.GetResult<Prisma.$ShipmentTaskPayload, S>

  type ShipmentTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentTaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentTaskCountAggregateInputType | true
    }

  export interface ShipmentTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentTask'], meta: { name: 'ShipmentTask' } }
    /**
     * Find zero or one ShipmentTask that matches the filter.
     * @param {ShipmentTaskFindUniqueArgs} args - Arguments to find a ShipmentTask
     * @example
     * // Get one ShipmentTask
     * const shipmentTask = await prisma.shipmentTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentTaskFindUniqueArgs>(args: SelectSubset<T, ShipmentTaskFindUniqueArgs<ExtArgs>>): Prisma__ShipmentTaskClient<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentTask that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentTaskFindUniqueOrThrowArgs} args - Arguments to find a ShipmentTask
     * @example
     * // Get one ShipmentTask
     * const shipmentTask = await prisma.shipmentTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentTaskClient<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentTaskFindFirstArgs} args - Arguments to find a ShipmentTask
     * @example
     * // Get one ShipmentTask
     * const shipmentTask = await prisma.shipmentTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentTaskFindFirstArgs>(args?: SelectSubset<T, ShipmentTaskFindFirstArgs<ExtArgs>>): Prisma__ShipmentTaskClient<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentTaskFindFirstOrThrowArgs} args - Arguments to find a ShipmentTask
     * @example
     * // Get one ShipmentTask
     * const shipmentTask = await prisma.shipmentTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentTaskClient<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentTasks
     * const shipmentTasks = await prisma.shipmentTask.findMany()
     * 
     * // Get first 10 ShipmentTasks
     * const shipmentTasks = await prisma.shipmentTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentTaskWithIdOnly = await prisma.shipmentTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentTaskFindManyArgs>(args?: SelectSubset<T, ShipmentTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentTask.
     * @param {ShipmentTaskCreateArgs} args - Arguments to create a ShipmentTask.
     * @example
     * // Create one ShipmentTask
     * const ShipmentTask = await prisma.shipmentTask.create({
     *   data: {
     *     // ... data to create a ShipmentTask
     *   }
     * })
     * 
     */
    create<T extends ShipmentTaskCreateArgs>(args: SelectSubset<T, ShipmentTaskCreateArgs<ExtArgs>>): Prisma__ShipmentTaskClient<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentTasks.
     * @param {ShipmentTaskCreateManyArgs} args - Arguments to create many ShipmentTasks.
     * @example
     * // Create many ShipmentTasks
     * const shipmentTask = await prisma.shipmentTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentTaskCreateManyArgs>(args?: SelectSubset<T, ShipmentTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShipmentTasks and returns the data saved in the database.
     * @param {ShipmentTaskCreateManyAndReturnArgs} args - Arguments to create many ShipmentTasks.
     * @example
     * // Create many ShipmentTasks
     * const shipmentTask = await prisma.shipmentTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShipmentTasks and only return the `id`
     * const shipmentTaskWithIdOnly = await prisma.shipmentTask.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShipmentTask.
     * @param {ShipmentTaskDeleteArgs} args - Arguments to delete one ShipmentTask.
     * @example
     * // Delete one ShipmentTask
     * const ShipmentTask = await prisma.shipmentTask.delete({
     *   where: {
     *     // ... filter to delete one ShipmentTask
     *   }
     * })
     * 
     */
    delete<T extends ShipmentTaskDeleteArgs>(args: SelectSubset<T, ShipmentTaskDeleteArgs<ExtArgs>>): Prisma__ShipmentTaskClient<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentTask.
     * @param {ShipmentTaskUpdateArgs} args - Arguments to update one ShipmentTask.
     * @example
     * // Update one ShipmentTask
     * const shipmentTask = await prisma.shipmentTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentTaskUpdateArgs>(args: SelectSubset<T, ShipmentTaskUpdateArgs<ExtArgs>>): Prisma__ShipmentTaskClient<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentTasks.
     * @param {ShipmentTaskDeleteManyArgs} args - Arguments to filter ShipmentTasks to delete.
     * @example
     * // Delete a few ShipmentTasks
     * const { count } = await prisma.shipmentTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentTaskDeleteManyArgs>(args?: SelectSubset<T, ShipmentTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentTasks
     * const shipmentTask = await prisma.shipmentTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentTaskUpdateManyArgs>(args: SelectSubset<T, ShipmentTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentTasks and returns the data updated in the database.
     * @param {ShipmentTaskUpdateManyAndReturnArgs} args - Arguments to update many ShipmentTasks.
     * @example
     * // Update many ShipmentTasks
     * const shipmentTask = await prisma.shipmentTask.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShipmentTasks and only return the `id`
     * const shipmentTaskWithIdOnly = await prisma.shipmentTask.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShipmentTaskUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentTaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShipmentTask.
     * @param {ShipmentTaskUpsertArgs} args - Arguments to update or create a ShipmentTask.
     * @example
     * // Update or create a ShipmentTask
     * const shipmentTask = await prisma.shipmentTask.upsert({
     *   create: {
     *     // ... data to create a ShipmentTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentTask we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentTaskUpsertArgs>(args: SelectSubset<T, ShipmentTaskUpsertArgs<ExtArgs>>): Prisma__ShipmentTaskClient<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentTaskCountArgs} args - Arguments to filter ShipmentTasks to count.
     * @example
     * // Count the number of ShipmentTasks
     * const count = await prisma.shipmentTask.count({
     *   where: {
     *     // ... the filter for the ShipmentTasks we want to count
     *   }
     * })
    **/
    count<T extends ShipmentTaskCountArgs>(
      args?: Subset<T, ShipmentTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShipmentTaskAggregateArgs>(args: Subset<T, ShipmentTaskAggregateArgs>): Prisma.PrismaPromise<GetShipmentTaskAggregateType<T>>

    /**
     * Group by ShipmentTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentTaskGroupByArgs} args - Group by arguments.
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
      T extends ShipmentTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentTaskGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentTaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShipmentTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentTask model
   */
  readonly fields: ShipmentTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends ShipmentTask$productsArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentTask$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    labels<T extends ShipmentTask$labelsArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentTask$labelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ShipmentTask model
   */
  interface ShipmentTaskFieldRefs {
    readonly id: FieldRef<"ShipmentTask", 'String'>
    readonly group: FieldRef<"ShipmentTask", 'String'>
    readonly shippingDoc: FieldRef<"ShipmentTask", 'String'>
    readonly nomerTn: FieldRef<"ShipmentTask", 'String'>
    readonly country: FieldRef<"ShipmentTask", 'String'>
    readonly agent: FieldRef<"ShipmentTask", 'Int'>
    readonly contract: FieldRef<"ShipmentTask", 'String'>
    readonly count: FieldRef<"ShipmentTask", 'Int'>
    readonly operationDate: FieldRef<"ShipmentTask", 'DateTime'>
    readonly createdAt: FieldRef<"ShipmentTask", 'DateTime'>
    readonly updatedAt: FieldRef<"ShipmentTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentTask findUnique
   */
  export type ShipmentTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentTaskInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentTask to fetch.
     */
    where: ShipmentTaskWhereUniqueInput
  }

  /**
   * ShipmentTask findUniqueOrThrow
   */
  export type ShipmentTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentTaskInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentTask to fetch.
     */
    where: ShipmentTaskWhereUniqueInput
  }

  /**
   * ShipmentTask findFirst
   */
  export type ShipmentTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentTaskInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentTask to fetch.
     */
    where?: ShipmentTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentTasks to fetch.
     */
    orderBy?: ShipmentTaskOrderByWithRelationInput | ShipmentTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentTasks.
     */
    cursor?: ShipmentTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentTasks.
     */
    distinct?: ShipmentTaskScalarFieldEnum | ShipmentTaskScalarFieldEnum[]
  }

  /**
   * ShipmentTask findFirstOrThrow
   */
  export type ShipmentTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentTaskInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentTask to fetch.
     */
    where?: ShipmentTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentTasks to fetch.
     */
    orderBy?: ShipmentTaskOrderByWithRelationInput | ShipmentTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentTasks.
     */
    cursor?: ShipmentTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentTasks.
     */
    distinct?: ShipmentTaskScalarFieldEnum | ShipmentTaskScalarFieldEnum[]
  }

  /**
   * ShipmentTask findMany
   */
  export type ShipmentTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentTaskInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentTasks to fetch.
     */
    where?: ShipmentTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentTasks to fetch.
     */
    orderBy?: ShipmentTaskOrderByWithRelationInput | ShipmentTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentTasks.
     */
    cursor?: ShipmentTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentTasks.
     */
    skip?: number
    distinct?: ShipmentTaskScalarFieldEnum | ShipmentTaskScalarFieldEnum[]
  }

  /**
   * ShipmentTask create
   */
  export type ShipmentTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentTask.
     */
    data: XOR<ShipmentTaskCreateInput, ShipmentTaskUncheckedCreateInput>
  }

  /**
   * ShipmentTask createMany
   */
  export type ShipmentTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentTasks.
     */
    data: ShipmentTaskCreateManyInput | ShipmentTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentTask createManyAndReturn
   */
  export type ShipmentTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * The data used to create many ShipmentTasks.
     */
    data: ShipmentTaskCreateManyInput | ShipmentTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentTask update
   */
  export type ShipmentTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentTask.
     */
    data: XOR<ShipmentTaskUpdateInput, ShipmentTaskUncheckedUpdateInput>
    /**
     * Choose, which ShipmentTask to update.
     */
    where: ShipmentTaskWhereUniqueInput
  }

  /**
   * ShipmentTask updateMany
   */
  export type ShipmentTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentTasks.
     */
    data: XOR<ShipmentTaskUpdateManyMutationInput, ShipmentTaskUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentTasks to update
     */
    where?: ShipmentTaskWhereInput
    /**
     * Limit how many ShipmentTasks to update.
     */
    limit?: number
  }

  /**
   * ShipmentTask updateManyAndReturn
   */
  export type ShipmentTaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * The data used to update ShipmentTasks.
     */
    data: XOR<ShipmentTaskUpdateManyMutationInput, ShipmentTaskUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentTasks to update
     */
    where?: ShipmentTaskWhereInput
    /**
     * Limit how many ShipmentTasks to update.
     */
    limit?: number
  }

  /**
   * ShipmentTask upsert
   */
  export type ShipmentTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentTask to update in case it exists.
     */
    where: ShipmentTaskWhereUniqueInput
    /**
     * In case the ShipmentTask found by the `where` argument doesn't exist, create a new ShipmentTask with this data.
     */
    create: XOR<ShipmentTaskCreateInput, ShipmentTaskUncheckedCreateInput>
    /**
     * In case the ShipmentTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentTaskUpdateInput, ShipmentTaskUncheckedUpdateInput>
  }

  /**
   * ShipmentTask delete
   */
  export type ShipmentTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentTaskInclude<ExtArgs> | null
    /**
     * Filter which ShipmentTask to delete.
     */
    where: ShipmentTaskWhereUniqueInput
  }

  /**
   * ShipmentTask deleteMany
   */
  export type ShipmentTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentTasks to delete
     */
    where?: ShipmentTaskWhereInput
    /**
     * Limit how many ShipmentTasks to delete.
     */
    limit?: number
  }

  /**
   * ShipmentTask.products
   */
  export type ShipmentTask$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
    where?: ShipmentProductWhereInput
    orderBy?: ShipmentProductOrderByWithRelationInput | ShipmentProductOrderByWithRelationInput[]
    cursor?: ShipmentProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentProductScalarFieldEnum | ShipmentProductScalarFieldEnum[]
  }

  /**
   * ShipmentTask.labels
   */
  export type ShipmentTask$labelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
    where?: ShipmentLabelWhereInput
    orderBy?: ShipmentLabelOrderByWithRelationInput | ShipmentLabelOrderByWithRelationInput[]
    cursor?: ShipmentLabelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentLabelScalarFieldEnum | ShipmentLabelScalarFieldEnum[]
  }

  /**
   * ShipmentTask without action
   */
  export type ShipmentTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentTask
     */
    select?: ShipmentTaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentTask
     */
    omit?: ShipmentTaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentTaskInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentProduct
   */

  export type AggregateShipmentProduct = {
    _count: ShipmentProductCountAggregateOutputType | null
    _avg: ShipmentProductAvgAggregateOutputType | null
    _sum: ShipmentProductSumAggregateOutputType | null
    _min: ShipmentProductMinAggregateOutputType | null
    _max: ShipmentProductMaxAggregateOutputType | null
  }

  export type ShipmentProductAvgAggregateOutputType = {
    cost: number | null
    tax: number | null
  }

  export type ShipmentProductSumAggregateOutputType = {
    cost: number | null
    tax: number | null
  }

  export type ShipmentProductMinAggregateOutputType = {
    id: string | null
    gtin: string | null
    cost: number | null
    tax: number | null
    currency: string | null
    shipmentId: string | null
  }

  export type ShipmentProductMaxAggregateOutputType = {
    id: string | null
    gtin: string | null
    cost: number | null
    tax: number | null
    currency: string | null
    shipmentId: string | null
  }

  export type ShipmentProductCountAggregateOutputType = {
    id: number
    gtin: number
    cost: number
    tax: number
    currency: number
    shipmentId: number
    _all: number
  }


  export type ShipmentProductAvgAggregateInputType = {
    cost?: true
    tax?: true
  }

  export type ShipmentProductSumAggregateInputType = {
    cost?: true
    tax?: true
  }

  export type ShipmentProductMinAggregateInputType = {
    id?: true
    gtin?: true
    cost?: true
    tax?: true
    currency?: true
    shipmentId?: true
  }

  export type ShipmentProductMaxAggregateInputType = {
    id?: true
    gtin?: true
    cost?: true
    tax?: true
    currency?: true
    shipmentId?: true
  }

  export type ShipmentProductCountAggregateInputType = {
    id?: true
    gtin?: true
    cost?: true
    tax?: true
    currency?: true
    shipmentId?: true
    _all?: true
  }

  export type ShipmentProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentProduct to aggregate.
     */
    where?: ShipmentProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentProducts to fetch.
     */
    orderBy?: ShipmentProductOrderByWithRelationInput | ShipmentProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentProducts
    **/
    _count?: true | ShipmentProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentProductMaxAggregateInputType
  }

  export type GetShipmentProductAggregateType<T extends ShipmentProductAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentProduct[P]>
      : GetScalarType<T[P], AggregateShipmentProduct[P]>
  }




  export type ShipmentProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentProductWhereInput
    orderBy?: ShipmentProductOrderByWithAggregationInput | ShipmentProductOrderByWithAggregationInput[]
    by: ShipmentProductScalarFieldEnum[] | ShipmentProductScalarFieldEnum
    having?: ShipmentProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentProductCountAggregateInputType | true
    _avg?: ShipmentProductAvgAggregateInputType
    _sum?: ShipmentProductSumAggregateInputType
    _min?: ShipmentProductMinAggregateInputType
    _max?: ShipmentProductMaxAggregateInputType
  }

  export type ShipmentProductGroupByOutputType = {
    id: string
    gtin: string
    cost: number
    tax: number
    currency: string
    shipmentId: string
    _count: ShipmentProductCountAggregateOutputType | null
    _avg: ShipmentProductAvgAggregateOutputType | null
    _sum: ShipmentProductSumAggregateOutputType | null
    _min: ShipmentProductMinAggregateOutputType | null
    _max: ShipmentProductMaxAggregateOutputType | null
  }

  type GetShipmentProductGroupByPayload<T extends ShipmentProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentProductGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentProductGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gtin?: boolean
    cost?: boolean
    tax?: boolean
    currency?: boolean
    shipmentId?: boolean
    certificates?: boolean | ShipmentProduct$certificatesArgs<ExtArgs>
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
    _count?: boolean | ShipmentProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentProduct"]>

  export type ShipmentProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gtin?: boolean
    cost?: boolean
    tax?: boolean
    currency?: boolean
    shipmentId?: boolean
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentProduct"]>

  export type ShipmentProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gtin?: boolean
    cost?: boolean
    tax?: boolean
    currency?: boolean
    shipmentId?: boolean
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentProduct"]>

  export type ShipmentProductSelectScalar = {
    id?: boolean
    gtin?: boolean
    cost?: boolean
    tax?: boolean
    currency?: boolean
    shipmentId?: boolean
  }

  export type ShipmentProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gtin" | "cost" | "tax" | "currency" | "shipmentId", ExtArgs["result"]["shipmentProduct"]>
  export type ShipmentProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    certificates?: boolean | ShipmentProduct$certificatesArgs<ExtArgs>
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
    _count?: boolean | ShipmentProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
  }
  export type ShipmentProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
  }

  export type $ShipmentProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentProduct"
    objects: {
      certificates: Prisma.$CertificatePayload<ExtArgs>[]
      shipment: Prisma.$ShipmentTaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gtin: string
      cost: number
      tax: number
      currency: string
      shipmentId: string
    }, ExtArgs["result"]["shipmentProduct"]>
    composites: {}
  }

  type ShipmentProductGetPayload<S extends boolean | null | undefined | ShipmentProductDefaultArgs> = $Result.GetResult<Prisma.$ShipmentProductPayload, S>

  type ShipmentProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentProductCountAggregateInputType | true
    }

  export interface ShipmentProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentProduct'], meta: { name: 'ShipmentProduct' } }
    /**
     * Find zero or one ShipmentProduct that matches the filter.
     * @param {ShipmentProductFindUniqueArgs} args - Arguments to find a ShipmentProduct
     * @example
     * // Get one ShipmentProduct
     * const shipmentProduct = await prisma.shipmentProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentProductFindUniqueArgs>(args: SelectSubset<T, ShipmentProductFindUniqueArgs<ExtArgs>>): Prisma__ShipmentProductClient<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentProductFindUniqueOrThrowArgs} args - Arguments to find a ShipmentProduct
     * @example
     * // Get one ShipmentProduct
     * const shipmentProduct = await prisma.shipmentProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentProductClient<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProductFindFirstArgs} args - Arguments to find a ShipmentProduct
     * @example
     * // Get one ShipmentProduct
     * const shipmentProduct = await prisma.shipmentProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentProductFindFirstArgs>(args?: SelectSubset<T, ShipmentProductFindFirstArgs<ExtArgs>>): Prisma__ShipmentProductClient<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProductFindFirstOrThrowArgs} args - Arguments to find a ShipmentProduct
     * @example
     * // Get one ShipmentProduct
     * const shipmentProduct = await prisma.shipmentProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentProductClient<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentProducts
     * const shipmentProducts = await prisma.shipmentProduct.findMany()
     * 
     * // Get first 10 ShipmentProducts
     * const shipmentProducts = await prisma.shipmentProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentProductWithIdOnly = await prisma.shipmentProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentProductFindManyArgs>(args?: SelectSubset<T, ShipmentProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentProduct.
     * @param {ShipmentProductCreateArgs} args - Arguments to create a ShipmentProduct.
     * @example
     * // Create one ShipmentProduct
     * const ShipmentProduct = await prisma.shipmentProduct.create({
     *   data: {
     *     // ... data to create a ShipmentProduct
     *   }
     * })
     * 
     */
    create<T extends ShipmentProductCreateArgs>(args: SelectSubset<T, ShipmentProductCreateArgs<ExtArgs>>): Prisma__ShipmentProductClient<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentProducts.
     * @param {ShipmentProductCreateManyArgs} args - Arguments to create many ShipmentProducts.
     * @example
     * // Create many ShipmentProducts
     * const shipmentProduct = await prisma.shipmentProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentProductCreateManyArgs>(args?: SelectSubset<T, ShipmentProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShipmentProducts and returns the data saved in the database.
     * @param {ShipmentProductCreateManyAndReturnArgs} args - Arguments to create many ShipmentProducts.
     * @example
     * // Create many ShipmentProducts
     * const shipmentProduct = await prisma.shipmentProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShipmentProducts and only return the `id`
     * const shipmentProductWithIdOnly = await prisma.shipmentProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShipmentProduct.
     * @param {ShipmentProductDeleteArgs} args - Arguments to delete one ShipmentProduct.
     * @example
     * // Delete one ShipmentProduct
     * const ShipmentProduct = await prisma.shipmentProduct.delete({
     *   where: {
     *     // ... filter to delete one ShipmentProduct
     *   }
     * })
     * 
     */
    delete<T extends ShipmentProductDeleteArgs>(args: SelectSubset<T, ShipmentProductDeleteArgs<ExtArgs>>): Prisma__ShipmentProductClient<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentProduct.
     * @param {ShipmentProductUpdateArgs} args - Arguments to update one ShipmentProduct.
     * @example
     * // Update one ShipmentProduct
     * const shipmentProduct = await prisma.shipmentProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentProductUpdateArgs>(args: SelectSubset<T, ShipmentProductUpdateArgs<ExtArgs>>): Prisma__ShipmentProductClient<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentProducts.
     * @param {ShipmentProductDeleteManyArgs} args - Arguments to filter ShipmentProducts to delete.
     * @example
     * // Delete a few ShipmentProducts
     * const { count } = await prisma.shipmentProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentProductDeleteManyArgs>(args?: SelectSubset<T, ShipmentProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentProducts
     * const shipmentProduct = await prisma.shipmentProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentProductUpdateManyArgs>(args: SelectSubset<T, ShipmentProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentProducts and returns the data updated in the database.
     * @param {ShipmentProductUpdateManyAndReturnArgs} args - Arguments to update many ShipmentProducts.
     * @example
     * // Update many ShipmentProducts
     * const shipmentProduct = await prisma.shipmentProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShipmentProducts and only return the `id`
     * const shipmentProductWithIdOnly = await prisma.shipmentProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShipmentProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShipmentProduct.
     * @param {ShipmentProductUpsertArgs} args - Arguments to update or create a ShipmentProduct.
     * @example
     * // Update or create a ShipmentProduct
     * const shipmentProduct = await prisma.shipmentProduct.upsert({
     *   create: {
     *     // ... data to create a ShipmentProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentProduct we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentProductUpsertArgs>(args: SelectSubset<T, ShipmentProductUpsertArgs<ExtArgs>>): Prisma__ShipmentProductClient<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProductCountArgs} args - Arguments to filter ShipmentProducts to count.
     * @example
     * // Count the number of ShipmentProducts
     * const count = await prisma.shipmentProduct.count({
     *   where: {
     *     // ... the filter for the ShipmentProducts we want to count
     *   }
     * })
    **/
    count<T extends ShipmentProductCountArgs>(
      args?: Subset<T, ShipmentProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShipmentProductAggregateArgs>(args: Subset<T, ShipmentProductAggregateArgs>): Prisma.PrismaPromise<GetShipmentProductAggregateType<T>>

    /**
     * Group by ShipmentProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentProductGroupByArgs} args - Group by arguments.
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
      T extends ShipmentProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentProductGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShipmentProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentProduct model
   */
  readonly fields: ShipmentProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    certificates<T extends ShipmentProduct$certificatesArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentProduct$certificatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipment<T extends ShipmentTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentTaskDefaultArgs<ExtArgs>>): Prisma__ShipmentTaskClient<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShipmentProduct model
   */
  interface ShipmentProductFieldRefs {
    readonly id: FieldRef<"ShipmentProduct", 'String'>
    readonly gtin: FieldRef<"ShipmentProduct", 'String'>
    readonly cost: FieldRef<"ShipmentProduct", 'Float'>
    readonly tax: FieldRef<"ShipmentProduct", 'Float'>
    readonly currency: FieldRef<"ShipmentProduct", 'String'>
    readonly shipmentId: FieldRef<"ShipmentProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentProduct findUnique
   */
  export type ShipmentProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentProduct to fetch.
     */
    where: ShipmentProductWhereUniqueInput
  }

  /**
   * ShipmentProduct findUniqueOrThrow
   */
  export type ShipmentProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentProduct to fetch.
     */
    where: ShipmentProductWhereUniqueInput
  }

  /**
   * ShipmentProduct findFirst
   */
  export type ShipmentProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentProduct to fetch.
     */
    where?: ShipmentProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentProducts to fetch.
     */
    orderBy?: ShipmentProductOrderByWithRelationInput | ShipmentProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentProducts.
     */
    cursor?: ShipmentProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentProducts.
     */
    distinct?: ShipmentProductScalarFieldEnum | ShipmentProductScalarFieldEnum[]
  }

  /**
   * ShipmentProduct findFirstOrThrow
   */
  export type ShipmentProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentProduct to fetch.
     */
    where?: ShipmentProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentProducts to fetch.
     */
    orderBy?: ShipmentProductOrderByWithRelationInput | ShipmentProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentProducts.
     */
    cursor?: ShipmentProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentProducts.
     */
    distinct?: ShipmentProductScalarFieldEnum | ShipmentProductScalarFieldEnum[]
  }

  /**
   * ShipmentProduct findMany
   */
  export type ShipmentProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentProducts to fetch.
     */
    where?: ShipmentProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentProducts to fetch.
     */
    orderBy?: ShipmentProductOrderByWithRelationInput | ShipmentProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentProducts.
     */
    cursor?: ShipmentProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentProducts.
     */
    skip?: number
    distinct?: ShipmentProductScalarFieldEnum | ShipmentProductScalarFieldEnum[]
  }

  /**
   * ShipmentProduct create
   */
  export type ShipmentProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentProduct.
     */
    data: XOR<ShipmentProductCreateInput, ShipmentProductUncheckedCreateInput>
  }

  /**
   * ShipmentProduct createMany
   */
  export type ShipmentProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentProducts.
     */
    data: ShipmentProductCreateManyInput | ShipmentProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentProduct createManyAndReturn
   */
  export type ShipmentProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * The data used to create many ShipmentProducts.
     */
    data: ShipmentProductCreateManyInput | ShipmentProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentProduct update
   */
  export type ShipmentProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentProduct.
     */
    data: XOR<ShipmentProductUpdateInput, ShipmentProductUncheckedUpdateInput>
    /**
     * Choose, which ShipmentProduct to update.
     */
    where: ShipmentProductWhereUniqueInput
  }

  /**
   * ShipmentProduct updateMany
   */
  export type ShipmentProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentProducts.
     */
    data: XOR<ShipmentProductUpdateManyMutationInput, ShipmentProductUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentProducts to update
     */
    where?: ShipmentProductWhereInput
    /**
     * Limit how many ShipmentProducts to update.
     */
    limit?: number
  }

  /**
   * ShipmentProduct updateManyAndReturn
   */
  export type ShipmentProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * The data used to update ShipmentProducts.
     */
    data: XOR<ShipmentProductUpdateManyMutationInput, ShipmentProductUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentProducts to update
     */
    where?: ShipmentProductWhereInput
    /**
     * Limit how many ShipmentProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentProduct upsert
   */
  export type ShipmentProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentProduct to update in case it exists.
     */
    where: ShipmentProductWhereUniqueInput
    /**
     * In case the ShipmentProduct found by the `where` argument doesn't exist, create a new ShipmentProduct with this data.
     */
    create: XOR<ShipmentProductCreateInput, ShipmentProductUncheckedCreateInput>
    /**
     * In case the ShipmentProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentProductUpdateInput, ShipmentProductUncheckedUpdateInput>
  }

  /**
   * ShipmentProduct delete
   */
  export type ShipmentProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
    /**
     * Filter which ShipmentProduct to delete.
     */
    where: ShipmentProductWhereUniqueInput
  }

  /**
   * ShipmentProduct deleteMany
   */
  export type ShipmentProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentProducts to delete
     */
    where?: ShipmentProductWhereInput
    /**
     * Limit how many ShipmentProducts to delete.
     */
    limit?: number
  }

  /**
   * ShipmentProduct.certificates
   */
  export type ShipmentProduct$certificatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    cursor?: CertificateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * ShipmentProduct without action
   */
  export type ShipmentProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentProduct
     */
    select?: ShipmentProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentProduct
     */
    omit?: ShipmentProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentProductInclude<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    type: string | null
    number: string | null
    certificateDate: Date | null
    productId: string | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    type: string | null
    number: string | null
    certificateDate: Date | null
    productId: string | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    type: number
    number: number
    certificateDate: number
    productId: number
    _all: number
  }


  export type CertificateMinAggregateInputType = {
    id?: true
    type?: true
    number?: true
    certificateDate?: true
    productId?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    type?: true
    number?: true
    certificateDate?: true
    productId?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    type?: true
    number?: true
    certificateDate?: true
    productId?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    type: string
    number: string
    certificateDate: Date
    productId: string
    _count: CertificateCountAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    number?: boolean
    certificateDate?: boolean
    productId?: boolean
    product?: boolean | ShipmentProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    number?: boolean
    certificateDate?: boolean
    productId?: boolean
    product?: boolean | ShipmentProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    number?: boolean
    certificateDate?: boolean
    productId?: boolean
    product?: boolean | ShipmentProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    type?: boolean
    number?: boolean
    certificateDate?: boolean
    productId?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "number" | "certificateDate" | "productId", ExtArgs["result"]["certificate"]>
  export type CertificateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ShipmentProductDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ShipmentProductDefaultArgs<ExtArgs>
  }
  export type CertificateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ShipmentProductDefaultArgs<ExtArgs>
  }

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {
      product: Prisma.$ShipmentProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      number: string
      certificateDate: Date
      productId: string
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
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
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
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
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ShipmentProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentProductDefaultArgs<ExtArgs>>): Prisma__ShipmentProductClient<$Result.GetResult<Prisma.$ShipmentProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly type: FieldRef<"Certificate", 'String'>
    readonly number: FieldRef<"Certificate", 'String'>
    readonly certificateDate: FieldRef<"Certificate", 'DateTime'>
    readonly productId: FieldRef<"Certificate", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CertificateInclude<ExtArgs> | null
  }


  /**
   * Model ShipmentLabel
   */

  export type AggregateShipmentLabel = {
    _count: ShipmentLabelCountAggregateOutputType | null
    _min: ShipmentLabelMinAggregateOutputType | null
    _max: ShipmentLabelMaxAggregateOutputType | null
  }

  export type ShipmentLabelMinAggregateOutputType = {
    id: string | null
    code: string | null
    shipmentId: string | null
  }

  export type ShipmentLabelMaxAggregateOutputType = {
    id: string | null
    code: string | null
    shipmentId: string | null
  }

  export type ShipmentLabelCountAggregateOutputType = {
    id: number
    code: number
    shipmentId: number
    _all: number
  }


  export type ShipmentLabelMinAggregateInputType = {
    id?: true
    code?: true
    shipmentId?: true
  }

  export type ShipmentLabelMaxAggregateInputType = {
    id?: true
    code?: true
    shipmentId?: true
  }

  export type ShipmentLabelCountAggregateInputType = {
    id?: true
    code?: true
    shipmentId?: true
    _all?: true
  }

  export type ShipmentLabelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentLabel to aggregate.
     */
    where?: ShipmentLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentLabels to fetch.
     */
    orderBy?: ShipmentLabelOrderByWithRelationInput | ShipmentLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShipmentLabels
    **/
    _count?: true | ShipmentLabelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentLabelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentLabelMaxAggregateInputType
  }

  export type GetShipmentLabelAggregateType<T extends ShipmentLabelAggregateArgs> = {
        [P in keyof T & keyof AggregateShipmentLabel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipmentLabel[P]>
      : GetScalarType<T[P], AggregateShipmentLabel[P]>
  }




  export type ShipmentLabelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentLabelWhereInput
    orderBy?: ShipmentLabelOrderByWithAggregationInput | ShipmentLabelOrderByWithAggregationInput[]
    by: ShipmentLabelScalarFieldEnum[] | ShipmentLabelScalarFieldEnum
    having?: ShipmentLabelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentLabelCountAggregateInputType | true
    _min?: ShipmentLabelMinAggregateInputType
    _max?: ShipmentLabelMaxAggregateInputType
  }

  export type ShipmentLabelGroupByOutputType = {
    id: string
    code: string
    shipmentId: string
    _count: ShipmentLabelCountAggregateOutputType | null
    _min: ShipmentLabelMinAggregateOutputType | null
    _max: ShipmentLabelMaxAggregateOutputType | null
  }

  type GetShipmentLabelGroupByPayload<T extends ShipmentLabelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentLabelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentLabelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentLabelGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentLabelGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentLabelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    shipmentId?: boolean
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentLabel"]>

  export type ShipmentLabelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    shipmentId?: boolean
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentLabel"]>

  export type ShipmentLabelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    shipmentId?: boolean
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipmentLabel"]>

  export type ShipmentLabelSelectScalar = {
    id?: boolean
    code?: boolean
    shipmentId?: boolean
  }

  export type ShipmentLabelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "shipmentId", ExtArgs["result"]["shipmentLabel"]>
  export type ShipmentLabelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
  }
  export type ShipmentLabelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
  }
  export type ShipmentLabelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentTaskDefaultArgs<ExtArgs>
  }

  export type $ShipmentLabelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShipmentLabel"
    objects: {
      shipment: Prisma.$ShipmentTaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      shipmentId: string
    }, ExtArgs["result"]["shipmentLabel"]>
    composites: {}
  }

  type ShipmentLabelGetPayload<S extends boolean | null | undefined | ShipmentLabelDefaultArgs> = $Result.GetResult<Prisma.$ShipmentLabelPayload, S>

  type ShipmentLabelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentLabelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentLabelCountAggregateInputType | true
    }

  export interface ShipmentLabelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShipmentLabel'], meta: { name: 'ShipmentLabel' } }
    /**
     * Find zero or one ShipmentLabel that matches the filter.
     * @param {ShipmentLabelFindUniqueArgs} args - Arguments to find a ShipmentLabel
     * @example
     * // Get one ShipmentLabel
     * const shipmentLabel = await prisma.shipmentLabel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentLabelFindUniqueArgs>(args: SelectSubset<T, ShipmentLabelFindUniqueArgs<ExtArgs>>): Prisma__ShipmentLabelClient<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShipmentLabel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentLabelFindUniqueOrThrowArgs} args - Arguments to find a ShipmentLabel
     * @example
     * // Get one ShipmentLabel
     * const shipmentLabel = await prisma.shipmentLabel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentLabelFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentLabelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentLabelClient<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentLabel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentLabelFindFirstArgs} args - Arguments to find a ShipmentLabel
     * @example
     * // Get one ShipmentLabel
     * const shipmentLabel = await prisma.shipmentLabel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentLabelFindFirstArgs>(args?: SelectSubset<T, ShipmentLabelFindFirstArgs<ExtArgs>>): Prisma__ShipmentLabelClient<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShipmentLabel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentLabelFindFirstOrThrowArgs} args - Arguments to find a ShipmentLabel
     * @example
     * // Get one ShipmentLabel
     * const shipmentLabel = await prisma.shipmentLabel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentLabelFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentLabelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentLabelClient<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShipmentLabels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentLabelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShipmentLabels
     * const shipmentLabels = await prisma.shipmentLabel.findMany()
     * 
     * // Get first 10 ShipmentLabels
     * const shipmentLabels = await prisma.shipmentLabel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentLabelWithIdOnly = await prisma.shipmentLabel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentLabelFindManyArgs>(args?: SelectSubset<T, ShipmentLabelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShipmentLabel.
     * @param {ShipmentLabelCreateArgs} args - Arguments to create a ShipmentLabel.
     * @example
     * // Create one ShipmentLabel
     * const ShipmentLabel = await prisma.shipmentLabel.create({
     *   data: {
     *     // ... data to create a ShipmentLabel
     *   }
     * })
     * 
     */
    create<T extends ShipmentLabelCreateArgs>(args: SelectSubset<T, ShipmentLabelCreateArgs<ExtArgs>>): Prisma__ShipmentLabelClient<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShipmentLabels.
     * @param {ShipmentLabelCreateManyArgs} args - Arguments to create many ShipmentLabels.
     * @example
     * // Create many ShipmentLabels
     * const shipmentLabel = await prisma.shipmentLabel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentLabelCreateManyArgs>(args?: SelectSubset<T, ShipmentLabelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ShipmentLabels and returns the data saved in the database.
     * @param {ShipmentLabelCreateManyAndReturnArgs} args - Arguments to create many ShipmentLabels.
     * @example
     * // Create many ShipmentLabels
     * const shipmentLabel = await prisma.shipmentLabel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ShipmentLabels and only return the `id`
     * const shipmentLabelWithIdOnly = await prisma.shipmentLabel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentLabelCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentLabelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ShipmentLabel.
     * @param {ShipmentLabelDeleteArgs} args - Arguments to delete one ShipmentLabel.
     * @example
     * // Delete one ShipmentLabel
     * const ShipmentLabel = await prisma.shipmentLabel.delete({
     *   where: {
     *     // ... filter to delete one ShipmentLabel
     *   }
     * })
     * 
     */
    delete<T extends ShipmentLabelDeleteArgs>(args: SelectSubset<T, ShipmentLabelDeleteArgs<ExtArgs>>): Prisma__ShipmentLabelClient<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShipmentLabel.
     * @param {ShipmentLabelUpdateArgs} args - Arguments to update one ShipmentLabel.
     * @example
     * // Update one ShipmentLabel
     * const shipmentLabel = await prisma.shipmentLabel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentLabelUpdateArgs>(args: SelectSubset<T, ShipmentLabelUpdateArgs<ExtArgs>>): Prisma__ShipmentLabelClient<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShipmentLabels.
     * @param {ShipmentLabelDeleteManyArgs} args - Arguments to filter ShipmentLabels to delete.
     * @example
     * // Delete a few ShipmentLabels
     * const { count } = await prisma.shipmentLabel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentLabelDeleteManyArgs>(args?: SelectSubset<T, ShipmentLabelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentLabelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShipmentLabels
     * const shipmentLabel = await prisma.shipmentLabel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentLabelUpdateManyArgs>(args: SelectSubset<T, ShipmentLabelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShipmentLabels and returns the data updated in the database.
     * @param {ShipmentLabelUpdateManyAndReturnArgs} args - Arguments to update many ShipmentLabels.
     * @example
     * // Update many ShipmentLabels
     * const shipmentLabel = await prisma.shipmentLabel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ShipmentLabels and only return the `id`
     * const shipmentLabelWithIdOnly = await prisma.shipmentLabel.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShipmentLabelUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentLabelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ShipmentLabel.
     * @param {ShipmentLabelUpsertArgs} args - Arguments to update or create a ShipmentLabel.
     * @example
     * // Update or create a ShipmentLabel
     * const shipmentLabel = await prisma.shipmentLabel.upsert({
     *   create: {
     *     // ... data to create a ShipmentLabel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShipmentLabel we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentLabelUpsertArgs>(args: SelectSubset<T, ShipmentLabelUpsertArgs<ExtArgs>>): Prisma__ShipmentLabelClient<$Result.GetResult<Prisma.$ShipmentLabelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShipmentLabels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentLabelCountArgs} args - Arguments to filter ShipmentLabels to count.
     * @example
     * // Count the number of ShipmentLabels
     * const count = await prisma.shipmentLabel.count({
     *   where: {
     *     // ... the filter for the ShipmentLabels we want to count
     *   }
     * })
    **/
    count<T extends ShipmentLabelCountArgs>(
      args?: Subset<T, ShipmentLabelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentLabelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShipmentLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentLabelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShipmentLabelAggregateArgs>(args: Subset<T, ShipmentLabelAggregateArgs>): Prisma.PrismaPromise<GetShipmentLabelAggregateType<T>>

    /**
     * Group by ShipmentLabel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentLabelGroupByArgs} args - Group by arguments.
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
      T extends ShipmentLabelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentLabelGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentLabelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShipmentLabelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentLabelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShipmentLabel model
   */
  readonly fields: ShipmentLabelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShipmentLabel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentLabelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentTaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentTaskDefaultArgs<ExtArgs>>): Prisma__ShipmentTaskClient<$Result.GetResult<Prisma.$ShipmentTaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ShipmentLabel model
   */
  interface ShipmentLabelFieldRefs {
    readonly id: FieldRef<"ShipmentLabel", 'String'>
    readonly code: FieldRef<"ShipmentLabel", 'String'>
    readonly shipmentId: FieldRef<"ShipmentLabel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShipmentLabel findUnique
   */
  export type ShipmentLabelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentLabel to fetch.
     */
    where: ShipmentLabelWhereUniqueInput
  }

  /**
   * ShipmentLabel findUniqueOrThrow
   */
  export type ShipmentLabelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentLabel to fetch.
     */
    where: ShipmentLabelWhereUniqueInput
  }

  /**
   * ShipmentLabel findFirst
   */
  export type ShipmentLabelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentLabel to fetch.
     */
    where?: ShipmentLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentLabels to fetch.
     */
    orderBy?: ShipmentLabelOrderByWithRelationInput | ShipmentLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentLabels.
     */
    cursor?: ShipmentLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentLabels.
     */
    distinct?: ShipmentLabelScalarFieldEnum | ShipmentLabelScalarFieldEnum[]
  }

  /**
   * ShipmentLabel findFirstOrThrow
   */
  export type ShipmentLabelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentLabel to fetch.
     */
    where?: ShipmentLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentLabels to fetch.
     */
    orderBy?: ShipmentLabelOrderByWithRelationInput | ShipmentLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShipmentLabels.
     */
    cursor?: ShipmentLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentLabels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShipmentLabels.
     */
    distinct?: ShipmentLabelScalarFieldEnum | ShipmentLabelScalarFieldEnum[]
  }

  /**
   * ShipmentLabel findMany
   */
  export type ShipmentLabelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
    /**
     * Filter, which ShipmentLabels to fetch.
     */
    where?: ShipmentLabelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShipmentLabels to fetch.
     */
    orderBy?: ShipmentLabelOrderByWithRelationInput | ShipmentLabelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShipmentLabels.
     */
    cursor?: ShipmentLabelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShipmentLabels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShipmentLabels.
     */
    skip?: number
    distinct?: ShipmentLabelScalarFieldEnum | ShipmentLabelScalarFieldEnum[]
  }

  /**
   * ShipmentLabel create
   */
  export type ShipmentLabelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
    /**
     * The data needed to create a ShipmentLabel.
     */
    data: XOR<ShipmentLabelCreateInput, ShipmentLabelUncheckedCreateInput>
  }

  /**
   * ShipmentLabel createMany
   */
  export type ShipmentLabelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShipmentLabels.
     */
    data: ShipmentLabelCreateManyInput | ShipmentLabelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShipmentLabel createManyAndReturn
   */
  export type ShipmentLabelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * The data used to create many ShipmentLabels.
     */
    data: ShipmentLabelCreateManyInput | ShipmentLabelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentLabel update
   */
  export type ShipmentLabelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
    /**
     * The data needed to update a ShipmentLabel.
     */
    data: XOR<ShipmentLabelUpdateInput, ShipmentLabelUncheckedUpdateInput>
    /**
     * Choose, which ShipmentLabel to update.
     */
    where: ShipmentLabelWhereUniqueInput
  }

  /**
   * ShipmentLabel updateMany
   */
  export type ShipmentLabelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShipmentLabels.
     */
    data: XOR<ShipmentLabelUpdateManyMutationInput, ShipmentLabelUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentLabels to update
     */
    where?: ShipmentLabelWhereInput
    /**
     * Limit how many ShipmentLabels to update.
     */
    limit?: number
  }

  /**
   * ShipmentLabel updateManyAndReturn
   */
  export type ShipmentLabelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * The data used to update ShipmentLabels.
     */
    data: XOR<ShipmentLabelUpdateManyMutationInput, ShipmentLabelUncheckedUpdateManyInput>
    /**
     * Filter which ShipmentLabels to update
     */
    where?: ShipmentLabelWhereInput
    /**
     * Limit how many ShipmentLabels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ShipmentLabel upsert
   */
  export type ShipmentLabelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
    /**
     * The filter to search for the ShipmentLabel to update in case it exists.
     */
    where: ShipmentLabelWhereUniqueInput
    /**
     * In case the ShipmentLabel found by the `where` argument doesn't exist, create a new ShipmentLabel with this data.
     */
    create: XOR<ShipmentLabelCreateInput, ShipmentLabelUncheckedCreateInput>
    /**
     * In case the ShipmentLabel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentLabelUpdateInput, ShipmentLabelUncheckedUpdateInput>
  }

  /**
   * ShipmentLabel delete
   */
  export type ShipmentLabelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
    /**
     * Filter which ShipmentLabel to delete.
     */
    where: ShipmentLabelWhereUniqueInput
  }

  /**
   * ShipmentLabel deleteMany
   */
  export type ShipmentLabelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShipmentLabels to delete
     */
    where?: ShipmentLabelWhereInput
    /**
     * Limit how many ShipmentLabels to delete.
     */
    limit?: number
  }

  /**
   * ShipmentLabel without action
   */
  export type ShipmentLabelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentLabel
     */
    select?: ShipmentLabelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShipmentLabel
     */
    omit?: ShipmentLabelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentLabelInclude<ExtArgs> | null
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


  export const ReportsScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    gtin: 'gtin',
    manufactureDate: 'manufactureDate',
    bbd: 'bbd',
    batch: 'batch',
    name: 'name',
    description: 'description',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReportsScalarFieldEnum = (typeof ReportsScalarFieldEnum)[keyof typeof ReportsScalarFieldEnum]


  export const CodesScalarFieldEnum: {
    id: 'id',
    code: 'code',
    gtin: 'gtin',
    boxNumber: 'boxNumber',
    boxLabel: 'boxLabel',
    palletNumber: 'palletNumber',
    palletLabel: 'palletLabel',
    status: 'status',
    reportId: 'reportId'
  };

  export type CodesScalarFieldEnum = (typeof CodesScalarFieldEnum)[keyof typeof CodesScalarFieldEnum]


  export const ShipmentTaskScalarFieldEnum: {
    id: 'id',
    group: 'group',
    shippingDoc: 'shippingDoc',
    nomerTn: 'nomerTn',
    country: 'country',
    agent: 'agent',
    contract: 'contract',
    count: 'count',
    operationDate: 'operationDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShipmentTaskScalarFieldEnum = (typeof ShipmentTaskScalarFieldEnum)[keyof typeof ShipmentTaskScalarFieldEnum]


  export const ShipmentProductScalarFieldEnum: {
    id: 'id',
    gtin: 'gtin',
    cost: 'cost',
    tax: 'tax',
    currency: 'currency',
    shipmentId: 'shipmentId'
  };

  export type ShipmentProductScalarFieldEnum = (typeof ShipmentProductScalarFieldEnum)[keyof typeof ShipmentProductScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    type: 'type',
    number: 'number',
    certificateDate: 'certificateDate',
    productId: 'productId'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const ShipmentLabelScalarFieldEnum: {
    id: 'id',
    code: 'code',
    shipmentId: 'shipmentId'
  };

  export type ShipmentLabelScalarFieldEnum = (typeof ShipmentLabelScalarFieldEnum)[keyof typeof ShipmentLabelScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CodeStatus'
   */
  export type EnumCodeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CodeStatus'>
    


  /**
   * Reference to a field of type 'CodeStatus[]'
   */
  export type ListEnumCodeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CodeStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ReportsWhereInput = {
    AND?: ReportsWhereInput | ReportsWhereInput[]
    OR?: ReportsWhereInput[]
    NOT?: ReportsWhereInput | ReportsWhereInput[]
    id?: StringFilter<"Reports"> | string
    startDate?: DateTimeFilter<"Reports"> | Date | string
    endDate?: DateTimeFilter<"Reports"> | Date | string
    gtin?: StringFilter<"Reports"> | string
    manufactureDate?: StringFilter<"Reports"> | string
    bbd?: StringFilter<"Reports"> | string
    batch?: StringFilter<"Reports"> | string
    name?: StringFilter<"Reports"> | string
    description?: StringFilter<"Reports"> | string
    status?: EnumReportStatusFilter<"Reports"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"Reports"> | Date | string
    updatedAt?: DateTimeFilter<"Reports"> | Date | string
    codes?: CodesListRelationFilter
  }

  export type ReportsOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    gtin?: SortOrder
    manufactureDate?: SortOrder
    bbd?: SortOrder
    batch?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    codes?: CodesOrderByRelationAggregateInput
  }

  export type ReportsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportsWhereInput | ReportsWhereInput[]
    OR?: ReportsWhereInput[]
    NOT?: ReportsWhereInput | ReportsWhereInput[]
    startDate?: DateTimeFilter<"Reports"> | Date | string
    endDate?: DateTimeFilter<"Reports"> | Date | string
    gtin?: StringFilter<"Reports"> | string
    manufactureDate?: StringFilter<"Reports"> | string
    bbd?: StringFilter<"Reports"> | string
    batch?: StringFilter<"Reports"> | string
    name?: StringFilter<"Reports"> | string
    description?: StringFilter<"Reports"> | string
    status?: EnumReportStatusFilter<"Reports"> | $Enums.ReportStatus
    createdAt?: DateTimeFilter<"Reports"> | Date | string
    updatedAt?: DateTimeFilter<"Reports"> | Date | string
    codes?: CodesListRelationFilter
  }, "id">

  export type ReportsOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    gtin?: SortOrder
    manufactureDate?: SortOrder
    bbd?: SortOrder
    batch?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReportsCountOrderByAggregateInput
    _max?: ReportsMaxOrderByAggregateInput
    _min?: ReportsMinOrderByAggregateInput
  }

  export type ReportsScalarWhereWithAggregatesInput = {
    AND?: ReportsScalarWhereWithAggregatesInput | ReportsScalarWhereWithAggregatesInput[]
    OR?: ReportsScalarWhereWithAggregatesInput[]
    NOT?: ReportsScalarWhereWithAggregatesInput | ReportsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reports"> | string
    startDate?: DateTimeWithAggregatesFilter<"Reports"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Reports"> | Date | string
    gtin?: StringWithAggregatesFilter<"Reports"> | string
    manufactureDate?: StringWithAggregatesFilter<"Reports"> | string
    bbd?: StringWithAggregatesFilter<"Reports"> | string
    batch?: StringWithAggregatesFilter<"Reports"> | string
    name?: StringWithAggregatesFilter<"Reports"> | string
    description?: StringWithAggregatesFilter<"Reports"> | string
    status?: EnumReportStatusWithAggregatesFilter<"Reports"> | $Enums.ReportStatus
    createdAt?: DateTimeWithAggregatesFilter<"Reports"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reports"> | Date | string
  }

  export type CodesWhereInput = {
    AND?: CodesWhereInput | CodesWhereInput[]
    OR?: CodesWhereInput[]
    NOT?: CodesWhereInput | CodesWhereInput[]
    id?: StringFilter<"Codes"> | string
    code?: StringFilter<"Codes"> | string
    gtin?: StringFilter<"Codes"> | string
    boxNumber?: IntNullableFilter<"Codes"> | number | null
    boxLabel?: StringNullableFilter<"Codes"> | string | null
    palletNumber?: IntNullableFilter<"Codes"> | number | null
    palletLabel?: StringNullableFilter<"Codes"> | string | null
    status?: EnumCodeStatusFilter<"Codes"> | $Enums.CodeStatus
    reportId?: StringFilter<"Codes"> | string
    report?: XOR<ReportsScalarRelationFilter, ReportsWhereInput>
  }

  export type CodesOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    gtin?: SortOrder
    boxNumber?: SortOrderInput | SortOrder
    boxLabel?: SortOrderInput | SortOrder
    palletNumber?: SortOrderInput | SortOrder
    palletLabel?: SortOrderInput | SortOrder
    status?: SortOrder
    reportId?: SortOrder
    report?: ReportsOrderByWithRelationInput
  }

  export type CodesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CodesWhereInput | CodesWhereInput[]
    OR?: CodesWhereInput[]
    NOT?: CodesWhereInput | CodesWhereInput[]
    gtin?: StringFilter<"Codes"> | string
    boxNumber?: IntNullableFilter<"Codes"> | number | null
    boxLabel?: StringNullableFilter<"Codes"> | string | null
    palletNumber?: IntNullableFilter<"Codes"> | number | null
    palletLabel?: StringNullableFilter<"Codes"> | string | null
    status?: EnumCodeStatusFilter<"Codes"> | $Enums.CodeStatus
    reportId?: StringFilter<"Codes"> | string
    report?: XOR<ReportsScalarRelationFilter, ReportsWhereInput>
  }, "id" | "code">

  export type CodesOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    gtin?: SortOrder
    boxNumber?: SortOrderInput | SortOrder
    boxLabel?: SortOrderInput | SortOrder
    palletNumber?: SortOrderInput | SortOrder
    palletLabel?: SortOrderInput | SortOrder
    status?: SortOrder
    reportId?: SortOrder
    _count?: CodesCountOrderByAggregateInput
    _avg?: CodesAvgOrderByAggregateInput
    _max?: CodesMaxOrderByAggregateInput
    _min?: CodesMinOrderByAggregateInput
    _sum?: CodesSumOrderByAggregateInput
  }

  export type CodesScalarWhereWithAggregatesInput = {
    AND?: CodesScalarWhereWithAggregatesInput | CodesScalarWhereWithAggregatesInput[]
    OR?: CodesScalarWhereWithAggregatesInput[]
    NOT?: CodesScalarWhereWithAggregatesInput | CodesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Codes"> | string
    code?: StringWithAggregatesFilter<"Codes"> | string
    gtin?: StringWithAggregatesFilter<"Codes"> | string
    boxNumber?: IntNullableWithAggregatesFilter<"Codes"> | number | null
    boxLabel?: StringNullableWithAggregatesFilter<"Codes"> | string | null
    palletNumber?: IntNullableWithAggregatesFilter<"Codes"> | number | null
    palletLabel?: StringNullableWithAggregatesFilter<"Codes"> | string | null
    status?: EnumCodeStatusWithAggregatesFilter<"Codes"> | $Enums.CodeStatus
    reportId?: StringWithAggregatesFilter<"Codes"> | string
  }

  export type ShipmentTaskWhereInput = {
    AND?: ShipmentTaskWhereInput | ShipmentTaskWhereInput[]
    OR?: ShipmentTaskWhereInput[]
    NOT?: ShipmentTaskWhereInput | ShipmentTaskWhereInput[]
    id?: StringFilter<"ShipmentTask"> | string
    group?: StringFilter<"ShipmentTask"> | string
    shippingDoc?: StringFilter<"ShipmentTask"> | string
    nomerTn?: StringNullableFilter<"ShipmentTask"> | string | null
    country?: StringFilter<"ShipmentTask"> | string
    agent?: IntFilter<"ShipmentTask"> | number
    contract?: StringNullableFilter<"ShipmentTask"> | string | null
    count?: IntFilter<"ShipmentTask"> | number
    operationDate?: DateTimeFilter<"ShipmentTask"> | Date | string
    createdAt?: DateTimeFilter<"ShipmentTask"> | Date | string
    updatedAt?: DateTimeFilter<"ShipmentTask"> | Date | string
    products?: ShipmentProductListRelationFilter
    labels?: ShipmentLabelListRelationFilter
  }

  export type ShipmentTaskOrderByWithRelationInput = {
    id?: SortOrder
    group?: SortOrder
    shippingDoc?: SortOrder
    nomerTn?: SortOrderInput | SortOrder
    country?: SortOrder
    agent?: SortOrder
    contract?: SortOrderInput | SortOrder
    count?: SortOrder
    operationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ShipmentProductOrderByRelationAggregateInput
    labels?: ShipmentLabelOrderByRelationAggregateInput
  }

  export type ShipmentTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentTaskWhereInput | ShipmentTaskWhereInput[]
    OR?: ShipmentTaskWhereInput[]
    NOT?: ShipmentTaskWhereInput | ShipmentTaskWhereInput[]
    group?: StringFilter<"ShipmentTask"> | string
    shippingDoc?: StringFilter<"ShipmentTask"> | string
    nomerTn?: StringNullableFilter<"ShipmentTask"> | string | null
    country?: StringFilter<"ShipmentTask"> | string
    agent?: IntFilter<"ShipmentTask"> | number
    contract?: StringNullableFilter<"ShipmentTask"> | string | null
    count?: IntFilter<"ShipmentTask"> | number
    operationDate?: DateTimeFilter<"ShipmentTask"> | Date | string
    createdAt?: DateTimeFilter<"ShipmentTask"> | Date | string
    updatedAt?: DateTimeFilter<"ShipmentTask"> | Date | string
    products?: ShipmentProductListRelationFilter
    labels?: ShipmentLabelListRelationFilter
  }, "id">

  export type ShipmentTaskOrderByWithAggregationInput = {
    id?: SortOrder
    group?: SortOrder
    shippingDoc?: SortOrder
    nomerTn?: SortOrderInput | SortOrder
    country?: SortOrder
    agent?: SortOrder
    contract?: SortOrderInput | SortOrder
    count?: SortOrder
    operationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShipmentTaskCountOrderByAggregateInput
    _avg?: ShipmentTaskAvgOrderByAggregateInput
    _max?: ShipmentTaskMaxOrderByAggregateInput
    _min?: ShipmentTaskMinOrderByAggregateInput
    _sum?: ShipmentTaskSumOrderByAggregateInput
  }

  export type ShipmentTaskScalarWhereWithAggregatesInput = {
    AND?: ShipmentTaskScalarWhereWithAggregatesInput | ShipmentTaskScalarWhereWithAggregatesInput[]
    OR?: ShipmentTaskScalarWhereWithAggregatesInput[]
    NOT?: ShipmentTaskScalarWhereWithAggregatesInput | ShipmentTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShipmentTask"> | string
    group?: StringWithAggregatesFilter<"ShipmentTask"> | string
    shippingDoc?: StringWithAggregatesFilter<"ShipmentTask"> | string
    nomerTn?: StringNullableWithAggregatesFilter<"ShipmentTask"> | string | null
    country?: StringWithAggregatesFilter<"ShipmentTask"> | string
    agent?: IntWithAggregatesFilter<"ShipmentTask"> | number
    contract?: StringNullableWithAggregatesFilter<"ShipmentTask"> | string | null
    count?: IntWithAggregatesFilter<"ShipmentTask"> | number
    operationDate?: DateTimeWithAggregatesFilter<"ShipmentTask"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ShipmentTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ShipmentTask"> | Date | string
  }

  export type ShipmentProductWhereInput = {
    AND?: ShipmentProductWhereInput | ShipmentProductWhereInput[]
    OR?: ShipmentProductWhereInput[]
    NOT?: ShipmentProductWhereInput | ShipmentProductWhereInput[]
    id?: StringFilter<"ShipmentProduct"> | string
    gtin?: StringFilter<"ShipmentProduct"> | string
    cost?: FloatFilter<"ShipmentProduct"> | number
    tax?: FloatFilter<"ShipmentProduct"> | number
    currency?: StringFilter<"ShipmentProduct"> | string
    shipmentId?: StringFilter<"ShipmentProduct"> | string
    certificates?: CertificateListRelationFilter
    shipment?: XOR<ShipmentTaskScalarRelationFilter, ShipmentTaskWhereInput>
  }

  export type ShipmentProductOrderByWithRelationInput = {
    id?: SortOrder
    gtin?: SortOrder
    cost?: SortOrder
    tax?: SortOrder
    currency?: SortOrder
    shipmentId?: SortOrder
    certificates?: CertificateOrderByRelationAggregateInput
    shipment?: ShipmentTaskOrderByWithRelationInput
  }

  export type ShipmentProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentProductWhereInput | ShipmentProductWhereInput[]
    OR?: ShipmentProductWhereInput[]
    NOT?: ShipmentProductWhereInput | ShipmentProductWhereInput[]
    gtin?: StringFilter<"ShipmentProduct"> | string
    cost?: FloatFilter<"ShipmentProduct"> | number
    tax?: FloatFilter<"ShipmentProduct"> | number
    currency?: StringFilter<"ShipmentProduct"> | string
    shipmentId?: StringFilter<"ShipmentProduct"> | string
    certificates?: CertificateListRelationFilter
    shipment?: XOR<ShipmentTaskScalarRelationFilter, ShipmentTaskWhereInput>
  }, "id">

  export type ShipmentProductOrderByWithAggregationInput = {
    id?: SortOrder
    gtin?: SortOrder
    cost?: SortOrder
    tax?: SortOrder
    currency?: SortOrder
    shipmentId?: SortOrder
    _count?: ShipmentProductCountOrderByAggregateInput
    _avg?: ShipmentProductAvgOrderByAggregateInput
    _max?: ShipmentProductMaxOrderByAggregateInput
    _min?: ShipmentProductMinOrderByAggregateInput
    _sum?: ShipmentProductSumOrderByAggregateInput
  }

  export type ShipmentProductScalarWhereWithAggregatesInput = {
    AND?: ShipmentProductScalarWhereWithAggregatesInput | ShipmentProductScalarWhereWithAggregatesInput[]
    OR?: ShipmentProductScalarWhereWithAggregatesInput[]
    NOT?: ShipmentProductScalarWhereWithAggregatesInput | ShipmentProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShipmentProduct"> | string
    gtin?: StringWithAggregatesFilter<"ShipmentProduct"> | string
    cost?: FloatWithAggregatesFilter<"ShipmentProduct"> | number
    tax?: FloatWithAggregatesFilter<"ShipmentProduct"> | number
    currency?: StringWithAggregatesFilter<"ShipmentProduct"> | string
    shipmentId?: StringWithAggregatesFilter<"ShipmentProduct"> | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: StringFilter<"Certificate"> | string
    type?: StringFilter<"Certificate"> | string
    number?: StringFilter<"Certificate"> | string
    certificateDate?: DateTimeFilter<"Certificate"> | Date | string
    productId?: StringFilter<"Certificate"> | string
    product?: XOR<ShipmentProductScalarRelationFilter, ShipmentProductWhereInput>
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    certificateDate?: SortOrder
    productId?: SortOrder
    product?: ShipmentProductOrderByWithRelationInput
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    type?: StringFilter<"Certificate"> | string
    number?: StringFilter<"Certificate"> | string
    certificateDate?: DateTimeFilter<"Certificate"> | Date | string
    productId?: StringFilter<"Certificate"> | string
    product?: XOR<ShipmentProductScalarRelationFilter, ShipmentProductWhereInput>
  }, "id">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    certificateDate?: SortOrder
    productId?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificate"> | string
    type?: StringWithAggregatesFilter<"Certificate"> | string
    number?: StringWithAggregatesFilter<"Certificate"> | string
    certificateDate?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    productId?: StringWithAggregatesFilter<"Certificate"> | string
  }

  export type ShipmentLabelWhereInput = {
    AND?: ShipmentLabelWhereInput | ShipmentLabelWhereInput[]
    OR?: ShipmentLabelWhereInput[]
    NOT?: ShipmentLabelWhereInput | ShipmentLabelWhereInput[]
    id?: StringFilter<"ShipmentLabel"> | string
    code?: StringFilter<"ShipmentLabel"> | string
    shipmentId?: StringFilter<"ShipmentLabel"> | string
    shipment?: XOR<ShipmentTaskScalarRelationFilter, ShipmentTaskWhereInput>
  }

  export type ShipmentLabelOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    shipmentId?: SortOrder
    shipment?: ShipmentTaskOrderByWithRelationInput
  }

  export type ShipmentLabelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShipmentLabelWhereInput | ShipmentLabelWhereInput[]
    OR?: ShipmentLabelWhereInput[]
    NOT?: ShipmentLabelWhereInput | ShipmentLabelWhereInput[]
    code?: StringFilter<"ShipmentLabel"> | string
    shipmentId?: StringFilter<"ShipmentLabel"> | string
    shipment?: XOR<ShipmentTaskScalarRelationFilter, ShipmentTaskWhereInput>
  }, "id">

  export type ShipmentLabelOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    shipmentId?: SortOrder
    _count?: ShipmentLabelCountOrderByAggregateInput
    _max?: ShipmentLabelMaxOrderByAggregateInput
    _min?: ShipmentLabelMinOrderByAggregateInput
  }

  export type ShipmentLabelScalarWhereWithAggregatesInput = {
    AND?: ShipmentLabelScalarWhereWithAggregatesInput | ShipmentLabelScalarWhereWithAggregatesInput[]
    OR?: ShipmentLabelScalarWhereWithAggregatesInput[]
    NOT?: ShipmentLabelScalarWhereWithAggregatesInput | ShipmentLabelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShipmentLabel"> | string
    code?: StringWithAggregatesFilter<"ShipmentLabel"> | string
    shipmentId?: StringWithAggregatesFilter<"ShipmentLabel"> | string
  }

  export type ReportsCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    gtin: string
    manufactureDate: string
    bbd: string
    batch: string
    name: string
    description: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    codes?: CodesCreateNestedManyWithoutReportInput
  }

  export type ReportsUncheckedCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    gtin: string
    manufactureDate: string
    bbd: string
    batch: string
    name: string
    description: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    codes?: CodesUncheckedCreateNestedManyWithoutReportInput
  }

  export type ReportsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gtin?: StringFieldUpdateOperationsInput | string
    manufactureDate?: StringFieldUpdateOperationsInput | string
    bbd?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codes?: CodesUpdateManyWithoutReportNestedInput
  }

  export type ReportsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gtin?: StringFieldUpdateOperationsInput | string
    manufactureDate?: StringFieldUpdateOperationsInput | string
    bbd?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    codes?: CodesUncheckedUpdateManyWithoutReportNestedInput
  }

  export type ReportsCreateManyInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    gtin: string
    manufactureDate: string
    bbd: string
    batch: string
    name: string
    description: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gtin?: StringFieldUpdateOperationsInput | string
    manufactureDate?: StringFieldUpdateOperationsInput | string
    bbd?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gtin?: StringFieldUpdateOperationsInput | string
    manufactureDate?: StringFieldUpdateOperationsInput | string
    bbd?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodesCreateInput = {
    id?: string
    code: string
    gtin: string
    boxNumber?: number | null
    boxLabel?: string | null
    palletNumber?: number | null
    palletLabel?: string | null
    status?: $Enums.CodeStatus
    report: ReportsCreateNestedOneWithoutCodesInput
  }

  export type CodesUncheckedCreateInput = {
    id?: string
    code: string
    gtin: string
    boxNumber?: number | null
    boxLabel?: string | null
    palletNumber?: number | null
    palletLabel?: string | null
    status?: $Enums.CodeStatus
    reportId: string
  }

  export type CodesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    boxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    palletNumber?: NullableIntFieldUpdateOperationsInput | number | null
    palletLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    report?: ReportsUpdateOneRequiredWithoutCodesNestedInput
  }

  export type CodesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    boxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    palletNumber?: NullableIntFieldUpdateOperationsInput | number | null
    palletLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    reportId?: StringFieldUpdateOperationsInput | string
  }

  export type CodesCreateManyInput = {
    id?: string
    code: string
    gtin: string
    boxNumber?: number | null
    boxLabel?: string | null
    palletNumber?: number | null
    palletLabel?: string | null
    status?: $Enums.CodeStatus
    reportId: string
  }

  export type CodesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    boxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    palletNumber?: NullableIntFieldUpdateOperationsInput | number | null
    palletLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
  }

  export type CodesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    boxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    palletNumber?: NullableIntFieldUpdateOperationsInput | number | null
    palletLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
    reportId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentTaskCreateInput = {
    id?: string
    group: string
    shippingDoc: string
    nomerTn?: string | null
    country: string
    agent: number
    contract?: string | null
    count: number
    operationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ShipmentProductCreateNestedManyWithoutShipmentInput
    labels?: ShipmentLabelCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentTaskUncheckedCreateInput = {
    id?: string
    group: string
    shippingDoc: string
    nomerTn?: string | null
    country: string
    agent: number
    contract?: string | null
    count: number
    operationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ShipmentProductUncheckedCreateNestedManyWithoutShipmentInput
    labels?: ShipmentLabelUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    shippingDoc?: StringFieldUpdateOperationsInput | string
    nomerTn?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    agent?: IntFieldUpdateOperationsInput | number
    contract?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    operationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ShipmentProductUpdateManyWithoutShipmentNestedInput
    labels?: ShipmentLabelUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    shippingDoc?: StringFieldUpdateOperationsInput | string
    nomerTn?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    agent?: IntFieldUpdateOperationsInput | number
    contract?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    operationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ShipmentProductUncheckedUpdateManyWithoutShipmentNestedInput
    labels?: ShipmentLabelUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentTaskCreateManyInput = {
    id?: string
    group: string
    shippingDoc: string
    nomerTn?: string | null
    country: string
    agent: number
    contract?: string | null
    count: number
    operationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    shippingDoc?: StringFieldUpdateOperationsInput | string
    nomerTn?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    agent?: IntFieldUpdateOperationsInput | number
    contract?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    operationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    shippingDoc?: StringFieldUpdateOperationsInput | string
    nomerTn?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    agent?: IntFieldUpdateOperationsInput | number
    contract?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    operationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentProductCreateInput = {
    id?: string
    gtin: string
    cost: number
    tax: number
    currency: string
    certificates?: CertificateCreateNestedManyWithoutProductInput
    shipment: ShipmentTaskCreateNestedOneWithoutProductsInput
  }

  export type ShipmentProductUncheckedCreateInput = {
    id?: string
    gtin: string
    cost: number
    tax: number
    currency: string
    shipmentId: string
    certificates?: CertificateUncheckedCreateNestedManyWithoutProductInput
  }

  export type ShipmentProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    certificates?: CertificateUpdateManyWithoutProductNestedInput
    shipment?: ShipmentTaskUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ShipmentProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    certificates?: CertificateUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ShipmentProductCreateManyInput = {
    id?: string
    gtin: string
    cost: number
    tax: number
    currency: string
    shipmentId: string
  }

  export type ShipmentProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificateCreateInput = {
    id?: string
    type: string
    number: string
    certificateDate: Date | string
    product: ShipmentProductCreateNestedOneWithoutCertificatesInput
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    type: string
    number: string
    certificateDate: Date | string
    productId: string
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    certificateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ShipmentProductUpdateOneRequiredWithoutCertificatesNestedInput
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    certificateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type CertificateCreateManyInput = {
    id?: string
    type: string
    number: string
    certificateDate: Date | string
    productId: string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    certificateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    certificateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentLabelCreateInput = {
    id?: string
    code: string
    shipment: ShipmentTaskCreateNestedOneWithoutLabelsInput
  }

  export type ShipmentLabelUncheckedCreateInput = {
    id?: string
    code: string
    shipmentId: string
  }

  export type ShipmentLabelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    shipment?: ShipmentTaskUpdateOneRequiredWithoutLabelsNestedInput
  }

  export type ShipmentLabelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentLabelCreateManyInput = {
    id?: string
    code: string
    shipmentId: string
  }

  export type ShipmentLabelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentLabelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
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

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type CodesListRelationFilter = {
    every?: CodesWhereInput
    some?: CodesWhereInput
    none?: CodesWhereInput
  }

  export type CodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportsCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    gtin?: SortOrder
    manufactureDate?: SortOrder
    bbd?: SortOrder
    batch?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportsMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    gtin?: SortOrder
    manufactureDate?: SortOrder
    bbd?: SortOrder
    batch?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReportsMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    gtin?: SortOrder
    manufactureDate?: SortOrder
    bbd?: SortOrder
    batch?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type EnumCodeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeStatus | EnumCodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeStatusFilter<$PrismaModel> | $Enums.CodeStatus
  }

  export type ReportsScalarRelationFilter = {
    is?: ReportsWhereInput
    isNot?: ReportsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CodesCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    gtin?: SortOrder
    boxNumber?: SortOrder
    boxLabel?: SortOrder
    palletNumber?: SortOrder
    palletLabel?: SortOrder
    status?: SortOrder
    reportId?: SortOrder
  }

  export type CodesAvgOrderByAggregateInput = {
    boxNumber?: SortOrder
    palletNumber?: SortOrder
  }

  export type CodesMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    gtin?: SortOrder
    boxNumber?: SortOrder
    boxLabel?: SortOrder
    palletNumber?: SortOrder
    palletLabel?: SortOrder
    status?: SortOrder
    reportId?: SortOrder
  }

  export type CodesMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    gtin?: SortOrder
    boxNumber?: SortOrder
    boxLabel?: SortOrder
    palletNumber?: SortOrder
    palletLabel?: SortOrder
    status?: SortOrder
    reportId?: SortOrder
  }

  export type CodesSumOrderByAggregateInput = {
    boxNumber?: SortOrder
    palletNumber?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type EnumCodeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeStatus | EnumCodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeStatusWithAggregatesFilter<$PrismaModel> | $Enums.CodeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCodeStatusFilter<$PrismaModel>
    _max?: NestedEnumCodeStatusFilter<$PrismaModel>
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

  export type ShipmentProductListRelationFilter = {
    every?: ShipmentProductWhereInput
    some?: ShipmentProductWhereInput
    none?: ShipmentProductWhereInput
  }

  export type ShipmentLabelListRelationFilter = {
    every?: ShipmentLabelWhereInput
    some?: ShipmentLabelWhereInput
    none?: ShipmentLabelWhereInput
  }

  export type ShipmentProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentLabelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentTaskCountOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    shippingDoc?: SortOrder
    nomerTn?: SortOrder
    country?: SortOrder
    agent?: SortOrder
    contract?: SortOrder
    count?: SortOrder
    operationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentTaskAvgOrderByAggregateInput = {
    agent?: SortOrder
    count?: SortOrder
  }

  export type ShipmentTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    shippingDoc?: SortOrder
    nomerTn?: SortOrder
    country?: SortOrder
    agent?: SortOrder
    contract?: SortOrder
    count?: SortOrder
    operationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentTaskMinOrderByAggregateInput = {
    id?: SortOrder
    group?: SortOrder
    shippingDoc?: SortOrder
    nomerTn?: SortOrder
    country?: SortOrder
    agent?: SortOrder
    contract?: SortOrder
    count?: SortOrder
    operationDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentTaskSumOrderByAggregateInput = {
    agent?: SortOrder
    count?: SortOrder
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

  export type CertificateListRelationFilter = {
    every?: CertificateWhereInput
    some?: CertificateWhereInput
    none?: CertificateWhereInput
  }

  export type ShipmentTaskScalarRelationFilter = {
    is?: ShipmentTaskWhereInput
    isNot?: ShipmentTaskWhereInput
  }

  export type CertificateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentProductCountOrderByAggregateInput = {
    id?: SortOrder
    gtin?: SortOrder
    cost?: SortOrder
    tax?: SortOrder
    currency?: SortOrder
    shipmentId?: SortOrder
  }

  export type ShipmentProductAvgOrderByAggregateInput = {
    cost?: SortOrder
    tax?: SortOrder
  }

  export type ShipmentProductMaxOrderByAggregateInput = {
    id?: SortOrder
    gtin?: SortOrder
    cost?: SortOrder
    tax?: SortOrder
    currency?: SortOrder
    shipmentId?: SortOrder
  }

  export type ShipmentProductMinOrderByAggregateInput = {
    id?: SortOrder
    gtin?: SortOrder
    cost?: SortOrder
    tax?: SortOrder
    currency?: SortOrder
    shipmentId?: SortOrder
  }

  export type ShipmentProductSumOrderByAggregateInput = {
    cost?: SortOrder
    tax?: SortOrder
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

  export type ShipmentProductScalarRelationFilter = {
    is?: ShipmentProductWhereInput
    isNot?: ShipmentProductWhereInput
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    certificateDate?: SortOrder
    productId?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    certificateDate?: SortOrder
    productId?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    number?: SortOrder
    certificateDate?: SortOrder
    productId?: SortOrder
  }

  export type ShipmentLabelCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    shipmentId?: SortOrder
  }

  export type ShipmentLabelMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    shipmentId?: SortOrder
  }

  export type ShipmentLabelMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    shipmentId?: SortOrder
  }

  export type CodesCreateNestedManyWithoutReportInput = {
    create?: XOR<CodesCreateWithoutReportInput, CodesUncheckedCreateWithoutReportInput> | CodesCreateWithoutReportInput[] | CodesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: CodesCreateOrConnectWithoutReportInput | CodesCreateOrConnectWithoutReportInput[]
    createMany?: CodesCreateManyReportInputEnvelope
    connect?: CodesWhereUniqueInput | CodesWhereUniqueInput[]
  }

  export type CodesUncheckedCreateNestedManyWithoutReportInput = {
    create?: XOR<CodesCreateWithoutReportInput, CodesUncheckedCreateWithoutReportInput> | CodesCreateWithoutReportInput[] | CodesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: CodesCreateOrConnectWithoutReportInput | CodesCreateOrConnectWithoutReportInput[]
    createMany?: CodesCreateManyReportInputEnvelope
    connect?: CodesWhereUniqueInput | CodesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type CodesUpdateManyWithoutReportNestedInput = {
    create?: XOR<CodesCreateWithoutReportInput, CodesUncheckedCreateWithoutReportInput> | CodesCreateWithoutReportInput[] | CodesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: CodesCreateOrConnectWithoutReportInput | CodesCreateOrConnectWithoutReportInput[]
    upsert?: CodesUpsertWithWhereUniqueWithoutReportInput | CodesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: CodesCreateManyReportInputEnvelope
    set?: CodesWhereUniqueInput | CodesWhereUniqueInput[]
    disconnect?: CodesWhereUniqueInput | CodesWhereUniqueInput[]
    delete?: CodesWhereUniqueInput | CodesWhereUniqueInput[]
    connect?: CodesWhereUniqueInput | CodesWhereUniqueInput[]
    update?: CodesUpdateWithWhereUniqueWithoutReportInput | CodesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: CodesUpdateManyWithWhereWithoutReportInput | CodesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: CodesScalarWhereInput | CodesScalarWhereInput[]
  }

  export type CodesUncheckedUpdateManyWithoutReportNestedInput = {
    create?: XOR<CodesCreateWithoutReportInput, CodesUncheckedCreateWithoutReportInput> | CodesCreateWithoutReportInput[] | CodesUncheckedCreateWithoutReportInput[]
    connectOrCreate?: CodesCreateOrConnectWithoutReportInput | CodesCreateOrConnectWithoutReportInput[]
    upsert?: CodesUpsertWithWhereUniqueWithoutReportInput | CodesUpsertWithWhereUniqueWithoutReportInput[]
    createMany?: CodesCreateManyReportInputEnvelope
    set?: CodesWhereUniqueInput | CodesWhereUniqueInput[]
    disconnect?: CodesWhereUniqueInput | CodesWhereUniqueInput[]
    delete?: CodesWhereUniqueInput | CodesWhereUniqueInput[]
    connect?: CodesWhereUniqueInput | CodesWhereUniqueInput[]
    update?: CodesUpdateWithWhereUniqueWithoutReportInput | CodesUpdateWithWhereUniqueWithoutReportInput[]
    updateMany?: CodesUpdateManyWithWhereWithoutReportInput | CodesUpdateManyWithWhereWithoutReportInput[]
    deleteMany?: CodesScalarWhereInput | CodesScalarWhereInput[]
  }

  export type ReportsCreateNestedOneWithoutCodesInput = {
    create?: XOR<ReportsCreateWithoutCodesInput, ReportsUncheckedCreateWithoutCodesInput>
    connectOrCreate?: ReportsCreateOrConnectWithoutCodesInput
    connect?: ReportsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCodeStatusFieldUpdateOperationsInput = {
    set?: $Enums.CodeStatus
  }

  export type ReportsUpdateOneRequiredWithoutCodesNestedInput = {
    create?: XOR<ReportsCreateWithoutCodesInput, ReportsUncheckedCreateWithoutCodesInput>
    connectOrCreate?: ReportsCreateOrConnectWithoutCodesInput
    upsert?: ReportsUpsertWithoutCodesInput
    connect?: ReportsWhereUniqueInput
    update?: XOR<XOR<ReportsUpdateToOneWithWhereWithoutCodesInput, ReportsUpdateWithoutCodesInput>, ReportsUncheckedUpdateWithoutCodesInput>
  }

  export type ShipmentProductCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentProductCreateWithoutShipmentInput, ShipmentProductUncheckedCreateWithoutShipmentInput> | ShipmentProductCreateWithoutShipmentInput[] | ShipmentProductUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentProductCreateOrConnectWithoutShipmentInput | ShipmentProductCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentProductCreateManyShipmentInputEnvelope
    connect?: ShipmentProductWhereUniqueInput | ShipmentProductWhereUniqueInput[]
  }

  export type ShipmentLabelCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentLabelCreateWithoutShipmentInput, ShipmentLabelUncheckedCreateWithoutShipmentInput> | ShipmentLabelCreateWithoutShipmentInput[] | ShipmentLabelUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentLabelCreateOrConnectWithoutShipmentInput | ShipmentLabelCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentLabelCreateManyShipmentInputEnvelope
    connect?: ShipmentLabelWhereUniqueInput | ShipmentLabelWhereUniqueInput[]
  }

  export type ShipmentProductUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentProductCreateWithoutShipmentInput, ShipmentProductUncheckedCreateWithoutShipmentInput> | ShipmentProductCreateWithoutShipmentInput[] | ShipmentProductUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentProductCreateOrConnectWithoutShipmentInput | ShipmentProductCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentProductCreateManyShipmentInputEnvelope
    connect?: ShipmentProductWhereUniqueInput | ShipmentProductWhereUniqueInput[]
  }

  export type ShipmentLabelUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ShipmentLabelCreateWithoutShipmentInput, ShipmentLabelUncheckedCreateWithoutShipmentInput> | ShipmentLabelCreateWithoutShipmentInput[] | ShipmentLabelUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentLabelCreateOrConnectWithoutShipmentInput | ShipmentLabelCreateOrConnectWithoutShipmentInput[]
    createMany?: ShipmentLabelCreateManyShipmentInputEnvelope
    connect?: ShipmentLabelWhereUniqueInput | ShipmentLabelWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ShipmentProductUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentProductCreateWithoutShipmentInput, ShipmentProductUncheckedCreateWithoutShipmentInput> | ShipmentProductCreateWithoutShipmentInput[] | ShipmentProductUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentProductCreateOrConnectWithoutShipmentInput | ShipmentProductCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentProductUpsertWithWhereUniqueWithoutShipmentInput | ShipmentProductUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentProductCreateManyShipmentInputEnvelope
    set?: ShipmentProductWhereUniqueInput | ShipmentProductWhereUniqueInput[]
    disconnect?: ShipmentProductWhereUniqueInput | ShipmentProductWhereUniqueInput[]
    delete?: ShipmentProductWhereUniqueInput | ShipmentProductWhereUniqueInput[]
    connect?: ShipmentProductWhereUniqueInput | ShipmentProductWhereUniqueInput[]
    update?: ShipmentProductUpdateWithWhereUniqueWithoutShipmentInput | ShipmentProductUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentProductUpdateManyWithWhereWithoutShipmentInput | ShipmentProductUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentProductScalarWhereInput | ShipmentProductScalarWhereInput[]
  }

  export type ShipmentLabelUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentLabelCreateWithoutShipmentInput, ShipmentLabelUncheckedCreateWithoutShipmentInput> | ShipmentLabelCreateWithoutShipmentInput[] | ShipmentLabelUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentLabelCreateOrConnectWithoutShipmentInput | ShipmentLabelCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentLabelUpsertWithWhereUniqueWithoutShipmentInput | ShipmentLabelUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentLabelCreateManyShipmentInputEnvelope
    set?: ShipmentLabelWhereUniqueInput | ShipmentLabelWhereUniqueInput[]
    disconnect?: ShipmentLabelWhereUniqueInput | ShipmentLabelWhereUniqueInput[]
    delete?: ShipmentLabelWhereUniqueInput | ShipmentLabelWhereUniqueInput[]
    connect?: ShipmentLabelWhereUniqueInput | ShipmentLabelWhereUniqueInput[]
    update?: ShipmentLabelUpdateWithWhereUniqueWithoutShipmentInput | ShipmentLabelUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentLabelUpdateManyWithWhereWithoutShipmentInput | ShipmentLabelUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentLabelScalarWhereInput | ShipmentLabelScalarWhereInput[]
  }

  export type ShipmentProductUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentProductCreateWithoutShipmentInput, ShipmentProductUncheckedCreateWithoutShipmentInput> | ShipmentProductCreateWithoutShipmentInput[] | ShipmentProductUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentProductCreateOrConnectWithoutShipmentInput | ShipmentProductCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentProductUpsertWithWhereUniqueWithoutShipmentInput | ShipmentProductUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentProductCreateManyShipmentInputEnvelope
    set?: ShipmentProductWhereUniqueInput | ShipmentProductWhereUniqueInput[]
    disconnect?: ShipmentProductWhereUniqueInput | ShipmentProductWhereUniqueInput[]
    delete?: ShipmentProductWhereUniqueInput | ShipmentProductWhereUniqueInput[]
    connect?: ShipmentProductWhereUniqueInput | ShipmentProductWhereUniqueInput[]
    update?: ShipmentProductUpdateWithWhereUniqueWithoutShipmentInput | ShipmentProductUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentProductUpdateManyWithWhereWithoutShipmentInput | ShipmentProductUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentProductScalarWhereInput | ShipmentProductScalarWhereInput[]
  }

  export type ShipmentLabelUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ShipmentLabelCreateWithoutShipmentInput, ShipmentLabelUncheckedCreateWithoutShipmentInput> | ShipmentLabelCreateWithoutShipmentInput[] | ShipmentLabelUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ShipmentLabelCreateOrConnectWithoutShipmentInput | ShipmentLabelCreateOrConnectWithoutShipmentInput[]
    upsert?: ShipmentLabelUpsertWithWhereUniqueWithoutShipmentInput | ShipmentLabelUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ShipmentLabelCreateManyShipmentInputEnvelope
    set?: ShipmentLabelWhereUniqueInput | ShipmentLabelWhereUniqueInput[]
    disconnect?: ShipmentLabelWhereUniqueInput | ShipmentLabelWhereUniqueInput[]
    delete?: ShipmentLabelWhereUniqueInput | ShipmentLabelWhereUniqueInput[]
    connect?: ShipmentLabelWhereUniqueInput | ShipmentLabelWhereUniqueInput[]
    update?: ShipmentLabelUpdateWithWhereUniqueWithoutShipmentInput | ShipmentLabelUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ShipmentLabelUpdateManyWithWhereWithoutShipmentInput | ShipmentLabelUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ShipmentLabelScalarWhereInput | ShipmentLabelScalarWhereInput[]
  }

  export type CertificateCreateNestedManyWithoutProductInput = {
    create?: XOR<CertificateCreateWithoutProductInput, CertificateUncheckedCreateWithoutProductInput> | CertificateCreateWithoutProductInput[] | CertificateUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutProductInput | CertificateCreateOrConnectWithoutProductInput[]
    createMany?: CertificateCreateManyProductInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type ShipmentTaskCreateNestedOneWithoutProductsInput = {
    create?: XOR<ShipmentTaskCreateWithoutProductsInput, ShipmentTaskUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShipmentTaskCreateOrConnectWithoutProductsInput
    connect?: ShipmentTaskWhereUniqueInput
  }

  export type CertificateUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CertificateCreateWithoutProductInput, CertificateUncheckedCreateWithoutProductInput> | CertificateCreateWithoutProductInput[] | CertificateUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutProductInput | CertificateCreateOrConnectWithoutProductInput[]
    createMany?: CertificateCreateManyProductInputEnvelope
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CertificateUpdateManyWithoutProductNestedInput = {
    create?: XOR<CertificateCreateWithoutProductInput, CertificateUncheckedCreateWithoutProductInput> | CertificateCreateWithoutProductInput[] | CertificateUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutProductInput | CertificateCreateOrConnectWithoutProductInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutProductInput | CertificateUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CertificateCreateManyProductInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutProductInput | CertificateUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutProductInput | CertificateUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type ShipmentTaskUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ShipmentTaskCreateWithoutProductsInput, ShipmentTaskUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShipmentTaskCreateOrConnectWithoutProductsInput
    upsert?: ShipmentTaskUpsertWithoutProductsInput
    connect?: ShipmentTaskWhereUniqueInput
    update?: XOR<XOR<ShipmentTaskUpdateToOneWithWhereWithoutProductsInput, ShipmentTaskUpdateWithoutProductsInput>, ShipmentTaskUncheckedUpdateWithoutProductsInput>
  }

  export type CertificateUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CertificateCreateWithoutProductInput, CertificateUncheckedCreateWithoutProductInput> | CertificateCreateWithoutProductInput[] | CertificateUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CertificateCreateOrConnectWithoutProductInput | CertificateCreateOrConnectWithoutProductInput[]
    upsert?: CertificateUpsertWithWhereUniqueWithoutProductInput | CertificateUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CertificateCreateManyProductInputEnvelope
    set?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    disconnect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    delete?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    connect?: CertificateWhereUniqueInput | CertificateWhereUniqueInput[]
    update?: CertificateUpdateWithWhereUniqueWithoutProductInput | CertificateUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CertificateUpdateManyWithWhereWithoutProductInput | CertificateUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
  }

  export type ShipmentProductCreateNestedOneWithoutCertificatesInput = {
    create?: XOR<ShipmentProductCreateWithoutCertificatesInput, ShipmentProductUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: ShipmentProductCreateOrConnectWithoutCertificatesInput
    connect?: ShipmentProductWhereUniqueInput
  }

  export type ShipmentProductUpdateOneRequiredWithoutCertificatesNestedInput = {
    create?: XOR<ShipmentProductCreateWithoutCertificatesInput, ShipmentProductUncheckedCreateWithoutCertificatesInput>
    connectOrCreate?: ShipmentProductCreateOrConnectWithoutCertificatesInput
    upsert?: ShipmentProductUpsertWithoutCertificatesInput
    connect?: ShipmentProductWhereUniqueInput
    update?: XOR<XOR<ShipmentProductUpdateToOneWithWhereWithoutCertificatesInput, ShipmentProductUpdateWithoutCertificatesInput>, ShipmentProductUncheckedUpdateWithoutCertificatesInput>
  }

  export type ShipmentTaskCreateNestedOneWithoutLabelsInput = {
    create?: XOR<ShipmentTaskCreateWithoutLabelsInput, ShipmentTaskUncheckedCreateWithoutLabelsInput>
    connectOrCreate?: ShipmentTaskCreateOrConnectWithoutLabelsInput
    connect?: ShipmentTaskWhereUniqueInput
  }

  export type ShipmentTaskUpdateOneRequiredWithoutLabelsNestedInput = {
    create?: XOR<ShipmentTaskCreateWithoutLabelsInput, ShipmentTaskUncheckedCreateWithoutLabelsInput>
    connectOrCreate?: ShipmentTaskCreateOrConnectWithoutLabelsInput
    upsert?: ShipmentTaskUpsertWithoutLabelsInput
    connect?: ShipmentTaskWhereUniqueInput
    update?: XOR<XOR<ShipmentTaskUpdateToOneWithWhereWithoutLabelsInput, ShipmentTaskUpdateWithoutLabelsInput>, ShipmentTaskUncheckedUpdateWithoutLabelsInput>
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

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
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

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
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

  export type NestedEnumCodeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeStatus | EnumCodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeStatusFilter<$PrismaModel> | $Enums.CodeStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumCodeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CodeStatus | EnumCodeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CodeStatus[] | ListEnumCodeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCodeStatusWithAggregatesFilter<$PrismaModel> | $Enums.CodeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCodeStatusFilter<$PrismaModel>
    _max?: NestedEnumCodeStatusFilter<$PrismaModel>
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

  export type CodesCreateWithoutReportInput = {
    id?: string
    code: string
    gtin: string
    boxNumber?: number | null
    boxLabel?: string | null
    palletNumber?: number | null
    palletLabel?: string | null
    status?: $Enums.CodeStatus
  }

  export type CodesUncheckedCreateWithoutReportInput = {
    id?: string
    code: string
    gtin: string
    boxNumber?: number | null
    boxLabel?: string | null
    palletNumber?: number | null
    palletLabel?: string | null
    status?: $Enums.CodeStatus
  }

  export type CodesCreateOrConnectWithoutReportInput = {
    where: CodesWhereUniqueInput
    create: XOR<CodesCreateWithoutReportInput, CodesUncheckedCreateWithoutReportInput>
  }

  export type CodesCreateManyReportInputEnvelope = {
    data: CodesCreateManyReportInput | CodesCreateManyReportInput[]
    skipDuplicates?: boolean
  }

  export type CodesUpsertWithWhereUniqueWithoutReportInput = {
    where: CodesWhereUniqueInput
    update: XOR<CodesUpdateWithoutReportInput, CodesUncheckedUpdateWithoutReportInput>
    create: XOR<CodesCreateWithoutReportInput, CodesUncheckedCreateWithoutReportInput>
  }

  export type CodesUpdateWithWhereUniqueWithoutReportInput = {
    where: CodesWhereUniqueInput
    data: XOR<CodesUpdateWithoutReportInput, CodesUncheckedUpdateWithoutReportInput>
  }

  export type CodesUpdateManyWithWhereWithoutReportInput = {
    where: CodesScalarWhereInput
    data: XOR<CodesUpdateManyMutationInput, CodesUncheckedUpdateManyWithoutReportInput>
  }

  export type CodesScalarWhereInput = {
    AND?: CodesScalarWhereInput | CodesScalarWhereInput[]
    OR?: CodesScalarWhereInput[]
    NOT?: CodesScalarWhereInput | CodesScalarWhereInput[]
    id?: StringFilter<"Codes"> | string
    code?: StringFilter<"Codes"> | string
    gtin?: StringFilter<"Codes"> | string
    boxNumber?: IntNullableFilter<"Codes"> | number | null
    boxLabel?: StringNullableFilter<"Codes"> | string | null
    palletNumber?: IntNullableFilter<"Codes"> | number | null
    palletLabel?: StringNullableFilter<"Codes"> | string | null
    status?: EnumCodeStatusFilter<"Codes"> | $Enums.CodeStatus
    reportId?: StringFilter<"Codes"> | string
  }

  export type ReportsCreateWithoutCodesInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    gtin: string
    manufactureDate: string
    bbd: string
    batch: string
    name: string
    description: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportsUncheckedCreateWithoutCodesInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    gtin: string
    manufactureDate: string
    bbd: string
    batch: string
    name: string
    description: string
    status?: $Enums.ReportStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReportsCreateOrConnectWithoutCodesInput = {
    where: ReportsWhereUniqueInput
    create: XOR<ReportsCreateWithoutCodesInput, ReportsUncheckedCreateWithoutCodesInput>
  }

  export type ReportsUpsertWithoutCodesInput = {
    update: XOR<ReportsUpdateWithoutCodesInput, ReportsUncheckedUpdateWithoutCodesInput>
    create: XOR<ReportsCreateWithoutCodesInput, ReportsUncheckedCreateWithoutCodesInput>
    where?: ReportsWhereInput
  }

  export type ReportsUpdateToOneWithWhereWithoutCodesInput = {
    where?: ReportsWhereInput
    data: XOR<ReportsUpdateWithoutCodesInput, ReportsUncheckedUpdateWithoutCodesInput>
  }

  export type ReportsUpdateWithoutCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gtin?: StringFieldUpdateOperationsInput | string
    manufactureDate?: StringFieldUpdateOperationsInput | string
    bbd?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportsUncheckedUpdateWithoutCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    gtin?: StringFieldUpdateOperationsInput | string
    manufactureDate?: StringFieldUpdateOperationsInput | string
    bbd?: StringFieldUpdateOperationsInput | string
    batch?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentProductCreateWithoutShipmentInput = {
    id?: string
    gtin: string
    cost: number
    tax: number
    currency: string
    certificates?: CertificateCreateNestedManyWithoutProductInput
  }

  export type ShipmentProductUncheckedCreateWithoutShipmentInput = {
    id?: string
    gtin: string
    cost: number
    tax: number
    currency: string
    certificates?: CertificateUncheckedCreateNestedManyWithoutProductInput
  }

  export type ShipmentProductCreateOrConnectWithoutShipmentInput = {
    where: ShipmentProductWhereUniqueInput
    create: XOR<ShipmentProductCreateWithoutShipmentInput, ShipmentProductUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentProductCreateManyShipmentInputEnvelope = {
    data: ShipmentProductCreateManyShipmentInput | ShipmentProductCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentLabelCreateWithoutShipmentInput = {
    id?: string
    code: string
  }

  export type ShipmentLabelUncheckedCreateWithoutShipmentInput = {
    id?: string
    code: string
  }

  export type ShipmentLabelCreateOrConnectWithoutShipmentInput = {
    where: ShipmentLabelWhereUniqueInput
    create: XOR<ShipmentLabelCreateWithoutShipmentInput, ShipmentLabelUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentLabelCreateManyShipmentInputEnvelope = {
    data: ShipmentLabelCreateManyShipmentInput | ShipmentLabelCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentProductUpsertWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentProductWhereUniqueInput
    update: XOR<ShipmentProductUpdateWithoutShipmentInput, ShipmentProductUncheckedUpdateWithoutShipmentInput>
    create: XOR<ShipmentProductCreateWithoutShipmentInput, ShipmentProductUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentProductUpdateWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentProductWhereUniqueInput
    data: XOR<ShipmentProductUpdateWithoutShipmentInput, ShipmentProductUncheckedUpdateWithoutShipmentInput>
  }

  export type ShipmentProductUpdateManyWithWhereWithoutShipmentInput = {
    where: ShipmentProductScalarWhereInput
    data: XOR<ShipmentProductUpdateManyMutationInput, ShipmentProductUncheckedUpdateManyWithoutShipmentInput>
  }

  export type ShipmentProductScalarWhereInput = {
    AND?: ShipmentProductScalarWhereInput | ShipmentProductScalarWhereInput[]
    OR?: ShipmentProductScalarWhereInput[]
    NOT?: ShipmentProductScalarWhereInput | ShipmentProductScalarWhereInput[]
    id?: StringFilter<"ShipmentProduct"> | string
    gtin?: StringFilter<"ShipmentProduct"> | string
    cost?: FloatFilter<"ShipmentProduct"> | number
    tax?: FloatFilter<"ShipmentProduct"> | number
    currency?: StringFilter<"ShipmentProduct"> | string
    shipmentId?: StringFilter<"ShipmentProduct"> | string
  }

  export type ShipmentLabelUpsertWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentLabelWhereUniqueInput
    update: XOR<ShipmentLabelUpdateWithoutShipmentInput, ShipmentLabelUncheckedUpdateWithoutShipmentInput>
    create: XOR<ShipmentLabelCreateWithoutShipmentInput, ShipmentLabelUncheckedCreateWithoutShipmentInput>
  }

  export type ShipmentLabelUpdateWithWhereUniqueWithoutShipmentInput = {
    where: ShipmentLabelWhereUniqueInput
    data: XOR<ShipmentLabelUpdateWithoutShipmentInput, ShipmentLabelUncheckedUpdateWithoutShipmentInput>
  }

  export type ShipmentLabelUpdateManyWithWhereWithoutShipmentInput = {
    where: ShipmentLabelScalarWhereInput
    data: XOR<ShipmentLabelUpdateManyMutationInput, ShipmentLabelUncheckedUpdateManyWithoutShipmentInput>
  }

  export type ShipmentLabelScalarWhereInput = {
    AND?: ShipmentLabelScalarWhereInput | ShipmentLabelScalarWhereInput[]
    OR?: ShipmentLabelScalarWhereInput[]
    NOT?: ShipmentLabelScalarWhereInput | ShipmentLabelScalarWhereInput[]
    id?: StringFilter<"ShipmentLabel"> | string
    code?: StringFilter<"ShipmentLabel"> | string
    shipmentId?: StringFilter<"ShipmentLabel"> | string
  }

  export type CertificateCreateWithoutProductInput = {
    id?: string
    type: string
    number: string
    certificateDate: Date | string
  }

  export type CertificateUncheckedCreateWithoutProductInput = {
    id?: string
    type: string
    number: string
    certificateDate: Date | string
  }

  export type CertificateCreateOrConnectWithoutProductInput = {
    where: CertificateWhereUniqueInput
    create: XOR<CertificateCreateWithoutProductInput, CertificateUncheckedCreateWithoutProductInput>
  }

  export type CertificateCreateManyProductInputEnvelope = {
    data: CertificateCreateManyProductInput | CertificateCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentTaskCreateWithoutProductsInput = {
    id?: string
    group: string
    shippingDoc: string
    nomerTn?: string | null
    country: string
    agent: number
    contract?: string | null
    count: number
    operationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    labels?: ShipmentLabelCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentTaskUncheckedCreateWithoutProductsInput = {
    id?: string
    group: string
    shippingDoc: string
    nomerTn?: string | null
    country: string
    agent: number
    contract?: string | null
    count: number
    operationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    labels?: ShipmentLabelUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentTaskCreateOrConnectWithoutProductsInput = {
    where: ShipmentTaskWhereUniqueInput
    create: XOR<ShipmentTaskCreateWithoutProductsInput, ShipmentTaskUncheckedCreateWithoutProductsInput>
  }

  export type CertificateUpsertWithWhereUniqueWithoutProductInput = {
    where: CertificateWhereUniqueInput
    update: XOR<CertificateUpdateWithoutProductInput, CertificateUncheckedUpdateWithoutProductInput>
    create: XOR<CertificateCreateWithoutProductInput, CertificateUncheckedCreateWithoutProductInput>
  }

  export type CertificateUpdateWithWhereUniqueWithoutProductInput = {
    where: CertificateWhereUniqueInput
    data: XOR<CertificateUpdateWithoutProductInput, CertificateUncheckedUpdateWithoutProductInput>
  }

  export type CertificateUpdateManyWithWhereWithoutProductInput = {
    where: CertificateScalarWhereInput
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyWithoutProductInput>
  }

  export type CertificateScalarWhereInput = {
    AND?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    OR?: CertificateScalarWhereInput[]
    NOT?: CertificateScalarWhereInput | CertificateScalarWhereInput[]
    id?: StringFilter<"Certificate"> | string
    type?: StringFilter<"Certificate"> | string
    number?: StringFilter<"Certificate"> | string
    certificateDate?: DateTimeFilter<"Certificate"> | Date | string
    productId?: StringFilter<"Certificate"> | string
  }

  export type ShipmentTaskUpsertWithoutProductsInput = {
    update: XOR<ShipmentTaskUpdateWithoutProductsInput, ShipmentTaskUncheckedUpdateWithoutProductsInput>
    create: XOR<ShipmentTaskCreateWithoutProductsInput, ShipmentTaskUncheckedCreateWithoutProductsInput>
    where?: ShipmentTaskWhereInput
  }

  export type ShipmentTaskUpdateToOneWithWhereWithoutProductsInput = {
    where?: ShipmentTaskWhereInput
    data: XOR<ShipmentTaskUpdateWithoutProductsInput, ShipmentTaskUncheckedUpdateWithoutProductsInput>
  }

  export type ShipmentTaskUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    shippingDoc?: StringFieldUpdateOperationsInput | string
    nomerTn?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    agent?: IntFieldUpdateOperationsInput | number
    contract?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    operationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labels?: ShipmentLabelUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentTaskUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    shippingDoc?: StringFieldUpdateOperationsInput | string
    nomerTn?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    agent?: IntFieldUpdateOperationsInput | number
    contract?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    operationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labels?: ShipmentLabelUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentProductCreateWithoutCertificatesInput = {
    id?: string
    gtin: string
    cost: number
    tax: number
    currency: string
    shipment: ShipmentTaskCreateNestedOneWithoutProductsInput
  }

  export type ShipmentProductUncheckedCreateWithoutCertificatesInput = {
    id?: string
    gtin: string
    cost: number
    tax: number
    currency: string
    shipmentId: string
  }

  export type ShipmentProductCreateOrConnectWithoutCertificatesInput = {
    where: ShipmentProductWhereUniqueInput
    create: XOR<ShipmentProductCreateWithoutCertificatesInput, ShipmentProductUncheckedCreateWithoutCertificatesInput>
  }

  export type ShipmentProductUpsertWithoutCertificatesInput = {
    update: XOR<ShipmentProductUpdateWithoutCertificatesInput, ShipmentProductUncheckedUpdateWithoutCertificatesInput>
    create: XOR<ShipmentProductCreateWithoutCertificatesInput, ShipmentProductUncheckedCreateWithoutCertificatesInput>
    where?: ShipmentProductWhereInput
  }

  export type ShipmentProductUpdateToOneWithWhereWithoutCertificatesInput = {
    where?: ShipmentProductWhereInput
    data: XOR<ShipmentProductUpdateWithoutCertificatesInput, ShipmentProductUncheckedUpdateWithoutCertificatesInput>
  }

  export type ShipmentProductUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    shipment?: ShipmentTaskUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ShipmentProductUncheckedUpdateWithoutCertificatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentTaskCreateWithoutLabelsInput = {
    id?: string
    group: string
    shippingDoc: string
    nomerTn?: string | null
    country: string
    agent: number
    contract?: string | null
    count: number
    operationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ShipmentProductCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentTaskUncheckedCreateWithoutLabelsInput = {
    id?: string
    group: string
    shippingDoc: string
    nomerTn?: string | null
    country: string
    agent: number
    contract?: string | null
    count: number
    operationDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ShipmentProductUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentTaskCreateOrConnectWithoutLabelsInput = {
    where: ShipmentTaskWhereUniqueInput
    create: XOR<ShipmentTaskCreateWithoutLabelsInput, ShipmentTaskUncheckedCreateWithoutLabelsInput>
  }

  export type ShipmentTaskUpsertWithoutLabelsInput = {
    update: XOR<ShipmentTaskUpdateWithoutLabelsInput, ShipmentTaskUncheckedUpdateWithoutLabelsInput>
    create: XOR<ShipmentTaskCreateWithoutLabelsInput, ShipmentTaskUncheckedCreateWithoutLabelsInput>
    where?: ShipmentTaskWhereInput
  }

  export type ShipmentTaskUpdateToOneWithWhereWithoutLabelsInput = {
    where?: ShipmentTaskWhereInput
    data: XOR<ShipmentTaskUpdateWithoutLabelsInput, ShipmentTaskUncheckedUpdateWithoutLabelsInput>
  }

  export type ShipmentTaskUpdateWithoutLabelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    shippingDoc?: StringFieldUpdateOperationsInput | string
    nomerTn?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    agent?: IntFieldUpdateOperationsInput | number
    contract?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    operationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ShipmentProductUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentTaskUncheckedUpdateWithoutLabelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: StringFieldUpdateOperationsInput | string
    shippingDoc?: StringFieldUpdateOperationsInput | string
    nomerTn?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    agent?: IntFieldUpdateOperationsInput | number
    contract?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    operationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ShipmentProductUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type CodesCreateManyReportInput = {
    id?: string
    code: string
    gtin: string
    boxNumber?: number | null
    boxLabel?: string | null
    palletNumber?: number | null
    palletLabel?: string | null
    status?: $Enums.CodeStatus
  }

  export type CodesUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    boxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    palletNumber?: NullableIntFieldUpdateOperationsInput | number | null
    palletLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
  }

  export type CodesUncheckedUpdateWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    boxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    palletNumber?: NullableIntFieldUpdateOperationsInput | number | null
    palletLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
  }

  export type CodesUncheckedUpdateManyWithoutReportInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    boxNumber?: NullableIntFieldUpdateOperationsInput | number | null
    boxLabel?: NullableStringFieldUpdateOperationsInput | string | null
    palletNumber?: NullableIntFieldUpdateOperationsInput | number | null
    palletLabel?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCodeStatusFieldUpdateOperationsInput | $Enums.CodeStatus
  }

  export type ShipmentProductCreateManyShipmentInput = {
    id?: string
    gtin: string
    cost: number
    tax: number
    currency: string
  }

  export type ShipmentLabelCreateManyShipmentInput = {
    id?: string
    code: string
  }

  export type ShipmentProductUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    certificates?: CertificateUpdateManyWithoutProductNestedInput
  }

  export type ShipmentProductUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    certificates?: CertificateUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ShipmentProductUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    gtin?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    tax?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentLabelUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentLabelUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type ShipmentLabelUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
  }

  export type CertificateCreateManyProductInput = {
    id?: string
    type: string
    number: string
    certificateDate: Date | string
  }

  export type CertificateUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    certificateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    certificateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    certificateDate?: DateTimeFieldUpdateOperationsInput | Date | string
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
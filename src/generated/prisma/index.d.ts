
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model WaterReading
 * 
 */
export type WaterReading = $Result.DefaultSelection<Prisma.$WaterReadingPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.waterReading`: Exposes CRUD operations for the **WaterReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WaterReadings
    * const waterReadings = await prisma.waterReading.findMany()
    * ```
    */
  get waterReading(): Prisma.WaterReadingDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Device: 'Device',
    WaterReading: 'WaterReading'
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
      modelProps: "user" | "device" | "waterReading"
      txIsolationLevel: never
    }
    model: {
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
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.DeviceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.DeviceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      WaterReading: {
        payload: Prisma.$WaterReadingPayload<ExtArgs>
        fields: Prisma.WaterReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WaterReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WaterReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterReadingPayload>
          }
          findFirst: {
            args: Prisma.WaterReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WaterReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterReadingPayload>
          }
          findMany: {
            args: Prisma.WaterReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterReadingPayload>[]
          }
          create: {
            args: Prisma.WaterReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterReadingPayload>
          }
          createMany: {
            args: Prisma.WaterReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.WaterReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterReadingPayload>
          }
          update: {
            args: Prisma.WaterReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterReadingPayload>
          }
          deleteMany: {
            args: Prisma.WaterReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WaterReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WaterReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WaterReadingPayload>
          }
          aggregate: {
            args: Prisma.WaterReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWaterReading>
          }
          groupBy: {
            args: Prisma.WaterReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<WaterReadingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.WaterReadingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.WaterReadingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.WaterReadingCountArgs<ExtArgs>
            result: $Utils.Optional<WaterReadingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    user?: UserOmit
    device?: DeviceOmit
    waterReading?: WaterReadingOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    devices: number
    readings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
    readings?: boolean | UserCountOutputTypeCountReadingsArgs
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
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterReadingWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    readings: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | DeviceCountOutputTypeCountReadingsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterReadingWhereInput
  }


  /**
   * Models
   */

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
    fullName: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    passwordHash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    updatedAt?: true
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
    fullName: string
    email: string
    passwordHash: string
    createdAt: Date
    updatedAt: Date
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
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    devices?: boolean | User$devicesArgs<ExtArgs>
    readings?: boolean | User$readingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "passwordHash" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | User$devicesArgs<ExtArgs>
    readings?: boolean | User$readingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      devices: Prisma.$DevicePayload<ExtArgs>[]
      readings: Prisma.$WaterReadingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      email: string
      passwordHash: string
      createdAt: Date
      updatedAt: Date
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
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    readings<T extends User$readingsArgs<ExtArgs> = {}>(args?: Subset<T, User$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User.readings
   */
  export type User$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    where?: WaterReadingWhereInput
    orderBy?: WaterReadingOrderByWithRelationInput | WaterReadingOrderByWithRelationInput[]
    cursor?: WaterReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaterReadingScalarFieldEnum | WaterReadingScalarFieldEnum[]
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
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    deviceId: string | null
    ingestToken: string | null
    createdAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    deviceId: string | null
    ingestToken: string | null
    createdAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    deviceId: number
    ingestToken: number
    createdAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    deviceId?: true
    ingestToken?: true
    createdAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    deviceId?: true
    ingestToken?: true
    createdAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    deviceId?: true
    ingestToken?: true
    createdAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    userId: string
    name: string
    deviceId: string
    ingestToken: string
    createdAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    deviceId?: boolean
    ingestToken?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    readings?: boolean | Device$readingsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>



  export type DeviceSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    deviceId?: boolean
    ingestToken?: boolean
    createdAt?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "deviceId" | "ingestToken" | "createdAt", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    readings?: boolean | Device$readingsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      readings: Prisma.$WaterReadingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      deviceId: string
      ingestToken: string
      createdAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * @param {DeviceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const device = await prisma.device.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: DeviceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Device.
     * @param {DeviceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const device = await prisma.device.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: DeviceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    readings<T extends Device$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Device$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly userId: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly deviceId: FieldRef<"Device", 'String'>
    readonly ingestToken: FieldRef<"Device", 'String'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device findRaw
   */
  export type DeviceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Device aggregateRaw
   */
  export type DeviceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Device.readings
   */
  export type Device$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    where?: WaterReadingWhereInput
    orderBy?: WaterReadingOrderByWithRelationInput | WaterReadingOrderByWithRelationInput[]
    cursor?: WaterReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WaterReadingScalarFieldEnum | WaterReadingScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model WaterReading
   */

  export type AggregateWaterReading = {
    _count: WaterReadingCountAggregateOutputType | null
    _avg: WaterReadingAvgAggregateOutputType | null
    _sum: WaterReadingSumAggregateOutputType | null
    _min: WaterReadingMinAggregateOutputType | null
    _max: WaterReadingMaxAggregateOutputType | null
  }

  export type WaterReadingAvgAggregateOutputType = {
    pulses: number | null
    liters: number | null
    flowRate: number | null
  }

  export type WaterReadingSumAggregateOutputType = {
    pulses: number | null
    liters: number | null
    flowRate: number | null
  }

  export type WaterReadingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    deviceId: string | null
    pulses: number | null
    liters: number | null
    flowRate: number | null
    source: string | null
    capturedAt: Date | null
    createdAt: Date | null
  }

  export type WaterReadingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    deviceId: string | null
    pulses: number | null
    liters: number | null
    flowRate: number | null
    source: string | null
    capturedAt: Date | null
    createdAt: Date | null
  }

  export type WaterReadingCountAggregateOutputType = {
    id: number
    userId: number
    deviceId: number
    pulses: number
    liters: number
    flowRate: number
    source: number
    capturedAt: number
    createdAt: number
    _all: number
  }


  export type WaterReadingAvgAggregateInputType = {
    pulses?: true
    liters?: true
    flowRate?: true
  }

  export type WaterReadingSumAggregateInputType = {
    pulses?: true
    liters?: true
    flowRate?: true
  }

  export type WaterReadingMinAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    pulses?: true
    liters?: true
    flowRate?: true
    source?: true
    capturedAt?: true
    createdAt?: true
  }

  export type WaterReadingMaxAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    pulses?: true
    liters?: true
    flowRate?: true
    source?: true
    capturedAt?: true
    createdAt?: true
  }

  export type WaterReadingCountAggregateInputType = {
    id?: true
    userId?: true
    deviceId?: true
    pulses?: true
    liters?: true
    flowRate?: true
    source?: true
    capturedAt?: true
    createdAt?: true
    _all?: true
  }

  export type WaterReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterReading to aggregate.
     */
    where?: WaterReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterReadings to fetch.
     */
    orderBy?: WaterReadingOrderByWithRelationInput | WaterReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WaterReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WaterReadings
    **/
    _count?: true | WaterReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WaterReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WaterReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WaterReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WaterReadingMaxAggregateInputType
  }

  export type GetWaterReadingAggregateType<T extends WaterReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateWaterReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWaterReading[P]>
      : GetScalarType<T[P], AggregateWaterReading[P]>
  }




  export type WaterReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WaterReadingWhereInput
    orderBy?: WaterReadingOrderByWithAggregationInput | WaterReadingOrderByWithAggregationInput[]
    by: WaterReadingScalarFieldEnum[] | WaterReadingScalarFieldEnum
    having?: WaterReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WaterReadingCountAggregateInputType | true
    _avg?: WaterReadingAvgAggregateInputType
    _sum?: WaterReadingSumAggregateInputType
    _min?: WaterReadingMinAggregateInputType
    _max?: WaterReadingMaxAggregateInputType
  }

  export type WaterReadingGroupByOutputType = {
    id: string
    userId: string
    deviceId: string | null
    pulses: number
    liters: number
    flowRate: number | null
    source: string
    capturedAt: Date
    createdAt: Date
    _count: WaterReadingCountAggregateOutputType | null
    _avg: WaterReadingAvgAggregateOutputType | null
    _sum: WaterReadingSumAggregateOutputType | null
    _min: WaterReadingMinAggregateOutputType | null
    _max: WaterReadingMaxAggregateOutputType | null
  }

  type GetWaterReadingGroupByPayload<T extends WaterReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WaterReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WaterReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WaterReadingGroupByOutputType[P]>
            : GetScalarType<T[P], WaterReadingGroupByOutputType[P]>
        }
      >
    >


  export type WaterReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    deviceId?: boolean
    pulses?: boolean
    liters?: boolean
    flowRate?: boolean
    source?: boolean
    capturedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    device?: boolean | WaterReading$deviceArgs<ExtArgs>
  }, ExtArgs["result"]["waterReading"]>



  export type WaterReadingSelectScalar = {
    id?: boolean
    userId?: boolean
    deviceId?: boolean
    pulses?: boolean
    liters?: boolean
    flowRate?: boolean
    source?: boolean
    capturedAt?: boolean
    createdAt?: boolean
  }

  export type WaterReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "deviceId" | "pulses" | "liters" | "flowRate" | "source" | "capturedAt" | "createdAt", ExtArgs["result"]["waterReading"]>
  export type WaterReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    device?: boolean | WaterReading$deviceArgs<ExtArgs>
  }

  export type $WaterReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WaterReading"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      device: Prisma.$DevicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      deviceId: string | null
      pulses: number
      liters: number
      flowRate: number | null
      source: string
      capturedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["waterReading"]>
    composites: {}
  }

  type WaterReadingGetPayload<S extends boolean | null | undefined | WaterReadingDefaultArgs> = $Result.GetResult<Prisma.$WaterReadingPayload, S>

  type WaterReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WaterReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WaterReadingCountAggregateInputType | true
    }

  export interface WaterReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WaterReading'], meta: { name: 'WaterReading' } }
    /**
     * Find zero or one WaterReading that matches the filter.
     * @param {WaterReadingFindUniqueArgs} args - Arguments to find a WaterReading
     * @example
     * // Get one WaterReading
     * const waterReading = await prisma.waterReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WaterReadingFindUniqueArgs>(args: SelectSubset<T, WaterReadingFindUniqueArgs<ExtArgs>>): Prisma__WaterReadingClient<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WaterReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WaterReadingFindUniqueOrThrowArgs} args - Arguments to find a WaterReading
     * @example
     * // Get one WaterReading
     * const waterReading = await prisma.waterReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WaterReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, WaterReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WaterReadingClient<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterReadingFindFirstArgs} args - Arguments to find a WaterReading
     * @example
     * // Get one WaterReading
     * const waterReading = await prisma.waterReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WaterReadingFindFirstArgs>(args?: SelectSubset<T, WaterReadingFindFirstArgs<ExtArgs>>): Prisma__WaterReadingClient<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WaterReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterReadingFindFirstOrThrowArgs} args - Arguments to find a WaterReading
     * @example
     * // Get one WaterReading
     * const waterReading = await prisma.waterReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WaterReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, WaterReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__WaterReadingClient<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaterReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WaterReadings
     * const waterReadings = await prisma.waterReading.findMany()
     * 
     * // Get first 10 WaterReadings
     * const waterReadings = await prisma.waterReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const waterReadingWithIdOnly = await prisma.waterReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WaterReadingFindManyArgs>(args?: SelectSubset<T, WaterReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WaterReading.
     * @param {WaterReadingCreateArgs} args - Arguments to create a WaterReading.
     * @example
     * // Create one WaterReading
     * const WaterReading = await prisma.waterReading.create({
     *   data: {
     *     // ... data to create a WaterReading
     *   }
     * })
     * 
     */
    create<T extends WaterReadingCreateArgs>(args: SelectSubset<T, WaterReadingCreateArgs<ExtArgs>>): Prisma__WaterReadingClient<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WaterReadings.
     * @param {WaterReadingCreateManyArgs} args - Arguments to create many WaterReadings.
     * @example
     * // Create many WaterReadings
     * const waterReading = await prisma.waterReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WaterReadingCreateManyArgs>(args?: SelectSubset<T, WaterReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WaterReading.
     * @param {WaterReadingDeleteArgs} args - Arguments to delete one WaterReading.
     * @example
     * // Delete one WaterReading
     * const WaterReading = await prisma.waterReading.delete({
     *   where: {
     *     // ... filter to delete one WaterReading
     *   }
     * })
     * 
     */
    delete<T extends WaterReadingDeleteArgs>(args: SelectSubset<T, WaterReadingDeleteArgs<ExtArgs>>): Prisma__WaterReadingClient<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WaterReading.
     * @param {WaterReadingUpdateArgs} args - Arguments to update one WaterReading.
     * @example
     * // Update one WaterReading
     * const waterReading = await prisma.waterReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WaterReadingUpdateArgs>(args: SelectSubset<T, WaterReadingUpdateArgs<ExtArgs>>): Prisma__WaterReadingClient<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WaterReadings.
     * @param {WaterReadingDeleteManyArgs} args - Arguments to filter WaterReadings to delete.
     * @example
     * // Delete a few WaterReadings
     * const { count } = await prisma.waterReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WaterReadingDeleteManyArgs>(args?: SelectSubset<T, WaterReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WaterReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WaterReadings
     * const waterReading = await prisma.waterReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WaterReadingUpdateManyArgs>(args: SelectSubset<T, WaterReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WaterReading.
     * @param {WaterReadingUpsertArgs} args - Arguments to update or create a WaterReading.
     * @example
     * // Update or create a WaterReading
     * const waterReading = await prisma.waterReading.upsert({
     *   create: {
     *     // ... data to create a WaterReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WaterReading we want to update
     *   }
     * })
     */
    upsert<T extends WaterReadingUpsertArgs>(args: SelectSubset<T, WaterReadingUpsertArgs<ExtArgs>>): Prisma__WaterReadingClient<$Result.GetResult<Prisma.$WaterReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WaterReadings that matches the filter.
     * @param {WaterReadingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const waterReading = await prisma.waterReading.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: WaterReadingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a WaterReading.
     * @param {WaterReadingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const waterReading = await prisma.waterReading.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: WaterReadingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of WaterReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterReadingCountArgs} args - Arguments to filter WaterReadings to count.
     * @example
     * // Count the number of WaterReadings
     * const count = await prisma.waterReading.count({
     *   where: {
     *     // ... the filter for the WaterReadings we want to count
     *   }
     * })
    **/
    count<T extends WaterReadingCountArgs>(
      args?: Subset<T, WaterReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WaterReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WaterReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WaterReadingAggregateArgs>(args: Subset<T, WaterReadingAggregateArgs>): Prisma.PrismaPromise<GetWaterReadingAggregateType<T>>

    /**
     * Group by WaterReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WaterReadingGroupByArgs} args - Group by arguments.
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
      T extends WaterReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WaterReadingGroupByArgs['orderBy'] }
        : { orderBy?: WaterReadingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WaterReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWaterReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WaterReading model
   */
  readonly fields: WaterReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WaterReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WaterReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    device<T extends WaterReading$deviceArgs<ExtArgs> = {}>(args?: Subset<T, WaterReading$deviceArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WaterReading model
   */
  interface WaterReadingFieldRefs {
    readonly id: FieldRef<"WaterReading", 'String'>
    readonly userId: FieldRef<"WaterReading", 'String'>
    readonly deviceId: FieldRef<"WaterReading", 'String'>
    readonly pulses: FieldRef<"WaterReading", 'Int'>
    readonly liters: FieldRef<"WaterReading", 'Float'>
    readonly flowRate: FieldRef<"WaterReading", 'Float'>
    readonly source: FieldRef<"WaterReading", 'String'>
    readonly capturedAt: FieldRef<"WaterReading", 'DateTime'>
    readonly createdAt: FieldRef<"WaterReading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WaterReading findUnique
   */
  export type WaterReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    /**
     * Filter, which WaterReading to fetch.
     */
    where: WaterReadingWhereUniqueInput
  }

  /**
   * WaterReading findUniqueOrThrow
   */
  export type WaterReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    /**
     * Filter, which WaterReading to fetch.
     */
    where: WaterReadingWhereUniqueInput
  }

  /**
   * WaterReading findFirst
   */
  export type WaterReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    /**
     * Filter, which WaterReading to fetch.
     */
    where?: WaterReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterReadings to fetch.
     */
    orderBy?: WaterReadingOrderByWithRelationInput | WaterReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterReadings.
     */
    cursor?: WaterReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterReadings.
     */
    distinct?: WaterReadingScalarFieldEnum | WaterReadingScalarFieldEnum[]
  }

  /**
   * WaterReading findFirstOrThrow
   */
  export type WaterReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    /**
     * Filter, which WaterReading to fetch.
     */
    where?: WaterReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterReadings to fetch.
     */
    orderBy?: WaterReadingOrderByWithRelationInput | WaterReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WaterReadings.
     */
    cursor?: WaterReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WaterReadings.
     */
    distinct?: WaterReadingScalarFieldEnum | WaterReadingScalarFieldEnum[]
  }

  /**
   * WaterReading findMany
   */
  export type WaterReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    /**
     * Filter, which WaterReadings to fetch.
     */
    where?: WaterReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WaterReadings to fetch.
     */
    orderBy?: WaterReadingOrderByWithRelationInput | WaterReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WaterReadings.
     */
    cursor?: WaterReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WaterReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WaterReadings.
     */
    skip?: number
    distinct?: WaterReadingScalarFieldEnum | WaterReadingScalarFieldEnum[]
  }

  /**
   * WaterReading create
   */
  export type WaterReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a WaterReading.
     */
    data: XOR<WaterReadingCreateInput, WaterReadingUncheckedCreateInput>
  }

  /**
   * WaterReading createMany
   */
  export type WaterReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WaterReadings.
     */
    data: WaterReadingCreateManyInput | WaterReadingCreateManyInput[]
  }

  /**
   * WaterReading update
   */
  export type WaterReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a WaterReading.
     */
    data: XOR<WaterReadingUpdateInput, WaterReadingUncheckedUpdateInput>
    /**
     * Choose, which WaterReading to update.
     */
    where: WaterReadingWhereUniqueInput
  }

  /**
   * WaterReading updateMany
   */
  export type WaterReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WaterReadings.
     */
    data: XOR<WaterReadingUpdateManyMutationInput, WaterReadingUncheckedUpdateManyInput>
    /**
     * Filter which WaterReadings to update
     */
    where?: WaterReadingWhereInput
    /**
     * Limit how many WaterReadings to update.
     */
    limit?: number
  }

  /**
   * WaterReading upsert
   */
  export type WaterReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the WaterReading to update in case it exists.
     */
    where: WaterReadingWhereUniqueInput
    /**
     * In case the WaterReading found by the `where` argument doesn't exist, create a new WaterReading with this data.
     */
    create: XOR<WaterReadingCreateInput, WaterReadingUncheckedCreateInput>
    /**
     * In case the WaterReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WaterReadingUpdateInput, WaterReadingUncheckedUpdateInput>
  }

  /**
   * WaterReading delete
   */
  export type WaterReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
    /**
     * Filter which WaterReading to delete.
     */
    where: WaterReadingWhereUniqueInput
  }

  /**
   * WaterReading deleteMany
   */
  export type WaterReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WaterReadings to delete
     */
    where?: WaterReadingWhereInput
    /**
     * Limit how many WaterReadings to delete.
     */
    limit?: number
  }

  /**
   * WaterReading findRaw
   */
  export type WaterReadingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WaterReading aggregateRaw
   */
  export type WaterReadingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * WaterReading.device
   */
  export type WaterReading$deviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
  }

  /**
   * WaterReading without action
   */
  export type WaterReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WaterReading
     */
    select?: WaterReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WaterReading
     */
    omit?: WaterReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WaterReadingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    deviceId: 'deviceId',
    ingestToken: 'ingestToken',
    createdAt: 'createdAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const WaterReadingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    deviceId: 'deviceId',
    pulses: 'pulses',
    liters: 'liters',
    flowRate: 'flowRate',
    source: 'source',
    capturedAt: 'capturedAt',
    createdAt: 'createdAt'
  };

  export type WaterReadingScalarFieldEnum = (typeof WaterReadingScalarFieldEnum)[keyof typeof WaterReadingScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    devices?: DeviceListRelationFilter
    readings?: WaterReadingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    devices?: DeviceOrderByRelationAggregateInput
    readings?: WaterReadingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    devices?: DeviceListRelationFilter
    readings?: WaterReadingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: StringFilter<"Device"> | string
    userId?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    deviceId?: StringFilter<"Device"> | string
    ingestToken?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    readings?: WaterReadingListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    deviceId?: SortOrder
    ingestToken?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    readings?: WaterReadingOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    deviceId?: string
    ingestToken?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    userId?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    readings?: WaterReadingListRelationFilter
  }, "id" | "deviceId" | "ingestToken">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    deviceId?: SortOrder
    ingestToken?: SortOrder
    createdAt?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Device"> | string
    userId?: StringWithAggregatesFilter<"Device"> | string
    name?: StringWithAggregatesFilter<"Device"> | string
    deviceId?: StringWithAggregatesFilter<"Device"> | string
    ingestToken?: StringWithAggregatesFilter<"Device"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
  }

  export type WaterReadingWhereInput = {
    AND?: WaterReadingWhereInput | WaterReadingWhereInput[]
    OR?: WaterReadingWhereInput[]
    NOT?: WaterReadingWhereInput | WaterReadingWhereInput[]
    id?: StringFilter<"WaterReading"> | string
    userId?: StringFilter<"WaterReading"> | string
    deviceId?: StringNullableFilter<"WaterReading"> | string | null
    pulses?: IntFilter<"WaterReading"> | number
    liters?: FloatFilter<"WaterReading"> | number
    flowRate?: FloatNullableFilter<"WaterReading"> | number | null
    source?: StringFilter<"WaterReading"> | string
    capturedAt?: DateTimeFilter<"WaterReading"> | Date | string
    createdAt?: DateTimeFilter<"WaterReading"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
  }

  export type WaterReadingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    pulses?: SortOrder
    liters?: SortOrder
    flowRate?: SortOrder
    source?: SortOrder
    capturedAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
  }

  export type WaterReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WaterReadingWhereInput | WaterReadingWhereInput[]
    OR?: WaterReadingWhereInput[]
    NOT?: WaterReadingWhereInput | WaterReadingWhereInput[]
    userId?: StringFilter<"WaterReading"> | string
    deviceId?: StringNullableFilter<"WaterReading"> | string | null
    pulses?: IntFilter<"WaterReading"> | number
    liters?: FloatFilter<"WaterReading"> | number
    flowRate?: FloatNullableFilter<"WaterReading"> | number | null
    source?: StringFilter<"WaterReading"> | string
    capturedAt?: DateTimeFilter<"WaterReading"> | Date | string
    createdAt?: DateTimeFilter<"WaterReading"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    device?: XOR<DeviceNullableScalarRelationFilter, DeviceWhereInput> | null
  }, "id">

  export type WaterReadingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    pulses?: SortOrder
    liters?: SortOrder
    flowRate?: SortOrder
    source?: SortOrder
    capturedAt?: SortOrder
    createdAt?: SortOrder
    _count?: WaterReadingCountOrderByAggregateInput
    _avg?: WaterReadingAvgOrderByAggregateInput
    _max?: WaterReadingMaxOrderByAggregateInput
    _min?: WaterReadingMinOrderByAggregateInput
    _sum?: WaterReadingSumOrderByAggregateInput
  }

  export type WaterReadingScalarWhereWithAggregatesInput = {
    AND?: WaterReadingScalarWhereWithAggregatesInput | WaterReadingScalarWhereWithAggregatesInput[]
    OR?: WaterReadingScalarWhereWithAggregatesInput[]
    NOT?: WaterReadingScalarWhereWithAggregatesInput | WaterReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WaterReading"> | string
    userId?: StringWithAggregatesFilter<"WaterReading"> | string
    deviceId?: StringNullableWithAggregatesFilter<"WaterReading"> | string | null
    pulses?: IntWithAggregatesFilter<"WaterReading"> | number
    liters?: FloatWithAggregatesFilter<"WaterReading"> | number
    flowRate?: FloatNullableWithAggregatesFilter<"WaterReading"> | number | null
    source?: StringWithAggregatesFilter<"WaterReading"> | string
    capturedAt?: DateTimeWithAggregatesFilter<"WaterReading"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"WaterReading"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutUserInput
    readings?: WaterReadingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    readings?: WaterReadingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutUserNestedInput
    readings?: WaterReadingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    readings?: WaterReadingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateInput = {
    id?: string
    name: string
    deviceId: string
    ingestToken: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDevicesInput
    readings?: WaterReadingCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    deviceId: string
    ingestToken: string
    createdAt?: Date | string
    readings?: WaterReadingUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    ingestToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
    readings?: WaterReadingUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    ingestToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: WaterReadingUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: string
    userId: string
    name: string
    deviceId: string
    ingestToken: string
    createdAt?: Date | string
  }

  export type DeviceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    ingestToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    ingestToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterReadingCreateInput = {
    id?: string
    pulses: number
    liters: number
    flowRate?: number | null
    source?: string
    capturedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReadingsInput
    device?: DeviceCreateNestedOneWithoutReadingsInput
  }

  export type WaterReadingUncheckedCreateInput = {
    id?: string
    userId: string
    deviceId?: string | null
    pulses: number
    liters: number
    flowRate?: number | null
    source?: string
    capturedAt?: Date | string
    createdAt?: Date | string
  }

  export type WaterReadingUpdateInput = {
    pulses?: IntFieldUpdateOperationsInput | number
    liters?: FloatFieldUpdateOperationsInput | number
    flowRate?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReadingsNestedInput
    device?: DeviceUpdateOneWithoutReadingsNestedInput
  }

  export type WaterReadingUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    pulses?: IntFieldUpdateOperationsInput | number
    liters?: FloatFieldUpdateOperationsInput | number
    flowRate?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterReadingCreateManyInput = {
    id?: string
    userId: string
    deviceId?: string | null
    pulses: number
    liters: number
    flowRate?: number | null
    source?: string
    capturedAt?: Date | string
    createdAt?: Date | string
  }

  export type WaterReadingUpdateManyMutationInput = {
    pulses?: IntFieldUpdateOperationsInput | number
    liters?: FloatFieldUpdateOperationsInput | number
    flowRate?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterReadingUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    pulses?: IntFieldUpdateOperationsInput | number
    liters?: FloatFieldUpdateOperationsInput | number
    flowRate?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type WaterReadingListRelationFilter = {
    every?: WaterReadingWhereInput
    some?: WaterReadingWhereInput
    none?: WaterReadingWhereInput
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WaterReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    deviceId?: SortOrder
    ingestToken?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    deviceId?: SortOrder
    ingestToken?: SortOrder
    createdAt?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    deviceId?: SortOrder
    ingestToken?: SortOrder
    createdAt?: SortOrder
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
    isSet?: boolean
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type DeviceNullableScalarRelationFilter = {
    is?: DeviceWhereInput | null
    isNot?: DeviceWhereInput | null
  }

  export type WaterReadingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    pulses?: SortOrder
    liters?: SortOrder
    flowRate?: SortOrder
    source?: SortOrder
    capturedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WaterReadingAvgOrderByAggregateInput = {
    pulses?: SortOrder
    liters?: SortOrder
    flowRate?: SortOrder
  }

  export type WaterReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    pulses?: SortOrder
    liters?: SortOrder
    flowRate?: SortOrder
    source?: SortOrder
    capturedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WaterReadingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    deviceId?: SortOrder
    pulses?: SortOrder
    liters?: SortOrder
    flowRate?: SortOrder
    source?: SortOrder
    capturedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type WaterReadingSumOrderByAggregateInput = {
    pulses?: SortOrder
    liters?: SortOrder
    flowRate?: SortOrder
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
    isSet?: boolean
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type WaterReadingCreateNestedManyWithoutUserInput = {
    create?: XOR<WaterReadingCreateWithoutUserInput, WaterReadingUncheckedCreateWithoutUserInput> | WaterReadingCreateWithoutUserInput[] | WaterReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterReadingCreateOrConnectWithoutUserInput | WaterReadingCreateOrConnectWithoutUserInput[]
    createMany?: WaterReadingCreateManyUserInputEnvelope
    connect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type WaterReadingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WaterReadingCreateWithoutUserInput, WaterReadingUncheckedCreateWithoutUserInput> | WaterReadingCreateWithoutUserInput[] | WaterReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterReadingCreateOrConnectWithoutUserInput | WaterReadingCreateOrConnectWithoutUserInput[]
    createMany?: WaterReadingCreateManyUserInputEnvelope
    connect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type WaterReadingUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaterReadingCreateWithoutUserInput, WaterReadingUncheckedCreateWithoutUserInput> | WaterReadingCreateWithoutUserInput[] | WaterReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterReadingCreateOrConnectWithoutUserInput | WaterReadingCreateOrConnectWithoutUserInput[]
    upsert?: WaterReadingUpsertWithWhereUniqueWithoutUserInput | WaterReadingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaterReadingCreateManyUserInputEnvelope
    set?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    disconnect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    delete?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    connect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    update?: WaterReadingUpdateWithWhereUniqueWithoutUserInput | WaterReadingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaterReadingUpdateManyWithWhereWithoutUserInput | WaterReadingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaterReadingScalarWhereInput | WaterReadingScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type WaterReadingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WaterReadingCreateWithoutUserInput, WaterReadingUncheckedCreateWithoutUserInput> | WaterReadingCreateWithoutUserInput[] | WaterReadingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WaterReadingCreateOrConnectWithoutUserInput | WaterReadingCreateOrConnectWithoutUserInput[]
    upsert?: WaterReadingUpsertWithWhereUniqueWithoutUserInput | WaterReadingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WaterReadingCreateManyUserInputEnvelope
    set?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    disconnect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    delete?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    connect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    update?: WaterReadingUpdateWithWhereUniqueWithoutUserInput | WaterReadingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WaterReadingUpdateManyWithWhereWithoutUserInput | WaterReadingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WaterReadingScalarWhereInput | WaterReadingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type WaterReadingCreateNestedManyWithoutDeviceInput = {
    create?: XOR<WaterReadingCreateWithoutDeviceInput, WaterReadingUncheckedCreateWithoutDeviceInput> | WaterReadingCreateWithoutDeviceInput[] | WaterReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: WaterReadingCreateOrConnectWithoutDeviceInput | WaterReadingCreateOrConnectWithoutDeviceInput[]
    createMany?: WaterReadingCreateManyDeviceInputEnvelope
    connect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
  }

  export type WaterReadingUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<WaterReadingCreateWithoutDeviceInput, WaterReadingUncheckedCreateWithoutDeviceInput> | WaterReadingCreateWithoutDeviceInput[] | WaterReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: WaterReadingCreateOrConnectWithoutDeviceInput | WaterReadingCreateOrConnectWithoutDeviceInput[]
    createMany?: WaterReadingCreateManyDeviceInputEnvelope
    connect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type WaterReadingUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<WaterReadingCreateWithoutDeviceInput, WaterReadingUncheckedCreateWithoutDeviceInput> | WaterReadingCreateWithoutDeviceInput[] | WaterReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: WaterReadingCreateOrConnectWithoutDeviceInput | WaterReadingCreateOrConnectWithoutDeviceInput[]
    upsert?: WaterReadingUpsertWithWhereUniqueWithoutDeviceInput | WaterReadingUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: WaterReadingCreateManyDeviceInputEnvelope
    set?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    disconnect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    delete?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    connect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    update?: WaterReadingUpdateWithWhereUniqueWithoutDeviceInput | WaterReadingUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: WaterReadingUpdateManyWithWhereWithoutDeviceInput | WaterReadingUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: WaterReadingScalarWhereInput | WaterReadingScalarWhereInput[]
  }

  export type WaterReadingUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<WaterReadingCreateWithoutDeviceInput, WaterReadingUncheckedCreateWithoutDeviceInput> | WaterReadingCreateWithoutDeviceInput[] | WaterReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: WaterReadingCreateOrConnectWithoutDeviceInput | WaterReadingCreateOrConnectWithoutDeviceInput[]
    upsert?: WaterReadingUpsertWithWhereUniqueWithoutDeviceInput | WaterReadingUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: WaterReadingCreateManyDeviceInputEnvelope
    set?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    disconnect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    delete?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    connect?: WaterReadingWhereUniqueInput | WaterReadingWhereUniqueInput[]
    update?: WaterReadingUpdateWithWhereUniqueWithoutDeviceInput | WaterReadingUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: WaterReadingUpdateManyWithWhereWithoutDeviceInput | WaterReadingUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: WaterReadingScalarWhereInput | WaterReadingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReadingsInput = {
    create?: XOR<UserCreateWithoutReadingsInput, UserUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReadingsInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutReadingsInput = {
    create?: XOR<DeviceCreateWithoutReadingsInput, DeviceUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutReadingsInput
    connect?: DeviceWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<UserCreateWithoutReadingsInput, UserUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReadingsInput
    upsert?: UserUpsertWithoutReadingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReadingsInput, UserUpdateWithoutReadingsInput>, UserUncheckedUpdateWithoutReadingsInput>
  }

  export type DeviceUpdateOneWithoutReadingsNestedInput = {
    create?: XOR<DeviceCreateWithoutReadingsInput, DeviceUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutReadingsInput
    upsert?: DeviceUpsertWithoutReadingsInput
    disconnect?: boolean
    delete?: DeviceWhereInput | boolean
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutReadingsInput, DeviceUpdateWithoutReadingsInput>, DeviceUncheckedUpdateWithoutReadingsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
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
    isSet?: boolean
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DeviceCreateWithoutUserInput = {
    id?: string
    name: string
    deviceId: string
    ingestToken: string
    createdAt?: Date | string
    readings?: WaterReadingCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    deviceId: string
    ingestToken: string
    createdAt?: Date | string
    readings?: WaterReadingUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutUserInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceCreateManyUserInputEnvelope = {
    data: DeviceCreateManyUserInput | DeviceCreateManyUserInput[]
  }

  export type WaterReadingCreateWithoutUserInput = {
    id?: string
    pulses: number
    liters: number
    flowRate?: number | null
    source?: string
    capturedAt?: Date | string
    createdAt?: Date | string
    device?: DeviceCreateNestedOneWithoutReadingsInput
  }

  export type WaterReadingUncheckedCreateWithoutUserInput = {
    id?: string
    deviceId?: string | null
    pulses: number
    liters: number
    flowRate?: number | null
    source?: string
    capturedAt?: Date | string
    createdAt?: Date | string
  }

  export type WaterReadingCreateOrConnectWithoutUserInput = {
    where: WaterReadingWhereUniqueInput
    create: XOR<WaterReadingCreateWithoutUserInput, WaterReadingUncheckedCreateWithoutUserInput>
  }

  export type WaterReadingCreateManyUserInputEnvelope = {
    data: WaterReadingCreateManyUserInput | WaterReadingCreateManyUserInput[]
  }

  export type DeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
  }

  export type DeviceUpdateManyWithWhereWithoutUserInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: StringFilter<"Device"> | string
    userId?: StringFilter<"Device"> | string
    name?: StringFilter<"Device"> | string
    deviceId?: StringFilter<"Device"> | string
    ingestToken?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
  }

  export type WaterReadingUpsertWithWhereUniqueWithoutUserInput = {
    where: WaterReadingWhereUniqueInput
    update: XOR<WaterReadingUpdateWithoutUserInput, WaterReadingUncheckedUpdateWithoutUserInput>
    create: XOR<WaterReadingCreateWithoutUserInput, WaterReadingUncheckedCreateWithoutUserInput>
  }

  export type WaterReadingUpdateWithWhereUniqueWithoutUserInput = {
    where: WaterReadingWhereUniqueInput
    data: XOR<WaterReadingUpdateWithoutUserInput, WaterReadingUncheckedUpdateWithoutUserInput>
  }

  export type WaterReadingUpdateManyWithWhereWithoutUserInput = {
    where: WaterReadingScalarWhereInput
    data: XOR<WaterReadingUpdateManyMutationInput, WaterReadingUncheckedUpdateManyWithoutUserInput>
  }

  export type WaterReadingScalarWhereInput = {
    AND?: WaterReadingScalarWhereInput | WaterReadingScalarWhereInput[]
    OR?: WaterReadingScalarWhereInput[]
    NOT?: WaterReadingScalarWhereInput | WaterReadingScalarWhereInput[]
    id?: StringFilter<"WaterReading"> | string
    userId?: StringFilter<"WaterReading"> | string
    deviceId?: StringNullableFilter<"WaterReading"> | string | null
    pulses?: IntFilter<"WaterReading"> | number
    liters?: FloatFilter<"WaterReading"> | number
    flowRate?: FloatNullableFilter<"WaterReading"> | number | null
    source?: StringFilter<"WaterReading"> | string
    capturedAt?: DateTimeFilter<"WaterReading"> | Date | string
    createdAt?: DateTimeFilter<"WaterReading"> | Date | string
  }

  export type UserCreateWithoutDevicesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: WaterReadingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: WaterReadingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type WaterReadingCreateWithoutDeviceInput = {
    id?: string
    pulses: number
    liters: number
    flowRate?: number | null
    source?: string
    capturedAt?: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReadingsInput
  }

  export type WaterReadingUncheckedCreateWithoutDeviceInput = {
    id?: string
    userId: string
    pulses: number
    liters: number
    flowRate?: number | null
    source?: string
    capturedAt?: Date | string
    createdAt?: Date | string
  }

  export type WaterReadingCreateOrConnectWithoutDeviceInput = {
    where: WaterReadingWhereUniqueInput
    create: XOR<WaterReadingCreateWithoutDeviceInput, WaterReadingUncheckedCreateWithoutDeviceInput>
  }

  export type WaterReadingCreateManyDeviceInputEnvelope = {
    data: WaterReadingCreateManyDeviceInput | WaterReadingCreateManyDeviceInput[]
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: WaterReadingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: WaterReadingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WaterReadingUpsertWithWhereUniqueWithoutDeviceInput = {
    where: WaterReadingWhereUniqueInput
    update: XOR<WaterReadingUpdateWithoutDeviceInput, WaterReadingUncheckedUpdateWithoutDeviceInput>
    create: XOR<WaterReadingCreateWithoutDeviceInput, WaterReadingUncheckedCreateWithoutDeviceInput>
  }

  export type WaterReadingUpdateWithWhereUniqueWithoutDeviceInput = {
    where: WaterReadingWhereUniqueInput
    data: XOR<WaterReadingUpdateWithoutDeviceInput, WaterReadingUncheckedUpdateWithoutDeviceInput>
  }

  export type WaterReadingUpdateManyWithWhereWithoutDeviceInput = {
    where: WaterReadingScalarWhereInput
    data: XOR<WaterReadingUpdateManyMutationInput, WaterReadingUncheckedUpdateManyWithoutDeviceInput>
  }

  export type UserCreateWithoutReadingsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReadingsInput = {
    id?: string
    fullName: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReadingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReadingsInput, UserUncheckedCreateWithoutReadingsInput>
  }

  export type DeviceCreateWithoutReadingsInput = {
    id?: string
    name: string
    deviceId: string
    ingestToken: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateWithoutReadingsInput = {
    id?: string
    userId: string
    name: string
    deviceId: string
    ingestToken: string
    createdAt?: Date | string
  }

  export type DeviceCreateOrConnectWithoutReadingsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutReadingsInput, DeviceUncheckedCreateWithoutReadingsInput>
  }

  export type UserUpsertWithoutReadingsInput = {
    update: XOR<UserUpdateWithoutReadingsInput, UserUncheckedUpdateWithoutReadingsInput>
    create: XOR<UserCreateWithoutReadingsInput, UserUncheckedCreateWithoutReadingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReadingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReadingsInput, UserUncheckedUpdateWithoutReadingsInput>
  }

  export type UserUpdateWithoutReadingsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReadingsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeviceUpsertWithoutReadingsInput = {
    update: XOR<DeviceUpdateWithoutReadingsInput, DeviceUncheckedUpdateWithoutReadingsInput>
    create: XOR<DeviceCreateWithoutReadingsInput, DeviceUncheckedCreateWithoutReadingsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutReadingsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutReadingsInput, DeviceUncheckedUpdateWithoutReadingsInput>
  }

  export type DeviceUpdateWithoutReadingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    ingestToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateWithoutReadingsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    ingestToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyUserInput = {
    id?: string
    name: string
    deviceId: string
    ingestToken: string
    createdAt?: Date | string
  }

  export type WaterReadingCreateManyUserInput = {
    id?: string
    deviceId?: string | null
    pulses: number
    liters: number
    flowRate?: number | null
    source?: string
    capturedAt?: Date | string
    createdAt?: Date | string
  }

  export type DeviceUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    ingestToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: WaterReadingUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    ingestToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: WaterReadingUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    deviceId?: StringFieldUpdateOperationsInput | string
    ingestToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterReadingUpdateWithoutUserInput = {
    pulses?: IntFieldUpdateOperationsInput | number
    liters?: FloatFieldUpdateOperationsInput | number
    flowRate?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneWithoutReadingsNestedInput
  }

  export type WaterReadingUncheckedUpdateWithoutUserInput = {
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    pulses?: IntFieldUpdateOperationsInput | number
    liters?: FloatFieldUpdateOperationsInput | number
    flowRate?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterReadingUncheckedUpdateManyWithoutUserInput = {
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    pulses?: IntFieldUpdateOperationsInput | number
    liters?: FloatFieldUpdateOperationsInput | number
    flowRate?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterReadingCreateManyDeviceInput = {
    id?: string
    userId: string
    pulses: number
    liters: number
    flowRate?: number | null
    source?: string
    capturedAt?: Date | string
    createdAt?: Date | string
  }

  export type WaterReadingUpdateWithoutDeviceInput = {
    pulses?: IntFieldUpdateOperationsInput | number
    liters?: FloatFieldUpdateOperationsInput | number
    flowRate?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type WaterReadingUncheckedUpdateWithoutDeviceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    pulses?: IntFieldUpdateOperationsInput | number
    liters?: FloatFieldUpdateOperationsInput | number
    flowRate?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WaterReadingUncheckedUpdateManyWithoutDeviceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    pulses?: IntFieldUpdateOperationsInput | number
    liters?: FloatFieldUpdateOperationsInput | number
    flowRate?: NullableFloatFieldUpdateOperationsInput | number | null
    source?: StringFieldUpdateOperationsInput | string
    capturedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

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
 * Model Criteria
 * 
 */
export type Criteria = $Result.DefaultSelection<Prisma.$CriteriaPayload>
/**
 * Model Dss
 * 
 */
export type Dss = $Result.DefaultSelection<Prisma.$DssPayload>
/**
 * Model DssAlternative
 * 
 */
export type DssAlternative = $Result.DefaultSelection<Prisma.$DssAlternativePayload>
/**
 * Model DssCriteriaAlternative
 * 
 */
export type DssCriteriaAlternative = $Result.DefaultSelection<Prisma.$DssCriteriaAlternativePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CriteriaType: {
  COST: 'COST',
  BENEFIT: 'BENEFIT'
};

export type CriteriaType = (typeof CriteriaType)[keyof typeof CriteriaType]

}

export type CriteriaType = $Enums.CriteriaType

export const CriteriaType: typeof $Enums.CriteriaType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Criteria
 * const criteria = await prisma.criteria.findMany()
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
   * // Fetch zero or more Criteria
   * const criteria = await prisma.criteria.findMany()
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
   * `prisma.criteria`: Exposes CRUD operations for the **Criteria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Criteria
    * const criteria = await prisma.criteria.findMany()
    * ```
    */
  get criteria(): Prisma.CriteriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dss`: Exposes CRUD operations for the **Dss** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dsses
    * const dsses = await prisma.dss.findMany()
    * ```
    */
  get dss(): Prisma.DssDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dssAlternative`: Exposes CRUD operations for the **DssAlternative** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DssAlternatives
    * const dssAlternatives = await prisma.dssAlternative.findMany()
    * ```
    */
  get dssAlternative(): Prisma.DssAlternativeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dssCriteriaAlternative`: Exposes CRUD operations for the **DssCriteriaAlternative** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DssCriteriaAlternatives
    * const dssCriteriaAlternatives = await prisma.dssCriteriaAlternative.findMany()
    * ```
    */
  get dssCriteriaAlternative(): Prisma.DssCriteriaAlternativeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Criteria: 'Criteria',
    Dss: 'Dss',
    DssAlternative: 'DssAlternative',
    DssCriteriaAlternative: 'DssCriteriaAlternative'
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
      modelProps: "criteria" | "dss" | "dssAlternative" | "dssCriteriaAlternative"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Criteria: {
        payload: Prisma.$CriteriaPayload<ExtArgs>
        fields: Prisma.CriteriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CriteriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CriteriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          findFirst: {
            args: Prisma.CriteriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CriteriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          findMany: {
            args: Prisma.CriteriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>[]
          }
          create: {
            args: Prisma.CriteriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          createMany: {
            args: Prisma.CriteriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CriteriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>[]
          }
          delete: {
            args: Prisma.CriteriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          update: {
            args: Prisma.CriteriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          deleteMany: {
            args: Prisma.CriteriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CriteriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CriteriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>[]
          }
          upsert: {
            args: Prisma.CriteriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CriteriaPayload>
          }
          aggregate: {
            args: Prisma.CriteriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCriteria>
          }
          groupBy: {
            args: Prisma.CriteriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CriteriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CriteriaCountArgs<ExtArgs>
            result: $Utils.Optional<CriteriaCountAggregateOutputType> | number
          }
        }
      }
      Dss: {
        payload: Prisma.$DssPayload<ExtArgs>
        fields: Prisma.DssFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DssFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DssFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload>
          }
          findFirst: {
            args: Prisma.DssFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DssFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload>
          }
          findMany: {
            args: Prisma.DssFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload>[]
          }
          create: {
            args: Prisma.DssCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload>
          }
          createMany: {
            args: Prisma.DssCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DssCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload>[]
          }
          delete: {
            args: Prisma.DssDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload>
          }
          update: {
            args: Prisma.DssUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload>
          }
          deleteMany: {
            args: Prisma.DssDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DssUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DssUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload>[]
          }
          upsert: {
            args: Prisma.DssUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssPayload>
          }
          aggregate: {
            args: Prisma.DssAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDss>
          }
          groupBy: {
            args: Prisma.DssGroupByArgs<ExtArgs>
            result: $Utils.Optional<DssGroupByOutputType>[]
          }
          count: {
            args: Prisma.DssCountArgs<ExtArgs>
            result: $Utils.Optional<DssCountAggregateOutputType> | number
          }
        }
      }
      DssAlternative: {
        payload: Prisma.$DssAlternativePayload<ExtArgs>
        fields: Prisma.DssAlternativeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DssAlternativeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DssAlternativeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload>
          }
          findFirst: {
            args: Prisma.DssAlternativeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DssAlternativeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload>
          }
          findMany: {
            args: Prisma.DssAlternativeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload>[]
          }
          create: {
            args: Prisma.DssAlternativeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload>
          }
          createMany: {
            args: Prisma.DssAlternativeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DssAlternativeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload>[]
          }
          delete: {
            args: Prisma.DssAlternativeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload>
          }
          update: {
            args: Prisma.DssAlternativeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload>
          }
          deleteMany: {
            args: Prisma.DssAlternativeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DssAlternativeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DssAlternativeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload>[]
          }
          upsert: {
            args: Prisma.DssAlternativeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssAlternativePayload>
          }
          aggregate: {
            args: Prisma.DssAlternativeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDssAlternative>
          }
          groupBy: {
            args: Prisma.DssAlternativeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DssAlternativeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DssAlternativeCountArgs<ExtArgs>
            result: $Utils.Optional<DssAlternativeCountAggregateOutputType> | number
          }
        }
      }
      DssCriteriaAlternative: {
        payload: Prisma.$DssCriteriaAlternativePayload<ExtArgs>
        fields: Prisma.DssCriteriaAlternativeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DssCriteriaAlternativeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DssCriteriaAlternativeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload>
          }
          findFirst: {
            args: Prisma.DssCriteriaAlternativeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DssCriteriaAlternativeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload>
          }
          findMany: {
            args: Prisma.DssCriteriaAlternativeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload>[]
          }
          create: {
            args: Prisma.DssCriteriaAlternativeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload>
          }
          createMany: {
            args: Prisma.DssCriteriaAlternativeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DssCriteriaAlternativeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload>[]
          }
          delete: {
            args: Prisma.DssCriteriaAlternativeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload>
          }
          update: {
            args: Prisma.DssCriteriaAlternativeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload>
          }
          deleteMany: {
            args: Prisma.DssCriteriaAlternativeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DssCriteriaAlternativeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DssCriteriaAlternativeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload>[]
          }
          upsert: {
            args: Prisma.DssCriteriaAlternativeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DssCriteriaAlternativePayload>
          }
          aggregate: {
            args: Prisma.DssCriteriaAlternativeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDssCriteriaAlternative>
          }
          groupBy: {
            args: Prisma.DssCriteriaAlternativeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DssCriteriaAlternativeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DssCriteriaAlternativeCountArgs<ExtArgs>
            result: $Utils.Optional<DssCriteriaAlternativeCountAggregateOutputType> | number
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
    criteria?: CriteriaOmit
    dss?: DssOmit
    dssAlternative?: DssAlternativeOmit
    dssCriteriaAlternative?: DssCriteriaAlternativeOmit
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
   * Count Type CriteriaCountOutputType
   */

  export type CriteriaCountOutputType = {
    childCriterias: number
    dssCriteriaAlternatives: number
  }

  export type CriteriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childCriterias?: boolean | CriteriaCountOutputTypeCountChildCriteriasArgs
    dssCriteriaAlternatives?: boolean | CriteriaCountOutputTypeCountDssCriteriaAlternativesArgs
  }

  // Custom InputTypes
  /**
   * CriteriaCountOutputType without action
   */
  export type CriteriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CriteriaCountOutputType
     */
    select?: CriteriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CriteriaCountOutputType without action
   */
  export type CriteriaCountOutputTypeCountChildCriteriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CriteriaWhereInput
  }

  /**
   * CriteriaCountOutputType without action
   */
  export type CriteriaCountOutputTypeCountDssCriteriaAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DssCriteriaAlternativeWhereInput
  }


  /**
   * Count Type DssCountOutputType
   */

  export type DssCountOutputType = {
    dssAlternatives: number
    dssCriteriaAlternatives: number
  }

  export type DssCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dssAlternatives?: boolean | DssCountOutputTypeCountDssAlternativesArgs
    dssCriteriaAlternatives?: boolean | DssCountOutputTypeCountDssCriteriaAlternativesArgs
  }

  // Custom InputTypes
  /**
   * DssCountOutputType without action
   */
  export type DssCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCountOutputType
     */
    select?: DssCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DssCountOutputType without action
   */
  export type DssCountOutputTypeCountDssAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DssAlternativeWhereInput
  }

  /**
   * DssCountOutputType without action
   */
  export type DssCountOutputTypeCountDssCriteriaAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DssCriteriaAlternativeWhereInput
  }


  /**
   * Count Type DssAlternativeCountOutputType
   */

  export type DssAlternativeCountOutputType = {
    dssCriteriaAlternatives: number
  }

  export type DssAlternativeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dssCriteriaAlternatives?: boolean | DssAlternativeCountOutputTypeCountDssCriteriaAlternativesArgs
  }

  // Custom InputTypes
  /**
   * DssAlternativeCountOutputType without action
   */
  export type DssAlternativeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternativeCountOutputType
     */
    select?: DssAlternativeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DssAlternativeCountOutputType without action
   */
  export type DssAlternativeCountOutputTypeCountDssCriteriaAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DssCriteriaAlternativeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Criteria
   */

  export type AggregateCriteria = {
    _count: CriteriaCountAggregateOutputType | null
    _avg: CriteriaAvgAggregateOutputType | null
    _sum: CriteriaSumAggregateOutputType | null
    _min: CriteriaMinAggregateOutputType | null
    _max: CriteriaMaxAggregateOutputType | null
  }

  export type CriteriaAvgAggregateOutputType = {
    criteriaId: number | null
    weight: number | null
    parentCriteriaId: number | null
  }

  export type CriteriaSumAggregateOutputType = {
    criteriaId: number | null
    weight: number | null
    parentCriteriaId: number | null
  }

  export type CriteriaMinAggregateOutputType = {
    criteriaId: number | null
    criteriaName: string | null
    type: $Enums.CriteriaType | null
    weight: number | null
    parentCriteriaId: number | null
    createdAt: Date | null
  }

  export type CriteriaMaxAggregateOutputType = {
    criteriaId: number | null
    criteriaName: string | null
    type: $Enums.CriteriaType | null
    weight: number | null
    parentCriteriaId: number | null
    createdAt: Date | null
  }

  export type CriteriaCountAggregateOutputType = {
    criteriaId: number
    criteriaName: number
    type: number
    weight: number
    parentCriteriaId: number
    createdAt: number
    _all: number
  }


  export type CriteriaAvgAggregateInputType = {
    criteriaId?: true
    weight?: true
    parentCriteriaId?: true
  }

  export type CriteriaSumAggregateInputType = {
    criteriaId?: true
    weight?: true
    parentCriteriaId?: true
  }

  export type CriteriaMinAggregateInputType = {
    criteriaId?: true
    criteriaName?: true
    type?: true
    weight?: true
    parentCriteriaId?: true
    createdAt?: true
  }

  export type CriteriaMaxAggregateInputType = {
    criteriaId?: true
    criteriaName?: true
    type?: true
    weight?: true
    parentCriteriaId?: true
    createdAt?: true
  }

  export type CriteriaCountAggregateInputType = {
    criteriaId?: true
    criteriaName?: true
    type?: true
    weight?: true
    parentCriteriaId?: true
    createdAt?: true
    _all?: true
  }

  export type CriteriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Criteria to aggregate.
     */
    where?: CriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriteriaOrderByWithRelationInput | CriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Criteria
    **/
    _count?: true | CriteriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CriteriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CriteriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CriteriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CriteriaMaxAggregateInputType
  }

  export type GetCriteriaAggregateType<T extends CriteriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCriteria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCriteria[P]>
      : GetScalarType<T[P], AggregateCriteria[P]>
  }




  export type CriteriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CriteriaWhereInput
    orderBy?: CriteriaOrderByWithAggregationInput | CriteriaOrderByWithAggregationInput[]
    by: CriteriaScalarFieldEnum[] | CriteriaScalarFieldEnum
    having?: CriteriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CriteriaCountAggregateInputType | true
    _avg?: CriteriaAvgAggregateInputType
    _sum?: CriteriaSumAggregateInputType
    _min?: CriteriaMinAggregateInputType
    _max?: CriteriaMaxAggregateInputType
  }

  export type CriteriaGroupByOutputType = {
    criteriaId: number
    criteriaName: string
    type: $Enums.CriteriaType
    weight: number
    parentCriteriaId: number | null
    createdAt: Date
    _count: CriteriaCountAggregateOutputType | null
    _avg: CriteriaAvgAggregateOutputType | null
    _sum: CriteriaSumAggregateOutputType | null
    _min: CriteriaMinAggregateOutputType | null
    _max: CriteriaMaxAggregateOutputType | null
  }

  type GetCriteriaGroupByPayload<T extends CriteriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CriteriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CriteriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CriteriaGroupByOutputType[P]>
            : GetScalarType<T[P], CriteriaGroupByOutputType[P]>
        }
      >
    >


  export type CriteriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    criteriaId?: boolean
    criteriaName?: boolean
    type?: boolean
    weight?: boolean
    parentCriteriaId?: boolean
    createdAt?: boolean
    parentCriteria?: boolean | Criteria$parentCriteriaArgs<ExtArgs>
    childCriterias?: boolean | Criteria$childCriteriasArgs<ExtArgs>
    dssCriteriaAlternatives?: boolean | Criteria$dssCriteriaAlternativesArgs<ExtArgs>
    _count?: boolean | CriteriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["criteria"]>

  export type CriteriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    criteriaId?: boolean
    criteriaName?: boolean
    type?: boolean
    weight?: boolean
    parentCriteriaId?: boolean
    createdAt?: boolean
    parentCriteria?: boolean | Criteria$parentCriteriaArgs<ExtArgs>
  }, ExtArgs["result"]["criteria"]>

  export type CriteriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    criteriaId?: boolean
    criteriaName?: boolean
    type?: boolean
    weight?: boolean
    parentCriteriaId?: boolean
    createdAt?: boolean
    parentCriteria?: boolean | Criteria$parentCriteriaArgs<ExtArgs>
  }, ExtArgs["result"]["criteria"]>

  export type CriteriaSelectScalar = {
    criteriaId?: boolean
    criteriaName?: boolean
    type?: boolean
    weight?: boolean
    parentCriteriaId?: boolean
    createdAt?: boolean
  }

  export type CriteriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"criteriaId" | "criteriaName" | "type" | "weight" | "parentCriteriaId" | "createdAt", ExtArgs["result"]["criteria"]>
  export type CriteriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCriteria?: boolean | Criteria$parentCriteriaArgs<ExtArgs>
    childCriterias?: boolean | Criteria$childCriteriasArgs<ExtArgs>
    dssCriteriaAlternatives?: boolean | Criteria$dssCriteriaAlternativesArgs<ExtArgs>
    _count?: boolean | CriteriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CriteriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCriteria?: boolean | Criteria$parentCriteriaArgs<ExtArgs>
  }
  export type CriteriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCriteria?: boolean | Criteria$parentCriteriaArgs<ExtArgs>
  }

  export type $CriteriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Criteria"
    objects: {
      parentCriteria: Prisma.$CriteriaPayload<ExtArgs> | null
      childCriterias: Prisma.$CriteriaPayload<ExtArgs>[]
      dssCriteriaAlternatives: Prisma.$DssCriteriaAlternativePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      criteriaId: number
      criteriaName: string
      type: $Enums.CriteriaType
      weight: number
      parentCriteriaId: number | null
      createdAt: Date
    }, ExtArgs["result"]["criteria"]>
    composites: {}
  }

  type CriteriaGetPayload<S extends boolean | null | undefined | CriteriaDefaultArgs> = $Result.GetResult<Prisma.$CriteriaPayload, S>

  type CriteriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CriteriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CriteriaCountAggregateInputType | true
    }

  export interface CriteriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Criteria'], meta: { name: 'Criteria' } }
    /**
     * Find zero or one Criteria that matches the filter.
     * @param {CriteriaFindUniqueArgs} args - Arguments to find a Criteria
     * @example
     * // Get one Criteria
     * const criteria = await prisma.criteria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CriteriaFindUniqueArgs>(args: SelectSubset<T, CriteriaFindUniqueArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Criteria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CriteriaFindUniqueOrThrowArgs} args - Arguments to find a Criteria
     * @example
     * // Get one Criteria
     * const criteria = await prisma.criteria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CriteriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CriteriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaFindFirstArgs} args - Arguments to find a Criteria
     * @example
     * // Get one Criteria
     * const criteria = await prisma.criteria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CriteriaFindFirstArgs>(args?: SelectSubset<T, CriteriaFindFirstArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Criteria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaFindFirstOrThrowArgs} args - Arguments to find a Criteria
     * @example
     * // Get one Criteria
     * const criteria = await prisma.criteria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CriteriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CriteriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Criteria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Criteria
     * const criteria = await prisma.criteria.findMany()
     * 
     * // Get first 10 Criteria
     * const criteria = await prisma.criteria.findMany({ take: 10 })
     * 
     * // Only select the `criteriaId`
     * const criteriaWithCriteriaIdOnly = await prisma.criteria.findMany({ select: { criteriaId: true } })
     * 
     */
    findMany<T extends CriteriaFindManyArgs>(args?: SelectSubset<T, CriteriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Criteria.
     * @param {CriteriaCreateArgs} args - Arguments to create a Criteria.
     * @example
     * // Create one Criteria
     * const Criteria = await prisma.criteria.create({
     *   data: {
     *     // ... data to create a Criteria
     *   }
     * })
     * 
     */
    create<T extends CriteriaCreateArgs>(args: SelectSubset<T, CriteriaCreateArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Criteria.
     * @param {CriteriaCreateManyArgs} args - Arguments to create many Criteria.
     * @example
     * // Create many Criteria
     * const criteria = await prisma.criteria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CriteriaCreateManyArgs>(args?: SelectSubset<T, CriteriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Criteria and returns the data saved in the database.
     * @param {CriteriaCreateManyAndReturnArgs} args - Arguments to create many Criteria.
     * @example
     * // Create many Criteria
     * const criteria = await prisma.criteria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Criteria and only return the `criteriaId`
     * const criteriaWithCriteriaIdOnly = await prisma.criteria.createManyAndReturn({
     *   select: { criteriaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CriteriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CriteriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Criteria.
     * @param {CriteriaDeleteArgs} args - Arguments to delete one Criteria.
     * @example
     * // Delete one Criteria
     * const Criteria = await prisma.criteria.delete({
     *   where: {
     *     // ... filter to delete one Criteria
     *   }
     * })
     * 
     */
    delete<T extends CriteriaDeleteArgs>(args: SelectSubset<T, CriteriaDeleteArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Criteria.
     * @param {CriteriaUpdateArgs} args - Arguments to update one Criteria.
     * @example
     * // Update one Criteria
     * const criteria = await prisma.criteria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CriteriaUpdateArgs>(args: SelectSubset<T, CriteriaUpdateArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Criteria.
     * @param {CriteriaDeleteManyArgs} args - Arguments to filter Criteria to delete.
     * @example
     * // Delete a few Criteria
     * const { count } = await prisma.criteria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CriteriaDeleteManyArgs>(args?: SelectSubset<T, CriteriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Criteria
     * const criteria = await prisma.criteria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CriteriaUpdateManyArgs>(args: SelectSubset<T, CriteriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Criteria and returns the data updated in the database.
     * @param {CriteriaUpdateManyAndReturnArgs} args - Arguments to update many Criteria.
     * @example
     * // Update many Criteria
     * const criteria = await prisma.criteria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Criteria and only return the `criteriaId`
     * const criteriaWithCriteriaIdOnly = await prisma.criteria.updateManyAndReturn({
     *   select: { criteriaId: true },
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
    updateManyAndReturn<T extends CriteriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CriteriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Criteria.
     * @param {CriteriaUpsertArgs} args - Arguments to update or create a Criteria.
     * @example
     * // Update or create a Criteria
     * const criteria = await prisma.criteria.upsert({
     *   create: {
     *     // ... data to create a Criteria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Criteria we want to update
     *   }
     * })
     */
    upsert<T extends CriteriaUpsertArgs>(args: SelectSubset<T, CriteriaUpsertArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaCountArgs} args - Arguments to filter Criteria to count.
     * @example
     * // Count the number of Criteria
     * const count = await prisma.criteria.count({
     *   where: {
     *     // ... the filter for the Criteria we want to count
     *   }
     * })
    **/
    count<T extends CriteriaCountArgs>(
      args?: Subset<T, CriteriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CriteriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CriteriaAggregateArgs>(args: Subset<T, CriteriaAggregateArgs>): Prisma.PrismaPromise<GetCriteriaAggregateType<T>>

    /**
     * Group by Criteria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CriteriaGroupByArgs} args - Group by arguments.
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
      T extends CriteriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CriteriaGroupByArgs['orderBy'] }
        : { orderBy?: CriteriaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CriteriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCriteriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Criteria model
   */
  readonly fields: CriteriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Criteria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CriteriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parentCriteria<T extends Criteria$parentCriteriaArgs<ExtArgs> = {}>(args?: Subset<T, Criteria$parentCriteriaArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    childCriterias<T extends Criteria$childCriteriasArgs<ExtArgs> = {}>(args?: Subset<T, Criteria$childCriteriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dssCriteriaAlternatives<T extends Criteria$dssCriteriaAlternativesArgs<ExtArgs> = {}>(args?: Subset<T, Criteria$dssCriteriaAlternativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Criteria model
   */
  interface CriteriaFieldRefs {
    readonly criteriaId: FieldRef<"Criteria", 'Int'>
    readonly criteriaName: FieldRef<"Criteria", 'String'>
    readonly type: FieldRef<"Criteria", 'CriteriaType'>
    readonly weight: FieldRef<"Criteria", 'Float'>
    readonly parentCriteriaId: FieldRef<"Criteria", 'Int'>
    readonly createdAt: FieldRef<"Criteria", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Criteria findUnique
   */
  export type CriteriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where: CriteriaWhereUniqueInput
  }

  /**
   * Criteria findUniqueOrThrow
   */
  export type CriteriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where: CriteriaWhereUniqueInput
  }

  /**
   * Criteria findFirst
   */
  export type CriteriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where?: CriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriteriaOrderByWithRelationInput | CriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Criteria.
     */
    cursor?: CriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Criteria.
     */
    distinct?: CriteriaScalarFieldEnum | CriteriaScalarFieldEnum[]
  }

  /**
   * Criteria findFirstOrThrow
   */
  export type CriteriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where?: CriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriteriaOrderByWithRelationInput | CriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Criteria.
     */
    cursor?: CriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Criteria.
     */
    distinct?: CriteriaScalarFieldEnum | CriteriaScalarFieldEnum[]
  }

  /**
   * Criteria findMany
   */
  export type CriteriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter, which Criteria to fetch.
     */
    where?: CriteriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Criteria to fetch.
     */
    orderBy?: CriteriaOrderByWithRelationInput | CriteriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Criteria.
     */
    cursor?: CriteriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Criteria from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Criteria.
     */
    skip?: number
    distinct?: CriteriaScalarFieldEnum | CriteriaScalarFieldEnum[]
  }

  /**
   * Criteria create
   */
  export type CriteriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Criteria.
     */
    data: XOR<CriteriaCreateInput, CriteriaUncheckedCreateInput>
  }

  /**
   * Criteria createMany
   */
  export type CriteriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Criteria.
     */
    data: CriteriaCreateManyInput | CriteriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Criteria createManyAndReturn
   */
  export type CriteriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * The data used to create many Criteria.
     */
    data: CriteriaCreateManyInput | CriteriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Criteria update
   */
  export type CriteriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Criteria.
     */
    data: XOR<CriteriaUpdateInput, CriteriaUncheckedUpdateInput>
    /**
     * Choose, which Criteria to update.
     */
    where: CriteriaWhereUniqueInput
  }

  /**
   * Criteria updateMany
   */
  export type CriteriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Criteria.
     */
    data: XOR<CriteriaUpdateManyMutationInput, CriteriaUncheckedUpdateManyInput>
    /**
     * Filter which Criteria to update
     */
    where?: CriteriaWhereInput
    /**
     * Limit how many Criteria to update.
     */
    limit?: number
  }

  /**
   * Criteria updateManyAndReturn
   */
  export type CriteriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * The data used to update Criteria.
     */
    data: XOR<CriteriaUpdateManyMutationInput, CriteriaUncheckedUpdateManyInput>
    /**
     * Filter which Criteria to update
     */
    where?: CriteriaWhereInput
    /**
     * Limit how many Criteria to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Criteria upsert
   */
  export type CriteriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Criteria to update in case it exists.
     */
    where: CriteriaWhereUniqueInput
    /**
     * In case the Criteria found by the `where` argument doesn't exist, create a new Criteria with this data.
     */
    create: XOR<CriteriaCreateInput, CriteriaUncheckedCreateInput>
    /**
     * In case the Criteria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CriteriaUpdateInput, CriteriaUncheckedUpdateInput>
  }

  /**
   * Criteria delete
   */
  export type CriteriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    /**
     * Filter which Criteria to delete.
     */
    where: CriteriaWhereUniqueInput
  }

  /**
   * Criteria deleteMany
   */
  export type CriteriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Criteria to delete
     */
    where?: CriteriaWhereInput
    /**
     * Limit how many Criteria to delete.
     */
    limit?: number
  }

  /**
   * Criteria.parentCriteria
   */
  export type Criteria$parentCriteriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    where?: CriteriaWhereInput
  }

  /**
   * Criteria.childCriterias
   */
  export type Criteria$childCriteriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
    where?: CriteriaWhereInput
    orderBy?: CriteriaOrderByWithRelationInput | CriteriaOrderByWithRelationInput[]
    cursor?: CriteriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CriteriaScalarFieldEnum | CriteriaScalarFieldEnum[]
  }

  /**
   * Criteria.dssCriteriaAlternatives
   */
  export type Criteria$dssCriteriaAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    where?: DssCriteriaAlternativeWhereInput
    orderBy?: DssCriteriaAlternativeOrderByWithRelationInput | DssCriteriaAlternativeOrderByWithRelationInput[]
    cursor?: DssCriteriaAlternativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DssCriteriaAlternativeScalarFieldEnum | DssCriteriaAlternativeScalarFieldEnum[]
  }

  /**
   * Criteria without action
   */
  export type CriteriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Criteria
     */
    select?: CriteriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Criteria
     */
    omit?: CriteriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CriteriaInclude<ExtArgs> | null
  }


  /**
   * Model Dss
   */

  export type AggregateDss = {
    _count: DssCountAggregateOutputType | null
    _avg: DssAvgAggregateOutputType | null
    _sum: DssSumAggregateOutputType | null
    _min: DssMinAggregateOutputType | null
    _max: DssMaxAggregateOutputType | null
  }

  export type DssAvgAggregateOutputType = {
    dssId: number | null
  }

  export type DssSumAggregateOutputType = {
    dssId: number | null
  }

  export type DssMinAggregateOutputType = {
    dssId: number | null
    creator: string | null
    createdAt: Date | null
  }

  export type DssMaxAggregateOutputType = {
    dssId: number | null
    creator: string | null
    createdAt: Date | null
  }

  export type DssCountAggregateOutputType = {
    dssId: number
    creator: number
    createdAt: number
    _all: number
  }


  export type DssAvgAggregateInputType = {
    dssId?: true
  }

  export type DssSumAggregateInputType = {
    dssId?: true
  }

  export type DssMinAggregateInputType = {
    dssId?: true
    creator?: true
    createdAt?: true
  }

  export type DssMaxAggregateInputType = {
    dssId?: true
    creator?: true
    createdAt?: true
  }

  export type DssCountAggregateInputType = {
    dssId?: true
    creator?: true
    createdAt?: true
    _all?: true
  }

  export type DssAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dss to aggregate.
     */
    where?: DssWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dsses to fetch.
     */
    orderBy?: DssOrderByWithRelationInput | DssOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DssWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dsses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dsses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dsses
    **/
    _count?: true | DssCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DssAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DssSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DssMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DssMaxAggregateInputType
  }

  export type GetDssAggregateType<T extends DssAggregateArgs> = {
        [P in keyof T & keyof AggregateDss]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDss[P]>
      : GetScalarType<T[P], AggregateDss[P]>
  }




  export type DssGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DssWhereInput
    orderBy?: DssOrderByWithAggregationInput | DssOrderByWithAggregationInput[]
    by: DssScalarFieldEnum[] | DssScalarFieldEnum
    having?: DssScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DssCountAggregateInputType | true
    _avg?: DssAvgAggregateInputType
    _sum?: DssSumAggregateInputType
    _min?: DssMinAggregateInputType
    _max?: DssMaxAggregateInputType
  }

  export type DssGroupByOutputType = {
    dssId: number
    creator: string
    createdAt: Date
    _count: DssCountAggregateOutputType | null
    _avg: DssAvgAggregateOutputType | null
    _sum: DssSumAggregateOutputType | null
    _min: DssMinAggregateOutputType | null
    _max: DssMaxAggregateOutputType | null
  }

  type GetDssGroupByPayload<T extends DssGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DssGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DssGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DssGroupByOutputType[P]>
            : GetScalarType<T[P], DssGroupByOutputType[P]>
        }
      >
    >


  export type DssSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dssId?: boolean
    creator?: boolean
    createdAt?: boolean
    dssAlternatives?: boolean | Dss$dssAlternativesArgs<ExtArgs>
    dssCriteriaAlternatives?: boolean | Dss$dssCriteriaAlternativesArgs<ExtArgs>
    _count?: boolean | DssCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dss"]>

  export type DssSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dssId?: boolean
    creator?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dss"]>

  export type DssSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dssId?: boolean
    creator?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dss"]>

  export type DssSelectScalar = {
    dssId?: boolean
    creator?: boolean
    createdAt?: boolean
  }

  export type DssOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dssId" | "creator" | "createdAt", ExtArgs["result"]["dss"]>
  export type DssInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dssAlternatives?: boolean | Dss$dssAlternativesArgs<ExtArgs>
    dssCriteriaAlternatives?: boolean | Dss$dssCriteriaAlternativesArgs<ExtArgs>
    _count?: boolean | DssCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DssIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DssIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DssPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dss"
    objects: {
      dssAlternatives: Prisma.$DssAlternativePayload<ExtArgs>[]
      dssCriteriaAlternatives: Prisma.$DssCriteriaAlternativePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      dssId: number
      creator: string
      createdAt: Date
    }, ExtArgs["result"]["dss"]>
    composites: {}
  }

  type DssGetPayload<S extends boolean | null | undefined | DssDefaultArgs> = $Result.GetResult<Prisma.$DssPayload, S>

  type DssCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DssFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DssCountAggregateInputType | true
    }

  export interface DssDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dss'], meta: { name: 'Dss' } }
    /**
     * Find zero or one Dss that matches the filter.
     * @param {DssFindUniqueArgs} args - Arguments to find a Dss
     * @example
     * // Get one Dss
     * const dss = await prisma.dss.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DssFindUniqueArgs>(args: SelectSubset<T, DssFindUniqueArgs<ExtArgs>>): Prisma__DssClient<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dss that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DssFindUniqueOrThrowArgs} args - Arguments to find a Dss
     * @example
     * // Get one Dss
     * const dss = await prisma.dss.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DssFindUniqueOrThrowArgs>(args: SelectSubset<T, DssFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DssClient<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dss that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssFindFirstArgs} args - Arguments to find a Dss
     * @example
     * // Get one Dss
     * const dss = await prisma.dss.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DssFindFirstArgs>(args?: SelectSubset<T, DssFindFirstArgs<ExtArgs>>): Prisma__DssClient<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dss that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssFindFirstOrThrowArgs} args - Arguments to find a Dss
     * @example
     * // Get one Dss
     * const dss = await prisma.dss.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DssFindFirstOrThrowArgs>(args?: SelectSubset<T, DssFindFirstOrThrowArgs<ExtArgs>>): Prisma__DssClient<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dsses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dsses
     * const dsses = await prisma.dss.findMany()
     * 
     * // Get first 10 Dsses
     * const dsses = await prisma.dss.findMany({ take: 10 })
     * 
     * // Only select the `dssId`
     * const dssWithDssIdOnly = await prisma.dss.findMany({ select: { dssId: true } })
     * 
     */
    findMany<T extends DssFindManyArgs>(args?: SelectSubset<T, DssFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dss.
     * @param {DssCreateArgs} args - Arguments to create a Dss.
     * @example
     * // Create one Dss
     * const Dss = await prisma.dss.create({
     *   data: {
     *     // ... data to create a Dss
     *   }
     * })
     * 
     */
    create<T extends DssCreateArgs>(args: SelectSubset<T, DssCreateArgs<ExtArgs>>): Prisma__DssClient<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dsses.
     * @param {DssCreateManyArgs} args - Arguments to create many Dsses.
     * @example
     * // Create many Dsses
     * const dss = await prisma.dss.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DssCreateManyArgs>(args?: SelectSubset<T, DssCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dsses and returns the data saved in the database.
     * @param {DssCreateManyAndReturnArgs} args - Arguments to create many Dsses.
     * @example
     * // Create many Dsses
     * const dss = await prisma.dss.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dsses and only return the `dssId`
     * const dssWithDssIdOnly = await prisma.dss.createManyAndReturn({
     *   select: { dssId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DssCreateManyAndReturnArgs>(args?: SelectSubset<T, DssCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dss.
     * @param {DssDeleteArgs} args - Arguments to delete one Dss.
     * @example
     * // Delete one Dss
     * const Dss = await prisma.dss.delete({
     *   where: {
     *     // ... filter to delete one Dss
     *   }
     * })
     * 
     */
    delete<T extends DssDeleteArgs>(args: SelectSubset<T, DssDeleteArgs<ExtArgs>>): Prisma__DssClient<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dss.
     * @param {DssUpdateArgs} args - Arguments to update one Dss.
     * @example
     * // Update one Dss
     * const dss = await prisma.dss.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DssUpdateArgs>(args: SelectSubset<T, DssUpdateArgs<ExtArgs>>): Prisma__DssClient<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dsses.
     * @param {DssDeleteManyArgs} args - Arguments to filter Dsses to delete.
     * @example
     * // Delete a few Dsses
     * const { count } = await prisma.dss.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DssDeleteManyArgs>(args?: SelectSubset<T, DssDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dsses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dsses
     * const dss = await prisma.dss.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DssUpdateManyArgs>(args: SelectSubset<T, DssUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dsses and returns the data updated in the database.
     * @param {DssUpdateManyAndReturnArgs} args - Arguments to update many Dsses.
     * @example
     * // Update many Dsses
     * const dss = await prisma.dss.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dsses and only return the `dssId`
     * const dssWithDssIdOnly = await prisma.dss.updateManyAndReturn({
     *   select: { dssId: true },
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
    updateManyAndReturn<T extends DssUpdateManyAndReturnArgs>(args: SelectSubset<T, DssUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dss.
     * @param {DssUpsertArgs} args - Arguments to update or create a Dss.
     * @example
     * // Update or create a Dss
     * const dss = await prisma.dss.upsert({
     *   create: {
     *     // ... data to create a Dss
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dss we want to update
     *   }
     * })
     */
    upsert<T extends DssUpsertArgs>(args: SelectSubset<T, DssUpsertArgs<ExtArgs>>): Prisma__DssClient<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dsses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssCountArgs} args - Arguments to filter Dsses to count.
     * @example
     * // Count the number of Dsses
     * const count = await prisma.dss.count({
     *   where: {
     *     // ... the filter for the Dsses we want to count
     *   }
     * })
    **/
    count<T extends DssCountArgs>(
      args?: Subset<T, DssCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DssCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DssAggregateArgs>(args: Subset<T, DssAggregateArgs>): Prisma.PrismaPromise<GetDssAggregateType<T>>

    /**
     * Group by Dss.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssGroupByArgs} args - Group by arguments.
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
      T extends DssGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DssGroupByArgs['orderBy'] }
        : { orderBy?: DssGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DssGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDssGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dss model
   */
  readonly fields: DssFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dss.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DssClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dssAlternatives<T extends Dss$dssAlternativesArgs<ExtArgs> = {}>(args?: Subset<T, Dss$dssAlternativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dssCriteriaAlternatives<T extends Dss$dssCriteriaAlternativesArgs<ExtArgs> = {}>(args?: Subset<T, Dss$dssCriteriaAlternativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dss model
   */
  interface DssFieldRefs {
    readonly dssId: FieldRef<"Dss", 'Int'>
    readonly creator: FieldRef<"Dss", 'String'>
    readonly createdAt: FieldRef<"Dss", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dss findUnique
   */
  export type DssFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssInclude<ExtArgs> | null
    /**
     * Filter, which Dss to fetch.
     */
    where: DssWhereUniqueInput
  }

  /**
   * Dss findUniqueOrThrow
   */
  export type DssFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssInclude<ExtArgs> | null
    /**
     * Filter, which Dss to fetch.
     */
    where: DssWhereUniqueInput
  }

  /**
   * Dss findFirst
   */
  export type DssFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssInclude<ExtArgs> | null
    /**
     * Filter, which Dss to fetch.
     */
    where?: DssWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dsses to fetch.
     */
    orderBy?: DssOrderByWithRelationInput | DssOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dsses.
     */
    cursor?: DssWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dsses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dsses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dsses.
     */
    distinct?: DssScalarFieldEnum | DssScalarFieldEnum[]
  }

  /**
   * Dss findFirstOrThrow
   */
  export type DssFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssInclude<ExtArgs> | null
    /**
     * Filter, which Dss to fetch.
     */
    where?: DssWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dsses to fetch.
     */
    orderBy?: DssOrderByWithRelationInput | DssOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dsses.
     */
    cursor?: DssWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dsses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dsses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dsses.
     */
    distinct?: DssScalarFieldEnum | DssScalarFieldEnum[]
  }

  /**
   * Dss findMany
   */
  export type DssFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssInclude<ExtArgs> | null
    /**
     * Filter, which Dsses to fetch.
     */
    where?: DssWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dsses to fetch.
     */
    orderBy?: DssOrderByWithRelationInput | DssOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dsses.
     */
    cursor?: DssWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dsses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dsses.
     */
    skip?: number
    distinct?: DssScalarFieldEnum | DssScalarFieldEnum[]
  }

  /**
   * Dss create
   */
  export type DssCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssInclude<ExtArgs> | null
    /**
     * The data needed to create a Dss.
     */
    data: XOR<DssCreateInput, DssUncheckedCreateInput>
  }

  /**
   * Dss createMany
   */
  export type DssCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dsses.
     */
    data: DssCreateManyInput | DssCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dss createManyAndReturn
   */
  export type DssCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * The data used to create many Dsses.
     */
    data: DssCreateManyInput | DssCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dss update
   */
  export type DssUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssInclude<ExtArgs> | null
    /**
     * The data needed to update a Dss.
     */
    data: XOR<DssUpdateInput, DssUncheckedUpdateInput>
    /**
     * Choose, which Dss to update.
     */
    where: DssWhereUniqueInput
  }

  /**
   * Dss updateMany
   */
  export type DssUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dsses.
     */
    data: XOR<DssUpdateManyMutationInput, DssUncheckedUpdateManyInput>
    /**
     * Filter which Dsses to update
     */
    where?: DssWhereInput
    /**
     * Limit how many Dsses to update.
     */
    limit?: number
  }

  /**
   * Dss updateManyAndReturn
   */
  export type DssUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * The data used to update Dsses.
     */
    data: XOR<DssUpdateManyMutationInput, DssUncheckedUpdateManyInput>
    /**
     * Filter which Dsses to update
     */
    where?: DssWhereInput
    /**
     * Limit how many Dsses to update.
     */
    limit?: number
  }

  /**
   * Dss upsert
   */
  export type DssUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssInclude<ExtArgs> | null
    /**
     * The filter to search for the Dss to update in case it exists.
     */
    where: DssWhereUniqueInput
    /**
     * In case the Dss found by the `where` argument doesn't exist, create a new Dss with this data.
     */
    create: XOR<DssCreateInput, DssUncheckedCreateInput>
    /**
     * In case the Dss was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DssUpdateInput, DssUncheckedUpdateInput>
  }

  /**
   * Dss delete
   */
  export type DssDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssInclude<ExtArgs> | null
    /**
     * Filter which Dss to delete.
     */
    where: DssWhereUniqueInput
  }

  /**
   * Dss deleteMany
   */
  export type DssDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dsses to delete
     */
    where?: DssWhereInput
    /**
     * Limit how many Dsses to delete.
     */
    limit?: number
  }

  /**
   * Dss.dssAlternatives
   */
  export type Dss$dssAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
    where?: DssAlternativeWhereInput
    orderBy?: DssAlternativeOrderByWithRelationInput | DssAlternativeOrderByWithRelationInput[]
    cursor?: DssAlternativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DssAlternativeScalarFieldEnum | DssAlternativeScalarFieldEnum[]
  }

  /**
   * Dss.dssCriteriaAlternatives
   */
  export type Dss$dssCriteriaAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    where?: DssCriteriaAlternativeWhereInput
    orderBy?: DssCriteriaAlternativeOrderByWithRelationInput | DssCriteriaAlternativeOrderByWithRelationInput[]
    cursor?: DssCriteriaAlternativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DssCriteriaAlternativeScalarFieldEnum | DssCriteriaAlternativeScalarFieldEnum[]
  }

  /**
   * Dss without action
   */
  export type DssDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dss
     */
    select?: DssSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dss
     */
    omit?: DssOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssInclude<ExtArgs> | null
  }


  /**
   * Model DssAlternative
   */

  export type AggregateDssAlternative = {
    _count: DssAlternativeCountAggregateOutputType | null
    _avg: DssAlternativeAvgAggregateOutputType | null
    _sum: DssAlternativeSumAggregateOutputType | null
    _min: DssAlternativeMinAggregateOutputType | null
    _max: DssAlternativeMaxAggregateOutputType | null
  }

  export type DssAlternativeAvgAggregateOutputType = {
    dssAlternativeId: number | null
    dssId: number | null
    sValue: number | null
    rankValue: number | null
  }

  export type DssAlternativeSumAggregateOutputType = {
    dssAlternativeId: number | null
    dssId: number | null
    sValue: number | null
    rankValue: number | null
  }

  export type DssAlternativeMinAggregateOutputType = {
    dssAlternativeId: number | null
    dssId: number | null
    name: string | null
    sValue: number | null
    rankValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DssAlternativeMaxAggregateOutputType = {
    dssAlternativeId: number | null
    dssId: number | null
    name: string | null
    sValue: number | null
    rankValue: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DssAlternativeCountAggregateOutputType = {
    dssAlternativeId: number
    dssId: number
    name: number
    sValue: number
    rankValue: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DssAlternativeAvgAggregateInputType = {
    dssAlternativeId?: true
    dssId?: true
    sValue?: true
    rankValue?: true
  }

  export type DssAlternativeSumAggregateInputType = {
    dssAlternativeId?: true
    dssId?: true
    sValue?: true
    rankValue?: true
  }

  export type DssAlternativeMinAggregateInputType = {
    dssAlternativeId?: true
    dssId?: true
    name?: true
    sValue?: true
    rankValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DssAlternativeMaxAggregateInputType = {
    dssAlternativeId?: true
    dssId?: true
    name?: true
    sValue?: true
    rankValue?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DssAlternativeCountAggregateInputType = {
    dssAlternativeId?: true
    dssId?: true
    name?: true
    sValue?: true
    rankValue?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DssAlternativeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DssAlternative to aggregate.
     */
    where?: DssAlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DssAlternatives to fetch.
     */
    orderBy?: DssAlternativeOrderByWithRelationInput | DssAlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DssAlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DssAlternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DssAlternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DssAlternatives
    **/
    _count?: true | DssAlternativeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DssAlternativeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DssAlternativeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DssAlternativeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DssAlternativeMaxAggregateInputType
  }

  export type GetDssAlternativeAggregateType<T extends DssAlternativeAggregateArgs> = {
        [P in keyof T & keyof AggregateDssAlternative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDssAlternative[P]>
      : GetScalarType<T[P], AggregateDssAlternative[P]>
  }




  export type DssAlternativeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DssAlternativeWhereInput
    orderBy?: DssAlternativeOrderByWithAggregationInput | DssAlternativeOrderByWithAggregationInput[]
    by: DssAlternativeScalarFieldEnum[] | DssAlternativeScalarFieldEnum
    having?: DssAlternativeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DssAlternativeCountAggregateInputType | true
    _avg?: DssAlternativeAvgAggregateInputType
    _sum?: DssAlternativeSumAggregateInputType
    _min?: DssAlternativeMinAggregateInputType
    _max?: DssAlternativeMaxAggregateInputType
  }

  export type DssAlternativeGroupByOutputType = {
    dssAlternativeId: number
    dssId: number
    name: string
    sValue: number | null
    rankValue: number | null
    createdAt: Date
    updatedAt: Date
    _count: DssAlternativeCountAggregateOutputType | null
    _avg: DssAlternativeAvgAggregateOutputType | null
    _sum: DssAlternativeSumAggregateOutputType | null
    _min: DssAlternativeMinAggregateOutputType | null
    _max: DssAlternativeMaxAggregateOutputType | null
  }

  type GetDssAlternativeGroupByPayload<T extends DssAlternativeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DssAlternativeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DssAlternativeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DssAlternativeGroupByOutputType[P]>
            : GetScalarType<T[P], DssAlternativeGroupByOutputType[P]>
        }
      >
    >


  export type DssAlternativeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dssAlternativeId?: boolean
    dssId?: boolean
    name?: boolean
    sValue?: boolean
    rankValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dss?: boolean | DssDefaultArgs<ExtArgs>
    dssCriteriaAlternatives?: boolean | DssAlternative$dssCriteriaAlternativesArgs<ExtArgs>
    _count?: boolean | DssAlternativeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dssAlternative"]>

  export type DssAlternativeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dssAlternativeId?: boolean
    dssId?: boolean
    name?: boolean
    sValue?: boolean
    rankValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dss?: boolean | DssDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dssAlternative"]>

  export type DssAlternativeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dssAlternativeId?: boolean
    dssId?: boolean
    name?: boolean
    sValue?: boolean
    rankValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dss?: boolean | DssDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dssAlternative"]>

  export type DssAlternativeSelectScalar = {
    dssAlternativeId?: boolean
    dssId?: boolean
    name?: boolean
    sValue?: boolean
    rankValue?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DssAlternativeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dssAlternativeId" | "dssId" | "name" | "sValue" | "rankValue" | "createdAt" | "updatedAt", ExtArgs["result"]["dssAlternative"]>
  export type DssAlternativeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dss?: boolean | DssDefaultArgs<ExtArgs>
    dssCriteriaAlternatives?: boolean | DssAlternative$dssCriteriaAlternativesArgs<ExtArgs>
    _count?: boolean | DssAlternativeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DssAlternativeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dss?: boolean | DssDefaultArgs<ExtArgs>
  }
  export type DssAlternativeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dss?: boolean | DssDefaultArgs<ExtArgs>
  }

  export type $DssAlternativePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DssAlternative"
    objects: {
      dss: Prisma.$DssPayload<ExtArgs>
      dssCriteriaAlternatives: Prisma.$DssCriteriaAlternativePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      dssAlternativeId: number
      dssId: number
      name: string
      sValue: number | null
      rankValue: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dssAlternative"]>
    composites: {}
  }

  type DssAlternativeGetPayload<S extends boolean | null | undefined | DssAlternativeDefaultArgs> = $Result.GetResult<Prisma.$DssAlternativePayload, S>

  type DssAlternativeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DssAlternativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DssAlternativeCountAggregateInputType | true
    }

  export interface DssAlternativeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DssAlternative'], meta: { name: 'DssAlternative' } }
    /**
     * Find zero or one DssAlternative that matches the filter.
     * @param {DssAlternativeFindUniqueArgs} args - Arguments to find a DssAlternative
     * @example
     * // Get one DssAlternative
     * const dssAlternative = await prisma.dssAlternative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DssAlternativeFindUniqueArgs>(args: SelectSubset<T, DssAlternativeFindUniqueArgs<ExtArgs>>): Prisma__DssAlternativeClient<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DssAlternative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DssAlternativeFindUniqueOrThrowArgs} args - Arguments to find a DssAlternative
     * @example
     * // Get one DssAlternative
     * const dssAlternative = await prisma.dssAlternative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DssAlternativeFindUniqueOrThrowArgs>(args: SelectSubset<T, DssAlternativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DssAlternativeClient<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DssAlternative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssAlternativeFindFirstArgs} args - Arguments to find a DssAlternative
     * @example
     * // Get one DssAlternative
     * const dssAlternative = await prisma.dssAlternative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DssAlternativeFindFirstArgs>(args?: SelectSubset<T, DssAlternativeFindFirstArgs<ExtArgs>>): Prisma__DssAlternativeClient<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DssAlternative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssAlternativeFindFirstOrThrowArgs} args - Arguments to find a DssAlternative
     * @example
     * // Get one DssAlternative
     * const dssAlternative = await prisma.dssAlternative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DssAlternativeFindFirstOrThrowArgs>(args?: SelectSubset<T, DssAlternativeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DssAlternativeClient<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DssAlternatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssAlternativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DssAlternatives
     * const dssAlternatives = await prisma.dssAlternative.findMany()
     * 
     * // Get first 10 DssAlternatives
     * const dssAlternatives = await prisma.dssAlternative.findMany({ take: 10 })
     * 
     * // Only select the `dssAlternativeId`
     * const dssAlternativeWithDssAlternativeIdOnly = await prisma.dssAlternative.findMany({ select: { dssAlternativeId: true } })
     * 
     */
    findMany<T extends DssAlternativeFindManyArgs>(args?: SelectSubset<T, DssAlternativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DssAlternative.
     * @param {DssAlternativeCreateArgs} args - Arguments to create a DssAlternative.
     * @example
     * // Create one DssAlternative
     * const DssAlternative = await prisma.dssAlternative.create({
     *   data: {
     *     // ... data to create a DssAlternative
     *   }
     * })
     * 
     */
    create<T extends DssAlternativeCreateArgs>(args: SelectSubset<T, DssAlternativeCreateArgs<ExtArgs>>): Prisma__DssAlternativeClient<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DssAlternatives.
     * @param {DssAlternativeCreateManyArgs} args - Arguments to create many DssAlternatives.
     * @example
     * // Create many DssAlternatives
     * const dssAlternative = await prisma.dssAlternative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DssAlternativeCreateManyArgs>(args?: SelectSubset<T, DssAlternativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DssAlternatives and returns the data saved in the database.
     * @param {DssAlternativeCreateManyAndReturnArgs} args - Arguments to create many DssAlternatives.
     * @example
     * // Create many DssAlternatives
     * const dssAlternative = await prisma.dssAlternative.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DssAlternatives and only return the `dssAlternativeId`
     * const dssAlternativeWithDssAlternativeIdOnly = await prisma.dssAlternative.createManyAndReturn({
     *   select: { dssAlternativeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DssAlternativeCreateManyAndReturnArgs>(args?: SelectSubset<T, DssAlternativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DssAlternative.
     * @param {DssAlternativeDeleteArgs} args - Arguments to delete one DssAlternative.
     * @example
     * // Delete one DssAlternative
     * const DssAlternative = await prisma.dssAlternative.delete({
     *   where: {
     *     // ... filter to delete one DssAlternative
     *   }
     * })
     * 
     */
    delete<T extends DssAlternativeDeleteArgs>(args: SelectSubset<T, DssAlternativeDeleteArgs<ExtArgs>>): Prisma__DssAlternativeClient<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DssAlternative.
     * @param {DssAlternativeUpdateArgs} args - Arguments to update one DssAlternative.
     * @example
     * // Update one DssAlternative
     * const dssAlternative = await prisma.dssAlternative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DssAlternativeUpdateArgs>(args: SelectSubset<T, DssAlternativeUpdateArgs<ExtArgs>>): Prisma__DssAlternativeClient<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DssAlternatives.
     * @param {DssAlternativeDeleteManyArgs} args - Arguments to filter DssAlternatives to delete.
     * @example
     * // Delete a few DssAlternatives
     * const { count } = await prisma.dssAlternative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DssAlternativeDeleteManyArgs>(args?: SelectSubset<T, DssAlternativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DssAlternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssAlternativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DssAlternatives
     * const dssAlternative = await prisma.dssAlternative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DssAlternativeUpdateManyArgs>(args: SelectSubset<T, DssAlternativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DssAlternatives and returns the data updated in the database.
     * @param {DssAlternativeUpdateManyAndReturnArgs} args - Arguments to update many DssAlternatives.
     * @example
     * // Update many DssAlternatives
     * const dssAlternative = await prisma.dssAlternative.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DssAlternatives and only return the `dssAlternativeId`
     * const dssAlternativeWithDssAlternativeIdOnly = await prisma.dssAlternative.updateManyAndReturn({
     *   select: { dssAlternativeId: true },
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
    updateManyAndReturn<T extends DssAlternativeUpdateManyAndReturnArgs>(args: SelectSubset<T, DssAlternativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DssAlternative.
     * @param {DssAlternativeUpsertArgs} args - Arguments to update or create a DssAlternative.
     * @example
     * // Update or create a DssAlternative
     * const dssAlternative = await prisma.dssAlternative.upsert({
     *   create: {
     *     // ... data to create a DssAlternative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DssAlternative we want to update
     *   }
     * })
     */
    upsert<T extends DssAlternativeUpsertArgs>(args: SelectSubset<T, DssAlternativeUpsertArgs<ExtArgs>>): Prisma__DssAlternativeClient<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DssAlternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssAlternativeCountArgs} args - Arguments to filter DssAlternatives to count.
     * @example
     * // Count the number of DssAlternatives
     * const count = await prisma.dssAlternative.count({
     *   where: {
     *     // ... the filter for the DssAlternatives we want to count
     *   }
     * })
    **/
    count<T extends DssAlternativeCountArgs>(
      args?: Subset<T, DssAlternativeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DssAlternativeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DssAlternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssAlternativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DssAlternativeAggregateArgs>(args: Subset<T, DssAlternativeAggregateArgs>): Prisma.PrismaPromise<GetDssAlternativeAggregateType<T>>

    /**
     * Group by DssAlternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssAlternativeGroupByArgs} args - Group by arguments.
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
      T extends DssAlternativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DssAlternativeGroupByArgs['orderBy'] }
        : { orderBy?: DssAlternativeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DssAlternativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDssAlternativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DssAlternative model
   */
  readonly fields: DssAlternativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DssAlternative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DssAlternativeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dss<T extends DssDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DssDefaultArgs<ExtArgs>>): Prisma__DssClient<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dssCriteriaAlternatives<T extends DssAlternative$dssCriteriaAlternativesArgs<ExtArgs> = {}>(args?: Subset<T, DssAlternative$dssCriteriaAlternativesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DssAlternative model
   */
  interface DssAlternativeFieldRefs {
    readonly dssAlternativeId: FieldRef<"DssAlternative", 'Int'>
    readonly dssId: FieldRef<"DssAlternative", 'Int'>
    readonly name: FieldRef<"DssAlternative", 'String'>
    readonly sValue: FieldRef<"DssAlternative", 'Float'>
    readonly rankValue: FieldRef<"DssAlternative", 'Int'>
    readonly createdAt: FieldRef<"DssAlternative", 'DateTime'>
    readonly updatedAt: FieldRef<"DssAlternative", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DssAlternative findUnique
   */
  export type DssAlternativeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
    /**
     * Filter, which DssAlternative to fetch.
     */
    where: DssAlternativeWhereUniqueInput
  }

  /**
   * DssAlternative findUniqueOrThrow
   */
  export type DssAlternativeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
    /**
     * Filter, which DssAlternative to fetch.
     */
    where: DssAlternativeWhereUniqueInput
  }

  /**
   * DssAlternative findFirst
   */
  export type DssAlternativeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
    /**
     * Filter, which DssAlternative to fetch.
     */
    where?: DssAlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DssAlternatives to fetch.
     */
    orderBy?: DssAlternativeOrderByWithRelationInput | DssAlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DssAlternatives.
     */
    cursor?: DssAlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DssAlternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DssAlternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DssAlternatives.
     */
    distinct?: DssAlternativeScalarFieldEnum | DssAlternativeScalarFieldEnum[]
  }

  /**
   * DssAlternative findFirstOrThrow
   */
  export type DssAlternativeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
    /**
     * Filter, which DssAlternative to fetch.
     */
    where?: DssAlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DssAlternatives to fetch.
     */
    orderBy?: DssAlternativeOrderByWithRelationInput | DssAlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DssAlternatives.
     */
    cursor?: DssAlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DssAlternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DssAlternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DssAlternatives.
     */
    distinct?: DssAlternativeScalarFieldEnum | DssAlternativeScalarFieldEnum[]
  }

  /**
   * DssAlternative findMany
   */
  export type DssAlternativeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
    /**
     * Filter, which DssAlternatives to fetch.
     */
    where?: DssAlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DssAlternatives to fetch.
     */
    orderBy?: DssAlternativeOrderByWithRelationInput | DssAlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DssAlternatives.
     */
    cursor?: DssAlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DssAlternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DssAlternatives.
     */
    skip?: number
    distinct?: DssAlternativeScalarFieldEnum | DssAlternativeScalarFieldEnum[]
  }

  /**
   * DssAlternative create
   */
  export type DssAlternativeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
    /**
     * The data needed to create a DssAlternative.
     */
    data: XOR<DssAlternativeCreateInput, DssAlternativeUncheckedCreateInput>
  }

  /**
   * DssAlternative createMany
   */
  export type DssAlternativeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DssAlternatives.
     */
    data: DssAlternativeCreateManyInput | DssAlternativeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DssAlternative createManyAndReturn
   */
  export type DssAlternativeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * The data used to create many DssAlternatives.
     */
    data: DssAlternativeCreateManyInput | DssAlternativeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DssAlternative update
   */
  export type DssAlternativeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
    /**
     * The data needed to update a DssAlternative.
     */
    data: XOR<DssAlternativeUpdateInput, DssAlternativeUncheckedUpdateInput>
    /**
     * Choose, which DssAlternative to update.
     */
    where: DssAlternativeWhereUniqueInput
  }

  /**
   * DssAlternative updateMany
   */
  export type DssAlternativeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DssAlternatives.
     */
    data: XOR<DssAlternativeUpdateManyMutationInput, DssAlternativeUncheckedUpdateManyInput>
    /**
     * Filter which DssAlternatives to update
     */
    where?: DssAlternativeWhereInput
    /**
     * Limit how many DssAlternatives to update.
     */
    limit?: number
  }

  /**
   * DssAlternative updateManyAndReturn
   */
  export type DssAlternativeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * The data used to update DssAlternatives.
     */
    data: XOR<DssAlternativeUpdateManyMutationInput, DssAlternativeUncheckedUpdateManyInput>
    /**
     * Filter which DssAlternatives to update
     */
    where?: DssAlternativeWhereInput
    /**
     * Limit how many DssAlternatives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DssAlternative upsert
   */
  export type DssAlternativeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
    /**
     * The filter to search for the DssAlternative to update in case it exists.
     */
    where: DssAlternativeWhereUniqueInput
    /**
     * In case the DssAlternative found by the `where` argument doesn't exist, create a new DssAlternative with this data.
     */
    create: XOR<DssAlternativeCreateInput, DssAlternativeUncheckedCreateInput>
    /**
     * In case the DssAlternative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DssAlternativeUpdateInput, DssAlternativeUncheckedUpdateInput>
  }

  /**
   * DssAlternative delete
   */
  export type DssAlternativeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
    /**
     * Filter which DssAlternative to delete.
     */
    where: DssAlternativeWhereUniqueInput
  }

  /**
   * DssAlternative deleteMany
   */
  export type DssAlternativeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DssAlternatives to delete
     */
    where?: DssAlternativeWhereInput
    /**
     * Limit how many DssAlternatives to delete.
     */
    limit?: number
  }

  /**
   * DssAlternative.dssCriteriaAlternatives
   */
  export type DssAlternative$dssCriteriaAlternativesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    where?: DssCriteriaAlternativeWhereInput
    orderBy?: DssCriteriaAlternativeOrderByWithRelationInput | DssCriteriaAlternativeOrderByWithRelationInput[]
    cursor?: DssCriteriaAlternativeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DssCriteriaAlternativeScalarFieldEnum | DssCriteriaAlternativeScalarFieldEnum[]
  }

  /**
   * DssAlternative without action
   */
  export type DssAlternativeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssAlternative
     */
    select?: DssAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssAlternative
     */
    omit?: DssAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssAlternativeInclude<ExtArgs> | null
  }


  /**
   * Model DssCriteriaAlternative
   */

  export type AggregateDssCriteriaAlternative = {
    _count: DssCriteriaAlternativeCountAggregateOutputType | null
    _avg: DssCriteriaAlternativeAvgAggregateOutputType | null
    _sum: DssCriteriaAlternativeSumAggregateOutputType | null
    _min: DssCriteriaAlternativeMinAggregateOutputType | null
    _max: DssCriteriaAlternativeMaxAggregateOutputType | null
  }

  export type DssCriteriaAlternativeAvgAggregateOutputType = {
    dssCriteriaAlternativeId: number | null
    dssId: number | null
    dssAlternativeId: number | null
    criteriaId: number | null
    value: number | null
  }

  export type DssCriteriaAlternativeSumAggregateOutputType = {
    dssCriteriaAlternativeId: number | null
    dssId: number | null
    dssAlternativeId: number | null
    criteriaId: number | null
    value: number | null
  }

  export type DssCriteriaAlternativeMinAggregateOutputType = {
    dssCriteriaAlternativeId: number | null
    dssId: number | null
    dssAlternativeId: number | null
    criteriaId: number | null
    value: number | null
    createdAt: Date | null
  }

  export type DssCriteriaAlternativeMaxAggregateOutputType = {
    dssCriteriaAlternativeId: number | null
    dssId: number | null
    dssAlternativeId: number | null
    criteriaId: number | null
    value: number | null
    createdAt: Date | null
  }

  export type DssCriteriaAlternativeCountAggregateOutputType = {
    dssCriteriaAlternativeId: number
    dssId: number
    dssAlternativeId: number
    criteriaId: number
    value: number
    createdAt: number
    _all: number
  }


  export type DssCriteriaAlternativeAvgAggregateInputType = {
    dssCriteriaAlternativeId?: true
    dssId?: true
    dssAlternativeId?: true
    criteriaId?: true
    value?: true
  }

  export type DssCriteriaAlternativeSumAggregateInputType = {
    dssCriteriaAlternativeId?: true
    dssId?: true
    dssAlternativeId?: true
    criteriaId?: true
    value?: true
  }

  export type DssCriteriaAlternativeMinAggregateInputType = {
    dssCriteriaAlternativeId?: true
    dssId?: true
    dssAlternativeId?: true
    criteriaId?: true
    value?: true
    createdAt?: true
  }

  export type DssCriteriaAlternativeMaxAggregateInputType = {
    dssCriteriaAlternativeId?: true
    dssId?: true
    dssAlternativeId?: true
    criteriaId?: true
    value?: true
    createdAt?: true
  }

  export type DssCriteriaAlternativeCountAggregateInputType = {
    dssCriteriaAlternativeId?: true
    dssId?: true
    dssAlternativeId?: true
    criteriaId?: true
    value?: true
    createdAt?: true
    _all?: true
  }

  export type DssCriteriaAlternativeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DssCriteriaAlternative to aggregate.
     */
    where?: DssCriteriaAlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DssCriteriaAlternatives to fetch.
     */
    orderBy?: DssCriteriaAlternativeOrderByWithRelationInput | DssCriteriaAlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DssCriteriaAlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DssCriteriaAlternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DssCriteriaAlternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DssCriteriaAlternatives
    **/
    _count?: true | DssCriteriaAlternativeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DssCriteriaAlternativeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DssCriteriaAlternativeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DssCriteriaAlternativeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DssCriteriaAlternativeMaxAggregateInputType
  }

  export type GetDssCriteriaAlternativeAggregateType<T extends DssCriteriaAlternativeAggregateArgs> = {
        [P in keyof T & keyof AggregateDssCriteriaAlternative]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDssCriteriaAlternative[P]>
      : GetScalarType<T[P], AggregateDssCriteriaAlternative[P]>
  }




  export type DssCriteriaAlternativeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DssCriteriaAlternativeWhereInput
    orderBy?: DssCriteriaAlternativeOrderByWithAggregationInput | DssCriteriaAlternativeOrderByWithAggregationInput[]
    by: DssCriteriaAlternativeScalarFieldEnum[] | DssCriteriaAlternativeScalarFieldEnum
    having?: DssCriteriaAlternativeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DssCriteriaAlternativeCountAggregateInputType | true
    _avg?: DssCriteriaAlternativeAvgAggregateInputType
    _sum?: DssCriteriaAlternativeSumAggregateInputType
    _min?: DssCriteriaAlternativeMinAggregateInputType
    _max?: DssCriteriaAlternativeMaxAggregateInputType
  }

  export type DssCriteriaAlternativeGroupByOutputType = {
    dssCriteriaAlternativeId: number
    dssId: number
    dssAlternativeId: number
    criteriaId: number
    value: number | null
    createdAt: Date
    _count: DssCriteriaAlternativeCountAggregateOutputType | null
    _avg: DssCriteriaAlternativeAvgAggregateOutputType | null
    _sum: DssCriteriaAlternativeSumAggregateOutputType | null
    _min: DssCriteriaAlternativeMinAggregateOutputType | null
    _max: DssCriteriaAlternativeMaxAggregateOutputType | null
  }

  type GetDssCriteriaAlternativeGroupByPayload<T extends DssCriteriaAlternativeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DssCriteriaAlternativeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DssCriteriaAlternativeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DssCriteriaAlternativeGroupByOutputType[P]>
            : GetScalarType<T[P], DssCriteriaAlternativeGroupByOutputType[P]>
        }
      >
    >


  export type DssCriteriaAlternativeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dssCriteriaAlternativeId?: boolean
    dssId?: boolean
    dssAlternativeId?: boolean
    criteriaId?: boolean
    value?: boolean
    createdAt?: boolean
    dss?: boolean | DssDefaultArgs<ExtArgs>
    dssAlternative?: boolean | DssAlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dssCriteriaAlternative"]>

  export type DssCriteriaAlternativeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dssCriteriaAlternativeId?: boolean
    dssId?: boolean
    dssAlternativeId?: boolean
    criteriaId?: boolean
    value?: boolean
    createdAt?: boolean
    dss?: boolean | DssDefaultArgs<ExtArgs>
    dssAlternative?: boolean | DssAlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dssCriteriaAlternative"]>

  export type DssCriteriaAlternativeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dssCriteriaAlternativeId?: boolean
    dssId?: boolean
    dssAlternativeId?: boolean
    criteriaId?: boolean
    value?: boolean
    createdAt?: boolean
    dss?: boolean | DssDefaultArgs<ExtArgs>
    dssAlternative?: boolean | DssAlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dssCriteriaAlternative"]>

  export type DssCriteriaAlternativeSelectScalar = {
    dssCriteriaAlternativeId?: boolean
    dssId?: boolean
    dssAlternativeId?: boolean
    criteriaId?: boolean
    value?: boolean
    createdAt?: boolean
  }

  export type DssCriteriaAlternativeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"dssCriteriaAlternativeId" | "dssId" | "dssAlternativeId" | "criteriaId" | "value" | "createdAt", ExtArgs["result"]["dssCriteriaAlternative"]>
  export type DssCriteriaAlternativeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dss?: boolean | DssDefaultArgs<ExtArgs>
    dssAlternative?: boolean | DssAlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }
  export type DssCriteriaAlternativeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dss?: boolean | DssDefaultArgs<ExtArgs>
    dssAlternative?: boolean | DssAlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }
  export type DssCriteriaAlternativeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dss?: boolean | DssDefaultArgs<ExtArgs>
    dssAlternative?: boolean | DssAlternativeDefaultArgs<ExtArgs>
    criteria?: boolean | CriteriaDefaultArgs<ExtArgs>
  }

  export type $DssCriteriaAlternativePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DssCriteriaAlternative"
    objects: {
      dss: Prisma.$DssPayload<ExtArgs>
      dssAlternative: Prisma.$DssAlternativePayload<ExtArgs>
      criteria: Prisma.$CriteriaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      dssCriteriaAlternativeId: number
      dssId: number
      dssAlternativeId: number
      criteriaId: number
      value: number | null
      createdAt: Date
    }, ExtArgs["result"]["dssCriteriaAlternative"]>
    composites: {}
  }

  type DssCriteriaAlternativeGetPayload<S extends boolean | null | undefined | DssCriteriaAlternativeDefaultArgs> = $Result.GetResult<Prisma.$DssCriteriaAlternativePayload, S>

  type DssCriteriaAlternativeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DssCriteriaAlternativeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DssCriteriaAlternativeCountAggregateInputType | true
    }

  export interface DssCriteriaAlternativeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DssCriteriaAlternative'], meta: { name: 'DssCriteriaAlternative' } }
    /**
     * Find zero or one DssCriteriaAlternative that matches the filter.
     * @param {DssCriteriaAlternativeFindUniqueArgs} args - Arguments to find a DssCriteriaAlternative
     * @example
     * // Get one DssCriteriaAlternative
     * const dssCriteriaAlternative = await prisma.dssCriteriaAlternative.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DssCriteriaAlternativeFindUniqueArgs>(args: SelectSubset<T, DssCriteriaAlternativeFindUniqueArgs<ExtArgs>>): Prisma__DssCriteriaAlternativeClient<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DssCriteriaAlternative that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DssCriteriaAlternativeFindUniqueOrThrowArgs} args - Arguments to find a DssCriteriaAlternative
     * @example
     * // Get one DssCriteriaAlternative
     * const dssCriteriaAlternative = await prisma.dssCriteriaAlternative.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DssCriteriaAlternativeFindUniqueOrThrowArgs>(args: SelectSubset<T, DssCriteriaAlternativeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DssCriteriaAlternativeClient<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DssCriteriaAlternative that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssCriteriaAlternativeFindFirstArgs} args - Arguments to find a DssCriteriaAlternative
     * @example
     * // Get one DssCriteriaAlternative
     * const dssCriteriaAlternative = await prisma.dssCriteriaAlternative.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DssCriteriaAlternativeFindFirstArgs>(args?: SelectSubset<T, DssCriteriaAlternativeFindFirstArgs<ExtArgs>>): Prisma__DssCriteriaAlternativeClient<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DssCriteriaAlternative that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssCriteriaAlternativeFindFirstOrThrowArgs} args - Arguments to find a DssCriteriaAlternative
     * @example
     * // Get one DssCriteriaAlternative
     * const dssCriteriaAlternative = await prisma.dssCriteriaAlternative.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DssCriteriaAlternativeFindFirstOrThrowArgs>(args?: SelectSubset<T, DssCriteriaAlternativeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DssCriteriaAlternativeClient<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DssCriteriaAlternatives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssCriteriaAlternativeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DssCriteriaAlternatives
     * const dssCriteriaAlternatives = await prisma.dssCriteriaAlternative.findMany()
     * 
     * // Get first 10 DssCriteriaAlternatives
     * const dssCriteriaAlternatives = await prisma.dssCriteriaAlternative.findMany({ take: 10 })
     * 
     * // Only select the `dssCriteriaAlternativeId`
     * const dssCriteriaAlternativeWithDssCriteriaAlternativeIdOnly = await prisma.dssCriteriaAlternative.findMany({ select: { dssCriteriaAlternativeId: true } })
     * 
     */
    findMany<T extends DssCriteriaAlternativeFindManyArgs>(args?: SelectSubset<T, DssCriteriaAlternativeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DssCriteriaAlternative.
     * @param {DssCriteriaAlternativeCreateArgs} args - Arguments to create a DssCriteriaAlternative.
     * @example
     * // Create one DssCriteriaAlternative
     * const DssCriteriaAlternative = await prisma.dssCriteriaAlternative.create({
     *   data: {
     *     // ... data to create a DssCriteriaAlternative
     *   }
     * })
     * 
     */
    create<T extends DssCriteriaAlternativeCreateArgs>(args: SelectSubset<T, DssCriteriaAlternativeCreateArgs<ExtArgs>>): Prisma__DssCriteriaAlternativeClient<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DssCriteriaAlternatives.
     * @param {DssCriteriaAlternativeCreateManyArgs} args - Arguments to create many DssCriteriaAlternatives.
     * @example
     * // Create many DssCriteriaAlternatives
     * const dssCriteriaAlternative = await prisma.dssCriteriaAlternative.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DssCriteriaAlternativeCreateManyArgs>(args?: SelectSubset<T, DssCriteriaAlternativeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DssCriteriaAlternatives and returns the data saved in the database.
     * @param {DssCriteriaAlternativeCreateManyAndReturnArgs} args - Arguments to create many DssCriteriaAlternatives.
     * @example
     * // Create many DssCriteriaAlternatives
     * const dssCriteriaAlternative = await prisma.dssCriteriaAlternative.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DssCriteriaAlternatives and only return the `dssCriteriaAlternativeId`
     * const dssCriteriaAlternativeWithDssCriteriaAlternativeIdOnly = await prisma.dssCriteriaAlternative.createManyAndReturn({
     *   select: { dssCriteriaAlternativeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DssCriteriaAlternativeCreateManyAndReturnArgs>(args?: SelectSubset<T, DssCriteriaAlternativeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DssCriteriaAlternative.
     * @param {DssCriteriaAlternativeDeleteArgs} args - Arguments to delete one DssCriteriaAlternative.
     * @example
     * // Delete one DssCriteriaAlternative
     * const DssCriteriaAlternative = await prisma.dssCriteriaAlternative.delete({
     *   where: {
     *     // ... filter to delete one DssCriteriaAlternative
     *   }
     * })
     * 
     */
    delete<T extends DssCriteriaAlternativeDeleteArgs>(args: SelectSubset<T, DssCriteriaAlternativeDeleteArgs<ExtArgs>>): Prisma__DssCriteriaAlternativeClient<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DssCriteriaAlternative.
     * @param {DssCriteriaAlternativeUpdateArgs} args - Arguments to update one DssCriteriaAlternative.
     * @example
     * // Update one DssCriteriaAlternative
     * const dssCriteriaAlternative = await prisma.dssCriteriaAlternative.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DssCriteriaAlternativeUpdateArgs>(args: SelectSubset<T, DssCriteriaAlternativeUpdateArgs<ExtArgs>>): Prisma__DssCriteriaAlternativeClient<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DssCriteriaAlternatives.
     * @param {DssCriteriaAlternativeDeleteManyArgs} args - Arguments to filter DssCriteriaAlternatives to delete.
     * @example
     * // Delete a few DssCriteriaAlternatives
     * const { count } = await prisma.dssCriteriaAlternative.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DssCriteriaAlternativeDeleteManyArgs>(args?: SelectSubset<T, DssCriteriaAlternativeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DssCriteriaAlternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssCriteriaAlternativeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DssCriteriaAlternatives
     * const dssCriteriaAlternative = await prisma.dssCriteriaAlternative.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DssCriteriaAlternativeUpdateManyArgs>(args: SelectSubset<T, DssCriteriaAlternativeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DssCriteriaAlternatives and returns the data updated in the database.
     * @param {DssCriteriaAlternativeUpdateManyAndReturnArgs} args - Arguments to update many DssCriteriaAlternatives.
     * @example
     * // Update many DssCriteriaAlternatives
     * const dssCriteriaAlternative = await prisma.dssCriteriaAlternative.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DssCriteriaAlternatives and only return the `dssCriteriaAlternativeId`
     * const dssCriteriaAlternativeWithDssCriteriaAlternativeIdOnly = await prisma.dssCriteriaAlternative.updateManyAndReturn({
     *   select: { dssCriteriaAlternativeId: true },
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
    updateManyAndReturn<T extends DssCriteriaAlternativeUpdateManyAndReturnArgs>(args: SelectSubset<T, DssCriteriaAlternativeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DssCriteriaAlternative.
     * @param {DssCriteriaAlternativeUpsertArgs} args - Arguments to update or create a DssCriteriaAlternative.
     * @example
     * // Update or create a DssCriteriaAlternative
     * const dssCriteriaAlternative = await prisma.dssCriteriaAlternative.upsert({
     *   create: {
     *     // ... data to create a DssCriteriaAlternative
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DssCriteriaAlternative we want to update
     *   }
     * })
     */
    upsert<T extends DssCriteriaAlternativeUpsertArgs>(args: SelectSubset<T, DssCriteriaAlternativeUpsertArgs<ExtArgs>>): Prisma__DssCriteriaAlternativeClient<$Result.GetResult<Prisma.$DssCriteriaAlternativePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DssCriteriaAlternatives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssCriteriaAlternativeCountArgs} args - Arguments to filter DssCriteriaAlternatives to count.
     * @example
     * // Count the number of DssCriteriaAlternatives
     * const count = await prisma.dssCriteriaAlternative.count({
     *   where: {
     *     // ... the filter for the DssCriteriaAlternatives we want to count
     *   }
     * })
    **/
    count<T extends DssCriteriaAlternativeCountArgs>(
      args?: Subset<T, DssCriteriaAlternativeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DssCriteriaAlternativeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DssCriteriaAlternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssCriteriaAlternativeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DssCriteriaAlternativeAggregateArgs>(args: Subset<T, DssCriteriaAlternativeAggregateArgs>): Prisma.PrismaPromise<GetDssCriteriaAlternativeAggregateType<T>>

    /**
     * Group by DssCriteriaAlternative.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DssCriteriaAlternativeGroupByArgs} args - Group by arguments.
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
      T extends DssCriteriaAlternativeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DssCriteriaAlternativeGroupByArgs['orderBy'] }
        : { orderBy?: DssCriteriaAlternativeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DssCriteriaAlternativeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDssCriteriaAlternativeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DssCriteriaAlternative model
   */
  readonly fields: DssCriteriaAlternativeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DssCriteriaAlternative.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DssCriteriaAlternativeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dss<T extends DssDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DssDefaultArgs<ExtArgs>>): Prisma__DssClient<$Result.GetResult<Prisma.$DssPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dssAlternative<T extends DssAlternativeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DssAlternativeDefaultArgs<ExtArgs>>): Prisma__DssAlternativeClient<$Result.GetResult<Prisma.$DssAlternativePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    criteria<T extends CriteriaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CriteriaDefaultArgs<ExtArgs>>): Prisma__CriteriaClient<$Result.GetResult<Prisma.$CriteriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DssCriteriaAlternative model
   */
  interface DssCriteriaAlternativeFieldRefs {
    readonly dssCriteriaAlternativeId: FieldRef<"DssCriteriaAlternative", 'Int'>
    readonly dssId: FieldRef<"DssCriteriaAlternative", 'Int'>
    readonly dssAlternativeId: FieldRef<"DssCriteriaAlternative", 'Int'>
    readonly criteriaId: FieldRef<"DssCriteriaAlternative", 'Int'>
    readonly value: FieldRef<"DssCriteriaAlternative", 'Float'>
    readonly createdAt: FieldRef<"DssCriteriaAlternative", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DssCriteriaAlternative findUnique
   */
  export type DssCriteriaAlternativeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    /**
     * Filter, which DssCriteriaAlternative to fetch.
     */
    where: DssCriteriaAlternativeWhereUniqueInput
  }

  /**
   * DssCriteriaAlternative findUniqueOrThrow
   */
  export type DssCriteriaAlternativeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    /**
     * Filter, which DssCriteriaAlternative to fetch.
     */
    where: DssCriteriaAlternativeWhereUniqueInput
  }

  /**
   * DssCriteriaAlternative findFirst
   */
  export type DssCriteriaAlternativeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    /**
     * Filter, which DssCriteriaAlternative to fetch.
     */
    where?: DssCriteriaAlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DssCriteriaAlternatives to fetch.
     */
    orderBy?: DssCriteriaAlternativeOrderByWithRelationInput | DssCriteriaAlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DssCriteriaAlternatives.
     */
    cursor?: DssCriteriaAlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DssCriteriaAlternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DssCriteriaAlternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DssCriteriaAlternatives.
     */
    distinct?: DssCriteriaAlternativeScalarFieldEnum | DssCriteriaAlternativeScalarFieldEnum[]
  }

  /**
   * DssCriteriaAlternative findFirstOrThrow
   */
  export type DssCriteriaAlternativeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    /**
     * Filter, which DssCriteriaAlternative to fetch.
     */
    where?: DssCriteriaAlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DssCriteriaAlternatives to fetch.
     */
    orderBy?: DssCriteriaAlternativeOrderByWithRelationInput | DssCriteriaAlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DssCriteriaAlternatives.
     */
    cursor?: DssCriteriaAlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DssCriteriaAlternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DssCriteriaAlternatives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DssCriteriaAlternatives.
     */
    distinct?: DssCriteriaAlternativeScalarFieldEnum | DssCriteriaAlternativeScalarFieldEnum[]
  }

  /**
   * DssCriteriaAlternative findMany
   */
  export type DssCriteriaAlternativeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    /**
     * Filter, which DssCriteriaAlternatives to fetch.
     */
    where?: DssCriteriaAlternativeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DssCriteriaAlternatives to fetch.
     */
    orderBy?: DssCriteriaAlternativeOrderByWithRelationInput | DssCriteriaAlternativeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DssCriteriaAlternatives.
     */
    cursor?: DssCriteriaAlternativeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DssCriteriaAlternatives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DssCriteriaAlternatives.
     */
    skip?: number
    distinct?: DssCriteriaAlternativeScalarFieldEnum | DssCriteriaAlternativeScalarFieldEnum[]
  }

  /**
   * DssCriteriaAlternative create
   */
  export type DssCriteriaAlternativeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    /**
     * The data needed to create a DssCriteriaAlternative.
     */
    data: XOR<DssCriteriaAlternativeCreateInput, DssCriteriaAlternativeUncheckedCreateInput>
  }

  /**
   * DssCriteriaAlternative createMany
   */
  export type DssCriteriaAlternativeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DssCriteriaAlternatives.
     */
    data: DssCriteriaAlternativeCreateManyInput | DssCriteriaAlternativeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DssCriteriaAlternative createManyAndReturn
   */
  export type DssCriteriaAlternativeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * The data used to create many DssCriteriaAlternatives.
     */
    data: DssCriteriaAlternativeCreateManyInput | DssCriteriaAlternativeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DssCriteriaAlternative update
   */
  export type DssCriteriaAlternativeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    /**
     * The data needed to update a DssCriteriaAlternative.
     */
    data: XOR<DssCriteriaAlternativeUpdateInput, DssCriteriaAlternativeUncheckedUpdateInput>
    /**
     * Choose, which DssCriteriaAlternative to update.
     */
    where: DssCriteriaAlternativeWhereUniqueInput
  }

  /**
   * DssCriteriaAlternative updateMany
   */
  export type DssCriteriaAlternativeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DssCriteriaAlternatives.
     */
    data: XOR<DssCriteriaAlternativeUpdateManyMutationInput, DssCriteriaAlternativeUncheckedUpdateManyInput>
    /**
     * Filter which DssCriteriaAlternatives to update
     */
    where?: DssCriteriaAlternativeWhereInput
    /**
     * Limit how many DssCriteriaAlternatives to update.
     */
    limit?: number
  }

  /**
   * DssCriteriaAlternative updateManyAndReturn
   */
  export type DssCriteriaAlternativeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * The data used to update DssCriteriaAlternatives.
     */
    data: XOR<DssCriteriaAlternativeUpdateManyMutationInput, DssCriteriaAlternativeUncheckedUpdateManyInput>
    /**
     * Filter which DssCriteriaAlternatives to update
     */
    where?: DssCriteriaAlternativeWhereInput
    /**
     * Limit how many DssCriteriaAlternatives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DssCriteriaAlternative upsert
   */
  export type DssCriteriaAlternativeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    /**
     * The filter to search for the DssCriteriaAlternative to update in case it exists.
     */
    where: DssCriteriaAlternativeWhereUniqueInput
    /**
     * In case the DssCriteriaAlternative found by the `where` argument doesn't exist, create a new DssCriteriaAlternative with this data.
     */
    create: XOR<DssCriteriaAlternativeCreateInput, DssCriteriaAlternativeUncheckedCreateInput>
    /**
     * In case the DssCriteriaAlternative was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DssCriteriaAlternativeUpdateInput, DssCriteriaAlternativeUncheckedUpdateInput>
  }

  /**
   * DssCriteriaAlternative delete
   */
  export type DssCriteriaAlternativeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
    /**
     * Filter which DssCriteriaAlternative to delete.
     */
    where: DssCriteriaAlternativeWhereUniqueInput
  }

  /**
   * DssCriteriaAlternative deleteMany
   */
  export type DssCriteriaAlternativeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DssCriteriaAlternatives to delete
     */
    where?: DssCriteriaAlternativeWhereInput
    /**
     * Limit how many DssCriteriaAlternatives to delete.
     */
    limit?: number
  }

  /**
   * DssCriteriaAlternative without action
   */
  export type DssCriteriaAlternativeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DssCriteriaAlternative
     */
    select?: DssCriteriaAlternativeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DssCriteriaAlternative
     */
    omit?: DssCriteriaAlternativeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DssCriteriaAlternativeInclude<ExtArgs> | null
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


  export const CriteriaScalarFieldEnum: {
    criteriaId: 'criteriaId',
    criteriaName: 'criteriaName',
    type: 'type',
    weight: 'weight',
    parentCriteriaId: 'parentCriteriaId',
    createdAt: 'createdAt'
  };

  export type CriteriaScalarFieldEnum = (typeof CriteriaScalarFieldEnum)[keyof typeof CriteriaScalarFieldEnum]


  export const DssScalarFieldEnum: {
    dssId: 'dssId',
    creator: 'creator',
    createdAt: 'createdAt'
  };

  export type DssScalarFieldEnum = (typeof DssScalarFieldEnum)[keyof typeof DssScalarFieldEnum]


  export const DssAlternativeScalarFieldEnum: {
    dssAlternativeId: 'dssAlternativeId',
    dssId: 'dssId',
    name: 'name',
    sValue: 'sValue',
    rankValue: 'rankValue',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DssAlternativeScalarFieldEnum = (typeof DssAlternativeScalarFieldEnum)[keyof typeof DssAlternativeScalarFieldEnum]


  export const DssCriteriaAlternativeScalarFieldEnum: {
    dssCriteriaAlternativeId: 'dssCriteriaAlternativeId',
    dssId: 'dssId',
    dssAlternativeId: 'dssAlternativeId',
    criteriaId: 'criteriaId',
    value: 'value',
    createdAt: 'createdAt'
  };

  export type DssCriteriaAlternativeScalarFieldEnum = (typeof DssCriteriaAlternativeScalarFieldEnum)[keyof typeof DssCriteriaAlternativeScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'CriteriaType'
   */
  export type EnumCriteriaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CriteriaType'>
    


  /**
   * Reference to a field of type 'CriteriaType[]'
   */
  export type ListEnumCriteriaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CriteriaType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type CriteriaWhereInput = {
    AND?: CriteriaWhereInput | CriteriaWhereInput[]
    OR?: CriteriaWhereInput[]
    NOT?: CriteriaWhereInput | CriteriaWhereInput[]
    criteriaId?: IntFilter<"Criteria"> | number
    criteriaName?: StringFilter<"Criteria"> | string
    type?: EnumCriteriaTypeFilter<"Criteria"> | $Enums.CriteriaType
    weight?: FloatFilter<"Criteria"> | number
    parentCriteriaId?: IntNullableFilter<"Criteria"> | number | null
    createdAt?: DateTimeFilter<"Criteria"> | Date | string
    parentCriteria?: XOR<CriteriaNullableScalarRelationFilter, CriteriaWhereInput> | null
    childCriterias?: CriteriaListRelationFilter
    dssCriteriaAlternatives?: DssCriteriaAlternativeListRelationFilter
  }

  export type CriteriaOrderByWithRelationInput = {
    criteriaId?: SortOrder
    criteriaName?: SortOrder
    type?: SortOrder
    weight?: SortOrder
    parentCriteriaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    parentCriteria?: CriteriaOrderByWithRelationInput
    childCriterias?: CriteriaOrderByRelationAggregateInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeOrderByRelationAggregateInput
  }

  export type CriteriaWhereUniqueInput = Prisma.AtLeast<{
    criteriaId?: number
    AND?: CriteriaWhereInput | CriteriaWhereInput[]
    OR?: CriteriaWhereInput[]
    NOT?: CriteriaWhereInput | CriteriaWhereInput[]
    criteriaName?: StringFilter<"Criteria"> | string
    type?: EnumCriteriaTypeFilter<"Criteria"> | $Enums.CriteriaType
    weight?: FloatFilter<"Criteria"> | number
    parentCriteriaId?: IntNullableFilter<"Criteria"> | number | null
    createdAt?: DateTimeFilter<"Criteria"> | Date | string
    parentCriteria?: XOR<CriteriaNullableScalarRelationFilter, CriteriaWhereInput> | null
    childCriterias?: CriteriaListRelationFilter
    dssCriteriaAlternatives?: DssCriteriaAlternativeListRelationFilter
  }, "criteriaId">

  export type CriteriaOrderByWithAggregationInput = {
    criteriaId?: SortOrder
    criteriaName?: SortOrder
    type?: SortOrder
    weight?: SortOrder
    parentCriteriaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CriteriaCountOrderByAggregateInput
    _avg?: CriteriaAvgOrderByAggregateInput
    _max?: CriteriaMaxOrderByAggregateInput
    _min?: CriteriaMinOrderByAggregateInput
    _sum?: CriteriaSumOrderByAggregateInput
  }

  export type CriteriaScalarWhereWithAggregatesInput = {
    AND?: CriteriaScalarWhereWithAggregatesInput | CriteriaScalarWhereWithAggregatesInput[]
    OR?: CriteriaScalarWhereWithAggregatesInput[]
    NOT?: CriteriaScalarWhereWithAggregatesInput | CriteriaScalarWhereWithAggregatesInput[]
    criteriaId?: IntWithAggregatesFilter<"Criteria"> | number
    criteriaName?: StringWithAggregatesFilter<"Criteria"> | string
    type?: EnumCriteriaTypeWithAggregatesFilter<"Criteria"> | $Enums.CriteriaType
    weight?: FloatWithAggregatesFilter<"Criteria"> | number
    parentCriteriaId?: IntNullableWithAggregatesFilter<"Criteria"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Criteria"> | Date | string
  }

  export type DssWhereInput = {
    AND?: DssWhereInput | DssWhereInput[]
    OR?: DssWhereInput[]
    NOT?: DssWhereInput | DssWhereInput[]
    dssId?: IntFilter<"Dss"> | number
    creator?: StringFilter<"Dss"> | string
    createdAt?: DateTimeFilter<"Dss"> | Date | string
    dssAlternatives?: DssAlternativeListRelationFilter
    dssCriteriaAlternatives?: DssCriteriaAlternativeListRelationFilter
  }

  export type DssOrderByWithRelationInput = {
    dssId?: SortOrder
    creator?: SortOrder
    createdAt?: SortOrder
    dssAlternatives?: DssAlternativeOrderByRelationAggregateInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeOrderByRelationAggregateInput
  }

  export type DssWhereUniqueInput = Prisma.AtLeast<{
    dssId?: number
    AND?: DssWhereInput | DssWhereInput[]
    OR?: DssWhereInput[]
    NOT?: DssWhereInput | DssWhereInput[]
    creator?: StringFilter<"Dss"> | string
    createdAt?: DateTimeFilter<"Dss"> | Date | string
    dssAlternatives?: DssAlternativeListRelationFilter
    dssCriteriaAlternatives?: DssCriteriaAlternativeListRelationFilter
  }, "dssId">

  export type DssOrderByWithAggregationInput = {
    dssId?: SortOrder
    creator?: SortOrder
    createdAt?: SortOrder
    _count?: DssCountOrderByAggregateInput
    _avg?: DssAvgOrderByAggregateInput
    _max?: DssMaxOrderByAggregateInput
    _min?: DssMinOrderByAggregateInput
    _sum?: DssSumOrderByAggregateInput
  }

  export type DssScalarWhereWithAggregatesInput = {
    AND?: DssScalarWhereWithAggregatesInput | DssScalarWhereWithAggregatesInput[]
    OR?: DssScalarWhereWithAggregatesInput[]
    NOT?: DssScalarWhereWithAggregatesInput | DssScalarWhereWithAggregatesInput[]
    dssId?: IntWithAggregatesFilter<"Dss"> | number
    creator?: StringWithAggregatesFilter<"Dss"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Dss"> | Date | string
  }

  export type DssAlternativeWhereInput = {
    AND?: DssAlternativeWhereInput | DssAlternativeWhereInput[]
    OR?: DssAlternativeWhereInput[]
    NOT?: DssAlternativeWhereInput | DssAlternativeWhereInput[]
    dssAlternativeId?: IntFilter<"DssAlternative"> | number
    dssId?: IntFilter<"DssAlternative"> | number
    name?: StringFilter<"DssAlternative"> | string
    sValue?: FloatNullableFilter<"DssAlternative"> | number | null
    rankValue?: IntNullableFilter<"DssAlternative"> | number | null
    createdAt?: DateTimeFilter<"DssAlternative"> | Date | string
    updatedAt?: DateTimeFilter<"DssAlternative"> | Date | string
    dss?: XOR<DssScalarRelationFilter, DssWhereInput>
    dssCriteriaAlternatives?: DssCriteriaAlternativeListRelationFilter
  }

  export type DssAlternativeOrderByWithRelationInput = {
    dssAlternativeId?: SortOrder
    dssId?: SortOrder
    name?: SortOrder
    sValue?: SortOrderInput | SortOrder
    rankValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dss?: DssOrderByWithRelationInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeOrderByRelationAggregateInput
  }

  export type DssAlternativeWhereUniqueInput = Prisma.AtLeast<{
    dssAlternativeId?: number
    AND?: DssAlternativeWhereInput | DssAlternativeWhereInput[]
    OR?: DssAlternativeWhereInput[]
    NOT?: DssAlternativeWhereInput | DssAlternativeWhereInput[]
    dssId?: IntFilter<"DssAlternative"> | number
    name?: StringFilter<"DssAlternative"> | string
    sValue?: FloatNullableFilter<"DssAlternative"> | number | null
    rankValue?: IntNullableFilter<"DssAlternative"> | number | null
    createdAt?: DateTimeFilter<"DssAlternative"> | Date | string
    updatedAt?: DateTimeFilter<"DssAlternative"> | Date | string
    dss?: XOR<DssScalarRelationFilter, DssWhereInput>
    dssCriteriaAlternatives?: DssCriteriaAlternativeListRelationFilter
  }, "dssAlternativeId">

  export type DssAlternativeOrderByWithAggregationInput = {
    dssAlternativeId?: SortOrder
    dssId?: SortOrder
    name?: SortOrder
    sValue?: SortOrderInput | SortOrder
    rankValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DssAlternativeCountOrderByAggregateInput
    _avg?: DssAlternativeAvgOrderByAggregateInput
    _max?: DssAlternativeMaxOrderByAggregateInput
    _min?: DssAlternativeMinOrderByAggregateInput
    _sum?: DssAlternativeSumOrderByAggregateInput
  }

  export type DssAlternativeScalarWhereWithAggregatesInput = {
    AND?: DssAlternativeScalarWhereWithAggregatesInput | DssAlternativeScalarWhereWithAggregatesInput[]
    OR?: DssAlternativeScalarWhereWithAggregatesInput[]
    NOT?: DssAlternativeScalarWhereWithAggregatesInput | DssAlternativeScalarWhereWithAggregatesInput[]
    dssAlternativeId?: IntWithAggregatesFilter<"DssAlternative"> | number
    dssId?: IntWithAggregatesFilter<"DssAlternative"> | number
    name?: StringWithAggregatesFilter<"DssAlternative"> | string
    sValue?: FloatNullableWithAggregatesFilter<"DssAlternative"> | number | null
    rankValue?: IntNullableWithAggregatesFilter<"DssAlternative"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"DssAlternative"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DssAlternative"> | Date | string
  }

  export type DssCriteriaAlternativeWhereInput = {
    AND?: DssCriteriaAlternativeWhereInput | DssCriteriaAlternativeWhereInput[]
    OR?: DssCriteriaAlternativeWhereInput[]
    NOT?: DssCriteriaAlternativeWhereInput | DssCriteriaAlternativeWhereInput[]
    dssCriteriaAlternativeId?: IntFilter<"DssCriteriaAlternative"> | number
    dssId?: IntFilter<"DssCriteriaAlternative"> | number
    dssAlternativeId?: IntFilter<"DssCriteriaAlternative"> | number
    criteriaId?: IntFilter<"DssCriteriaAlternative"> | number
    value?: FloatNullableFilter<"DssCriteriaAlternative"> | number | null
    createdAt?: DateTimeFilter<"DssCriteriaAlternative"> | Date | string
    dss?: XOR<DssScalarRelationFilter, DssWhereInput>
    dssAlternative?: XOR<DssAlternativeScalarRelationFilter, DssAlternativeWhereInput>
    criteria?: XOR<CriteriaScalarRelationFilter, CriteriaWhereInput>
  }

  export type DssCriteriaAlternativeOrderByWithRelationInput = {
    dssCriteriaAlternativeId?: SortOrder
    dssId?: SortOrder
    dssAlternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    dss?: DssOrderByWithRelationInput
    dssAlternative?: DssAlternativeOrderByWithRelationInput
    criteria?: CriteriaOrderByWithRelationInput
  }

  export type DssCriteriaAlternativeWhereUniqueInput = Prisma.AtLeast<{
    dssCriteriaAlternativeId?: number
    AND?: DssCriteriaAlternativeWhereInput | DssCriteriaAlternativeWhereInput[]
    OR?: DssCriteriaAlternativeWhereInput[]
    NOT?: DssCriteriaAlternativeWhereInput | DssCriteriaAlternativeWhereInput[]
    dssId?: IntFilter<"DssCriteriaAlternative"> | number
    dssAlternativeId?: IntFilter<"DssCriteriaAlternative"> | number
    criteriaId?: IntFilter<"DssCriteriaAlternative"> | number
    value?: FloatNullableFilter<"DssCriteriaAlternative"> | number | null
    createdAt?: DateTimeFilter<"DssCriteriaAlternative"> | Date | string
    dss?: XOR<DssScalarRelationFilter, DssWhereInput>
    dssAlternative?: XOR<DssAlternativeScalarRelationFilter, DssAlternativeWhereInput>
    criteria?: XOR<CriteriaScalarRelationFilter, CriteriaWhereInput>
  }, "dssCriteriaAlternativeId">

  export type DssCriteriaAlternativeOrderByWithAggregationInput = {
    dssCriteriaAlternativeId?: SortOrder
    dssId?: SortOrder
    dssAlternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DssCriteriaAlternativeCountOrderByAggregateInput
    _avg?: DssCriteriaAlternativeAvgOrderByAggregateInput
    _max?: DssCriteriaAlternativeMaxOrderByAggregateInput
    _min?: DssCriteriaAlternativeMinOrderByAggregateInput
    _sum?: DssCriteriaAlternativeSumOrderByAggregateInput
  }

  export type DssCriteriaAlternativeScalarWhereWithAggregatesInput = {
    AND?: DssCriteriaAlternativeScalarWhereWithAggregatesInput | DssCriteriaAlternativeScalarWhereWithAggregatesInput[]
    OR?: DssCriteriaAlternativeScalarWhereWithAggregatesInput[]
    NOT?: DssCriteriaAlternativeScalarWhereWithAggregatesInput | DssCriteriaAlternativeScalarWhereWithAggregatesInput[]
    dssCriteriaAlternativeId?: IntWithAggregatesFilter<"DssCriteriaAlternative"> | number
    dssId?: IntWithAggregatesFilter<"DssCriteriaAlternative"> | number
    dssAlternativeId?: IntWithAggregatesFilter<"DssCriteriaAlternative"> | number
    criteriaId?: IntWithAggregatesFilter<"DssCriteriaAlternative"> | number
    value?: FloatNullableWithAggregatesFilter<"DssCriteriaAlternative"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"DssCriteriaAlternative"> | Date | string
  }

  export type CriteriaCreateInput = {
    criteriaName: string
    type?: $Enums.CriteriaType
    weight: number
    createdAt?: Date | string
    parentCriteria?: CriteriaCreateNestedOneWithoutChildCriteriasInput
    childCriterias?: CriteriaCreateNestedManyWithoutParentCriteriaInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeCreateNestedManyWithoutCriteriaInput
  }

  export type CriteriaUncheckedCreateInput = {
    criteriaId?: number
    criteriaName: string
    type?: $Enums.CriteriaType
    weight: number
    parentCriteriaId?: number | null
    createdAt?: Date | string
    childCriterias?: CriteriaUncheckedCreateNestedManyWithoutParentCriteriaInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedCreateNestedManyWithoutCriteriaInput
  }

  export type CriteriaUpdateInput = {
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCriteria?: CriteriaUpdateOneWithoutChildCriteriasNestedInput
    childCriterias?: CriteriaUpdateManyWithoutParentCriteriaNestedInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUpdateManyWithoutCriteriaNestedInput
  }

  export type CriteriaUncheckedUpdateInput = {
    criteriaId?: IntFieldUpdateOperationsInput | number
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    parentCriteriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childCriterias?: CriteriaUncheckedUpdateManyWithoutParentCriteriaNestedInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedUpdateManyWithoutCriteriaNestedInput
  }

  export type CriteriaCreateManyInput = {
    criteriaId?: number
    criteriaName: string
    type?: $Enums.CriteriaType
    weight: number
    parentCriteriaId?: number | null
    createdAt?: Date | string
  }

  export type CriteriaUpdateManyMutationInput = {
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CriteriaUncheckedUpdateManyInput = {
    criteriaId?: IntFieldUpdateOperationsInput | number
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    parentCriteriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssCreateInput = {
    creator: string
    createdAt?: Date | string
    dssAlternatives?: DssAlternativeCreateNestedManyWithoutDssInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeCreateNestedManyWithoutDssInput
  }

  export type DssUncheckedCreateInput = {
    dssId?: number
    creator: string
    createdAt?: Date | string
    dssAlternatives?: DssAlternativeUncheckedCreateNestedManyWithoutDssInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedCreateNestedManyWithoutDssInput
  }

  export type DssUpdateInput = {
    creator?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssAlternatives?: DssAlternativeUpdateManyWithoutDssNestedInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUpdateManyWithoutDssNestedInput
  }

  export type DssUncheckedUpdateInput = {
    dssId?: IntFieldUpdateOperationsInput | number
    creator?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssAlternatives?: DssAlternativeUncheckedUpdateManyWithoutDssNestedInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedUpdateManyWithoutDssNestedInput
  }

  export type DssCreateManyInput = {
    dssId?: number
    creator: string
    createdAt?: Date | string
  }

  export type DssUpdateManyMutationInput = {
    creator?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssUncheckedUpdateManyInput = {
    dssId?: IntFieldUpdateOperationsInput | number
    creator?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssAlternativeCreateInput = {
    name: string
    sValue?: number | null
    rankValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dss: DssCreateNestedOneWithoutDssAlternativesInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeCreateNestedManyWithoutDssAlternativeInput
  }

  export type DssAlternativeUncheckedCreateInput = {
    dssAlternativeId?: number
    dssId: number
    name: string
    sValue?: number | null
    rankValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedCreateNestedManyWithoutDssAlternativeInput
  }

  export type DssAlternativeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sValue?: NullableFloatFieldUpdateOperationsInput | number | null
    rankValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dss?: DssUpdateOneRequiredWithoutDssAlternativesNestedInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUpdateManyWithoutDssAlternativeNestedInput
  }

  export type DssAlternativeUncheckedUpdateInput = {
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    dssId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sValue?: NullableFloatFieldUpdateOperationsInput | number | null
    rankValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedUpdateManyWithoutDssAlternativeNestedInput
  }

  export type DssAlternativeCreateManyInput = {
    dssAlternativeId?: number
    dssId: number
    name: string
    sValue?: number | null
    rankValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DssAlternativeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    sValue?: NullableFloatFieldUpdateOperationsInput | number | null
    rankValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssAlternativeUncheckedUpdateManyInput = {
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    dssId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sValue?: NullableFloatFieldUpdateOperationsInput | number | null
    rankValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssCriteriaAlternativeCreateInput = {
    value?: number | null
    createdAt?: Date | string
    dss: DssCreateNestedOneWithoutDssCriteriaAlternativesInput
    dssAlternative: DssAlternativeCreateNestedOneWithoutDssCriteriaAlternativesInput
    criteria: CriteriaCreateNestedOneWithoutDssCriteriaAlternativesInput
  }

  export type DssCriteriaAlternativeUncheckedCreateInput = {
    dssCriteriaAlternativeId?: number
    dssId: number
    dssAlternativeId: number
    criteriaId: number
    value?: number | null
    createdAt?: Date | string
  }

  export type DssCriteriaAlternativeUpdateInput = {
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dss?: DssUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput
    dssAlternative?: DssAlternativeUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput
    criteria?: CriteriaUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput
  }

  export type DssCriteriaAlternativeUncheckedUpdateInput = {
    dssCriteriaAlternativeId?: IntFieldUpdateOperationsInput | number
    dssId?: IntFieldUpdateOperationsInput | number
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    criteriaId?: IntFieldUpdateOperationsInput | number
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssCriteriaAlternativeCreateManyInput = {
    dssCriteriaAlternativeId?: number
    dssId: number
    dssAlternativeId: number
    criteriaId: number
    value?: number | null
    createdAt?: Date | string
  }

  export type DssCriteriaAlternativeUpdateManyMutationInput = {
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssCriteriaAlternativeUncheckedUpdateManyInput = {
    dssCriteriaAlternativeId?: IntFieldUpdateOperationsInput | number
    dssId?: IntFieldUpdateOperationsInput | number
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    criteriaId?: IntFieldUpdateOperationsInput | number
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumCriteriaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CriteriaType | EnumCriteriaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CriteriaType[] | ListEnumCriteriaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CriteriaType[] | ListEnumCriteriaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCriteriaTypeFilter<$PrismaModel> | $Enums.CriteriaType
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

  export type CriteriaNullableScalarRelationFilter = {
    is?: CriteriaWhereInput | null
    isNot?: CriteriaWhereInput | null
  }

  export type CriteriaListRelationFilter = {
    every?: CriteriaWhereInput
    some?: CriteriaWhereInput
    none?: CriteriaWhereInput
  }

  export type DssCriteriaAlternativeListRelationFilter = {
    every?: DssCriteriaAlternativeWhereInput
    some?: DssCriteriaAlternativeWhereInput
    none?: DssCriteriaAlternativeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CriteriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DssCriteriaAlternativeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CriteriaCountOrderByAggregateInput = {
    criteriaId?: SortOrder
    criteriaName?: SortOrder
    type?: SortOrder
    weight?: SortOrder
    parentCriteriaId?: SortOrder
    createdAt?: SortOrder
  }

  export type CriteriaAvgOrderByAggregateInput = {
    criteriaId?: SortOrder
    weight?: SortOrder
    parentCriteriaId?: SortOrder
  }

  export type CriteriaMaxOrderByAggregateInput = {
    criteriaId?: SortOrder
    criteriaName?: SortOrder
    type?: SortOrder
    weight?: SortOrder
    parentCriteriaId?: SortOrder
    createdAt?: SortOrder
  }

  export type CriteriaMinOrderByAggregateInput = {
    criteriaId?: SortOrder
    criteriaName?: SortOrder
    type?: SortOrder
    weight?: SortOrder
    parentCriteriaId?: SortOrder
    createdAt?: SortOrder
  }

  export type CriteriaSumOrderByAggregateInput = {
    criteriaId?: SortOrder
    weight?: SortOrder
    parentCriteriaId?: SortOrder
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

  export type EnumCriteriaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CriteriaType | EnumCriteriaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CriteriaType[] | ListEnumCriteriaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CriteriaType[] | ListEnumCriteriaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCriteriaTypeWithAggregatesFilter<$PrismaModel> | $Enums.CriteriaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCriteriaTypeFilter<$PrismaModel>
    _max?: NestedEnumCriteriaTypeFilter<$PrismaModel>
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

  export type DssAlternativeListRelationFilter = {
    every?: DssAlternativeWhereInput
    some?: DssAlternativeWhereInput
    none?: DssAlternativeWhereInput
  }

  export type DssAlternativeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DssCountOrderByAggregateInput = {
    dssId?: SortOrder
    creator?: SortOrder
    createdAt?: SortOrder
  }

  export type DssAvgOrderByAggregateInput = {
    dssId?: SortOrder
  }

  export type DssMaxOrderByAggregateInput = {
    dssId?: SortOrder
    creator?: SortOrder
    createdAt?: SortOrder
  }

  export type DssMinOrderByAggregateInput = {
    dssId?: SortOrder
    creator?: SortOrder
    createdAt?: SortOrder
  }

  export type DssSumOrderByAggregateInput = {
    dssId?: SortOrder
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
  }

  export type DssScalarRelationFilter = {
    is?: DssWhereInput
    isNot?: DssWhereInput
  }

  export type DssAlternativeCountOrderByAggregateInput = {
    dssAlternativeId?: SortOrder
    dssId?: SortOrder
    name?: SortOrder
    sValue?: SortOrder
    rankValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DssAlternativeAvgOrderByAggregateInput = {
    dssAlternativeId?: SortOrder
    dssId?: SortOrder
    sValue?: SortOrder
    rankValue?: SortOrder
  }

  export type DssAlternativeMaxOrderByAggregateInput = {
    dssAlternativeId?: SortOrder
    dssId?: SortOrder
    name?: SortOrder
    sValue?: SortOrder
    rankValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DssAlternativeMinOrderByAggregateInput = {
    dssAlternativeId?: SortOrder
    dssId?: SortOrder
    name?: SortOrder
    sValue?: SortOrder
    rankValue?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DssAlternativeSumOrderByAggregateInput = {
    dssAlternativeId?: SortOrder
    dssId?: SortOrder
    sValue?: SortOrder
    rankValue?: SortOrder
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
  }

  export type DssAlternativeScalarRelationFilter = {
    is?: DssAlternativeWhereInput
    isNot?: DssAlternativeWhereInput
  }

  export type CriteriaScalarRelationFilter = {
    is?: CriteriaWhereInput
    isNot?: CriteriaWhereInput
  }

  export type DssCriteriaAlternativeCountOrderByAggregateInput = {
    dssCriteriaAlternativeId?: SortOrder
    dssId?: SortOrder
    dssAlternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type DssCriteriaAlternativeAvgOrderByAggregateInput = {
    dssCriteriaAlternativeId?: SortOrder
    dssId?: SortOrder
    dssAlternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrder
  }

  export type DssCriteriaAlternativeMaxOrderByAggregateInput = {
    dssCriteriaAlternativeId?: SortOrder
    dssId?: SortOrder
    dssAlternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type DssCriteriaAlternativeMinOrderByAggregateInput = {
    dssCriteriaAlternativeId?: SortOrder
    dssId?: SortOrder
    dssAlternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
  }

  export type DssCriteriaAlternativeSumOrderByAggregateInput = {
    dssCriteriaAlternativeId?: SortOrder
    dssId?: SortOrder
    dssAlternativeId?: SortOrder
    criteriaId?: SortOrder
    value?: SortOrder
  }

  export type CriteriaCreateNestedOneWithoutChildCriteriasInput = {
    create?: XOR<CriteriaCreateWithoutChildCriteriasInput, CriteriaUncheckedCreateWithoutChildCriteriasInput>
    connectOrCreate?: CriteriaCreateOrConnectWithoutChildCriteriasInput
    connect?: CriteriaWhereUniqueInput
  }

  export type CriteriaCreateNestedManyWithoutParentCriteriaInput = {
    create?: XOR<CriteriaCreateWithoutParentCriteriaInput, CriteriaUncheckedCreateWithoutParentCriteriaInput> | CriteriaCreateWithoutParentCriteriaInput[] | CriteriaUncheckedCreateWithoutParentCriteriaInput[]
    connectOrCreate?: CriteriaCreateOrConnectWithoutParentCriteriaInput | CriteriaCreateOrConnectWithoutParentCriteriaInput[]
    createMany?: CriteriaCreateManyParentCriteriaInputEnvelope
    connect?: CriteriaWhereUniqueInput | CriteriaWhereUniqueInput[]
  }

  export type DssCriteriaAlternativeCreateNestedManyWithoutCriteriaInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutCriteriaInput, DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput> | DssCriteriaAlternativeCreateWithoutCriteriaInput[] | DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutCriteriaInput | DssCriteriaAlternativeCreateOrConnectWithoutCriteriaInput[]
    createMany?: DssCriteriaAlternativeCreateManyCriteriaInputEnvelope
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
  }

  export type CriteriaUncheckedCreateNestedManyWithoutParentCriteriaInput = {
    create?: XOR<CriteriaCreateWithoutParentCriteriaInput, CriteriaUncheckedCreateWithoutParentCriteriaInput> | CriteriaCreateWithoutParentCriteriaInput[] | CriteriaUncheckedCreateWithoutParentCriteriaInput[]
    connectOrCreate?: CriteriaCreateOrConnectWithoutParentCriteriaInput | CriteriaCreateOrConnectWithoutParentCriteriaInput[]
    createMany?: CriteriaCreateManyParentCriteriaInputEnvelope
    connect?: CriteriaWhereUniqueInput | CriteriaWhereUniqueInput[]
  }

  export type DssCriteriaAlternativeUncheckedCreateNestedManyWithoutCriteriaInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutCriteriaInput, DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput> | DssCriteriaAlternativeCreateWithoutCriteriaInput[] | DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutCriteriaInput | DssCriteriaAlternativeCreateOrConnectWithoutCriteriaInput[]
    createMany?: DssCriteriaAlternativeCreateManyCriteriaInputEnvelope
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumCriteriaTypeFieldUpdateOperationsInput = {
    set?: $Enums.CriteriaType
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CriteriaUpdateOneWithoutChildCriteriasNestedInput = {
    create?: XOR<CriteriaCreateWithoutChildCriteriasInput, CriteriaUncheckedCreateWithoutChildCriteriasInput>
    connectOrCreate?: CriteriaCreateOrConnectWithoutChildCriteriasInput
    upsert?: CriteriaUpsertWithoutChildCriteriasInput
    disconnect?: CriteriaWhereInput | boolean
    delete?: CriteriaWhereInput | boolean
    connect?: CriteriaWhereUniqueInput
    update?: XOR<XOR<CriteriaUpdateToOneWithWhereWithoutChildCriteriasInput, CriteriaUpdateWithoutChildCriteriasInput>, CriteriaUncheckedUpdateWithoutChildCriteriasInput>
  }

  export type CriteriaUpdateManyWithoutParentCriteriaNestedInput = {
    create?: XOR<CriteriaCreateWithoutParentCriteriaInput, CriteriaUncheckedCreateWithoutParentCriteriaInput> | CriteriaCreateWithoutParentCriteriaInput[] | CriteriaUncheckedCreateWithoutParentCriteriaInput[]
    connectOrCreate?: CriteriaCreateOrConnectWithoutParentCriteriaInput | CriteriaCreateOrConnectWithoutParentCriteriaInput[]
    upsert?: CriteriaUpsertWithWhereUniqueWithoutParentCriteriaInput | CriteriaUpsertWithWhereUniqueWithoutParentCriteriaInput[]
    createMany?: CriteriaCreateManyParentCriteriaInputEnvelope
    set?: CriteriaWhereUniqueInput | CriteriaWhereUniqueInput[]
    disconnect?: CriteriaWhereUniqueInput | CriteriaWhereUniqueInput[]
    delete?: CriteriaWhereUniqueInput | CriteriaWhereUniqueInput[]
    connect?: CriteriaWhereUniqueInput | CriteriaWhereUniqueInput[]
    update?: CriteriaUpdateWithWhereUniqueWithoutParentCriteriaInput | CriteriaUpdateWithWhereUniqueWithoutParentCriteriaInput[]
    updateMany?: CriteriaUpdateManyWithWhereWithoutParentCriteriaInput | CriteriaUpdateManyWithWhereWithoutParentCriteriaInput[]
    deleteMany?: CriteriaScalarWhereInput | CriteriaScalarWhereInput[]
  }

  export type DssCriteriaAlternativeUpdateManyWithoutCriteriaNestedInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutCriteriaInput, DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput> | DssCriteriaAlternativeCreateWithoutCriteriaInput[] | DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutCriteriaInput | DssCriteriaAlternativeCreateOrConnectWithoutCriteriaInput[]
    upsert?: DssCriteriaAlternativeUpsertWithWhereUniqueWithoutCriteriaInput | DssCriteriaAlternativeUpsertWithWhereUniqueWithoutCriteriaInput[]
    createMany?: DssCriteriaAlternativeCreateManyCriteriaInputEnvelope
    set?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    disconnect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    delete?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    update?: DssCriteriaAlternativeUpdateWithWhereUniqueWithoutCriteriaInput | DssCriteriaAlternativeUpdateWithWhereUniqueWithoutCriteriaInput[]
    updateMany?: DssCriteriaAlternativeUpdateManyWithWhereWithoutCriteriaInput | DssCriteriaAlternativeUpdateManyWithWhereWithoutCriteriaInput[]
    deleteMany?: DssCriteriaAlternativeScalarWhereInput | DssCriteriaAlternativeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CriteriaUncheckedUpdateManyWithoutParentCriteriaNestedInput = {
    create?: XOR<CriteriaCreateWithoutParentCriteriaInput, CriteriaUncheckedCreateWithoutParentCriteriaInput> | CriteriaCreateWithoutParentCriteriaInput[] | CriteriaUncheckedCreateWithoutParentCriteriaInput[]
    connectOrCreate?: CriteriaCreateOrConnectWithoutParentCriteriaInput | CriteriaCreateOrConnectWithoutParentCriteriaInput[]
    upsert?: CriteriaUpsertWithWhereUniqueWithoutParentCriteriaInput | CriteriaUpsertWithWhereUniqueWithoutParentCriteriaInput[]
    createMany?: CriteriaCreateManyParentCriteriaInputEnvelope
    set?: CriteriaWhereUniqueInput | CriteriaWhereUniqueInput[]
    disconnect?: CriteriaWhereUniqueInput | CriteriaWhereUniqueInput[]
    delete?: CriteriaWhereUniqueInput | CriteriaWhereUniqueInput[]
    connect?: CriteriaWhereUniqueInput | CriteriaWhereUniqueInput[]
    update?: CriteriaUpdateWithWhereUniqueWithoutParentCriteriaInput | CriteriaUpdateWithWhereUniqueWithoutParentCriteriaInput[]
    updateMany?: CriteriaUpdateManyWithWhereWithoutParentCriteriaInput | CriteriaUpdateManyWithWhereWithoutParentCriteriaInput[]
    deleteMany?: CriteriaScalarWhereInput | CriteriaScalarWhereInput[]
  }

  export type DssCriteriaAlternativeUncheckedUpdateManyWithoutCriteriaNestedInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutCriteriaInput, DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput> | DssCriteriaAlternativeCreateWithoutCriteriaInput[] | DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutCriteriaInput | DssCriteriaAlternativeCreateOrConnectWithoutCriteriaInput[]
    upsert?: DssCriteriaAlternativeUpsertWithWhereUniqueWithoutCriteriaInput | DssCriteriaAlternativeUpsertWithWhereUniqueWithoutCriteriaInput[]
    createMany?: DssCriteriaAlternativeCreateManyCriteriaInputEnvelope
    set?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    disconnect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    delete?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    update?: DssCriteriaAlternativeUpdateWithWhereUniqueWithoutCriteriaInput | DssCriteriaAlternativeUpdateWithWhereUniqueWithoutCriteriaInput[]
    updateMany?: DssCriteriaAlternativeUpdateManyWithWhereWithoutCriteriaInput | DssCriteriaAlternativeUpdateManyWithWhereWithoutCriteriaInput[]
    deleteMany?: DssCriteriaAlternativeScalarWhereInput | DssCriteriaAlternativeScalarWhereInput[]
  }

  export type DssAlternativeCreateNestedManyWithoutDssInput = {
    create?: XOR<DssAlternativeCreateWithoutDssInput, DssAlternativeUncheckedCreateWithoutDssInput> | DssAlternativeCreateWithoutDssInput[] | DssAlternativeUncheckedCreateWithoutDssInput[]
    connectOrCreate?: DssAlternativeCreateOrConnectWithoutDssInput | DssAlternativeCreateOrConnectWithoutDssInput[]
    createMany?: DssAlternativeCreateManyDssInputEnvelope
    connect?: DssAlternativeWhereUniqueInput | DssAlternativeWhereUniqueInput[]
  }

  export type DssCriteriaAlternativeCreateNestedManyWithoutDssInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutDssInput, DssCriteriaAlternativeUncheckedCreateWithoutDssInput> | DssCriteriaAlternativeCreateWithoutDssInput[] | DssCriteriaAlternativeUncheckedCreateWithoutDssInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutDssInput | DssCriteriaAlternativeCreateOrConnectWithoutDssInput[]
    createMany?: DssCriteriaAlternativeCreateManyDssInputEnvelope
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
  }

  export type DssAlternativeUncheckedCreateNestedManyWithoutDssInput = {
    create?: XOR<DssAlternativeCreateWithoutDssInput, DssAlternativeUncheckedCreateWithoutDssInput> | DssAlternativeCreateWithoutDssInput[] | DssAlternativeUncheckedCreateWithoutDssInput[]
    connectOrCreate?: DssAlternativeCreateOrConnectWithoutDssInput | DssAlternativeCreateOrConnectWithoutDssInput[]
    createMany?: DssAlternativeCreateManyDssInputEnvelope
    connect?: DssAlternativeWhereUniqueInput | DssAlternativeWhereUniqueInput[]
  }

  export type DssCriteriaAlternativeUncheckedCreateNestedManyWithoutDssInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutDssInput, DssCriteriaAlternativeUncheckedCreateWithoutDssInput> | DssCriteriaAlternativeCreateWithoutDssInput[] | DssCriteriaAlternativeUncheckedCreateWithoutDssInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutDssInput | DssCriteriaAlternativeCreateOrConnectWithoutDssInput[]
    createMany?: DssCriteriaAlternativeCreateManyDssInputEnvelope
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
  }

  export type DssAlternativeUpdateManyWithoutDssNestedInput = {
    create?: XOR<DssAlternativeCreateWithoutDssInput, DssAlternativeUncheckedCreateWithoutDssInput> | DssAlternativeCreateWithoutDssInput[] | DssAlternativeUncheckedCreateWithoutDssInput[]
    connectOrCreate?: DssAlternativeCreateOrConnectWithoutDssInput | DssAlternativeCreateOrConnectWithoutDssInput[]
    upsert?: DssAlternativeUpsertWithWhereUniqueWithoutDssInput | DssAlternativeUpsertWithWhereUniqueWithoutDssInput[]
    createMany?: DssAlternativeCreateManyDssInputEnvelope
    set?: DssAlternativeWhereUniqueInput | DssAlternativeWhereUniqueInput[]
    disconnect?: DssAlternativeWhereUniqueInput | DssAlternativeWhereUniqueInput[]
    delete?: DssAlternativeWhereUniqueInput | DssAlternativeWhereUniqueInput[]
    connect?: DssAlternativeWhereUniqueInput | DssAlternativeWhereUniqueInput[]
    update?: DssAlternativeUpdateWithWhereUniqueWithoutDssInput | DssAlternativeUpdateWithWhereUniqueWithoutDssInput[]
    updateMany?: DssAlternativeUpdateManyWithWhereWithoutDssInput | DssAlternativeUpdateManyWithWhereWithoutDssInput[]
    deleteMany?: DssAlternativeScalarWhereInput | DssAlternativeScalarWhereInput[]
  }

  export type DssCriteriaAlternativeUpdateManyWithoutDssNestedInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutDssInput, DssCriteriaAlternativeUncheckedCreateWithoutDssInput> | DssCriteriaAlternativeCreateWithoutDssInput[] | DssCriteriaAlternativeUncheckedCreateWithoutDssInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutDssInput | DssCriteriaAlternativeCreateOrConnectWithoutDssInput[]
    upsert?: DssCriteriaAlternativeUpsertWithWhereUniqueWithoutDssInput | DssCriteriaAlternativeUpsertWithWhereUniqueWithoutDssInput[]
    createMany?: DssCriteriaAlternativeCreateManyDssInputEnvelope
    set?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    disconnect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    delete?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    update?: DssCriteriaAlternativeUpdateWithWhereUniqueWithoutDssInput | DssCriteriaAlternativeUpdateWithWhereUniqueWithoutDssInput[]
    updateMany?: DssCriteriaAlternativeUpdateManyWithWhereWithoutDssInput | DssCriteriaAlternativeUpdateManyWithWhereWithoutDssInput[]
    deleteMany?: DssCriteriaAlternativeScalarWhereInput | DssCriteriaAlternativeScalarWhereInput[]
  }

  export type DssAlternativeUncheckedUpdateManyWithoutDssNestedInput = {
    create?: XOR<DssAlternativeCreateWithoutDssInput, DssAlternativeUncheckedCreateWithoutDssInput> | DssAlternativeCreateWithoutDssInput[] | DssAlternativeUncheckedCreateWithoutDssInput[]
    connectOrCreate?: DssAlternativeCreateOrConnectWithoutDssInput | DssAlternativeCreateOrConnectWithoutDssInput[]
    upsert?: DssAlternativeUpsertWithWhereUniqueWithoutDssInput | DssAlternativeUpsertWithWhereUniqueWithoutDssInput[]
    createMany?: DssAlternativeCreateManyDssInputEnvelope
    set?: DssAlternativeWhereUniqueInput | DssAlternativeWhereUniqueInput[]
    disconnect?: DssAlternativeWhereUniqueInput | DssAlternativeWhereUniqueInput[]
    delete?: DssAlternativeWhereUniqueInput | DssAlternativeWhereUniqueInput[]
    connect?: DssAlternativeWhereUniqueInput | DssAlternativeWhereUniqueInput[]
    update?: DssAlternativeUpdateWithWhereUniqueWithoutDssInput | DssAlternativeUpdateWithWhereUniqueWithoutDssInput[]
    updateMany?: DssAlternativeUpdateManyWithWhereWithoutDssInput | DssAlternativeUpdateManyWithWhereWithoutDssInput[]
    deleteMany?: DssAlternativeScalarWhereInput | DssAlternativeScalarWhereInput[]
  }

  export type DssCriteriaAlternativeUncheckedUpdateManyWithoutDssNestedInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutDssInput, DssCriteriaAlternativeUncheckedCreateWithoutDssInput> | DssCriteriaAlternativeCreateWithoutDssInput[] | DssCriteriaAlternativeUncheckedCreateWithoutDssInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutDssInput | DssCriteriaAlternativeCreateOrConnectWithoutDssInput[]
    upsert?: DssCriteriaAlternativeUpsertWithWhereUniqueWithoutDssInput | DssCriteriaAlternativeUpsertWithWhereUniqueWithoutDssInput[]
    createMany?: DssCriteriaAlternativeCreateManyDssInputEnvelope
    set?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    disconnect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    delete?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    update?: DssCriteriaAlternativeUpdateWithWhereUniqueWithoutDssInput | DssCriteriaAlternativeUpdateWithWhereUniqueWithoutDssInput[]
    updateMany?: DssCriteriaAlternativeUpdateManyWithWhereWithoutDssInput | DssCriteriaAlternativeUpdateManyWithWhereWithoutDssInput[]
    deleteMany?: DssCriteriaAlternativeScalarWhereInput | DssCriteriaAlternativeScalarWhereInput[]
  }

  export type DssCreateNestedOneWithoutDssAlternativesInput = {
    create?: XOR<DssCreateWithoutDssAlternativesInput, DssUncheckedCreateWithoutDssAlternativesInput>
    connectOrCreate?: DssCreateOrConnectWithoutDssAlternativesInput
    connect?: DssWhereUniqueInput
  }

  export type DssCriteriaAlternativeCreateNestedManyWithoutDssAlternativeInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutDssAlternativeInput, DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput> | DssCriteriaAlternativeCreateWithoutDssAlternativeInput[] | DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutDssAlternativeInput | DssCriteriaAlternativeCreateOrConnectWithoutDssAlternativeInput[]
    createMany?: DssCriteriaAlternativeCreateManyDssAlternativeInputEnvelope
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
  }

  export type DssCriteriaAlternativeUncheckedCreateNestedManyWithoutDssAlternativeInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutDssAlternativeInput, DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput> | DssCriteriaAlternativeCreateWithoutDssAlternativeInput[] | DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutDssAlternativeInput | DssCriteriaAlternativeCreateOrConnectWithoutDssAlternativeInput[]
    createMany?: DssCriteriaAlternativeCreateManyDssAlternativeInputEnvelope
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DssUpdateOneRequiredWithoutDssAlternativesNestedInput = {
    create?: XOR<DssCreateWithoutDssAlternativesInput, DssUncheckedCreateWithoutDssAlternativesInput>
    connectOrCreate?: DssCreateOrConnectWithoutDssAlternativesInput
    upsert?: DssUpsertWithoutDssAlternativesInput
    connect?: DssWhereUniqueInput
    update?: XOR<XOR<DssUpdateToOneWithWhereWithoutDssAlternativesInput, DssUpdateWithoutDssAlternativesInput>, DssUncheckedUpdateWithoutDssAlternativesInput>
  }

  export type DssCriteriaAlternativeUpdateManyWithoutDssAlternativeNestedInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutDssAlternativeInput, DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput> | DssCriteriaAlternativeCreateWithoutDssAlternativeInput[] | DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutDssAlternativeInput | DssCriteriaAlternativeCreateOrConnectWithoutDssAlternativeInput[]
    upsert?: DssCriteriaAlternativeUpsertWithWhereUniqueWithoutDssAlternativeInput | DssCriteriaAlternativeUpsertWithWhereUniqueWithoutDssAlternativeInput[]
    createMany?: DssCriteriaAlternativeCreateManyDssAlternativeInputEnvelope
    set?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    disconnect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    delete?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    update?: DssCriteriaAlternativeUpdateWithWhereUniqueWithoutDssAlternativeInput | DssCriteriaAlternativeUpdateWithWhereUniqueWithoutDssAlternativeInput[]
    updateMany?: DssCriteriaAlternativeUpdateManyWithWhereWithoutDssAlternativeInput | DssCriteriaAlternativeUpdateManyWithWhereWithoutDssAlternativeInput[]
    deleteMany?: DssCriteriaAlternativeScalarWhereInput | DssCriteriaAlternativeScalarWhereInput[]
  }

  export type DssCriteriaAlternativeUncheckedUpdateManyWithoutDssAlternativeNestedInput = {
    create?: XOR<DssCriteriaAlternativeCreateWithoutDssAlternativeInput, DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput> | DssCriteriaAlternativeCreateWithoutDssAlternativeInput[] | DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput[]
    connectOrCreate?: DssCriteriaAlternativeCreateOrConnectWithoutDssAlternativeInput | DssCriteriaAlternativeCreateOrConnectWithoutDssAlternativeInput[]
    upsert?: DssCriteriaAlternativeUpsertWithWhereUniqueWithoutDssAlternativeInput | DssCriteriaAlternativeUpsertWithWhereUniqueWithoutDssAlternativeInput[]
    createMany?: DssCriteriaAlternativeCreateManyDssAlternativeInputEnvelope
    set?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    disconnect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    delete?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    connect?: DssCriteriaAlternativeWhereUniqueInput | DssCriteriaAlternativeWhereUniqueInput[]
    update?: DssCriteriaAlternativeUpdateWithWhereUniqueWithoutDssAlternativeInput | DssCriteriaAlternativeUpdateWithWhereUniqueWithoutDssAlternativeInput[]
    updateMany?: DssCriteriaAlternativeUpdateManyWithWhereWithoutDssAlternativeInput | DssCriteriaAlternativeUpdateManyWithWhereWithoutDssAlternativeInput[]
    deleteMany?: DssCriteriaAlternativeScalarWhereInput | DssCriteriaAlternativeScalarWhereInput[]
  }

  export type DssCreateNestedOneWithoutDssCriteriaAlternativesInput = {
    create?: XOR<DssCreateWithoutDssCriteriaAlternativesInput, DssUncheckedCreateWithoutDssCriteriaAlternativesInput>
    connectOrCreate?: DssCreateOrConnectWithoutDssCriteriaAlternativesInput
    connect?: DssWhereUniqueInput
  }

  export type DssAlternativeCreateNestedOneWithoutDssCriteriaAlternativesInput = {
    create?: XOR<DssAlternativeCreateWithoutDssCriteriaAlternativesInput, DssAlternativeUncheckedCreateWithoutDssCriteriaAlternativesInput>
    connectOrCreate?: DssAlternativeCreateOrConnectWithoutDssCriteriaAlternativesInput
    connect?: DssAlternativeWhereUniqueInput
  }

  export type CriteriaCreateNestedOneWithoutDssCriteriaAlternativesInput = {
    create?: XOR<CriteriaCreateWithoutDssCriteriaAlternativesInput, CriteriaUncheckedCreateWithoutDssCriteriaAlternativesInput>
    connectOrCreate?: CriteriaCreateOrConnectWithoutDssCriteriaAlternativesInput
    connect?: CriteriaWhereUniqueInput
  }

  export type DssUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput = {
    create?: XOR<DssCreateWithoutDssCriteriaAlternativesInput, DssUncheckedCreateWithoutDssCriteriaAlternativesInput>
    connectOrCreate?: DssCreateOrConnectWithoutDssCriteriaAlternativesInput
    upsert?: DssUpsertWithoutDssCriteriaAlternativesInput
    connect?: DssWhereUniqueInput
    update?: XOR<XOR<DssUpdateToOneWithWhereWithoutDssCriteriaAlternativesInput, DssUpdateWithoutDssCriteriaAlternativesInput>, DssUncheckedUpdateWithoutDssCriteriaAlternativesInput>
  }

  export type DssAlternativeUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput = {
    create?: XOR<DssAlternativeCreateWithoutDssCriteriaAlternativesInput, DssAlternativeUncheckedCreateWithoutDssCriteriaAlternativesInput>
    connectOrCreate?: DssAlternativeCreateOrConnectWithoutDssCriteriaAlternativesInput
    upsert?: DssAlternativeUpsertWithoutDssCriteriaAlternativesInput
    connect?: DssAlternativeWhereUniqueInput
    update?: XOR<XOR<DssAlternativeUpdateToOneWithWhereWithoutDssCriteriaAlternativesInput, DssAlternativeUpdateWithoutDssCriteriaAlternativesInput>, DssAlternativeUncheckedUpdateWithoutDssCriteriaAlternativesInput>
  }

  export type CriteriaUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput = {
    create?: XOR<CriteriaCreateWithoutDssCriteriaAlternativesInput, CriteriaUncheckedCreateWithoutDssCriteriaAlternativesInput>
    connectOrCreate?: CriteriaCreateOrConnectWithoutDssCriteriaAlternativesInput
    upsert?: CriteriaUpsertWithoutDssCriteriaAlternativesInput
    connect?: CriteriaWhereUniqueInput
    update?: XOR<XOR<CriteriaUpdateToOneWithWhereWithoutDssCriteriaAlternativesInput, CriteriaUpdateWithoutDssCriteriaAlternativesInput>, CriteriaUncheckedUpdateWithoutDssCriteriaAlternativesInput>
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

  export type NestedEnumCriteriaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CriteriaType | EnumCriteriaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CriteriaType[] | ListEnumCriteriaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CriteriaType[] | ListEnumCriteriaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCriteriaTypeFilter<$PrismaModel> | $Enums.CriteriaType
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

  export type NestedEnumCriteriaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CriteriaType | EnumCriteriaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CriteriaType[] | ListEnumCriteriaTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CriteriaType[] | ListEnumCriteriaTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCriteriaTypeWithAggregatesFilter<$PrismaModel> | $Enums.CriteriaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCriteriaTypeFilter<$PrismaModel>
    _max?: NestedEnumCriteriaTypeFilter<$PrismaModel>
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
  }

  export type CriteriaCreateWithoutChildCriteriasInput = {
    criteriaName: string
    type?: $Enums.CriteriaType
    weight: number
    createdAt?: Date | string
    parentCriteria?: CriteriaCreateNestedOneWithoutChildCriteriasInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeCreateNestedManyWithoutCriteriaInput
  }

  export type CriteriaUncheckedCreateWithoutChildCriteriasInput = {
    criteriaId?: number
    criteriaName: string
    type?: $Enums.CriteriaType
    weight: number
    parentCriteriaId?: number | null
    createdAt?: Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedCreateNestedManyWithoutCriteriaInput
  }

  export type CriteriaCreateOrConnectWithoutChildCriteriasInput = {
    where: CriteriaWhereUniqueInput
    create: XOR<CriteriaCreateWithoutChildCriteriasInput, CriteriaUncheckedCreateWithoutChildCriteriasInput>
  }

  export type CriteriaCreateWithoutParentCriteriaInput = {
    criteriaName: string
    type?: $Enums.CriteriaType
    weight: number
    createdAt?: Date | string
    childCriterias?: CriteriaCreateNestedManyWithoutParentCriteriaInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeCreateNestedManyWithoutCriteriaInput
  }

  export type CriteriaUncheckedCreateWithoutParentCriteriaInput = {
    criteriaId?: number
    criteriaName: string
    type?: $Enums.CriteriaType
    weight: number
    createdAt?: Date | string
    childCriterias?: CriteriaUncheckedCreateNestedManyWithoutParentCriteriaInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedCreateNestedManyWithoutCriteriaInput
  }

  export type CriteriaCreateOrConnectWithoutParentCriteriaInput = {
    where: CriteriaWhereUniqueInput
    create: XOR<CriteriaCreateWithoutParentCriteriaInput, CriteriaUncheckedCreateWithoutParentCriteriaInput>
  }

  export type CriteriaCreateManyParentCriteriaInputEnvelope = {
    data: CriteriaCreateManyParentCriteriaInput | CriteriaCreateManyParentCriteriaInput[]
    skipDuplicates?: boolean
  }

  export type DssCriteriaAlternativeCreateWithoutCriteriaInput = {
    value?: number | null
    createdAt?: Date | string
    dss: DssCreateNestedOneWithoutDssCriteriaAlternativesInput
    dssAlternative: DssAlternativeCreateNestedOneWithoutDssCriteriaAlternativesInput
  }

  export type DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput = {
    dssCriteriaAlternativeId?: number
    dssId: number
    dssAlternativeId: number
    value?: number | null
    createdAt?: Date | string
  }

  export type DssCriteriaAlternativeCreateOrConnectWithoutCriteriaInput = {
    where: DssCriteriaAlternativeWhereUniqueInput
    create: XOR<DssCriteriaAlternativeCreateWithoutCriteriaInput, DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput>
  }

  export type DssCriteriaAlternativeCreateManyCriteriaInputEnvelope = {
    data: DssCriteriaAlternativeCreateManyCriteriaInput | DssCriteriaAlternativeCreateManyCriteriaInput[]
    skipDuplicates?: boolean
  }

  export type CriteriaUpsertWithoutChildCriteriasInput = {
    update: XOR<CriteriaUpdateWithoutChildCriteriasInput, CriteriaUncheckedUpdateWithoutChildCriteriasInput>
    create: XOR<CriteriaCreateWithoutChildCriteriasInput, CriteriaUncheckedCreateWithoutChildCriteriasInput>
    where?: CriteriaWhereInput
  }

  export type CriteriaUpdateToOneWithWhereWithoutChildCriteriasInput = {
    where?: CriteriaWhereInput
    data: XOR<CriteriaUpdateWithoutChildCriteriasInput, CriteriaUncheckedUpdateWithoutChildCriteriasInput>
  }

  export type CriteriaUpdateWithoutChildCriteriasInput = {
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCriteria?: CriteriaUpdateOneWithoutChildCriteriasNestedInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUpdateManyWithoutCriteriaNestedInput
  }

  export type CriteriaUncheckedUpdateWithoutChildCriteriasInput = {
    criteriaId?: IntFieldUpdateOperationsInput | number
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    parentCriteriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedUpdateManyWithoutCriteriaNestedInput
  }

  export type CriteriaUpsertWithWhereUniqueWithoutParentCriteriaInput = {
    where: CriteriaWhereUniqueInput
    update: XOR<CriteriaUpdateWithoutParentCriteriaInput, CriteriaUncheckedUpdateWithoutParentCriteriaInput>
    create: XOR<CriteriaCreateWithoutParentCriteriaInput, CriteriaUncheckedCreateWithoutParentCriteriaInput>
  }

  export type CriteriaUpdateWithWhereUniqueWithoutParentCriteriaInput = {
    where: CriteriaWhereUniqueInput
    data: XOR<CriteriaUpdateWithoutParentCriteriaInput, CriteriaUncheckedUpdateWithoutParentCriteriaInput>
  }

  export type CriteriaUpdateManyWithWhereWithoutParentCriteriaInput = {
    where: CriteriaScalarWhereInput
    data: XOR<CriteriaUpdateManyMutationInput, CriteriaUncheckedUpdateManyWithoutParentCriteriaInput>
  }

  export type CriteriaScalarWhereInput = {
    AND?: CriteriaScalarWhereInput | CriteriaScalarWhereInput[]
    OR?: CriteriaScalarWhereInput[]
    NOT?: CriteriaScalarWhereInput | CriteriaScalarWhereInput[]
    criteriaId?: IntFilter<"Criteria"> | number
    criteriaName?: StringFilter<"Criteria"> | string
    type?: EnumCriteriaTypeFilter<"Criteria"> | $Enums.CriteriaType
    weight?: FloatFilter<"Criteria"> | number
    parentCriteriaId?: IntNullableFilter<"Criteria"> | number | null
    createdAt?: DateTimeFilter<"Criteria"> | Date | string
  }

  export type DssCriteriaAlternativeUpsertWithWhereUniqueWithoutCriteriaInput = {
    where: DssCriteriaAlternativeWhereUniqueInput
    update: XOR<DssCriteriaAlternativeUpdateWithoutCriteriaInput, DssCriteriaAlternativeUncheckedUpdateWithoutCriteriaInput>
    create: XOR<DssCriteriaAlternativeCreateWithoutCriteriaInput, DssCriteriaAlternativeUncheckedCreateWithoutCriteriaInput>
  }

  export type DssCriteriaAlternativeUpdateWithWhereUniqueWithoutCriteriaInput = {
    where: DssCriteriaAlternativeWhereUniqueInput
    data: XOR<DssCriteriaAlternativeUpdateWithoutCriteriaInput, DssCriteriaAlternativeUncheckedUpdateWithoutCriteriaInput>
  }

  export type DssCriteriaAlternativeUpdateManyWithWhereWithoutCriteriaInput = {
    where: DssCriteriaAlternativeScalarWhereInput
    data: XOR<DssCriteriaAlternativeUpdateManyMutationInput, DssCriteriaAlternativeUncheckedUpdateManyWithoutCriteriaInput>
  }

  export type DssCriteriaAlternativeScalarWhereInput = {
    AND?: DssCriteriaAlternativeScalarWhereInput | DssCriteriaAlternativeScalarWhereInput[]
    OR?: DssCriteriaAlternativeScalarWhereInput[]
    NOT?: DssCriteriaAlternativeScalarWhereInput | DssCriteriaAlternativeScalarWhereInput[]
    dssCriteriaAlternativeId?: IntFilter<"DssCriteriaAlternative"> | number
    dssId?: IntFilter<"DssCriteriaAlternative"> | number
    dssAlternativeId?: IntFilter<"DssCriteriaAlternative"> | number
    criteriaId?: IntFilter<"DssCriteriaAlternative"> | number
    value?: FloatNullableFilter<"DssCriteriaAlternative"> | number | null
    createdAt?: DateTimeFilter<"DssCriteriaAlternative"> | Date | string
  }

  export type DssAlternativeCreateWithoutDssInput = {
    name: string
    sValue?: number | null
    rankValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeCreateNestedManyWithoutDssAlternativeInput
  }

  export type DssAlternativeUncheckedCreateWithoutDssInput = {
    dssAlternativeId?: number
    name: string
    sValue?: number | null
    rankValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedCreateNestedManyWithoutDssAlternativeInput
  }

  export type DssAlternativeCreateOrConnectWithoutDssInput = {
    where: DssAlternativeWhereUniqueInput
    create: XOR<DssAlternativeCreateWithoutDssInput, DssAlternativeUncheckedCreateWithoutDssInput>
  }

  export type DssAlternativeCreateManyDssInputEnvelope = {
    data: DssAlternativeCreateManyDssInput | DssAlternativeCreateManyDssInput[]
    skipDuplicates?: boolean
  }

  export type DssCriteriaAlternativeCreateWithoutDssInput = {
    value?: number | null
    createdAt?: Date | string
    dssAlternative: DssAlternativeCreateNestedOneWithoutDssCriteriaAlternativesInput
    criteria: CriteriaCreateNestedOneWithoutDssCriteriaAlternativesInput
  }

  export type DssCriteriaAlternativeUncheckedCreateWithoutDssInput = {
    dssCriteriaAlternativeId?: number
    dssAlternativeId: number
    criteriaId: number
    value?: number | null
    createdAt?: Date | string
  }

  export type DssCriteriaAlternativeCreateOrConnectWithoutDssInput = {
    where: DssCriteriaAlternativeWhereUniqueInput
    create: XOR<DssCriteriaAlternativeCreateWithoutDssInput, DssCriteriaAlternativeUncheckedCreateWithoutDssInput>
  }

  export type DssCriteriaAlternativeCreateManyDssInputEnvelope = {
    data: DssCriteriaAlternativeCreateManyDssInput | DssCriteriaAlternativeCreateManyDssInput[]
    skipDuplicates?: boolean
  }

  export type DssAlternativeUpsertWithWhereUniqueWithoutDssInput = {
    where: DssAlternativeWhereUniqueInput
    update: XOR<DssAlternativeUpdateWithoutDssInput, DssAlternativeUncheckedUpdateWithoutDssInput>
    create: XOR<DssAlternativeCreateWithoutDssInput, DssAlternativeUncheckedCreateWithoutDssInput>
  }

  export type DssAlternativeUpdateWithWhereUniqueWithoutDssInput = {
    where: DssAlternativeWhereUniqueInput
    data: XOR<DssAlternativeUpdateWithoutDssInput, DssAlternativeUncheckedUpdateWithoutDssInput>
  }

  export type DssAlternativeUpdateManyWithWhereWithoutDssInput = {
    where: DssAlternativeScalarWhereInput
    data: XOR<DssAlternativeUpdateManyMutationInput, DssAlternativeUncheckedUpdateManyWithoutDssInput>
  }

  export type DssAlternativeScalarWhereInput = {
    AND?: DssAlternativeScalarWhereInput | DssAlternativeScalarWhereInput[]
    OR?: DssAlternativeScalarWhereInput[]
    NOT?: DssAlternativeScalarWhereInput | DssAlternativeScalarWhereInput[]
    dssAlternativeId?: IntFilter<"DssAlternative"> | number
    dssId?: IntFilter<"DssAlternative"> | number
    name?: StringFilter<"DssAlternative"> | string
    sValue?: FloatNullableFilter<"DssAlternative"> | number | null
    rankValue?: IntNullableFilter<"DssAlternative"> | number | null
    createdAt?: DateTimeFilter<"DssAlternative"> | Date | string
    updatedAt?: DateTimeFilter<"DssAlternative"> | Date | string
  }

  export type DssCriteriaAlternativeUpsertWithWhereUniqueWithoutDssInput = {
    where: DssCriteriaAlternativeWhereUniqueInput
    update: XOR<DssCriteriaAlternativeUpdateWithoutDssInput, DssCriteriaAlternativeUncheckedUpdateWithoutDssInput>
    create: XOR<DssCriteriaAlternativeCreateWithoutDssInput, DssCriteriaAlternativeUncheckedCreateWithoutDssInput>
  }

  export type DssCriteriaAlternativeUpdateWithWhereUniqueWithoutDssInput = {
    where: DssCriteriaAlternativeWhereUniqueInput
    data: XOR<DssCriteriaAlternativeUpdateWithoutDssInput, DssCriteriaAlternativeUncheckedUpdateWithoutDssInput>
  }

  export type DssCriteriaAlternativeUpdateManyWithWhereWithoutDssInput = {
    where: DssCriteriaAlternativeScalarWhereInput
    data: XOR<DssCriteriaAlternativeUpdateManyMutationInput, DssCriteriaAlternativeUncheckedUpdateManyWithoutDssInput>
  }

  export type DssCreateWithoutDssAlternativesInput = {
    creator: string
    createdAt?: Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeCreateNestedManyWithoutDssInput
  }

  export type DssUncheckedCreateWithoutDssAlternativesInput = {
    dssId?: number
    creator: string
    createdAt?: Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedCreateNestedManyWithoutDssInput
  }

  export type DssCreateOrConnectWithoutDssAlternativesInput = {
    where: DssWhereUniqueInput
    create: XOR<DssCreateWithoutDssAlternativesInput, DssUncheckedCreateWithoutDssAlternativesInput>
  }

  export type DssCriteriaAlternativeCreateWithoutDssAlternativeInput = {
    value?: number | null
    createdAt?: Date | string
    dss: DssCreateNestedOneWithoutDssCriteriaAlternativesInput
    criteria: CriteriaCreateNestedOneWithoutDssCriteriaAlternativesInput
  }

  export type DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput = {
    dssCriteriaAlternativeId?: number
    dssId: number
    criteriaId: number
    value?: number | null
    createdAt?: Date | string
  }

  export type DssCriteriaAlternativeCreateOrConnectWithoutDssAlternativeInput = {
    where: DssCriteriaAlternativeWhereUniqueInput
    create: XOR<DssCriteriaAlternativeCreateWithoutDssAlternativeInput, DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput>
  }

  export type DssCriteriaAlternativeCreateManyDssAlternativeInputEnvelope = {
    data: DssCriteriaAlternativeCreateManyDssAlternativeInput | DssCriteriaAlternativeCreateManyDssAlternativeInput[]
    skipDuplicates?: boolean
  }

  export type DssUpsertWithoutDssAlternativesInput = {
    update: XOR<DssUpdateWithoutDssAlternativesInput, DssUncheckedUpdateWithoutDssAlternativesInput>
    create: XOR<DssCreateWithoutDssAlternativesInput, DssUncheckedCreateWithoutDssAlternativesInput>
    where?: DssWhereInput
  }

  export type DssUpdateToOneWithWhereWithoutDssAlternativesInput = {
    where?: DssWhereInput
    data: XOR<DssUpdateWithoutDssAlternativesInput, DssUncheckedUpdateWithoutDssAlternativesInput>
  }

  export type DssUpdateWithoutDssAlternativesInput = {
    creator?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeUpdateManyWithoutDssNestedInput
  }

  export type DssUncheckedUpdateWithoutDssAlternativesInput = {
    dssId?: IntFieldUpdateOperationsInput | number
    creator?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedUpdateManyWithoutDssNestedInput
  }

  export type DssCriteriaAlternativeUpsertWithWhereUniqueWithoutDssAlternativeInput = {
    where: DssCriteriaAlternativeWhereUniqueInput
    update: XOR<DssCriteriaAlternativeUpdateWithoutDssAlternativeInput, DssCriteriaAlternativeUncheckedUpdateWithoutDssAlternativeInput>
    create: XOR<DssCriteriaAlternativeCreateWithoutDssAlternativeInput, DssCriteriaAlternativeUncheckedCreateWithoutDssAlternativeInput>
  }

  export type DssCriteriaAlternativeUpdateWithWhereUniqueWithoutDssAlternativeInput = {
    where: DssCriteriaAlternativeWhereUniqueInput
    data: XOR<DssCriteriaAlternativeUpdateWithoutDssAlternativeInput, DssCriteriaAlternativeUncheckedUpdateWithoutDssAlternativeInput>
  }

  export type DssCriteriaAlternativeUpdateManyWithWhereWithoutDssAlternativeInput = {
    where: DssCriteriaAlternativeScalarWhereInput
    data: XOR<DssCriteriaAlternativeUpdateManyMutationInput, DssCriteriaAlternativeUncheckedUpdateManyWithoutDssAlternativeInput>
  }

  export type DssCreateWithoutDssCriteriaAlternativesInput = {
    creator: string
    createdAt?: Date | string
    dssAlternatives?: DssAlternativeCreateNestedManyWithoutDssInput
  }

  export type DssUncheckedCreateWithoutDssCriteriaAlternativesInput = {
    dssId?: number
    creator: string
    createdAt?: Date | string
    dssAlternatives?: DssAlternativeUncheckedCreateNestedManyWithoutDssInput
  }

  export type DssCreateOrConnectWithoutDssCriteriaAlternativesInput = {
    where: DssWhereUniqueInput
    create: XOR<DssCreateWithoutDssCriteriaAlternativesInput, DssUncheckedCreateWithoutDssCriteriaAlternativesInput>
  }

  export type DssAlternativeCreateWithoutDssCriteriaAlternativesInput = {
    name: string
    sValue?: number | null
    rankValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dss: DssCreateNestedOneWithoutDssAlternativesInput
  }

  export type DssAlternativeUncheckedCreateWithoutDssCriteriaAlternativesInput = {
    dssAlternativeId?: number
    dssId: number
    name: string
    sValue?: number | null
    rankValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DssAlternativeCreateOrConnectWithoutDssCriteriaAlternativesInput = {
    where: DssAlternativeWhereUniqueInput
    create: XOR<DssAlternativeCreateWithoutDssCriteriaAlternativesInput, DssAlternativeUncheckedCreateWithoutDssCriteriaAlternativesInput>
  }

  export type CriteriaCreateWithoutDssCriteriaAlternativesInput = {
    criteriaName: string
    type?: $Enums.CriteriaType
    weight: number
    createdAt?: Date | string
    parentCriteria?: CriteriaCreateNestedOneWithoutChildCriteriasInput
    childCriterias?: CriteriaCreateNestedManyWithoutParentCriteriaInput
  }

  export type CriteriaUncheckedCreateWithoutDssCriteriaAlternativesInput = {
    criteriaId?: number
    criteriaName: string
    type?: $Enums.CriteriaType
    weight: number
    parentCriteriaId?: number | null
    createdAt?: Date | string
    childCriterias?: CriteriaUncheckedCreateNestedManyWithoutParentCriteriaInput
  }

  export type CriteriaCreateOrConnectWithoutDssCriteriaAlternativesInput = {
    where: CriteriaWhereUniqueInput
    create: XOR<CriteriaCreateWithoutDssCriteriaAlternativesInput, CriteriaUncheckedCreateWithoutDssCriteriaAlternativesInput>
  }

  export type DssUpsertWithoutDssCriteriaAlternativesInput = {
    update: XOR<DssUpdateWithoutDssCriteriaAlternativesInput, DssUncheckedUpdateWithoutDssCriteriaAlternativesInput>
    create: XOR<DssCreateWithoutDssCriteriaAlternativesInput, DssUncheckedCreateWithoutDssCriteriaAlternativesInput>
    where?: DssWhereInput
  }

  export type DssUpdateToOneWithWhereWithoutDssCriteriaAlternativesInput = {
    where?: DssWhereInput
    data: XOR<DssUpdateWithoutDssCriteriaAlternativesInput, DssUncheckedUpdateWithoutDssCriteriaAlternativesInput>
  }

  export type DssUpdateWithoutDssCriteriaAlternativesInput = {
    creator?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssAlternatives?: DssAlternativeUpdateManyWithoutDssNestedInput
  }

  export type DssUncheckedUpdateWithoutDssCriteriaAlternativesInput = {
    dssId?: IntFieldUpdateOperationsInput | number
    creator?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssAlternatives?: DssAlternativeUncheckedUpdateManyWithoutDssNestedInput
  }

  export type DssAlternativeUpsertWithoutDssCriteriaAlternativesInput = {
    update: XOR<DssAlternativeUpdateWithoutDssCriteriaAlternativesInput, DssAlternativeUncheckedUpdateWithoutDssCriteriaAlternativesInput>
    create: XOR<DssAlternativeCreateWithoutDssCriteriaAlternativesInput, DssAlternativeUncheckedCreateWithoutDssCriteriaAlternativesInput>
    where?: DssAlternativeWhereInput
  }

  export type DssAlternativeUpdateToOneWithWhereWithoutDssCriteriaAlternativesInput = {
    where?: DssAlternativeWhereInput
    data: XOR<DssAlternativeUpdateWithoutDssCriteriaAlternativesInput, DssAlternativeUncheckedUpdateWithoutDssCriteriaAlternativesInput>
  }

  export type DssAlternativeUpdateWithoutDssCriteriaAlternativesInput = {
    name?: StringFieldUpdateOperationsInput | string
    sValue?: NullableFloatFieldUpdateOperationsInput | number | null
    rankValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dss?: DssUpdateOneRequiredWithoutDssAlternativesNestedInput
  }

  export type DssAlternativeUncheckedUpdateWithoutDssCriteriaAlternativesInput = {
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    dssId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sValue?: NullableFloatFieldUpdateOperationsInput | number | null
    rankValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CriteriaUpsertWithoutDssCriteriaAlternativesInput = {
    update: XOR<CriteriaUpdateWithoutDssCriteriaAlternativesInput, CriteriaUncheckedUpdateWithoutDssCriteriaAlternativesInput>
    create: XOR<CriteriaCreateWithoutDssCriteriaAlternativesInput, CriteriaUncheckedCreateWithoutDssCriteriaAlternativesInput>
    where?: CriteriaWhereInput
  }

  export type CriteriaUpdateToOneWithWhereWithoutDssCriteriaAlternativesInput = {
    where?: CriteriaWhereInput
    data: XOR<CriteriaUpdateWithoutDssCriteriaAlternativesInput, CriteriaUncheckedUpdateWithoutDssCriteriaAlternativesInput>
  }

  export type CriteriaUpdateWithoutDssCriteriaAlternativesInput = {
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parentCriteria?: CriteriaUpdateOneWithoutChildCriteriasNestedInput
    childCriterias?: CriteriaUpdateManyWithoutParentCriteriaNestedInput
  }

  export type CriteriaUncheckedUpdateWithoutDssCriteriaAlternativesInput = {
    criteriaId?: IntFieldUpdateOperationsInput | number
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    parentCriteriaId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childCriterias?: CriteriaUncheckedUpdateManyWithoutParentCriteriaNestedInput
  }

  export type CriteriaCreateManyParentCriteriaInput = {
    criteriaId?: number
    criteriaName: string
    type?: $Enums.CriteriaType
    weight: number
    createdAt?: Date | string
  }

  export type DssCriteriaAlternativeCreateManyCriteriaInput = {
    dssCriteriaAlternativeId?: number
    dssId: number
    dssAlternativeId: number
    value?: number | null
    createdAt?: Date | string
  }

  export type CriteriaUpdateWithoutParentCriteriaInput = {
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childCriterias?: CriteriaUpdateManyWithoutParentCriteriaNestedInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUpdateManyWithoutCriteriaNestedInput
  }

  export type CriteriaUncheckedUpdateWithoutParentCriteriaInput = {
    criteriaId?: IntFieldUpdateOperationsInput | number
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childCriterias?: CriteriaUncheckedUpdateManyWithoutParentCriteriaNestedInput
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedUpdateManyWithoutCriteriaNestedInput
  }

  export type CriteriaUncheckedUpdateManyWithoutParentCriteriaInput = {
    criteriaId?: IntFieldUpdateOperationsInput | number
    criteriaName?: StringFieldUpdateOperationsInput | string
    type?: EnumCriteriaTypeFieldUpdateOperationsInput | $Enums.CriteriaType
    weight?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssCriteriaAlternativeUpdateWithoutCriteriaInput = {
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dss?: DssUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput
    dssAlternative?: DssAlternativeUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput
  }

  export type DssCriteriaAlternativeUncheckedUpdateWithoutCriteriaInput = {
    dssCriteriaAlternativeId?: IntFieldUpdateOperationsInput | number
    dssId?: IntFieldUpdateOperationsInput | number
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssCriteriaAlternativeUncheckedUpdateManyWithoutCriteriaInput = {
    dssCriteriaAlternativeId?: IntFieldUpdateOperationsInput | number
    dssId?: IntFieldUpdateOperationsInput | number
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssAlternativeCreateManyDssInput = {
    dssAlternativeId?: number
    name: string
    sValue?: number | null
    rankValue?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DssCriteriaAlternativeCreateManyDssInput = {
    dssCriteriaAlternativeId?: number
    dssAlternativeId: number
    criteriaId: number
    value?: number | null
    createdAt?: Date | string
  }

  export type DssAlternativeUpdateWithoutDssInput = {
    name?: StringFieldUpdateOperationsInput | string
    sValue?: NullableFloatFieldUpdateOperationsInput | number | null
    rankValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeUpdateManyWithoutDssAlternativeNestedInput
  }

  export type DssAlternativeUncheckedUpdateWithoutDssInput = {
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sValue?: NullableFloatFieldUpdateOperationsInput | number | null
    rankValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssCriteriaAlternatives?: DssCriteriaAlternativeUncheckedUpdateManyWithoutDssAlternativeNestedInput
  }

  export type DssAlternativeUncheckedUpdateManyWithoutDssInput = {
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sValue?: NullableFloatFieldUpdateOperationsInput | number | null
    rankValue?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssCriteriaAlternativeUpdateWithoutDssInput = {
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dssAlternative?: DssAlternativeUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput
    criteria?: CriteriaUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput
  }

  export type DssCriteriaAlternativeUncheckedUpdateWithoutDssInput = {
    dssCriteriaAlternativeId?: IntFieldUpdateOperationsInput | number
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    criteriaId?: IntFieldUpdateOperationsInput | number
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssCriteriaAlternativeUncheckedUpdateManyWithoutDssInput = {
    dssCriteriaAlternativeId?: IntFieldUpdateOperationsInput | number
    dssAlternativeId?: IntFieldUpdateOperationsInput | number
    criteriaId?: IntFieldUpdateOperationsInput | number
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssCriteriaAlternativeCreateManyDssAlternativeInput = {
    dssCriteriaAlternativeId?: number
    dssId: number
    criteriaId: number
    value?: number | null
    createdAt?: Date | string
  }

  export type DssCriteriaAlternativeUpdateWithoutDssAlternativeInput = {
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dss?: DssUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput
    criteria?: CriteriaUpdateOneRequiredWithoutDssCriteriaAlternativesNestedInput
  }

  export type DssCriteriaAlternativeUncheckedUpdateWithoutDssAlternativeInput = {
    dssCriteriaAlternativeId?: IntFieldUpdateOperationsInput | number
    dssId?: IntFieldUpdateOperationsInput | number
    criteriaId?: IntFieldUpdateOperationsInput | number
    value?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DssCriteriaAlternativeUncheckedUpdateManyWithoutDssAlternativeInput = {
    dssCriteriaAlternativeId?: IntFieldUpdateOperationsInput | number
    dssId?: IntFieldUpdateOperationsInput | number
    criteriaId?: IntFieldUpdateOperationsInput | number
    value?: NullableFloatFieldUpdateOperationsInput | number | null
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
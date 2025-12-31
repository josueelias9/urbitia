
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
 * Model marketplace_user
 * 
 */
export type marketplace_user = $Result.DefaultSelection<Prisma.$marketplace_userPayload>
/**
 * Model property
 * 
 */
export type property = $Result.DefaultSelection<Prisma.$propertyPayload>
/**
 * Model chat
 * 
 */
export type chat = $Result.DefaultSelection<Prisma.$chatPayload>
/**
 * Model chat_message
 * 
 */
export type chat_message = $Result.DefaultSelection<Prisma.$chat_messagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Marketplace_users
 * const marketplace_users = await prisma.marketplace_user.findMany()
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
   * // Fetch zero or more Marketplace_users
   * const marketplace_users = await prisma.marketplace_user.findMany()
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
   * `prisma.marketplace_user`: Exposes CRUD operations for the **marketplace_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marketplace_users
    * const marketplace_users = await prisma.marketplace_user.findMany()
    * ```
    */
  get marketplace_user(): Prisma.marketplace_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.propertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.chatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat_message`: Exposes CRUD operations for the **chat_message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chat_messages
    * const chat_messages = await prisma.chat_message.findMany()
    * ```
    */
  get chat_message(): Prisma.chat_messageDelegate<ExtArgs, ClientOptions>;
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
    marketplace_user: 'marketplace_user',
    property: 'property',
    chat: 'chat',
    chat_message: 'chat_message'
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
      modelProps: "marketplace_user" | "property" | "chat" | "chat_message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      marketplace_user: {
        payload: Prisma.$marketplace_userPayload<ExtArgs>
        fields: Prisma.marketplace_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.marketplace_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.marketplace_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload>
          }
          findFirst: {
            args: Prisma.marketplace_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.marketplace_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload>
          }
          findMany: {
            args: Prisma.marketplace_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload>[]
          }
          create: {
            args: Prisma.marketplace_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload>
          }
          createMany: {
            args: Prisma.marketplace_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.marketplace_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload>[]
          }
          delete: {
            args: Prisma.marketplace_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload>
          }
          update: {
            args: Prisma.marketplace_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload>
          }
          deleteMany: {
            args: Prisma.marketplace_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.marketplace_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.marketplace_userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload>[]
          }
          upsert: {
            args: Prisma.marketplace_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$marketplace_userPayload>
          }
          aggregate: {
            args: Prisma.Marketplace_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarketplace_user>
          }
          groupBy: {
            args: Prisma.marketplace_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Marketplace_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.marketplace_userCountArgs<ExtArgs>
            result: $Utils.Optional<Marketplace_userCountAggregateOutputType> | number
          }
        }
      }
      property: {
        payload: Prisma.$propertyPayload<ExtArgs>
        fields: Prisma.propertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.propertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.propertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>
          }
          findFirst: {
            args: Prisma.propertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.propertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>
          }
          findMany: {
            args: Prisma.propertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>[]
          }
          create: {
            args: Prisma.propertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>
          }
          createMany: {
            args: Prisma.propertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.propertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>[]
          }
          delete: {
            args: Prisma.propertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>
          }
          update: {
            args: Prisma.propertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>
          }
          deleteMany: {
            args: Prisma.propertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.propertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.propertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>[]
          }
          upsert: {
            args: Prisma.propertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$propertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.propertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.propertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      chat: {
        payload: Prisma.$chatPayload<ExtArgs>
        fields: Prisma.chatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findFirst: {
            args: Prisma.chatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          findMany: {
            args: Prisma.chatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          create: {
            args: Prisma.chatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          createMany: {
            args: Prisma.chatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          delete: {
            args: Prisma.chatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          update: {
            args: Prisma.chatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          deleteMany: {
            args: Prisma.chatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>[]
          }
          upsert: {
            args: Prisma.chatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.chatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.chatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      chat_message: {
        payload: Prisma.$chat_messagePayload<ExtArgs>
        fields: Prisma.chat_messageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.chat_messageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.chat_messageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload>
          }
          findFirst: {
            args: Prisma.chat_messageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.chat_messageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload>
          }
          findMany: {
            args: Prisma.chat_messageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload>[]
          }
          create: {
            args: Prisma.chat_messageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload>
          }
          createMany: {
            args: Prisma.chat_messageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.chat_messageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload>[]
          }
          delete: {
            args: Prisma.chat_messageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload>
          }
          update: {
            args: Prisma.chat_messageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload>
          }
          deleteMany: {
            args: Prisma.chat_messageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.chat_messageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.chat_messageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload>[]
          }
          upsert: {
            args: Prisma.chat_messageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$chat_messagePayload>
          }
          aggregate: {
            args: Prisma.Chat_messageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat_message>
          }
          groupBy: {
            args: Prisma.chat_messageGroupByArgs<ExtArgs>
            result: $Utils.Optional<Chat_messageGroupByOutputType>[]
          }
          count: {
            args: Prisma.chat_messageCountArgs<ExtArgs>
            result: $Utils.Optional<Chat_messageCountAggregateOutputType> | number
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
    marketplace_user?: marketplace_userOmit
    property?: propertyOmit
    chat?: chatOmit
    chat_message?: chat_messageOmit
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
   * Count Type Marketplace_userCountOutputType
   */

  export type Marketplace_userCountOutputType = {
    properties: number
    chats_buyer: number
    chats_owner: number
    sent_messages: number
  }

  export type Marketplace_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | Marketplace_userCountOutputTypeCountPropertiesArgs
    chats_buyer?: boolean | Marketplace_userCountOutputTypeCountChats_buyerArgs
    chats_owner?: boolean | Marketplace_userCountOutputTypeCountChats_ownerArgs
    sent_messages?: boolean | Marketplace_userCountOutputTypeCountSent_messagesArgs
  }

  // Custom InputTypes
  /**
   * Marketplace_userCountOutputType without action
   */
  export type Marketplace_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Marketplace_userCountOutputType
     */
    select?: Marketplace_userCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Marketplace_userCountOutputType without action
   */
  export type Marketplace_userCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: propertyWhereInput
  }

  /**
   * Marketplace_userCountOutputType without action
   */
  export type Marketplace_userCountOutputTypeCountChats_buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
  }

  /**
   * Marketplace_userCountOutputType without action
   */
  export type Marketplace_userCountOutputTypeCountChats_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
  }

  /**
   * Marketplace_userCountOutputType without action
   */
  export type Marketplace_userCountOutputTypeCountSent_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_messageWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    chats: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chats?: boolean | PropertyCountOutputTypeCountChatsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountChatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_messageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model marketplace_user
   */

  export type AggregateMarketplace_user = {
    _count: Marketplace_userCountAggregateOutputType | null
    _min: Marketplace_userMinAggregateOutputType | null
    _max: Marketplace_userMaxAggregateOutputType | null
  }

  export type Marketplace_userMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    avatar: string | null
    phone: string | null
    password: string | null
  }

  export type Marketplace_userMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    role: string | null
    avatar: string | null
    phone: string | null
    password: string | null
  }

  export type Marketplace_userCountAggregateOutputType = {
    id: number
    name: number
    email: number
    role: number
    avatar: number
    phone: number
    password: number
    _all: number
  }


  export type Marketplace_userMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    avatar?: true
    phone?: true
    password?: true
  }

  export type Marketplace_userMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    avatar?: true
    phone?: true
    password?: true
  }

  export type Marketplace_userCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    role?: true
    avatar?: true
    phone?: true
    password?: true
    _all?: true
  }

  export type Marketplace_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marketplace_user to aggregate.
     */
    where?: marketplace_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marketplace_users to fetch.
     */
    orderBy?: marketplace_userOrderByWithRelationInput | marketplace_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: marketplace_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marketplace_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marketplace_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned marketplace_users
    **/
    _count?: true | Marketplace_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Marketplace_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Marketplace_userMaxAggregateInputType
  }

  export type GetMarketplace_userAggregateType<T extends Marketplace_userAggregateArgs> = {
        [P in keyof T & keyof AggregateMarketplace_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarketplace_user[P]>
      : GetScalarType<T[P], AggregateMarketplace_user[P]>
  }




  export type marketplace_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: marketplace_userWhereInput
    orderBy?: marketplace_userOrderByWithAggregationInput | marketplace_userOrderByWithAggregationInput[]
    by: Marketplace_userScalarFieldEnum[] | Marketplace_userScalarFieldEnum
    having?: marketplace_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Marketplace_userCountAggregateInputType | true
    _min?: Marketplace_userMinAggregateInputType
    _max?: Marketplace_userMaxAggregateInputType
  }

  export type Marketplace_userGroupByOutputType = {
    id: string
    name: string
    email: string
    role: string
    avatar: string | null
    phone: string | null
    password: string | null
    _count: Marketplace_userCountAggregateOutputType | null
    _min: Marketplace_userMinAggregateOutputType | null
    _max: Marketplace_userMaxAggregateOutputType | null
  }

  type GetMarketplace_userGroupByPayload<T extends marketplace_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Marketplace_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Marketplace_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Marketplace_userGroupByOutputType[P]>
            : GetScalarType<T[P], Marketplace_userGroupByOutputType[P]>
        }
      >
    >


  export type marketplace_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    avatar?: boolean
    phone?: boolean
    password?: boolean
    properties?: boolean | marketplace_user$propertiesArgs<ExtArgs>
    chats_buyer?: boolean | marketplace_user$chats_buyerArgs<ExtArgs>
    chats_owner?: boolean | marketplace_user$chats_ownerArgs<ExtArgs>
    sent_messages?: boolean | marketplace_user$sent_messagesArgs<ExtArgs>
    _count?: boolean | Marketplace_userCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["marketplace_user"]>

  export type marketplace_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    avatar?: boolean
    phone?: boolean
    password?: boolean
  }, ExtArgs["result"]["marketplace_user"]>

  export type marketplace_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    avatar?: boolean
    phone?: boolean
    password?: boolean
  }, ExtArgs["result"]["marketplace_user"]>

  export type marketplace_userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    role?: boolean
    avatar?: boolean
    phone?: boolean
    password?: boolean
  }

  export type marketplace_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "role" | "avatar" | "phone" | "password", ExtArgs["result"]["marketplace_user"]>
  export type marketplace_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | marketplace_user$propertiesArgs<ExtArgs>
    chats_buyer?: boolean | marketplace_user$chats_buyerArgs<ExtArgs>
    chats_owner?: boolean | marketplace_user$chats_ownerArgs<ExtArgs>
    sent_messages?: boolean | marketplace_user$sent_messagesArgs<ExtArgs>
    _count?: boolean | Marketplace_userCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type marketplace_userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type marketplace_userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $marketplace_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "marketplace_user"
    objects: {
      properties: Prisma.$propertyPayload<ExtArgs>[]
      chats_buyer: Prisma.$chatPayload<ExtArgs>[]
      chats_owner: Prisma.$chatPayload<ExtArgs>[]
      sent_messages: Prisma.$chat_messagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      role: string
      avatar: string | null
      phone: string | null
      password: string | null
    }, ExtArgs["result"]["marketplace_user"]>
    composites: {}
  }

  type marketplace_userGetPayload<S extends boolean | null | undefined | marketplace_userDefaultArgs> = $Result.GetResult<Prisma.$marketplace_userPayload, S>

  type marketplace_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<marketplace_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Marketplace_userCountAggregateInputType | true
    }

  export interface marketplace_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['marketplace_user'], meta: { name: 'marketplace_user' } }
    /**
     * Find zero or one Marketplace_user that matches the filter.
     * @param {marketplace_userFindUniqueArgs} args - Arguments to find a Marketplace_user
     * @example
     * // Get one Marketplace_user
     * const marketplace_user = await prisma.marketplace_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends marketplace_userFindUniqueArgs>(args: SelectSubset<T, marketplace_userFindUniqueArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Marketplace_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {marketplace_userFindUniqueOrThrowArgs} args - Arguments to find a Marketplace_user
     * @example
     * // Get one Marketplace_user
     * const marketplace_user = await prisma.marketplace_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends marketplace_userFindUniqueOrThrowArgs>(args: SelectSubset<T, marketplace_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marketplace_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketplace_userFindFirstArgs} args - Arguments to find a Marketplace_user
     * @example
     * // Get one Marketplace_user
     * const marketplace_user = await prisma.marketplace_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends marketplace_userFindFirstArgs>(args?: SelectSubset<T, marketplace_userFindFirstArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Marketplace_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketplace_userFindFirstOrThrowArgs} args - Arguments to find a Marketplace_user
     * @example
     * // Get one Marketplace_user
     * const marketplace_user = await prisma.marketplace_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends marketplace_userFindFirstOrThrowArgs>(args?: SelectSubset<T, marketplace_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marketplace_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketplace_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marketplace_users
     * const marketplace_users = await prisma.marketplace_user.findMany()
     * 
     * // Get first 10 Marketplace_users
     * const marketplace_users = await prisma.marketplace_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketplace_userWithIdOnly = await prisma.marketplace_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends marketplace_userFindManyArgs>(args?: SelectSubset<T, marketplace_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Marketplace_user.
     * @param {marketplace_userCreateArgs} args - Arguments to create a Marketplace_user.
     * @example
     * // Create one Marketplace_user
     * const Marketplace_user = await prisma.marketplace_user.create({
     *   data: {
     *     // ... data to create a Marketplace_user
     *   }
     * })
     * 
     */
    create<T extends marketplace_userCreateArgs>(args: SelectSubset<T, marketplace_userCreateArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marketplace_users.
     * @param {marketplace_userCreateManyArgs} args - Arguments to create many Marketplace_users.
     * @example
     * // Create many Marketplace_users
     * const marketplace_user = await prisma.marketplace_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends marketplace_userCreateManyArgs>(args?: SelectSubset<T, marketplace_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marketplace_users and returns the data saved in the database.
     * @param {marketplace_userCreateManyAndReturnArgs} args - Arguments to create many Marketplace_users.
     * @example
     * // Create many Marketplace_users
     * const marketplace_user = await prisma.marketplace_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marketplace_users and only return the `id`
     * const marketplace_userWithIdOnly = await prisma.marketplace_user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends marketplace_userCreateManyAndReturnArgs>(args?: SelectSubset<T, marketplace_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Marketplace_user.
     * @param {marketplace_userDeleteArgs} args - Arguments to delete one Marketplace_user.
     * @example
     * // Delete one Marketplace_user
     * const Marketplace_user = await prisma.marketplace_user.delete({
     *   where: {
     *     // ... filter to delete one Marketplace_user
     *   }
     * })
     * 
     */
    delete<T extends marketplace_userDeleteArgs>(args: SelectSubset<T, marketplace_userDeleteArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Marketplace_user.
     * @param {marketplace_userUpdateArgs} args - Arguments to update one Marketplace_user.
     * @example
     * // Update one Marketplace_user
     * const marketplace_user = await prisma.marketplace_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends marketplace_userUpdateArgs>(args: SelectSubset<T, marketplace_userUpdateArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marketplace_users.
     * @param {marketplace_userDeleteManyArgs} args - Arguments to filter Marketplace_users to delete.
     * @example
     * // Delete a few Marketplace_users
     * const { count } = await prisma.marketplace_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends marketplace_userDeleteManyArgs>(args?: SelectSubset<T, marketplace_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marketplace_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketplace_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marketplace_users
     * const marketplace_user = await prisma.marketplace_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends marketplace_userUpdateManyArgs>(args: SelectSubset<T, marketplace_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marketplace_users and returns the data updated in the database.
     * @param {marketplace_userUpdateManyAndReturnArgs} args - Arguments to update many Marketplace_users.
     * @example
     * // Update many Marketplace_users
     * const marketplace_user = await prisma.marketplace_user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marketplace_users and only return the `id`
     * const marketplace_userWithIdOnly = await prisma.marketplace_user.updateManyAndReturn({
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
    updateManyAndReturn<T extends marketplace_userUpdateManyAndReturnArgs>(args: SelectSubset<T, marketplace_userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Marketplace_user.
     * @param {marketplace_userUpsertArgs} args - Arguments to update or create a Marketplace_user.
     * @example
     * // Update or create a Marketplace_user
     * const marketplace_user = await prisma.marketplace_user.upsert({
     *   create: {
     *     // ... data to create a Marketplace_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Marketplace_user we want to update
     *   }
     * })
     */
    upsert<T extends marketplace_userUpsertArgs>(args: SelectSubset<T, marketplace_userUpsertArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marketplace_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketplace_userCountArgs} args - Arguments to filter Marketplace_users to count.
     * @example
     * // Count the number of Marketplace_users
     * const count = await prisma.marketplace_user.count({
     *   where: {
     *     // ... the filter for the Marketplace_users we want to count
     *   }
     * })
    **/
    count<T extends marketplace_userCountArgs>(
      args?: Subset<T, marketplace_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Marketplace_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Marketplace_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Marketplace_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Marketplace_userAggregateArgs>(args: Subset<T, Marketplace_userAggregateArgs>): Prisma.PrismaPromise<GetMarketplace_userAggregateType<T>>

    /**
     * Group by Marketplace_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {marketplace_userGroupByArgs} args - Group by arguments.
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
      T extends marketplace_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: marketplace_userGroupByArgs['orderBy'] }
        : { orderBy?: marketplace_userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, marketplace_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketplace_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the marketplace_user model
   */
  readonly fields: marketplace_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for marketplace_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__marketplace_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends marketplace_user$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, marketplace_user$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats_buyer<T extends marketplace_user$chats_buyerArgs<ExtArgs> = {}>(args?: Subset<T, marketplace_user$chats_buyerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chats_owner<T extends marketplace_user$chats_ownerArgs<ExtArgs> = {}>(args?: Subset<T, marketplace_user$chats_ownerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sent_messages<T extends marketplace_user$sent_messagesArgs<ExtArgs> = {}>(args?: Subset<T, marketplace_user$sent_messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the marketplace_user model
   */
  interface marketplace_userFieldRefs {
    readonly id: FieldRef<"marketplace_user", 'String'>
    readonly name: FieldRef<"marketplace_user", 'String'>
    readonly email: FieldRef<"marketplace_user", 'String'>
    readonly role: FieldRef<"marketplace_user", 'String'>
    readonly avatar: FieldRef<"marketplace_user", 'String'>
    readonly phone: FieldRef<"marketplace_user", 'String'>
    readonly password: FieldRef<"marketplace_user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * marketplace_user findUnique
   */
  export type marketplace_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketplace_userInclude<ExtArgs> | null
    /**
     * Filter, which marketplace_user to fetch.
     */
    where: marketplace_userWhereUniqueInput
  }

  /**
   * marketplace_user findUniqueOrThrow
   */
  export type marketplace_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketplace_userInclude<ExtArgs> | null
    /**
     * Filter, which marketplace_user to fetch.
     */
    where: marketplace_userWhereUniqueInput
  }

  /**
   * marketplace_user findFirst
   */
  export type marketplace_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketplace_userInclude<ExtArgs> | null
    /**
     * Filter, which marketplace_user to fetch.
     */
    where?: marketplace_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marketplace_users to fetch.
     */
    orderBy?: marketplace_userOrderByWithRelationInput | marketplace_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marketplace_users.
     */
    cursor?: marketplace_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marketplace_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marketplace_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marketplace_users.
     */
    distinct?: Marketplace_userScalarFieldEnum | Marketplace_userScalarFieldEnum[]
  }

  /**
   * marketplace_user findFirstOrThrow
   */
  export type marketplace_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketplace_userInclude<ExtArgs> | null
    /**
     * Filter, which marketplace_user to fetch.
     */
    where?: marketplace_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marketplace_users to fetch.
     */
    orderBy?: marketplace_userOrderByWithRelationInput | marketplace_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for marketplace_users.
     */
    cursor?: marketplace_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marketplace_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marketplace_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of marketplace_users.
     */
    distinct?: Marketplace_userScalarFieldEnum | Marketplace_userScalarFieldEnum[]
  }

  /**
   * marketplace_user findMany
   */
  export type marketplace_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketplace_userInclude<ExtArgs> | null
    /**
     * Filter, which marketplace_users to fetch.
     */
    where?: marketplace_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of marketplace_users to fetch.
     */
    orderBy?: marketplace_userOrderByWithRelationInput | marketplace_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing marketplace_users.
     */
    cursor?: marketplace_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` marketplace_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` marketplace_users.
     */
    skip?: number
    distinct?: Marketplace_userScalarFieldEnum | Marketplace_userScalarFieldEnum[]
  }

  /**
   * marketplace_user create
   */
  export type marketplace_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketplace_userInclude<ExtArgs> | null
    /**
     * The data needed to create a marketplace_user.
     */
    data: XOR<marketplace_userCreateInput, marketplace_userUncheckedCreateInput>
  }

  /**
   * marketplace_user createMany
   */
  export type marketplace_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many marketplace_users.
     */
    data: marketplace_userCreateManyInput | marketplace_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * marketplace_user createManyAndReturn
   */
  export type marketplace_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * The data used to create many marketplace_users.
     */
    data: marketplace_userCreateManyInput | marketplace_userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * marketplace_user update
   */
  export type marketplace_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketplace_userInclude<ExtArgs> | null
    /**
     * The data needed to update a marketplace_user.
     */
    data: XOR<marketplace_userUpdateInput, marketplace_userUncheckedUpdateInput>
    /**
     * Choose, which marketplace_user to update.
     */
    where: marketplace_userWhereUniqueInput
  }

  /**
   * marketplace_user updateMany
   */
  export type marketplace_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update marketplace_users.
     */
    data: XOR<marketplace_userUpdateManyMutationInput, marketplace_userUncheckedUpdateManyInput>
    /**
     * Filter which marketplace_users to update
     */
    where?: marketplace_userWhereInput
    /**
     * Limit how many marketplace_users to update.
     */
    limit?: number
  }

  /**
   * marketplace_user updateManyAndReturn
   */
  export type marketplace_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * The data used to update marketplace_users.
     */
    data: XOR<marketplace_userUpdateManyMutationInput, marketplace_userUncheckedUpdateManyInput>
    /**
     * Filter which marketplace_users to update
     */
    where?: marketplace_userWhereInput
    /**
     * Limit how many marketplace_users to update.
     */
    limit?: number
  }

  /**
   * marketplace_user upsert
   */
  export type marketplace_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketplace_userInclude<ExtArgs> | null
    /**
     * The filter to search for the marketplace_user to update in case it exists.
     */
    where: marketplace_userWhereUniqueInput
    /**
     * In case the marketplace_user found by the `where` argument doesn't exist, create a new marketplace_user with this data.
     */
    create: XOR<marketplace_userCreateInput, marketplace_userUncheckedCreateInput>
    /**
     * In case the marketplace_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<marketplace_userUpdateInput, marketplace_userUncheckedUpdateInput>
  }

  /**
   * marketplace_user delete
   */
  export type marketplace_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketplace_userInclude<ExtArgs> | null
    /**
     * Filter which marketplace_user to delete.
     */
    where: marketplace_userWhereUniqueInput
  }

  /**
   * marketplace_user deleteMany
   */
  export type marketplace_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which marketplace_users to delete
     */
    where?: marketplace_userWhereInput
    /**
     * Limit how many marketplace_users to delete.
     */
    limit?: number
  }

  /**
   * marketplace_user.properties
   */
  export type marketplace_user$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
    where?: propertyWhereInput
    orderBy?: propertyOrderByWithRelationInput | propertyOrderByWithRelationInput[]
    cursor?: propertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * marketplace_user.chats_buyer
   */
  export type marketplace_user$chats_buyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    where?: chatWhereInput
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    cursor?: chatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * marketplace_user.chats_owner
   */
  export type marketplace_user$chats_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    where?: chatWhereInput
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    cursor?: chatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * marketplace_user.sent_messages
   */
  export type marketplace_user$sent_messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    where?: chat_messageWhereInput
    orderBy?: chat_messageOrderByWithRelationInput | chat_messageOrderByWithRelationInput[]
    cursor?: chat_messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_messageScalarFieldEnum | Chat_messageScalarFieldEnum[]
  }

  /**
   * marketplace_user without action
   */
  export type marketplace_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the marketplace_user
     */
    select?: marketplace_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the marketplace_user
     */
    omit?: marketplace_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: marketplace_userInclude<ExtArgs> | null
  }


  /**
   * Model property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    lat: number | null
    lng: number | null
  }

  export type PropertySumAggregateOutputType = {
    price: number | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    lat: number | null
    lng: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    currency: string | null
    type: string | null
    status: string | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    street: string | null
    city: string | null
    country: string | null
    zipCode: string | null
    lat: number | null
    lng: number | null
    ownerId: string | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    currency: string | null
    type: string | null
    status: string | null
    bedrooms: number | null
    bathrooms: number | null
    area: number | null
    street: string | null
    city: string | null
    country: string | null
    zipCode: string | null
    lat: number | null
    lng: number | null
    ownerId: string | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    currency: number
    type: number
    status: number
    bedrooms: number
    bathrooms: number
    area: number
    street: number
    city: number
    country: number
    zipCode: number
    lat: number
    lng: number
    images: number
    amenities: number
    ownerId: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    price?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    lat?: true
    lng?: true
  }

  export type PropertySumAggregateInputType = {
    price?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    lat?: true
    lng?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    currency?: true
    type?: true
    status?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    street?: true
    city?: true
    country?: true
    zipCode?: true
    lat?: true
    lng?: true
    ownerId?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    currency?: true
    type?: true
    status?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    street?: true
    city?: true
    country?: true
    zipCode?: true
    lat?: true
    lng?: true
    ownerId?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    currency?: true
    type?: true
    status?: true
    bedrooms?: true
    bathrooms?: true
    area?: true
    street?: true
    city?: true
    country?: true
    zipCode?: true
    lat?: true
    lng?: true
    images?: true
    amenities?: true
    ownerId?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which property to aggregate.
     */
    where?: propertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertyOrderByWithRelationInput | propertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: propertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type propertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: propertyWhereInput
    orderBy?: propertyOrderByWithAggregationInput | propertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: propertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: string
    title: string
    description: string
    price: number
    currency: string
    type: string
    status: string
    bedrooms: number
    bathrooms: number
    area: number
    street: string
    city: string
    country: string
    zipCode: string
    lat: number | null
    lng: number | null
    images: string[]
    amenities: string[]
    ownerId: string
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends propertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type propertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    currency?: boolean
    type?: boolean
    status?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    street?: boolean
    city?: boolean
    country?: boolean
    zipCode?: boolean
    lat?: boolean
    lng?: boolean
    images?: boolean
    amenities?: boolean
    ownerId?: boolean
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
    chats?: boolean | property$chatsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type propertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    currency?: boolean
    type?: boolean
    status?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    street?: boolean
    city?: boolean
    country?: boolean
    zipCode?: boolean
    lat?: boolean
    lng?: boolean
    images?: boolean
    amenities?: boolean
    ownerId?: boolean
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type propertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    currency?: boolean
    type?: boolean
    status?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    street?: boolean
    city?: boolean
    country?: boolean
    zipCode?: boolean
    lat?: boolean
    lng?: boolean
    images?: boolean
    amenities?: boolean
    ownerId?: boolean
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type propertySelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    currency?: boolean
    type?: boolean
    status?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    area?: boolean
    street?: boolean
    city?: boolean
    country?: boolean
    zipCode?: boolean
    lat?: boolean
    lng?: boolean
    images?: boolean
    amenities?: boolean
    ownerId?: boolean
  }

  export type propertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "currency" | "type" | "status" | "bedrooms" | "bathrooms" | "area" | "street" | "city" | "country" | "zipCode" | "lat" | "lng" | "images" | "amenities" | "ownerId", ExtArgs["result"]["property"]>
  export type propertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
    chats?: boolean | property$chatsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type propertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }
  export type propertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }

  export type $propertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "property"
    objects: {
      owner: Prisma.$marketplace_userPayload<ExtArgs>
      chats: Prisma.$chatPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      price: number
      currency: string
      type: string
      status: string
      bedrooms: number
      bathrooms: number
      area: number
      street: string
      city: string
      country: string
      zipCode: string
      lat: number | null
      lng: number | null
      images: string[]
      amenities: string[]
      ownerId: string
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type propertyGetPayload<S extends boolean | null | undefined | propertyDefaultArgs> = $Result.GetResult<Prisma.$propertyPayload, S>

  type propertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<propertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface propertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['property'], meta: { name: 'property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {propertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends propertyFindUniqueArgs>(args: SelectSubset<T, propertyFindUniqueArgs<ExtArgs>>): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {propertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends propertyFindUniqueOrThrowArgs>(args: SelectSubset<T, propertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends propertyFindFirstArgs>(args?: SelectSubset<T, propertyFindFirstArgs<ExtArgs>>): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends propertyFindFirstOrThrowArgs>(args?: SelectSubset<T, propertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends propertyFindManyArgs>(args?: SelectSubset<T, propertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {propertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends propertyCreateArgs>(args: SelectSubset<T, propertyCreateArgs<ExtArgs>>): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {propertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends propertyCreateManyArgs>(args?: SelectSubset<T, propertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {propertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends propertyCreateManyAndReturnArgs>(args?: SelectSubset<T, propertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {propertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends propertyDeleteArgs>(args: SelectSubset<T, propertyDeleteArgs<ExtArgs>>): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {propertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends propertyUpdateArgs>(args: SelectSubset<T, propertyUpdateArgs<ExtArgs>>): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {propertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends propertyDeleteManyArgs>(args?: SelectSubset<T, propertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends propertyUpdateManyArgs>(args: SelectSubset<T, propertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {propertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
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
    updateManyAndReturn<T extends propertyUpdateManyAndReturnArgs>(args: SelectSubset<T, propertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {propertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends propertyUpsertArgs>(args: SelectSubset<T, propertyUpsertArgs<ExtArgs>>): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends propertyCountArgs>(
      args?: Subset<T, propertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {propertyGroupByArgs} args - Group by arguments.
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
      T extends propertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: propertyGroupByArgs['orderBy'] }
        : { orderBy?: propertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, propertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the property model
   */
  readonly fields: propertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__propertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends marketplace_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, marketplace_userDefaultArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chats<T extends property$chatsArgs<ExtArgs> = {}>(args?: Subset<T, property$chatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the property model
   */
  interface propertyFieldRefs {
    readonly id: FieldRef<"property", 'String'>
    readonly title: FieldRef<"property", 'String'>
    readonly description: FieldRef<"property", 'String'>
    readonly price: FieldRef<"property", 'Int'>
    readonly currency: FieldRef<"property", 'String'>
    readonly type: FieldRef<"property", 'String'>
    readonly status: FieldRef<"property", 'String'>
    readonly bedrooms: FieldRef<"property", 'Int'>
    readonly bathrooms: FieldRef<"property", 'Int'>
    readonly area: FieldRef<"property", 'Int'>
    readonly street: FieldRef<"property", 'String'>
    readonly city: FieldRef<"property", 'String'>
    readonly country: FieldRef<"property", 'String'>
    readonly zipCode: FieldRef<"property", 'String'>
    readonly lat: FieldRef<"property", 'Float'>
    readonly lng: FieldRef<"property", 'Float'>
    readonly images: FieldRef<"property", 'String[]'>
    readonly amenities: FieldRef<"property", 'String[]'>
    readonly ownerId: FieldRef<"property", 'String'>
  }
    

  // Custom InputTypes
  /**
   * property findUnique
   */
  export type propertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
    /**
     * Filter, which property to fetch.
     */
    where: propertyWhereUniqueInput
  }

  /**
   * property findUniqueOrThrow
   */
  export type propertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
    /**
     * Filter, which property to fetch.
     */
    where: propertyWhereUniqueInput
  }

  /**
   * property findFirst
   */
  export type propertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
    /**
     * Filter, which property to fetch.
     */
    where?: propertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertyOrderByWithRelationInput | propertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for properties.
     */
    cursor?: propertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * property findFirstOrThrow
   */
  export type propertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
    /**
     * Filter, which property to fetch.
     */
    where?: propertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertyOrderByWithRelationInput | propertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for properties.
     */
    cursor?: propertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * property findMany
   */
  export type propertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
    /**
     * Filter, which properties to fetch.
     */
    where?: propertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of properties to fetch.
     */
    orderBy?: propertyOrderByWithRelationInput | propertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing properties.
     */
    cursor?: propertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * property create
   */
  export type propertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
    /**
     * The data needed to create a property.
     */
    data: XOR<propertyCreateInput, propertyUncheckedCreateInput>
  }

  /**
   * property createMany
   */
  export type propertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many properties.
     */
    data: propertyCreateManyInput | propertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * property createManyAndReturn
   */
  export type propertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * The data used to create many properties.
     */
    data: propertyCreateManyInput | propertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * property update
   */
  export type propertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
    /**
     * The data needed to update a property.
     */
    data: XOR<propertyUpdateInput, propertyUncheckedUpdateInput>
    /**
     * Choose, which property to update.
     */
    where: propertyWhereUniqueInput
  }

  /**
   * property updateMany
   */
  export type propertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update properties.
     */
    data: XOR<propertyUpdateManyMutationInput, propertyUncheckedUpdateManyInput>
    /**
     * Filter which properties to update
     */
    where?: propertyWhereInput
    /**
     * Limit how many properties to update.
     */
    limit?: number
  }

  /**
   * property updateManyAndReturn
   */
  export type propertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * The data used to update properties.
     */
    data: XOR<propertyUpdateManyMutationInput, propertyUncheckedUpdateManyInput>
    /**
     * Filter which properties to update
     */
    where?: propertyWhereInput
    /**
     * Limit how many properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * property upsert
   */
  export type propertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
    /**
     * The filter to search for the property to update in case it exists.
     */
    where: propertyWhereUniqueInput
    /**
     * In case the property found by the `where` argument doesn't exist, create a new property with this data.
     */
    create: XOR<propertyCreateInput, propertyUncheckedCreateInput>
    /**
     * In case the property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<propertyUpdateInput, propertyUncheckedUpdateInput>
  }

  /**
   * property delete
   */
  export type propertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
    /**
     * Filter which property to delete.
     */
    where: propertyWhereUniqueInput
  }

  /**
   * property deleteMany
   */
  export type propertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which properties to delete
     */
    where?: propertyWhereInput
    /**
     * Limit how many properties to delete.
     */
    limit?: number
  }

  /**
   * property.chats
   */
  export type property$chatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    where?: chatWhereInput
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    cursor?: chatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * property without action
   */
  export type propertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the property
     */
    select?: propertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the property
     */
    omit?: propertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: propertyInclude<ExtArgs> | null
  }


  /**
   * Model chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    buyerId: string | null
    ownerId: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    buyerId: string | null
    ownerId: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    propertyId: number
    buyerId: number
    ownerId: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    ownerId?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    ownerId?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    propertyId?: true
    buyerId?: true
    ownerId?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat to aggregate.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type chatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chatWhereInput
    orderBy?: chatOrderByWithAggregationInput | chatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: chatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    propertyId: string
    buyerId: string
    ownerId: string
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends chatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type chatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    ownerId?: boolean
    property?: boolean | propertyDefaultArgs<ExtArgs>
    buyer?: boolean | marketplace_userDefaultArgs<ExtArgs>
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
    messages?: boolean | chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type chatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    ownerId?: boolean
    property?: boolean | propertyDefaultArgs<ExtArgs>
    buyer?: boolean | marketplace_userDefaultArgs<ExtArgs>
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type chatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    ownerId?: boolean
    property?: boolean | propertyDefaultArgs<ExtArgs>
    buyer?: boolean | marketplace_userDefaultArgs<ExtArgs>
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type chatSelectScalar = {
    id?: boolean
    propertyId?: boolean
    buyerId?: boolean
    ownerId?: boolean
  }

  export type chatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "buyerId" | "ownerId", ExtArgs["result"]["chat"]>
  export type chatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | propertyDefaultArgs<ExtArgs>
    buyer?: boolean | marketplace_userDefaultArgs<ExtArgs>
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
    messages?: boolean | chat$messagesArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type chatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | propertyDefaultArgs<ExtArgs>
    buyer?: boolean | marketplace_userDefaultArgs<ExtArgs>
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }
  export type chatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | propertyDefaultArgs<ExtArgs>
    buyer?: boolean | marketplace_userDefaultArgs<ExtArgs>
    owner?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }

  export type $chatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat"
    objects: {
      property: Prisma.$propertyPayload<ExtArgs>
      buyer: Prisma.$marketplace_userPayload<ExtArgs>
      owner: Prisma.$marketplace_userPayload<ExtArgs>
      messages: Prisma.$chat_messagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string
      buyerId: string
      ownerId: string
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type chatGetPayload<S extends boolean | null | undefined | chatDefaultArgs> = $Result.GetResult<Prisma.$chatPayload, S>

  type chatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface chatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat'], meta: { name: 'chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {chatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chatFindUniqueArgs>(args: SelectSubset<T, chatFindUniqueArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chatFindUniqueOrThrowArgs>(args: SelectSubset<T, chatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chatFindFirstArgs>(args?: SelectSubset<T, chatFindFirstArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chatFindFirstOrThrowArgs>(args?: SelectSubset<T, chatFindFirstOrThrowArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chatFindManyArgs>(args?: SelectSubset<T, chatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {chatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends chatCreateArgs>(args: SelectSubset<T, chatCreateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {chatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chatCreateManyArgs>(args?: SelectSubset<T, chatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {chatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chatCreateManyAndReturnArgs>(args?: SelectSubset<T, chatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {chatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends chatDeleteArgs>(args: SelectSubset<T, chatDeleteArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {chatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chatUpdateArgs>(args: SelectSubset<T, chatUpdateArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {chatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chatDeleteManyArgs>(args?: SelectSubset<T, chatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chatUpdateManyArgs>(args: SelectSubset<T, chatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {chatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends chatUpdateManyAndReturnArgs>(args: SelectSubset<T, chatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {chatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends chatUpsertArgs>(args: SelectSubset<T, chatUpsertArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends chatCountArgs>(
      args?: Subset<T, chatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chatGroupByArgs} args - Group by arguments.
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
      T extends chatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chatGroupByArgs['orderBy'] }
        : { orderBy?: chatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat model
   */
  readonly fields: chatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends propertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, propertyDefaultArgs<ExtArgs>>): Prisma__propertyClient<$Result.GetResult<Prisma.$propertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends marketplace_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, marketplace_userDefaultArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    owner<T extends marketplace_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, marketplace_userDefaultArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    messages<T extends chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the chat model
   */
  interface chatFieldRefs {
    readonly id: FieldRef<"chat", 'String'>
    readonly propertyId: FieldRef<"chat", 'String'>
    readonly buyerId: FieldRef<"chat", 'String'>
    readonly ownerId: FieldRef<"chat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * chat findUnique
   */
  export type chatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findUniqueOrThrow
   */
  export type chatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat findFirst
   */
  export type chatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findFirstOrThrow
   */
  export type chatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chat to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat findMany
   */
  export type chatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter, which chats to fetch.
     */
    where?: chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chats to fetch.
     */
    orderBy?: chatOrderByWithRelationInput | chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chats.
     */
    cursor?: chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * chat create
   */
  export type chatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The data needed to create a chat.
     */
    data: XOR<chatCreateInput, chatUncheckedCreateInput>
  }

  /**
   * chat createMany
   */
  export type chatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat createManyAndReturn
   */
  export type chatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The data used to create many chats.
     */
    data: chatCreateManyInput | chatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat update
   */
  export type chatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The data needed to update a chat.
     */
    data: XOR<chatUpdateInput, chatUncheckedUpdateInput>
    /**
     * Choose, which chat to update.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat updateMany
   */
  export type chatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
  }

  /**
   * chat updateManyAndReturn
   */
  export type chatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * The data used to update chats.
     */
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyInput>
    /**
     * Filter which chats to update
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat upsert
   */
  export type chatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * The filter to search for the chat to update in case it exists.
     */
    where: chatWhereUniqueInput
    /**
     * In case the chat found by the `where` argument doesn't exist, create a new chat with this data.
     */
    create: XOR<chatCreateInput, chatUncheckedCreateInput>
    /**
     * In case the chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chatUpdateInput, chatUncheckedUpdateInput>
  }

  /**
   * chat delete
   */
  export type chatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
    /**
     * Filter which chat to delete.
     */
    where: chatWhereUniqueInput
  }

  /**
   * chat deleteMany
   */
  export type chatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chats to delete
     */
    where?: chatWhereInput
    /**
     * Limit how many chats to delete.
     */
    limit?: number
  }

  /**
   * chat.messages
   */
  export type chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    where?: chat_messageWhereInput
    orderBy?: chat_messageOrderByWithRelationInput | chat_messageOrderByWithRelationInput[]
    cursor?: chat_messageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Chat_messageScalarFieldEnum | Chat_messageScalarFieldEnum[]
  }

  /**
   * chat without action
   */
  export type chatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat
     */
    select?: chatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat
     */
    omit?: chatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chatInclude<ExtArgs> | null
  }


  /**
   * Model chat_message
   */

  export type AggregateChat_message = {
    _count: Chat_messageCountAggregateOutputType | null
    _min: Chat_messageMinAggregateOutputType | null
    _max: Chat_messageMaxAggregateOutputType | null
  }

  export type Chat_messageMinAggregateOutputType = {
    id: string | null
    content: string | null
    timestamp: Date | null
    read: boolean | null
    chatId: string | null
    senderId: string | null
  }

  export type Chat_messageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    timestamp: Date | null
    read: boolean | null
    chatId: string | null
    senderId: string | null
  }

  export type Chat_messageCountAggregateOutputType = {
    id: number
    content: number
    timestamp: number
    read: number
    chatId: number
    senderId: number
    _all: number
  }


  export type Chat_messageMinAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    read?: true
    chatId?: true
    senderId?: true
  }

  export type Chat_messageMaxAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    read?: true
    chatId?: true
    senderId?: true
  }

  export type Chat_messageCountAggregateInputType = {
    id?: true
    content?: true
    timestamp?: true
    read?: true
    chatId?: true
    senderId?: true
    _all?: true
  }

  export type Chat_messageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_message to aggregate.
     */
    where?: chat_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_messages to fetch.
     */
    orderBy?: chat_messageOrderByWithRelationInput | chat_messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: chat_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned chat_messages
    **/
    _count?: true | Chat_messageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Chat_messageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Chat_messageMaxAggregateInputType
  }

  export type GetChat_messageAggregateType<T extends Chat_messageAggregateArgs> = {
        [P in keyof T & keyof AggregateChat_message]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat_message[P]>
      : GetScalarType<T[P], AggregateChat_message[P]>
  }




  export type chat_messageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: chat_messageWhereInput
    orderBy?: chat_messageOrderByWithAggregationInput | chat_messageOrderByWithAggregationInput[]
    by: Chat_messageScalarFieldEnum[] | Chat_messageScalarFieldEnum
    having?: chat_messageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Chat_messageCountAggregateInputType | true
    _min?: Chat_messageMinAggregateInputType
    _max?: Chat_messageMaxAggregateInputType
  }

  export type Chat_messageGroupByOutputType = {
    id: string
    content: string
    timestamp: Date
    read: boolean
    chatId: string
    senderId: string
    _count: Chat_messageCountAggregateOutputType | null
    _min: Chat_messageMinAggregateOutputType | null
    _max: Chat_messageMaxAggregateOutputType | null
  }

  type GetChat_messageGroupByPayload<T extends chat_messageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Chat_messageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Chat_messageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Chat_messageGroupByOutputType[P]>
            : GetScalarType<T[P], Chat_messageGroupByOutputType[P]>
        }
      >
    >


  export type chat_messageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    timestamp?: boolean
    read?: boolean
    chatId?: boolean
    senderId?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
    sender?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_message"]>

  export type chat_messageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    timestamp?: boolean
    read?: boolean
    chatId?: boolean
    senderId?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
    sender?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_message"]>

  export type chat_messageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    timestamp?: boolean
    read?: boolean
    chatId?: boolean
    senderId?: boolean
    chat?: boolean | chatDefaultArgs<ExtArgs>
    sender?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat_message"]>

  export type chat_messageSelectScalar = {
    id?: boolean
    content?: boolean
    timestamp?: boolean
    read?: boolean
    chatId?: boolean
    senderId?: boolean
  }

  export type chat_messageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "timestamp" | "read" | "chatId" | "senderId", ExtArgs["result"]["chat_message"]>
  export type chat_messageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
    sender?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }
  export type chat_messageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
    sender?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }
  export type chat_messageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | chatDefaultArgs<ExtArgs>
    sender?: boolean | marketplace_userDefaultArgs<ExtArgs>
  }

  export type $chat_messagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "chat_message"
    objects: {
      chat: Prisma.$chatPayload<ExtArgs>
      sender: Prisma.$marketplace_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      timestamp: Date
      read: boolean
      chatId: string
      senderId: string
    }, ExtArgs["result"]["chat_message"]>
    composites: {}
  }

  type chat_messageGetPayload<S extends boolean | null | undefined | chat_messageDefaultArgs> = $Result.GetResult<Prisma.$chat_messagePayload, S>

  type chat_messageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<chat_messageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Chat_messageCountAggregateInputType | true
    }

  export interface chat_messageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['chat_message'], meta: { name: 'chat_message' } }
    /**
     * Find zero or one Chat_message that matches the filter.
     * @param {chat_messageFindUniqueArgs} args - Arguments to find a Chat_message
     * @example
     * // Get one Chat_message
     * const chat_message = await prisma.chat_message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends chat_messageFindUniqueArgs>(args: SelectSubset<T, chat_messageFindUniqueArgs<ExtArgs>>): Prisma__chat_messageClient<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat_message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {chat_messageFindUniqueOrThrowArgs} args - Arguments to find a Chat_message
     * @example
     * // Get one Chat_message
     * const chat_message = await prisma.chat_message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends chat_messageFindUniqueOrThrowArgs>(args: SelectSubset<T, chat_messageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__chat_messageClient<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_messageFindFirstArgs} args - Arguments to find a Chat_message
     * @example
     * // Get one Chat_message
     * const chat_message = await prisma.chat_message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends chat_messageFindFirstArgs>(args?: SelectSubset<T, chat_messageFindFirstArgs<ExtArgs>>): Prisma__chat_messageClient<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat_message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_messageFindFirstOrThrowArgs} args - Arguments to find a Chat_message
     * @example
     * // Get one Chat_message
     * const chat_message = await prisma.chat_message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends chat_messageFindFirstOrThrowArgs>(args?: SelectSubset<T, chat_messageFindFirstOrThrowArgs<ExtArgs>>): Prisma__chat_messageClient<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chat_messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_messageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chat_messages
     * const chat_messages = await prisma.chat_message.findMany()
     * 
     * // Get first 10 Chat_messages
     * const chat_messages = await prisma.chat_message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chat_messageWithIdOnly = await prisma.chat_message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends chat_messageFindManyArgs>(args?: SelectSubset<T, chat_messageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat_message.
     * @param {chat_messageCreateArgs} args - Arguments to create a Chat_message.
     * @example
     * // Create one Chat_message
     * const Chat_message = await prisma.chat_message.create({
     *   data: {
     *     // ... data to create a Chat_message
     *   }
     * })
     * 
     */
    create<T extends chat_messageCreateArgs>(args: SelectSubset<T, chat_messageCreateArgs<ExtArgs>>): Prisma__chat_messageClient<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chat_messages.
     * @param {chat_messageCreateManyArgs} args - Arguments to create many Chat_messages.
     * @example
     * // Create many Chat_messages
     * const chat_message = await prisma.chat_message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends chat_messageCreateManyArgs>(args?: SelectSubset<T, chat_messageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chat_messages and returns the data saved in the database.
     * @param {chat_messageCreateManyAndReturnArgs} args - Arguments to create many Chat_messages.
     * @example
     * // Create many Chat_messages
     * const chat_message = await prisma.chat_message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chat_messages and only return the `id`
     * const chat_messageWithIdOnly = await prisma.chat_message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends chat_messageCreateManyAndReturnArgs>(args?: SelectSubset<T, chat_messageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat_message.
     * @param {chat_messageDeleteArgs} args - Arguments to delete one Chat_message.
     * @example
     * // Delete one Chat_message
     * const Chat_message = await prisma.chat_message.delete({
     *   where: {
     *     // ... filter to delete one Chat_message
     *   }
     * })
     * 
     */
    delete<T extends chat_messageDeleteArgs>(args: SelectSubset<T, chat_messageDeleteArgs<ExtArgs>>): Prisma__chat_messageClient<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat_message.
     * @param {chat_messageUpdateArgs} args - Arguments to update one Chat_message.
     * @example
     * // Update one Chat_message
     * const chat_message = await prisma.chat_message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends chat_messageUpdateArgs>(args: SelectSubset<T, chat_messageUpdateArgs<ExtArgs>>): Prisma__chat_messageClient<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chat_messages.
     * @param {chat_messageDeleteManyArgs} args - Arguments to filter Chat_messages to delete.
     * @example
     * // Delete a few Chat_messages
     * const { count } = await prisma.chat_message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends chat_messageDeleteManyArgs>(args?: SelectSubset<T, chat_messageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_messageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chat_messages
     * const chat_message = await prisma.chat_message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends chat_messageUpdateManyArgs>(args: SelectSubset<T, chat_messageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chat_messages and returns the data updated in the database.
     * @param {chat_messageUpdateManyAndReturnArgs} args - Arguments to update many Chat_messages.
     * @example
     * // Update many Chat_messages
     * const chat_message = await prisma.chat_message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chat_messages and only return the `id`
     * const chat_messageWithIdOnly = await prisma.chat_message.updateManyAndReturn({
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
    updateManyAndReturn<T extends chat_messageUpdateManyAndReturnArgs>(args: SelectSubset<T, chat_messageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat_message.
     * @param {chat_messageUpsertArgs} args - Arguments to update or create a Chat_message.
     * @example
     * // Update or create a Chat_message
     * const chat_message = await prisma.chat_message.upsert({
     *   create: {
     *     // ... data to create a Chat_message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat_message we want to update
     *   }
     * })
     */
    upsert<T extends chat_messageUpsertArgs>(args: SelectSubset<T, chat_messageUpsertArgs<ExtArgs>>): Prisma__chat_messageClient<$Result.GetResult<Prisma.$chat_messagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chat_messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_messageCountArgs} args - Arguments to filter Chat_messages to count.
     * @example
     * // Count the number of Chat_messages
     * const count = await prisma.chat_message.count({
     *   where: {
     *     // ... the filter for the Chat_messages we want to count
     *   }
     * })
    **/
    count<T extends chat_messageCountArgs>(
      args?: Subset<T, chat_messageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Chat_messageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat_message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Chat_messageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Chat_messageAggregateArgs>(args: Subset<T, Chat_messageAggregateArgs>): Prisma.PrismaPromise<GetChat_messageAggregateType<T>>

    /**
     * Group by Chat_message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {chat_messageGroupByArgs} args - Group by arguments.
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
      T extends chat_messageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: chat_messageGroupByArgs['orderBy'] }
        : { orderBy?: chat_messageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, chat_messageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChat_messageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the chat_message model
   */
  readonly fields: chat_messageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for chat_message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__chat_messageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends chatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, chatDefaultArgs<ExtArgs>>): Prisma__chatClient<$Result.GetResult<Prisma.$chatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends marketplace_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, marketplace_userDefaultArgs<ExtArgs>>): Prisma__marketplace_userClient<$Result.GetResult<Prisma.$marketplace_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the chat_message model
   */
  interface chat_messageFieldRefs {
    readonly id: FieldRef<"chat_message", 'String'>
    readonly content: FieldRef<"chat_message", 'String'>
    readonly timestamp: FieldRef<"chat_message", 'DateTime'>
    readonly read: FieldRef<"chat_message", 'Boolean'>
    readonly chatId: FieldRef<"chat_message", 'String'>
    readonly senderId: FieldRef<"chat_message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * chat_message findUnique
   */
  export type chat_messageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    /**
     * Filter, which chat_message to fetch.
     */
    where: chat_messageWhereUniqueInput
  }

  /**
   * chat_message findUniqueOrThrow
   */
  export type chat_messageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    /**
     * Filter, which chat_message to fetch.
     */
    where: chat_messageWhereUniqueInput
  }

  /**
   * chat_message findFirst
   */
  export type chat_messageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    /**
     * Filter, which chat_message to fetch.
     */
    where?: chat_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_messages to fetch.
     */
    orderBy?: chat_messageOrderByWithRelationInput | chat_messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_messages.
     */
    cursor?: chat_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_messages.
     */
    distinct?: Chat_messageScalarFieldEnum | Chat_messageScalarFieldEnum[]
  }

  /**
   * chat_message findFirstOrThrow
   */
  export type chat_messageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    /**
     * Filter, which chat_message to fetch.
     */
    where?: chat_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_messages to fetch.
     */
    orderBy?: chat_messageOrderByWithRelationInput | chat_messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for chat_messages.
     */
    cursor?: chat_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of chat_messages.
     */
    distinct?: Chat_messageScalarFieldEnum | Chat_messageScalarFieldEnum[]
  }

  /**
   * chat_message findMany
   */
  export type chat_messageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    /**
     * Filter, which chat_messages to fetch.
     */
    where?: chat_messageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of chat_messages to fetch.
     */
    orderBy?: chat_messageOrderByWithRelationInput | chat_messageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing chat_messages.
     */
    cursor?: chat_messageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` chat_messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` chat_messages.
     */
    skip?: number
    distinct?: Chat_messageScalarFieldEnum | Chat_messageScalarFieldEnum[]
  }

  /**
   * chat_message create
   */
  export type chat_messageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    /**
     * The data needed to create a chat_message.
     */
    data: XOR<chat_messageCreateInput, chat_messageUncheckedCreateInput>
  }

  /**
   * chat_message createMany
   */
  export type chat_messageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many chat_messages.
     */
    data: chat_messageCreateManyInput | chat_messageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * chat_message createManyAndReturn
   */
  export type chat_messageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * The data used to create many chat_messages.
     */
    data: chat_messageCreateManyInput | chat_messageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat_message update
   */
  export type chat_messageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    /**
     * The data needed to update a chat_message.
     */
    data: XOR<chat_messageUpdateInput, chat_messageUncheckedUpdateInput>
    /**
     * Choose, which chat_message to update.
     */
    where: chat_messageWhereUniqueInput
  }

  /**
   * chat_message updateMany
   */
  export type chat_messageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update chat_messages.
     */
    data: XOR<chat_messageUpdateManyMutationInput, chat_messageUncheckedUpdateManyInput>
    /**
     * Filter which chat_messages to update
     */
    where?: chat_messageWhereInput
    /**
     * Limit how many chat_messages to update.
     */
    limit?: number
  }

  /**
   * chat_message updateManyAndReturn
   */
  export type chat_messageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * The data used to update chat_messages.
     */
    data: XOR<chat_messageUpdateManyMutationInput, chat_messageUncheckedUpdateManyInput>
    /**
     * Filter which chat_messages to update
     */
    where?: chat_messageWhereInput
    /**
     * Limit how many chat_messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * chat_message upsert
   */
  export type chat_messageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    /**
     * The filter to search for the chat_message to update in case it exists.
     */
    where: chat_messageWhereUniqueInput
    /**
     * In case the chat_message found by the `where` argument doesn't exist, create a new chat_message with this data.
     */
    create: XOR<chat_messageCreateInput, chat_messageUncheckedCreateInput>
    /**
     * In case the chat_message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<chat_messageUpdateInput, chat_messageUncheckedUpdateInput>
  }

  /**
   * chat_message delete
   */
  export type chat_messageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
    /**
     * Filter which chat_message to delete.
     */
    where: chat_messageWhereUniqueInput
  }

  /**
   * chat_message deleteMany
   */
  export type chat_messageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which chat_messages to delete
     */
    where?: chat_messageWhereInput
    /**
     * Limit how many chat_messages to delete.
     */
    limit?: number
  }

  /**
   * chat_message without action
   */
  export type chat_messageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the chat_message
     */
    select?: chat_messageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the chat_message
     */
    omit?: chat_messageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: chat_messageInclude<ExtArgs> | null
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


  export const Marketplace_userScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    role: 'role',
    avatar: 'avatar',
    phone: 'phone',
    password: 'password'
  };

  export type Marketplace_userScalarFieldEnum = (typeof Marketplace_userScalarFieldEnum)[keyof typeof Marketplace_userScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    currency: 'currency',
    type: 'type',
    status: 'status',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    area: 'area',
    street: 'street',
    city: 'city',
    country: 'country',
    zipCode: 'zipCode',
    lat: 'lat',
    lng: 'lng',
    images: 'images',
    amenities: 'amenities',
    ownerId: 'ownerId'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    buyerId: 'buyerId',
    ownerId: 'ownerId'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const Chat_messageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    timestamp: 'timestamp',
    read: 'read',
    chatId: 'chatId',
    senderId: 'senderId'
  };

  export type Chat_messageScalarFieldEnum = (typeof Chat_messageScalarFieldEnum)[keyof typeof Chat_messageScalarFieldEnum]


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
   * Deep Input Types
   */


  export type marketplace_userWhereInput = {
    AND?: marketplace_userWhereInput | marketplace_userWhereInput[]
    OR?: marketplace_userWhereInput[]
    NOT?: marketplace_userWhereInput | marketplace_userWhereInput[]
    id?: StringFilter<"marketplace_user"> | string
    name?: StringFilter<"marketplace_user"> | string
    email?: StringFilter<"marketplace_user"> | string
    role?: StringFilter<"marketplace_user"> | string
    avatar?: StringNullableFilter<"marketplace_user"> | string | null
    phone?: StringNullableFilter<"marketplace_user"> | string | null
    password?: StringNullableFilter<"marketplace_user"> | string | null
    properties?: PropertyListRelationFilter
    chats_buyer?: ChatListRelationFilter
    chats_owner?: ChatListRelationFilter
    sent_messages?: Chat_messageListRelationFilter
  }

  export type marketplace_userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    properties?: propertyOrderByRelationAggregateInput
    chats_buyer?: chatOrderByRelationAggregateInput
    chats_owner?: chatOrderByRelationAggregateInput
    sent_messages?: chat_messageOrderByRelationAggregateInput
  }

  export type marketplace_userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: marketplace_userWhereInput | marketplace_userWhereInput[]
    OR?: marketplace_userWhereInput[]
    NOT?: marketplace_userWhereInput | marketplace_userWhereInput[]
    name?: StringFilter<"marketplace_user"> | string
    role?: StringFilter<"marketplace_user"> | string
    avatar?: StringNullableFilter<"marketplace_user"> | string | null
    phone?: StringNullableFilter<"marketplace_user"> | string | null
    password?: StringNullableFilter<"marketplace_user"> | string | null
    properties?: PropertyListRelationFilter
    chats_buyer?: ChatListRelationFilter
    chats_owner?: ChatListRelationFilter
    sent_messages?: Chat_messageListRelationFilter
  }, "id" | "email">

  export type marketplace_userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    _count?: marketplace_userCountOrderByAggregateInput
    _max?: marketplace_userMaxOrderByAggregateInput
    _min?: marketplace_userMinOrderByAggregateInput
  }

  export type marketplace_userScalarWhereWithAggregatesInput = {
    AND?: marketplace_userScalarWhereWithAggregatesInput | marketplace_userScalarWhereWithAggregatesInput[]
    OR?: marketplace_userScalarWhereWithAggregatesInput[]
    NOT?: marketplace_userScalarWhereWithAggregatesInput | marketplace_userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"marketplace_user"> | string
    name?: StringWithAggregatesFilter<"marketplace_user"> | string
    email?: StringWithAggregatesFilter<"marketplace_user"> | string
    role?: StringWithAggregatesFilter<"marketplace_user"> | string
    avatar?: StringNullableWithAggregatesFilter<"marketplace_user"> | string | null
    phone?: StringNullableWithAggregatesFilter<"marketplace_user"> | string | null
    password?: StringNullableWithAggregatesFilter<"marketplace_user"> | string | null
  }

  export type propertyWhereInput = {
    AND?: propertyWhereInput | propertyWhereInput[]
    OR?: propertyWhereInput[]
    NOT?: propertyWhereInput | propertyWhereInput[]
    id?: StringFilter<"property"> | string
    title?: StringFilter<"property"> | string
    description?: StringFilter<"property"> | string
    price?: IntFilter<"property"> | number
    currency?: StringFilter<"property"> | string
    type?: StringFilter<"property"> | string
    status?: StringFilter<"property"> | string
    bedrooms?: IntFilter<"property"> | number
    bathrooms?: IntFilter<"property"> | number
    area?: IntFilter<"property"> | number
    street?: StringFilter<"property"> | string
    city?: StringFilter<"property"> | string
    country?: StringFilter<"property"> | string
    zipCode?: StringFilter<"property"> | string
    lat?: FloatNullableFilter<"property"> | number | null
    lng?: FloatNullableFilter<"property"> | number | null
    images?: StringNullableListFilter<"property">
    amenities?: StringNullableListFilter<"property">
    ownerId?: StringFilter<"property"> | string
    owner?: XOR<Marketplace_userScalarRelationFilter, marketplace_userWhereInput>
    chats?: ChatListRelationFilter
  }

  export type propertyOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    status?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    street?: SortOrder
    city?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    images?: SortOrder
    amenities?: SortOrder
    ownerId?: SortOrder
    owner?: marketplace_userOrderByWithRelationInput
    chats?: chatOrderByRelationAggregateInput
  }

  export type propertyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: propertyWhereInput | propertyWhereInput[]
    OR?: propertyWhereInput[]
    NOT?: propertyWhereInput | propertyWhereInput[]
    title?: StringFilter<"property"> | string
    description?: StringFilter<"property"> | string
    price?: IntFilter<"property"> | number
    currency?: StringFilter<"property"> | string
    type?: StringFilter<"property"> | string
    status?: StringFilter<"property"> | string
    bedrooms?: IntFilter<"property"> | number
    bathrooms?: IntFilter<"property"> | number
    area?: IntFilter<"property"> | number
    street?: StringFilter<"property"> | string
    city?: StringFilter<"property"> | string
    country?: StringFilter<"property"> | string
    zipCode?: StringFilter<"property"> | string
    lat?: FloatNullableFilter<"property"> | number | null
    lng?: FloatNullableFilter<"property"> | number | null
    images?: StringNullableListFilter<"property">
    amenities?: StringNullableListFilter<"property">
    ownerId?: StringFilter<"property"> | string
    owner?: XOR<Marketplace_userScalarRelationFilter, marketplace_userWhereInput>
    chats?: ChatListRelationFilter
  }, "id">

  export type propertyOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    status?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    street?: SortOrder
    city?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    images?: SortOrder
    amenities?: SortOrder
    ownerId?: SortOrder
    _count?: propertyCountOrderByAggregateInput
    _avg?: propertyAvgOrderByAggregateInput
    _max?: propertyMaxOrderByAggregateInput
    _min?: propertyMinOrderByAggregateInput
    _sum?: propertySumOrderByAggregateInput
  }

  export type propertyScalarWhereWithAggregatesInput = {
    AND?: propertyScalarWhereWithAggregatesInput | propertyScalarWhereWithAggregatesInput[]
    OR?: propertyScalarWhereWithAggregatesInput[]
    NOT?: propertyScalarWhereWithAggregatesInput | propertyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"property"> | string
    title?: StringWithAggregatesFilter<"property"> | string
    description?: StringWithAggregatesFilter<"property"> | string
    price?: IntWithAggregatesFilter<"property"> | number
    currency?: StringWithAggregatesFilter<"property"> | string
    type?: StringWithAggregatesFilter<"property"> | string
    status?: StringWithAggregatesFilter<"property"> | string
    bedrooms?: IntWithAggregatesFilter<"property"> | number
    bathrooms?: IntWithAggregatesFilter<"property"> | number
    area?: IntWithAggregatesFilter<"property"> | number
    street?: StringWithAggregatesFilter<"property"> | string
    city?: StringWithAggregatesFilter<"property"> | string
    country?: StringWithAggregatesFilter<"property"> | string
    zipCode?: StringWithAggregatesFilter<"property"> | string
    lat?: FloatNullableWithAggregatesFilter<"property"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"property"> | number | null
    images?: StringNullableListFilter<"property">
    amenities?: StringNullableListFilter<"property">
    ownerId?: StringWithAggregatesFilter<"property"> | string
  }

  export type chatWhereInput = {
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    id?: StringFilter<"chat"> | string
    propertyId?: StringFilter<"chat"> | string
    buyerId?: StringFilter<"chat"> | string
    ownerId?: StringFilter<"chat"> | string
    property?: XOR<PropertyScalarRelationFilter, propertyWhereInput>
    buyer?: XOR<Marketplace_userScalarRelationFilter, marketplace_userWhereInput>
    owner?: XOR<Marketplace_userScalarRelationFilter, marketplace_userWhereInput>
    messages?: Chat_messageListRelationFilter
  }

  export type chatOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    ownerId?: SortOrder
    property?: propertyOrderByWithRelationInput
    buyer?: marketplace_userOrderByWithRelationInput
    owner?: marketplace_userOrderByWithRelationInput
    messages?: chat_messageOrderByRelationAggregateInput
  }

  export type chatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: chatWhereInput | chatWhereInput[]
    OR?: chatWhereInput[]
    NOT?: chatWhereInput | chatWhereInput[]
    propertyId?: StringFilter<"chat"> | string
    buyerId?: StringFilter<"chat"> | string
    ownerId?: StringFilter<"chat"> | string
    property?: XOR<PropertyScalarRelationFilter, propertyWhereInput>
    buyer?: XOR<Marketplace_userScalarRelationFilter, marketplace_userWhereInput>
    owner?: XOR<Marketplace_userScalarRelationFilter, marketplace_userWhereInput>
    messages?: Chat_messageListRelationFilter
  }, "id">

  export type chatOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    ownerId?: SortOrder
    _count?: chatCountOrderByAggregateInput
    _max?: chatMaxOrderByAggregateInput
    _min?: chatMinOrderByAggregateInput
  }

  export type chatScalarWhereWithAggregatesInput = {
    AND?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    OR?: chatScalarWhereWithAggregatesInput[]
    NOT?: chatScalarWhereWithAggregatesInput | chatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"chat"> | string
    propertyId?: StringWithAggregatesFilter<"chat"> | string
    buyerId?: StringWithAggregatesFilter<"chat"> | string
    ownerId?: StringWithAggregatesFilter<"chat"> | string
  }

  export type chat_messageWhereInput = {
    AND?: chat_messageWhereInput | chat_messageWhereInput[]
    OR?: chat_messageWhereInput[]
    NOT?: chat_messageWhereInput | chat_messageWhereInput[]
    id?: StringFilter<"chat_message"> | string
    content?: StringFilter<"chat_message"> | string
    timestamp?: DateTimeFilter<"chat_message"> | Date | string
    read?: BoolFilter<"chat_message"> | boolean
    chatId?: StringFilter<"chat_message"> | string
    senderId?: StringFilter<"chat_message"> | string
    chat?: XOR<ChatScalarRelationFilter, chatWhereInput>
    sender?: XOR<Marketplace_userScalarRelationFilter, marketplace_userWhereInput>
  }

  export type chat_messageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    chat?: chatOrderByWithRelationInput
    sender?: marketplace_userOrderByWithRelationInput
  }

  export type chat_messageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: chat_messageWhereInput | chat_messageWhereInput[]
    OR?: chat_messageWhereInput[]
    NOT?: chat_messageWhereInput | chat_messageWhereInput[]
    content?: StringFilter<"chat_message"> | string
    timestamp?: DateTimeFilter<"chat_message"> | Date | string
    read?: BoolFilter<"chat_message"> | boolean
    chatId?: StringFilter<"chat_message"> | string
    senderId?: StringFilter<"chat_message"> | string
    chat?: XOR<ChatScalarRelationFilter, chatWhereInput>
    sender?: XOR<Marketplace_userScalarRelationFilter, marketplace_userWhereInput>
  }, "id">

  export type chat_messageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
    _count?: chat_messageCountOrderByAggregateInput
    _max?: chat_messageMaxOrderByAggregateInput
    _min?: chat_messageMinOrderByAggregateInput
  }

  export type chat_messageScalarWhereWithAggregatesInput = {
    AND?: chat_messageScalarWhereWithAggregatesInput | chat_messageScalarWhereWithAggregatesInput[]
    OR?: chat_messageScalarWhereWithAggregatesInput[]
    NOT?: chat_messageScalarWhereWithAggregatesInput | chat_messageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"chat_message"> | string
    content?: StringWithAggregatesFilter<"chat_message"> | string
    timestamp?: DateTimeWithAggregatesFilter<"chat_message"> | Date | string
    read?: BoolWithAggregatesFilter<"chat_message"> | boolean
    chatId?: StringWithAggregatesFilter<"chat_message"> | string
    senderId?: StringWithAggregatesFilter<"chat_message"> | string
  }

  export type marketplace_userCreateInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
    properties?: propertyCreateNestedManyWithoutOwnerInput
    chats_buyer?: chatCreateNestedManyWithoutBuyerInput
    chats_owner?: chatCreateNestedManyWithoutOwnerInput
    sent_messages?: chat_messageCreateNestedManyWithoutSenderInput
  }

  export type marketplace_userUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
    properties?: propertyUncheckedCreateNestedManyWithoutOwnerInput
    chats_buyer?: chatUncheckedCreateNestedManyWithoutBuyerInput
    chats_owner?: chatUncheckedCreateNestedManyWithoutOwnerInput
    sent_messages?: chat_messageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type marketplace_userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: propertyUpdateManyWithoutOwnerNestedInput
    chats_buyer?: chatUpdateManyWithoutBuyerNestedInput
    chats_owner?: chatUpdateManyWithoutOwnerNestedInput
    sent_messages?: chat_messageUpdateManyWithoutSenderNestedInput
  }

  export type marketplace_userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: propertyUncheckedUpdateManyWithoutOwnerNestedInput
    chats_buyer?: chatUncheckedUpdateManyWithoutBuyerNestedInput
    chats_owner?: chatUncheckedUpdateManyWithoutOwnerNestedInput
    sent_messages?: chat_messageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type marketplace_userCreateManyInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
  }

  export type marketplace_userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type marketplace_userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type propertyCreateInput = {
    id?: string
    title: string
    description: string
    price: number
    currency: string
    type: string
    status: string
    bedrooms: number
    bathrooms: number
    area: number
    street: string
    city: string
    country: string
    zipCode: string
    lat?: number | null
    lng?: number | null
    images?: propertyCreateimagesInput | string[]
    amenities?: propertyCreateamenitiesInput | string[]
    owner: marketplace_userCreateNestedOneWithoutPropertiesInput
    chats?: chatCreateNestedManyWithoutPropertyInput
  }

  export type propertyUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    price: number
    currency: string
    type: string
    status: string
    bedrooms: number
    bathrooms: number
    area: number
    street: string
    city: string
    country: string
    zipCode: string
    lat?: number | null
    lng?: number | null
    images?: propertyCreateimagesInput | string[]
    amenities?: propertyCreateamenitiesInput | string[]
    ownerId: string
    chats?: chatUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type propertyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    images?: propertyUpdateimagesInput | string[]
    amenities?: propertyUpdateamenitiesInput | string[]
    owner?: marketplace_userUpdateOneRequiredWithoutPropertiesNestedInput
    chats?: chatUpdateManyWithoutPropertyNestedInput
  }

  export type propertyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    images?: propertyUpdateimagesInput | string[]
    amenities?: propertyUpdateamenitiesInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
    chats?: chatUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type propertyCreateManyInput = {
    id?: string
    title: string
    description: string
    price: number
    currency: string
    type: string
    status: string
    bedrooms: number
    bathrooms: number
    area: number
    street: string
    city: string
    country: string
    zipCode: string
    lat?: number | null
    lng?: number | null
    images?: propertyCreateimagesInput | string[]
    amenities?: propertyCreateamenitiesInput | string[]
    ownerId: string
  }

  export type propertyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    images?: propertyUpdateimagesInput | string[]
    amenities?: propertyUpdateamenitiesInput | string[]
  }

  export type propertyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    images?: propertyUpdateimagesInput | string[]
    amenities?: propertyUpdateamenitiesInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type chatCreateInput = {
    id?: string
    property: propertyCreateNestedOneWithoutChatsInput
    buyer: marketplace_userCreateNestedOneWithoutChats_buyerInput
    owner: marketplace_userCreateNestedOneWithoutChats_ownerInput
    messages?: chat_messageCreateNestedManyWithoutChatInput
  }

  export type chatUncheckedCreateInput = {
    id?: string
    propertyId: string
    buyerId: string
    ownerId: string
    messages?: chat_messageUncheckedCreateNestedManyWithoutChatInput
  }

  export type chatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    property?: propertyUpdateOneRequiredWithoutChatsNestedInput
    buyer?: marketplace_userUpdateOneRequiredWithoutChats_buyerNestedInput
    owner?: marketplace_userUpdateOneRequiredWithoutChats_ownerNestedInput
    messages?: chat_messageUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    messages?: chat_messageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type chatCreateManyInput = {
    id?: string
    propertyId: string
    buyerId: string
    ownerId: string
  }

  export type chatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type chatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type chat_messageCreateInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    chat: chatCreateNestedOneWithoutMessagesInput
    sender: marketplace_userCreateNestedOneWithoutSent_messagesInput
  }

  export type chat_messageUncheckedCreateInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    chatId: string
    senderId: string
  }

  export type chat_messageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chat?: chatUpdateOneRequiredWithoutMessagesNestedInput
    sender?: marketplace_userUpdateOneRequiredWithoutSent_messagesNestedInput
  }

  export type chat_messageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type chat_messageCreateManyInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    chatId: string
    senderId: string
  }

  export type chat_messageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type chat_messageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chatId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
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

  export type PropertyListRelationFilter = {
    every?: propertyWhereInput
    some?: propertyWhereInput
    none?: propertyWhereInput
  }

  export type ChatListRelationFilter = {
    every?: chatWhereInput
    some?: chatWhereInput
    none?: chatWhereInput
  }

  export type Chat_messageListRelationFilter = {
    every?: chat_messageWhereInput
    some?: chat_messageWhereInput
    none?: chat_messageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type propertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type chat_messageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type marketplace_userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type marketplace_userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    password?: SortOrder
  }

  export type marketplace_userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    password?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type Marketplace_userScalarRelationFilter = {
    is?: marketplace_userWhereInput
    isNot?: marketplace_userWhereInput
  }

  export type propertyCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    status?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    street?: SortOrder
    city?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    images?: SortOrder
    amenities?: SortOrder
    ownerId?: SortOrder
  }

  export type propertyAvgOrderByAggregateInput = {
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type propertyMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    status?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    street?: SortOrder
    city?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    ownerId?: SortOrder
  }

  export type propertyMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    type?: SortOrder
    status?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    street?: SortOrder
    city?: SortOrder
    country?: SortOrder
    zipCode?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    ownerId?: SortOrder
  }

  export type propertySumOrderByAggregateInput = {
    price?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    area?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
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

  export type PropertyScalarRelationFilter = {
    is?: propertyWhereInput
    isNot?: propertyWhereInput
  }

  export type chatCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    ownerId?: SortOrder
  }

  export type chatMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    ownerId?: SortOrder
  }

  export type chatMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    buyerId?: SortOrder
    ownerId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ChatScalarRelationFilter = {
    is?: chatWhereInput
    isNot?: chatWhereInput
  }

  export type chat_messageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
  }

  export type chat_messageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
  }

  export type chat_messageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    read?: SortOrder
    chatId?: SortOrder
    senderId?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type propertyCreateNestedManyWithoutOwnerInput = {
    create?: XOR<propertyCreateWithoutOwnerInput, propertyUncheckedCreateWithoutOwnerInput> | propertyCreateWithoutOwnerInput[] | propertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: propertyCreateOrConnectWithoutOwnerInput | propertyCreateOrConnectWithoutOwnerInput[]
    createMany?: propertyCreateManyOwnerInputEnvelope
    connect?: propertyWhereUniqueInput | propertyWhereUniqueInput[]
  }

  export type chatCreateNestedManyWithoutBuyerInput = {
    create?: XOR<chatCreateWithoutBuyerInput, chatUncheckedCreateWithoutBuyerInput> | chatCreateWithoutBuyerInput[] | chatUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: chatCreateOrConnectWithoutBuyerInput | chatCreateOrConnectWithoutBuyerInput[]
    createMany?: chatCreateManyBuyerInputEnvelope
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
  }

  export type chatCreateNestedManyWithoutOwnerInput = {
    create?: XOR<chatCreateWithoutOwnerInput, chatUncheckedCreateWithoutOwnerInput> | chatCreateWithoutOwnerInput[] | chatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: chatCreateOrConnectWithoutOwnerInput | chatCreateOrConnectWithoutOwnerInput[]
    createMany?: chatCreateManyOwnerInputEnvelope
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
  }

  export type chat_messageCreateNestedManyWithoutSenderInput = {
    create?: XOR<chat_messageCreateWithoutSenderInput, chat_messageUncheckedCreateWithoutSenderInput> | chat_messageCreateWithoutSenderInput[] | chat_messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: chat_messageCreateOrConnectWithoutSenderInput | chat_messageCreateOrConnectWithoutSenderInput[]
    createMany?: chat_messageCreateManySenderInputEnvelope
    connect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
  }

  export type propertyUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<propertyCreateWithoutOwnerInput, propertyUncheckedCreateWithoutOwnerInput> | propertyCreateWithoutOwnerInput[] | propertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: propertyCreateOrConnectWithoutOwnerInput | propertyCreateOrConnectWithoutOwnerInput[]
    createMany?: propertyCreateManyOwnerInputEnvelope
    connect?: propertyWhereUniqueInput | propertyWhereUniqueInput[]
  }

  export type chatUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<chatCreateWithoutBuyerInput, chatUncheckedCreateWithoutBuyerInput> | chatCreateWithoutBuyerInput[] | chatUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: chatCreateOrConnectWithoutBuyerInput | chatCreateOrConnectWithoutBuyerInput[]
    createMany?: chatCreateManyBuyerInputEnvelope
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
  }

  export type chatUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<chatCreateWithoutOwnerInput, chatUncheckedCreateWithoutOwnerInput> | chatCreateWithoutOwnerInput[] | chatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: chatCreateOrConnectWithoutOwnerInput | chatCreateOrConnectWithoutOwnerInput[]
    createMany?: chatCreateManyOwnerInputEnvelope
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
  }

  export type chat_messageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<chat_messageCreateWithoutSenderInput, chat_messageUncheckedCreateWithoutSenderInput> | chat_messageCreateWithoutSenderInput[] | chat_messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: chat_messageCreateOrConnectWithoutSenderInput | chat_messageCreateOrConnectWithoutSenderInput[]
    createMany?: chat_messageCreateManySenderInputEnvelope
    connect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type propertyUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<propertyCreateWithoutOwnerInput, propertyUncheckedCreateWithoutOwnerInput> | propertyCreateWithoutOwnerInput[] | propertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: propertyCreateOrConnectWithoutOwnerInput | propertyCreateOrConnectWithoutOwnerInput[]
    upsert?: propertyUpsertWithWhereUniqueWithoutOwnerInput | propertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: propertyCreateManyOwnerInputEnvelope
    set?: propertyWhereUniqueInput | propertyWhereUniqueInput[]
    disconnect?: propertyWhereUniqueInput | propertyWhereUniqueInput[]
    delete?: propertyWhereUniqueInput | propertyWhereUniqueInput[]
    connect?: propertyWhereUniqueInput | propertyWhereUniqueInput[]
    update?: propertyUpdateWithWhereUniqueWithoutOwnerInput | propertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: propertyUpdateManyWithWhereWithoutOwnerInput | propertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: propertyScalarWhereInput | propertyScalarWhereInput[]
  }

  export type chatUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<chatCreateWithoutBuyerInput, chatUncheckedCreateWithoutBuyerInput> | chatCreateWithoutBuyerInput[] | chatUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: chatCreateOrConnectWithoutBuyerInput | chatCreateOrConnectWithoutBuyerInput[]
    upsert?: chatUpsertWithWhereUniqueWithoutBuyerInput | chatUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: chatCreateManyBuyerInputEnvelope
    set?: chatWhereUniqueInput | chatWhereUniqueInput[]
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[]
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    update?: chatUpdateWithWhereUniqueWithoutBuyerInput | chatUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: chatUpdateManyWithWhereWithoutBuyerInput | chatUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[]
  }

  export type chatUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<chatCreateWithoutOwnerInput, chatUncheckedCreateWithoutOwnerInput> | chatCreateWithoutOwnerInput[] | chatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: chatCreateOrConnectWithoutOwnerInput | chatCreateOrConnectWithoutOwnerInput[]
    upsert?: chatUpsertWithWhereUniqueWithoutOwnerInput | chatUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: chatCreateManyOwnerInputEnvelope
    set?: chatWhereUniqueInput | chatWhereUniqueInput[]
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[]
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    update?: chatUpdateWithWhereUniqueWithoutOwnerInput | chatUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: chatUpdateManyWithWhereWithoutOwnerInput | chatUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[]
  }

  export type chat_messageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<chat_messageCreateWithoutSenderInput, chat_messageUncheckedCreateWithoutSenderInput> | chat_messageCreateWithoutSenderInput[] | chat_messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: chat_messageCreateOrConnectWithoutSenderInput | chat_messageCreateOrConnectWithoutSenderInput[]
    upsert?: chat_messageUpsertWithWhereUniqueWithoutSenderInput | chat_messageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: chat_messageCreateManySenderInputEnvelope
    set?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    disconnect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    delete?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    connect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    update?: chat_messageUpdateWithWhereUniqueWithoutSenderInput | chat_messageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: chat_messageUpdateManyWithWhereWithoutSenderInput | chat_messageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: chat_messageScalarWhereInput | chat_messageScalarWhereInput[]
  }

  export type propertyUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<propertyCreateWithoutOwnerInput, propertyUncheckedCreateWithoutOwnerInput> | propertyCreateWithoutOwnerInput[] | propertyUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: propertyCreateOrConnectWithoutOwnerInput | propertyCreateOrConnectWithoutOwnerInput[]
    upsert?: propertyUpsertWithWhereUniqueWithoutOwnerInput | propertyUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: propertyCreateManyOwnerInputEnvelope
    set?: propertyWhereUniqueInput | propertyWhereUniqueInput[]
    disconnect?: propertyWhereUniqueInput | propertyWhereUniqueInput[]
    delete?: propertyWhereUniqueInput | propertyWhereUniqueInput[]
    connect?: propertyWhereUniqueInput | propertyWhereUniqueInput[]
    update?: propertyUpdateWithWhereUniqueWithoutOwnerInput | propertyUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: propertyUpdateManyWithWhereWithoutOwnerInput | propertyUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: propertyScalarWhereInput | propertyScalarWhereInput[]
  }

  export type chatUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<chatCreateWithoutBuyerInput, chatUncheckedCreateWithoutBuyerInput> | chatCreateWithoutBuyerInput[] | chatUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: chatCreateOrConnectWithoutBuyerInput | chatCreateOrConnectWithoutBuyerInput[]
    upsert?: chatUpsertWithWhereUniqueWithoutBuyerInput | chatUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: chatCreateManyBuyerInputEnvelope
    set?: chatWhereUniqueInput | chatWhereUniqueInput[]
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[]
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    update?: chatUpdateWithWhereUniqueWithoutBuyerInput | chatUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: chatUpdateManyWithWhereWithoutBuyerInput | chatUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[]
  }

  export type chatUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<chatCreateWithoutOwnerInput, chatUncheckedCreateWithoutOwnerInput> | chatCreateWithoutOwnerInput[] | chatUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: chatCreateOrConnectWithoutOwnerInput | chatCreateOrConnectWithoutOwnerInput[]
    upsert?: chatUpsertWithWhereUniqueWithoutOwnerInput | chatUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: chatCreateManyOwnerInputEnvelope
    set?: chatWhereUniqueInput | chatWhereUniqueInput[]
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[]
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    update?: chatUpdateWithWhereUniqueWithoutOwnerInput | chatUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: chatUpdateManyWithWhereWithoutOwnerInput | chatUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[]
  }

  export type chat_messageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<chat_messageCreateWithoutSenderInput, chat_messageUncheckedCreateWithoutSenderInput> | chat_messageCreateWithoutSenderInput[] | chat_messageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: chat_messageCreateOrConnectWithoutSenderInput | chat_messageCreateOrConnectWithoutSenderInput[]
    upsert?: chat_messageUpsertWithWhereUniqueWithoutSenderInput | chat_messageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: chat_messageCreateManySenderInputEnvelope
    set?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    disconnect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    delete?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    connect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    update?: chat_messageUpdateWithWhereUniqueWithoutSenderInput | chat_messageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: chat_messageUpdateManyWithWhereWithoutSenderInput | chat_messageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: chat_messageScalarWhereInput | chat_messageScalarWhereInput[]
  }

  export type propertyCreateimagesInput = {
    set: string[]
  }

  export type propertyCreateamenitiesInput = {
    set: string[]
  }

  export type marketplace_userCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<marketplace_userCreateWithoutPropertiesInput, marketplace_userUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: marketplace_userCreateOrConnectWithoutPropertiesInput
    connect?: marketplace_userWhereUniqueInput
  }

  export type chatCreateNestedManyWithoutPropertyInput = {
    create?: XOR<chatCreateWithoutPropertyInput, chatUncheckedCreateWithoutPropertyInput> | chatCreateWithoutPropertyInput[] | chatUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: chatCreateOrConnectWithoutPropertyInput | chatCreateOrConnectWithoutPropertyInput[]
    createMany?: chatCreateManyPropertyInputEnvelope
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
  }

  export type chatUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<chatCreateWithoutPropertyInput, chatUncheckedCreateWithoutPropertyInput> | chatCreateWithoutPropertyInput[] | chatUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: chatCreateOrConnectWithoutPropertyInput | chatCreateOrConnectWithoutPropertyInput[]
    createMany?: chatCreateManyPropertyInputEnvelope
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
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
  }

  export type propertyUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type propertyUpdateamenitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type marketplace_userUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<marketplace_userCreateWithoutPropertiesInput, marketplace_userUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: marketplace_userCreateOrConnectWithoutPropertiesInput
    upsert?: marketplace_userUpsertWithoutPropertiesInput
    connect?: marketplace_userWhereUniqueInput
    update?: XOR<XOR<marketplace_userUpdateToOneWithWhereWithoutPropertiesInput, marketplace_userUpdateWithoutPropertiesInput>, marketplace_userUncheckedUpdateWithoutPropertiesInput>
  }

  export type chatUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<chatCreateWithoutPropertyInput, chatUncheckedCreateWithoutPropertyInput> | chatCreateWithoutPropertyInput[] | chatUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: chatCreateOrConnectWithoutPropertyInput | chatCreateOrConnectWithoutPropertyInput[]
    upsert?: chatUpsertWithWhereUniqueWithoutPropertyInput | chatUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: chatCreateManyPropertyInputEnvelope
    set?: chatWhereUniqueInput | chatWhereUniqueInput[]
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[]
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    update?: chatUpdateWithWhereUniqueWithoutPropertyInput | chatUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: chatUpdateManyWithWhereWithoutPropertyInput | chatUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[]
  }

  export type chatUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<chatCreateWithoutPropertyInput, chatUncheckedCreateWithoutPropertyInput> | chatCreateWithoutPropertyInput[] | chatUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: chatCreateOrConnectWithoutPropertyInput | chatCreateOrConnectWithoutPropertyInput[]
    upsert?: chatUpsertWithWhereUniqueWithoutPropertyInput | chatUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: chatCreateManyPropertyInputEnvelope
    set?: chatWhereUniqueInput | chatWhereUniqueInput[]
    disconnect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    delete?: chatWhereUniqueInput | chatWhereUniqueInput[]
    connect?: chatWhereUniqueInput | chatWhereUniqueInput[]
    update?: chatUpdateWithWhereUniqueWithoutPropertyInput | chatUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: chatUpdateManyWithWhereWithoutPropertyInput | chatUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: chatScalarWhereInput | chatScalarWhereInput[]
  }

  export type propertyCreateNestedOneWithoutChatsInput = {
    create?: XOR<propertyCreateWithoutChatsInput, propertyUncheckedCreateWithoutChatsInput>
    connectOrCreate?: propertyCreateOrConnectWithoutChatsInput
    connect?: propertyWhereUniqueInput
  }

  export type marketplace_userCreateNestedOneWithoutChats_buyerInput = {
    create?: XOR<marketplace_userCreateWithoutChats_buyerInput, marketplace_userUncheckedCreateWithoutChats_buyerInput>
    connectOrCreate?: marketplace_userCreateOrConnectWithoutChats_buyerInput
    connect?: marketplace_userWhereUniqueInput
  }

  export type marketplace_userCreateNestedOneWithoutChats_ownerInput = {
    create?: XOR<marketplace_userCreateWithoutChats_ownerInput, marketplace_userUncheckedCreateWithoutChats_ownerInput>
    connectOrCreate?: marketplace_userCreateOrConnectWithoutChats_ownerInput
    connect?: marketplace_userWhereUniqueInput
  }

  export type chat_messageCreateNestedManyWithoutChatInput = {
    create?: XOR<chat_messageCreateWithoutChatInput, chat_messageUncheckedCreateWithoutChatInput> | chat_messageCreateWithoutChatInput[] | chat_messageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: chat_messageCreateOrConnectWithoutChatInput | chat_messageCreateOrConnectWithoutChatInput[]
    createMany?: chat_messageCreateManyChatInputEnvelope
    connect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
  }

  export type chat_messageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<chat_messageCreateWithoutChatInput, chat_messageUncheckedCreateWithoutChatInput> | chat_messageCreateWithoutChatInput[] | chat_messageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: chat_messageCreateOrConnectWithoutChatInput | chat_messageCreateOrConnectWithoutChatInput[]
    createMany?: chat_messageCreateManyChatInputEnvelope
    connect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
  }

  export type propertyUpdateOneRequiredWithoutChatsNestedInput = {
    create?: XOR<propertyCreateWithoutChatsInput, propertyUncheckedCreateWithoutChatsInput>
    connectOrCreate?: propertyCreateOrConnectWithoutChatsInput
    upsert?: propertyUpsertWithoutChatsInput
    connect?: propertyWhereUniqueInput
    update?: XOR<XOR<propertyUpdateToOneWithWhereWithoutChatsInput, propertyUpdateWithoutChatsInput>, propertyUncheckedUpdateWithoutChatsInput>
  }

  export type marketplace_userUpdateOneRequiredWithoutChats_buyerNestedInput = {
    create?: XOR<marketplace_userCreateWithoutChats_buyerInput, marketplace_userUncheckedCreateWithoutChats_buyerInput>
    connectOrCreate?: marketplace_userCreateOrConnectWithoutChats_buyerInput
    upsert?: marketplace_userUpsertWithoutChats_buyerInput
    connect?: marketplace_userWhereUniqueInput
    update?: XOR<XOR<marketplace_userUpdateToOneWithWhereWithoutChats_buyerInput, marketplace_userUpdateWithoutChats_buyerInput>, marketplace_userUncheckedUpdateWithoutChats_buyerInput>
  }

  export type marketplace_userUpdateOneRequiredWithoutChats_ownerNestedInput = {
    create?: XOR<marketplace_userCreateWithoutChats_ownerInput, marketplace_userUncheckedCreateWithoutChats_ownerInput>
    connectOrCreate?: marketplace_userCreateOrConnectWithoutChats_ownerInput
    upsert?: marketplace_userUpsertWithoutChats_ownerInput
    connect?: marketplace_userWhereUniqueInput
    update?: XOR<XOR<marketplace_userUpdateToOneWithWhereWithoutChats_ownerInput, marketplace_userUpdateWithoutChats_ownerInput>, marketplace_userUncheckedUpdateWithoutChats_ownerInput>
  }

  export type chat_messageUpdateManyWithoutChatNestedInput = {
    create?: XOR<chat_messageCreateWithoutChatInput, chat_messageUncheckedCreateWithoutChatInput> | chat_messageCreateWithoutChatInput[] | chat_messageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: chat_messageCreateOrConnectWithoutChatInput | chat_messageCreateOrConnectWithoutChatInput[]
    upsert?: chat_messageUpsertWithWhereUniqueWithoutChatInput | chat_messageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: chat_messageCreateManyChatInputEnvelope
    set?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    disconnect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    delete?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    connect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    update?: chat_messageUpdateWithWhereUniqueWithoutChatInput | chat_messageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: chat_messageUpdateManyWithWhereWithoutChatInput | chat_messageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: chat_messageScalarWhereInput | chat_messageScalarWhereInput[]
  }

  export type chat_messageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<chat_messageCreateWithoutChatInput, chat_messageUncheckedCreateWithoutChatInput> | chat_messageCreateWithoutChatInput[] | chat_messageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: chat_messageCreateOrConnectWithoutChatInput | chat_messageCreateOrConnectWithoutChatInput[]
    upsert?: chat_messageUpsertWithWhereUniqueWithoutChatInput | chat_messageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: chat_messageCreateManyChatInputEnvelope
    set?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    disconnect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    delete?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    connect?: chat_messageWhereUniqueInput | chat_messageWhereUniqueInput[]
    update?: chat_messageUpdateWithWhereUniqueWithoutChatInput | chat_messageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: chat_messageUpdateManyWithWhereWithoutChatInput | chat_messageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: chat_messageScalarWhereInput | chat_messageScalarWhereInput[]
  }

  export type chatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<chatCreateWithoutMessagesInput, chatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: chatCreateOrConnectWithoutMessagesInput
    connect?: chatWhereUniqueInput
  }

  export type marketplace_userCreateNestedOneWithoutSent_messagesInput = {
    create?: XOR<marketplace_userCreateWithoutSent_messagesInput, marketplace_userUncheckedCreateWithoutSent_messagesInput>
    connectOrCreate?: marketplace_userCreateOrConnectWithoutSent_messagesInput
    connect?: marketplace_userWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type chatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<chatCreateWithoutMessagesInput, chatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: chatCreateOrConnectWithoutMessagesInput
    upsert?: chatUpsertWithoutMessagesInput
    connect?: chatWhereUniqueInput
    update?: XOR<XOR<chatUpdateToOneWithWhereWithoutMessagesInput, chatUpdateWithoutMessagesInput>, chatUncheckedUpdateWithoutMessagesInput>
  }

  export type marketplace_userUpdateOneRequiredWithoutSent_messagesNestedInput = {
    create?: XOR<marketplace_userCreateWithoutSent_messagesInput, marketplace_userUncheckedCreateWithoutSent_messagesInput>
    connectOrCreate?: marketplace_userCreateOrConnectWithoutSent_messagesInput
    upsert?: marketplace_userUpsertWithoutSent_messagesInput
    connect?: marketplace_userWhereUniqueInput
    update?: XOR<XOR<marketplace_userUpdateToOneWithWhereWithoutSent_messagesInput, marketplace_userUpdateWithoutSent_messagesInput>, marketplace_userUncheckedUpdateWithoutSent_messagesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type propertyCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    price: number
    currency: string
    type: string
    status: string
    bedrooms: number
    bathrooms: number
    area: number
    street: string
    city: string
    country: string
    zipCode: string
    lat?: number | null
    lng?: number | null
    images?: propertyCreateimagesInput | string[]
    amenities?: propertyCreateamenitiesInput | string[]
    chats?: chatCreateNestedManyWithoutPropertyInput
  }

  export type propertyUncheckedCreateWithoutOwnerInput = {
    id?: string
    title: string
    description: string
    price: number
    currency: string
    type: string
    status: string
    bedrooms: number
    bathrooms: number
    area: number
    street: string
    city: string
    country: string
    zipCode: string
    lat?: number | null
    lng?: number | null
    images?: propertyCreateimagesInput | string[]
    amenities?: propertyCreateamenitiesInput | string[]
    chats?: chatUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type propertyCreateOrConnectWithoutOwnerInput = {
    where: propertyWhereUniqueInput
    create: XOR<propertyCreateWithoutOwnerInput, propertyUncheckedCreateWithoutOwnerInput>
  }

  export type propertyCreateManyOwnerInputEnvelope = {
    data: propertyCreateManyOwnerInput | propertyCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type chatCreateWithoutBuyerInput = {
    id?: string
    property: propertyCreateNestedOneWithoutChatsInput
    owner: marketplace_userCreateNestedOneWithoutChats_ownerInput
    messages?: chat_messageCreateNestedManyWithoutChatInput
  }

  export type chatUncheckedCreateWithoutBuyerInput = {
    id?: string
    propertyId: string
    ownerId: string
    messages?: chat_messageUncheckedCreateNestedManyWithoutChatInput
  }

  export type chatCreateOrConnectWithoutBuyerInput = {
    where: chatWhereUniqueInput
    create: XOR<chatCreateWithoutBuyerInput, chatUncheckedCreateWithoutBuyerInput>
  }

  export type chatCreateManyBuyerInputEnvelope = {
    data: chatCreateManyBuyerInput | chatCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type chatCreateWithoutOwnerInput = {
    id?: string
    property: propertyCreateNestedOneWithoutChatsInput
    buyer: marketplace_userCreateNestedOneWithoutChats_buyerInput
    messages?: chat_messageCreateNestedManyWithoutChatInput
  }

  export type chatUncheckedCreateWithoutOwnerInput = {
    id?: string
    propertyId: string
    buyerId: string
    messages?: chat_messageUncheckedCreateNestedManyWithoutChatInput
  }

  export type chatCreateOrConnectWithoutOwnerInput = {
    where: chatWhereUniqueInput
    create: XOR<chatCreateWithoutOwnerInput, chatUncheckedCreateWithoutOwnerInput>
  }

  export type chatCreateManyOwnerInputEnvelope = {
    data: chatCreateManyOwnerInput | chatCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type chat_messageCreateWithoutSenderInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    chat: chatCreateNestedOneWithoutMessagesInput
  }

  export type chat_messageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    chatId: string
  }

  export type chat_messageCreateOrConnectWithoutSenderInput = {
    where: chat_messageWhereUniqueInput
    create: XOR<chat_messageCreateWithoutSenderInput, chat_messageUncheckedCreateWithoutSenderInput>
  }

  export type chat_messageCreateManySenderInputEnvelope = {
    data: chat_messageCreateManySenderInput | chat_messageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type propertyUpsertWithWhereUniqueWithoutOwnerInput = {
    where: propertyWhereUniqueInput
    update: XOR<propertyUpdateWithoutOwnerInput, propertyUncheckedUpdateWithoutOwnerInput>
    create: XOR<propertyCreateWithoutOwnerInput, propertyUncheckedCreateWithoutOwnerInput>
  }

  export type propertyUpdateWithWhereUniqueWithoutOwnerInput = {
    where: propertyWhereUniqueInput
    data: XOR<propertyUpdateWithoutOwnerInput, propertyUncheckedUpdateWithoutOwnerInput>
  }

  export type propertyUpdateManyWithWhereWithoutOwnerInput = {
    where: propertyScalarWhereInput
    data: XOR<propertyUpdateManyMutationInput, propertyUncheckedUpdateManyWithoutOwnerInput>
  }

  export type propertyScalarWhereInput = {
    AND?: propertyScalarWhereInput | propertyScalarWhereInput[]
    OR?: propertyScalarWhereInput[]
    NOT?: propertyScalarWhereInput | propertyScalarWhereInput[]
    id?: StringFilter<"property"> | string
    title?: StringFilter<"property"> | string
    description?: StringFilter<"property"> | string
    price?: IntFilter<"property"> | number
    currency?: StringFilter<"property"> | string
    type?: StringFilter<"property"> | string
    status?: StringFilter<"property"> | string
    bedrooms?: IntFilter<"property"> | number
    bathrooms?: IntFilter<"property"> | number
    area?: IntFilter<"property"> | number
    street?: StringFilter<"property"> | string
    city?: StringFilter<"property"> | string
    country?: StringFilter<"property"> | string
    zipCode?: StringFilter<"property"> | string
    lat?: FloatNullableFilter<"property"> | number | null
    lng?: FloatNullableFilter<"property"> | number | null
    images?: StringNullableListFilter<"property">
    amenities?: StringNullableListFilter<"property">
    ownerId?: StringFilter<"property"> | string
  }

  export type chatUpsertWithWhereUniqueWithoutBuyerInput = {
    where: chatWhereUniqueInput
    update: XOR<chatUpdateWithoutBuyerInput, chatUncheckedUpdateWithoutBuyerInput>
    create: XOR<chatCreateWithoutBuyerInput, chatUncheckedCreateWithoutBuyerInput>
  }

  export type chatUpdateWithWhereUniqueWithoutBuyerInput = {
    where: chatWhereUniqueInput
    data: XOR<chatUpdateWithoutBuyerInput, chatUncheckedUpdateWithoutBuyerInput>
  }

  export type chatUpdateManyWithWhereWithoutBuyerInput = {
    where: chatScalarWhereInput
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyWithoutBuyerInput>
  }

  export type chatScalarWhereInput = {
    AND?: chatScalarWhereInput | chatScalarWhereInput[]
    OR?: chatScalarWhereInput[]
    NOT?: chatScalarWhereInput | chatScalarWhereInput[]
    id?: StringFilter<"chat"> | string
    propertyId?: StringFilter<"chat"> | string
    buyerId?: StringFilter<"chat"> | string
    ownerId?: StringFilter<"chat"> | string
  }

  export type chatUpsertWithWhereUniqueWithoutOwnerInput = {
    where: chatWhereUniqueInput
    update: XOR<chatUpdateWithoutOwnerInput, chatUncheckedUpdateWithoutOwnerInput>
    create: XOR<chatCreateWithoutOwnerInput, chatUncheckedCreateWithoutOwnerInput>
  }

  export type chatUpdateWithWhereUniqueWithoutOwnerInput = {
    where: chatWhereUniqueInput
    data: XOR<chatUpdateWithoutOwnerInput, chatUncheckedUpdateWithoutOwnerInput>
  }

  export type chatUpdateManyWithWhereWithoutOwnerInput = {
    where: chatScalarWhereInput
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyWithoutOwnerInput>
  }

  export type chat_messageUpsertWithWhereUniqueWithoutSenderInput = {
    where: chat_messageWhereUniqueInput
    update: XOR<chat_messageUpdateWithoutSenderInput, chat_messageUncheckedUpdateWithoutSenderInput>
    create: XOR<chat_messageCreateWithoutSenderInput, chat_messageUncheckedCreateWithoutSenderInput>
  }

  export type chat_messageUpdateWithWhereUniqueWithoutSenderInput = {
    where: chat_messageWhereUniqueInput
    data: XOR<chat_messageUpdateWithoutSenderInput, chat_messageUncheckedUpdateWithoutSenderInput>
  }

  export type chat_messageUpdateManyWithWhereWithoutSenderInput = {
    where: chat_messageScalarWhereInput
    data: XOR<chat_messageUpdateManyMutationInput, chat_messageUncheckedUpdateManyWithoutSenderInput>
  }

  export type chat_messageScalarWhereInput = {
    AND?: chat_messageScalarWhereInput | chat_messageScalarWhereInput[]
    OR?: chat_messageScalarWhereInput[]
    NOT?: chat_messageScalarWhereInput | chat_messageScalarWhereInput[]
    id?: StringFilter<"chat_message"> | string
    content?: StringFilter<"chat_message"> | string
    timestamp?: DateTimeFilter<"chat_message"> | Date | string
    read?: BoolFilter<"chat_message"> | boolean
    chatId?: StringFilter<"chat_message"> | string
    senderId?: StringFilter<"chat_message"> | string
  }

  export type marketplace_userCreateWithoutPropertiesInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
    chats_buyer?: chatCreateNestedManyWithoutBuyerInput
    chats_owner?: chatCreateNestedManyWithoutOwnerInput
    sent_messages?: chat_messageCreateNestedManyWithoutSenderInput
  }

  export type marketplace_userUncheckedCreateWithoutPropertiesInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
    chats_buyer?: chatUncheckedCreateNestedManyWithoutBuyerInput
    chats_owner?: chatUncheckedCreateNestedManyWithoutOwnerInput
    sent_messages?: chat_messageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type marketplace_userCreateOrConnectWithoutPropertiesInput = {
    where: marketplace_userWhereUniqueInput
    create: XOR<marketplace_userCreateWithoutPropertiesInput, marketplace_userUncheckedCreateWithoutPropertiesInput>
  }

  export type chatCreateWithoutPropertyInput = {
    id?: string
    buyer: marketplace_userCreateNestedOneWithoutChats_buyerInput
    owner: marketplace_userCreateNestedOneWithoutChats_ownerInput
    messages?: chat_messageCreateNestedManyWithoutChatInput
  }

  export type chatUncheckedCreateWithoutPropertyInput = {
    id?: string
    buyerId: string
    ownerId: string
    messages?: chat_messageUncheckedCreateNestedManyWithoutChatInput
  }

  export type chatCreateOrConnectWithoutPropertyInput = {
    where: chatWhereUniqueInput
    create: XOR<chatCreateWithoutPropertyInput, chatUncheckedCreateWithoutPropertyInput>
  }

  export type chatCreateManyPropertyInputEnvelope = {
    data: chatCreateManyPropertyInput | chatCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type marketplace_userUpsertWithoutPropertiesInput = {
    update: XOR<marketplace_userUpdateWithoutPropertiesInput, marketplace_userUncheckedUpdateWithoutPropertiesInput>
    create: XOR<marketplace_userCreateWithoutPropertiesInput, marketplace_userUncheckedCreateWithoutPropertiesInput>
    where?: marketplace_userWhereInput
  }

  export type marketplace_userUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: marketplace_userWhereInput
    data: XOR<marketplace_userUpdateWithoutPropertiesInput, marketplace_userUncheckedUpdateWithoutPropertiesInput>
  }

  export type marketplace_userUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chats_buyer?: chatUpdateManyWithoutBuyerNestedInput
    chats_owner?: chatUpdateManyWithoutOwnerNestedInput
    sent_messages?: chat_messageUpdateManyWithoutSenderNestedInput
  }

  export type marketplace_userUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    chats_buyer?: chatUncheckedUpdateManyWithoutBuyerNestedInput
    chats_owner?: chatUncheckedUpdateManyWithoutOwnerNestedInput
    sent_messages?: chat_messageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type chatUpsertWithWhereUniqueWithoutPropertyInput = {
    where: chatWhereUniqueInput
    update: XOR<chatUpdateWithoutPropertyInput, chatUncheckedUpdateWithoutPropertyInput>
    create: XOR<chatCreateWithoutPropertyInput, chatUncheckedCreateWithoutPropertyInput>
  }

  export type chatUpdateWithWhereUniqueWithoutPropertyInput = {
    where: chatWhereUniqueInput
    data: XOR<chatUpdateWithoutPropertyInput, chatUncheckedUpdateWithoutPropertyInput>
  }

  export type chatUpdateManyWithWhereWithoutPropertyInput = {
    where: chatScalarWhereInput
    data: XOR<chatUpdateManyMutationInput, chatUncheckedUpdateManyWithoutPropertyInput>
  }

  export type propertyCreateWithoutChatsInput = {
    id?: string
    title: string
    description: string
    price: number
    currency: string
    type: string
    status: string
    bedrooms: number
    bathrooms: number
    area: number
    street: string
    city: string
    country: string
    zipCode: string
    lat?: number | null
    lng?: number | null
    images?: propertyCreateimagesInput | string[]
    amenities?: propertyCreateamenitiesInput | string[]
    owner: marketplace_userCreateNestedOneWithoutPropertiesInput
  }

  export type propertyUncheckedCreateWithoutChatsInput = {
    id?: string
    title: string
    description: string
    price: number
    currency: string
    type: string
    status: string
    bedrooms: number
    bathrooms: number
    area: number
    street: string
    city: string
    country: string
    zipCode: string
    lat?: number | null
    lng?: number | null
    images?: propertyCreateimagesInput | string[]
    amenities?: propertyCreateamenitiesInput | string[]
    ownerId: string
  }

  export type propertyCreateOrConnectWithoutChatsInput = {
    where: propertyWhereUniqueInput
    create: XOR<propertyCreateWithoutChatsInput, propertyUncheckedCreateWithoutChatsInput>
  }

  export type marketplace_userCreateWithoutChats_buyerInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
    properties?: propertyCreateNestedManyWithoutOwnerInput
    chats_owner?: chatCreateNestedManyWithoutOwnerInput
    sent_messages?: chat_messageCreateNestedManyWithoutSenderInput
  }

  export type marketplace_userUncheckedCreateWithoutChats_buyerInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
    properties?: propertyUncheckedCreateNestedManyWithoutOwnerInput
    chats_owner?: chatUncheckedCreateNestedManyWithoutOwnerInput
    sent_messages?: chat_messageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type marketplace_userCreateOrConnectWithoutChats_buyerInput = {
    where: marketplace_userWhereUniqueInput
    create: XOR<marketplace_userCreateWithoutChats_buyerInput, marketplace_userUncheckedCreateWithoutChats_buyerInput>
  }

  export type marketplace_userCreateWithoutChats_ownerInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
    properties?: propertyCreateNestedManyWithoutOwnerInput
    chats_buyer?: chatCreateNestedManyWithoutBuyerInput
    sent_messages?: chat_messageCreateNestedManyWithoutSenderInput
  }

  export type marketplace_userUncheckedCreateWithoutChats_ownerInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
    properties?: propertyUncheckedCreateNestedManyWithoutOwnerInput
    chats_buyer?: chatUncheckedCreateNestedManyWithoutBuyerInput
    sent_messages?: chat_messageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type marketplace_userCreateOrConnectWithoutChats_ownerInput = {
    where: marketplace_userWhereUniqueInput
    create: XOR<marketplace_userCreateWithoutChats_ownerInput, marketplace_userUncheckedCreateWithoutChats_ownerInput>
  }

  export type chat_messageCreateWithoutChatInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    sender: marketplace_userCreateNestedOneWithoutSent_messagesInput
  }

  export type chat_messageUncheckedCreateWithoutChatInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    senderId: string
  }

  export type chat_messageCreateOrConnectWithoutChatInput = {
    where: chat_messageWhereUniqueInput
    create: XOR<chat_messageCreateWithoutChatInput, chat_messageUncheckedCreateWithoutChatInput>
  }

  export type chat_messageCreateManyChatInputEnvelope = {
    data: chat_messageCreateManyChatInput | chat_messageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type propertyUpsertWithoutChatsInput = {
    update: XOR<propertyUpdateWithoutChatsInput, propertyUncheckedUpdateWithoutChatsInput>
    create: XOR<propertyCreateWithoutChatsInput, propertyUncheckedCreateWithoutChatsInput>
    where?: propertyWhereInput
  }

  export type propertyUpdateToOneWithWhereWithoutChatsInput = {
    where?: propertyWhereInput
    data: XOR<propertyUpdateWithoutChatsInput, propertyUncheckedUpdateWithoutChatsInput>
  }

  export type propertyUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    images?: propertyUpdateimagesInput | string[]
    amenities?: propertyUpdateamenitiesInput | string[]
    owner?: marketplace_userUpdateOneRequiredWithoutPropertiesNestedInput
  }

  export type propertyUncheckedUpdateWithoutChatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    images?: propertyUpdateimagesInput | string[]
    amenities?: propertyUpdateamenitiesInput | string[]
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type marketplace_userUpsertWithoutChats_buyerInput = {
    update: XOR<marketplace_userUpdateWithoutChats_buyerInput, marketplace_userUncheckedUpdateWithoutChats_buyerInput>
    create: XOR<marketplace_userCreateWithoutChats_buyerInput, marketplace_userUncheckedCreateWithoutChats_buyerInput>
    where?: marketplace_userWhereInput
  }

  export type marketplace_userUpdateToOneWithWhereWithoutChats_buyerInput = {
    where?: marketplace_userWhereInput
    data: XOR<marketplace_userUpdateWithoutChats_buyerInput, marketplace_userUncheckedUpdateWithoutChats_buyerInput>
  }

  export type marketplace_userUpdateWithoutChats_buyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: propertyUpdateManyWithoutOwnerNestedInput
    chats_owner?: chatUpdateManyWithoutOwnerNestedInput
    sent_messages?: chat_messageUpdateManyWithoutSenderNestedInput
  }

  export type marketplace_userUncheckedUpdateWithoutChats_buyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: propertyUncheckedUpdateManyWithoutOwnerNestedInput
    chats_owner?: chatUncheckedUpdateManyWithoutOwnerNestedInput
    sent_messages?: chat_messageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type marketplace_userUpsertWithoutChats_ownerInput = {
    update: XOR<marketplace_userUpdateWithoutChats_ownerInput, marketplace_userUncheckedUpdateWithoutChats_ownerInput>
    create: XOR<marketplace_userCreateWithoutChats_ownerInput, marketplace_userUncheckedCreateWithoutChats_ownerInput>
    where?: marketplace_userWhereInput
  }

  export type marketplace_userUpdateToOneWithWhereWithoutChats_ownerInput = {
    where?: marketplace_userWhereInput
    data: XOR<marketplace_userUpdateWithoutChats_ownerInput, marketplace_userUncheckedUpdateWithoutChats_ownerInput>
  }

  export type marketplace_userUpdateWithoutChats_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: propertyUpdateManyWithoutOwnerNestedInput
    chats_buyer?: chatUpdateManyWithoutBuyerNestedInput
    sent_messages?: chat_messageUpdateManyWithoutSenderNestedInput
  }

  export type marketplace_userUncheckedUpdateWithoutChats_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: propertyUncheckedUpdateManyWithoutOwnerNestedInput
    chats_buyer?: chatUncheckedUpdateManyWithoutBuyerNestedInput
    sent_messages?: chat_messageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type chat_messageUpsertWithWhereUniqueWithoutChatInput = {
    where: chat_messageWhereUniqueInput
    update: XOR<chat_messageUpdateWithoutChatInput, chat_messageUncheckedUpdateWithoutChatInput>
    create: XOR<chat_messageCreateWithoutChatInput, chat_messageUncheckedCreateWithoutChatInput>
  }

  export type chat_messageUpdateWithWhereUniqueWithoutChatInput = {
    where: chat_messageWhereUniqueInput
    data: XOR<chat_messageUpdateWithoutChatInput, chat_messageUncheckedUpdateWithoutChatInput>
  }

  export type chat_messageUpdateManyWithWhereWithoutChatInput = {
    where: chat_messageScalarWhereInput
    data: XOR<chat_messageUpdateManyMutationInput, chat_messageUncheckedUpdateManyWithoutChatInput>
  }

  export type chatCreateWithoutMessagesInput = {
    id?: string
    property: propertyCreateNestedOneWithoutChatsInput
    buyer: marketplace_userCreateNestedOneWithoutChats_buyerInput
    owner: marketplace_userCreateNestedOneWithoutChats_ownerInput
  }

  export type chatUncheckedCreateWithoutMessagesInput = {
    id?: string
    propertyId: string
    buyerId: string
    ownerId: string
  }

  export type chatCreateOrConnectWithoutMessagesInput = {
    where: chatWhereUniqueInput
    create: XOR<chatCreateWithoutMessagesInput, chatUncheckedCreateWithoutMessagesInput>
  }

  export type marketplace_userCreateWithoutSent_messagesInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
    properties?: propertyCreateNestedManyWithoutOwnerInput
    chats_buyer?: chatCreateNestedManyWithoutBuyerInput
    chats_owner?: chatCreateNestedManyWithoutOwnerInput
  }

  export type marketplace_userUncheckedCreateWithoutSent_messagesInput = {
    id?: string
    name: string
    email: string
    role: string
    avatar?: string | null
    phone?: string | null
    password?: string | null
    properties?: propertyUncheckedCreateNestedManyWithoutOwnerInput
    chats_buyer?: chatUncheckedCreateNestedManyWithoutBuyerInput
    chats_owner?: chatUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type marketplace_userCreateOrConnectWithoutSent_messagesInput = {
    where: marketplace_userWhereUniqueInput
    create: XOR<marketplace_userCreateWithoutSent_messagesInput, marketplace_userUncheckedCreateWithoutSent_messagesInput>
  }

  export type chatUpsertWithoutMessagesInput = {
    update: XOR<chatUpdateWithoutMessagesInput, chatUncheckedUpdateWithoutMessagesInput>
    create: XOR<chatCreateWithoutMessagesInput, chatUncheckedCreateWithoutMessagesInput>
    where?: chatWhereInput
  }

  export type chatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: chatWhereInput
    data: XOR<chatUpdateWithoutMessagesInput, chatUncheckedUpdateWithoutMessagesInput>
  }

  export type chatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    property?: propertyUpdateOneRequiredWithoutChatsNestedInput
    buyer?: marketplace_userUpdateOneRequiredWithoutChats_buyerNestedInput
    owner?: marketplace_userUpdateOneRequiredWithoutChats_ownerNestedInput
  }

  export type chatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type marketplace_userUpsertWithoutSent_messagesInput = {
    update: XOR<marketplace_userUpdateWithoutSent_messagesInput, marketplace_userUncheckedUpdateWithoutSent_messagesInput>
    create: XOR<marketplace_userCreateWithoutSent_messagesInput, marketplace_userUncheckedCreateWithoutSent_messagesInput>
    where?: marketplace_userWhereInput
  }

  export type marketplace_userUpdateToOneWithWhereWithoutSent_messagesInput = {
    where?: marketplace_userWhereInput
    data: XOR<marketplace_userUpdateWithoutSent_messagesInput, marketplace_userUncheckedUpdateWithoutSent_messagesInput>
  }

  export type marketplace_userUpdateWithoutSent_messagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: propertyUpdateManyWithoutOwnerNestedInput
    chats_buyer?: chatUpdateManyWithoutBuyerNestedInput
    chats_owner?: chatUpdateManyWithoutOwnerNestedInput
  }

  export type marketplace_userUncheckedUpdateWithoutSent_messagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    properties?: propertyUncheckedUpdateManyWithoutOwnerNestedInput
    chats_buyer?: chatUncheckedUpdateManyWithoutBuyerNestedInput
    chats_owner?: chatUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type propertyCreateManyOwnerInput = {
    id?: string
    title: string
    description: string
    price: number
    currency: string
    type: string
    status: string
    bedrooms: number
    bathrooms: number
    area: number
    street: string
    city: string
    country: string
    zipCode: string
    lat?: number | null
    lng?: number | null
    images?: propertyCreateimagesInput | string[]
    amenities?: propertyCreateamenitiesInput | string[]
  }

  export type chatCreateManyBuyerInput = {
    id?: string
    propertyId: string
    ownerId: string
  }

  export type chatCreateManyOwnerInput = {
    id?: string
    propertyId: string
    buyerId: string
  }

  export type chat_messageCreateManySenderInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    chatId: string
  }

  export type propertyUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    images?: propertyUpdateimagesInput | string[]
    amenities?: propertyUpdateamenitiesInput | string[]
    chats?: chatUpdateManyWithoutPropertyNestedInput
  }

  export type propertyUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    images?: propertyUpdateimagesInput | string[]
    amenities?: propertyUpdateamenitiesInput | string[]
    chats?: chatUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type propertyUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    area?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    zipCode?: StringFieldUpdateOperationsInput | string
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    images?: propertyUpdateimagesInput | string[]
    amenities?: propertyUpdateamenitiesInput | string[]
  }

  export type chatUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    property?: propertyUpdateOneRequiredWithoutChatsNestedInput
    owner?: marketplace_userUpdateOneRequiredWithoutChats_ownerNestedInput
    messages?: chat_messageUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    messages?: chat_messageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type chatUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    property?: propertyUpdateOneRequiredWithoutChatsNestedInput
    buyer?: marketplace_userUpdateOneRequiredWithoutChats_buyerNestedInput
    messages?: chat_messageUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    messages?: chat_messageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
  }

  export type chat_messageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chat?: chatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type chat_messageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type chat_messageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    chatId?: StringFieldUpdateOperationsInput | string
  }

  export type chatCreateManyPropertyInput = {
    id?: string
    buyerId: string
    ownerId: string
  }

  export type chatUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyer?: marketplace_userUpdateOneRequiredWithoutChats_buyerNestedInput
    owner?: marketplace_userUpdateOneRequiredWithoutChats_ownerNestedInput
    messages?: chat_messageUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    messages?: chat_messageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type chatUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type chat_messageCreateManyChatInput = {
    id?: string
    content: string
    timestamp?: Date | string
    read?: boolean
    senderId: string
  }

  export type chat_messageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    sender?: marketplace_userUpdateOneRequiredWithoutSent_messagesNestedInput
  }

  export type chat_messageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    senderId?: StringFieldUpdateOperationsInput | string
  }

  export type chat_messageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    read?: BoolFieldUpdateOperationsInput | boolean
    senderId?: StringFieldUpdateOperationsInput | string
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
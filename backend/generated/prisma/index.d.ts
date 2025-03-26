
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
 * Model Tecnologia
 * 
 */
export type Tecnologia = $Result.DefaultSelection<Prisma.$TecnologiaPayload>
/**
 * Model Projeto
 * 
 */
export type Projeto = $Result.DefaultSelection<Prisma.$ProjetoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tecnologias
 * const tecnologias = await prisma.tecnologia.findMany()
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
   * // Fetch zero or more Tecnologias
   * const tecnologias = await prisma.tecnologia.findMany()
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
   * `prisma.tecnologia`: Exposes CRUD operations for the **Tecnologia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tecnologias
    * const tecnologias = await prisma.tecnologia.findMany()
    * ```
    */
  get tecnologia(): Prisma.TecnologiaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projeto`: Exposes CRUD operations for the **Projeto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projetos
    * const projetos = await prisma.projeto.findMany()
    * ```
    */
  get projeto(): Prisma.ProjetoDelegate<ExtArgs, ClientOptions>;
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
    Tecnologia: 'Tecnologia',
    Projeto: 'Projeto'
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
      modelProps: "tecnologia" | "projeto"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Tecnologia: {
        payload: Prisma.$TecnologiaPayload<ExtArgs>
        fields: Prisma.TecnologiaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TecnologiaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TecnologiaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload>
          }
          findFirst: {
            args: Prisma.TecnologiaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TecnologiaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload>
          }
          findMany: {
            args: Prisma.TecnologiaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload>[]
          }
          create: {
            args: Prisma.TecnologiaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload>
          }
          createMany: {
            args: Prisma.TecnologiaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TecnologiaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload>[]
          }
          delete: {
            args: Prisma.TecnologiaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload>
          }
          update: {
            args: Prisma.TecnologiaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload>
          }
          deleteMany: {
            args: Prisma.TecnologiaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TecnologiaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TecnologiaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload>[]
          }
          upsert: {
            args: Prisma.TecnologiaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TecnologiaPayload>
          }
          aggregate: {
            args: Prisma.TecnologiaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTecnologia>
          }
          groupBy: {
            args: Prisma.TecnologiaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TecnologiaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TecnologiaCountArgs<ExtArgs>
            result: $Utils.Optional<TecnologiaCountAggregateOutputType> | number
          }
        }
      }
      Projeto: {
        payload: Prisma.$ProjetoPayload<ExtArgs>
        fields: Prisma.ProjetoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjetoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjetoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findFirst: {
            args: Prisma.ProjetoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjetoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          findMany: {
            args: Prisma.ProjetoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          create: {
            args: Prisma.ProjetoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          createMany: {
            args: Prisma.ProjetoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjetoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          delete: {
            args: Prisma.ProjetoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          update: {
            args: Prisma.ProjetoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          deleteMany: {
            args: Prisma.ProjetoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjetoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjetoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>[]
          }
          upsert: {
            args: Prisma.ProjetoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjetoPayload>
          }
          aggregate: {
            args: Prisma.ProjetoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjeto>
          }
          groupBy: {
            args: Prisma.ProjetoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjetoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjetoCountArgs<ExtArgs>
            result: $Utils.Optional<ProjetoCountAggregateOutputType> | number
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
    tecnologia?: TecnologiaOmit
    projeto?: ProjetoOmit
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
   * Count Type TecnologiaCountOutputType
   */

  export type TecnologiaCountOutputType = {
    projetos: number
  }

  export type TecnologiaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetos?: boolean | TecnologiaCountOutputTypeCountProjetosArgs
  }

  // Custom InputTypes
  /**
   * TecnologiaCountOutputType without action
   */
  export type TecnologiaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TecnologiaCountOutputType
     */
    select?: TecnologiaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TecnologiaCountOutputType without action
   */
  export type TecnologiaCountOutputTypeCountProjetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
  }


  /**
   * Count Type ProjetoCountOutputType
   */

  export type ProjetoCountOutputType = {
    tecnologias: number
  }

  export type ProjetoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tecnologias?: boolean | ProjetoCountOutputTypeCountTecnologiasArgs
  }

  // Custom InputTypes
  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjetoCountOutputType
     */
    select?: ProjetoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjetoCountOutputType without action
   */
  export type ProjetoCountOutputTypeCountTecnologiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TecnologiaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Tecnologia
   */

  export type AggregateTecnologia = {
    _count: TecnologiaCountAggregateOutputType | null
    _avg: TecnologiaAvgAggregateOutputType | null
    _sum: TecnologiaSumAggregateOutputType | null
    _min: TecnologiaMinAggregateOutputType | null
    _max: TecnologiaMaxAggregateOutputType | null
  }

  export type TecnologiaAvgAggregateOutputType = {
    id: number | null
  }

  export type TecnologiaSumAggregateOutputType = {
    id: number | null
  }

  export type TecnologiaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    imagem: string | null
    destaque: boolean | null
  }

  export type TecnologiaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    imagem: string | null
    destaque: boolean | null
  }

  export type TecnologiaCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    imagem: number
    destaque: number
    _all: number
  }


  export type TecnologiaAvgAggregateInputType = {
    id?: true
  }

  export type TecnologiaSumAggregateInputType = {
    id?: true
  }

  export type TecnologiaMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    imagem?: true
    destaque?: true
  }

  export type TecnologiaMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    imagem?: true
    destaque?: true
  }

  export type TecnologiaCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    imagem?: true
    destaque?: true
    _all?: true
  }

  export type TecnologiaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tecnologia to aggregate.
     */
    where?: TecnologiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnologias to fetch.
     */
    orderBy?: TecnologiaOrderByWithRelationInput | TecnologiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TecnologiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnologias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnologias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tecnologias
    **/
    _count?: true | TecnologiaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TecnologiaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TecnologiaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TecnologiaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TecnologiaMaxAggregateInputType
  }

  export type GetTecnologiaAggregateType<T extends TecnologiaAggregateArgs> = {
        [P in keyof T & keyof AggregateTecnologia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTecnologia[P]>
      : GetScalarType<T[P], AggregateTecnologia[P]>
  }




  export type TecnologiaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TecnologiaWhereInput
    orderBy?: TecnologiaOrderByWithAggregationInput | TecnologiaOrderByWithAggregationInput[]
    by: TecnologiaScalarFieldEnum[] | TecnologiaScalarFieldEnum
    having?: TecnologiaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TecnologiaCountAggregateInputType | true
    _avg?: TecnologiaAvgAggregateInputType
    _sum?: TecnologiaSumAggregateInputType
    _min?: TecnologiaMinAggregateInputType
    _max?: TecnologiaMaxAggregateInputType
  }

  export type TecnologiaGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    imagem: string
    destaque: boolean
    _count: TecnologiaCountAggregateOutputType | null
    _avg: TecnologiaAvgAggregateOutputType | null
    _sum: TecnologiaSumAggregateOutputType | null
    _min: TecnologiaMinAggregateOutputType | null
    _max: TecnologiaMaxAggregateOutputType | null
  }

  type GetTecnologiaGroupByPayload<T extends TecnologiaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TecnologiaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TecnologiaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TecnologiaGroupByOutputType[P]>
            : GetScalarType<T[P], TecnologiaGroupByOutputType[P]>
        }
      >
    >


  export type TecnologiaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagem?: boolean
    destaque?: boolean
    projetos?: boolean | Tecnologia$projetosArgs<ExtArgs>
    _count?: boolean | TecnologiaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tecnologia"]>

  export type TecnologiaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagem?: boolean
    destaque?: boolean
  }, ExtArgs["result"]["tecnologia"]>

  export type TecnologiaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagem?: boolean
    destaque?: boolean
  }, ExtArgs["result"]["tecnologia"]>

  export type TecnologiaSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagem?: boolean
    destaque?: boolean
  }

  export type TecnologiaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "imagem" | "destaque", ExtArgs["result"]["tecnologia"]>
  export type TecnologiaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projetos?: boolean | Tecnologia$projetosArgs<ExtArgs>
    _count?: boolean | TecnologiaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TecnologiaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TecnologiaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TecnologiaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tecnologia"
    objects: {
      projetos: Prisma.$ProjetoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      imagem: string
      destaque: boolean
    }, ExtArgs["result"]["tecnologia"]>
    composites: {}
  }

  type TecnologiaGetPayload<S extends boolean | null | undefined | TecnologiaDefaultArgs> = $Result.GetResult<Prisma.$TecnologiaPayload, S>

  type TecnologiaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TecnologiaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TecnologiaCountAggregateInputType | true
    }

  export interface TecnologiaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tecnologia'], meta: { name: 'Tecnologia' } }
    /**
     * Find zero or one Tecnologia that matches the filter.
     * @param {TecnologiaFindUniqueArgs} args - Arguments to find a Tecnologia
     * @example
     * // Get one Tecnologia
     * const tecnologia = await prisma.tecnologia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TecnologiaFindUniqueArgs>(args: SelectSubset<T, TecnologiaFindUniqueArgs<ExtArgs>>): Prisma__TecnologiaClient<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tecnologia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TecnologiaFindUniqueOrThrowArgs} args - Arguments to find a Tecnologia
     * @example
     * // Get one Tecnologia
     * const tecnologia = await prisma.tecnologia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TecnologiaFindUniqueOrThrowArgs>(args: SelectSubset<T, TecnologiaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TecnologiaClient<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnologia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnologiaFindFirstArgs} args - Arguments to find a Tecnologia
     * @example
     * // Get one Tecnologia
     * const tecnologia = await prisma.tecnologia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TecnologiaFindFirstArgs>(args?: SelectSubset<T, TecnologiaFindFirstArgs<ExtArgs>>): Prisma__TecnologiaClient<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tecnologia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnologiaFindFirstOrThrowArgs} args - Arguments to find a Tecnologia
     * @example
     * // Get one Tecnologia
     * const tecnologia = await prisma.tecnologia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TecnologiaFindFirstOrThrowArgs>(args?: SelectSubset<T, TecnologiaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TecnologiaClient<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tecnologias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnologiaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tecnologias
     * const tecnologias = await prisma.tecnologia.findMany()
     * 
     * // Get first 10 Tecnologias
     * const tecnologias = await prisma.tecnologia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tecnologiaWithIdOnly = await prisma.tecnologia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TecnologiaFindManyArgs>(args?: SelectSubset<T, TecnologiaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tecnologia.
     * @param {TecnologiaCreateArgs} args - Arguments to create a Tecnologia.
     * @example
     * // Create one Tecnologia
     * const Tecnologia = await prisma.tecnologia.create({
     *   data: {
     *     // ... data to create a Tecnologia
     *   }
     * })
     * 
     */
    create<T extends TecnologiaCreateArgs>(args: SelectSubset<T, TecnologiaCreateArgs<ExtArgs>>): Prisma__TecnologiaClient<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tecnologias.
     * @param {TecnologiaCreateManyArgs} args - Arguments to create many Tecnologias.
     * @example
     * // Create many Tecnologias
     * const tecnologia = await prisma.tecnologia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TecnologiaCreateManyArgs>(args?: SelectSubset<T, TecnologiaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tecnologias and returns the data saved in the database.
     * @param {TecnologiaCreateManyAndReturnArgs} args - Arguments to create many Tecnologias.
     * @example
     * // Create many Tecnologias
     * const tecnologia = await prisma.tecnologia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tecnologias and only return the `id`
     * const tecnologiaWithIdOnly = await prisma.tecnologia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TecnologiaCreateManyAndReturnArgs>(args?: SelectSubset<T, TecnologiaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tecnologia.
     * @param {TecnologiaDeleteArgs} args - Arguments to delete one Tecnologia.
     * @example
     * // Delete one Tecnologia
     * const Tecnologia = await prisma.tecnologia.delete({
     *   where: {
     *     // ... filter to delete one Tecnologia
     *   }
     * })
     * 
     */
    delete<T extends TecnologiaDeleteArgs>(args: SelectSubset<T, TecnologiaDeleteArgs<ExtArgs>>): Prisma__TecnologiaClient<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tecnologia.
     * @param {TecnologiaUpdateArgs} args - Arguments to update one Tecnologia.
     * @example
     * // Update one Tecnologia
     * const tecnologia = await prisma.tecnologia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TecnologiaUpdateArgs>(args: SelectSubset<T, TecnologiaUpdateArgs<ExtArgs>>): Prisma__TecnologiaClient<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tecnologias.
     * @param {TecnologiaDeleteManyArgs} args - Arguments to filter Tecnologias to delete.
     * @example
     * // Delete a few Tecnologias
     * const { count } = await prisma.tecnologia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TecnologiaDeleteManyArgs>(args?: SelectSubset<T, TecnologiaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnologias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnologiaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tecnologias
     * const tecnologia = await prisma.tecnologia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TecnologiaUpdateManyArgs>(args: SelectSubset<T, TecnologiaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tecnologias and returns the data updated in the database.
     * @param {TecnologiaUpdateManyAndReturnArgs} args - Arguments to update many Tecnologias.
     * @example
     * // Update many Tecnologias
     * const tecnologia = await prisma.tecnologia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tecnologias and only return the `id`
     * const tecnologiaWithIdOnly = await prisma.tecnologia.updateManyAndReturn({
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
    updateManyAndReturn<T extends TecnologiaUpdateManyAndReturnArgs>(args: SelectSubset<T, TecnologiaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tecnologia.
     * @param {TecnologiaUpsertArgs} args - Arguments to update or create a Tecnologia.
     * @example
     * // Update or create a Tecnologia
     * const tecnologia = await prisma.tecnologia.upsert({
     *   create: {
     *     // ... data to create a Tecnologia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tecnologia we want to update
     *   }
     * })
     */
    upsert<T extends TecnologiaUpsertArgs>(args: SelectSubset<T, TecnologiaUpsertArgs<ExtArgs>>): Prisma__TecnologiaClient<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tecnologias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnologiaCountArgs} args - Arguments to filter Tecnologias to count.
     * @example
     * // Count the number of Tecnologias
     * const count = await prisma.tecnologia.count({
     *   where: {
     *     // ... the filter for the Tecnologias we want to count
     *   }
     * })
    **/
    count<T extends TecnologiaCountArgs>(
      args?: Subset<T, TecnologiaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TecnologiaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tecnologia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnologiaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TecnologiaAggregateArgs>(args: Subset<T, TecnologiaAggregateArgs>): Prisma.PrismaPromise<GetTecnologiaAggregateType<T>>

    /**
     * Group by Tecnologia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TecnologiaGroupByArgs} args - Group by arguments.
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
      T extends TecnologiaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TecnologiaGroupByArgs['orderBy'] }
        : { orderBy?: TecnologiaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TecnologiaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTecnologiaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tecnologia model
   */
  readonly fields: TecnologiaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tecnologia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TecnologiaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projetos<T extends Tecnologia$projetosArgs<ExtArgs> = {}>(args?: Subset<T, Tecnologia$projetosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tecnologia model
   */ 
  interface TecnologiaFieldRefs {
    readonly id: FieldRef<"Tecnologia", 'Int'>
    readonly nome: FieldRef<"Tecnologia", 'String'>
    readonly descricao: FieldRef<"Tecnologia", 'String'>
    readonly imagem: FieldRef<"Tecnologia", 'String'>
    readonly destaque: FieldRef<"Tecnologia", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Tecnologia findUnique
   */
  export type TecnologiaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
    /**
     * Filter, which Tecnologia to fetch.
     */
    where: TecnologiaWhereUniqueInput
  }

  /**
   * Tecnologia findUniqueOrThrow
   */
  export type TecnologiaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
    /**
     * Filter, which Tecnologia to fetch.
     */
    where: TecnologiaWhereUniqueInput
  }

  /**
   * Tecnologia findFirst
   */
  export type TecnologiaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
    /**
     * Filter, which Tecnologia to fetch.
     */
    where?: TecnologiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnologias to fetch.
     */
    orderBy?: TecnologiaOrderByWithRelationInput | TecnologiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tecnologias.
     */
    cursor?: TecnologiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnologias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnologias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tecnologias.
     */
    distinct?: TecnologiaScalarFieldEnum | TecnologiaScalarFieldEnum[]
  }

  /**
   * Tecnologia findFirstOrThrow
   */
  export type TecnologiaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
    /**
     * Filter, which Tecnologia to fetch.
     */
    where?: TecnologiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnologias to fetch.
     */
    orderBy?: TecnologiaOrderByWithRelationInput | TecnologiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tecnologias.
     */
    cursor?: TecnologiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnologias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnologias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tecnologias.
     */
    distinct?: TecnologiaScalarFieldEnum | TecnologiaScalarFieldEnum[]
  }

  /**
   * Tecnologia findMany
   */
  export type TecnologiaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
    /**
     * Filter, which Tecnologias to fetch.
     */
    where?: TecnologiaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tecnologias to fetch.
     */
    orderBy?: TecnologiaOrderByWithRelationInput | TecnologiaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tecnologias.
     */
    cursor?: TecnologiaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tecnologias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tecnologias.
     */
    skip?: number
    distinct?: TecnologiaScalarFieldEnum | TecnologiaScalarFieldEnum[]
  }

  /**
   * Tecnologia create
   */
  export type TecnologiaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
    /**
     * The data needed to create a Tecnologia.
     */
    data: XOR<TecnologiaCreateInput, TecnologiaUncheckedCreateInput>
  }

  /**
   * Tecnologia createMany
   */
  export type TecnologiaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tecnologias.
     */
    data: TecnologiaCreateManyInput | TecnologiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tecnologia createManyAndReturn
   */
  export type TecnologiaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * The data used to create many Tecnologias.
     */
    data: TecnologiaCreateManyInput | TecnologiaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tecnologia update
   */
  export type TecnologiaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
    /**
     * The data needed to update a Tecnologia.
     */
    data: XOR<TecnologiaUpdateInput, TecnologiaUncheckedUpdateInput>
    /**
     * Choose, which Tecnologia to update.
     */
    where: TecnologiaWhereUniqueInput
  }

  /**
   * Tecnologia updateMany
   */
  export type TecnologiaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tecnologias.
     */
    data: XOR<TecnologiaUpdateManyMutationInput, TecnologiaUncheckedUpdateManyInput>
    /**
     * Filter which Tecnologias to update
     */
    where?: TecnologiaWhereInput
    /**
     * Limit how many Tecnologias to update.
     */
    limit?: number
  }

  /**
   * Tecnologia updateManyAndReturn
   */
  export type TecnologiaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * The data used to update Tecnologias.
     */
    data: XOR<TecnologiaUpdateManyMutationInput, TecnologiaUncheckedUpdateManyInput>
    /**
     * Filter which Tecnologias to update
     */
    where?: TecnologiaWhereInput
    /**
     * Limit how many Tecnologias to update.
     */
    limit?: number
  }

  /**
   * Tecnologia upsert
   */
  export type TecnologiaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
    /**
     * The filter to search for the Tecnologia to update in case it exists.
     */
    where: TecnologiaWhereUniqueInput
    /**
     * In case the Tecnologia found by the `where` argument doesn't exist, create a new Tecnologia with this data.
     */
    create: XOR<TecnologiaCreateInput, TecnologiaUncheckedCreateInput>
    /**
     * In case the Tecnologia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TecnologiaUpdateInput, TecnologiaUncheckedUpdateInput>
  }

  /**
   * Tecnologia delete
   */
  export type TecnologiaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
    /**
     * Filter which Tecnologia to delete.
     */
    where: TecnologiaWhereUniqueInput
  }

  /**
   * Tecnologia deleteMany
   */
  export type TecnologiaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tecnologias to delete
     */
    where?: TecnologiaWhereInput
    /**
     * Limit how many Tecnologias to delete.
     */
    limit?: number
  }

  /**
   * Tecnologia.projetos
   */
  export type Tecnologia$projetosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    cursor?: ProjetoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Tecnologia without action
   */
  export type TecnologiaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
  }


  /**
   * Model Projeto
   */

  export type AggregateProjeto = {
    _count: ProjetoCountAggregateOutputType | null
    _avg: ProjetoAvgAggregateOutputType | null
    _sum: ProjetoSumAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  export type ProjetoAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjetoSumAggregateOutputType = {
    id: number | null
  }

  export type ProjetoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    destaque: boolean | null
    repositorio: string | null
  }

  export type ProjetoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    destaque: boolean | null
    repositorio: string | null
  }

  export type ProjetoCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    imagens: number
    destaque: number
    repositorio: number
    _all: number
  }


  export type ProjetoAvgAggregateInputType = {
    id?: true
  }

  export type ProjetoSumAggregateInputType = {
    id?: true
  }

  export type ProjetoMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    destaque?: true
    repositorio?: true
  }

  export type ProjetoMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    destaque?: true
    repositorio?: true
  }

  export type ProjetoCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    imagens?: true
    destaque?: true
    repositorio?: true
    _all?: true
  }

  export type ProjetoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projeto to aggregate.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projetos
    **/
    _count?: true | ProjetoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjetoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjetoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjetoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjetoMaxAggregateInputType
  }

  export type GetProjetoAggregateType<T extends ProjetoAggregateArgs> = {
        [P in keyof T & keyof AggregateProjeto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjeto[P]>
      : GetScalarType<T[P], AggregateProjeto[P]>
  }




  export type ProjetoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjetoWhereInput
    orderBy?: ProjetoOrderByWithAggregationInput | ProjetoOrderByWithAggregationInput[]
    by: ProjetoScalarFieldEnum[] | ProjetoScalarFieldEnum
    having?: ProjetoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjetoCountAggregateInputType | true
    _avg?: ProjetoAvgAggregateInputType
    _sum?: ProjetoSumAggregateInputType
    _min?: ProjetoMinAggregateInputType
    _max?: ProjetoMaxAggregateInputType
  }

  export type ProjetoGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    imagens: string[]
    destaque: boolean
    repositorio: string
    _count: ProjetoCountAggregateOutputType | null
    _avg: ProjetoAvgAggregateOutputType | null
    _sum: ProjetoSumAggregateOutputType | null
    _min: ProjetoMinAggregateOutputType | null
    _max: ProjetoMaxAggregateOutputType | null
  }

  type GetProjetoGroupByPayload<T extends ProjetoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjetoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjetoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
            : GetScalarType<T[P], ProjetoGroupByOutputType[P]>
        }
      >
    >


  export type ProjetoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagens?: boolean
    destaque?: boolean
    repositorio?: boolean
    tecnologias?: boolean | Projeto$tecnologiasArgs<ExtArgs>
    _count?: boolean | ProjetoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagens?: boolean
    destaque?: boolean
    repositorio?: boolean
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagens?: boolean
    destaque?: boolean
    repositorio?: boolean
  }, ExtArgs["result"]["projeto"]>

  export type ProjetoSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    imagens?: boolean
    destaque?: boolean
    repositorio?: boolean
  }

  export type ProjetoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "imagens" | "destaque" | "repositorio", ExtArgs["result"]["projeto"]>
  export type ProjetoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tecnologias?: boolean | Projeto$tecnologiasArgs<ExtArgs>
    _count?: boolean | ProjetoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjetoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjetoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjetoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projeto"
    objects: {
      tecnologias: Prisma.$TecnologiaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      imagens: string[]
      destaque: boolean
      repositorio: string
    }, ExtArgs["result"]["projeto"]>
    composites: {}
  }

  type ProjetoGetPayload<S extends boolean | null | undefined | ProjetoDefaultArgs> = $Result.GetResult<Prisma.$ProjetoPayload, S>

  type ProjetoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjetoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjetoCountAggregateInputType | true
    }

  export interface ProjetoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projeto'], meta: { name: 'Projeto' } }
    /**
     * Find zero or one Projeto that matches the filter.
     * @param {ProjetoFindUniqueArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjetoFindUniqueArgs>(args: SelectSubset<T, ProjetoFindUniqueArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projeto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjetoFindUniqueOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjetoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjetoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjetoFindFirstArgs>(args?: SelectSubset<T, ProjetoFindFirstArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projeto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindFirstOrThrowArgs} args - Arguments to find a Projeto
     * @example
     * // Get one Projeto
     * const projeto = await prisma.projeto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjetoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjetoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projetos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projetos
     * const projetos = await prisma.projeto.findMany()
     * 
     * // Get first 10 Projetos
     * const projetos = await prisma.projeto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projetoWithIdOnly = await prisma.projeto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjetoFindManyArgs>(args?: SelectSubset<T, ProjetoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projeto.
     * @param {ProjetoCreateArgs} args - Arguments to create a Projeto.
     * @example
     * // Create one Projeto
     * const Projeto = await prisma.projeto.create({
     *   data: {
     *     // ... data to create a Projeto
     *   }
     * })
     * 
     */
    create<T extends ProjetoCreateArgs>(args: SelectSubset<T, ProjetoCreateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projetos.
     * @param {ProjetoCreateManyArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjetoCreateManyArgs>(args?: SelectSubset<T, ProjetoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projetos and returns the data saved in the database.
     * @param {ProjetoCreateManyAndReturnArgs} args - Arguments to create many Projetos.
     * @example
     * // Create many Projetos
     * const projeto = await prisma.projeto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjetoCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjetoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projeto.
     * @param {ProjetoDeleteArgs} args - Arguments to delete one Projeto.
     * @example
     * // Delete one Projeto
     * const Projeto = await prisma.projeto.delete({
     *   where: {
     *     // ... filter to delete one Projeto
     *   }
     * })
     * 
     */
    delete<T extends ProjetoDeleteArgs>(args: SelectSubset<T, ProjetoDeleteArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projeto.
     * @param {ProjetoUpdateArgs} args - Arguments to update one Projeto.
     * @example
     * // Update one Projeto
     * const projeto = await prisma.projeto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjetoUpdateArgs>(args: SelectSubset<T, ProjetoUpdateArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projetos.
     * @param {ProjetoDeleteManyArgs} args - Arguments to filter Projetos to delete.
     * @example
     * // Delete a few Projetos
     * const { count } = await prisma.projeto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjetoDeleteManyArgs>(args?: SelectSubset<T, ProjetoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjetoUpdateManyArgs>(args: SelectSubset<T, ProjetoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projetos and returns the data updated in the database.
     * @param {ProjetoUpdateManyAndReturnArgs} args - Arguments to update many Projetos.
     * @example
     * // Update many Projetos
     * const projeto = await prisma.projeto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projetos and only return the `id`
     * const projetoWithIdOnly = await prisma.projeto.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProjetoUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjetoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projeto.
     * @param {ProjetoUpsertArgs} args - Arguments to update or create a Projeto.
     * @example
     * // Update or create a Projeto
     * const projeto = await prisma.projeto.upsert({
     *   create: {
     *     // ... data to create a Projeto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projeto we want to update
     *   }
     * })
     */
    upsert<T extends ProjetoUpsertArgs>(args: SelectSubset<T, ProjetoUpsertArgs<ExtArgs>>): Prisma__ProjetoClient<$Result.GetResult<Prisma.$ProjetoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projetos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoCountArgs} args - Arguments to filter Projetos to count.
     * @example
     * // Count the number of Projetos
     * const count = await prisma.projeto.count({
     *   where: {
     *     // ... the filter for the Projetos we want to count
     *   }
     * })
    **/
    count<T extends ProjetoCountArgs>(
      args?: Subset<T, ProjetoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjetoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjetoAggregateArgs>(args: Subset<T, ProjetoAggregateArgs>): Prisma.PrismaPromise<GetProjetoAggregateType<T>>

    /**
     * Group by Projeto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjetoGroupByArgs} args - Group by arguments.
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
      T extends ProjetoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjetoGroupByArgs['orderBy'] }
        : { orderBy?: ProjetoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjetoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjetoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projeto model
   */
  readonly fields: ProjetoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projeto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjetoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tecnologias<T extends Projeto$tecnologiasArgs<ExtArgs> = {}>(args?: Subset<T, Projeto$tecnologiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TecnologiaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Projeto model
   */ 
  interface ProjetoFieldRefs {
    readonly id: FieldRef<"Projeto", 'Int'>
    readonly nome: FieldRef<"Projeto", 'String'>
    readonly descricao: FieldRef<"Projeto", 'String'>
    readonly imagens: FieldRef<"Projeto", 'String[]'>
    readonly destaque: FieldRef<"Projeto", 'Boolean'>
    readonly repositorio: FieldRef<"Projeto", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Projeto findUnique
   */
  export type ProjetoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findUniqueOrThrow
   */
  export type ProjetoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto findFirst
   */
  export type ProjetoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findFirstOrThrow
   */
  export type ProjetoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projeto to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projetos.
     */
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto findMany
   */
  export type ProjetoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter, which Projetos to fetch.
     */
    where?: ProjetoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projetos to fetch.
     */
    orderBy?: ProjetoOrderByWithRelationInput | ProjetoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projetos.
     */
    cursor?: ProjetoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projetos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projetos.
     */
    skip?: number
    distinct?: ProjetoScalarFieldEnum | ProjetoScalarFieldEnum[]
  }

  /**
   * Projeto create
   */
  export type ProjetoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The data needed to create a Projeto.
     */
    data: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
  }

  /**
   * Projeto createMany
   */
  export type ProjetoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projeto createManyAndReturn
   */
  export type ProjetoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to create many Projetos.
     */
    data: ProjetoCreateManyInput | ProjetoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projeto update
   */
  export type ProjetoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The data needed to update a Projeto.
     */
    data: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
    /**
     * Choose, which Projeto to update.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto updateMany
   */
  export type ProjetoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
  }

  /**
   * Projeto updateManyAndReturn
   */
  export type ProjetoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * The data used to update Projetos.
     */
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyInput>
    /**
     * Filter which Projetos to update
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to update.
     */
    limit?: number
  }

  /**
   * Projeto upsert
   */
  export type ProjetoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * The filter to search for the Projeto to update in case it exists.
     */
    where: ProjetoWhereUniqueInput
    /**
     * In case the Projeto found by the `where` argument doesn't exist, create a new Projeto with this data.
     */
    create: XOR<ProjetoCreateInput, ProjetoUncheckedCreateInput>
    /**
     * In case the Projeto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjetoUpdateInput, ProjetoUncheckedUpdateInput>
  }

  /**
   * Projeto delete
   */
  export type ProjetoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
    /**
     * Filter which Projeto to delete.
     */
    where: ProjetoWhereUniqueInput
  }

  /**
   * Projeto deleteMany
   */
  export type ProjetoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projetos to delete
     */
    where?: ProjetoWhereInput
    /**
     * Limit how many Projetos to delete.
     */
    limit?: number
  }

  /**
   * Projeto.tecnologias
   */
  export type Projeto$tecnologiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tecnologia
     */
    select?: TecnologiaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tecnologia
     */
    omit?: TecnologiaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TecnologiaInclude<ExtArgs> | null
    where?: TecnologiaWhereInput
    orderBy?: TecnologiaOrderByWithRelationInput | TecnologiaOrderByWithRelationInput[]
    cursor?: TecnologiaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TecnologiaScalarFieldEnum | TecnologiaScalarFieldEnum[]
  }

  /**
   * Projeto without action
   */
  export type ProjetoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projeto
     */
    select?: ProjetoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projeto
     */
    omit?: ProjetoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjetoInclude<ExtArgs> | null
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


  export const TecnologiaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    imagem: 'imagem',
    destaque: 'destaque'
  };

  export type TecnologiaScalarFieldEnum = (typeof TecnologiaScalarFieldEnum)[keyof typeof TecnologiaScalarFieldEnum]


  export const ProjetoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    imagens: 'imagens',
    destaque: 'destaque',
    repositorio: 'repositorio'
  };

  export type ProjetoScalarFieldEnum = (typeof ProjetoScalarFieldEnum)[keyof typeof ProjetoScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type TecnologiaWhereInput = {
    AND?: TecnologiaWhereInput | TecnologiaWhereInput[]
    OR?: TecnologiaWhereInput[]
    NOT?: TecnologiaWhereInput | TecnologiaWhereInput[]
    id?: IntFilter<"Tecnologia"> | number
    nome?: StringFilter<"Tecnologia"> | string
    descricao?: StringFilter<"Tecnologia"> | string
    imagem?: StringFilter<"Tecnologia"> | string
    destaque?: BoolFilter<"Tecnologia"> | boolean
    projetos?: ProjetoListRelationFilter
  }

  export type TecnologiaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    destaque?: SortOrder
    projetos?: ProjetoOrderByRelationAggregateInput
  }

  export type TecnologiaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TecnologiaWhereInput | TecnologiaWhereInput[]
    OR?: TecnologiaWhereInput[]
    NOT?: TecnologiaWhereInput | TecnologiaWhereInput[]
    nome?: StringFilter<"Tecnologia"> | string
    descricao?: StringFilter<"Tecnologia"> | string
    imagem?: StringFilter<"Tecnologia"> | string
    destaque?: BoolFilter<"Tecnologia"> | boolean
    projetos?: ProjetoListRelationFilter
  }, "id">

  export type TecnologiaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    destaque?: SortOrder
    _count?: TecnologiaCountOrderByAggregateInput
    _avg?: TecnologiaAvgOrderByAggregateInput
    _max?: TecnologiaMaxOrderByAggregateInput
    _min?: TecnologiaMinOrderByAggregateInput
    _sum?: TecnologiaSumOrderByAggregateInput
  }

  export type TecnologiaScalarWhereWithAggregatesInput = {
    AND?: TecnologiaScalarWhereWithAggregatesInput | TecnologiaScalarWhereWithAggregatesInput[]
    OR?: TecnologiaScalarWhereWithAggregatesInput[]
    NOT?: TecnologiaScalarWhereWithAggregatesInput | TecnologiaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tecnologia"> | number
    nome?: StringWithAggregatesFilter<"Tecnologia"> | string
    descricao?: StringWithAggregatesFilter<"Tecnologia"> | string
    imagem?: StringWithAggregatesFilter<"Tecnologia"> | string
    destaque?: BoolWithAggregatesFilter<"Tecnologia"> | boolean
  }

  export type ProjetoWhereInput = {
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    id?: IntFilter<"Projeto"> | number
    nome?: StringFilter<"Projeto"> | string
    descricao?: StringFilter<"Projeto"> | string
    imagens?: StringNullableListFilter<"Projeto">
    destaque?: BoolFilter<"Projeto"> | boolean
    repositorio?: StringFilter<"Projeto"> | string
    tecnologias?: TecnologiaListRelationFilter
  }

  export type ProjetoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagens?: SortOrder
    destaque?: SortOrder
    repositorio?: SortOrder
    tecnologias?: TecnologiaOrderByRelationAggregateInput
  }

  export type ProjetoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProjetoWhereInput | ProjetoWhereInput[]
    OR?: ProjetoWhereInput[]
    NOT?: ProjetoWhereInput | ProjetoWhereInput[]
    nome?: StringFilter<"Projeto"> | string
    descricao?: StringFilter<"Projeto"> | string
    imagens?: StringNullableListFilter<"Projeto">
    destaque?: BoolFilter<"Projeto"> | boolean
    repositorio?: StringFilter<"Projeto"> | string
    tecnologias?: TecnologiaListRelationFilter
  }, "id">

  export type ProjetoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagens?: SortOrder
    destaque?: SortOrder
    repositorio?: SortOrder
    _count?: ProjetoCountOrderByAggregateInput
    _avg?: ProjetoAvgOrderByAggregateInput
    _max?: ProjetoMaxOrderByAggregateInput
    _min?: ProjetoMinOrderByAggregateInput
    _sum?: ProjetoSumOrderByAggregateInput
  }

  export type ProjetoScalarWhereWithAggregatesInput = {
    AND?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    OR?: ProjetoScalarWhereWithAggregatesInput[]
    NOT?: ProjetoScalarWhereWithAggregatesInput | ProjetoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Projeto"> | number
    nome?: StringWithAggregatesFilter<"Projeto"> | string
    descricao?: StringWithAggregatesFilter<"Projeto"> | string
    imagens?: StringNullableListFilter<"Projeto">
    destaque?: BoolWithAggregatesFilter<"Projeto"> | boolean
    repositorio?: StringWithAggregatesFilter<"Projeto"> | string
  }

  export type TecnologiaCreateInput = {
    nome: string
    descricao: string
    imagem: string
    destaque?: boolean
    projetos?: ProjetoCreateNestedManyWithoutTecnologiasInput
  }

  export type TecnologiaUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    imagem: string
    destaque?: boolean
    projetos?: ProjetoUncheckedCreateNestedManyWithoutTecnologiasInput
  }

  export type TecnologiaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    destaque?: BoolFieldUpdateOperationsInput | boolean
    projetos?: ProjetoUpdateManyWithoutTecnologiasNestedInput
  }

  export type TecnologiaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    destaque?: BoolFieldUpdateOperationsInput | boolean
    projetos?: ProjetoUncheckedUpdateManyWithoutTecnologiasNestedInput
  }

  export type TecnologiaCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    imagem: string
    destaque?: boolean
  }

  export type TecnologiaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    destaque?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TecnologiaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    destaque?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProjetoCreateInput = {
    nome: string
    descricao: string
    imagens?: ProjetoCreateimagensInput | string[]
    destaque?: boolean
    repositorio: string
    tecnologias?: TecnologiaCreateNestedManyWithoutProjetosInput
  }

  export type ProjetoUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    imagens?: ProjetoCreateimagensInput | string[]
    destaque?: boolean
    repositorio: string
    tecnologias?: TecnologiaUncheckedCreateNestedManyWithoutProjetosInput
  }

  export type ProjetoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: ProjetoUpdateimagensInput | string[]
    destaque?: BoolFieldUpdateOperationsInput | boolean
    repositorio?: StringFieldUpdateOperationsInput | string
    tecnologias?: TecnologiaUpdateManyWithoutProjetosNestedInput
  }

  export type ProjetoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: ProjetoUpdateimagensInput | string[]
    destaque?: BoolFieldUpdateOperationsInput | boolean
    repositorio?: StringFieldUpdateOperationsInput | string
    tecnologias?: TecnologiaUncheckedUpdateManyWithoutProjetosNestedInput
  }

  export type ProjetoCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    imagens?: ProjetoCreateimagensInput | string[]
    destaque?: boolean
    repositorio: string
  }

  export type ProjetoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: ProjetoUpdateimagensInput | string[]
    destaque?: BoolFieldUpdateOperationsInput | boolean
    repositorio?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: ProjetoUpdateimagensInput | string[]
    destaque?: BoolFieldUpdateOperationsInput | boolean
    repositorio?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ProjetoListRelationFilter = {
    every?: ProjetoWhereInput
    some?: ProjetoWhereInput
    none?: ProjetoWhereInput
  }

  export type ProjetoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TecnologiaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    destaque?: SortOrder
  }

  export type TecnologiaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TecnologiaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    destaque?: SortOrder
  }

  export type TecnologiaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    destaque?: SortOrder
  }

  export type TecnologiaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TecnologiaListRelationFilter = {
    every?: TecnologiaWhereInput
    some?: TecnologiaWhereInput
    none?: TecnologiaWhereInput
  }

  export type TecnologiaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjetoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    imagens?: SortOrder
    destaque?: SortOrder
    repositorio?: SortOrder
  }

  export type ProjetoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjetoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    destaque?: SortOrder
    repositorio?: SortOrder
  }

  export type ProjetoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    destaque?: SortOrder
    repositorio?: SortOrder
  }

  export type ProjetoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjetoCreateNestedManyWithoutTecnologiasInput = {
    create?: XOR<ProjetoCreateWithoutTecnologiasInput, ProjetoUncheckedCreateWithoutTecnologiasInput> | ProjetoCreateWithoutTecnologiasInput[] | ProjetoUncheckedCreateWithoutTecnologiasInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutTecnologiasInput | ProjetoCreateOrConnectWithoutTecnologiasInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type ProjetoUncheckedCreateNestedManyWithoutTecnologiasInput = {
    create?: XOR<ProjetoCreateWithoutTecnologiasInput, ProjetoUncheckedCreateWithoutTecnologiasInput> | ProjetoCreateWithoutTecnologiasInput[] | ProjetoUncheckedCreateWithoutTecnologiasInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutTecnologiasInput | ProjetoCreateOrConnectWithoutTecnologiasInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjetoUpdateManyWithoutTecnologiasNestedInput = {
    create?: XOR<ProjetoCreateWithoutTecnologiasInput, ProjetoUncheckedCreateWithoutTecnologiasInput> | ProjetoCreateWithoutTecnologiasInput[] | ProjetoUncheckedCreateWithoutTecnologiasInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutTecnologiasInput | ProjetoCreateOrConnectWithoutTecnologiasInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutTecnologiasInput | ProjetoUpsertWithWhereUniqueWithoutTecnologiasInput[]
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutTecnologiasInput | ProjetoUpdateWithWhereUniqueWithoutTecnologiasInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutTecnologiasInput | ProjetoUpdateManyWithWhereWithoutTecnologiasInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjetoUncheckedUpdateManyWithoutTecnologiasNestedInput = {
    create?: XOR<ProjetoCreateWithoutTecnologiasInput, ProjetoUncheckedCreateWithoutTecnologiasInput> | ProjetoCreateWithoutTecnologiasInput[] | ProjetoUncheckedCreateWithoutTecnologiasInput[]
    connectOrCreate?: ProjetoCreateOrConnectWithoutTecnologiasInput | ProjetoCreateOrConnectWithoutTecnologiasInput[]
    upsert?: ProjetoUpsertWithWhereUniqueWithoutTecnologiasInput | ProjetoUpsertWithWhereUniqueWithoutTecnologiasInput[]
    set?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    disconnect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    delete?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    connect?: ProjetoWhereUniqueInput | ProjetoWhereUniqueInput[]
    update?: ProjetoUpdateWithWhereUniqueWithoutTecnologiasInput | ProjetoUpdateWithWhereUniqueWithoutTecnologiasInput[]
    updateMany?: ProjetoUpdateManyWithWhereWithoutTecnologiasInput | ProjetoUpdateManyWithWhereWithoutTecnologiasInput[]
    deleteMany?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
  }

  export type ProjetoCreateimagensInput = {
    set: string[]
  }

  export type TecnologiaCreateNestedManyWithoutProjetosInput = {
    create?: XOR<TecnologiaCreateWithoutProjetosInput, TecnologiaUncheckedCreateWithoutProjetosInput> | TecnologiaCreateWithoutProjetosInput[] | TecnologiaUncheckedCreateWithoutProjetosInput[]
    connectOrCreate?: TecnologiaCreateOrConnectWithoutProjetosInput | TecnologiaCreateOrConnectWithoutProjetosInput[]
    connect?: TecnologiaWhereUniqueInput | TecnologiaWhereUniqueInput[]
  }

  export type TecnologiaUncheckedCreateNestedManyWithoutProjetosInput = {
    create?: XOR<TecnologiaCreateWithoutProjetosInput, TecnologiaUncheckedCreateWithoutProjetosInput> | TecnologiaCreateWithoutProjetosInput[] | TecnologiaUncheckedCreateWithoutProjetosInput[]
    connectOrCreate?: TecnologiaCreateOrConnectWithoutProjetosInput | TecnologiaCreateOrConnectWithoutProjetosInput[]
    connect?: TecnologiaWhereUniqueInput | TecnologiaWhereUniqueInput[]
  }

  export type ProjetoUpdateimagensInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TecnologiaUpdateManyWithoutProjetosNestedInput = {
    create?: XOR<TecnologiaCreateWithoutProjetosInput, TecnologiaUncheckedCreateWithoutProjetosInput> | TecnologiaCreateWithoutProjetosInput[] | TecnologiaUncheckedCreateWithoutProjetosInput[]
    connectOrCreate?: TecnologiaCreateOrConnectWithoutProjetosInput | TecnologiaCreateOrConnectWithoutProjetosInput[]
    upsert?: TecnologiaUpsertWithWhereUniqueWithoutProjetosInput | TecnologiaUpsertWithWhereUniqueWithoutProjetosInput[]
    set?: TecnologiaWhereUniqueInput | TecnologiaWhereUniqueInput[]
    disconnect?: TecnologiaWhereUniqueInput | TecnologiaWhereUniqueInput[]
    delete?: TecnologiaWhereUniqueInput | TecnologiaWhereUniqueInput[]
    connect?: TecnologiaWhereUniqueInput | TecnologiaWhereUniqueInput[]
    update?: TecnologiaUpdateWithWhereUniqueWithoutProjetosInput | TecnologiaUpdateWithWhereUniqueWithoutProjetosInput[]
    updateMany?: TecnologiaUpdateManyWithWhereWithoutProjetosInput | TecnologiaUpdateManyWithWhereWithoutProjetosInput[]
    deleteMany?: TecnologiaScalarWhereInput | TecnologiaScalarWhereInput[]
  }

  export type TecnologiaUncheckedUpdateManyWithoutProjetosNestedInput = {
    create?: XOR<TecnologiaCreateWithoutProjetosInput, TecnologiaUncheckedCreateWithoutProjetosInput> | TecnologiaCreateWithoutProjetosInput[] | TecnologiaUncheckedCreateWithoutProjetosInput[]
    connectOrCreate?: TecnologiaCreateOrConnectWithoutProjetosInput | TecnologiaCreateOrConnectWithoutProjetosInput[]
    upsert?: TecnologiaUpsertWithWhereUniqueWithoutProjetosInput | TecnologiaUpsertWithWhereUniqueWithoutProjetosInput[]
    set?: TecnologiaWhereUniqueInput | TecnologiaWhereUniqueInput[]
    disconnect?: TecnologiaWhereUniqueInput | TecnologiaWhereUniqueInput[]
    delete?: TecnologiaWhereUniqueInput | TecnologiaWhereUniqueInput[]
    connect?: TecnologiaWhereUniqueInput | TecnologiaWhereUniqueInput[]
    update?: TecnologiaUpdateWithWhereUniqueWithoutProjetosInput | TecnologiaUpdateWithWhereUniqueWithoutProjetosInput[]
    updateMany?: TecnologiaUpdateManyWithWhereWithoutProjetosInput | TecnologiaUpdateManyWithWhereWithoutProjetosInput[]
    deleteMany?: TecnologiaScalarWhereInput | TecnologiaScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjetoCreateWithoutTecnologiasInput = {
    nome: string
    descricao: string
    imagens?: ProjetoCreateimagensInput | string[]
    destaque?: boolean
    repositorio: string
  }

  export type ProjetoUncheckedCreateWithoutTecnologiasInput = {
    id?: number
    nome: string
    descricao: string
    imagens?: ProjetoCreateimagensInput | string[]
    destaque?: boolean
    repositorio: string
  }

  export type ProjetoCreateOrConnectWithoutTecnologiasInput = {
    where: ProjetoWhereUniqueInput
    create: XOR<ProjetoCreateWithoutTecnologiasInput, ProjetoUncheckedCreateWithoutTecnologiasInput>
  }

  export type ProjetoUpsertWithWhereUniqueWithoutTecnologiasInput = {
    where: ProjetoWhereUniqueInput
    update: XOR<ProjetoUpdateWithoutTecnologiasInput, ProjetoUncheckedUpdateWithoutTecnologiasInput>
    create: XOR<ProjetoCreateWithoutTecnologiasInput, ProjetoUncheckedCreateWithoutTecnologiasInput>
  }

  export type ProjetoUpdateWithWhereUniqueWithoutTecnologiasInput = {
    where: ProjetoWhereUniqueInput
    data: XOR<ProjetoUpdateWithoutTecnologiasInput, ProjetoUncheckedUpdateWithoutTecnologiasInput>
  }

  export type ProjetoUpdateManyWithWhereWithoutTecnologiasInput = {
    where: ProjetoScalarWhereInput
    data: XOR<ProjetoUpdateManyMutationInput, ProjetoUncheckedUpdateManyWithoutTecnologiasInput>
  }

  export type ProjetoScalarWhereInput = {
    AND?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
    OR?: ProjetoScalarWhereInput[]
    NOT?: ProjetoScalarWhereInput | ProjetoScalarWhereInput[]
    id?: IntFilter<"Projeto"> | number
    nome?: StringFilter<"Projeto"> | string
    descricao?: StringFilter<"Projeto"> | string
    imagens?: StringNullableListFilter<"Projeto">
    destaque?: BoolFilter<"Projeto"> | boolean
    repositorio?: StringFilter<"Projeto"> | string
  }

  export type TecnologiaCreateWithoutProjetosInput = {
    nome: string
    descricao: string
    imagem: string
    destaque?: boolean
  }

  export type TecnologiaUncheckedCreateWithoutProjetosInput = {
    id?: number
    nome: string
    descricao: string
    imagem: string
    destaque?: boolean
  }

  export type TecnologiaCreateOrConnectWithoutProjetosInput = {
    where: TecnologiaWhereUniqueInput
    create: XOR<TecnologiaCreateWithoutProjetosInput, TecnologiaUncheckedCreateWithoutProjetosInput>
  }

  export type TecnologiaUpsertWithWhereUniqueWithoutProjetosInput = {
    where: TecnologiaWhereUniqueInput
    update: XOR<TecnologiaUpdateWithoutProjetosInput, TecnologiaUncheckedUpdateWithoutProjetosInput>
    create: XOR<TecnologiaCreateWithoutProjetosInput, TecnologiaUncheckedCreateWithoutProjetosInput>
  }

  export type TecnologiaUpdateWithWhereUniqueWithoutProjetosInput = {
    where: TecnologiaWhereUniqueInput
    data: XOR<TecnologiaUpdateWithoutProjetosInput, TecnologiaUncheckedUpdateWithoutProjetosInput>
  }

  export type TecnologiaUpdateManyWithWhereWithoutProjetosInput = {
    where: TecnologiaScalarWhereInput
    data: XOR<TecnologiaUpdateManyMutationInput, TecnologiaUncheckedUpdateManyWithoutProjetosInput>
  }

  export type TecnologiaScalarWhereInput = {
    AND?: TecnologiaScalarWhereInput | TecnologiaScalarWhereInput[]
    OR?: TecnologiaScalarWhereInput[]
    NOT?: TecnologiaScalarWhereInput | TecnologiaScalarWhereInput[]
    id?: IntFilter<"Tecnologia"> | number
    nome?: StringFilter<"Tecnologia"> | string
    descricao?: StringFilter<"Tecnologia"> | string
    imagem?: StringFilter<"Tecnologia"> | string
    destaque?: BoolFilter<"Tecnologia"> | boolean
  }

  export type ProjetoUpdateWithoutTecnologiasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: ProjetoUpdateimagensInput | string[]
    destaque?: BoolFieldUpdateOperationsInput | boolean
    repositorio?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoUncheckedUpdateWithoutTecnologiasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: ProjetoUpdateimagensInput | string[]
    destaque?: BoolFieldUpdateOperationsInput | boolean
    repositorio?: StringFieldUpdateOperationsInput | string
  }

  export type ProjetoUncheckedUpdateManyWithoutTecnologiasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagens?: ProjetoUpdateimagensInput | string[]
    destaque?: BoolFieldUpdateOperationsInput | boolean
    repositorio?: StringFieldUpdateOperationsInput | string
  }

  export type TecnologiaUpdateWithoutProjetosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    destaque?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TecnologiaUncheckedUpdateWithoutProjetosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    destaque?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TecnologiaUncheckedUpdateManyWithoutProjetosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: StringFieldUpdateOperationsInput | string
    destaque?: BoolFieldUpdateOperationsInput | boolean
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
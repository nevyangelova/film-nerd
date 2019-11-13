import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | undefined;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Actor = {
   __typename?: 'Actor',
  birthName?: Maybe<Scalars['String']>,
  birthPlace?: Maybe<Scalars['String']>,
};

export type Director = {
   __typename?: 'Director',
  birthName?: Maybe<Scalars['String']>,
};

export type Movie = {
   __typename?: 'Movie',
  Title: Scalars['String'],
  Year: Scalars['String'],
  Director: Scalars['String'],
  Writer: Scalars['String'],
  Actors: Array<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  helloWorld: Scalars['String'],
  fakeMovie: Movie,
  movie: Movie,
  actor?: Maybe<Actor>,
  director?: Maybe<Director>,
  writer?: Maybe<Writer>,
};


export type QueryMovieArgs = {
  title: Scalars['String']
};


export type QueryActorArgs = {
  birthName: Scalars['String']
};


export type QueryDirectorArgs = {
  birthName: Scalars['String']
};


export type QueryWriterArgs = {
  name: Scalars['String']
};

export type Writer = {
   __typename?: 'Writer',
  name?: Maybe<Scalars['String']>,
};




export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Movie: ResolverTypeWrapper<Movie>,
  Actor: ResolverTypeWrapper<Actor>,
  Director: ResolverTypeWrapper<Director>,
  Writer: ResolverTypeWrapper<Writer>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Movie: Movie,
  Actor: Actor,
  Director: Director,
  Writer: Writer,
  Boolean: Scalars['Boolean'],
};

export type ActorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Actor'] = ResolversParentTypes['Actor']> = {
  birthName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  birthPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type DirectorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Director'] = ResolversParentTypes['Director']> = {
  birthName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  Title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Year?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Director?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Writer?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Actors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  helloWorld?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  fakeMovie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType>,
  movie?: Resolver<ResolversTypes['Movie'], ParentType, ContextType, RequireFields<QueryMovieArgs, 'title'>>,
  actor?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType, RequireFields<QueryActorArgs, 'birthName'>>,
  director?: Resolver<Maybe<ResolversTypes['Director']>, ParentType, ContextType, RequireFields<QueryDirectorArgs, 'birthName'>>,
  writer?: Resolver<Maybe<ResolversTypes['Writer']>, ParentType, ContextType, RequireFields<QueryWriterArgs, 'name'>>,
};

export type WriterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Writer'] = ResolversParentTypes['Writer']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Actor?: ActorResolvers<ContextType>,
  Director?: DirectorResolvers<ContextType>,
  Movie?: MovieResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Writer?: WriterResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

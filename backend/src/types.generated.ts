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
  summary: Scalars['String'],
  image?: Maybe<Scalars['String']>,
  tables?: Maybe<Array<MovieSummary>>,
};

export type Director = {
   __typename?: 'Director',
  name?: Maybe<Scalars['String']>,
};

export type Movie = {
   __typename?: 'Movie',
  Title: Scalars['String'],
  Year: Scalars['String'],
  Director: Scalars['String'],
  Writer: Scalars['String'],
  Actors: Array<Scalars['String']>,
  Plot: Scalars['String'],
  Ratings: Array<Ratings>,
  imdbRating?: Maybe<Scalars['String']>,
};

export type MovieSummary = {
   __typename?: 'MovieSummary',
  year: Scalars['String'],
  film: Scalars['String'],
  role?: Maybe<Scalars['String']>,
  director: Scalars['String'],
  notes?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  movies: Array<Movie>,
  movie?: Maybe<Movie>,
  actor?: Maybe<Actor>,
  director?: Maybe<Director>,
  writer?: Maybe<Writer>,
  test: Test,
};


export type QueryMoviesArgs = {
  title: Scalars['String']
};


export type QueryMovieArgs = {
  title: Scalars['String']
};


export type QueryActorArgs = {
  birthName: Scalars['String']
};


export type QueryDirectorArgs = {
  name: Scalars['String']
};


export type QueryWriterArgs = {
  name: Scalars['String']
};

export type Ratings = {
   __typename?: 'Ratings',
  Source?: Maybe<Scalars['String']>,
  Value?: Maybe<Scalars['String']>,
};

export enum Test {
  Value1 = 'Value1',
  Value2 = 'Value2'
}

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
  Ratings: ResolverTypeWrapper<Ratings>,
  Actor: ResolverTypeWrapper<Actor>,
  MovieSummary: ResolverTypeWrapper<MovieSummary>,
  Director: ResolverTypeWrapper<Director>,
  Writer: ResolverTypeWrapper<Writer>,
  Test: Test,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Movie: Movie,
  Ratings: Ratings,
  Actor: Actor,
  MovieSummary: MovieSummary,
  Director: Director,
  Writer: Writer,
  Test: Test,
  Boolean: Scalars['Boolean'],
};

export type ActorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Actor'] = ResolversParentTypes['Actor']> = {
  birthName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  birthPlace?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  tables?: Resolver<Maybe<Array<ResolversTypes['MovieSummary']>>, ParentType, ContextType>,
};

export type DirectorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Director'] = ResolversParentTypes['Director']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  Title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Year?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Director?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Writer?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Actors?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>,
  Plot?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  Ratings?: Resolver<Array<ResolversTypes['Ratings']>, ParentType, ContextType>,
  imdbRating?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type MovieSummaryResolvers<ContextType = any, ParentType extends ResolversParentTypes['MovieSummary'] = ResolversParentTypes['MovieSummary']> = {
  year?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  film?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  director?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  movies?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMoviesArgs, 'title'>>,
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'title'>>,
  actor?: Resolver<Maybe<ResolversTypes['Actor']>, ParentType, ContextType, RequireFields<QueryActorArgs, 'birthName'>>,
  director?: Resolver<Maybe<ResolversTypes['Director']>, ParentType, ContextType, RequireFields<QueryDirectorArgs, 'name'>>,
  writer?: Resolver<Maybe<ResolversTypes['Writer']>, ParentType, ContextType, RequireFields<QueryWriterArgs, 'name'>>,
  test?: Resolver<ResolversTypes['Test'], ParentType, ContextType>,
};

export type RatingsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ratings'] = ResolversParentTypes['Ratings']> = {
  Source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  Value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type WriterResolvers<ContextType = any, ParentType extends ResolversParentTypes['Writer'] = ResolversParentTypes['Writer']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Actor?: ActorResolvers<ContextType>,
  Director?: DirectorResolvers<ContextType>,
  Movie?: MovieResolvers<ContextType>,
  MovieSummary?: MovieSummaryResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Ratings?: RatingsResolvers<ContextType>,
  Writer?: WriterResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AllCards = {
  cards: Array<Card>;
};

export type AllCategories = {
  categories: Array<Category>;
  count: Scalars['Int']['output'];
};

export type AllProducts = {
  count: Scalars['Int']['output'];
  products: Array<Product>;
};

export type Card = {
  about: Scalars['String']['output'];
  backgroundColor: Scalars['String']['output'];
  color: Scalars['String']['output'];
  imagePath: Scalars['String']['output'];
  provider: NestedUser;
};

export type CardInput = {
  about: Scalars['String']['input'];
  backgroundColor: Scalars['String']['input'];
  color: Scalars['String']['input'];
  imagePath: Scalars['String']['input'];
  provider: SelectInput;
};

export type Category = {
  bigImagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  smallImagePath: Scalars['String']['output'];
};

export type CategoryInput = {
  bigImagePath: Scalars['String']['input'];
  name: Scalars['String']['input'];
  seo?: InputMaybe<SeoInput>;
  smallImagePath: Scalars['String']['input'];
};

export type JwtAuthConfirmationInput = {
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type JwtAuthLoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type JwtAuthResetInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type JwtAuthVerificationInput = {
  email: Scalars['String']['input'];
};

export type Mutation = {
  createCard: Card;
  createCategory: Category;
  createProduct: Product;
  deleteCard: Card;
  deleteCategory: Category;
  deleteProduct: Product;
  duplicateCard: Card;
  duplicateCategory: Category;
  jwtConfirmation: Scalars['Boolean']['output'];
  jwtLogin: SessionUserResponse;
  jwtReset: Scalars['Boolean']['output'];
  jwtVerification: Scalars['Boolean']['output'];
  logout: Scalars['Boolean']['output'];
  toggleCard: Card;
  toggleCategory: Category;
  updateCard: Card;
  updateCategory: Category;
  updateProduct: Product;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationDeleteCardArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCardArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDuplicateCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationJwtConfirmationArgs = {
  data: JwtAuthConfirmationInput;
};


export type MutationJwtLoginArgs = {
  data: JwtAuthLoginInput;
};


export type MutationJwtResetArgs = {
  data: JwtAuthResetInput;
};


export type MutationJwtVerificationArgs = {
  data: JwtAuthVerificationInput;
};


export type MutationToggleCardArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateCardArgs = {
  data: CardInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['Int']['input'];
};

export type NestedCategory = {
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type NestedUser = {
  profile: NestedUserProfile;
};

export type NestedUserProfile = {
  avatarPath: Scalars['String']['output'];
  login: Scalars['String']['output'];
};

export enum PriceType {
  Fixed = 'FIXED',
  Range = 'RANGE'
}

export type Product = {
  category: NestedCategory;
  coverPath: Scalars['String']['output'];
  fixedPrice?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  isHot: Scalars['Boolean']['output'];
  maxPrice?: Maybe<Scalars['Int']['output']>;
  minPrice?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  priceType: PriceType;
  provider: NestedUser;
};

export type ProductInput = {
  category: SelectInput;
  coverPath: Scalars['String']['input'];
  fixedPrice?: InputMaybe<Scalars['Int']['input']>;
  maxPrice?: InputMaybe<Scalars['Int']['input']>;
  minPrice?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
  priceType: PriceType;
};

export type Query = {
  cardById: Card;
  cards: AllCards;
  categories: AllCategories;
  categoryById: Category;
  jwtRegister: SessionUserResponse;
  products: AllProducts;
};


export type QueryCardByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCardsArgs = {
  query: QueryFullestInput;
};


export type QueryCategoriesArgs = {
  query: QueryCategoryInput;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryJwtRegisterArgs = {
  token: Scalars['String']['input'];
};


export type QueryProductsArgs = {
  query: QueryProductInput;
};

export type QueryCategoryInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  visibility: Visibility;
};

export type QueryFullestInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  visibility: Visibility;
};

export type QueryProductInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  popular?: InputMaybe<Scalars['Boolean']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  visibility: Visibility;
};

export type SelectInput = {
  name: Scalars['String']['input'];
  value: Scalars['Int']['input'];
};

export type SeoInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type SessionUser = {
  id: Scalars['Int']['output'];
  roles: Array<UserRole>;
};

export type SessionUserResponse = {
  user: SessionUser;
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum UserRole {
  Manager = 'MANAGER',
  Provider = 'PROVIDER'
}

export enum Visibility {
  Hidden = 'HIDDEN',
  Visible = 'VISIBLE'
}

export type CardsQueryVariables = Exact<{
  query: QueryFullestInput;
}>;


export type CardsQuery = { cards: { cards: Array<{ about: string, imagePath: string, color: string, backgroundColor: string, provider: { profile: { login: string, avatarPath: string } } }> } };

export type CategoriesQueryVariables = Exact<{
  query: QueryCategoryInput;
}>;


export type CategoriesQuery = { categories: { count: number, categories: Array<{ name: string, slug: string, smallImagePath: string }> } };

export type PopularCategoriesQueryVariables = Exact<{
  query: QueryCategoryInput;
}>;


export type PopularCategoriesQuery = { categories: { count: number, categories: Array<{ name: string, slug: string, bigImagePath: string }> } };

export type ProductsQueryVariables = Exact<{
  query: QueryProductInput;
}>;


export type ProductsQuery = { products: { count: number, products: Array<{ id: number, name: string, coverPath: string, fixedPrice?: number | null, minPrice?: number | null, maxPrice?: number | null, priceType: PriceType, isHot: boolean, category: { name: string, slug: string }, provider: { profile: { login: string, avatarPath: string } } }> } };


export const CardsDocument = gql`
    query Cards($query: QueryFullestInput!) {
  cards(query: $query) {
    cards {
      about
      imagePath
      color
      backgroundColor
      provider {
        profile {
          login
          avatarPath
        }
      }
    }
  }
}
    `;

/**
 * __useCardsQuery__
 *
 * To run a query within a React component, call `useCardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCardsQuery(baseOptions: Apollo.QueryHookOptions<CardsQuery, CardsQueryVariables> & ({ variables: CardsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CardsQuery, CardsQueryVariables>(CardsDocument, options);
      }
export function useCardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CardsQuery, CardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CardsQuery, CardsQueryVariables>(CardsDocument, options);
        }
export function useCardsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CardsQuery, CardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CardsQuery, CardsQueryVariables>(CardsDocument, options);
        }
export type CardsQueryHookResult = ReturnType<typeof useCardsQuery>;
export type CardsLazyQueryHookResult = ReturnType<typeof useCardsLazyQuery>;
export type CardsSuspenseQueryHookResult = ReturnType<typeof useCardsSuspenseQuery>;
export type CardsQueryResult = Apollo.QueryResult<CardsQuery, CardsQueryVariables>;
export const CategoriesDocument = gql`
    query Categories($query: QueryCategoryInput!) {
  categories(query: $query) {
    categories {
      name
      slug
      smallImagePath
    }
    count
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables> & ({ variables: CategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const PopularCategoriesDocument = gql`
    query PopularCategories($query: QueryCategoryInput!) {
  categories(query: $query) {
    categories {
      name
      slug
      bigImagePath
    }
    count
  }
}
    `;

/**
 * __usePopularCategoriesQuery__
 *
 * To run a query within a React component, call `usePopularCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularCategoriesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function usePopularCategoriesQuery(baseOptions: Apollo.QueryHookOptions<PopularCategoriesQuery, PopularCategoriesQueryVariables> & ({ variables: PopularCategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularCategoriesQuery, PopularCategoriesQueryVariables>(PopularCategoriesDocument, options);
      }
export function usePopularCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularCategoriesQuery, PopularCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularCategoriesQuery, PopularCategoriesQueryVariables>(PopularCategoriesDocument, options);
        }
export function usePopularCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PopularCategoriesQuery, PopularCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PopularCategoriesQuery, PopularCategoriesQueryVariables>(PopularCategoriesDocument, options);
        }
export type PopularCategoriesQueryHookResult = ReturnType<typeof usePopularCategoriesQuery>;
export type PopularCategoriesLazyQueryHookResult = ReturnType<typeof usePopularCategoriesLazyQuery>;
export type PopularCategoriesSuspenseQueryHookResult = ReturnType<typeof usePopularCategoriesSuspenseQuery>;
export type PopularCategoriesQueryResult = Apollo.QueryResult<PopularCategoriesQuery, PopularCategoriesQueryVariables>;
export const ProductsDocument = gql`
    query Products($query: QueryProductInput!) {
  products(query: $query) {
    products {
      id
      name
      coverPath
      fixedPrice
      minPrice
      maxPrice
      priceType
      isHot
      category {
        name
        slug
      }
      provider {
        profile {
          login
          avatarPath
        }
      }
    }
    count
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables> & ({ variables: ProductsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export function useProductsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsSuspenseQueryHookResult = ReturnType<typeof useProductsSuspenseQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
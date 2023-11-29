import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import {IProduct} from './product.types'

export const productApi = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://65666ec564fcff8d730ecb05.mockapi.io/api/v1/categories' }),
    endpoints: build => ({
        getElectronics: build.query<IProduct[], {limit: number, page: number, sortBy: string, order: string}>({
            query: (arg) => {
                const { limit, page, sortBy, order } = arg;
                return {
                    url: '1/products',
                    params: { limit, page, sortBy, order },
                };
            },
        }),
        getClothes: build.query<IProduct[], {limit: number, page: number, sortBy: string, order: string}>({
            query: (arg) => {
                const { limit, page, sortBy, order  } = arg;
                return {
                    url: '2/products',
                    params: { limit, page, sortBy, order  },
                };
            },
        }),
        getFood: build.query<IProduct[], {limit: number, page: number, sortBy: string, order: string}>({
            query: (arg) => {
                const { limit, page, sortBy, order  } = arg;
                return {
                    url: '3/products',
                    params: { limit, page, sortBy, order  },
                };
            },
        }),
    }),
})

export const { useGetElectronicsQuery, useGetClothesQuery, useGetFoodQuery } = productApi

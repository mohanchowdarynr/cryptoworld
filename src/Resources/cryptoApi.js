import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '1a2c73c5bbmshbdc44574832c4c1p16f9aajsnd544b714208c'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
     reducerPath: 'cryptoApi',
     baseQuery: fetchBaseQuery({baseUrl}),
     endpoints: (builder) => ({
         getCryptos: builder.query({
             query : (count) => createRequest(`/coins?limit=${count}`)
         }),
         getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
          }),
          getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
          }),
     })
});

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetExchangesQuery
} = cryptoApi;
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f80b6a73b79d0153626f11.mockapi.io/',
  }),
  endpoints: builder => ({
    getContactsByName: builder.query({
      query: name => `contacts`,
    }),
  }),
});

export const { useGetContactsByNameQuery } = contactsApi;

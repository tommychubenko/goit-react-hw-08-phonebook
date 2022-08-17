import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62f80b6a73b79d0153626f11.mockapi.io/',
  }),
  tagTypes: ['contacts'],
  endpoints: builder => ({
    getContactsByName: builder.query({
      query: name => `contacts`,
      providesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: newContact,
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

export const {
  useGetContactsByNameQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;

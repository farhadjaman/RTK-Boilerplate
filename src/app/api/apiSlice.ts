// Path: client\src\app\store.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  tagTypes: [''],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    //put your endpoints here

    // example:
    getTodos: builder.query({
      query: () => '/todos',
    }),
  }),
});

const apiReducer = apiSlice.reducer;
const apiMiddleware = apiSlice.middleware;
const apiReducerPath = apiSlice.reducerPath;

export { apiReducer, apiMiddleware, apiReducerPath };
export const {
  //put your actions here and export them
  // example:
  useGetTodosQuery,
} = apiSlice;

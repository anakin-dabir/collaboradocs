import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

const nodeApi = createApi({
  baseQuery,
  reducerPath: "nodeApi",
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getUser: build.mutation({
      query: () => ({
        method: "GET",
        url: "/auth/getUser",
      }),
      providesTags: ["Users"],
    }),
    login: build.mutation({
      query: (creds) => ({
        method: "POST",
        url: "/auth/login",
        body: creds,
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const { useLoginMutation, useGetUserQuery } = nodeApi;

export default nodeApi;

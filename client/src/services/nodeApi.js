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
        url: "/auth/createUser",
        body: creds,
      }),
      invalidatesTags: ["Users"],
    }),
    fileUpload: build.mutation({
      query: (file) => ({
        method: "POST",
        url: "/upload",
        body: file,
      }),
    }),

    createProject: build.mutation({
      query: (obj) => ({
        method: "POST",
        url: "/project/create",
        body: obj,
      }),
    }),

    createDocument: build.mutation({
      query: (obj) => ({
        method: "POST",
        url: "/document/create",
        body: obj,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserQuery,
  useFileUploadMutation,
  useCreateProjectMutation,
  useCreateDocumentMutation
} = nodeApi;

export default nodeApi;

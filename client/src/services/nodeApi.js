import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";
import { clearUser, setUser } from "../store/slice/authSlice";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import config from "../config/config";
import { setDocument } from "../store/slice/documentSlice";
import shuffle from "../utils/shuffle";

const nodeApi = createApi({
  baseQuery,
  reducerPath: "nodeApi",
  tagTypes: ["User", "Document"],
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        method: "GET",
        url: "/auth/get",
      }),
      providesTags: ["User"],
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled;
          dispatch(setUser(response.data.user));
        } catch (error) {}
      },
    }),
    register: build.mutation({
      query: (creds) => ({
        method: "POST",
        url: "/auth/register",
        body: creds,
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          toast.success(response.data.msg);
        } catch (error) {
          toast.error(error.error.data ? error.error.data.msg : config.ERROR);
        }
      },
    }),
    login: build.mutation({
      query: (creds) => ({
        method: "POST",
        url: "/auth/login",
        body: creds,
      }),
      // invalidatesTags: ["User"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          toast.success(response.data.msg);
        } catch (error) {
          toast.error(error.error.data ? error.error.data.msg : config.ERROR);
        }
      },
    }),

    verifyEmail: build.mutation({
      query: (creds) => ({
        method: "POST",
        url: "/auth/verify",
        body: creds,
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          const response = await queryFulfilled;
          toast.success(response.data.msg);
        } catch (error) {
          toast.error(error.error.data ? error.error.data.msg : config.ERROR);
        }
      },
    }),
    updateImage: build.mutation({
      query: (file) => ({
        method: "POST",
        url: "/auth/updateImage",
        body: file,
      }),
      invalidatesTags: ["User"],
    }),
    updateName: build.mutation({
      query: (creds) => ({
        method: "POST",
        url: "/auth/updateName",
        body: creds,
      }),
      invalidatesTags: ["User"],
    }),
    remove: build.mutation({
      query: () => ({
        method: "DELETE",
        url: "/auth/remove",
      }),
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(clearUser());
          Cookies.remove("jwt_token");
        } catch (error) {
          toast.error(error.error.data.msg);
        }
      },
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

    getAllDocuments: build.query({
      query: () => ({
        method: "GET",
        url: "/document/getAll",
      }),
      providesTags: ["Document"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          dispatch(setDocument(shuffle(response.data.document)));
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserQuery,
  useRegisterMutation,
  useRemoveMutation,
  useUpdateImageMutation,
  useUpdateNameMutation,
  useCreateProjectMutation,
  useCreateDocumentMutation,
  useVerifyEmailMutation,
  useGetAllDocumentsQuery,
} = nodeApi;

export default nodeApi;

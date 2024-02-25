import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";
import { clearUser, setUser } from "../store/slice/authSlice";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import config from "../config/config";
import { setDocument } from "../store/slice/documentSlice";
import shuffle from "../utils/shuffle";
import { setProject, setProjectDocs } from "../store/slice/projectSlice";

const nodeApi = createApi({
  baseQuery,
  reducerPath: "nodeApi",
  tagTypes: ["User", "Document", "Project"],
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
      invalidatesTags: ["Document", "Project"],
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

    getAllProjects: build.query({
      query: () => ({
        method: "GET",
        url: "/project/getAll",
      }),
      providesTags: ["Project"],
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          dispatch(setProject(response.data.project));
        } catch (error) {}
      },
    }),

    getDocumentById: build.query({
      query: (projectId) => ({
        method: "POST",
        url: `/document/getByProjectId`,
        body: projectId,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const response = await queryFulfilled;
          dispatch(setProjectDocs({ document: response.data.document, projectId: args.projectId }));
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
  useGetAllProjectsQuery,
  useGetDocumentByIdQuery,
} = nodeApi;

export default nodeApi;

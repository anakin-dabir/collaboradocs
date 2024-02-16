import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
import config from "../config/config";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.SERVER || config.SERVER || "http://localhost:5000",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = Cookies.get("jwt_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    // headers.set("Access-Control-Allow-Origin", config.SERVER);
    // headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    return headers;
  },
});

export default baseQuery;

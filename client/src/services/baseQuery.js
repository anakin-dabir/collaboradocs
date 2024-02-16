import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000" || "https://pucon-production.up.railway.app/",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = Cookies.get("jwt_token");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
    return headers;
  },
});

export default baseQuery;

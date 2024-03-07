import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import config from "../config/config.js";
import fileUpload from "express-fileupload";
import { publicPath } from "./fileUpload.js";

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://collaboradocs.vercel.app"],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);
app.use(fileUpload());
app.use("/", express.static(publicPath));

export default app;

// || "http://localhost:5173"

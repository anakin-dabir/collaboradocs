import React, { useEffect, useState } from "react";
import {
  Stack,
  useTheme,
  Box,
  MenuItem,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Typography,
} from "@mui/material";
import XButton from "./components/XButton";
import XDateRangePicker from "./components/Date/XDateRangePicker";
import XDatePicker from "./components/Date/XDatePicker";
import image from "./assets/userIcon.svg?url";
import XBadge from "./components/XBadge";
import XRadio from "./components/XRadio";
import XCheckbox from "./components/XCheckbox";
import XStack from "./components/XStack";
import XTextfield from "./components/XTextfield";
import Divider from "@/assets/divider.png";
import useValidation from "./formik/useValidation";
import { FileValidationSchema, LoginValidationSchema } from "./formik/validationSchema";
import { useSelector, useDispatch } from "react-redux";
import { userSet } from "./store/slice/authSlice";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import toObject from "dayjs/plugin/toObject";
import XLoader from "./components/XLoader";
import XTableContainer from "./components/Table/XTableContainer";
import XTable from "./components/Table/XTable";
import { useHeadingStyles } from "./themes";
import XTablePagination from "./components/Table/XTablePagination";
import AppDrawer from "./components/XDrawer";
import SDrawer from "./SDrawer";
import XToast from "./components/XToast";
import XAlertBase from "./components/Alert/XAlertBase";
import XAlert from "./components/Alert/XAlert";
import dividerPng from "@/assets/divider.png";
import XFileUpload from "./components/XFileUpload";

const App = () => {
  const [open, openSet] = useState(false);
  const theme = useTheme();
  const [loading, loadingSet] = useState(false);
  const [file, fileSet] = useState(null);
  const user = useSelector((state) => state.user);
  useEffect(() => {}, [user]);
  const dispatch = useDispatch();

  // const initialValues = { email: "", password: "" };
  const handleSubmit = (values) => {
    console.log({ values });
    const formData = new FormData();
    formData.append("file", file);
    formData.append("myFile", { name: "anakin" });
    console.log(formData);
    fileSet(null);
  };
  const initialValues = { myFile: null };
  const formik = useValidation({
    initialValues,
    handleSubmit,
    validationSchema: FileValidationSchema,
  });
  return (
    <>
      <XStack className='w-96 p-10 gap-3'>
        <form onSubmit={formik.handleSubmit}>
          <XTextfield placeholder='Enter Name' />
          <XFileUpload
            formik={formik}
            name='myFile'
            src={file ? URL.createObjectURL(file) : ""}
            fileSet={fileSet}
          />
          <XButton type='submit'>CLick me</XButton>
        </form>
      </XStack>
    </>
  );
};

export default App;

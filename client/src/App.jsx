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
import { LoginValidationSchema } from "./formik/validationSchema";
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

const App = () => {
  const [open, openSet] = useState(false);
  const theme = useTheme();
  const [loading, loadingSet] = useState(false);
  const user = useSelector((state) => state.user);
  useEffect(() => {}, [user]);
  const dispatch = useDispatch();

  const initialValues = { email: "", password: "" };
  const handleSubmit = (values) => {
    loadingSet(true);
    dispatch(userSet(values));
    setTimeout(() => {
      loadingSet(false);
    }, 3000);
  };
  const formik = useValidation({
    initialValues,
    handleSubmit,
    validationSchema: LoginValidationSchema,
  });
  return (
    <>
      <div className=' h-screen pt-10 bg-black/90 !shadow-2xl'>
        {/* <SDrawer drawerOpen={open} openSet={openSet} /> */}
        <XButton className='ml-52' onClick={() => openSet((pre) => !pre)}>
          Open Drawer
        </XButton>
        <XToast isOpen={open} onClose={() => openSet((pre) => !pre)} severity='error' />
        <XAlert isOpen={open} />
      </div>
    </>
  );
};

export default App;

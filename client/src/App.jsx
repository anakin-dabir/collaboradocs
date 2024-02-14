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

const App = () => {
  const [open, openSet] = useState(true);
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
  const [date, dateSet] = useState([
    dayjs("11/12/2021").format("DD/MMM/YYYY"),
    dayjs("11/12/2025").format("DD/MMM/YYYY"),
  ]);
  const arr = ["anakin", "new Name", "futureSelf", "Fuck off", "Fuck off", "Fuck off"];

  console.log(dayjs("2021-11-25").format("DD-MM-YYYY"));
  const classes = useHeadingStyles();
  return (
    <>
      <div className=' h-screen pt-10 bg-black/90 !shadow-2xl'>
        <XTableContainer
          style={{
            overflowX: "initial",
            overflowY: "scroll",
            height: "60vh",
          }}
        >
          <XTable>
            <TableHead>
              <TableRow>
                {arr.map((ar, index) => {
                  return (
                    <TableCell align='center'>
                      <Typography className={classes.table_heading}>{ar}</Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align='center'>This is me</TableCell>
                <TableCell align='center'>This is me</TableCell>
                <TableCell align='center'>This is me</TableCell>
                <TableCell align='center'>This is me</TableCell>
                <TableCell align='center'>This is me</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align='center'>This is me</TableCell>
                <TableCell align='center'>This is me</TableCell>
                <TableCell align='center'>This is me</TableCell>
                <TableCell align='center'>This is me</TableCell>
                <TableCell align='center'>This is me</TableCell>
              </TableRow>
            </TableBody>
          </XTable>
        </XTableContainer>
        <XTablePagination />
      </div>
    </>
  );
};

export default App;

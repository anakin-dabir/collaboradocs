import React, { useEffect, useState } from "react";
import { Stack, useTheme, Box, MenuItem } from "@mui/material";
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

  console.log(dayjs("2021-11-25").format("DD-MM-YYYY"));

  return (
    <>
      <div className=' h-screen pt-10 bg-black/90 !shadow-2xl'>
        <div className='w-96'>
          <form>
            <XStack className='p-4 gap-4'>
              <div className=''>Enter your name please</div>
              <XTextfield
                type='text'
                value={formik.values.email}
                onChange={formik.handleChange}
                id='email'
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && !!formik.errors.email && formik.errors.email}
              />
              <XTextfield
                value={formik.values.password}
                type='password'
                onChange={formik.handleChange}
                id='password'
                error={formik.touched.password && !!formik.errors.password}
              />
              <XButton loading={loading} onClick={formik.handleSubmit}>
                Login
              </XButton>
            </XStack>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;

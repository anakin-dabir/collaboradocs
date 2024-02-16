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
import dividerPng from "@/assets/dividerBottom.png";
import XFileUpload from "./components/XFileUpload";
import bg from "@/assets/bg/bg_2.png";
import XMenu from "./components/XMenu";

const App = () => {
  const [open, openSet] = useState(false);
  const theme = useTheme();
  const [loading, loadingSet] = useState(false);
  const [storeAnchorEl, storeAnchorElSet] = useState(null);
  const [searchStore, searchStoreSet] = useState("");
  const [selectedStore, selectedStoreSet] = useState("");

  const [file, fileSet] = useState(null);
  const user = useSelector((state) => state.user);
  useEffect(() => {}, [user]);
  const dispatch = useDispatch();
  const [value, valueSet] = useState(10);

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
  const headingClasses = useHeadingStyles();
  return (
    <>
      <div
        className='h-full w-screen bg-black/70 bg-blend-overlay'
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <XStack className='w-96 p-10 gap-3 !bg-secondary_background/50 !drop-shadow-none' size='l'>
          <form onSubmit={formik.handleSubmit}>
            <Typography>Edit User: anakindabir@gmail.com</Typography>
            <Box sx={{ width: "30%", position: "absolute", bottom: 0 }}>
              <img
                style={{ width: "100%", marginBottom: "10px" }}
                className={headingClasses.position}
                src={dividerPng}
                alt=''
              />
            </Box>
            <div className='w-20'>
              <XTextfield
                fullWidth
                simpleBorder
                simpleBorderWithBottomRight
                placeholder='Enter Name'
                label='Enter Name'
                value={value}
                select
                SelectProps={{
                  renderValue: (selected) => selected,
                }}
              >
                {[10, 15, 20].map((item, i) => {
                  return (
                    <MenuItem value={item} key={i} onClick={() => valueSet(item)}>
                      {item}
                    </MenuItem>
                  );
                })}
              </XTextfield>
            </div>

            <XFileUpload
              formik={formik}
              name='myFile'
              src={file ? URL.createObjectURL(file) : ""}
              fileSet={fileSet}
            />
            <XButton type='submit'>CLick me</XButton>
          </form>
        </XStack>
        <div className='my-10 w-96'>
          <XMenu
            options={[
              { _id: "Anakin", name: "Anakin" },
              { _id: "Mariko", name: "Mariko" },
              { _id: "Laura", name: "Laura" },
              { _id: "Began", name: "Began" },
            ]}
            prefilledOption={"Anakin"}
            anchorEl={storeAnchorEl}
            anchorElSet={storeAnchorElSet}
            name='Store'
            selectedOptionSet={selectedStoreSet}
            search={searchStore}
            searchSet={searchStoreSet}
          />
        </div>
      </div>
    </>
  );
};

export default App;

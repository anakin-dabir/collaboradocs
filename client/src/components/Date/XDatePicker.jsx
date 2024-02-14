import React, { useEffect, useRef, useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { IMaskInput } from "react-imask";
import { DatePicker } from "@mui/x-date-pickers-pro";
import { ReactComponent as CalendarIcon } from "@/assets/calendarIcon.svg";
import XTextfield from "@/components/XTextfield";
import clsx from "clsx";
// import {FormikProps} from 'formik';
import dayjs from "dayjs";

export default function XDatePicker({
  selectedDate = "12/11/2021",
  selectedDateSet,
  className = "",
}) {
  const [calenderOpen, calenderOpenSet] = useState(false);
  const [anchorEl, anchorElSet] = useState(null);
  console.log(selectedDate);
  return (
    <div className={clsx("w-72", className)}>
      <DatePicker
        value={selectedDate}
        inputFormat='DD/MMM/YYYY'
        disableMaskedInput
        PopperProps={{ anchorEl, className: "text-nowrap" }}
        open={calenderOpen}
        onClose={() => calenderOpenSet(false)}
        onOpen={() => calenderOpenSet(true)}
        onChange={(value) => {
          selectedDateSet?.(value?.format("DD/MMM/YYYY") || "");
        }}
        renderInput={() => (
          <XTextfield
            placeholder='DD/MM/YYYY'
            value={dayjs(selectedDate).format("DD/MMM/YYYY")}
            type='text'
            inputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={(e) => {
                      anchorElSet(e.target);
                      calenderOpenSet(true);
                    }}
                  >
                    <CalendarIcon />
                  </IconButton>
                </InputAdornment>
              ),
              inputProps: {
                mask: "00/***/0000",
              },
              inputComponent: DateMask,
            }}
          />
        )}
      />
    </div>
  );
}

const DateMask = React.forwardRef((props, ref) => {
  const { mask, ...inputProps } = props;
  return <IMaskInput {...inputProps} inputRef={ref} mask={mask} />;
});

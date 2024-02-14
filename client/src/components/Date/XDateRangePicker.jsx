import React, { useState } from "react";
import { InputAdornment, IconButton } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import XTextfield from "@/components/XTextfield";
import { ReactComponent as CalendarIcon } from "@/assets/calendarIcon.svg";
import { ReactComponent as CrossIcon } from "@/assets/crossIcon.svg";
import clsx from "clsx";
// import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
// import {useSelector} from 'react-redux';
import dayjs from "dayjs";

const XDateRangePicker = ({
  selectedDate = ["12/11/2021", "12/11/2023"],
  selectedDateSet,
  placeholder = "DD/MM/YYYY - DD/MM/YYYY",
  className = "",
  ...props
}) => {
  const [calenderOpen, calenderOpenSet] = useState(false);
  console.log(selectedDate);
  return (
    <>
      <div className={clsx("w-72", className)}>
        <DateRangePicker
          value={
            [
              dayjs(selectedDate[0]).format("DD/MMM/YYYY"),
              dayjs(selectedDate[1]).format("DD/MMM/YYYY"),
            ] || null
          }
          open={calenderOpen}
          onClose={() => calenderOpenSet(false)}
          onOpen={() => calenderOpenSet(true)}
          PopperProps={{ className: "text-nowrap" }}
          onChange={(value) => {
            selectedDateSet?.([
              value[0]?.format("DD/MMM/YYYY") || "",
              value[1]?.format("DD/MMM/YYYY") || "",
            ]);
          }}
          renderInput={() => (
            <XTextfield
              placeholder={placeholder}
              value={
                selectedDate[0] && selectedDate[1]
                  ? [
                      dayjs(selectedDate[0]).format("DD/MMM/YYYY"),
                      dayjs(selectedDate[1]).format("DD/MMM/YYYY"),
                    ].join(" - ")
                  : ""
              }
              onKeyDown={(e) => {
                if (e.code === "Backspace") selectedDateSet?.(["", ""]);
              }}
              type='text'
              inputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    {selectedDate[0] && selectedDate[1] && (
                      <IconButton onClick={() => selectedDateSet?.(["", ""])}>
                        <CrossIcon />
                      </IconButton>
                    )}
                    <IconButton
                      onClick={() => {
                        calenderOpenSet?.((prev) => !prev);
                      }}
                    >
                      <CalendarIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      </div>
    </>
  );
};

export default XDateRangePicker;

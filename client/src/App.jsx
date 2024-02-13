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

const App = () => {
  const [open, openSet] = useState(true);
  const theme = useTheme();
  const [loading, loadingSet] = useState(false);
  const [file, fileSet] = useState(null);
  const [str, strSet] = useState("");
  const [selectedDate, selectedDateSet] = useState("");
  const [selectedDate1, selectedDateSet1] = useState(["", ""]);
  const [radio, radioSet] = useState("Male");
  const [socket, socketSet] = useState(null);

  return (
    <>
      <div className=' h-screen pt-10 bg-black/90 !shadow-2xl'>
        <div className='ml-20 flex gap-10'>
          <XDateRangePicker selectedDate={selectedDate1} selectedDateSet={selectedDateSet1} />
          <XDatePicker selectedDate={selectedDate} selectedDateSet={selectedDateSet} />
        </div>
        <img src={Divider} alt='' />
        <XBadge>
          <div className='h-20 w-20 p-4 ml-10'>Fuck you</div>
        </XBadge>

        <XCheckbox label='Click here if you are 18+' />

        <XRadio
          value={radio}
          handleChange={radioSet}
          options={["Male", "Female"]}
          className='flex-row justify-evenly  p-10'
        />
        <div className='w-96'>
          <XStack className='p-4 gap-4'>
            <div className=''>Enter your name please</div>
            <XTextfield
              value={radio}
              onChange={(e) => radioSet(e.target.value)}
              SelectProps={{
                renderValue: (selected) => {
                  return selected;
                },
              }}
            />
            <XTextfield
              value={radio}
              onChange={(e) => radioSet(e.target.value)}
              SelectProps={{
                renderValue: (selected) => {
                  return selected;
                },
              }}
            />
            <XButton loading className='w-full py-2'>
              Login
            </XButton>
          </XStack>
        </div>
      </div>
    </>
  );
};

export default App;

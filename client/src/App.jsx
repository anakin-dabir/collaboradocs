import React, { useEffect, useState } from "react";
import { Stack, useTheme, Box, MenuItem } from "@mui/material";
import XButton from "./components/XButton";
import XDateRangePicker from "./components/Date/XDateRangePicker";
import XDatePicker from "./components/Date/XDatePicker";
import image from "./assets/userIcon.svg?url";
import menuTopLeft from "./assets/menu_top_left.svg";
import menuTopRight from "./assets/menu_top_right.svg";
import menuBottomRight from "./assets/menu_bottom_right.svg";
import menuBottomLeft from "./assets/menu_bottom_left.svg";
import XBadge from "./components/XBadge";
import XRadio from "./components/XRadio";
import XCheckbox from "./components/XCheckbox";
import XStack from "./components/XStack";
import XTextfield from "./components/XTextfield";
import { io } from "socket.io-client";
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

  useEffect(() => {
    const socket = io("http://localhost:5001");
    socketSet(socket);
  }, []);

  return (
    <>
      <div className=' h-screen pt-10 bg-black/90 !shadow-2xl'>
        <div className='ml-20 flex gap-10'>
          <XDateRangePicker selectedDate={selectedDate1} selectedDateSet={selectedDateSet1} />
          <XDatePicker selectedDate={selectedDate} selectedDateSet={selectedDateSet} />
        </div>
        <XBadge>
          <div className='h-20 w-20 muiDatePicker p-4 ml-10'>Fuck you</div>
        </XBadge>
        <XCheckbox label='Click here if you are 18+' />

        <XRadio
          value={radio}
          handleChange={radioSet}
          options={["Male", "Female"]}
          className='flex-row justify-evenly  p-10'
        />
        <div className='w-72'>
          <XTextfield
            select
            value={radio}
            onChange={(e) => radioSet(e.target.value)}
            SelectProps={{
              renderValue: (selected) => {
                return selected;
              },
            }}
          >
            <MenuItem value='FUCK OFF'>
              <XCheckbox label='Click here if you are 18+' checked={radio === "FUCK OFF"} />
            </MenuItem>
            <MenuItem value='FUCK one'>Fuck</MenuItem>
            <MenuItem value='FUCK two'>Fuck</MenuItem>
            <MenuItem value='FUCK three'>Fuck</MenuItem>
          </XTextfield>
        </div>
      </div>
    </>
  );
};

export default App;

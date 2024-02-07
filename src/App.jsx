import React, {useState} from 'react';
import {Stack, useTheme, Box} from '@mui/material';
import XButton from './components/XButton';
import XDateRangePicker from './components/XDateRangePicker';
import XDatePicker from './components/XDatePicker';
import image from './assets/userIcon.svg?url';
import menuTopLeft from './assets/menu_top_left.svg';
import menuTopRight from './assets/menu_top_right.svg';
import menuBottomRight from './assets/menu_bottom_right.svg';
import menuBottomLeft from './assets/menu_bottom_left.svg';

const App = () => {
  const [open, openSet] = useState(false);
  const theme = useTheme();
  const [loading, loadingSet] = useState(false);
  const [file, fileSet] = useState(null);
  const [str, strSet] = useState('');
  const [selectedDate, selectedDateSet] = useState('');
  const [selectedDate1, selectedDateSet1] = useState(['', '']);

  console.log(file);
  return (
    <>
      <div className=' h-screen pt-10 bg-black/90 !shadow-2xl'>
        <div className='ml-20 flex gap-10'>
          <XDateRangePicker selectedDate={selectedDate1} selectedDateSet={selectedDateSet1} />
          <XDatePicker selectedDate={selectedDate} selectedDateSet={selectedDateSet} />
        </div>
        <div
          className={`w-96 h-96 bg-no-repeat [background: url(./assets/menu_top_left.svg) top left,
                       url(./assets/menu_top_right.svg) top right,
                       url(./assets/menu_bottom_right.svg) bottom right,
                       url(./assets/menu_bottom_left.svg) bottom left]`}
        ></div>
        {/* <XStack className='w-full mt-3 h-20' /> */}
        {/* <XStack className='w-full mt-3 h-20' /> */}
        {/* <div className='mt-4 pl-10'>
          <XStack className='p-4 h-96 w-[960px]'>
            <XButton onClick={() => openSet(pre => !pre)}>I Love You</XButton>
            <XButton>I Love You</XButton>
          </XStack>
        </div> */}
      </div>
    </>
  );
};

export default App;

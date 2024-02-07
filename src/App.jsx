import React, {useState} from 'react';
import {Stack, useTheme, Box} from '@mui/material';
import XButton from './components/XButton';
import XDateRangePicker from './components/XDateRangePicker';
import XDatePicker from './components/XDatePicker';
import image from './assets/userIcon.svg';
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
        <img src={image} alt='' />
        <Box
          sx={{
            backgroundImage: `url(${menuTopLeft}), url(${menuTopRight}), url(${menuBottomRight}), url(${menuBottomLeft})`,
            backgroundPosition: 'top left, top right, bottom right, bottom left',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto',
            backgroundColor: 'rgba(7, 50, 79, 0.92)', // Fallback color
            height: '300px', // Set a height for the box
          }}
        >
          {/* Your content here */}
        </Box>
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

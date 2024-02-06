import React, {useState} from 'react';
import {Stack} from '@mui/material';
import {ReactComponent as DividerBoth} from './img/divider_both.svg';
import XButton from './components/XButton';
import XStack from './components/XStack';
import XTopbar from './components/XTopbar';
import XSortIcon from './components/XSortIcon';
import XToast from './components/XToast';

const App = () => {
  const [open, openSet] = useState(false);
  const [loading, loadingSet] = useState(false);
  return (
    <>
      <XTopbar />
      <div className=' h-screen pt-10 bg-black/90 !shadow-2xl'>
        <XStack className='w-full mt-3 h-20' />
        <div className='mt-4 pl-10'>
          <XStack className='p-4 h-96 w-[960px]'>
            <XButton onClick={() => openSet(pre => !pre)}>I Love You</XButton>
            <XButton>I Love You</XButton>
          </XStack>
          <Stack gap={2} className='w-32 mt-2'>
            <XStack className='w-32 h-32'></XStack>
            <DividerBoth className='w-full object-center' />
            <XStack className='w-32 h-32'></XStack>
          </Stack>
        </div>
        <div className='mt-4 ml-10'>
          <XSortIcon down />
        </div>
      </div>
      <XToast isOpen={open} onClose={() => openSet(false)} severity='info' />
    </>
  );
};

export default App;

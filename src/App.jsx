import React, {useState} from 'react';
import {Stack, useTheme} from '@mui/material';
import {ReactComponent as DividerBoth} from './img/divider_both.svg';
import XButton from './components/XButton';
import XStack from './components/XStack';
import XTopbar from './components/XTopbar';
import XSortIcon from './components/XSortIcon';
import XToast from './components/XToast';
import XCheckbox from './components/XCheckbox';

const App = () => {
  const [open, openSet] = useState(false);
  const theme = useTheme();
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
        <XCheckbox checked={open} onChange={() => openSet(pre => !pre)} />
        <XCheckbox checked={loading} onChange={() => loadingSet(pre => !pre)} label='' />
      </div>
      <XToast isOpen={open} onClose={() => openSet(false)} severity='error' />
    </>
  );
};

export default App;

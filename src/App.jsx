import React, {useState} from 'react';
import {Stack, useTheme, Dialog} from '@mui/material';
import {ReactComponent as DividerBoth} from './img/divider_both.svg';
import XButton from './components/XButton';
import XStack from './components/XStack';
import XTopbar from './components/XTopbar';
import XSortIcon from './components/XSortIcon';
import XToast from './components/XToast';
import XChip from './components/XChip';
import XSwitch from './components/XSwitch';
import XDivider from './components/XDivider';
import XFileUpload from './components/XFileUpload';
import PageHeader from './components/PageHeader/pageHeader';

const App = () => {
  const [open, openSet] = useState(false);
  const theme = useTheme();
  const [loading, loadingSet] = useState(false);
  const [file, fileSet] = useState(null);
  const [str, strSet] = useState('');
  const [selectedDate, selectedDateSet] = useState(['', '']);

  console.log(file);
  return (
    <>
      {/* <XTopbar /> */}
      <div className=' h-screen pt-10 bg-black/90 !shadow-2xl'>
        <PageHeader
          title={`${'Promotions_page_title'}`}
          selectedDate={selectedDate}
          selectedDateSet={selectedDateSet}
          addBtnText={`${'Promotions_table_add_button'}`}
          addBtnHandle={() => {
            openSet(true);
          }}
          searchPlaceholder={'Filter chain | brand | product...'}
          search={str}
          multipleFilters={true}
          secondPlaceholder='Filter promo time frame...'
        />
        {/* <XStack className='w-full mt-3 h-20' /> */}
        {/* <div className='mt-4 pl-10'>
          <XStack className='p-4 h-96 w-[960px]'>
            <XButton onClick={() => openSet(pre => !pre)}>I Love You</XButton>
            <XButton>I Love You</XButton>
          </XStack>
        </div> */}
        <div className='mt-4 ml-10'>
          <XSortIcon down />
        </div>
        <XChip className='w-32' onDelete={() => openSet(pre => !pre)} />
        <div className='w-52'>
          <XDivider />
        </div>
        <XSwitch checked={open} onChange={() => openSet(pre => !pre)} disabled />

        <div className='w-96 gap-10'>
          <XFileUpload
            className='ml-10'
            fileSet={fileSet}
            src={file ? URL.createObjectURL(file) : ''}
          />
        </div>
      </div>
      <XToast isOpen={open} onClose={() => openSet(false)} severity='error' />
    </>
  );
};

export default App;

import React, {useEffect, useRef, useState} from 'react';
import {IconButton, InputAdornment} from '@mui/material';
import {IMaskInput} from 'react-imask';
import {LocalizationProvider, DatePicker} from '@mui/x-date-pickers-pro';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {ReactComponent as CalendarIcon} from '/src/assets/calendarIcon.svg';
import XTextfield from './XTextfield';
import clsx from 'clsx';
// import {FormikProps} from 'formik';

export default function XDatePicker({
  selectedDate = '12/11/2021',
  selectedDateSet,
  className = '',
}) {
  const [calenderOpen, calenderOpenSet] = useState(false);
  const [anchorEl, anchorElSet] = useState(null);
  console.log(selectedDate);
  return (
    <div className={clsx('w-72', className)}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={selectedDate}
          inputFormat='MM/dd/yyyy'
          disableMaskedInput
          PopperProps={{anchorEl}}
          open={calenderOpen}
          onClose={() => calenderOpenSet(false)}
          onOpen={() => calenderOpenSet(true)}
          onChange={value => {
            selectedDateSet?.(
              value?.toLocaleDateString('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              }) || ''
            );
          }}
          renderInput={() => (
            <XTextfield
              placeholder='DD/MM/YYYY'
              value={new Date(selectedDate).toLocaleDateString('en-GB')}
              type='text'
              inputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      onClick={e => {
                        anchorElSet(e.target);
                        calenderOpenSet(true);
                      }}
                    >
                      <CalendarIcon />
                    </IconButton>
                  </InputAdornment>
                ),
                inputProps: {
                  mask: '00/00/0000',
                },
                inputComponent: DateMask,
              }}
            />
          )}
        />
      </LocalizationProvider>
    </div>
  );
}

const DateMask = React.forwardRef((props, ref) => {
  const {mask, ...inputProps} = props;
  return <IMaskInput {...inputProps} inputRef={ref} mask={mask} />;
});

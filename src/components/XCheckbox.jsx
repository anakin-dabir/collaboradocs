import React from 'react';
import {Checkbox, FormControlLabel} from '@mui/material';
import {ReactComponent as RadioIcon} from '/src/assets/radioIcon.svg';
import {ReactComponent as RadioCheckedIcon} from '/src/assets/radioCheckedIcon.svg';
import {ReactComponent as RadioDisabledIcon} from '/src/assets/radioIconDisabled.svg';
import clsx from 'clsx';

const XCheckbox = ({
  label = 'Demo checkbox',
  disabled = false,
  checked,
  onChange,
  className = '',
  ...props
}) => {
  return (
    <div className='w-full'>
      <FormControlLabel
        className={clsx('inline-flex items-center ml-0 mr-0 text-4xl h-10', className)}
        color='primary'
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        slotProps={{
          typography: {
            className: className,
          },
        }}
        control={
          <Checkbox
            icon={disabled ? <RadioDisabledIcon /> : <RadioIcon />}
            checkedIcon={
              disabled ? <RadioCheckedIcon style={{opacity: 0.5}} /> : <RadioCheckedIcon />
            }
            {...props}
          />
        }
        label={label}
      />
    </div>
  );
};

export default XCheckbox;

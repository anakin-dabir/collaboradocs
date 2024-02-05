import React, {ChangeEvent} from 'react';
import {Checkbox} from '@mui/material';
import {ReactComponent as RadioIcon} from './../../img/radioIcon.svg';
import {ReactComponent as RadioCheckedIcon} from './../../img/radioCheckedIcon.svg';
import {ReactComponent as RadioDisabledIcon} from './../../img/radioIconDisabled.svg';

const GuiCheckbox = ({disabled, checked, value, name = '', ...props}) => {
  return (
    <Checkbox
      name={name}
      checked={checked}
      value={value}
      icon={disabled ? <RadioDisabledIcon /> : <RadioIcon />}
      disabled={!!disabled}
      checkedIcon={<RadioCheckedIcon />}
      {...props}
    />
  );
};

export default GuiCheckbox;

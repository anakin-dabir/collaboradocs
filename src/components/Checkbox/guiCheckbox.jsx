import React from 'react';
import {Checkbox} from '@mui/material';
import {ReactComponent as RadioIcon} from './../../img/radioIcon.svg';
import {ReactComponent as RadioCheckedIcon} from './../../img/radioCheckedIcon.svg';
import {ReactComponent as RadioDisabledIcon} from './../../img/radioIconDisabled.svg';

const GuiCheckbox = ({disabled, checked, value, name = '', ...props}) => {
  return (
    <Checkbox
      name={name}
      disabled={disabled}
      style={style}
      checked={checked}
      value={value}
      icon={disabled ? <RadioDisabledIcon /> : <RadioIcon />}
      checkedIcon={disabled ? <RadioCheckedIcon style={{opacity: 0.5}} /> : <RadioCheckedIcon />}
      {...props}
    />
  );
};

export default GuiCheckbox;

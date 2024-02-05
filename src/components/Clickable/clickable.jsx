import React from 'react';
import {Box} from '@mui/material';
import {useClickableStyles} from '../../themes';
import clsx from 'clsx';

const Clickable = ({children, className, style, notClickable}) => {
  const classes = useClickableStyles();
  return (
    <Box style={style} className={clsx({[classes.grow]: !notClickable}, className)}>
      {children}
    </Box>
  );
};

export default React.memo(Clickable);

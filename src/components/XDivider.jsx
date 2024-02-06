import React from 'react';
import {Divider} from '@mui/material';
import {useGuiDividerStyles} from '../themes';
import {ReactComponent as DividerLeft} from '../img/divider_left.svg';
import {ReactComponent as DividerRight} from '../img/divider_right.svg';

const XDivider = ({...props}) => {
  const classes = useGuiDividerStyles();
  return (
    <div className={classes.root}>
      <Divider {...props} />
      <DividerLeft className={classes.divider_left} />
      <DividerRight className={classes.divider_right} />
    </div>
  );
};

export default XDivider;

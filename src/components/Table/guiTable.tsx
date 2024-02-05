import React from 'react';
import {Table} from '@mui/material';
import {useGuiTableStyles} from '../../themes/themes';

const GuiTable = (props:any)=>{
  const classes = useGuiTableStyles();
  return <Table classes={classes} {...props} sx={{paddingLeft: '0.8rem', paddingRight: '0.2rem'}} />;
};

export default GuiTable;
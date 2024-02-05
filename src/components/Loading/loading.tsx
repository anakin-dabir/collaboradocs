// LICENSE_CODE AT
import React from 'react';
import {Box, CircularProgress} from '@mui/material';
import {useLoadingStyles} from './../../themes/themes';

const Loading = ()=>{
  const classes = useLoadingStyles();
  return (
    <Box className={classes.loadingContainer}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;

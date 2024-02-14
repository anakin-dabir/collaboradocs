import React from "react";
import { Box, CircularProgress } from "@mui/material";
import { useLoadingStyles } from "../themes";

const XLoader = () => {
  const classes = useLoadingStyles();
  return (
    <Box className={classes.loadingContainer}>
      <CircularProgress />
    </Box>
  );
};

export default XLoader;

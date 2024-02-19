import React from "react";
import { Switch } from "@mui/material";
import { useGuiSwitchStyles } from "@/themes";

const XSwitch = ({ disabled = false, onChange, checked, ...props }) => {
  const classes = useGuiSwitchStyles();
  return (
    <Switch
      disabled={disabled}
      classes={classes}
      onChange={onChange}
      checked={checked}
      sx={{ height: "auto" }}
      {...props}
    />
  );
};

export default XSwitch;

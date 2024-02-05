import React from "react";
import { Switch } from "@mui/material";
import { useGuiSwitchStyles } from "../../themes/themes";
import { ISwitch } from "./switch.interface";

const GuiSwitch = ({
  disabled,
  onClick,
  onChange,
  checked,
  ...props
}: ISwitch) => {
  const classes = useGuiSwitchStyles();
  return (
    <Switch
      disabled={disabled}
      classes={classes}
      onChange={onChange}
      checked={checked}
      onClick={onClick}
      {...props}
    />
  );
};

export default GuiSwitch;

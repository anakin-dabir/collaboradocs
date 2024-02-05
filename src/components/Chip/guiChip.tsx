import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import clsx from "clsx";
import theme, { useGuiChipStyles, useHebrewStyles } from "../../themes/themes";
import { ReactComponent as ChipTopLeft } from "./../../img/chipTopLeft.svg";
import { ReactComponent as ChipTopRight } from "./../../img/chipTopRight.svg";
import { ReactComponent as ChipBottomRight } from "./../../img/chipBottomRight.svg";
import { ReactComponent as ChipBottomLeft } from "./../../img/chipBottomLeft.svg";
import { ReactComponent as CloseIcon } from "./../../img/crossIcon.svg";
import { IChip } from "./chip.interface";

const GuiChip = ({
  label,
  onDelete,
  onMouseDown,
  disabled = false,
  style,
  className = "",
  ...rest
}: IChip) => {
  const classes = useGuiChipStyles();
  const hebrewClasses = useHebrewStyles();
  let borderColor;
  if (disabled) borderColor = theme.palette.grey[700];
  else borderColor = theme.palette.primary.main;
  return (
    <Box
      className={clsx(classes.root, {
        [classes.rootDisabled]: disabled,
      })}
      {...rest}
    >
      <ChipTopLeft
        className={clsx(classes.border, classes.top_left_border)}
        fill={borderColor}
      />
      <ChipBottomLeft
        className={clsx(classes.border, classes.bottom_left_border)}
        fill={borderColor}
      />
      <ChipBottomRight
        className={clsx(classes.border, classes.bottom_right_border)}
        fill={borderColor}
      />
      <ChipTopRight
        className={clsx(classes.border, classes.top_right_border)}
        fill={borderColor}
      />
      <Box
        className={clsx(classes.chip_container, {
          [classes.disabled]: disabled,
        })}
        style={style}
      >
        <Typography sx={{ fontSize: 14 }} className={hebrewClasses.text}>
          {label}
        </Typography>
        <IconButton
          disabled={disabled}
          onClick={onDelete}
          onMouseDown={onMouseDown}
        >
          <CloseIcon color="primary" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default GuiChip;

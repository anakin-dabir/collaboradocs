import React from "react";
import { Stack } from "@mui/material";
import clsx from "clsx";
import { useGuiDialogStyles, useGuiModuleStyles } from "../themes";
import { ReactComponent as ModuleTopLeft } from "@/assets/module_top_left.svg";
import { ReactComponent as ModuleTopRight } from "@/assets/module_top_right.svg";
import { ReactComponent as ModuleBottomRight } from "@/assets/module_bottom_right.svg";
import { ReactComponent as ModuleBottomLeft } from "@/assets/module_bottom_left.svg";

const XStack = ({
  className = "",
  direction = "column",
  children,
  size = "small",
  disableBorder = false,
  ...props
}) => {
  const gui2_classes = useGuiModuleStyles();
  const dialogClasses = useGuiDialogStyles();
  return (
    <Stack
      direction={direction}
      className={clsx(className, gui2_classes.root, dialogClasses.container)}
      {...props}
    >
      {!disableBorder && (
        <>
          <ModuleTopLeft
            className={clsx(gui2_classes.border, gui2_classes.top_left_border)}
            style={{ transform: size === "small" ? "scale(0.7) translate(-21.43%, -21.43%)" : "" }}
          />
          <ModuleBottomLeft
            className={clsx(gui2_classes.border, gui2_classes.bottom_left_border)}
            style={{ transform: size === "small" ? "scale(0.7) translate(-21.43%, 21.43%)" : "" }}
          />
          <ModuleBottomRight
            className={clsx(gui2_classes.border, gui2_classes.bottom_right_border)}
            style={{ transform: size === "small" ? "scale(0.7) translate(21.43%, 21.43%)" : "" }}
          />
          <ModuleTopRight
            className={clsx(gui2_classes.border, gui2_classes.top_right_border)}
            style={{ transform: size === "small" ? "scale(0.7) translate(21.43%, -21.43%)" : "" }}
          />
        </>
      )}
      {children}
    </Stack>
  );
};

export default XStack;

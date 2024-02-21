import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import clsx from "clsx";
import { useGuiTooltipStyles } from "../themes";
import { ReactComponent as ModuleTopLeft } from "@/assets/module_top_left.svg";
import { ReactComponent as ModuleTopRight } from "@/assets/module_top_right.svg";
import { ReactComponent as ModuleBottomRight } from "@/assets/module_bottom_right.svg";
import { ReactComponent as ModuleBottomLeft } from "@/assets/module_bottom_left.svg";

const XTooltip = ({
  className = "",
  data = "Random Testing tooltip",
  children,
  placement = "right",
  error = false,
  ...props
}) => {
  const classes = useGuiTooltipStyles();
  return (
    <Tooltip
      {...props}
      title={
        <Box className={clsx(classes.root, className)}>
          <ModuleTopLeft
            className={clsx(
              { [classes.border_error]: error },
              classes.border,
              classes.top_left_border
            )}
            style={{ transform: "scale(0.7) translate(-21.43%, -21.43%)" }}
          />
          <ModuleBottomLeft
            className={clsx(
              { [classes.border_error]: error },
              classes.border,
              classes.bottom_left_border
            )}
            style={{ transform: "scale(0.7) translate(-21.43%, 21.43%)" }}
          />
          <ModuleBottomRight
            className={clsx(
              { [classes.border_error]: error },
              classes.border,
              classes.bottom_right_border
            )}
            style={{ transform: "scale(0.7) translate(21.43%, 21.43%)" }}
          />
          <ModuleTopRight
            className={clsx(
              { [classes.border_error]: error },
              classes.border,
              classes.top_right_border
            )}
            style={{ transform: "scale(0.7) translate(21.43%, -21.43%)" }}
          />
          {data}
        </Box>
      }
      placement={placement}
      arrow
    >
      {children}
    </Tooltip>
  );
};

export default React.memo(XTooltip);

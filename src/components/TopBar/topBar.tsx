import React, { useRef, useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, AppBar, Toolbar, Grid, Typography } from "@mui/material";
import clsx from "clsx";
import { useAppStyles } from "../../themes/themes";
import { useAppSelector } from "../../store/hooks";
import Clickable from "../Clickable";
import GuiTooltip from "../Tooltip";
import { ReactComponent as AppBarBottomRight } from "./../../img/app_bar_bottom_right.svg";
import { ReactComponent as AppBarBottomCenter } from "./../../img/app_bar_bottom_center.svg";
import { ReactComponent as AppBarTopRight } from "./../../img/app_bar_top_right.svg";

const TopBar = () => {
  const classes = useAppStyles();
  const { drawerOpen } = useAppSelector((state: any) => state.drawer);
  const { user } = useAppSelector((state: any) => state.user);
  const [topBarHeight, topBarHeightSet] = useState<number>(0);
  const topBarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (topBarRef.current) topBarHeightSet(topBarRef.current.offsetHeight);
  }, []);
  return (
    <AppBar
      position="fixed"
      ref={topBarRef}
      className={clsx(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
      })}
    >
      <div className={classes.top_bar_background} />
      <Toolbar>
        <Box pl={2} />
        <Grid container>
          <Clickable>
            <Grid item xs={10}>
              <RouterLink to="/brands">
                <Box
                  sx={{ display: "flex", alignItems: "center", height: "10vh" }}
                >
                  <img
                    style={{ width: "96px", height: "42px" }}
                    src="/assets/vector/Logo2.svg"
                    alt=""
                  />
                </Box>
              </RouterLink>
            </Grid>
          </Clickable>
          <Box px={1} />
          <Grid item xs={2}></Grid>
        </Grid>
        <Box flexGrow={1} />
        <Box pr={5}>
          <GuiTooltip placement="left" title={user.email}>
            <Box
              p={0.9}
              className={classes.userAvatar}
              sx={{ cursor: "default" }}
            >
              <Typography fontSize={14} fontWeight="bold">
                {user.firstName?.[0] + user.lastName?.[0]}
              </Typography>
            </Box>
          </GuiTooltip>
        </Box>
      </Toolbar>
      <AppBarBottomRight
        className={clsx(classes.border, classes.app_bar_bottom_right_border)}
      />
      <AppBarTopRight
        className={clsx(classes.border, classes.app_bar_top_right_border)}
      />
      <AppBarBottomCenter
        className={clsx(classes.border, classes.bottom_center_border)}
        style={{
          top: `${topBarHeight}px`,
          transform: "translateY(-100%)",
        }}
      />
    </AppBar>
  );
};

export default TopBar;

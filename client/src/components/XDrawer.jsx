import React from "react";
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import clsx from "clsx";
import { useAppStyles } from "../themes";
import XTooltip from "./XTooltip";

import { ReactComponent as DrawerBottomRight } from "@/assets/drawer_bottom_right.svg";
import { ReactComponent as DrawerCenterLeft } from "@/assets/drawer_center_left.svg";
import { ReactComponent as DrawerTopLeft } from "@/assets/drawer_top_left.svg";
import { ReactComponent as ChevronLeftIcon } from "@/assets/chevronLeft.svg";
import { ReactComponent as MenuIcon } from "@/assets/menuIcon.svg";

const XDrawer = ({ drawerOpen = true, drawerClose = false }) => {
  const classes = useAppStyles();
  const chevronLeftIcon = <ChevronLeftIcon />;
  const menuIcon = <MenuIcon />;
  return (
    <Drawer
      variant='permanent'
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen,
      })}
      classes={{
        paper: clsx(classes.drawerContainer, classes.drawer_container_gui2, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen,
        }),
      }}
    >
      <div className={clsx(classes.toolbar, classes.toolbar_gui2)}>
        <IconButton
          className={classes.blinking}
          style={{
            animationDelay: `${Math.floor(Math.random() * 11) * 100}ms`,
          }}
        >
          {drawerOpen ? chevronLeftIcon : menuIcon}
        </IconButton>
      </div>
      <div className={clsx(classes.sidebar, classes.sidebar_gui2)}></div>
      <DrawerBottomRight className={clsx(classes.border, classes.drawer_bottom_right_border)} />
      <DrawerCenterLeft className={clsx(classes.border, classes.drawer_center_left_border)} />
      <DrawerTopLeft className={clsx(classes.border, classes.drawer_top_left_border)} />
      {/* <DrawerOuter
        className={clsx(classes.border, classes.drawer_outer_border)}
        style={{ filter: "none" }}
      /> */}
      <div className={classes.drawer_outer_container} />
    </Drawer>
  );
};

export default XDrawer;

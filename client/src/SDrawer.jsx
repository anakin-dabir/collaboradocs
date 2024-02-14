import React from "react";
import { Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import clsx from "clsx";
import { useAppStyles } from "./themes";
import { ReactComponent as DrawerBottomRight } from "@/assets/drawer_bottom_right.svg";
import { ReactComponent as DrawerCenterLeft } from "@/assets/drawer_center_left.svg";
import { ReactComponent as DrawerTopLeft } from "@/assets/drawer_top_left.svg";
import { ReactComponent as ChevronLeftIcon } from "@/assets/chevronLeft.svg";
import { ReactComponent as MenuIcon } from "@/assets/menuIcon.svg";
import XStack from "./components/XStack";

const SDrawer = ({ drawerOpen = false, openSet }) => {
  const classes = useAppStyles();
  return (
    <Drawer
      variant='temporary'
      anchor='left'
      open={drawerOpen}
      onClose={() => openSet((pre) => !pre)}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen,
      })}
      //   classes={{
      //     paper: clsx(classes.drawerContainer, classes.drawer_container_gui2, {
      //       [classes.drawerOpen]: drawerOpen,
      //       [classes.drawerClose]: !drawerOpen,
      //     }),
      //   }}
    >
      <div className='h-screen w-52 bg-secondary_background/70'>
        <DrawerBottomRight className={clsx(classes.border, classes.drawer_bottom_right_border)} />
        <DrawerCenterLeft className={clsx(classes.border, classes.drawer_center_left_border)} />
        <DrawerTopLeft className={clsx(classes.border, classes.drawer_top_left_border)} />
        {/* <DrawerOuter
        className={clsx(classes.border, classes.drawer_outer_border)}
        style={{ filter: "none" }}
      /> */}
      </div>
    </Drawer>
  );
};

export default SDrawer;

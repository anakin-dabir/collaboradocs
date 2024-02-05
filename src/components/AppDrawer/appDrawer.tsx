import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import clsx from "clsx";
import _ from "lodash";
import { useAuth0 } from "@auth0/auth0-react";
import { persistStore } from "redux-persist";
import { useAppStyles } from "../../themes/themes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { drawerOpenSet } from "../../store/slice/drawerSlice";
import { store as reduxStore } from "../../store/store";
import GuiTooltip from "../Tooltip";
import Clickable from "../Clickable";
import { ReactComponent as DrawerBottomRight } from "../../img/drawer_bottom_right.svg";
import { ReactComponent as DrawerCenterLeft } from "./../../img/drawer_center_left.svg";
import { ReactComponent as DrawerTopLeft } from "./../../img/drawer_top_left.svg";
import { ReactComponent as DrawerOuter } from "./../../img/drawer_outer.svg";
import { ReactComponent as ChevronLeftIcon } from "./../../img/chevronLeft.svg";
import { ReactComponent as LogoutIcon } from "./../../img/logoutIcon.svg";
import { ReactComponent as ClientIcon } from "./../../img/clientIcon.svg";
import { ReactComponent as BrandIcon } from "./../../img/brandIcon.svg";
import { ReactComponent as UserIcon } from "./../../img/userIcon.svg";
import { ReactComponent as CategoryIcon } from "./../../img/categoryIcon.svg";
import { ReactComponent as SupplierIcon } from "./../../img/supplierIcon.svg";
import { ReactComponent as ProductIcon } from "./../../img/productIcon.svg";
import { ReactComponent as ChainIcon } from "./../../img/chainIcon.svg";
import { ReactComponent as StoreIcon } from "./../../img/storeIcon.svg";
import { ReactComponent as PromotionIcon } from "./../../img/promotionIcon.svg";
import { ReactComponent as AccountingIcon } from "./../../img/accountingIcon.svg";
import { ReactComponent as SettingIcon } from "./../../img/settingIcon.svg";
import { ReactComponent as MenuIcon } from "./../../img/menuIcon.svg";

const AppDrawer = () => {
  const { drawerOpen } = useAppSelector((state: any) => state.drawer);
  const { user } = useAppSelector((state: any) => state.user);
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const classes = useAppStyles();
  const { logout } = useAuth0();
  const Logout = async () => {
    const persistor = persistStore(reduxStore);
    const returnTo = `${window.location.protocol}//${window.location.host}/welcome`;
    await persistor.purge();
    logout({ logoutParams: { returnTo } });
  };
  let menuItems = [
    {
      href: "/users",
      title: "Users",
      tooltip: "Users",
      icon: UserIcon,
      isArkAdmin: true,
    },
    {
      href: "/category",
      title: "Category",
      tooltip: "Category",
      icon: CategoryIcon,
      isArkAdmin: true,
    },
    {
      href: "/brands",
      title: "Brands",
      tooltip: "Brands",
      icon: BrandIcon,
      isArkAdmin: true,
    },
    {
      href: "/suppliers",
      title: "Suppliers",
      tooltip: "Suppliers",
      icon: SupplierIcon,
      isArkAdmin: true,
    },
    {
      href: "/products",
      title: "Products",
      tooltip: "Products",
      icon: ProductIcon,
      isArkAdmin: true,
    },
    {
      href: "/chains",
      title: "Chains",
      tooltip: "Chains",
      icon: ChainIcon,
      isArkAdmin: true,
    },
    {
      href: "/clients",
      title: "Clients",
      tooltip: "Clients",
      icon: ClientIcon,
      isArkAdmin: true,
    },
    {
      href: "/store",
      title: "Stores",
      tooltip: "Stores",
      icon: StoreIcon,
      isArkAdmin: true,
    },
    {
      href: "/promotion",
      title: "Promotions",
      tooltip: "Promotions",
      icon: PromotionIcon,
      isArkAdmin: true,
    },
    {
      href: "/accounting",
      title: "Accounting",
      tooltip: "Accounting",
      icon: AccountingIcon,
      roles: ["StoreManager", "FinancialManager"],
      isArkAdmin: true,
    },
    {
      href: "/constants",
      title: (
        <span>
          System
          <br /> Constants
        </span>
      ),
      tooltip: "Systems Constants",
      icon: SettingIcon,
      isArkAdmin: true,
    },
  ];
  menuItems = menuItems.filter((item) => {
    if (!user || _.isEmpty(user)) return;
    if (item.isArkAdmin === user.isArkAdmin) return true;
    else if (item.roles) {
      for (let i = 0; i < user.storesRoles.length; i++) {
        for (let j = 0; j < user.storesRoles[i].roles.length; j++) {
          if (item.roles.includes(user.storesRoles[i].roles[j])) {
            return true;
          }
        }
      }
    }
    return false;
  });
  const onMenuItemClick = (href: string) => () => {
    if (href == pathname) return;
    navigate(href);
  };
  const chevronLeftIcon = <ChevronLeftIcon />;
  const menuIcon = <MenuIcon />;
  const isListItemActive = (href: string) => {
    return pathname.split("/")[1] == href.split("/")[1];
  };
  return (
    <Drawer
      variant="permanent"
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
          onClick={() => {
            dispatch(drawerOpenSet(!drawerOpen));
          }}
          style={{
            animationDelay: `${Math.floor(Math.random() * 11) * 100}ms`,
          }}
        >
          <Clickable>{drawerOpen ? chevronLeftIcon : menuIcon}</Clickable>
        </IconButton>
      </div>
      <div className={clsx(classes.sidebar, classes.sidebar_gui2)}>
        <List>
          {menuItems.map(({ href, title, tooltip, icon: Icon }) => (
            <GuiTooltip key={href} title={tooltip} placement="right">
              <div
                className={clsx(classes.listItem, classes.blinking, {
                  [classes.listItemActive]: isListItemActive(href),
                })}
                style={{
                  animationDelay: `${Math.floor(Math.random() * 11) * 100}ms`,
                }}
              >
                <Clickable>
                  <ListItem onClick={onMenuItemClick(href)}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                  </ListItem>
                </Clickable>
              </div>
            </GuiTooltip>
          ))}
          <GuiTooltip title="Logout" placement="right">
            <div className={clsx(classes.listItem)}>
              <Clickable>
                <ListItem
                  className={classes.blinking}
                  style={{
                    animationDelay: `${Math.floor(Math.random() * 11) * 100}ms`,
                  }}
                  onClick={Logout}
                >
                  <ListItemIcon>{<LogoutIcon />}</ListItemIcon>
                  <ListItemText primary="Log out" />
                </ListItem>
              </Clickable>
            </div>
          </GuiTooltip>
        </List>
      </div>
      <DrawerBottomRight
        className={clsx(classes.border, classes.drawer_bottom_right_border)}
      />
      <DrawerCenterLeft
        className={clsx(classes.border, classes.drawer_center_left_border)}
      />
      <DrawerTopLeft
        className={clsx(classes.border, classes.drawer_top_left_border)}
      />
      <DrawerOuter
        className={clsx(classes.border, classes.drawer_outer_border)}
        style={{ filter: "none" }}
      />
      <div className={classes.drawer_outer_container} />
    </Drawer>
  );
};

export default AppDrawer;

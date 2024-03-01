import React, {useState} from "react";
import XTooltip from "../XTooltip";
import {Avatar, Menu, MenuItem} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import clsx from "clsx";
import XStack from "../XStack";
import {useLocation, useNavigate} from "react-router-dom";
import {clearUser} from "../../store/slice/authSlice";
import config from "../../config/config";
import shortName from "../../utils/shortName";
import UserSettingDialog from "./UserSettingDialog";
import {clearSocket} from "../../store/slice/socketSlice";

const XAvatar = ({tooltipPlacement = "left", className}) => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const [isOpen, isOpenSet] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    if (pathname === config.PATHNAMES.LOGIN || pathname === config.PATHNAMES.REGISTER) return;
    if (!user) {
      navigate(config.PATHNAMES.LOGIN);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <UserSettingDialog isOpen={isOpen} isOpenSet={isOpenSet} />
      <XTooltip data={user ? user.email : "Login / Register"} placement={tooltipPlacement}>
        <Avatar
          onClick={handleClick}
          src={user?.img}
          className={clsx(className, `text-sm cursor-pointer`)}
        >
          {user ? shortName(user?.name) : "G8"}
        </Avatar>
      </XTooltip>

      {user && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        >
          <XStack className="py-4 w-44">
            <MenuItem
              onClick={() => {
                isOpenSet(true);
                handleClose();
              }}
            >
              Settings
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/request");
              }}
            >
              Requests
            </MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(clearUser());
                dispatch(clearSocket());
                navigate("/");
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </XStack>
        </Menu>
      )}
    </>
  );
};

export default XAvatar;

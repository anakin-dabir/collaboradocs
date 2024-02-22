import React, { useState } from "react";
import XTooltip from "./XTooltip";
import { Avatar, Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import XStack from "./XStack";
import { useLocation, useNavigate } from "react-router-dom";
import { clearUser } from "../store/slice/authSlice";

const XAvatar = ({ tooltipPlacement = "left", className }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (pathname === "/auth/login" || pathname === "/auth/register") return;
    if (!user) {
      navigate("/auth/register");
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <XTooltip data={user ? user.email : "Login / Register"} placement={tooltipPlacement}>
        <Avatar
          onClick={handleClick}
          src={user?.img}
          className={clsx(className, `text-sm cursor-pointer`)}
        >
          {user
            ? `${user.name[0].toUpperCase()}${user.name[user.name.length - 1].toUpperCase()}`
            : "G"}
        </Avatar>
      </XTooltip>

      {user && (
        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          onClick={handleClose}
        >
          <XStack className='py-4 w-44'>
            <MenuItem onClick={handleClose}>Settings</MenuItem>
            <MenuItem
              onClick={() => {
                dispatch(clearUser());
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

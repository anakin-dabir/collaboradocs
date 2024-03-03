import React, { useEffect } from "react";
import Xlogo from "./XLogo";
import XAvatar from "./XAvatar";
import XStack from "../XStack";
import { useGetNotificationQuery, useLazyGetNotificationQuery } from "../../services/nodeApi";
import { useSelector } from "react-redux";
import { ReactComponent as Notification } from "@/assets/custom/notification.svg";
import XTooltip from "../XTooltip";
import { useNavigate } from "react-router-dom";
import config from "../../config/config";
import XSocket from "../XSocket";

const XNavbar = ({ disableBorder = false }) => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const { isLoading } = useGetNotificationQuery({}, { skip: !isLogged });
  const [fetchNotification] = useLazyGetNotificationQuery();
  const notification = useSelector((state) => state.user.notification);
  const notificationLength = notification.length ? notification.filter((not) => !not.read) : [];
  const socket = useSelector((state) => state.socket.socket);
  useEffect(() => {
    const eventHandlers = [
      "event:documentAdded",
      "response:goingToAdmin",
      "response:GoingFromAdmin",
    ];

    const handleEvents = () => {
      eventHandlers.forEach((event) => socket.on(event, fetchNotification));
    };
    handleEvents();
    return () => {
      eventHandlers.forEach((event) => socket.off(event, fetchNotification));
    };
  }, [socket]);
  const navigate = useNavigate();
  return (
    <>
      {isLogged && <XSocket />}
      <XStack
        disableBorder={disableBorder}
        className={`!fixed !drop-shadow-none ${
          disableBorder ? "!bg-transparent" : "!bg-secondary_background/60"
        } left-8 right-8 top-2 py-4 z-20`}
      >
        <div className='flex justify-between container mx-auto max-w-screen-2xl px-4'>
          <Xlogo clickable />
          <div className='flex items-center gap-4'>
            {isLogged && (
              <div
                className='relative box-center cursor-pointer'
                onClick={() => navigate(config.PATHNAMES.NOTIFICATION)}
              >
                <XTooltip placement='left' data='Notification'>
                  <>
                    <Notification />
                    {notificationLength.length ? (
                      <div className='absolute w-3 h-3 bg-red-500 rounded-full -top-2 -right-2 text-xs box-center p-[12px]'>
                        {notificationLength.length > 9 ? "9+" : notificationLength.length}
                      </div>
                    ) : null}
                  </>
                </XTooltip>
              </div>
            )}

            <XAvatar />
          </div>
        </div>
      </XStack>
    </>
  );
};

export default XNavbar;

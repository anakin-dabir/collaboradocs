import React from 'react';
import XNavbar from '../../components/Custom/XNavbar';
import XStack from '../../components/XStack';
import BackButton from '../../components/Custom/BackButton';
import XDivider from '../../components/XDivider';
import {useSelector} from 'react-redux';
import getDate from '../../utils/getDate';
import XButton from '../../components/XButton';
import {useNavigate} from 'react-router-dom';
import {useDeleteNotificationMutation} from '../../services/nodeApi';
import XLoading from '../../components/XLoading';

const Notification = () => {
  const notifications = useSelector(state => state.user.notification);
  const navigate = useNavigate();
  const [deleteNotification, {isLoading}] = useDeleteNotificationMutation();
  return (
    <>
      <XNavbar />
      <XStack className='h-full flex-1 relative flex flex-row !drop-shadow-none !bg-secondary_background/60 px-2 py-4'>
        {isLoading ? (
          <XLoading absolute />
        ) : (
          <div className='h-full w-full overflow-y-auto mt-2'>
            <div className='container mx-auto max-w-screen-sm'>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between gap-2'>
                  <div className='flex items-center gap-2'>
                    <BackButton />
                    <div className='text-xl font-bold text-primary_main'>Notifications</div>
                  </div>
                  {notifications.length > 0 && (
                    <XButton
                      color='error'
                      onClick={() => {
                        deleteNotification();
                        navigate('/');
                      }}
                    >
                      Mark all as read & delete
                    </XButton>
                  )}
                </div>
                <XDivider />
                <div className='px-2 mt-4 flex flex-col gap-5'>
                  {notifications.length ? (
                    notifications.map((notification, index) => {
                      return (
                        <XStack
                          key={index}
                          className='flex flex-row items-center justify-between !drop-shadow-none !bg-secondary_background/90 p-5'
                        >
                          <div
                            className='flex items-center gap-3 cursor-pointer'
                            onClick={() => navigate(notification.link)}
                          >
                            <div className='flex flex-col'>
                              <div className='text-base text-primary_main'>{notification.msg}</div>
                              <div className='text-sm'>{getDate(notification.createdAt)}</div>
                            </div>
                          </div>
                        </XStack>
                      );
                    })
                  ) : (
                    <div className='text-base'>No Notifications yet</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </XStack>
    </>
  );
};

export default Notification;

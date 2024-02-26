import React from "react";
import XNavbar from "../../components/Custom/XNavbar";
import XStack from "../../components/XStack";
import XLoading from "../../components/XLoading";
import shortName from "../../utils/shortName";
import { Avatar, IconButton } from "@mui/material";
import { ReactComponent as Tick } from "@/assets/custom/tick.svg";
import { ReactComponent as Cross } from "@/assets/custom/cross.svg";
import XTooltip from "../../components/XTooltip";
import BackButton from "../../components/Custom/BackButton";
import XDivider from "../../components/XDivider";
import {
  useAcceptRequestMutation,
  useGetRequestGoingFromAdminQuery,
  useRejectRequestMutation,
} from "../../services/nodeApi";
import { useSelector } from "react-redux";

const Request = () => {
  const { isLoading, refetch } = useGetRequestGoingFromAdminQuery();
  const requests = useSelector((state) => state.request.goingFromAdmin);
  const [acceptRequest, { isLoading: isAcceptLoading }] = useAcceptRequestMutation();
  const [rejectRequest, { isLoading: isRejectLoading }] = useRejectRequestMutation();
  return (
    <>
      <XNavbar />
      <XStack className='h-full flex-1 relative flex flex-row !drop-shadow-none !bg-secondary_background/60 px-2 py-4'>
        {isLoading || isAcceptLoading || isRejectLoading ? (
          <XLoading absolute />
        ) : (
          <div className='h-full w-full overflow-y-auto mt-2'>
            <div className='container mx-auto max-w-screen-sm'>
              <div className='flex flex-col gap-4'>
                <div className='flex items-center gap-2'>
                  <BackButton />
                  <div className='text-xl font-bold text-primary_main'>Requests</div>
                </div>
                <XDivider />
                <div className='px-2 mt-4 flex flex-col gap-5'>
                  {requests.length ? (
                    requests.map((request, index) => {
                      return (
                        <XStack
                          key={index}
                          className='flex flex-row items-center justify-between !drop-shadow-none !bg-secondary_background/90 p-5'
                        >
                          <div className='flex items-center gap-3'>
                            <Avatar src={request.from?.img}>{shortName(request.from.name)}</Avatar>
                            <div className='flex flex-col'>
                              <div className='text-base font-bold text-primary_main'>
                                {request.from.name}
                              </div>
                              <div className='text-sm'>
                                Requested you to join project{" "}
                                <span className='font-bold'>{request.project.name}</span>
                              </div>
                            </div>
                          </div>
                          <div className='flex items-center gap-1'>
                            <XTooltip data='Accept' placement='top'>
                              <IconButton
                                onClick={() =>
                                  acceptRequest({
                                    projectId: request.project._id,
                                    userId: [request.to],
                                    reqId: request._id,
                                  })
                                }
                              >
                                <Tick />
                              </IconButton>
                            </XTooltip>
                            <XTooltip data='Reject' placement='top'>
                              <IconButton
                                onClick={() =>
                                  rejectRequest({
                                    reqId: request._id,
                                  })
                                }
                              >
                                <Cross />
                              </IconButton>
                            </XTooltip>
                          </div>
                        </XStack>
                      );
                    })
                  ) : (
                    <div className='text-base'>No requests yet</div>
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

export default Request;

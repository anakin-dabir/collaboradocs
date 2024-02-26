import React from "react";
import { useSelector } from "react-redux";
import { useAcceptRequestMutation, useRejectRequestMutation } from "../../../services/nodeApi";
import XStack from "../../../components/XStack";
import XChip from "../../../components/XChip";
import { Avatar, IconButton } from "@mui/material";
import shortName from "../../../utils/shortName";
import XTooltip from "../../../components/XTooltip";
import { ReactComponent as Tick } from "@/assets/custom/tick.svg";
import { ReactComponent as Cross } from "@/assets/custom/cross.svg";
import XLoading from "../../../components/XLoading";

const RequestSide = ({ id }) => {
  const requestArr = useSelector((state) => state.request.goingToAdmin);
  const requests = requestArr.filter((request) => request.project._id === id);
  const [acceptRequest, { isLoading: isAcceptLoading }] = useAcceptRequestMutation();
  const [rejectRequest, { isLoading: isRejectLoading }] = useRejectRequestMutation();
  return (
    <XStack className='!bg-secondary_background/90 !drop-shadow-none h-fit p-5 relative min-h-40'>
      {isAcceptLoading || isRejectLoading ? (
        <XLoading absolute />
      ) : (
        <div className='h-full w-full flex flex-col gap-5'>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
              <div className='text-lg font-bold text-primary_main'>Requests</div>
              <XChip label={requests.length} className='!px-3 !py-1' />
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            {requests.length ? (
              requests.map((request, index) => {
                return (
                  <div key={index} className='flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Avatar src={request.from?.img}>{shortName(request.from.name)}</Avatar>
                      <div className='flex flex-col'>
                        <div className='text-sm font-bold text-primary_main'>
                          {request.from.name}
                        </div>
                        <div className='text-xs'>Requested to join project</div>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <XTooltip data='Accept' placement='top'>
                        <IconButton
                          onClick={() =>
                            acceptRequest({
                              projectId: request.project._id,
                              userId: request.from._id,
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
                  </div>
                );
              })
            ) : (
              <div className='text-sm'>No requests yet</div>
            )}
          </div>
        </div>
      )}
    </XStack>
  );
};

export default RequestSide;

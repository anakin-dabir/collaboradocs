import React, { useEffect, useMemo, useState } from "react";
import XAlertBase from "../../../components/Alert/XAlertBase";
import { ReactComponent as Edit } from "@/assets/custom/edit.svg";
import { ReactComponent as CloseIcon } from "@/assets/close.svg";
import { Avatar, IconButton, alpha } from "@mui/material";
import XTooltip from "../../../components/XTooltip";
import XDivider from "../../../components/Custom/XDivider";
import XTextfield from "../../../components/XTextfield";
import theme from "../../../themes";
import XButton from "../../../components/XButton";
import shortName from "../../../utils/shortName";
import { ReactComponent as Delete } from "@/assets/custom/delete.svg";
import hasUpdates from "../../../utils/hasUpdates";
import { useUpdateProjectMutation } from "../../../services/nodeApi";

const Dialog = ({ isOpen, isOpenSet, project, user }) => {
  const [updateProject, { isLoading }] = useUpdateProjectMutation();
  const initials = { name: project.name, members: project.members };
  const [initialValues, initialValuesSet] = useState(initials);
  useEffect(() => {
    initialValuesSet(initials);
  }, [project]);

  const handleClose = () => {
    initialValuesSet(initials);
    isOpenSet(false);
  };

  const isUpdated = useMemo(() => hasUpdates(initialValues, initials), [initialValues]);
  async function handleSubmit() {
    if (hasUpdates(initialValues, initials)) {
      try {
        const res = await updateProject({
          projectId: project._id,
          name: initialValues.name,
          members: initialValues.members,
        });
      } catch (error) {}
    }
    isOpenSet(false);
  }
  return (
    <XAlertBase isOpen={isOpen} onClose={handleClose}>
      <div className='px-10 py-8 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <Edit className='size-7' />
            <div className='text-xl leading-3 font-bold text-primary_main'>Edit Project</div>
          </div>
          <XTooltip data='Close' placement='top'>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </XTooltip>
        </div>
        <XDivider />
        <div className='flex flex-col gap-3'>
          <XTextfield
            name='name'
            value={initialValues.name}
            onChange={(e) => initialValuesSet((pre) => ({ ...pre, name: e.target.value }))}
            label='Project Name'
            parentClassName='mt-8'
            error={!initialValues.name}
            helperText={!initialValues.name && "Project name is mandatory"}
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: `${alpha(theme.palette.common.black, 0.4)} !important`,
              },
            }}
          />
          <div className='flex flex-col mt-4 gap-2'>
            <div className='text-primary_main'>Members</div>
            <div className='flex gap-4 flex-wrap'>
              {initialValues.members.length > 1 ? (
                initialValues.members.map((member, index, arr) => {
                  return (
                    member._id !== user._id && (
                      <XTooltip key={index} data={member.name} placement='top'>
                        <div
                          className='relative group cursor-pointer'
                          onClick={() =>
                            initialValuesSet((pre) => ({
                              ...pre,
                              members: arr.filter((memberOrg) => memberOrg._id !== member._id),
                            }))
                          }
                        >
                          <Avatar src={member?.img}>{shortName(member.name)}</Avatar>
                          <Delete className='fill-error_main z-10 size-5 absolute absolute-center opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
                          <div
                            className='bg-black group-hover:opacity-100 opacity-0 absolute inset-0 transition-opacity duration-500'
                            style={{
                              clipPath: `polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)`,
                            }}
                          ></div>
                        </div>
                      </XTooltip>
                    )
                  );
                })
              ) : (
                <div className='text-sm'>No members to remove</div>
              )}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 mt-10'>
          <hr className='border-t border-t-primary_main' />
          <div className='flex gap-4 justify-end'>
            <XButton color='error' onClick={handleClose}>
              Cancel
            </XButton>
            <XButton
              loading={isLoading}
              disabled={!isUpdated || !initialValues.name}
              onClick={() => handleSubmit()}
            >
              Update
            </XButton>
          </div>
        </div>
      </div>
    </XAlertBase>
  );
};

export default Dialog;

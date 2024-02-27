import React, { useState } from "react";
import XAlertBase from "../Alert/XAlertBase";
import { ReactComponent as Edit } from "@/assets/custom/edit.svg";
import { ReactComponent as CloseIcon } from "@/assets/close.svg";
import XTooltip from "../XTooltip";
import { IconButton, alpha } from "@mui/material";
import XDivider from "./XDivider";
import XTextfield from "../XTextfield";
import XButton from "../XButton";
import theme from "../../themes";

const ToolbarImageDialog = ({ isOpen, handleClose, editor }) => {
  const prevURL = editor.getAttributes("image").src;
  const [url, urlSet] = useState(prevURL ? prevURL : "");

  return (
    <>
      <XAlertBase isOpen={isOpen} onClose={handleClose}>
        <div className='px-10 py-8 flex flex-col gap-4'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <Edit className='size-7' />
              <div className='text-xl leading-3 font-bold text-primary_main'>Add Image</div>
            </div>
            <XTooltip data='Close' placement='top'>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </XTooltip>
          </div>
          <XDivider />
          <div className='flex'>
            <XTextfield
              autoFocus
              name='image'
              value={url}
              onChange={(e) => urlSet(e.target.value)}
              label='Enter Image URL'
              parentClassName='mt-8'
              sx={{
                "& .MuiInputBase-root": {
                  backgroundColor: `${alpha(theme.palette.common.black, 0.4)} !important`,
                },
              }}
            />
          </div>

          <div className='flex flex-col gap-5 mt-10'>
            <hr className='border-t border-t-primary_main' />
            <div className='flex gap-4 justify-end'>
              <XButton color='error' onClick={handleClose}>
                Cancel
              </XButton>
              <XButton
                disabled={!url}
                onClick={() => {
                  if (url) editor.chain().focus().setImage({ src: url }).run();
                  handleClose();
                }}
              >
                Add Image
              </XButton>
            </div>
          </div>
        </div>
      </XAlertBase>
    </>
  );
};

export default ToolbarImageDialog;

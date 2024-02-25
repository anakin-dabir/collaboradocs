import React, { useState } from "react";
import XAlertBase from "../../../components/Alert/XAlertBase";
import { ReactComponent as Edit } from "@/assets/custom/edit.svg";
import { ReactComponent as CloseIcon } from "@/assets/close.svg";
import { IconButton, MenuItem, alpha } from "@mui/material";
import XTooltip from "../../../components/XTooltip";
import XDivider from "../../../components/Custom/XDivider";
import XTextfield from "../../../components/XTextfield";
import theme from "../../../themes";
import XButton from "../../../components/XButton";
import { useCreateDocumentMutation } from "../../../services/nodeApi";
import useValidation from "../../../formik/useValidation";
import { docValidationSchema } from "../../../formik/validationSchema";

const NewDocDialog = ({ isOpen, isOpenSet, id, refetch }) => {
  const [createDocument, { isLoading }] = useCreateDocumentMutation();
  const initialValues = { title: "", desc: "", visibility: "Public" };
  async function handleSubmit(values) {
    const res = await createDocument({
      title: values.title,
      desc: values.desc,
      visibility: values.visibility,
      projectId: id,
    });
    if (res) {
      refetch();
    }
    handleClose();
  }
  const formik = useValidation({
    initialValues,
    validationSchema: docValidationSchema,
    handleSubmit,
    enableReinitialize: true,
  });
  const handleClose = () => {
    isOpenSet(false);
    formik.handleReset();
  };
  return (
    <XAlertBase isOpen={isOpen} onClose={handleClose}>
      <div className='px-10 py-8 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <Edit className='size-7' />
            <div className='text-xl leading-3 font-bold text-primary_main'>Create Document</div>
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
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && !!formik.errors.title}
            helperText={formik.touched.title && !!formik.errors.title && "Title is mandatory"}
            label='Doc Title'
            parentClassName='mt-8'
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: `${alpha(theme.palette.common.black, 0.4)} !important`,
              },
            }}
          />
          <XTextfield
            name='desc'
            label='Doc Description'
            parentClassName='mt-8'
            value={formik.values.desc}
            onChange={formik.handleChange}
            error={formik.touched.desc && !!formik.errors.desc}
            helperText={formik.touched.desc && !!formik.errors.desc && "Desc is mandatory"}
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: `${alpha(theme.palette.common.black, 0.4)} !important`,
              },
            }}
          />
          <XTextfield
            label='Visibility'
            parentClassName='mt-8'
            select
            name='visibility'
            SelectProps={{
              renderValue: (val) => <div className='pt-2.5'>{val}</div>,
            }}
            value={formik.values.visibility}
            sx={{
              "& .MuiInputBase-root": {
                backgroundColor: `${alpha(theme.palette.common.black, 0.4)} !important`,
              },
            }}
          >
            {["Public", "Private", "Shared"].map((vis, index) => {
              return (
                <MenuItem
                  key={index}
                  value={vis}
                  onClick={() => formik.setFieldValue("visibility", vis)}
                >
                  {vis}
                </MenuItem>
              );
            })}
          </XTextfield>
        </div>

        <div className='flex flex-col gap-5 mt-10'>
          <hr className='border-t border-t-primary_main' />
          <div className='flex gap-4 justify-end'>
            <XButton color='error' onClick={handleClose}>
              Cancel
            </XButton>
            <XButton loading={isLoading} onClick={formik.handleSubmit}>
              Create
            </XButton>
          </div>
        </div>
      </div>
    </XAlertBase>
  );
};

export default NewDocDialog;

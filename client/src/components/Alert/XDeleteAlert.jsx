import React, { useState } from "react";
import { Box, IconButton, alpha } from "@mui/material";
import theme from "../../themes";
import { ReactComponent as Divider } from "@/assets/divider.svg";
import { useFormik } from "formik";
import * as yup from "yup";
import XAlertBase from "./XAlertBase";
import XButton from "../XButton";
import XTextfield from "../XTextfield";
import XTooltip from "../XTooltip";
import XDivider from "../Custom/XDivider";
import { ReactComponent as Delete } from "@/assets/custom/delete.svg";
import { ReactComponent as CloseIcon } from "@/assets/close.svg";

const XDeleteAlert = ({
  isOpen,
  onClose,
  handleDelete,
  firstStepText = "Are you sure you want to delete",
  entityName = "War of artcraft",
  entity = "Project",
  multiStep = true,
  isLoading = false,
}) => {
  const [stepOne, stepOneSet] = useState(true);
  const [stepTwo, stepTwoSet] = useState(false);

  const name_schema = yup.object({
    name: yup
      .string()
      .required(`${entity} name is mandatory`)
      .test({
        message: `Enter ${entityName} to delete`,
        test: (val) => {
          return val === entityName;
        },
      }),
  });

  const initialValues = {
    name: "",
  };

  const handleDeleteClick = () => {
    if (formik.touched.name && formik.errors.name) return;
    handleDelete();
    onClose();
  };

  const formik = useFormik({
    validationSchema: name_schema,
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: handleDeleteClick,
  });
  const handleClose = () => {
    onClose();
    stepTwoSet(false);
    stepOneSet(true);
    formik.resetForm();
  };

  return (
    <>
      <XAlertBase onClose={handleClose} open={isOpen} maxWidth='sm' fullWidth>
        <div className='flex flex-col px-10 py-8 gap-4'>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-end'>
              <Delete className='fill-error_main size-5' />
              <div className='text-xl leading-4 font-bold text-primary_main'>Delete</div>
            </div>
            <XTooltip data='Close' placement='top'>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </XTooltip>
          </div>
          <XDivider />
          <form onSubmit={formik.handleSubmit}>
            {stepOne && <Box>{firstStepText}</Box>}
            {multiStep && stepTwo && (
              <Box className='flex flex-col gap-4'>
                <div>
                  Enter the name <span className='font-bold'>{entityName}</span> to delete
                </div>
                <Box>
                  <XTextfield
                    name='name'
                    sx={{
                      "& .MuiInputBase-root": {
                        backgroundColor: `${alpha(theme.palette.common.black, 0.4)} !important`,
                      },
                    }}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    error={formik.touched.name && !!formik.errors.name}
                    helperText={formik.touched.name && !!formik.errors.name && formik.errors.name}
                  />
                </Box>
              </Box>
            )}
            <div className='flex flex-col gap-3 mt-20'>
              <hr className='border-t border-t-primary_main' />
              <Box
                display='flex'
                flexDirection='row'
                alignItems='center'
                justifyContent='right'
                className='mt-2'
              >
                <Box className='mr-4'>
                  <XButton
                    variant='outlined'
                    color='error'
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        if (stepTwo) {
                          stepTwoSet(false);
                          stepOneSet(true);
                        }
                        formik.resetForm();
                      }, 400);
                    }}
                  >
                    Cancel
                  </XButton>
                </Box>
                {multiStep && stepTwo && (
                  <Box>
                    <XButton
                      type='submit'
                      variant='outlined'
                      loading={isLoading}
                      onClick={formik.handleSubmit}
                    >
                      Delete
                    </XButton>
                  </Box>
                )}
                {stepOne && (
                  <Box>
                    <XButton
                      variant='outlined'
                      type={multiStep ? "button" : "submit"}
                      onClick={() => {
                        if (!multiStep) {
                          handleDelete();
                          onClose();
                          return;
                        }
                        stepOneSet(false);
                        stepTwoSet(true);
                      }}
                    >
                      Delete
                    </XButton>
                  </Box>
                )}
              </Box>
            </div>
          </form>
        </div>
      </XAlertBase>
    </>
  );
};

export default XDeleteAlert;

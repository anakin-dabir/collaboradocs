import React from "react";
import XAlertBase from "../../../components/Alert/XAlertBase";
import { ReactComponent as Edit } from "@/assets/custom/edit.svg";
import { ReactComponent as CloseIcon } from "@/assets/close.svg";
import { IconButton, alpha } from "@mui/material";
import XTooltip from "../../../components/XTooltip";
import XDivider from "../../../components/Custom/XDivider";
import XTextfield from "../../../components/XTextfield";
import theme from "../../../themes";
import XButton from "../../../components/XButton";
import useValidation from "../../../formik/useValidation";
import { nameValidationSchema } from "../../../formik/validationSchema";
import { useCreateProjectMutation } from "../../../services/nodeApi";
import { useNavigate } from "react-router-dom";

const Dialog = ({ isOpen, isOpenSet }) => {
  const [createProject, { isLoading }] = useCreateProjectMutation();
  const initialValues = { name: "" };
  const navigate = useNavigate();

  const formik = useValidation({
    initialValues,
    validationSchema: nameValidationSchema,
    handleSubmit,
  });
  const handleClose = () => {
    formik.resetForm();
    isOpenSet(false);
  };
  async function handleSubmit(values) {
    try {
      const response = await createProject(values);
      setTimeout(() => {
        if (response) navigate(`/project/${response.data.project._id}`);
      }, 400);
    } catch (error) {}
    handleClose();
  }
  return (
    <XAlertBase isOpen={isOpen} onClose={handleClose}>
      <div className='px-10 py-8 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <Edit className='size-7' />
            <div className='text-xl leading-3 font-bold text-primary_main'>Create New Project</div>
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
            name='name'
            value={formik.values.name}
            onChange={formik.handleChange}
            label='Project Name'
            parentClassName='mt-8'
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.touched.name && !!formik.errors.name && "Project name is mandatory"}
            placeholder='Enter Project Name'
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
            <XButton loading={isLoading} onClick={formik.handleSubmit}>
              Create
            </XButton>
          </div>
        </div>
      </div>
    </XAlertBase>
  );
};

export default Dialog;

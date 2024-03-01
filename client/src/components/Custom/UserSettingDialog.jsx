import React, {useState} from 'react';
import {ReactComponent as Edit} from '@/assets/custom/edit.svg';
import {ReactComponent as CloseIcon} from '@/assets/close.svg';
import {IconButton, alpha} from '@mui/material';
import {useUpdateNameMutation} from '../../services/nodeApi';
import {useSelector} from 'react-redux';
import useValidation from '../../formik/useValidation';
import {nameImgValidationSchema} from '../../formik/validationSchema';
import XAlertBase from '../Alert/XAlertBase';
import XTooltip from '../XTooltip';
import XDivider from '../XDivider';
import XTextfield from '../XTextfield';
import XButton from '../XButton';
import theme from '../../themes';

const UserSettingDialog = ({isOpen, isOpenSet}) => {
  const [updateName, {isLoading}] = useUpdateNameMutation();
  const user = useSelector(state => state.user.user);
  const initialValues = {name: user?.name, img: user?.img};

  const formik = useValidation({
    initialValues,
    validationSchema: nameImgValidationSchema,
    handleSubmit,
    enableReinitialize: true,
  });
  const handleClose = () => {
    formik.resetForm();
    isOpenSet(false);
  };
  async function handleSubmit(values) {
    updateName(values);
    handleClose();
  }
  return (
    <XAlertBase isOpen={isOpen} onClose={handleClose} fullWidth={true}>
      <div className='px-10 py-8 flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <Edit className='size-7' />
            <div className='text-xl leading-3 font-bold text-primary_main'>Edit User</div>
          </div>
          <XTooltip data='Close' placement='top'>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </XTooltip>
        </div>
        <XDivider />
        <div className='flex'>
          <XTextfield value={user?.email} disabled label='Email' parentClassName='mt-8' />
        </div>
        <div className='flex'>
          <XTextfield
            name='name'
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            label='Name'
            parentClassName='mt-8'
            error={formik.touched.name && !!formik.errors.name}
            helperText={formik.touched.name && !!formik.errors.name && 'Name is mandatory'}
            sx={{
              '& .MuiInputBase-root': {
                backgroundColor: `${alpha(theme.palette.common.black, 0.4)} !important`,
              },
            }}
          />
        </div>
        <div className='flex'>
          <XTextfield
            name='img'
            autoFocus
            value={formik.values.img}
            onChange={formik.handleChange}
            label='Avatar URL'
            parentClassName='mt-8'
            error={formik.touched.img && !!formik.errors.img}
            helperText={formik.touched.img && !!formik.errors.img && 'URL is mandatory'}
            sx={{
              '& .MuiInputBase-root': {
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
              Edit
            </XButton>
          </div>
        </div>
      </div>
    </XAlertBase>
  );
};

export default UserSettingDialog;

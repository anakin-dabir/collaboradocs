import React, {useState} from 'react';
import {Box} from '@mui/material';
import GuiButton from '../GuiButton';
import GuiDialog from './GuiDialog';
import GuiTextField from '../TextField';
import {ReactComponent as Divider} from './../../img/divider.svg';

const DeleteDialog = ({
  open,
  deleteModalCloseHandle,
  handleDelete,
  firstStepText,
  secondStepText,
  entityName,
  entity,
  title,
  message,
  multiStep = true,
}) => {
  const [stepOne, stepOneSet] = useState(true);
  const [stepTwo, stepTwoSet] = useState(false);

  // const name_schema = yup.object({
  //   name: yup
  //     .string()
  //     .required(`${entity} is mandatory`)
  //     .test({
  //       message: message,
  //       test: val => {
  //         return val === entityName;
  //       },
  //     }),
  // });

  // const initialValues: FormValue = {
  //   name: '',
  // };

  const handleDeleteClick = () => {
    // if (formik.touched.name && formik.errors.name) return;
    // handleDelete();
    // deleteModalCloseHandle();
  };

  // const formik = useFormik({
  //   validationSchema: name_schema,
  //   initialValues: initialValues,
  //   enableReinitialize: true,
  //   onSubmit: handleDeleteClick,
  // });

  return (
    <>
      <GuiDialog
        onClose={() => {
          deleteModalCloseHandle();
          stepTwoSet(false);
          stepOneSet(true);
        }}
        open={open}
        maxWidth='sm'
        fullWidth
        heading={title}
      >
        <form
        // onSubmit={formik.handleSubmit}
        >
          {stepOne && (
            <Box pl={3} pr={3} pb={12}>
              {firstStepText}
            </Box>
          )}
          {multiStep && stepTwo && (
            <Box pl={3} pr={3} pb={4}>
              {secondStepText}
              <Box pt={2} px={5} pb={1}>
                <GuiTextField
                  name='name'
                  // onChange={formik.handleChange}
                  // value={formik.values.name}
                  value={''}
                  error={false}
                  onChange={() => {}}
                  placeholder=''
                  type='text'
                  variant='outlined'
                  fullWidth
                  border={false}
                  // error={formik.touched.name && !!formik.errors.name}
                />
                {/* {formik.touched.name && formik.errors.name && (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                )} */}
              </Box>
            </Box>
          )}
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Divider />
          </Box>
          <Box display='flex' flexDirection='row' alignItems='center' justifyContent='right' p={4}>
            <Box mr={3}>
              <Clickable>
                <GuiButton
                  variant='outlined'
                  color='error'
                  onClick={() => {
                    deleteModalCloseHandle();
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
                </GuiButton>
              </Clickable>
            </Box>
            {multiStep && stepTwo && (
              <Box>
                <GuiButton type='submit' variant='outlined'>
                  Delete
                </GuiButton>
              </Box>
            )}
            {stepOne && (
              <Box>
                <GuiButton
                  variant='outlined'
                  type={multiStep ? 'button' : 'submit'}
                  onClick={() => {
                    if (!multiStep) {
                      handleDelete();
                      deleteModalCloseHandle();
                      return;
                    }
                    stepOneSet(false);
                    stepTwoSet(true);
                  }}
                >
                  Delete
                </GuiButton>
              </Box>
            )}
          </Box>
        </form>
      </GuiDialog>
    </>
  );
};

export default DeleteDialog;

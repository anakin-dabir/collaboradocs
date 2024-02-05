import React, { useState, useEffect } from "react";
import {
  Box,
  DialogTitle,
  Typography,
  FormHelperText,
  Stack,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import { useHeadingStyles } from "../../themes/themes";
import GuiButton from "../Button";
import GuiDialog from "../Dialog";
import GuiTextField from "../TextField";
import Clickable from "../Clickable";
import { ReactComponent as DividerBoth } from "./../../img/divider_both.svg";
import { ReactComponent as Divider } from "./../../img/divider.svg";
import { ReactComponent as WarningIcon } from "./../../img/warning.svg";
import { IDeleteDialog } from "./deleteDialog.interface";

interface FormValue {
  name: string;
}

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
}: IDeleteDialog) => {
  const [stepOne, stepOneSet] = useState<boolean>(true);
  const [stepTwo, stepTwoSet] = useState<boolean>(false);
  const headingClasses = useHeadingStyles();

  const name_schema = yup.object({
    name: yup
      .string()
      .required(`${entity} is mandatory`)
      .test({
        message: message,
        test: (val) => {
          return val === entityName;
        },
      }),
  });

  const initialValues: FormValue = {
    name: "",
  };

  const handleDeleteClick = () => {
    if (formik.touched.name && formik.errors.name) return;
    handleDelete();
    deleteModalCloseHandle();
  };

  const formik = useFormik({
    validationSchema: name_schema,
    initialValues: initialValues,
    enableReinitialize: true,
    onSubmit: handleDeleteClick,
  });

  return (
    <>
      <GuiDialog
        onClose={() => {
          deleteModalCloseHandle();
          stepTwoSet(false);
          stepOneSet(true);
        }}
        open={open}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Stack direction="row">
            <Box mr={2}>
              <WarningIcon />
            </Box>
            <Box>
              <Typography className={headingClasses.heading}>
                {title}
              </Typography>
            </Box>
          </Stack>
          <Box>
            <DividerBoth style={{ width: "100%" }} />
          </Box>
        </DialogTitle>
        <form onSubmit={formik.handleSubmit}>
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
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  placeholder=""
                  type="text"
                  variant="outlined"
                  fullWidth
                  border={false}
                  error={formik.touched.name && !!formik.errors.name}
                />
                {formik.touched.name && formik.errors.name && (
                  <FormHelperText error>{formik.errors.name}</FormHelperText>
                )}
              </Box>
            </Box>
          )}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Divider />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="right"
            p={4}
          >
            <Box mr={3}>
              <Clickable>
                <GuiButton
                  variant="outlined"
                  color="error"
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
                <Clickable>
                  <GuiButton type="submit" variant="outlined">
                    Delete
                  </GuiButton>
                </Clickable>
              </Box>
            )}
            {stepOne && (
              <Box>
                <Clickable>
                  <GuiButton
                    variant="outlined"
                    type={multiStep ? "button" : "submit"}
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
                </Clickable>
              </Box>
            )}
          </Box>
        </form>
      </GuiDialog>
    </>
  );
};

export default DeleteDialog;

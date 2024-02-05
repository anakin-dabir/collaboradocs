import React, { useState } from "react";
import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useUpdateUserTOCMutation } from "../../services/nodeAPI";
import { persistStore } from "redux-persist";
import * as yup from "yup";
import { useFormik } from "formik";
import { useHebrewStyles, useTabsStyles } from "../../themes/themes";
import { useAppSelector } from "../../store/hooks";
import { store as reduxStore } from "../../store/store";
import GuiButton from "../Button";
import GuiCheckbox from "../Checkbox";
import GuiDialog from "../Dialog";
import { ITocDialogUnsigned } from "./tocDialogUnsigned.interface";
import TocContent from "../TocContent";
import PrivacyPolicyContent from "../PrivacyPolicyContent";

const tabs = [
  {
    name: "toc",
    text: "מדיניות שימוש",
  },
  {
    name: "privacyPolicy",
    text: "מדיניות פרטיות",
  },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return (
    <div hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const tocSchema = yup.object({
  signed: yup
    .boolean()
    .required(
      `יש לאשר את תנאי השימוש ומדיניות הפרטיות ביישומון על מנת להתחיל את השימוש בו או לחילופין ללחוץ על כפתור ביטול`
    ),
});

const TocDialogUnsigned = ({ open, openSet }: ITocDialogUnsigned) => {
  const hebrewClasses = useHebrewStyles();
  const tabClasses = useTabsStyles();
  const navigate = useNavigate();
  const { user } = useAppSelector((state: any) => state.user);
  const [tab, tabSet] = useState<number>(0);
  const [error, errorSet] = useState<string>("");
  const [isPrivacyPolicyViewed, isPrivacyPolicyViewedSet] =
    useState<boolean>(false);
  const [updateUserToc, { isLoading: isUpdateLoading }] =
    useUpdateUserTOCMutation();
  const { logout } = useAuth0();
  const Logout = async () => {
    const persistor = persistStore(reduxStore);
    const returnTo = `${window.location.protocol}//${window.location.host}/welcome`;
    await persistor.purge();
    logout({ logoutParams: { returnTo } });
  };
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    tabSet(newValue);
    if (newValue === 1) {
      isPrivacyPolicyViewedSet(true);
      if(error) errorSet("");
    }
  };
  // let isVersion1;
  // const checkFM = user?.storesRoles?.some((store: any) =>
  //   store.roles.includes("FinancialManager")
  // );
  // const checkSM = user?.storesRoles?.some((store: any) =>
  //   store.roles.includes("StoreManager")
  // );
  // if (checkFM) isVersion1 = true;
  // else if (!checkFM && checkSM) isVersion1 = false;
  // else isVersion1 = true;
  const formik = useFormik({
    validationSchema: tocSchema,
    initialValues: {
      signed: false,
    },
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      errorSet("");
      if (!values.signed) {
        formik.setFieldError(
          "signed",
          `יש לאשר את תנאי השימוש באפליקציה זו. אם אינך מעוניין/ת לאשר את תנאי השימוש באפליקציה זו, יש ללחוץ על כפתור ביטול`
        );
        return;
      }
      const res = await updateUserToc(user._id);
      if ("data" in res) {
        navigate(
          user && !user.isArkAdmin && user.storesRoles.length
            ? "/accounting"
            : "/users"
        );
        openSet(false);
        resetForm();
      }
    },
  });
  return (
    <>
      <GuiDialog
        onClose={() => {
          Logout();
          openSet(false);
          formik.resetForm();
        }}
        open={open}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent>
          <Box position="relative">
            <Box
              sx={{ borderBottom: 2, borderColor: "#18FFFF" }}
              position="relative"
              mt={2}
            >
              <Box
                display="flex"
                alignItems="center"
                position="absolute"
                left={0}
                top={-8}
              ></Box>
              <Tabs
                value={tab}
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    background: "none",
                  },
                }}
                dir="rtl"
              >
                {tabs.map((el: { name: string; text: string }, i: number) => (
                  <Tab
                    key={el.name}
                    label={
                      <Typography
                        fontWeight={tab === i ? "bold" : "normal"}
                        fontSize={19}
                        sx={{ letterSpacing: 0.2 }}
                        className={hebrewClasses.text}
                      >
                        {el.text}
                      </Typography>
                    }
                    className={tab === i ? tabClasses.selected : ""}
                  />
                ))}
              </Tabs>
            </Box>
            <TabPanel value={tab} index={0}>
              <Box sx={{ maxHeight: "50vh", overflowY: "auto" }}>
                <TocContent />
              </Box>
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <Box sx={{ maxHeight: "50vh", overflowY: "auto" }}>
                <PrivacyPolicyContent />
              </Box>
            </TabPanel>
          </Box>
          {/* <Box>
            {isVersion1 !== undefined && (
              <Typography variant="subtitle1">
                ({isVersion1 ? "Version 1" : "Version 2"}) Lorem ipsum dolor sit
              </Typography>
            )}
          </Box> */}
        </DialogContent>
        <form>
          <Box pr={3} pb={3}>
            <Box dir="rtl" display="flex" alignItems="center">
              <Box
                display="flex"
                alignItems="center"
                onClick={() => {
                  if (!isPrivacyPolicyViewed) {
                    errorSet(
                      "נא לקרוא בנוסף את מדיניות הפרטיות בכדי לאשר את התנאים"
                    );
                  }
                }}
              >
                <GuiCheckbox
                  name="signed"
                  onChange={formik.handleChange}
                  value={formik.values.signed}
                  disabled={!isPrivacyPolicyViewed}
                />
                <Typography className={hebrewClasses.text}>
                  אני מאשר/ת שקראתי את תנאי השימוש ומדיניות הפרטיות ביישומון
                  ואני מסכים/ה להם
                </Typography>
              </Box>
            </Box>
            {error ? (
              <FormHelperText
                className={hebrewClasses.text}
                sx={{
                  textAlign: "right",
                  direction: "rtl",
                  fontSize: 15,
                  textShadow: "none",
                }}
                error
              >
                {error}
              </FormHelperText>
            ) : (
              formik.touched.signed &&
              formik.errors.signed && (
                <FormHelperText
                  className={hebrewClasses.text}
                  sx={{
                    textAlign: "right",
                    direction: "rtl",
                    fontSize: 15,
                    textShadow: "none",
                  }}
                  error
                >
                  {formik.errors.signed}
                </FormHelperText>
              )
            )}
          </Box>
        </form>
        <DialogActions sx={{ paddingRight: 5, paddingBottom: 4 }}>
          <GuiButton
            className={hebrewClasses.text}
            color="error"
            onClick={() => {
              Logout();
              openSet(false);
            }}
          >
            סגור
          </GuiButton>
          <Box px={0.5} />
          <GuiButton
            loading={isUpdateLoading}
            disabled={isUpdateLoading}
            className={hebrewClasses.text}
            onClick={formik.handleSubmit}
          >
            אישור
          </GuiButton>
        </DialogActions>
      </GuiDialog>
    </>
  );
};

export default TocDialogUnsigned;

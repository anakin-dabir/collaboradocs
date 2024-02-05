import React, { Dispatch, SetStateAction } from "react";
import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormHelperText,
  IconButton,
} from "@mui/material";
import { useHebrewStyles } from "../../themes/themes";
import GuiDialog from "../Dialog";
import TocContent from "../TocContent";
import GuiButton from "../Button";
import PrivacyPolicyContent from "../PrivacyPolicyContent";
import { ReactComponent as CloseIcon } from "./../../img/close.svg";

interface ITocDialogSigned {
  open: boolean;
  openSet: Dispatch<SetStateAction<boolean>>;
  isToc: boolean;
}

export default function TocDialogSigned({
  open,
  openSet,
  isToc,
}: ITocDialogSigned) {
  const hebrewClasses = useHebrewStyles();
  return (
    <GuiDialog
      onClose={() => {
        openSet(false);
      }}
      open={open}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle>
        <Box
          sx={{ display: "flex", justifyContent: "space-between" }}
          pr={1}
          dir="rtl"
        >
          <Box pt={1}>
            <IconButton
              onClick={() => {
                openSet(false);
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ maxHeight: "68vh", overflowY: "auto" }}>
          {isToc ? <TocContent /> : <PrivacyPolicyContent />}
        </Box>
      </DialogContent>
      <DialogActions sx={{ paddingRight: 5, paddingBottom: 4 }}>
        <GuiButton
          className={hebrewClasses.text}
          color="error"
          onClick={() => {
            openSet(false);
          }}
        >
          סגור
        </GuiButton>
      </DialogActions>
    </GuiDialog>
  );
}

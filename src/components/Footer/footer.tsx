import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TocDialogSigned from "../TocDialogSigned";
import { IFooter } from "./footer.interface";

const Footer = ({ fixed }: IFooter) => {
  const [open, openSet] = useState<boolean>(false);
  const [isToc, isTocSet] = useState<boolean>(true);
  const position = fixed ? "absolute" : "static";
  return (
    <>
      <TocDialogSigned open={open} openSet={openSet} isToc={isToc} />
      <Box
        sx={{ display: "flex" }}
        mt={8}
        p={fixed ? 4 : 0}
        style={{ bottom: 0, position }}
      >
        <Box display="flex">
          <Typography
            sx={{ cursor: "pointer" }}
            color="#18ffff"
            onClick={() => {
              openSet(true);
              isTocSet(true);
            }}
          >
            Terms and Conditions
          </Typography>
          <Typography
            pl={6}
            sx={{ cursor: "pointer" }}
            color="#18ffff"
            onClick={() => {
              openSet(true);
              isTocSet(false);
            }}
          >
            Privacy Policy
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

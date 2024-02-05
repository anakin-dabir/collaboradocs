import React, { useCallback, useMemo } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";
import GuiBox from "../Box";
import GuiButton from "../Button";
import { ReactComponent as GalleryIcon } from "./../../img/gallery.svg";

const focusedStyle = {
  borderColor: "#18FFFF",
};

const acceptStyle = {
  borderColor: "#18FFFF",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export default function GuiFileUpload({
  formik,
  name,
  src,
  selectedFileSet,
  height,
  tabIndex,
}: any) {
  const baseStyle = {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
    borderColor: "#0E8F9E",
    borderWidth: 1,
    borderStyle: "dashed",
    outline: "none",
    transition: "border .24s ease-in-out",
    height: height || "120px",
  };
  const onDrop = useCallback(
    (files: any) => {
      if (!files.length) return;
      selectedFileSet(files[0]);
      formik?.setFieldValue(name, files[0]);
    },
    [selectedFileSet, formik]
  );
  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    fileRejections,
  } = useDropzone({
    accept: {
      "image/jpeg": [".jpeg", ".jpg"],
      "image/png": [".png"],
      "image/gif": [".gif"],
      "image/tiff": [".tiff"],
      "image/tif": [".tif"],
    },
    multiple: false,
    onDrop,
  });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );
  return (
    <>
      <Box>
        <div {...getRootProps({ style } as any)}>
          {src && (
            <GuiBox
              style={{
                width: 80,
                height: 75,
                overflow: "hidden",
                position: "relative",
                backgroundColor: "#FFFFFF",
              }}
            >
              <img
                src={src}
                alt="Product Image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </GuiBox>
          )}
          {!src && (
            <>
              <input {...getInputProps()} />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <GalleryIcon />
              </Box>
              <Stack direction="row" alignItems="center">
                <Typography sx={{ opacity: 0.5 }}>
                  Drop logo here, or
                </Typography>
                <Box>
                  <GuiButton
                    tabIndex={tabIndex}
                    border={false}
                    style={{ textTransform: "lowercase" }}
                    type="button"
                  >
                    click to browse
                  </GuiButton>
                </Box>
              </Stack>
            </>
          )}
        </div>
      </Box>
      {fileRejections.length > 0 && (
        <small style={{ color: "red" }}>Invalid image format</small>
      )}
    </>
  );
}

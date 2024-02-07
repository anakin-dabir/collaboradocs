import React, {useCallback, useMemo} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {useDropzone} from 'react-dropzone';
import {ReactComponent as GalleryIcon} from '/public/gallery.svg';
import XStack from './XStack';
import XButton from './XButton';
import clsx from 'clsx';

const focusedStyle = {
  borderColor: '#18FFFF',
};

const acceptStyle = {
  borderColor: '#18FFFF',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

export default function XFileUpload({
  // formik,
  name,
  src = '',
  fileSet,
  height,
  tabIndex,
  className = '',
}) {
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '1rem',
    borderColor: '#0E8F9E',
    borderWidth: 1,
    borderStyle: 'dashed',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    height: height || '120px',
  };
  const onDrop = useCallback(
    files => {
      if (!files.length) return;
      fileSet(files[0]);
      // formik?.setFieldValue(name, files[0]);
    },
    [
      fileSet,
      // formik
    ]
  );
  const {getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, fileRejections} =
    useDropzone({
      // accept: {
      //   'image/jpeg': ['.jpeg', '.jpg'],
      //   'image/png': ['.png'],
      //   'image/gif': ['.gif'],
      //   'image/tiff': ['.tiff'],
      //   'image/tif': ['.tif'],
      // },
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
  console.log(src);
  return (
    <>
      <Box className={clsx('flex flex-col gap-2', className)}>
        <div {...getRootProps({style})}>
          {src && (
            <XStack
              style={{
                width: 80,
                height: 75,
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#FFFFFF',
              }}
            >
              <img
                src={src}
                alt={src}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </XStack>
          )}
          {!src && (
            <Stack gap={1}>
              <input {...getInputProps()} />
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <GalleryIcon />
              </Box>
              <Stack direction='row' alignItems='center' gap={1}>
                <Typography sx={{opacity: 0.5}}>Drop logo here, or</Typography>
                <Box>
                  <XButton
                    tabIndex={tabIndex}
                    border={false}
                    style={{textTransform: 'lowercase'}}
                    type='button'
                  >
                    click to browse
                  </XButton>
                </Box>
              </Stack>
            </Stack>
          )}
        </div>
        {fileRejections.length > 0 && <small style={{color: 'red'}}>Invalid image format</small>}
      </Box>
    </>
  );
}

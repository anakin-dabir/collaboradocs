import React from 'react';
import {Box, Typography, IconButton} from '@mui/material';
import clsx from 'clsx';
import theme, {useGuiChipStyles} from '@/themes';
import {ReactComponent as ChipTopLeft} from '@/assets/chipTopLeft.svg';
import {ReactComponent as ChipTopRight} from '@/assets/chipTopRight.svg';
import {ReactComponent as ChipBottomRight} from '@/assets/chipBottomRight.svg';
import {ReactComponent as ChipBottomLeft} from '@/assets/chipBottomLeft.svg';
import {ReactComponent as CloseIcon} from '@/assets/crossIcon.svg';

const XChip = ({label = 'Demo Chip', disabled = false, onDelete, className = '', ...rest}) => {
  const classes = useGuiChipStyles();
  let borderColor;
  if (disabled) borderColor = theme.palette.grey[700];
  else borderColor = theme.palette.primary.main;
  return (
    <Box
      className={clsx(className, classes.root, {
        [classes.rootDisabled]: disabled,
      })}
      {...rest}
    >
      <ChipTopLeft className={clsx(classes.border, classes.top_left_border)} fill={borderColor} />
      <ChipBottomLeft
        className={clsx(classes.border, classes.bottom_left_border)}
        fill={borderColor}
      />
      <ChipBottomRight
        className={clsx(classes.border, classes.bottom_right_border)}
        fill={borderColor}
      />
      <ChipTopRight className={clsx(classes.border, classes.top_right_border)} fill={borderColor} />
      <Box
        className={clsx(classes.chip_container, {
          [classes.disabled]: disabled,
        })}
      >
        <Typography sx={{fontSize: 14}}>{label}</Typography>
        <IconButton disabled={disabled} onClick={onDelete}>
          <CloseIcon color='primary' />
        </IconButton>
      </Box>
    </Box>
  );
};

export default XChip;

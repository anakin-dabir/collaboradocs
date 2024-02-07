import React from 'react';
import {CircularProgress} from '@mui/material';
import theme, {useGuiButtonStyles} from '../themes';
import clsx from 'clsx';
import {Button} from '@mui/material';
import {ReactComponent as ButtonTopLeft} from '../../public/shapes_btnadd_1.svg';
import {ReactComponent as ButtonTopLeftLeft} from '../../public/shapes_btnadd_2.svg';
import {ReactComponent as ButtonTopRightRight} from '../../public/shapes_btnadd_6.svg';
import {ReactComponent as ButtonBottomLeftLeft} from '../../public/shapes_btnadd_7.svg';
import {ReactComponent as ButtonBottomRightRight} from '../../public/shapes_btnadd_3.svg';
import {ReactComponent as ButtonBottomLeft} from '../../public/shapes_btnadd_8.svg';
import {ReactComponent as ButtonBottomRight} from '../../public/shapes_btnadd_5.svg';
import {ReactComponent as ButtonTopRight} from '../../public/shapes_btnadd_4.svg';

const XButton = ({
  children,
  onClick,
  color = 'default',
  className,
  disabled = false,
  fullWidth = false,
  type = 'button',
  variant = 'outlined',
  loading = false,
  tabIndex,
  border = true,
  borderColor,
  wrapperClassName = '',
  wrapperStyle = {},
  style,
  ...props
}) => {
  const classes = useGuiButtonStyles();
  const possibleColors = ['default', 'primary', 'secondary', 'success', 'error'];
  color = possibleColors.includes(color) ? color : 'default';
  const button_class = {
    default: classes.button_default,
    primary: classes.button_primary,
    secondary: classes.button_secondary,
    success: classes.button_success,
    error: classes.button_error,
    disabled: classes.button_disabled,
  };
  const border_color = {
    default: theme.palette.primary.main,
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    success: theme.palette.success.main,
    error: theme.palette.error.main,
    disabled: theme.palette.grey[400],
  };
  return (
    <div
      style={{width: fullWidth && '100%', ...wrapperStyle}}
      className={clsx(classes.button_wrapper, wrapperClassName)}
    >
      <Button
        {...props}
        onClick={onClick}
        style={style}
        type={type}
        disabled={disabled}
        fullWidth={fullWidth}
        variant={variant}
        tabIndex={tabIndex}
        className={clsx(
          className,
          classes.button,
          disabled || loading ? button_class['disabled'] : button_class[color]
        )}
      >
        {border && (
          <>
            <ButtonTopLeft
              className={clsx(classes.border, classes.top_left_border)}
              fill={
                borderColor
                  ? borderColor
                  : disabled
                  ? border_color['disabled']
                  : border_color[color]
              }
            />
            <ButtonTopLeftLeft
              className={clsx(classes.border, classes.top_left_left_border)}
              fill={
                borderColor
                  ? borderColor
                  : disabled
                  ? border_color['disabled']
                  : border_color[color]
              }
            />
            <ButtonBottomLeft
              className={clsx(classes.border, classes.bottom_left_border)}
              fill={
                borderColor
                  ? borderColor
                  : disabled
                  ? border_color['disabled']
                  : border_color[color]
              }
            />
            <ButtonBottomLeftLeft
              className={clsx(classes.border, classes.bottom_left_left_border)}
              fill={
                borderColor
                  ? borderColor
                  : disabled
                  ? border_color['disabled']
                  : border_color[color]
              }
            />
            <ButtonBottomRight
              className={clsx(classes.border, classes.bottom_right_border)}
              fill={
                borderColor
                  ? borderColor
                  : disabled
                  ? border_color['disabled']
                  : border_color[color]
              }
            />
            <ButtonBottomRightRight
              className={clsx(classes.border, classes.bottom_right_right_border)}
              fill={
                borderColor
                  ? borderColor
                  : disabled
                  ? border_color['disabled']
                  : border_color[color]
              }
            />
            <ButtonTopRight
              className={clsx(classes.border, classes.top_right_border)}
              fill={
                borderColor
                  ? borderColor
                  : disabled
                  ? border_color['disabled']
                  : border_color[color]
              }
            />
            <ButtonTopRightRight
              className={clsx(classes.border, classes.top_right_right_border)}
              fill={
                borderColor
                  ? borderColor
                  : disabled
                  ? border_color['disabled']
                  : border_color[color]
              }
            />
          </>
        )}
        {loading && <CircularProgress size={20} />}
        {children}
      </Button>
    </div>
  );
};

export default XButton;

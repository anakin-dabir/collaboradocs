import React, { useState, useCallback } from "react";
import { TextField } from "@mui/material";
import theme, { useGuiTextFieldStyles } from "../themes";
import clsx from "clsx";
import { ReactComponent as TextFieldTopLeft } from "@/assets/textFieldTopLeft.svg";
import { ReactComponent as TextFieldTopRight } from "@/assets/textFieldTopRight.svg";
import { ReactComponent as TextFieldBottomRight } from "@/assets/textFieldBottomRight.svg";
import { ReactComponent as TextFieldBottomCenter } from "@/assets/textFieldBottomCenter.svg";
import { ReactComponent as TextFieldBottomCenter2 } from "@/assets/textFieldBottomCenter2.svg";

const XTextfield = ({
  id,
  size,
  value,
  onKeyDown,
  defaultValue,
  className = "",
  simpleBorder = false,
  borderBottom = false,
  simpleBorderWithBottomRight = false,
  select = false,
  border = true,
  children,
  fullWidth,
  style,
  helperText,
  label,
  name,
  disabled = false,
  error = false,
  type = "text",
  SelectProps,
  placeholder,
  onBlur,
  onFocus,
  onChange,
  inputProps,
  parentClassName = "",
  ...props
}) => {
  const [containerHeight, containerHeightSet] = useState(0);
  const [focused, focusedSet] = useState(false);
  const classes = useGuiTextFieldStyles();
  const input_ref = useCallback((node) => {
    if (!node) return;
    const inputEl = node.node || node;
    const containerEl = inputEl.parentNode;
    if (containerEl) containerHeightSet(containerEl.offsetHeight);
  }, []);
  let borderColor;
  if (disabled) borderColor = theme.palette.grey[700];
  else if (error) borderColor = theme.palette.error.main;
  else if (focused) borderColor = theme.palette.primary.main;
  else borderColor = theme.palette.primary.main;
  return (
    <div className={clsx(parentClassName, classes.wrapper)}>
      {border && (
        <>
          <TextFieldTopLeft
            className={clsx(classes.border, classes.top_left_border, {
              [classes.border_glow]: focused && !error,
            })}
            fill={borderColor}
            style={{
              transform: size == "small" ? "scale(0.7) translate(-21.43%, -21.43%)" : undefined,
            }}
          />
          {!simpleBorder && (
            <TextFieldTopRight
              className={clsx(classes.border, classes.top_right_border, {
                [classes.border_glow]: focused && !error,
              })}
              fill={borderColor}
              style={{
                transform: size == "small" ? "scale(0.7) translate(21.43%, -21.43%)" : undefined,
              }}
            />
          )}
          {(simpleBorderWithBottomRight || !simpleBorder) && (
            <TextFieldBottomRight
              className={clsx(classes.border, classes.bottom_right_border, {
                [classes.border_glow]: focused && !error,
              })}
              fill={borderColor}
              style={{
                top: `${containerHeight}px`,
                transform:
                  size == "small" ? "scale(0.7) translate(21.43%, -121.43%)" : "translateY(-100%)",
              }}
            />
          )}
          {!simpleBorder && (
            <TextFieldBottomCenter
              className={clsx(classes.border, classes.bottom_center_border, {
                [classes.border_glow]: focused && !error,
              })}
              fill={borderColor}
              style={{
                top: `${containerHeight}px`,
                transform:
                  size == "small" ? "scale(0.7) translateY(-121.43%)" : "translateY(-100%)",
              }}
            />
          )}
          {borderBottom && (
            <TextFieldBottomCenter2
              className={clsx(classes.border, classes.bottom_center_border, {
                [classes.border_glow]: focused && !error,
              })}
              fill={borderColor}
              style={{
                top: `${containerHeight}px`,
                transform:
                  size == "small" ? "scale(0.7) translateY(-121.43%)" : "translateY(-100%)",
              }}
            />
          )}
        </>
      )}
      <TextField
        {...props}
        value={value}
        id={id}
        disabled={disabled}
        defaultValue={defaultValue}
        style={style}
        select={select}
        name={name}
        label={label}
        helperText={helperText}
        inputRef={input_ref}
        onChange={onChange}
        placeholder={placeholder}
        InputProps={inputProps}
        type={type}
        fullWidth
        InputLabelProps={{ shrink: true, className: classes.label }}
        variant='outlined'
        onKeyDown={onKeyDown}
        classes={classes}
        className={clsx(
          className,
          { [classes.disabled]: disabled },
          { [classes.error]: error },
          { [classes.border_off]: !border }
        )}
        size={size}
        SelectProps={{ ...SelectProps, MenuProps: { classes } }}
        onFocus={(event) => {
          focusedSet(true);
          if (onFocus) onFocus(event);
        }}
        onBlur={(event) => {
          focusedSet(false);
          if (onBlur) onBlur(event);
        }}
      >
        {children && children}
      </TextField>
    </div>
  );
};

export default XTextfield;

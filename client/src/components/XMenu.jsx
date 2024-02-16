import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useGuiTextFieldStyles, useHeadingStyles } from "@/themes";
import { ReactComponent as ArrowDownIcon } from "@/assets/arrowDownIcon.svg";
import { ReactComponent as SearchIcon } from "@/assets/searchIcon.svg";
import { ReactComponent as CrossIcon } from "@/assets/crossIcon.svg";
import { ReactComponent as CheckedIcon } from "@/assets/checked_icon.svg";
import XTextfield from "@/components/XTextfield";
import XStack from "./XStack";
import XTooltip from "./XTooltip";
import XChip from "./XChip";

export default function XMenu({
  options,
  anchorEl,
  search = "",
  searchSet,
  anchorElSet,
  name,
  formik,
  selectedOptionSet,
  tabIndex,
  prefilledOption = "",
  error = false,
  simpleBorder = false,
  menuWidth = "30%",
  textFieldClassName = "",
  placeholder = "",
  inputLabel = "",
}) {
  const textFieldClasses = useGuiTextFieldStyles();
  const headingClasses = useHeadingStyles();
  const [localSelectedOption, localSelectedOptionSet] = useState("");
  const handleClick = (event) => {
    anchorElSet(event.currentTarget);
  };
  const handleClose = () => {
    anchorElSet(null);
    searchSet("");
  };
  const handleListItemClick = (item) => {
    localSelectedOptionSet(item);
    formik?.setFieldValue(name, item);
    selectedOptionSet?.(item);
    // setTimeout(() => {
    handleClose();
    // }, 300);
  };
  const handleDefaultOptionRemover = () => {
    localSelectedOptionSet(null);
    formik?.setFieldValue(name, "");
    selectedOptionSet?.("");
  };
  useEffect(() => {
    if (!prefilledOption) return;
    let name = "";
    name = options.find((el) => el === prefilledOption);
    if (name) localSelectedOptionSet(prefilledOption);
  }, [prefilledOption]);
  return (
    <>
      <Box onClick={handleClick} position='relative'>
        {inputLabel && <InputLabel className={headingClasses.menu_label}>{inputLabel}</InputLabel>}
        <XTextfield
          autoComplete='off'
          variant='outlined'
          name={name}
          error={error}
          simpleBorder={simpleBorder}
          className={`${headingClasses.text_field_heading} ${textFieldClasses.border_off} ${textFieldClassName}`}
          inputProps={{
            startAdornment: localSelectedOption ? (
              <InputAdornment position='start'>
                {localSelectedOption.length > 15 ? (
                  <XTooltip title={localSelectedOption} placement='top'>
                    <Box>
                      <XChip
                        label={localSelectedOption.slice(0, 15) + "..."}
                        onDelete={handleDefaultOptionRemover}
                      />
                    </Box>
                  </XTooltip>
                ) : (
                  <XChip label={localSelectedOption} onDelete={handleDefaultOptionRemover} />
                )}
              </InputAdornment>
            ) : (
              <InputAdornment position='start'>
                <Typography color='white'>{placeholder}</Typography>
              </InputAdornment>
            ),
            endAdornment: (
              <>
                {localSelectedOption && (
                  <IconButton
                    onClick={() => {
                      handleDefaultOptionRemover();
                      handleClose();
                    }}
                    sx={{ padding: 0 }}
                  >
                    <CrossIcon />
                  </IconButton>
                )}
                <IconButton tabIndex={tabIndex}>
                  <ArrowDownIcon />
                </IconButton>
              </>
            ),
            readOnly: true,
            inputProps: {
              style: {
                cursor: "pointer",
              },
            },
          }}
        />
      </Box>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            width: menuWidth,
            clipPath: `
      polygon(
        12px 0,
        100% 0,
        100% calc(100% - 12px),
        calc(100% - 12px) 100%,
        0 100%,
        0 12px
      )
    `,
          },
        }}
        MenuListProps={{ sx: { py: 0 } }}
      >
        <XStack style={{ backgroundColor: "rgb(7,50,79)" }}>
          <Box>
            <Box p={3}>
              <XTextfield
                value={search}
                onChange={(e) => searchSet(e.target.value)}
                inputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
              />
            </Box>
            <Box sx={{ maxHeight: "280px", overflowY: "auto" }} pb={3}>
              {options
                .filter((el) => {
                  return el.toLowerCase().includes(search.toLowerCase());
                })
                .map((el, _id) => {
                  console.log(el);
                  return (
                    <MenuItem
                      key={_id}
                      selected={el === localSelectedOption}
                      onClick={() => handleListItemClick(el)}
                      sx={{
                        width: "80%",
                        margin: "auto",
                        paddingBlock: "1.2rem",
                      }}
                      className={el === localSelectedOption ? textFieldClasses.checked : ""}
                    >
                      <Grid container>
                        <Grid item xs={10}>
                          {el.length > 20 ? (
                            <XTooltip placement='left' title={el}>
                              <Box>
                                <Typography fontSize={15}>{el.slice(0, 20)}...</Typography>
                              </Box>
                            </XTooltip>
                          ) : (
                            <Box>
                              <Typography fontSize={15}>{el}</Typography>
                            </Box>
                          )}
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Box>{el === localSelectedOption && <CheckedIcon />}</Box>
                      </Grid>
                    </MenuItem>
                  );
                })}
            </Box>
          </Box>
        </XStack>
      </Menu>
    </>
  );
}

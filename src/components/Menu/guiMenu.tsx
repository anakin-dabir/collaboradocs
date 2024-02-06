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
import {
  useGuiTextFieldStyles,
  useHeadingStyles,
  useHebrewStyles,
} from "../../themes/themes";
import GuiTextField from "../../components/TextField";
import GuiChip from "../../components/Chip";
import GuiTooltip from "../Tooltip";
import GuiBox from "../../components/Box";
import { ReactComponent as ArrowDownIcon } from "./../../img/arrowDownIcon.svg";
import { ReactComponent as SearchIcon } from "./../../img/searchIcon.svg";
import { ReactComponent as CrossIcon } from "./../../img/crossIcon.svg";
import { ReactComponent as CheckedIcon } from "./../../img/checked_icon.svg";
import { IGuiMenu } from "./guiMenu.interface";
import { IOption } from "../../types/options.interface";

export default function GuiMenu({
  options,
  anchorEl,
  search,
  searchSet,
  anchorElSet,
  name,
  formik,
  selectedOptionSet,
  tabIndex,
  prefilledOption,
  isSystemConstant = false,
  isUser = false,
  error = false,
  simpleBorder = false,
  menuWidth = "22%",
  textFieldClassName = "",
  rtl = false,
  placeholder = "",
  inputLabel = "",
}: IGuiMenu) {
  const textFieldClasses = useGuiTextFieldStyles();
  const headingClasses = useHeadingStyles();
  const hebrewClasses = useHebrewStyles();
  const [localSelectedOption, localSelectedOptionSet] =
    useState<IOption | null>(null);
  const handleClick = (event: any) => {
    anchorElSet(event.currentTarget);
  };
  const handleClose = () => {
    anchorElSet(null);
    searchSet("");
  };
  const handleListItemClick = (item: any) => {
    localSelectedOptionSet(item);
    formik?.setFieldValue(name, item._id);
    selectedOptionSet?.(item._id);
    setTimeout(() => {
      handleClose();
    }, 300);
  };
  const handleDefaultOptionRemover = () => {
    localSelectedOptionSet(null);
    formik?.setFieldValue(name, "");
    selectedOptionSet?.("");
  };
  useEffect(() => {
    if (!prefilledOption) return;
    let name = "";
    if (isSystemConstant)
      name = options.find((el) => el.id === prefilledOption)?.value;
    else if (isUser) {
      const option = options.find((el) => el._id === prefilledOption);
      if (option)
        name = option.lastName
          ? `${option.firstName} ${option.lastName}`
          : option.firstName;
    } else name = options.find((el) => el._id === prefilledOption)?.name;
    if (name)
      localSelectedOptionSet({
        _id: prefilledOption,
        name,
      });
  }, [prefilledOption, options]);
  return (
    <>
      <Box onClick={handleClick} position="relative">
        {inputLabel && (
          <InputLabel className={headingClasses.menu_label}>
            {inputLabel}
          </InputLabel>
        )}
        <GuiTextField
          autoComplete="off"
          variant="outlined"
          dir={rtl ? "rtl" : "ltr"}
          name={name}
          error={error}
          simpleBorder={simpleBorder}
          className={`${headingClasses.text_field_heading} ${textFieldClasses.border_off} ${textFieldClassName}`}
          inputProps={{
            startAdornment: localSelectedOption ? (
              <InputAdornment position="start">
                {localSelectedOption.name.length > 15 ? (
                  <GuiTooltip
                    title={localSelectedOption.name}
                    placement="top"
                    className={hebrewClasses.text}
                  >
                    <Box>
                      <GuiChip
                        label={localSelectedOption.name.slice(0, 15) + "..."}
                        onDelete={handleDefaultOptionRemover}
                      />
                    </Box>
                  </GuiTooltip>
                ) : (
                  <GuiChip
                    label={localSelectedOption.name}
                    onDelete={handleDefaultOptionRemover}
                  />
                )}
              </InputAdornment>
            ) : (
              <InputAdornment position="start">
                <Typography color="white" className={hebrewClasses.text}>
                  {placeholder}
                </Typography>
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
        <GuiBox style={{ backgroundColor: "rgb(7,50,79)" }}>
          <Box>
            <Box p={3}>
              <GuiTextField
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
                .filter((el: any) => {
                  if (isSystemConstant)
                    return el.value
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  else if (isUser)
                    return el.email
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  else
                    return el.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((el: any) => {
                  let name = "";
                  let _id = "";
                  if (isSystemConstant) {
                    name = el.value;
                    _id = el.id;
                  } else if (isUser) {
                    name = el.lastName
                      ? `${el.firstName} ${el.lastName}`
                      : el.firstName;
                    _id = el._id;
                  } else {
                    name = el.name;
                    _id = el._id;
                  }
                  return (
                    <MenuItem
                      key={_id}
                      selected={_id === localSelectedOption?._id}
                      onClick={() =>
                        handleListItemClick({
                          _id,
                          name,
                        })
                      }
                      sx={{
                        width: "80%",
                        margin: "auto",
                        paddingBlock: "1.2rem",
                      }}
                      className={
                        _id === localSelectedOption?._id
                          ? textFieldClasses.checked
                          : ""
                      }
                    >
                      <Grid container>
                        <Grid item xs={10}>
                          {isUser ? (
                            <GuiTooltip placement="left" title={el.email}>
                              <Box>{name.slice(0, 20)}...</Box>
                            </GuiTooltip>
                          ) : name.length > 20 ? (
                            <GuiTooltip
                              placement="left"
                              title={name}
                              className={hebrewClasses.text}
                            >
                              <Box>
                                <Typography
                                  fontSize={15}
                                  className={hebrewClasses.text}
                                >
                                  {name.slice(0, 20)}...
                                </Typography>
                              </Box>
                            </GuiTooltip>
                          ) : (
                            <Box>
                              <Typography
                                fontSize={15}
                                className={hebrewClasses.text}
                              >
                                {name}
                              </Typography>
                            </Box>
                          )}
                        </Grid>
                        <Grid item xs={1}></Grid>
                        <Box>
                          {_id === localSelectedOption?._id && <CheckedIcon />}
                        </Box>
                      </Grid>
                    </MenuItem>
                  );
                })}
            </Box>
          </Box>
        </GuiBox>
      </Menu>
    </>
  );
}

import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Clickable from "../Clickable/clickable";
import { useLangSwitchStyles } from "../../themes/themes";

const LangSwitch = () => {
  const classes = useLangSwitchStyles();
  const { i18n } = useTranslation();
  const [language, languageSet] = useState<string>("en");
  const handleLangChange = (lang: string) => {
    languageSet(lang);
    i18n.changeLanguage(lang);
  };
  return (
    <Box display="flex" flexDirection="row">
      <Box onClick={()=>handleLangChange('en')}>
        <Clickable><Typography className={`${classes.heading} ${language === 'en' && classes.active}`}>EN</Typography></Clickable>
      </Box>
      <Box sx={{paddingInline: '3px'}}>|</Box>
      <Box onClick={()=>handleLangChange('he')}>
        <Clickable><Typography className={`${classes.heading} ${language === 'he' && classes.active}`}>HE</Typography></Clickable>
      </Box>
    </Box>
  );
};

export default LangSwitch;

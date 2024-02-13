import React from "react";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { ReactComponent as RadioIcon } from "/src/assets/guiRadioIcon.svg";
import { ReactComponent as RadioIconChecked } from "/src/assets/guiRadioCheckedIcon.svg";
import clsx from "clsx";

export default function XRadio({
  value,
  handleChange,
  options = [""],
  boxClassName = "",
  className = "",
}) {
  return (
    <>
      <RadioGroup
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className={className}
      >
        {options.map((option, index) => {
          return (
            <FormControlLabel
              className={clsx("items-center ml-0 mr-0", boxClassName)}
              key={index}
              value={option}
              control={<XRadioCircle value={option} />}
              label={option}
            />
          );
        })}
      </RadioGroup>
    </>
  );
}

function XRadioCircle({ value }) {
  return (
    <>
      <Radio value={value} icon={<RadioIcon />} checkedIcon={<RadioIconChecked />} />
    </>
  );
}

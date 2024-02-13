import React from "react";
import Barcode from "react-barcode";

export default function BarCode({ value }) {
  return (
    <Barcode
      value={value}
      background="none"
      lineColor="#18FFFF"
      marginBottom={-10}
      fontSize={18}
      displayValue={false}
      height={34}
      width={1.5}
      textMargin={10}
    />
  );
}

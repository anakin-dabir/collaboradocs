import React from "react";
import { ISortIcon } from "./sortIcon.interface";

const GuiSortIcon = ({
  top,
  down,
  ...props
}: ISortIcon) => {

  let fillTop;
  let fillDown;
  if(top){
    fillTop = "white" 
    fillDown = "#18FFFF"
  } else if(down) {
    fillDown = "white" 
    fillTop = "#18FFFF"
  } else {
    fillTop = "#18FFFF"
    fillDown = "#18FFFF"
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 4.828L7.04999 9.778L5.63599 8.364L12 2L18.364 8.364L16.95 9.778L12 4.828Z" fill={fillTop}/>
<path d="M12 18.9498L16.95 13.9998L18.364 15.4138L12 21.7778L5.63601 15.4138L7.05001 13.9998L12 18.9498Z" fill={fillDown}/>
</svg>
  );
};

export default GuiSortIcon;

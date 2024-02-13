import React from "react";
import { Badge } from "@mui/material";

export default function XBadge({ children, visible=true, color="#18FFFF" }) {
  return (
    <Badge
      variant="dot"
      invisible={!visible}
      sx={{
        "& .MuiBadge-badge": {
          backgroundColor: color,
          boxShadow: "0px 0px 10px #18FFFF",
          width: "18px",
          height: "18px",
          borderRadius: "50%"
        },
      }}
    >
      {children}
    </Badge>
  );
}

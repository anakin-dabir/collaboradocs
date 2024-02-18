import React, { useState } from "react";
import XEditor from "./components/XEditor";
import XButton from "./components/XButton";
import {
  useCreateDocumentMutation,
  useCreateProjectMutation,
  useLoginMutation,
} from "./services/nodeApi";
import toast from "react-hot-toast";
import XToast from "./components/XToast";
import { Stack } from "@mui/material";

const App = () => {
  const [createDocument] = useCreateDocumentMutation();
  const [data, dataSet] = useState(null);
  return (
    <>
      <Stack sx={{ height: "100%", width: "100%" }}>
        <Stack></Stack>
      </Stack>
    </>
  );
};

export default App;

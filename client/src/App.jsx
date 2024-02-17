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

const App = () => {
  const [createDocument] = useCreateDocumentMutation();
  const [data, dataSet] = useState(null);
  return (
    <>
      <XToast />
      <XEditor convertedContent={data} setConvertedContent={dataSet} />;
      <XButton
        onClick={() => {
          createDocument({ id: "65d06efa282304e8a9c6685d", title: "FUCK OFF", content: data });
          toast.success("Okayyyyyyyyyyyyyyyyyyyyyyyyyyyyyy");
        }}
      >
        Click to login
      </XButton>
    </>
  );
};

export default App;

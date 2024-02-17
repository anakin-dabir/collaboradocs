import React, { useState, useEffect } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import { convertToHTML } from "draft-convert";
import DOMPurify from "dompurify";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import XStack from "./XStack";

export default function XEditor({ convertedContent, setConvertedContent }) {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  useEffect(() => {
    console.log(convertedContent);
    console.log(createMarkup(convertedContent));
  }, [convertedContent]);

  useEffect(() => {
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
  }, [editorState]);

  function createMarkup(html) {
    return {
      __html: DOMPurify.sanitize(html),
    };
  }

  return (
    <div className='App'>
      <XStack className='w-[700px]'>
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          wrapperClassName='wrapper-class'
          editorClassName='bg-secondary_background'
          toolbarClassName='bg-secondary_background'
        />
      </XStack>
    </div>
  );
}

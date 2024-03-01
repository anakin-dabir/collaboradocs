import React from "react";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import Image from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import EditorToolbar from "./EditorToolbar";
import { isEqual } from "html-differ";

const XEditor = ({ editable = true, content, dataSet, isSameSet }) => {
  const editor = useEditor({
    editable: editable,
    extensions: [
      Document,
      Text,
      Underline,
      Highlight.configure({
        multicolor: true,
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ types: [ListItem.name] }),
      Image,
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
    ],
    content: content,
  });

  if (editor && editable) {
    const options = {
      ignoreWhitespaces: true,
    };
    let isSame = isEqual(content, editor.getHTML(), { options });
    if (isSame || editor?.getText() === "") {
      setTimeout(() => isSameSet(true), 0);
    } else {
      setTimeout(() => isSameSet(false), 0);
    }
  }

  if (editor && editable) {
    setTimeout(() => dataSet(editor?.getHTML()), 0);
  }

  if (!editor) {
    return null;
  }
  return (
    <>
      {editable && <EditorToolbar editor={editor} />}
      {editable && <div className='mt-11' />}
      <EditorContent editor={editor} />
    </>
  );
};

export default XEditor;

import React, { useState } from "react";
import ToolbarImageDialog from "./ToolbarImageDialog";
import ToolbarLinkDialog from "./ToolbarLinkDialog";
import { Avatar } from "@mui/material";
import XTooltip from "../XTooltip";
import XButton from "../XButton";

const EditorToolbar = ({ editor }) => {
  const [isOpen, isOpenSet] = useState(true);
  const [isImageOpen, isImageOpenSet] = useState(false);
  const [isLinkOpen, isLinkOpenSet] = useState(false);

  return (
    <>
      <ToolbarImageDialog
        isOpen={isImageOpen}
        handleClose={() => isImageOpenSet(false)}
        editor={editor}
      />
      <ToolbarLinkDialog
        isOpen={isLinkOpen}
        handleClose={() => isLinkOpenSet(false)}
        editor={editor}
      />
      <XTooltip data='Add Style' placement='top'>
        <Avatar
          onClick={() => isOpenSet((pre) => !pre)}
          className='bg-primary_main text-2xl cursor-pointer size-7 absolute'
        >
          +
        </Avatar>
      </XTooltip>
      <div
        className={`flex flex-wrap items-center gap-2 w-full  shadow-2xl bg-secondary_background absolute z-10 transition-all ${
          isOpen ? "left-0" : "-left-full"
        }`}
      >
        <XButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          color={editor.isActive("bold") ? "secondary" : ""}
        >
          bold
        </XButton>
        <XButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          color={editor.isActive("underline") ? "secondary" : ""}
        >
          underline
        </XButton>
        <XButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          color={editor.isActive("strike") ? "secondary" : ""}
        >
          strike
        </XButton>
        <XButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          color={editor.isActive("heading", { level: 1 }) ? "secondary" : ""}
        >
          heading
        </XButton>
        <XButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          color={editor.isActive("bulletList") ? "secondary" : ""}
        >
          List
        </XButton>
        <XButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          color={editor.isActive("codeBlock") ? "secondary" : ""}
        >
          code
        </XButton>
        <XButton
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          color={editor.isActive("highlight") ? "secondary" : ""}
        >
          highlight
        </XButton>

        <XButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          color={editor.isActive("blockquote") ? "secondary" : ""}
        >
          quote
        </XButton>
        <XButton onClick={() => editor.chain().focus().setHorizontalRule().run()}>line</XButton>
        <XButton
          onClick={() =>
            editor.isActive("textStyle", { color: "#18ffff" })
              ? editor.chain().focus().setColor("#ffffff").run()
              : editor.chain().focus().setColor("#18ffff").run()
          }
          color={editor.isActive("textStyle", { color: "#18ffff" }) ? "secondary" : ""}
        >
          color
        </XButton>
        <XButton
          onClick={() => isImageOpenSet(true)}
          color={editor.isActive("image") ? "secondary" : ""}
        >
          Image
        </XButton>
        <XButton
          onClick={() => isLinkOpenSet(true)}
          className={editor.isActive("link") ? "secondary" : ""}
        >
          Link
        </XButton>
        <XTooltip data='Close' placement='top'>
          <Avatar
            className='bg-red-600 text-xl cursor-pointer size-7'
            onClick={() => isOpenSet(false)}
          >
            x
          </Avatar>
        </XTooltip>
      </div>
    </>
  );
};

export default EditorToolbar;

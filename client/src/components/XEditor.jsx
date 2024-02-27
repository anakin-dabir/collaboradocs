import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import Image from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React, { useCallback, useState } from "react";
import XButton from "./XButton";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import { Avatar, IconButton, Tooltip } from "@mui/material";
import XTooltip from "./XTooltip";

const content = `
<h2>
  Hi there,
</h2>
<p>
  this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
</p>
<ul>
  <li>EditorContent
    That’s a bullet list with one …
  </li>
  <li>
    … or two list items.
  </li>
</ul>
<p>
  Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
</p>
<pre><code class="language-css">body {
display: none;
}</code></pre>
<p>
  I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
</p>
<blockquote>
  Wow, that’s amazing. Good work, boy! 👏
  <br />
  — Mom
</blockquote>
`;

const XEditor = ({ editable = true, content }) => {
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

  if (!editor) {
    return null;
  }

  return (
    <>
      {editable && <ToolBar editor={editor} />}
      {editable && <div className='mt-11' />}
      <EditorContent editor={editor} />
    </>
  );
};

export default XEditor;

const ToolBar = ({ editor }) => {
  const [isOpen, isOpenSet] = useState(false);
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    if (url === null) {
      return;
    }
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);
  return (
    <>
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
          onClick={() => {
            const url = window.prompt("Image URL");
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }}
          color={editor.isActive("image") ? "secondary" : ""}
        >
          Image
        </XButton>
        <XButton onClick={setLink} className={editor.isActive("link") ? "secondary" : ""}>
          Link
        </XButton>
        {/* <XButton
          onClick={() => editor.chain().focus().unsetLink().run()}
          disabled={!editor.isActive("link")}
        >
          unsetLink
        </XButton> */}
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

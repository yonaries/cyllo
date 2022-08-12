import React, { useEffect, useState } from "react";
import "../../css/code-block.css";
import addIcon from "../../../assets/icons/Plus.svg";

import { lowlight } from "lowlight/lib/all";
import { EditorContent, Editor } from "@tiptap/react";

import Paragraph from "@tiptap/extension-paragraph";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";

const TipTap = () => {

  const [editor, setEditor] = useState<Editor[]>([]);

  const items = editor.map((e) => { return e.options.content })

  const BlockEditor = new Editor({
    extensions: [
      StarterKit,
      Paragraph.configure({
        HTMLAttributes: {
          class: 'paragraphs',
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
        HTMLAttributes: {
          class: 'code-block',
        },
      })],
    content: `${items}`,
  })

  const textEditor = new Editor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: `<p></p>`,
  });

  console.log(editor);

  function addBlock() {
    console.log('clicked');
    setEditor([...editor, textEditor]);
  }

  return (
    <>
      <EditorContent editor={BlockEditor} />
      <img style={{ cursor: "pointer" }} src={addIcon} onClick={() => addBlock()} />
    </>
  );
};

export default TipTap;
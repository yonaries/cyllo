import React from "react";
import "../../css/code-block.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from "lowlight/lib/all";

const ParagraphBlock = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            }),
        ],

        // editable: false,
        content: `<p>Start writing here</p>`,
    });
    // console.log(editor?.options.content);


    return (
        <EditorContent
            className="editable-block"
            style={{ border: "none" }}
            editor={editor}
        />
    );
};

export default ParagraphBlock;

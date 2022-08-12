import StarterKit from '@tiptap/starter-kit'
import { useEditor, EditorContent, Editor, CommandProps } from "@tiptap/react";
import { Component, useEffect, useState } from 'react';

import Commands from './commands';
import suggestion from './suggetion'

const TipEditor = () => {
    let [editor, setEditor] = useState<Editor>();

    useEffect(() => {
        setEditor(
            new Editor({
                extensions: [
                    StarterKit,
                    Commands.configure({
                        suggestion,
                    }),
                ],
                content: `
        <p>Type a slash</p>EditorContent
        <p></p>
        <p></p>
      `,
            })
        )
        return () => {
            editor!.destroy()
        }
    }, [])


    return <>
        <EditorContent editor={editor!} />
    </>
}

export default TipEditor;
import React, { useRef } from 'react'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Placeholder from '@tiptap/extension-placeholder';
import { Editor } from '@tiptap/react';
import { lowlight } from "lowlight/lib/all";
import StarterKit from '@tiptap/starter-kit';

import '../css/popup-menu.css'
import Notify from './toast-message';

type Props = {
    editors: Editor[];
    setEditors: Function;
    setPopupMenu: Function;
}

const PopupMenu = (props: Props) => {
    const textBlock = new Editor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Write here...',
            })
        ],
    });

    const CodeCellBlock = new Editor({
        extensions: [
            StarterKit,
            CodeBlockLowlight.configure({
                lowlight,
            }),
            Placeholder.configure({
                placeholder: 'Your snippet goes here...',
            })
        ],
        content: `
        <pre ><code spellCheck="false" class="language-javascript"></code></pre>`,
    })

    function newBlock(blockKind: string) {
        if (blockKind === "p") props.setEditors([...props.editors, textBlock]);
        if (blockKind === "code") props.setEditors([...props.editors, CodeCellBlock]);
        props.setPopupMenu(false);
    }

    return (
        <div className='main-popup-menu-container' >
            <div className="popup-menu">
                <button onClick={() => newBlock('p')}>Text</button>
                <button onClick={() => newBlock('code')}>Code Cell</button>
            </div>
        </div>
    )
}

export default PopupMenu;
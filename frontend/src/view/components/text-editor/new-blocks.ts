import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Placeholder from "@tiptap/extension-placeholder";
import { Editor } from "@tiptap/react";
import { lowlight } from "lowlight/lib/all";
import StarterKit from "@tiptap/starter-kit";


const textBlock = new Editor({
  editable: false,
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: "Write here...",
    }),
  ],
});

const CodeCellBlock = new Editor({
  editable: false,

  extensions: [
    StarterKit,
    CodeBlockLowlight.configure({
      lowlight,
    }),
    Placeholder.configure({
      placeholder: "Your snippet...",
    }),
  ],
  content: `
        <pre><code class="language-javascript"></code></pre>`,
});

export { CodeCellBlock, textBlock };

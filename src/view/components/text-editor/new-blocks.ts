import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Placeholder from "@tiptap/extension-placeholder";
import { Editor } from "@tiptap/react";
import { lowlight } from "lowlight/lib/all";
import StarterKit from "@tiptap/starter-kit";

const headTitle = new Editor({
  extensions: [
    StarterKit,
    CodeBlockLowlight.configure({
      lowlight,
    }),
    Placeholder.configure({
      placeholder: "Write here...",
    }),
  ],
  content: `<h2>Document Title</h2>`,
});

const docDescBlock = new Editor({
  extensions: [
    StarterKit,
    CodeBlockLowlight.configure({
      lowlight,
    }),
    Placeholder.configure({
      placeholder: "Write here...",
    }),
  ],
  content: `<p>A Div that can be resized by dragging the edges horizontally</p>`,
});
const textBlock = new Editor({
  editable: false,
  extensions: [
    StarterKit,
    CodeBlockLowlight.configure({
      lowlight,
    }),
    Placeholder.configure({
      placeholder: "Write here...",
    }),
  ],
  content: `<p>paragraph</p>`,
});

const CodeCellBlock = new Editor({
  editable: false,
  extensions: [
    StarterKit,
    CodeBlockLowlight.configure({
      lowlight,
    }),
    Placeholder.configure({
      placeholder: "Your snippet goes here...",
    }),
  ],
  content: `
        <pre><code class="language-javascript"></code></pre>`,
});

export { headTitle, docDescBlock, CodeCellBlock, textBlock };

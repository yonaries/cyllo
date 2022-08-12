import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";

import CommandsList from "./commands";

const CommandsMenu = () => {
  items: ({ query }: any) => {
    return [
      {
        title: "H1",
        command: ({ editor, range }: any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading", { level: 1 })
            .run();
        },
      },
      {
        title: "H2",
        command: ({ editor, range }: any) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading", { level: 2 })
            .run();
        },
      },
      {
        title: "bold",
        command: ({ editor, range }: any) => {
          editor.chain().focus().deleteRange(range).setMark("bold").run();
        },
      },
      {
        title: "italic",
        command: ({ editor, range }: any) => {
          editor.chain().focus().deleteRange(range).setMark("italic").run();
        },
      },
    ]
      .filter((item) =>
        item.title.toLowerCase().startsWith(query.toLowerCase())
      )
      .slice(0, 10);
  };

  let component: any;
  let popup: any[];

  return {
    onStart: (props: any) => {
      //   component = new ReactRenderer(CommandsList, {
      //     props,
      //     editor: props.editor,
      //   });

      if (!props.clientRect) {
        return;
      }

      popup = tippy("body", {
        getReferenceClientRect: props.clientRect,
        appendTo: () => document.body,
        content: component.element,
        showOnCreate: true,
        interactive: true,
        trigger: "manual",
        placement: "bottom-start",
      });
    },

    onUpdate(props: any) {
      component.updateProps(props);

      if (!props.clientRect) {
        return;
      }

      popup[0].setProps({
        getReferenceClientRect: props.clientRect,
      });
    },

    onKeyDown(props: any) {
      if (props.event.key === "Escape") {
        popup[0].hide();

        return true;
      }

      return component.ref?.onKeyDown(props);
    },

    onExit() {
      popup[0].destroy();
      component.destroy();
    },
  };
};

export default CommandsMenu;

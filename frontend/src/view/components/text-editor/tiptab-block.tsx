import { useEffect, useState } from "react";
import addIcon from "../../../assets/icons/Plus.svg";
import "../../css/code-block.css";

import { Editor, EditorContent } from "@tiptap/react";
import { lowlight } from "lowlight/lib/all";

import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from "@tiptap/starter-kit";
import PopupMenu from "../popup-menu";
import { useSelector } from "react-redux";
import { RootState } from "../../..";
import { bid } from "./block-id";

const initialBlock = new Editor({
  editable: false,
  extensions: [
    StarterKit,
    CodeBlockLowlight.configure({
      lowlight,
    }),
    Placeholder.configure({
      placeholder: 'Write here...',
    })
  ],
  content: `<p>Initial Block</p>`,
});

const TipTap = () => {
  //states
  const docStatus = useSelector((state: RootState) => state.docStatus);
  const [editors, setEditors] = useState<Editor[]>([initialBlock]);
  const [popupMenu, setPopupMenu] = useState<boolean>(false);

  useEffect(() => {
    if (docStatus.editMode) { editors.map((e) => { e.options.editable = true; }) }
    else editors.map((e) => { e.options.editable = false; })
  }, [docStatus])

  function popupMenuHandler() {
    setPopupMenu(!popupMenu);
  }

  return (
    <>
      {
        editors && editors.map((e) => < EditorContent key={bid()} editor={e} />
        )
      }
      {docStatus.editMode && <img style={{ cursor: "pointer" }} src={addIcon} onClick={() => popupMenuHandler()} />}
      {popupMenu && <PopupMenu setPopupMenu={setPopupMenu} setEditors={setEditors} editors={editors} />}
    </>
  );
};

export default TipTap;
import { useEffect, useState } from "react";
import addIcon from "../../../assets/icons/Plus.svg";
import "../../css/code-block.css";

import { Editor, EditorContent } from "@tiptap/react";

import Placeholder from '@tiptap/extension-placeholder';
import StarterKit from "@tiptap/starter-kit";
import { useSelector } from "react-redux";
import { RootState } from "../../..";
import PopupMenu from "../popup-menu";
import { bid } from "./block-id";

const initialBlock = new Editor({
  editable: false,
  extensions: [
    StarterKit,
    Placeholder.configure({
      placeholder: 'Write here...',
    })
  ],
});

const TipTap = () => {
  //states
  const docStatus = useSelector((state: RootState) => state.docStatus);
  const [editors, setEditors] = useState<Editor[]>([initialBlock]);
  const [popupMenu, setPopupMenu] = useState<boolean>(false);

  useEffect(() => {
    // { editors && editors.map((e) => e.chain().focus().setColor('#958DF1')); }
    if (docStatus.editMode) { editors.map((e) => { e.options.editable = true; }) }
    else editors.map((e) => { e.options.editable = false; })
  }, [docStatus, editors])

  function popupMenuHandler() {
    setPopupMenu(!popupMenu);
  }
  function onBlurHandler() {
    setTimeout(() => {
      setPopupMenu(false);
    }, 1000);
  }

  return (
    <>
      {
        editors && editors.map((e) => < EditorContent key={bid()} editor={e} />
        )
      }
      {docStatus.editMode && <img style={{ cursor: "pointer" }} src={addIcon} onClick={() => popupMenuHandler()} />}
      {popupMenu && <div tabIndex={0} style={{ width: "max-content" }} onMouseLeave={onBlurHandler}><PopupMenu setPopupMenu={setPopupMenu} setEditors={setEditors} editors={editors} /></div>}
    </>
  );
};

export default TipTap;
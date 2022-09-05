import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../..";
import { Extension } from "@tiptap/core";
import {
  selectFile
} from "../../controllers/redux/reducers/selectionSlice";
import "../css/file-component.css";
import editIcon from "../../assets/icons/editIcon_black.svg";
import saveIcon from "../../assets/icons/Save.svg";
import deleteIcon from "../../assets/icons/Subtract.svg";
import DeleteModal from "../../tailwind/delete-deactive-modal";


type Props = {
  files: [];
  fileId: string;
  color: string;
  title: string;
  index: number;
};

const FileTile = ({ files, fileId, color, title, index }: Props) => {
  const [isDeleteOn, setIsDeleteOn] = useState<boolean>(false);
  const [elem, setElem] = useState<HTMLElement>();

  const dispatch = useDispatch();
  const selectedFile = useSelector(
    (state: RootState) => state.selectedElements.selectedFile
  );

  //set class name for selected file
  function className(Id: string) {
    return Id === selectedFile ? "collection selected" : "collection";
  }

  //? Text Editor
  const DisableEnter = Extension.create({
    addKeyboardShortcuts() {
      return {
        Enter: () => true,
      };
    },
  });

  const textBlock = useEditor({
    editable: false,
    extensions: [
      DisableEnter,
      StarterKit,
      Placeholder.configure({
        placeholder: "folder name",
      }),
    ],
    editorProps: {
      handleKeyDown(view, event) {
        console.log(event.key);
        if (event.key === 'Enter') {
          textBlock?.setEditable(false);
        }
      },
    },
    autofocus: true,
    content: `<p>${title ? title : 'untitled'}</p>`,
  });

  //select the element to be removed
  function readyCollection(e: any) {
    const coll = e.target.parentElement.parentElement;
    setElem(coll);
    setIsDeleteOn(true);
  }

  //delete the selected element
  function deleteCollection() {
    files.splice(index, 1);
    console.log(files);
    elem?.remove()
  }

  return (
    <div onBlur={() => textBlock?.setEditable(false)} >
      {isDeleteOn && <DeleteModal onDelete={deleteCollection} setIsDeleteOn={setIsDeleteOn} />}
      <div
        className={className(fileId)}
        onClick={() => {
          dispatch(selectFile(fileId));
        }}
      >
        <div className="indicator" style={{ backgroundColor: color }}></div>
        <EditorContent editor={textBlock} />
        <div className="action-buttons">
          <div className="colMenuBtn" onClick={() => textBlock?.setEditable(!textBlock.isEditable)} >
            {textBlock?.isEditable ? <img src={saveIcon} />
              : <img src={editIcon} />}
          </div>
          <img className="colMenuBtn" src={deleteIcon} onClick={readyCollection} />
        </div>
      </div>
    </div>
  );
};

export default FileTile;
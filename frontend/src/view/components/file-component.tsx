import { Extension } from "@tiptap/core";
import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../..";
import editIcon from "../../assets/icons/editIcon_black.svg";
import saveIcon from "../../assets/icons/Save.svg";
import deleteIcon from "../../assets/icons/Subtract.svg";
import { deleteCollection } from "../../controllers/api/delete-collection";
import {
  selectFile
} from "../../controllers/redux/reducers/selectionSlice";
import DeleteModal from "../../tailwind/delete-deactive-modal";
import "../css/file-component.css";
import Notify from "./toast-message";


type Props = {
  fileId: string;
  color: string;
  title: string;
  index: number;
  setFiles: React.Dispatch<any>;
};

const FileTile = ({ fileId, color, title, index, setFiles }: Props) => {
  const [isDeleteOn, setIsDeleteOn] = useState<boolean>(false);

  const dispatch = useDispatch();
  const selectedFile = useSelector(
    (state: RootState) => state.selectedElements.selectedFile
  );

  // Text Editor elements
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
        if (event.key === 'Enter') {
          textBlock?.setEditable(false);
        }
      },
    },
    autofocus: true,
    content: `<p>${title ? title : 'untitled'}</p>`,
  });

  async function deleteFile() {
    try {
      await deleteCollection(fileId)
      setFiles((prev: any) => { prev.splice(index, 1); return [...prev] });
      Notify({ toastType: "success", toastMessage: 'Collection Deleted' })
    } catch (error) {
      console.log(error);
      Notify({ toastType: 'error', toastMessage: 'Request Failed' })
    }
  }

  //save renamed collection
  async function saveCollection() {
    textBlock?.setEditable(false);
    const json = textBlock?.getJSON()

    console.log(json?.content![0].content![0].text);
  }


  return (
    <div onBlur={() => textBlock?.setEditable(false)} >
      {isDeleteOn && <DeleteModal onDelete={deleteFile} setIsDeleteOn={setIsDeleteOn} />}
      <div
        className={fileId === selectedFile ? "collection selected" : "collection"}
        onClick={() => {
          dispatch(selectFile(fileId));
        }}
      >
        <div className="flex items-center flex-1">
          <div className="indicator mr-2" style={{ backgroundColor: color }}></div>
          <EditorContent editor={textBlock} />
        </div>
        <div className="action-buttons">
          <div className="colMenuBtn" >
            {textBlock?.isEditable ? <img src={saveIcon} onClick={saveCollection} />
              : <img src={editIcon} onClick={() => textBlock?.setEditable(true)} />}
          </div>
          <img className="colMenuBtn" src={deleteIcon} onClick={() => setIsDeleteOn(true)} />
        </div>
      </div>
    </div>
  );
};

export default FileTile;
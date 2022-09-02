import Placeholder from "@tiptap/extension-placeholder";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../..";
import {
  selectFile
} from "../../controllers/redux/reducers/selectionSlice";
import "../css/file-component.css";
import menuIcon from "../../assets/icons/menu.svg";


type Props = {
  fileId: string;
  color: string;
  title: string;
};

const FileTile = ({ fileId, color, title }: Props) => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const dispatch = useDispatch();
  const selectedFile = useSelector(
    (state: RootState) => state.selectedElements.selectedFile
  );

  function className(Id: string) {
    return Id === selectedFile ? "collection selected" : "collection";
  }

  const textBlock = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write here...",
      }),
    ],
    injectCSS: false,
    content: `<p>${title ? title : 'untitled'}</p>`,
  });

  useEffect(() => {
    if (fileId === selectedFile) { textBlock?.setEditable(true) }
    else { textBlock?.setEditable(false) }
  }, [fileId, selectedFile])


  return (
    <div>
      <div
        className={className(fileId)}
        onClick={() => {
          dispatch(selectFile(fileId));
        }}
      >
        <div className="indicator" style={{ backgroundColor: color }}></div>
        <EditorContent editor={textBlock} />
        <img className="colMenuBtn" src={menuIcon} />
      </div>
    </div>
  );
};

export default FileTile;

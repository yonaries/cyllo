import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFile,
  selectView,
} from "../../controllers/redux/reducers/selectionSlice";
import { selectionState } from "../../controllers/redux/type";
import "../css/file-component.css";

type Props = {
  fileId: string;
  color: string;
  title: string;
};

const FileTile = ({ fileId, color, title }: Props) => {
  const dispatch = useDispatch();
  const selectedFile = useSelector(
    (state: selectionState) => state.selectedElements.selectedFile
  );

  function className(Id: string) {
    return Id === selectedFile ? "collection selected" : "collection";
  }

  return (
    <div>
      <div
        className={className(fileId)}
        onClick={() => {
          dispatch(selectFile(fileId));
        }}
      >
        <div className="indicator" style={{ backgroundColor: color }}></div>
        {title}
      </div>
    </div>
  );
};

export default FileTile;

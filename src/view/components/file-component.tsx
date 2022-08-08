import { useState } from "react";
import "../css/file-component.css";

type Props = {
  fileId: string;
  color: string;
  title: string;
};

const FileTile = ({ fileId, color, title }: Props) => {
  const [selectedFileId, setselectedFileId] = useState("agva7a");

  function className() {
    if (fileId === selectedFileId) {
      return "collection selected";
    }
    return "collection";
  }

  return (
    <div>
      <div className={className()}>
        <div className="indicator" style={{ backgroundColor: color }}></div>
        {title}
      </div>
    </div>
  );
};

export default FileTile;

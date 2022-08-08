import FileTile from "./file-component";
import "../css/file-list.css";

interface Props {
  files: any;
}
type fileType = {
  fileId: string;
  color: string;
  title: string;
};

export const ListFile = ({ files }: Props) => {

  return (
    files ? <div className="collections-list">
      {files.map((file: fileType) => (
        <FileTile
          key={file.fileId}
          fileId={file.fileId}
          color={file.color}
          title={file.title}
        />
      ))}
    </div> : < div className="collections-list">console.log("nothing to show now")</div>
  )
}



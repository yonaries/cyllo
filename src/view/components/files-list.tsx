import FileTile from "./file-component";
import "../css/file-list.css";

interface Props {
  files: any;
  fileType: any;
}
interface fileProps {
  fileId: string;
  color: string;
  title: string;
  fileType: string;
}

export const ListFiles = ({ files }: Props) => {
  return files ? (
    <div className="collections-list">
      {files.map((file: fileProps) => (
        <FileTile
          key={file.fileId}
          fileId={file.fileId}
          color={file.color}
          title={file.title}
        />
      ))}
    </div>
  ) : (
    <div className="collections-list">console.log("nothing to show now")</div>
  );
};

import FileTile from "./file-component";
import "../css/file-list.css";
import { useEffect, useState } from "react";
import { getUserCollections } from "../../controllers/api/fetch-collections";

interface Props {
  fileType: any;
}
interface fileProps {
  fileId: string;
  color: string;
  title: string;
  fileType: string;
}

export const ListFiles = ({ fileType }: Props) => {
  const [files, setFiles] = useState<any>();

  // useEffect(() => {
  //   // getUserCollections().then((result) => {
  //   //   setFiles(result)
  //   // }).catch((err) => {
  //   //   console.log(err);
  //   // })
  // }, [window.navigator.onLine])

  // // console.log(files);


  return (
    <div className="no-file"><p>No {fileType}</p></div>
  );
};

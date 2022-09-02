import { SignOut } from "./signOut-button";

import favIcon from "../../assets/icons/Bookmark.svg";
import arrowIcon from "../../assets/icons/Caret down.svg";
import folderAddIcon from "../../assets/icons/Folder-plus.svg";
import folderIcon from "../../assets/icons/Folder-user.svg";
import devAvatar from "../../assets/icons/person.png";
import "../css/dashboard.css";

import { useDispatch, useSelector } from "react-redux";
import { ListFiles } from "./files-list";
import Views from "./view";
import { RootState } from "../..";
import { useEffect, useState } from "react";
import { selectFile } from "../../controllers/redux/reducers/selectionSlice";

const SideBar = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state: RootState) => state.userStatus);
  const [files, setFiles] = useState([
    { fileId: "41sssd", title: "firebase", color: "orange" },
    { fileId: "agha7a", title: "react", color: "blue" },
    { fileId: "496aca", title: "flutter", color: "red" },
    { fileId: "51avid", title: "nodejs", color: "green" },
  ]);

  const Favorites = [
    { fileId: "adv15a", title: "animated container", color: "orange" },
    { fileId: "aca64a", title: "api routing", color: "blue" },
    { fileId: "a65fhn", title: "fetching data", color: "red" },
    { fileId: "0yj5", title: "posting data", color: "green" },
  ];

  const newCollection = { fileId: "03fyj5", title: "untitled", color: "orange" }
  useEffect(() => {
    console.log(files);
    console.log("refreshed");
  }, [files]);

  return (
    <div className="side-bar">
      <div className="profile-bar">
        <div className="avatar">
          <img src={devAvatar} />
        </div>
        <div className="username-email">
          <div className="name">{userStatus.user.displayName}</div>
          <div className="email">{userStatus.user.email}</div>
        </div>
      </div>
      <Views />
      <div className="collection-container">
        <div className="title">
          <div className="title-icon">
            <img src={folderIcon} />
            Collections
          </div>
          <img
            src={folderAddIcon}
            style={{ cursor: "pointer" }}
            onClick={() => { setFiles([...files, newCollection]); dispatch(selectFile(newCollection.fileId)) }}
          />
        </div>
        {files && <ListFiles files={files} fileType={"collection"} />}
      </div>
      <div className="collection-container">
        <div className="title">
          <div className="title-icon">
            <img src={favIcon} />
            Favorites
          </div>
          <img src={arrowIcon} />
        </div>
        {Favorites && <ListFiles files={Favorites} fileType={"document"} />}
      </div>
      <SignOut />
    </div>
  );
};

export default SideBar;

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
import { createCollectionRequest } from "../../controllers/api/create-collection";
import Notify from "./toast-message";
import { useAuth } from "../../context/AuthContext";
import { User } from "firebase/auth";

const SideBar = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState([
    { fileId: "41sssd", title: "firebase", color: "orange" },
    { fileId: "agha7a", title: "react", color: "blue" },
    { fileId: "496aca", title: "flutter", color: "red" },
    { fileId: "51avid", title: "nodejs", color: "green" },
  ]);

  const newCollection = { fileId: "03fyj5", title: "untitled", color: "orange" }
  async function addFolder() {

    try {
      setFiles([...files, newCollection]); dispatch(selectFile(newCollection.fileId))
      await createCollectionRequest('untitled');
      Notify({ toastType: "success", toastMessage: 'New Collection Created' })

    } catch (error) {
      Notify({ toastType: 'error', toastMessage: 'Collection Creation Failed' })
    }
  }
  const { currentUser } = useAuth();

  return (
    <div className="side-bar">
      <div className="profile-bar">
        <div className="avatar">
          <img src={devAvatar} />
        </div>
        <div className="username-email">
          <div className="name">{currentUser?.displayName}</div>
          <div className="email">{currentUser?.email}</div>
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
            onClick={addFolder}
          />
        </div>
        <ListFiles fileType={"collection"} />
      </div>
      <div className="collection-container">
        <div className="title">
          <div className="title-icon">
            <img src={favIcon} />
            Favorites
          </div>
          <img src={arrowIcon} />
        </div>
        <ListFiles fileType={"document"} />
      </div>
      <SignOut />
    </div>
  );
};

export default SideBar;

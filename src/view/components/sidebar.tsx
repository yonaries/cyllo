import React from "react";
import { SignOut } from "../../controllers/authentications";

import "../css/dashboard.css";
import folderIcon from "../../assets/icons/Folder-user.svg";
import folderAddIcon from "../../assets/icons/Folder-plus.svg";
import arrowIcon from "../../assets/icons/Caret down.svg";
import favIcon from "../../assets/icons/Bookmark.svg";

import { ListFile } from "./files-list";
import Views from "./view";
import { UserState } from "../../controllers/redux/type";
import { useSelector } from "react-redux";

const files = [
  { fileId: "41sfsd", title: "firebase", color: "orange" },
  { fileId: "agva7a", title: "react", color: "blue" },
  { fileId: "496aca", title: "flutter", color: "red" },
  { fileId: "51avsd", title: "nodejs", color: "green" },
];

const SideBar = () => {
  const userStatus = useSelector((state: UserState) => state.userStatus);

  return (
    <div>
      <div className="profile-bar">
        <div className="avatar"></div>
        <div className="username-email">
          <div className="name">Yonathan Dejene</div>
          <div className="email">yonatandejene001@gmail.com</div>
        </div>
      </div>
      <Views />
      <div className="collection-container">
        <div className="title">
          <div className="title-icon">
            <img src={folderIcon} />
            Collections
          </div>
          <img src={folderAddIcon} />
        </div>
      </div>
      <div className="collection-container">
        <div className="title">
          <div className="title-icon">
            <img src={favIcon} />
            Favorites
          </div>
          <img src={arrowIcon} />
        </div>
        <ListFile files={files} />
      </div>
      <SignOut />
    </div>
  );
};

export default SideBar;

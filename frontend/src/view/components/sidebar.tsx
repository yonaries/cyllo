import { SignOut } from "./signOut-button";

import favIcon from "../../assets/icons/Bookmark.svg";
import arrowIcon from "../../assets/icons/Caret down.svg";
import folderAddIcon from "../../assets/icons/Folder-plus.svg";
import folderIcon from "../../assets/icons/Folder-user.svg";
import "../css/dashboard.css";

import { useSelector } from "react-redux";
import { ListFiles } from "./files-list";
import Views from "./view";
import { RootState } from "../..";

const files = [
  { fileId: "41sfsd", title: "firebase", color: "orange" },
  { fileId: "agva7a", title: "react", color: "blue" },
  { fileId: "496aca", title: "flutter", color: "red" },
  { fileId: "51avsd", title: "nodejs", color: "green" },
];
const Favorites = [
  { fileId: "adv15a", title: "animated container", color: "orange" },
  { fileId: "aca64a", title: "api routing", color: "blue" },
  { fileId: "a65fhn", title: "fetching data", color: "red" },
  { fileId: "03fyj5", title: "posting data", color: "green" },
];

const SideBar = () => {
  const userStatus = useSelector((state: RootState) => state.userStatus);

  return (
    <div className="side-bar">
      <div className="profile-bar">
        <div className="avatar">
          <img src={userStatus.user.picture} />
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
          <img src={folderAddIcon} />
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

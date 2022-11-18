import { SignOut } from "./signOut-button";

import favIcon from "../../assets/icons/Bookmark.svg";
import arrowIcon from "../../assets/icons/Caret down.svg";
import folderAddIcon from "../../assets/icons/Folder-plus.svg";
import folderIcon from "../../assets/icons/Folder-user.svg";
import devAvatar from "../../assets/icons/person.png";
import "../css/dashboard.css";

import { useDispatch } from "react-redux";
import { useAuth } from "../../context/AuthContext";
import { createCollectionRequest } from "../../controllers/api/create-collection";
import { getUserCollections } from "../../controllers/api/fetch-collections";
import { selectFile } from "../../controllers/redux/reducers/selectionSlice";
import { CollectionsList } from "./collections/collections-list";
import { FavoritesList } from "./collections/favorites-list";
import Notify from "./toast-message";
import Views from "./view";

const SideBar = () => {
  const dispatch = useDispatch();
  const { currentUser, currentUserName } = useAuth();

  async function addFolder() {
    try {
      const result = await createCollectionRequest({ name: 'new', user: currentUser! });
      dispatch(selectFile(result._id))

      Notify({ toastType: "success", toastMessage: 'New Collection Created' })
      await getUserCollections();

    } catch (error) {
      Notify({ toastType: 'error', toastMessage: 'Collection Creation Failed' })
    }
  }

  return (
    <div className="side-bar">
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
        <CollectionsList />
      </div>
      <div className="collection-container">
        <div className="title">
          <div className="title-icon">
            <img src={favIcon} />
            Favorites
          </div>
          <img src={arrowIcon} />
        </div>
        <FavoritesList />
      </div>
      <SignOut />
    </div>
  );
};

export default SideBar;

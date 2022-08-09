import "../css/dashboard.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetSelections } from "../../controllers/redux/reducers/selectionSlice";
import { selectionState } from "../../controllers/redux/type";
import { windowClose } from "../../controllers/window-close-alert";
import AuthRoute from "../../controllers/authroute";

import ListDocuments from "../components/document-list";
import ViewDocument from "./document-view";
import SearchBar from "../components/search-bar";
import SideBar from "../components/sidebar";
import RecentlyScreen from "./recently";
import DraftScreen from "./draft";
import CommunityScreen from "./community";

const docsList = [
  {
    docId: "123456",
    docTitle: "API Routing",
    docDescription: "API Routing using express.js",
    docLang: "express.js",
  },
  {
    docId: "ac4642",
    docTitle: "Smooth Scroll",
    docDescription: "API Routing using express.js",
    docLang: "JavaScript",
  },
  {
    docId: "45sdc2",
    docTitle: "Resizable React Component",
    docDescription:
      "a div that can be resized by dragging the edges horizontally",
    docLang: "React",
  },
  {
    docId: "4126",
    docTitle: "POST Request to API",
    docDescription: "POST request to stripe backend",
    docLang: "React",
  },
];

type Props = {};

windowClose();

const Dashboard = (props: Props) => {
  const dispatch = useDispatch();

  const selectedView = useSelector(
    (state: selectionState) => state.selectedElements.selectedView
  );

  const showSelectedView = () => {
    switch (selectedView) {
      case "recent":
        return <RecentlyScreen />;
      case "draft":
        return <DraftScreen />;
      case "community":
        return <CommunityScreen />;
      case "file":
        return (
          <>
            <ListDocuments docsList={docsList} />
            <ViewDocument />
          </>
        );
      default:
        return <h1>No selectedView</h1>;
    }
  };
  return (
    <>
      <AuthRoute />
      <div className="main-container">
        <SideBar />
        <div className="main-body-container">
          <SearchBar />
          <div className="body-container">{showSelectedView()}</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

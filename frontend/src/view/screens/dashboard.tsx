import { useSelector } from "react-redux";
import "../css/dashboard.css";

import { RootState } from "../..";
import ListDocuments from "../components/document-list";
import SearchBar from "../components/search-bar";
import SideBar from "../components/sidebar";
import CommunityScreen from "./community";
import ViewDocument from "./document-view";
import DraftScreen from "./draft";
import RecentlyScreen from "./recently";

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

const Dashboard = (props: Props) => {

  const selectedView = useSelector(
    (state: RootState) => state.selectedElements.selectedView
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

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
            <ListDocuments />
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

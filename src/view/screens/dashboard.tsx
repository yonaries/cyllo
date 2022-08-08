import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AuthRoute from "../../controllers/authroute";
import { resetSelections } from "../../controllers/redux/reducers/selectionSlice";
import { windowClose } from "../../controllers/window-close-alert";
import ListDocuments from "../components/document-list";
import ViewDocument from "../components/document-view";
import SideBar from "../components/sidebar";
import "../css/dashboard.css";


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

  return (
    <>
      <AuthRoute />
      <div className="main-container">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="main-body-container">
          <div className="search-bar">
            <div className="search">
              <form className="search-form">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Find by collections, doc, languages...."
                />
              </form>
            </div>
          </div>
          <div className="body-container">
            <div className="documents-list">
              <ListDocuments docsList={docsList} />
            </div>
            <div className="document-view">
              <ViewDocument />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

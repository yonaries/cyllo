import React from "react";
import "../css/view-document.css";
import devUser from "../../assets/icons/devuser.png";
import DocViewButtons from "../components/doc-view-buttons";

type Props = {};

function ViewDocument({}: Props) {
  return (
    <div className="document-view">
      <div className="document-description">
        <div className="header-title">
          <h2>React Text editor</h2>
        </div>
        <div className="profile-button-docDesc">
          <div className="profile-docDesc">
            <div className="profile">
              <img className="profile-avatar" src={devUser} />
              <p>John doe </p>
              <span>created on Jul 28 2022, 14:23</span>
            </div>
            <div className="doc-desc">
              <p>
                A Div that can be resized by dragging the edges horizontally
              </p>
            </div>
          </div>
          <DocViewButtons />
        </div>
      </div>
    </div>
  );
}

export default ViewDocument;

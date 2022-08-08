import React from "react";
import "../css/view-documnet.css";
type Props = {};

function ViewDocument({}: Props) {
  return (
    <div>
      <div className="document-description">
        <div className="header-title"></div>
        <div className="profile-button-docDesc">
          <div className="profile-docDesc">
            <div className="profile">
              <p>John doe </p>
              <span>created on Jul 28 2022, 14:23</span>
            </div>
            <div className="docDesc">
              <p>
                A Div that can be resized by dragging the edges horizontally
              </p>
            </div>
          </div>
          <div className="buttons"></div>
        </div>
      </div>
    </div>
  );
}

export default ViewDocument;

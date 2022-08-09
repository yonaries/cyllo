import React from "react";
import downloadIcon from "../../assets/icons/Download.svg";
import editIcon from "../../assets/icons/Edit.svg";
import shareIcon from "../../assets/icons/Share-box.svg";
import menuIcon from "../../assets/icons/menu.svg";

type Props = {};

const DocViewButtons = (props: Props) => {
  return (
    <div>
      <div className="buttons">
        <div className="dvBtn">
          <img src={editIcon} />
        </div>
        <div className="dvBtn">
          <img src={shareIcon} />
        </div>
        <div className="dvBtn">
          <img src={downloadIcon} />
        </div>
        <div className="dvBtn">
          <img src={menuIcon} />
        </div>
      </div>
    </div>
  );
};

export default DocViewButtons;

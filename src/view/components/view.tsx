import React from "react";
import historyIcon from "../../assets/icons/History.svg";
import globIcon from "../../assets/icons/Global.svg";
import draftIcon from "../../assets/icons/File.svg";
import arrowRightIcon from "../../assets/icons/Arrow right.svg";

type Props = {};

function Views({}: Props) {
  return (
    <div>
      <div className="activities">
        <div className="view selected">
          <img src={historyIcon} />
          Recently Viewed
        </div>
        <div className="view">
          <img src={draftIcon} />
          Draft
        </div>
        <div className="view">
          <img src={globIcon} />
          Community
          <img src={arrowRightIcon} />
        </div>
      </div>
    </div>
  );
}

export default Views;

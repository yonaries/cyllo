import React from "react";
import historyIcon from "../../assets/icons/History.svg";
import globIcon from "../../assets/icons/Global.svg";
import draftIcon from "../../assets/icons/File.svg";
import arrowRightIcon from "../../assets/icons/Arrow right.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectionState } from "../../controllers/redux/type";
import { selectView } from "../../controllers/redux/reducers/selectionSlice";

type Props = {};

function Views({}: Props) {
  const dispatch = useDispatch();
  const selectedView = useSelector(
    (state: selectionState) => state.selectedElements.selectedView
  );

  function className(view: string) {
    return view === selectedView ? "view selected" : "view";
  }
  return (
    <div>
      <div className="activities">
        <div
          className={className("recent")}
          onClick={() => dispatch(selectView("recent"))}
        >
          <img src={historyIcon} />
          Recently Viewed
        </div>
        <div
          className={className("draft")}
          onClick={() => dispatch(selectView("draft"))}
        >
          <img src={draftIcon} />
          Draft
        </div>
        <div
          className={className("community")}
          onClick={() => dispatch(selectView("community"))}
        >
          <img src={globIcon} />
          Community
          <img src={arrowRightIcon} />
        </div>
      </div>
    </div>
  );
}

export default Views;

import React, { useEffect } from "react";
import downloadIcon from "../../assets/icons/Download.svg";
import editIcon from "../../assets/icons/Edit.svg";
import shareIcon from "../../assets/icons/Share-box.svg";
import menuIcon from "../../assets/icons/menu.svg";
import saveIcon from "../../assets/icons/Save.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../..";
import { changeEditMode } from "../../../controllers/redux/reducers/docSlice";
import DeleteModal from "../../../tailwind/delete-deactive-modal";

type Props = {};

const DocViewButtons = (props: Props) => {
  const editMode = useSelector((state: RootState) => state.docStatus.editMode);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="buttons">
        <div className="dvBtn" onClick={() => dispatch(changeEditMode())}>
          {editMode ? <img src={saveIcon} />
            : <img src={editIcon} />}
        </div>
        <div className="dvBtn">
          <img src={shareIcon} />
        </div>
        <div className="dvBtn" >
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

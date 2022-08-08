import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import globIcon from "../../assets/icons/Global.svg";
import { selectDoc } from "../../controllers/redux/reducers/selectionSlice";
import { selectionState } from "../../controllers/redux/type";

type Props = {
  docId: string;
  docTitle: string;
  docLang: string;
  docDescription: string;
};

function DocumentTile({ docLang, docId, docTitle, docDescription }: Props) {
  const selectedDoc = useSelector((state: selectionState) => state.selectedElements.selectedDoc)
  const dispatch = useDispatch();

  const [selectedDocId, setselectedDocId] = useState<string>("");

  //? Reminders
  //todo: show programming language image depending on docLang

  function className(Id: string) {
    if (Id === selectedDoc) {
      return "doc-container selected";
    }
    return "doc-container";
  }

  function changeSelectedDoc(Id: string) {
    dispatch(selectDoc(Id))
    console.log(`passedId: ${Id}, state:${selectedDoc}`);
  };

  return (
    <>
      <div className={className(docId)} onClick={() => changeSelectedDoc(docId)}>
        <div className="language-image">
          <img src={globIcon} />
        </div>
        <div className="doc-title-desc">
          <div className="title">
            <p>{docTitle}</p>
          </div>
          <div className="description">
            <p>{docDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DocumentTile;


  // const handleClick = (event: any, Id: string) => {
  //   event.preventDefault()
  //   // console.log(event.target);

  //   const button: HTMLButtonElement = event.currentTarget;
  //   console.log(button);
  //   button.className = "doc-container selected"

  //   // setselectedDocId(Id)
  // };
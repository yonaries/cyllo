import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../..";
import globIcon from "../../assets/icons/Global.svg";
import { selectDoc } from "../../controllers/redux/reducers/selectionSlice";

type Props = {
  docId: string;
  docTitle: string;
  docLang: string;
  docDescription: string;
};

function DocumentTile({ docLang, docId, docTitle, docDescription }: Props) {
  const dispatch = useDispatch();
  const selectedDoc = useSelector(
    (state: RootState) => state.selectedElements.selectedDoc
  );

  //? Reminders
  //todo: show programming language image depending on docLang

  function className(Id: string) {
    return Id === selectedDoc ? "doc-container selected" : "doc-container";
  }

  return (
    <>
      <div
        className={className(docId)}
        onClick={() => dispatch(selectDoc(docId))}
      >
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
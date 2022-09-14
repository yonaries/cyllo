import React from "react";
import "../css/document.css";
import DocumentTile from "./document-tile";
import arrowIcon from "../../assets/icons/Caret down.svg";
import addIcon from "../../assets/icons/Plus.svg";

interface Props {
  docsList: any;
}
interface docType {
  docId: string;
  docTitle: string;
  docDescription: string;
  docLang: string;
}

const FilterList = () => {
  return <div className="filter-menu-container">
    <div className="filter-item">All</div>
    <div className="filter-item">Language</div>
  </div>
}

const ListDocuments = ({ docsList }: Props) => {
  return docsList ? (
    <>
      <div className="documents-list">
        <div className="filter-add-container flex items-center px-4 sticky z-10 justify-between pt-2 top-0 bg-white h-10">
          <div className="flex">
            <p>Filter</p>
            <img src={arrowIcon} />
          </div>
          <img src={addIcon} />
        </div>
        {docsList.map((doc: docType, key: any) => (
          <DocumentTile
            key={key}
            docId={doc.docId}
            docTitle={doc.docTitle}
            docDescription={doc.docDescription}
            docLang={doc.docLang}
          />
        ))}
      </div>
    </>
  ) : (
    <>{console.log("nothing to show here")}</>
  );
};

export default ListDocuments;

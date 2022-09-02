import React from "react";
import "../css/document.css";
import DocumentTile from "./document-tile";
import arrowIcon from "../../assets/icons/Caret down.svg";

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
        <div className="filter">
          <p>Filter</p>
          <img src={arrowIcon} />
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

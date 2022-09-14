import React, { useEffect, useState } from "react";
import "../css/document.css";
import DocumentTile from "./document-tile";
import arrowIcon from "../../assets/icons/Caret down.svg";
import addIcon from "../../assets/icons/Plus.svg";
import { createDocument } from "../../controllers/api/createDocuments";
import { getUserCollections } from "../../controllers/api/fetch-collections";
import { selectDoc, selectFile } from "../../controllers/redux/reducers/selectionSlice";
import Notify from "./toast-message";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../..";
import axios from "axios";
import { getUserDocuments } from "../../controllers/api/fetchDocuments";

interface docType {
  _id: string;
  name: string;
  desc: string;
  progLang: string;
}

const FilterList = () => {
  return <div className="filter-menu-container">
    <div className="filter-item">All</div>
    <div className="filter-item">Language</div>
  </div>
}

const ListDocuments = () => {
  const dispatch = useDispatch();
  const selectedColl = useSelector((state: RootState) => state.selectedElements.selectedFile)
  const selectedDoc = useSelector((state: RootState) => state.selectedElements.selectedDoc)
  const [docsList, setDocsList] = useState<any>([])
  // const [listUpdated, setListUpdated] = useState<boolean>(false)

  async function createDoc() {
    const json = {
      data: 'new document'
    }
    try {
      const result = await createDocument({ name: 'new document', collId: selectedColl, dataJson: json, tech: 'react' });
      dispatch(selectDoc(result._id))
      // setListUpdated(false)

      Notify({ toastType: "success", toastMessage: 'Document Created' })
    } catch (error) {
      console.log(error);
      Notify({ toastType: 'error', toastMessage: 'Failed' })
    }
  }

  useEffect(() => {
    const request = axios.CancelToken.source();
    const fetchData = async () => {
      const data = await getUserDocuments(selectedColl, request.token);
      setDocsList(data);
    };

    fetchData().catch((err) => console.log(err));
    return () => request.cancel() //preventing multiple api calls
  }, [window.navigator.onLine, selectedColl]);

  return (
    <>
      <div className="documents-list">
        <div className="filter-add-container flex items-center px-4 sticky z-10 justify-between pt-2 top-0 bg-white h-10">
          <div className="flex">
            <p>Filter</p>
            <img src={arrowIcon} />
          </div>
          <img src={addIcon} onClick={createDoc} className='cursor-pointer' />
        </div>
        {(docsList?.length) ?
          docsList.map((doc: docType, key: any) => (
            <DocumentTile
              key={key}
              docId={doc._id}
              docTitle={doc.name}
              docDescription={doc.desc}
              docLang={doc.progLang}
            />
          ))
          : <p>No Documents yet</p>
        }
      </div>
    </>
  )
};

export default ListDocuments;

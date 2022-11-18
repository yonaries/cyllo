import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../..";
import { getUserCollections } from "../../../controllers/api/fetch-collections";
import "../css/file-list.css";
import FileTile from "./file-component";

interface Props {
  _id: string;
  color: string;
  name: string;
}

export const CollectionsList = () => {
  const [collections, setCollections] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const request = axios.CancelToken.source();
    const fetchData = async () => {
      const data = await getUserCollections(request.token);
      setCollections(data);
      setIsLoading(false);
    };
    fetchData().catch((err) => console.log(err));
    return () => request.cancel(); //preventing multiple same api calls
  }, [window.navigator.onLine, collections]);

  return (
    <>
      {isLoading ? (
        <div className="no-file">
          <p>Loading</p>
        </div>
      ) : (
        collections ? (
          collections.map((collection: Props, index: number) => (
            <FileTile
              setFiles={setCollections}
              fileId={collection._id}
              title={collection.name}
              color={"blue"}
              index={index}
              key={collection._id}
            />
          ))
        ) : (
          <div className="no-file">
            <p>No Collections</p>
          </div>
        )
      )
      }
    </>
  );
};

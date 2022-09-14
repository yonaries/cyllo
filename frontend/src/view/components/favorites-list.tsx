import axios from "axios";
import { useEffect, useState } from "react";
import { getUserCollections } from "../../controllers/api/fetch-collections";
import "../css/file-list.css";
import FileTile from "./file-component";

interface Props {
    _id: string;
    color: string;
    name: string;
}

export const FavoritesList = () => {
    const [favorites, setFavorites] = useState<any>();

    useEffect(() => {
        const request = axios.CancelToken.source();
        const fetchData = async () => {
            const data = await getUserCollections(request.token);
            setFavorites(data);
        };
        fetchData().catch((err) => console.log(err));
        return () => request.cancel(); //preventing multiple api calls
    }, [window.navigator.onLine, favorites]);

    return (
        <>
            {favorites ? (
                favorites.map((doc: Props, index: number) => (
                    <FileTile
                        setFiles={setFavorites}
                        key={doc._id}
                        fileId={doc._id}
                        title={doc.name}
                        color={"blue"}
                        index={index}
                    />
                ))
            ) : (
                <div className="no-file">
                    <p>No Favorites</p>
                </div>
            )}
        </>
    );
};

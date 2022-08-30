import { ObjectId } from "mongodb";

export const generateId = (file: string) => {
    if (file === "collection") {
        let id: any;
        id = "collection_" + new ObjectId().valueOf().toString();
        return id;
    }
    if (file === "document") {
        let id: any;
        id = "doc_" + new ObjectId().valueOf().toString();
        return id;
    }
    if (file === "user") {
        let id: any;
        id = "user_" + new ObjectId().valueOf().toString();
        return id;
    }
}
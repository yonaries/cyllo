import { ObjectId } from 'mongodb';

export interface IUser {
    _id: ObjectId,
    displayName: string,
    email: string,
    emailVerified: boolean,
    picture: string
}

interface FavoriteDocs {
    _docId: string
}

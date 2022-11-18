import { ObjectId } from 'mongodb';
export enum Visibility {
    private,
    public
}

interface Owner {
    _userId: string;
    email: string;
}

interface User {
    _userId: string;
    email: string;
}

interface Permission {
    anyOneWithLink: boolean;
    group?: User[];
}

export type IDocument = {
    _id: ObjectId;
    _collectionId: string;
    name: string;
    desc: string;
    owner: Owner;
    visibility: string;
    permittedTo: Permission;
    docData: any;
    progLang: string;
}

export type ICollection = {
    _id: ObjectId;
    name: string;
    owner: Owner;
    visibility: Visibility;
    permittedTo: Permission;
}
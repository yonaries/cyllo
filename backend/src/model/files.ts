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
    _id: string;
    _collectionId: string;
    name: string;
    owner: Owner;
    visibility: string;
    permittedTo: Permission;
    docData: any;
    progLang: string;
}

export type ICollection = {
    _id: string;
    name: string;
    owner: Owner;
    visibility: Visibility;
    permittedTo: Permission;
}
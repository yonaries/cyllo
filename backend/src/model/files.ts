enum Visibility {
    public,
    private
}

interface Owner {
    _userId: string;
    email: string;
}

interface Group {
    _userId: string;
    email: string;
}

interface Permission {
    anyOneWithLink: boolean;
    group: Group[];
}

export type FileDocument = {
    _id: string;
    _collectionId: string;
    name: string;
    owner: Owner;
    visibility: Visibility;
    permittedTo: Permission;
}

export type FileCollection = {
    _id: string;
    name: string;
    owner: Owner;
    visibility: Visibility;
    permittedTo: Permission;
}
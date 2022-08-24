export type User = {
    _id: string,
    displayName: string,
    email: string,
    password: string,
    googleToken: string,
    // favorites?: Array<FavoriteDocs>,
}

interface FavoriteDocs {
    _docId: string
}

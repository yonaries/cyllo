import axios, { CancelToken } from "axios";
import { auth } from './../../config/firebaseConfig';


export async function deleteCollection(id: string, cancelToken?: CancelToken) {
    const user = auth.currentUser
    if (!user) { console.log(`No Signed in user`); throw new Error('No Signed in user') };
    const token = await user.getIdToken();

    try {
        const result = await axios.delete(`http://localhost:5000/api/collection/${id}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    authorization: token,
                },
                cancelToken: cancelToken,
            }
        );
        return result.data;
    } catch (error) {
        if (axios.isCancel(error)) return;
        throw new Error(`${error}`);
    }
}
import axios, { CancelToken } from "axios";
import { auth } from '../../config/firebaseConfig';


export async function getUserDocuments(collId: string, cancelToken?: CancelToken) {
    const user = auth.currentUser
    if (!user) { console.log(`No Signed in user`); throw new Error('No Signed in user') };
    const token = await user.getIdToken();

    try {
        const result = await axios.get(`http://localhost:5000/api/document/${collId}`,
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
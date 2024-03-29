import axios, { CancelToken } from "axios";
import { auth } from "../../config/firebaseConfig";

interface Props {
    cancelToken?: CancelToken,
    id: string,
    name: string,
}

export async function updateCollections({ id, name }: Props) {
    const user = auth.currentUser
    if (!user) { console.log(`No Signed in user`); throw new Error('No Signed in user') };
    const token = await user.getIdToken();

    try {
        const result = await axios.put(`http://localhost:5000/api/collection/${id}`,
            {
                name: name
            }, {
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            }
        })
        return result.data;
    } catch (error) {
        throw new Error(`From server: ${error}`);
    }
}
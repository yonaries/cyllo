import axios, { CancelToken } from "axios";
import { User } from "firebase/auth";

interface Props {
    user: User,
    cancelToken: CancelToken,
    id: string,
    name: string,
}

export async function updateCollections({ id, name, user }: Props) {
    if (!user) { console.log(`No Signed in user`); return; };
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
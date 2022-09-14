import axios, { CancelToken } from "axios";
import { auth } from "../../config/firebaseConfig";

interface Props {
    name: string,
    collId: string,
    dataJson: any,
    tech: string,

}

export async function createDocument({ name, collId, dataJson, tech }: Props) {
    const user = auth.currentUser
    if (!user) { console.log(`No Signed in user`); throw new Error('No Signed in user') };
    const token = await user.getIdToken();

    try {
        const result = await axios.post(`http://localhost:5000/api/document/create`,
            {
                name: name,
                desc: 'this is a test from mobo',
                collId: collId,
                docJson: dataJson,
                tech: tech,
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
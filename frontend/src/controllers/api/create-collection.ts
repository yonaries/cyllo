import axios from "axios";
import { auth } from '../../config/firebaseConfig';


export async function createCollectionRequest(name: string) {
    const user = auth.currentUser;
    if (!user) { console.log("No Signed in user."); return; };
    const token = await user.getIdToken();

    try {

        const result = await axios({
            method: "post",
            url: "http://localhost:5000/api/collection/create",
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
            data: {
                name: name
            }
        });

        return result.data;
    } catch (error) {
        throw new Error(`From server: ${error}`);
    }
}
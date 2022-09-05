import axios from "axios";
import { auth } from '../../config/firebaseConfig';


export async function getUserCollections() {
    const user = auth.currentUser;
    if (!user) { console.log(`No Signed in user`); return; };
    const token = await user.getIdToken();

    try {

        const result = await axios({
            method: "get",
            url: `http://localhost:5000/api/collection`,
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            }
        });

        return result.data;
    } catch (error) {
        throw new Error(`From server: ${error}`);
    }
}
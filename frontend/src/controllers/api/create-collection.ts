import axios from "axios";
import { User } from "firebase/auth";

interface Props {
    user: User;
    name: string;
}

export async function createCollectionRequest({ user, name }: Props) {
    if (!user) {
        console.log(`No Signed in user`);
        throw new Error("No Signed in user");
    }
    const token = await user.getIdToken();

    try {
        const result = await axios.post(
            "http://localhost:5000/api/collection/create",
            {
                name: name,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    authorization: token,
                },
            }
        );
        return result.data;
    } catch (error) {
        throw new Error(`From server: ${error}`);
    }
}

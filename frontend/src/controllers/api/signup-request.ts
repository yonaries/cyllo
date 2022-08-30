import axios from "axios";

export async function signUpRequest(token: string, name: string) {
    try {
        const result = await axios({
            method: "post",
            url: "http://localhost:5000/api/user/signup",
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
            data: {
                displayName: name
            }
        });
        return result.data;
    } catch (error) {
        throw new Error(`From server: ${error}`);
    }
}
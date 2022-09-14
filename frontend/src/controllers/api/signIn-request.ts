import axios from "axios";

export async function authUserRequest(token: string, provider: string) {
    try {
        const result = await axios({
            method: "get",
            url: "http://localhost:5000/api/user/signin",
            headers: {
                "Content-Type": "application/json",
                authorization: token,
                provider: provider,
            },
        });
        return result.data;
    } catch (error) {
        throw new Error(`From server: ${error}`);
    }
}
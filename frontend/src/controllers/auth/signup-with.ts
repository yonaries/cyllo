import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseConfig from "../../config/firebaseConfig";
import Notify from "../../view/components/toast-message";
import { signUpRequest } from "../api/signup-request";

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export async function SignUpWithEmail(email: string, password: string, name: string) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        const token = await userCredential.user.getIdToken();
        const result = await signUpRequest(token, name);
        return result;

    } catch (error) {
        console.log(error);
        Notify({
            toastMessage: `Something went wrong! try again.`,
            toastType: "error",
        });
    }
}
import "../../view/css/login.css";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth";
import firebaseConfig from "../../config/firebaseConfig";
import Notify from "../../view/components/toast-message";
import { authUserRequest } from "../api/signIn-request";
import { errorToast } from "./error-toasts";

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export class SignInWith {
    constructor() { }

    public static async Google() {
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await signInWithPopup(auth, provider);
            const token = await userCredential.user.getIdToken();
            const result = await authUserRequest(token, provider.providerId);
            return result;
        } catch (error) {
            console.log(`Error: ${error}`);
            Notify({
                toastMessage: `Something went wrong! try again.`,
                toastType: "error",
            });
        }
    }

    public static async Email(email: string, password: string) {
        try {
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const token = await userCredential.user.getIdToken();
            const result = await authUserRequest(token, "cyllo");
            return result;
        } catch (error: any) {
            console.log(error.code);
            errorToast(error.code)
        }
    }
}

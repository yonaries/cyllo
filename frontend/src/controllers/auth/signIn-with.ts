import {
    AuthProvider, signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";
import Notify from "../../view/components/toast-message";
import "../../view/css/login.css";
import { authUserRequest } from "../api/signIn-request";
import { auth } from './../../config/firebaseConfig';
import { errorToast } from "./error-toasts";

export class SignInWith {
    constructor() { }

    public static async Provider(provider: AuthProvider) {
        try {
            const userCredential = await signInWithPopup(auth, provider);
            const token = await userCredential.user.getIdToken();
            const result = await authUserRequest(token, provider.providerId);
            Notify({
                toastMessage: `Authenticated as ${userCredential.user.email}`,
                Icon: false,
            });
            return result;
        } catch (error: any) {
            console.log(`Error: ${error}`);
            errorToast(error.code)
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
            Notify({
                toastMessage: `Authenticated as ${userCredential.user.email}`
            });
            return result;
        } catch (error: any) {
            console.log(error.code);
            errorToast(error.code)
        }
    }
}

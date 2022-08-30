import Notify from "../../view/components/toast-message";

export function errorToast(errorCode: string) {
    if (errorCode === "auth/invalid-email") {
        Notify({
            toastMessage: `Invalid Email! Check it again!`,
            toastType: "error",
        });
    }
    else if (errorCode === "auth/wrong-password") {
        Notify({
            toastMessage: `Incorrect Password Entered!`,
            toastType: "error",
        });
    }
    else if (errorCode === "auth/user-not-found") {
        Notify({
            toastMessage: `No cyllo found with your email. signup and get one.`,
            toastType: "error",
        });
    }
    else if (errorCode === "auth/too-many-requests") {
        Notify({
            toastMessage: `Too Many Attempts! Please Try again a hour later.`,
            toastType: "error",
        });
    }
    else Notify({
        toastMessage: `Something went wrong! try again.`,
        toastType: "error",
    });
}
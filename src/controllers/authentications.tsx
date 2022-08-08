import React from "react";

import "../view/css/login.css";
import googleLogo from "../assets/logos/google.png";

import firebaseConfig from "../config/firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signedIn, signedOut } from "./redux/reducers/authSlice";

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

type Props = {
  setToast: Function;
};

const SignInWith = ({ setToast }: Props) => {
  const dispatch = useDispatch();

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(signedIn(result));
      })
      .catch((error) => {
        console.log(error.code + error.message);

        setToast({
          toastMessage: "something went wrong",
          toastStatus: "error",
        });
      });
  }

  return (
    <>
      <button className="signIn-google" onClick={signInWithGoogle}>
        <img src={googleLogo} alt="sign in with google" />
        Sign In with Google
      </button>
    </>
  );
};

const SignOut: React.FC = () => {
  const dispatch = useDispatch();

  async function signOut() {
    await auth.signOut();
    dispatch(signedOut());
  }
  return <button onClick={signOut}>SignOut</button>;
};

export { SignInWith, SignOut };

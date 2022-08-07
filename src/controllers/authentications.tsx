import React from "react";

import "../view/css/login.css";
import googleLogo from "../assets/logos/google.png";
import githubLogo from "../assets/logos/github.png";

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from "../config/firebaseConfig";
import { useDispatch } from "react-redux";
import { signedIn } from "./redux/reducers/authSlice";
import { useAuthState } from "react-firebase-hooks/auth";

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

const SignInWith: React.FC = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    dispatch(signedIn(user));
  }

  return (
    <button className="signIn-google" onClick={signInWithGoogle}>
      <img src={googleLogo} alt="sign in with google" />
      Sign In with Google
    </button>
  );
};

const SignOut: React.FC = () => {
  function signOut() {
    auth.signOut();
  }
  return <button onClick={signOut}>SignOut</button>;
};

export { SignInWith, SignOut };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import firebaseConfig from "../../config/firebaseConfig";
import { SignInWith } from "../../controllers/auth/signIn-with";
import { signedOut } from "../../controllers/redux/reducers/authSlice";

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

const SignOut: React.FC = () => {
  const dispatch = useDispatch();
  async function signOut() {
    await auth.signOut();
    dispatch(signedOut());
  }
  return <button onClick={signOut}>SignOut</button>;
};

export { SignInWith, SignOut };

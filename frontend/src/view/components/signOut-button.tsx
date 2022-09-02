import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import firebaseConfig from "../../config/firebaseConfig";
import { signedOut } from "../../controllers/redux/reducers/authSlice";

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

const SignOut: React.FC = () => {
  const dispatch = useDispatch();

  async function signOut() {
    try {
      await auth.signOut();
      dispatch(signedOut());
      console.log("clicked");
    } catch (err) {
      console.log(err);
    }
  }

  return <button onClick={() => signOut()}>SignOut</button>;
};

export { SignOut };

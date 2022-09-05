import { useDispatch } from "react-redux";
import { auth } from "../../config/firebaseConfig";
import { signedOut } from "../../controllers/redux/reducers/authSlice";


const SignOut: React.FC = () => {
  const dispatch = useDispatch();

  async function signOut() {
    try {
      await auth.signOut().then((result) => {
        dispatch(signedOut());
        console.log(result);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return <button onClick={() => signOut()}>SignOut</button>;
};

export { SignOut };

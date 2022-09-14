import { useDispatch } from "react-redux";
import { auth } from "../../config/firebaseConfig";


const SignOut: React.FC = () => {

  async function signOut() {
    try {
      await auth.signOut()
      window.localStorage.removeItem('displayName');
    } catch (err) {
      console.log(err);
    }
  }

  return <button onClick={() => signOut()}>SignOut</button>;
};

export { SignOut };

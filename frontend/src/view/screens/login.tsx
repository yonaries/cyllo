import { FormEvent, useEffect, useState } from "react";

import googleLogo from "../../assets/logos/google.png";
import emailIcon from "../../assets/icons/email.svg";
import passwordIcon from "../../assets/icons/key.svg";
import { SignInWith } from "../components/signOut-button";
import "../css/login.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../";
import { signedIn } from "../../controllers/redux/reducers/authSlice";
import Notify from "../components/toast-message";

interface Props { }

const LoginScreen = ({ }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((state: RootState) => state.userStatus);
  const [email, setEmail] = useState('')
  const [pss, setPss] = useState('');

  useEffect(() => {
    if (userStatus.isLoggedIn && userStatus.user) {
      navigate("/dashboard");
    }
  }, [userStatus]);

  async function signinHandler(event: FormEvent, provider: string) {
    event.preventDefault();
    let promise;

    if (provider == 'google') promise = SignInWith.Google()
    if (provider == 'cyllo') promise = SignInWith.Email(email, pss)

    await Notify({
      toastMessage: "Signing in...",
      toastType: "wait",
      waitingFor: promise,
    });
    promise?.then((result) => dispatch(signedIn(result)))
  }
  return (
    <div className="main-container">
      <div className="login-panel">
        <div className="signIn-with-others"></div>
        <button className="signIn-google" onClick={(e) => signinHandler(e, 'google')}>
          <img src={googleLogo} alt="sign in with google" />
          Sign In with Google
        </button>
        <div className="divider">
          <hr />
          <div className="or">OR</div>
          <hr />
        </div>
        <form onSubmit={(e) => signinHandler(e, 'cyllo')} >
          <div className="signIn-with-email">
            <div className="Inputs">
              <div className="input">
                <img src={emailIcon} alt="" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" id="emailInput" />
              </div>
              <div className="input">
                <img src={passwordIcon} alt="" />
                <input type="password" value={pss} onChange={(e) => setPss(e.target.value)} placeholder="Password" id="emailInput" />
              </div>
            </div>
          </div>
          <button type="submit" className="signIn-btn">Login</button>
        </form>
        <p>Don't have cyllo? <a href="/signup">Signup</a> </p>
      </div>
    </div>
  );
};

export default LoginScreen;

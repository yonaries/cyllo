import { FormEvent, useEffect, useState } from "react";

import googleLogo from "../../assets/logos/google.png";
import emailIcon from "../../assets/icons/email.svg";
import passwordIcon from "../../assets/icons/key.svg";
import "../css/login.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../";
import { SignInWith } from "../../controllers/auth/signIn-with";
import Notify from "../components/toast-message";
import { useAuth } from "../../context/AuthContext";

interface Props { }

const LoginScreen = ({ }: Props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const { currentUser } = useAuth();

  if (currentUser) {
    navigate('/dashboard', { replace: true });
    Notify({
      toastMessage: `Authenticated as ${currentUser.email}`
    });
  }

  async function signinHandler(event: FormEvent, provider: string) {
    event.preventDefault();

    try {
      let promise;
      if (provider == 'google') promise = SignInWith.Google()
      if (provider == 'cyllo') promise = SignInWith.Email(email, password)

      await Notify({
        toastMessage: "Authenticating...",
        toastType: "wait",
        waitingFor: promise,
      });

    } catch (error) {
      console.log(`At login page: ${error}`);
    }
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
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="passwordInput" />
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
import React from "react";
import "../css/login.css";
import emailIcon from "../../assets/icons/email.svg";
import passwordIcon from "../../assets/icons/key.svg";
import { SignInWith } from "../../controllers/authentications";

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <div className="main-container">
      <div className="login-panel">
        <div className="signIn-with-others"></div>
        <SignInWith />
        <div className="divider">
          <hr />
          <div className="or">OR</div>
          <hr />
        </div>
        <div className="signIn-with-email">
          <div className="Inputs">
            <div className="input">
              <img src={emailIcon} alt="" />
              <input type="email" placeholder="Email address" id="emailInput" />
            </div>
            <div className="input">
              <img src={passwordIcon} alt="" />
              <input type="password" placeholder="Password" id="emailInput" />
            </div>
          </div>
        </div>

        <button className="signIn-btn">Login</button>
      </div>
    </div>
  );
};

export default LoginScreen;

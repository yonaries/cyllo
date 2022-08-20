import React, { useEffect, useState } from "react";

import "../css/login.css";
import emailIcon from "../../assets/icons/email.svg";
import passwordIcon from "../../assets/icons/key.svg";
import { SignInWith } from "../../controllers/oauth2";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../";
import ToastMessage from "../components/toast-message";

interface Props { }

const LoginScreen = ({ }: Props) => {
  const navigate = useNavigate();
  const userStatus = useSelector((state: RootState) => state.userStatus);

  const [toast, setToast] = useState({ toastStatus: "", toastMessage: "" });

  useEffect(() => {
    if (userStatus.isLoggedIn && userStatus.userData) {
      navigate("/dashboard");
    }
  }, [userStatus]);

  return (
    <div className="main-container">
      <div className="toast">
        {toast.toastStatus && (
          <ToastMessage type={toast.toastStatus} message={toast.toastMessage} />
        )}
      </div>
      <div className="login-panel">
        <div className="signIn-with-others"></div>
        <SignInWith setToast={setToast} {...toast} />
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

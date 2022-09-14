import { FormEvent, useEffect, useState } from "react";

import googleLogo from "../../assets/logos/google.png";
import emailIcon from "../../assets/icons/email.svg";
import passwordIcon from "../../assets/icons/key.svg";
import "../css/login.css";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../";
import { SignUpWithEmail } from "../../controllers/auth/signup-with";
import { SignInWith } from "../../controllers/auth/signIn-with";
import { signedIn } from "../../controllers/redux/reducers/authSlice";
import Notify from "../components/toast-message";

interface Props { }

const SignupScreen = ({ }: Props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userStatus = useSelector((state: RootState) => state.userStatus);
    const [email, setEmail] = useState('')
    const [pss, setPss] = useState('');
    const [name, setName] = useState('');

    async function submitHandler(event: FormEvent) {
        event.preventDefault();
        const promise = SignUpWithEmail(email, pss, name);

        await Notify({
            toastMessage: "Signing up...",
            toastType: "wait",
            waitingFor: promise,
        });
        navigate('/', { replace: true })
    }
    return (
        <div className="main-container">
            <div className="login-panel">
                <form onSubmit={(e) => submitHandler(e)} >
                    <div className="signIn-with-email">
                        <h2>Sign Up For Cyllo</h2>
                        <div className="Inputs">
                            <div className="input">
                                <img src={emailIcon} alt="" />
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Display Name" />
                            </div>
                            <div className="input">
                                <img src={emailIcon} alt="" />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" />
                            </div>
                            <div className="input">
                                <img src={passwordIcon} alt="" />
                                <input type="password" value={pss} onChange={(e) => setPss(e.target.value)} placeholder="Password" />
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="signIn-btn">SignUp</button>
                </form>
                <p>Already have a cyllo? <a href="/signin">Signin</a></p>
            </div>
        </div>
    );
};

export default SignupScreen;

import { initializeApp } from "firebase/app";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import AuthProvider from "./context/AuthContext";
import Dashboard from "./view/screens/dashboard";
import LoginScreen from "./view/screens/login";
import SignupScreen from "./view/screens/signup";
import Welcome from "./view/screens/welcome";


const App = () => {
  const [isOnline, setNetwork] = useState(window.navigator.onLine);
  const toastId = React.useRef<any>(null);

  //Notify Network is offline
  const NotifyNetwork = () =>
  (toastId.current = toast.error("No internet! Servers can't see you.", {
    toastId: 'network-toast',
    position: "top-center",
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
    closeButton: false,
  }));
  if (!isOnline) NotifyNetwork();

  //Notify Network is online
  const UpdateNetwork = () =>
    toast.update(toastId.current, {
      render: 'You are Back Online',
      type: toast.TYPE.SUCCESS,
      autoClose: 5000,
      closeOnClick: true,
    });
  if (isOnline) UpdateNetwork();

  // Handle Network Status
  const handleNetwork = () => {
    setNetwork(window.navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("offline", handleNetwork);
    window.addEventListener("online", handleNetwork);
    return () => {
      window.removeEventListener("offline", handleNetwork);
      window.removeEventListener("online", handleNetwork);
    };
  });

  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const [user, setUser] = useState<User>()

  return (
    <div className="App">
      <ToastContainer />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signin" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </AuthProvider>
    </div>

  );
};

export default App;
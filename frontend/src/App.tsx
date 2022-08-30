import React, { useEffect } from "react";
import "./App.css";
import LoginScreen from "./view/screens/login";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./controllers/authroute";
import Welcome from "./view/screens/welcome";
import Dashboard from "./view/screens/dashboard";
import { ToastContainer } from 'react-toastify';
import Notify from "./view/components/toast-message";
import SignupScreen from "./view/screens/signup";


const App = () => {
  useEffect(() => {
    if (!window.navigator.onLine) {
      Notify({
        toastMessage: "No Internet Connection. You are offline!",
        toastType: "error",
      });
    }
  }, [window.navigator.onLine])

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<AuthRoute />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signin" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;

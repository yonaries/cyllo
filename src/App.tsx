import React from "react";
import "./App.css";
import LoginScreen from "./view/screens/login";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./controllers/authroute";
import Welcome from "./view/screens/welcome";
import Dashboard from "./view/screens/dashboard";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthRoute />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;

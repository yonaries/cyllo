import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserState } from "../../controllers/redux/type";
import AuthRoute from "../../controllers/authroute";

const Welcome = () => {
  const navigate = useNavigate();
  const userStatus = useSelector((state: UserState) => state.userStatus);
  console.log(userStatus);

  useEffect(() => {
    if (userStatus.isLoggedIn && userStatus.userData) {
      navigate("/dashboard");
    }
  }, [userStatus]);
  return <div>WelCome</div>;
};

export default Welcome;

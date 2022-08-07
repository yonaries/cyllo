import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import React, { useEffect } from "react";
import { UserState } from "..";

const AuthRoute: React.FC = () => {
  const navigate = useNavigate();
  const userStatus = useSelector((state: UserState) => state.userStatus);
  console.log(userStatus);

  useEffect(() => {
    if (userStatus.isLoggedIn && userStatus.userData) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [userStatus]);

  return <div className="loading">loading</div>;
};
export default AuthRoute;

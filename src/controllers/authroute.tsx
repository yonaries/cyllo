import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import React, { useEffect, useState } from "react";
import { RootState } from "..";

const AuthRoute: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const userStatus = useSelector((state: RootState) => state.userStatus);
  // console.log(userStatus);

  useEffect(() => {
    if (userStatus.isLoggedIn && userStatus.userData) {
      setLoading(false);
      navigate("/dashboard");
    } else {
      setLoading(false);
      navigate("/login");
    }
  }, [userStatus]);

  return loading ? <div className="loading">loading</div> : <></>;
};
export default AuthRoute;

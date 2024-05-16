import { AppContext } from "../../../contexts/AppContext";
import React from "react";
import { useEffect, useContext } from "react";
import UserPool from "../../../UserPool";
import { useNavigate } from "react-router-dom";



export default function Logout() {
  const { logoutStatus, setLogoutStatus,setLoginStatus } = useContext(AppContext);
  const navigate = useNavigate();

 
  useEffect(() => {
    console.log("Logout Status", logoutStatus);
    console.log("Logout Status", UserPool.getCurrentUser());
    if (logoutStatus) {
      const currentUser = UserPool.getCurrentUser();
      if (currentUser) {
        currentUser.signOut();
      }
      setLogoutStatus(false);
      setLoginStatus('none');
      navigate("/login");
    }
  }, [setLogoutStatus, logoutStatus, navigate]);

  return null;
}

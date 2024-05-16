import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import { AppContext } from "../../contexts/AppContext";
import { SessionContext } from "../../contexts/SessionContext.js";
import { useAuth } from "../../hooks/Authentication/UseAuth.js"; // A custom hook to manage authentication
import MainDashBoard from "../../layouts/MainDashBoard.jsx";

const ProtectedRoute = ({ element: Element, allowedGroups, ...rest }) => {
  // const [loading, setLoading] = useState(true); // Add a loading state
 
  const { loginStatus, userGroups } = useContext(AppContext);
  console.log("log from ProtectedRoute js");
  const isAuthorized = () => {
    return (
      loginStatus === true &&
      allowedGroups.some((group) => userGroups.includes(group))
    );
  };
  // // Use the async keyword to mark the component as asynchronous
  // const { isAuthenticated, userGroups, loading } = useAuth(); // Get the loading state from useAuth
  // console.log('isAuthorized', isAuthenticated, userGroups, loading)
  // // Move this line before the return statement
  // const isAuthorized = isAuthenticated && allowedGroups.some(group => userGroups.includes(group));

  // Use isAuthorized in the ternary operator
  // Check if the loading state is true, and if so, render a loading indicator
  console.log("loginStatus", loginStatus);
  if (loginStatus === false) {
    return <Navigate to="/login" />;
  }
  return loginStatus === "loading" ? (
    <div>Loading...</div>
  ) : isAuthorized() ? (
    <>
      <MainDashBoard>  <Outlet /> </MainDashBoard>
          
         
    </>
  ) : (
    <Navigate to="/unauthorised" />
  );
};

export default ProtectedRoute;

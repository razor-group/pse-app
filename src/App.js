import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useContext, useEffect } from "react";
import UserPool from "./UserPool";
import { SessionContext } from "./contexts/SessionContext";
import { AppContext } from "./contexts/AppContext";
import Login from "./components/Authentication/Login/index";
import { fetchAuthSession } from "aws-amplify/auth";
import CouponUpload from "./pages/CouponUpload";
//import Coupon from "./components/Coupon";
import { Amplify } from "aws-amplify";
import config from "./amplifyconfiguration.json";
import { CookieStorage } from "aws-amplify/utils";
import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MainDashBoard from "./layouts/MainDashBoard";
import Logout from "./components/Authentication/Logout";
import ShopifyUpload from "./components/Shopify";
Amplify.configure(config);
cognitoUserPoolsTokenProvider.setKeyValueStorage(new CookieStorage());

export default function App() {
  const { setUserSession } = useContext(SessionContext);
  const { setLoginStatus, setUserGroups } = useContext(AppContext);

  
  useEffect(() => {
    (async () => {
      try {
        // Use await to wait for the fetchAuthSession promise to resolve
        const session = await fetchAuthSession();

        const groups = session.tokens.accessToken.payload["cognito:groups"] || [];
        setLoginStatus(true);
        setUserGroups(groups);
        setUserSession({
          accessToken: session.tokens.accessToken,
          idToken: session.tokens.idToken,
        });
        console.log("call from userGroups", session);
      } catch (error) {
        console.error("error", error);
        setLoginStatus(false);
      }
    })();
  }, []);

  //console.log("Login Status", loginStatus);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute allowedGroups={["coupon-admin", "coupon-view"]} />
          }
        >
          <Route path="/coupon-upload" element={<CouponUpload />} />
          <Route path="/" element={<ShopifyUpload />} />
          <Route path="/shopify-coupon-upload" element={<ShopifyUpload />} />
        </Route>

        <Route path="/login" element={<LoginWrapper />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

const LoginWrapper = () => {
  const { loginStatus } = useContext(AppContext);
  //console.log("Login Status", loginStatus);

  if (loginStatus != "none") {
    return <Login />;
  } else {
    return <Navigate to="/" />;
  }
};

const Wrapper = (component) => {
  const { loginStatus } = useContext(AppContext);
  //console.log("Login Status", loginStatus);

  if (loginStatus === "none") {
    return <Navigate to="/login" />;
  } else if (loginStatus === "loading") {
    return <div>Loading ...</div>;
  } else {
    return component;
  }
};

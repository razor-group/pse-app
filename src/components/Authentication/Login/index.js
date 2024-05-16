import React from "react";
import { signIn, fetchAuthSession } from 'aws-amplify/auth';
import { SessionContext } from "../../../contexts/SessionContext";
import { AppContext } from "../../../contexts/AppContext";
import UserPool from "../../../UserPool";
import { BeatLoader } from "react-spinners";



export default function Login() {
  const { setUserSession } = React.useContext(SessionContext);
  const { setLoginStatus, setUserGroups } = React.useContext(AppContext)

  const [loginState, setLoginState] = React.useState({
    email: "",
    password: "",
    needNewPassword: false,
    newPassword: "",
    cognitoUser: null,
    loading: false,
    message: null
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginState({...loginState, loading: true})

    try {
      const { isSignedIn, nextStep } = await signIn({ 'username': loginState.email, 'password': loginState.password});
      console.log(isSignedIn, nextStep)
      if (isSignedIn && nextStep['signInStep'] === 'DONE'){
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        console.log('accessToken', accessToken);
        console.log('idToken', idToken);
        setLoginState({...loginState, loading: false, message: null})
        setLoginStatus(true);
        setUserSession({accessToken, idToken});
        setUserGroups(accessToken.payload["cognito:groups"] ?? []);
      }
    } catch (err) {
      console.log('error signing in', err);
      // Handle error here TODO
      console.error("Login Failure: ", err);
      if(`${err}` === "NotAuthorizedException: Incorrect username or password.")
        setLoginState({...loginState, loading: false, message: 'Incorrect username or password.'})
      else
        setLoginState({...loginState, loading: false, message: `${err}`})
    }

    



    // cognitoUser.authenticateUser(authDetails, {

    //   onSuccess: (session) => {
    //       console.log("Login Success: ", session);

    //   },

    //   onFailure: (err) => {
          // console.error("Login Failure: ", err);
          // if(`${err}` === "NotAuthorizedException: Incorrect username or password.")
          //   setLoginState({...loginState, loading: false, message: 'Incorrect username or password.'})
          // else
          //   setLoginState({...loginState, loading: false, message: `${err}`})
    //   },

    //   newPasswordRequired: (userAttributes, requiredAttributes) => {
    //         // console.log(
    //         //   "Login New Password Required: ",
    //         //   userAttributes,
    //         //   requiredAttributes
    //         // );
    //         setLoginState({
    //           ...loginState,
    //           needNewPassword: true,
    //           cognitoUser: cognitoUser,
    //           loading: false,
    //           message: null
    //         });
    //   },
    // });
  };

  const handleNewPasswordChange = (e) => {
    e.preventDefault();

    setLoginState({...loginState, loading: true})

    loginState.cognitoUser.completeNewPasswordChallenge(
      loginState.newPassword,
      { name: "Name1", phone_number: "+919876543211" },
      {
        onSuccess: (sessionUserAttributes) => {
          // console.log("New Password Challenge Success: ", sessionUserAttributes);
          setLoginState({...loginState, loading: false, message: null})
          console.log(sessionUserAttributes)
          setLoginStatus(sessionUserAttributes.idToken.payload["cognito:groups"][0])
          setUserSession(sessionUserAttributes);
        },

        onFailure: (err) => {
          console.log("New Password Challenge Failed: ", err);
          if(`${err}`.startsWith('InvalidPasswordException'))
            setLoginState({...loginState, loading: false, message: 'Invalid New Password (Please follow the requirements)'})
          else
            setLoginState({...loginState, loading: false, message: `${err}`})
        },

        mfaSetup: (challengeName, challengeParameters) => {
          // console.log(challengeName, challengeParameters);
          loginState.cognitoUser.associateSoftwareToken(this);
        },
      }
    );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex max-w-md mx-auto  bg-white rounded-lg border-solid border border-borderColor flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <img src="./mainlogo.png" className="mx-auto h-10 w-auto " />

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        { loginState.loading ? <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm text-center"><BeatLoader/></div>
          :
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <div style={{color: 'red'}}> {loginState['message']!=null && `* ${loginState['message']}`} </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                <strong>Email address</strong>
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={loginState.email}
                  onChange={(e) => {
                    setLoginState({ ...loginState, email: e.target.value });
                  }}
                  className="block py-3 w-full border border-borderColor rounded-md  text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-1  focus:ring-indigo-600  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  <strong>Password</strong>
                </label>
                <div className="text-sm hidden">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={loginState.password}
                  onChange={(e) => {
                    setLoginState({ ...loginState, password: e.target.value });
                  }}
                  className="block py-3 w-full border border-borderColor rounded-md  text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-1  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              {!loginState.needNewPassword && (
                <button
                  type="submit"
                  className="flex  py-3 w-full justify-center rounded-md bg-indigo-600 px-3 text-transform: uppercase text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              )}
            </div>
          </form>
          {/*  --- New form input for new password --- */}
          {loginState.needNewPassword && (
            <div className="mt-4">
              <div>
                <u>New Password Requirements: </u> <br/>
                      Password min. length is 10 characters <br/>
                      Contains at least 1 number <br/>
                      Contains at least 1 special character <br/>
                      Contains at least 1 uppercase letter <br/>
                      Contains at least 1 lowercase letter <br/>
              </div>
              <form onSubmit={handleNewPasswordChange}>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    <strong>New Password</strong>
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={loginState.newPassword}
                    onChange={(e) => {
                      setLoginState({ ...loginState, newPassword: e.target.value });
                    }}
                    className="block py-3 w-full border border-borderColor rounded-md  text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-1  focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex mt-4 py-3 w-full justify-center rounded-md  border-solid border border-indigo-500  px-3 text-transform: uppercase text-sm font-semibold leading-6 text-indigo-500  shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      }

      </div>
    </div>
  );
}

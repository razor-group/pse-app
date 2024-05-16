import { useState, useEffect, useContext } from 'react';
import { fetchAuthSession } from 'aws-amplify/auth';
import { AppContext } from "../../contexts/AppContext.js";

export const useAuth = async () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // Add a loading state
    const {setLoginStatus} = useContext(AppContext)
    const [userGroups, setUserGroups] = useState([]);
  
    useEffect(() => {
      // Define and call the async function
      (async () => {
        try {
          // Use await to wait for the fetchAuthSession promise to resolve
          const session = await fetchAuthSession();
          
          setIsAuthenticated(true);
          setLoginStatus(true)
          
          const groups = session.tokens.accessToken.payload["cognito:groups"] || [];
          setUserGroups(groups);
        } catch (error) {
          // Handle any errors
          console.error(error);
          setIsAuthenticated(false);
        } finally {
          // Set the loading state to false when the async function is done
          setLoading(false);
        }
      })();
    }, []); // Add an empty dependency array to run the effect only once
  
    return { isAuthenticated, userGroups, loading }; // Return the loading state as well
  };

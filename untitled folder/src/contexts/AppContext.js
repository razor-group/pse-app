import React from 'react';


export const AppContext = React.createContext();

export const AppContextProvider = ({children}) => {

    const [currentTab, setCurrentTab] = React.useState('Home')
    const [loginStatus, setLoginStatus]  = React.useState('loading')
    const [logoutStatus, setLogoutStatus] = React.useState(false);
    const [userGroups, setUserGroups] = React.useState([])

    return (
        <AppContext.Provider value={{currentTab, setCurrentTab, loginStatus, setLoginStatus,logoutStatus,setLogoutStatus,userGroups,setUserGroups}}>
            {children}
        </AppContext.Provider>
    )
}
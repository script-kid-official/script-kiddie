import React, { useContext } from "react";
import { AppContext } from 'context/AppContext';
import { Redirect } from "react-router-dom";


const AuthRedirect = ({ children }) => {
    const [{ isAuthenticated }] = useContext(AppContext);

    return (
        <>
            {isAuthenticated && children}
            {!isAuthenticated && <Redirect to="/login" />}
        </>
    )
}

export default AuthRedirect;
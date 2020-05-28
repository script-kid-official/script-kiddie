import React, { useContext } from "react";
import { AppContext } from 'context/AppContext';
import { Redirect } from "react-router-dom";


const AuthGuard = ({ children }) => {
    const [{ isAuthenticated }] = useContext(AppContext);

    return (
        <div>
            {isAuthenticated && children}
            {!isAuthenticated && <Redirect to="/login" />}
        </div>
    )
}

export default AuthGuard;
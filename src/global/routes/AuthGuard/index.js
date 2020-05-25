import React, { useContext } from "react";
import { AppContext } from 'context/AppContext';
import { Redirect } from "react-router-dom";


const AuthGuard = ({ children }) => {
    const [{ isAuthenticated, user }, dispatch] = useContext(AppContext);

    const authCheck = localStorage.getItem("token");

    if (authCheck && authCheck !== user.jwtToken) {
        dispatch({ type: 'SET_JWT_TOKEN', payload: authCheck })
    }


    return (
        <div>
            {isAuthenticated && children}
            {!isAuthenticated && <Redirect to="/login" />}
        </div>
    )
}

export default AuthGuard;
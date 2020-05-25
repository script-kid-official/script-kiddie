import React, { useContext } from "react";
import { AppContext } from 'context/AppContext';
import {AppProtectedRoutes} from 'global/AppRoutes.module'
import { Route} from "react-router-dom";


const ProtectedRoutes = ({ children }) => {
    const [state] = useContext(AppContext);

    return (
        <>
            {(state.isAuthenticated) &&
                AppProtectedRoutes.map(parent => {
                    return <Route key={parent.id} exact path={parent.path} component={parent.page} />
                })
            }
        </>
    )
}

export default ProtectedRoutes;
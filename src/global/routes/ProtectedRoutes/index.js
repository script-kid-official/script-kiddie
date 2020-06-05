import React, { useContext } from "react";
// import { AppContext } from 'context/AppContext';
import { AppProtectedRoutes } from 'global/routes/Routes'
import { Route } from "react-router-dom";
import AuthRedirect from '../AuthRedirect';


const ProtectedRoutes = () => {
    // const [state] = useContext(AppContext);

    return (
        <AuthRedirect>
            {/* {(state.isAuthenticated) && */}
            {AppProtectedRoutes.map(parent => (
                <Route key={parent.id} exact path={parent.path} component={parent.page} />)
            )}
        </AuthRedirect>
    )
}

export default ProtectedRoutes;
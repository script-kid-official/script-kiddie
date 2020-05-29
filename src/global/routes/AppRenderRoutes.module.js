import React from 'react'
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ProtectedRoutes from './ProtectedRoutes';
import PageLogin from 'pages/PageLogin';
import Homepage from 'pages/Homepage';
import AuthGuard from './AuthGuard';

const AppRenderRoutes = () => {
    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.id}
                classNames="fade"
                timeout={{ enter: 800, exit: 0 }}>
                <Switch location={location}>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/login' component={PageLogin} />
                    <AuthGuard>
                        <ProtectedRoutes />
                    </AuthGuard>
                    <Route exact path='' render={() => `404 - Page Not Found`} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default AppRenderRoutes

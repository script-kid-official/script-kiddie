import React from 'react'
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ProtectedRoutes from '../ProtectedRoutes';
import PageLogin from 'pages/PageLogin';
import Homepage from 'pages/Homepage';
import ErrorPage from 'pages/ErrorPage';

const RenderRoutes = () => {
    let location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.id}
                classNames="fade"
                timeout={{ enter: 8000, exit: 0 }}>
                <Switch location={location}>
                    <Route exact path='/' component={Homepage} />
                    <Route exact path='/login' component={PageLogin} />
                    <Route exact path='/error' component={ErrorPage} />
                    <ProtectedRoutes />
                    <Route exact path='' render={() => `404 - Page Not Found`} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}

export default RenderRoutes

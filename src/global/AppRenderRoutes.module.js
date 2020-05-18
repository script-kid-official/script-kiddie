import React from 'react'
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AppRoutes from 'global/AppRoutes.module'

const AppRenderRoutes = () => {
    let location = useLocation();
    return (
        <TransitionGroup>
            <CSSTransition
                key={location.id}
                classNames="fade"
                timeout={{ enter: 800, exit: 0 }}>

                <Switch location={location}>
                    {AppRoutes.map(route => {
                        return <Route key={route.id} exact path={route.path} component={route.page} />
                    })}
                    <Route exact path='' render={() => `404 - Page Not Found`} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    )
}


export default AppRenderRoutes

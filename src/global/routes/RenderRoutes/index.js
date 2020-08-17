import React, { useContext } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PageLogin from "pages/PageLogin";
import Homepage from "pages/Homepage";
import ErrorPage from "pages/ErrorPage";
import { AppContext } from "context/AppContext";

const RenderRoutes = () => {
  let location = useLocation();
  const [{ routes }, dispatch] = useContext(AppContext);
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.id}
        classNames="fade"
        timeout={{ enter: 8000, exit: 0 }}
      >
        <Switch location={location}>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={PageLogin} />
          <Route exact path="/error" component={ErrorPage} />
          {routes.map((parent) => (
            <Route
              key={parent.id}
              exact
              path={parent.path}
              component={parent.page}
            />
          ))}
          <Route exact path="" render={() => `404 - Page Not Found`} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RenderRoutes;

import React, { useEffect, useContext } from "react";
import RenderRoutes from "global/routes/RenderRoutes";
import { getCookie } from "utils/common";
import { AppContext } from "context/AppContext";
import ThemeProvider from "global/theme/Theme";
import { CssBaseline } from "@material-ui/core";
import { AppHeader, AppLoader } from "components";
import { makeStyles } from "@material-ui/core/styles";
import { fetchContentBySlug } from "api";
import { generateRoutes } from "utils/common/routes";
import "global/global.css";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "rgb(58, 58, 58);",
    marginLeft: "250px",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

function App() {
  const [{ toggleDrawer, isAuthenticated, isLoading }, dispatch] = useContext(
    AppContext
  );
  const classes = useStyles();
  const cookie = getCookie("SK_JWT");

  useEffect(() => {
    console.log("App Started");
    dispatch({ type: "IS_LOADING", payload: true });
    fetchContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchContent = async () => {
    try {
      const response = await fetchContentBySlug();
      if (response.error)
        dispatch({
          type: "IS_ERROR",
          payload: { error: true, message: response.message },
        });
      if (response.success) {
        dispatch({ type: "SET_CONTENT", payload: response.data });
        dispatch({
          type: "CREATE_ROUTES",
          payload: generateRoutes(response.data),
        });
        dispatch({ type: "RESET_ERROR" });
      }
    } catch (error) {
      throw new Error("Api Error");
    }
    dispatch({ type: "IS_LOADING", payload: false });
  };

  // if (cookie && cookie !== user.jwtToken) {
  //   dispatch({ type: 'SET_JWT_TOKEN', payload: cookie })
  // }

  return (
    <div className="App">
      {isLoading && <AppLoader open={isLoading} />}
      {!isLoading && (
        <ThemeProvider>
          <CssBaseline />
          <div
            className={
              toggleDrawer && isAuthenticated
                ? classes.content
                : classes.contentShift
            }
          >
            <AppHeader />
            <RenderRoutes />
          </div>
        </ThemeProvider>
      )}
    </div>
  );
}

export default App;

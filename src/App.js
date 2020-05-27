import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import AppRenderRoutes from 'global/routes/AppRenderRoutes.module';
import ThemeProvider from 'global/Theme';
import { makeStyles } from '@material-ui/core/styles';
import { AppNavigation, AppHeader } from 'components';
import 'global/global.css';
import { getCookie } from "utils/common";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: '300px',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

function App() {
  const [{ toggleDrawer, isAuthenticated, user }, dispatch] = useContext(AppContext);
  const classes = useStyles();

  const cookie = getCookie('SKToken');

  if (cookie && cookie !== user.jwtToken) {
    dispatch({ type: 'SET_JWT_TOKEN', payload: cookie })
  }

  return (
    <ThemeProvider>
      <div className="App">
        {isAuthenticated && <AppNavigation />}

        <main className={toggleDrawer && isAuthenticated ? classes.content : classes.contentShift}>
          <AppHeader />
          <AppRenderRoutes />
        </main>

      </div>
    </ThemeProvider>

  );
}

export default App;

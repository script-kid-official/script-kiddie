import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import AppRenderRoutes from 'global/AppRenderRoutes.module';
import ThemeProvider from 'global/Theme';
import { AppFooter, AppNavigation, AppHeader } from 'components';
import 'global/global.css';
import { makeStyles } from '@material-ui/core/styles';

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
  const [{ toggleDrawer, isAuthenticated }] = useContext(AppContext);
  const classes = useStyles();
  return (
    <ThemeProvider>
      <div className="App">
        {isAuthenticated && <AppNavigation />}

        <main className={toggleDrawer && isAuthenticated ? classes.content : classes.contentShift}>
          <AppHeader />
          <AppRenderRoutes />
        </main>
        {isAuthenticated && <AppFooter />}

      </div>
    </ThemeProvider>

  );
}

export default App;

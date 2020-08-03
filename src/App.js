import React, { useContext } from 'react';
import RenderRoutes from 'global/routes/RenderRoutes';
import { getCookie } from "utils/common";
import { AppContext } from 'context/AppContext';
import ThemeProvider from 'global/theme/Theme';
import { CssBaseline } from '@material-ui/core';
import { AppHeader } from 'components';
import { makeStyles } from '@material-ui/core/styles';
import 'global/global.css';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: 'rgb(58, 58, 58);',
    marginLeft: '250px',
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}))

function App() {
  const [{ toggleDrawer, isAuthenticated, user }, dispatch] = useContext(AppContext);
  const classes = useStyles();
  const cookie = getCookie('SK_JWT');

  // if (cookie && cookie !== user.jwtToken) {
  //   dispatch({ type: 'SET_JWT_TOKEN', payload: cookie })
  // }

  return (
    <div className="App">
      <ThemeProvider>
        <CssBaseline />
        <div className={toggleDrawer && isAuthenticated ? classes.content : classes.contentShift}>
          <AppHeader />
          <RenderRoutes />
        </div>
      </ThemeProvider>
    </div>

  );
}

export default App;

import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function AppNavigation() {
  const classes = useStyles();
  const [{ isAuthenticated }, dispatch] = useContext(AppContext);
  const history = useHistory();

  const handleToggleDrawer = () => {
    dispatch({ type: 'TOGGLE_DRAWER' })
  };

  const handleLogout = () => {
    document.cookie = 'SK_JWT=; Max-Age=0;';
    dispatch({ type: 'REMOVE_AUTHENTICATED' })
    history.push('login');
  }
  return (
    <nav>
      <>
        <AppBar position="static" style={{ backgroundColor: '#2196f3' }}>
          <Toolbar>
            {isAuthenticated && <IconButton edge="start" className={classes.menuButton} onClick={handleToggleDrawer} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            }
            <Typography variant="h6" className={classes.title}>
              <Link to='/' style={{ color: 'white' }}>Script Kiddie - Beta</Link>
            </Typography>
            {!isAuthenticated && <Link to='/login' style={{ color: 'white' }}>
              <Button color="inherit">Login</Button>
            </Link>}
            {isAuthenticated && <Button color="inherit">Logout</Button>}
            {/* {isAuthenticated && <Button color="inherit" onClick={handleLogout}>Logout</Button>} */}
          </Toolbar>
        </AppBar>
      </>
    </nav>
  );
}


export default AppNavigation;

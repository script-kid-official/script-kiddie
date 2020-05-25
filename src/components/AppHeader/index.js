import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar ,Typography ,Button ,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000c'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppNavigation() {
  const classes = useStyles();
  const [state, dispatch] = useContext(AppContext);

  const handleToggleDrawer = () => {
    dispatch({ type: 'TOGGLE_DRAWER' })
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#2196f3'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} onClick={handleToggleDrawer} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>Script Kiddie</Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

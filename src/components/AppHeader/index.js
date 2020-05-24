import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { AppContext } from 'context/AppContext';

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

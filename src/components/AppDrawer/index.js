import React, { useContext, useState } from 'react';
import { AppContext } from 'context/AppContext';
import { AppProtectedRoutes } from 'global/routes/AppRoutes.module';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, List, Divider, IconButton } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AppDrawerItem from './AppDrawerItem';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#292929',
  },
  categoryHeaderPrimary: {
    color: '#fff',
    fontSize: '18px',
    textAlign: 'center'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-wend',
  },
  item: {
    textAlign: 'center'
  }
}));

function AppNavigation(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [{ toggleDrawer }, dispatch] = useContext(AppContext);

  const handleToggleDrawer = (event) => {
    dispatch({ type: 'TOGGLE_DRAWER' })
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={toggleDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleToggleDrawer}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: 'white' }} /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>

        {AppProtectedRoutes.map((parent) => (<List key={parent.id}>
          {parent.inNavigation && <AppDrawerItem parent={parent} classes={classes} />}
        </List>
        ))}
      </List>

    </Drawer>
  );
}



export default AppNavigation;

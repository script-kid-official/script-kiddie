import React, { Fragment, useContext } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import { AppProtectedRoutes } from 'global/AppRoutes.module';
import { AppContext } from 'context/AppContext';


const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#000c',
  },
  categoryHeaderPrimary: {
    color: '#70c0ff',
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

        {AppProtectedRoutes.map((parent) => (
          <Fragment key={parent.id}>
            {parent.inNavigation && <RenderParent classes={classes} id={parent.id} />}
            {parent.children && <RenderChildren classes={classes} children={parent.children} />}
            {parent.inNavigation && <Divider className={classes.divider} />}
          </Fragment>
        ))}
      </List>

    </Drawer>
  );
}

const RenderParent = ({ classes, id }) => {
  return <ListItem className={classes.categoryHeader}>
    <ListItemText classes={{ primary: classes.categoryHeaderPrimary }} >
      {id}
    </ListItemText>
  </ListItem>
}

const RenderChildren = ({ classes, children }) => {
  return <>
    {children.map(child => {
      return <NavLink key={child.id} className={classes.navLink} to={child.path}>
        <ListItem button className={clsx(classes.item)} >
          <ListItemText classes={{ primary: classes.itemPrimary }} >
            {child.id}
          </ListItemText>
        </ListItem>
      </NavLink>
    })
    }
  </>
}


export default AppNavigation;

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import AppDrawer from 'components/AppDrawer';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import AppRoutes from 'global/AppRoutes.module';

// import HomeIcon from '@material-ui/icons/Home';
// import PeopleIcon from '@material-ui/icons/People';
// import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
// import PermMediaOutlinedIcon from '@material-ui/icons/PhotoSizeSelectActual';
// import PublicIcon from '@material-ui/icons/Public';
// import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';
// import SettingsInputComponentIcon from '@material-ui/icons/SettingsInputComponent';
// import TimerIcon from '@material-ui/icons/Timer';
// import SettingsIcon from '@material-ui/icons/Settings';
// import PhonelinkSetupIcon from '@material-ui/icons/PhonelinkSetup';
const drawerWidth = 256;


const styles = (theme) => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white,
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover,&:focus': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemCategory: {
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  firebase: {
    fontSize: 16,
    color: theme.palette.common.white,
  },

  itemPrimary: {
    fontSize: 'inherit',
    color: 'white'
  },
  itemIcon: {
    minWidth: 'auto',
    marginRight: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
  },
  navLink: {
    color: 'white',
    '&.active span': {
      color: '#70c0ff'

    }
  }
});

function AppNavigation(props) {
  const { classes, ...other } = props;
  const [mobileOpen, setMobileOpen] = React.useState(true);


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className={classes.drawer}>
      <AppDrawer
        PaperProps={{ style: { width: drawerWidth } }}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      />
    </nav>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppNavigation);

import React from 'react';
import {AppDrawer} from 'components';

const drawerWidth = 256;

function AppNavigation(props) {

  return (
    <nav>
      <AppDrawer
        PaperProps={{ width: drawerWidth }}
        variant="temporary"
      />
    </nav>
  );
}


export default AppNavigation;

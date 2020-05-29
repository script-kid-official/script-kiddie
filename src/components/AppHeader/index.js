import React, { useContext } from 'react';
import { AppContext } from 'context/AppContext';
import { AppDrawer } from 'components';
import AppNavigation from 'components/AppNavigation';

export default function AppHeader() {
  const [{ isAuthenticated }] = useContext(AppContext);

  return (
    <>
      {isAuthenticated && <AppDrawer />}
      <AppNavigation />
    </>
  );
}

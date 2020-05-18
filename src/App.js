import React from 'react';
import { reusableFunction } from 'utils/common'
import { AppHeader, AppFooter } from 'components';
import { Container } from '@material-ui/core'
import AppRenderRoutes from 'global/AppRenderRoutes.module';
import 'global/global.css';

function App() {
  reusableFunction()
  return (
    <div className="App">
      <AppHeader />
      <Container style={{ marginBottom: '2em' }}>
        <AppRenderRoutes />
      </Container>
      <AppFooter />
    </div>
  );
}

export default App;

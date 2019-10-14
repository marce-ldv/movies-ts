import React from 'react';
import { Navbar } from '../Navbar';
import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from '../../core/store/store';
import { Home } from '../../pages/Home2';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Container fixed>
        <Home />
      </Container>
    </Provider>
  );
};

export default App;

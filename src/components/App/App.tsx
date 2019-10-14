import React from 'react';
import { Navbar } from '../Navbar';
import { Home } from '../../pages/Home';
import { Container } from '@material-ui/core';
import { Provider } from 'react-redux';
import store from '../../core/store';

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

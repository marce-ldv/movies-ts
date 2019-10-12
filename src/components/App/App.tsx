import React from 'react';
import { Navbar } from '../Navbar';
import { Home } from '../../Pages/Home';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Container fixed>
        <Home />
      </Container>
    </>
  );
};

export default App;

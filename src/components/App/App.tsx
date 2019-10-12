import React from 'react';
import { Navbar } from '../Navbar';
import Button from '@material-ui/core/Button';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        Movies TS
        <Button variant="contained" color="primary">
          Hello
        </Button>
      </header>
    </div>
  );
};

export default App;

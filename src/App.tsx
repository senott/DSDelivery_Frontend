import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
};

export default App;

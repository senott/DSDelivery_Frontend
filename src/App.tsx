import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './assets/styles/global.css';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
};

export default App;

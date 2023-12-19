import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './styles.css'


function App() {
  return (
   <BrowserRouter>
    <Main />
   </BrowserRouter>
  );
}

export default App;

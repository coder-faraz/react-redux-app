import logo from './logo.svg';
import './App.css';
import React from "react";
import { Provider } from 'react-redux';
import store from './State/Store';
import NavigationBar from './MyComponents/Navbar';
import Shop from './MyComponents/Shop';



function App() {





  return (

    <Provider store={ store }>
      <NavigationBar /> 
      <Shop />
    </Provider>

  );
}



export default App;


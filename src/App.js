import React from 'react';
import './App.css';
import Header from './components/Header';
//import Section from './components/Section';
//import ListItem from './components/ListItem';
import { Outlet } from 'react-router-dom';





function App() {
  return (
    <div className="App">
     <Header />
      <Outlet />


</div>
  );
}


export default App;
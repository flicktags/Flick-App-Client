import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './web/navbar/index';
import UserInfo from './web/user/useinfo';

function App() {
  
  return (
    <div >
  
        <NavBar/>
        <UserInfo/>
      
    </div>
  );
}

export default App;

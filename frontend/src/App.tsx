import React from 'react';
import './App.css';
import './main.css';
import Router from './routes';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';

function App() {
  
  return <>
    <div style={{height: "100vh", display: 'flex', flexDirection: 'column' }}>
      <HeaderNav/>
        <div style={{ flex: 1 }}>
          <Router/>
        </div>
      <Footer/>
    </div>
  </>;
}

export default App;

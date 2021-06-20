import React from 'react';
import logo from '../img/logo.png';


const Home = (props) => {
  return (
    <div className="App">
      <header className="App-header">
     <p className="textLogo">
        Kwiaciarnia
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="textLogo">
        ' Wśród kwiatów jak wśród dobrych i szczęśliwych myśli ' L.Staff
        </p> 
      </header>
    </div>
  );
}

export default Home;

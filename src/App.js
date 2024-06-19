import React, {Component} from 'react';
import Header from './component/header';
import Footer from './component/footer';
import Main from './component/main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Main></Main>
      
      <Footer></Footer>
    </div>
  );
}

export default App;

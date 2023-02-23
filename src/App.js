import './App.css';
import React from 'react';
import Header from './component/header/Header';
import Sidebar from './component/sidebar/Sidebar';
import Feed from './component/feed/Feed';
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='App__body'>
       <Sidebar />
       <Feed />


      </div>
      
    </div>
  );
}

export default App;

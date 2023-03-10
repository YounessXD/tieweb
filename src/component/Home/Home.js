import React from 'react'
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Feed from '../feed/Feed';
import Login from '../Login/Login';
export default function Home() {
  return (
    <>
    <Header/>
    <div className='App__body'>
     <Sidebar />
     <Feed />
     {/* <Post/> */}

    </div>
    </>
  )
}

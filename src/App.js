import './App.css';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './app/features/userSlice';
import {Routes,Route,Link} from "react-router-dom";
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import AuthUser from './API/http';
import { useDispatch } from 'react-redux';
function App() {
  const {getToken,LogOut,getUser,user}=AuthUser();
  
  
  const dispatch=useDispatch();
  // dispatch(login({user:user}))
  // const users =useSelector(selectUser);
  
  useEffect(()=>{
    
    if(getToken){ dispatch(login({user:user}))}else{ dispatch(logout());LogOut();}

  },[])

 
















  
  return (
    <div className="App">
      
  {!getToken() ?(
     <Routes>
      <Route path='/login' element={<Login/>} exact/>
      <Route path='/register' element={<Register/>} exact/>
    </Routes>
  ):(
    <Routes>
    <Route path='/home' element={<Home/>} exact/>
    </Routes>
  )


  }
     {/* <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
     </Routes> */}
    </div>
  );
}

export default App;

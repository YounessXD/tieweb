import React, { useState } from 'react'
import AuthUser from '../../API/http';
import { useNavigate } from 'react-router-dom';
import Register from '../Register/Register';
import { useDispatch } from 'react-redux';
import { login } from '../../app/features/userSlice';
export default function Login() {
    const navigate=useNavigate();
    const {http,setToken}=AuthUser();
    const [username,setUsername]= useState("");
    const [password,setPassword]=useState("");
    const dispatch = useDispatch();
    const submitLogin=()=> {
      http.post("/login",{email:username,password:password}).then((res)=>{
        setToken(res.data.user,res.data.access_token);
        dispatch(login({user:res.data.user}))
        
    }).catch(error => {
      console.log(error);
    });
    }
    const submitRegister=()=> {
      navigate('/register');

    }
    
    

  return (
    <div>
        <input name="username" value={username} onChange={e=>setUsername(e.target.value)}/>
        <input name="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <button  onClick={submitLogin}>login</button>
        <button  onClick={submitRegister}>register</button>
    </div>
  )
}

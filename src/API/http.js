import axios from "axios"
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Home from "../component/Home/Home";
export default function http() {
    const navigate=useNavigate();
    const getToken=()=>{
        const tokenString=sessionStorage.getItem("token");
        const userToken = JSON.parse(tokenString)
        return userToken;
    }

    const getUser=()=>{
        const userString=sessionStorage.getItem("user");
        const user_detail = JSON.parse(userString)
        return user_detail;
    }

    const [token,setToken]=useState(getToken('token'));
    const [user,setUser]=useState(getUser('user'));

    const LogOut =()=>{
        sessionStorage.clear();
        console.log("asdasdasdasd")
        navigate('/login');
    };
    
    const saveToken=(user,token)=>{

        sessionStorage.setItem('token',JSON.stringify(token))
        sessionStorage.setItem('user',JSON.stringify(user))

        setToken(token);
        setUser(user);
        navigate('/home');
       


    }


    const http = axios.create({
        baseURL:"http://127.0.0.1:8000/api",
        headers:{
            "content-type":"application/json",
            "Authorization":`Bearer ${token}`
        }
      
    
    });
    return{
        setToken:saveToken,
        token,
        user,
        getToken,
        LogOut,
        http,
    }
  
  

}


import React, { useEffect, useState } from 'react'
import './sidebar.css'
import {Avatar} from "@material-ui/core"
import AuthUser from '../../API/http'
import { useDispatch } from 'react-redux';
import { login } from '../../app/features/userSlice';
export default function Sidebar() {
    const {http,user}=AuthUser();
    const [userdetail,setUserDetails]=useState();
    const dispatch=useDispatch();
    
    useEffect(()=>{

        fetchuserdetail();

    },[])

    const fetchuserdetail =() =>{
        http.post('/me').then((res)=>{
                
                
                
                
            setUserDetails(res.data);
        })

    }


    const recentItem = (topic) =>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>

    )
    
        


  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://static9.depositphotos.com/1669299/1153/v/950/depositphotos_11532323-stock-illustration-white-icon-background.jpg"/>
            <Avatar  className='sidebar__avatar'/>
            <h2>{userdetail?.name}</h2>
            <h4>{userdetail?.email}</h4>
        </div>
        
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>who viewed you</p>
                <p className='sidebar__statNumber'>1</p>
            </div>
            <div className='sidebar__stat'>
                <p>Viewed on post</p>
                <p className='sidebar__statNumber'>1</p>
            </div>
        </div>
        <div className='sidebar__buttom'>
            <p>resent</p>
            {recentItem("happy")}
            {recentItem("games")}
            {recentItem("pc")}

        </div>



    </div>
  )
}
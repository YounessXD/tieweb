import { Event, Image, PostAdd, VideoCall } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import "./Feed.css"
import FeedOptions from './FeedOptions'
import Post from "../post/post"
import AuthUser from '../../API/http'

import axios from "axios"
import { formatDate } from '../../core/ui/formatDate/formatDate'


export default function Feed() {
  const {http,setToken}=AuthUser();
  const [inputs ,setInputs] = useState({
    post:''
  });
  const [posts,setPosts]=useState([]);


  useEffect(()=>{
    fetchAllusers()

  },[])

  const fetchAllusers=()=>{

    http.get('/posts', inputs)
    .then(response => {
      setPosts(response.data);
     
    })
    // posts.map(posts => console.log(posts.post));
  }
  
  








  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values=> ({...values,[name]:value}))
  };
  const submitForm = (event) =>{
    if (event.key === 'Enter') {

      
      console.log(inputs)
      http.post('/post', inputs)
      .then(response => {
        // handle success
        fetchAllusers();
        setInputs('')
      })
      .catch(error => {
        // handle error
      });

    }
  }
  
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
       
            <div className='feed__input'>
                
                <PostAdd />
                <input placeholder='Start a post' name="post" value={inputs.post||"" } onChange={handleChange} onKeyDown={submitForm}></input>
               
            </div>
            <div className='feed__items'>
                    <FeedOptions Icon={Image} Title={"image"}  Color={"skyblue"}/>
                    <FeedOptions Icon={VideoCall} Title={"VideoCall"}  Color={"coral"}/>
                    <FeedOptions Icon={Event} Title={"Event"}  Color={"burlywood"}/>


            </div>
        </div>
        {posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map(posts => <Post key={posts  .id} description={posts.post} postdate={formatDate(posts.created_at)} />)}
        
    </div>
  )
}


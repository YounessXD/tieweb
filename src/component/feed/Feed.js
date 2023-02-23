import { Event, Image, PostAdd, VideoCall } from '@material-ui/icons'
import React from 'react'
import "./Feed.css"
import FeedOptions from './FeedOptions'


export default function Feed() {
  return (
    <div className='feed'>
        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <PostAdd />
                <input placeholder='Start a post'></input>
            </div>
            <div className='feed__items'>
                    <FeedOptions Icon={Image} Title={"image"}  Color={"skyblue"}/>
                    <FeedOptions Icon={VideoCall} Title={"VideoCall"}  Color={"coral"}/>
                    <FeedOptions Icon={Event} Title={"Event"}  Color={"burlywood"}/>


            </div>

        </div>
    </div>
  )
}

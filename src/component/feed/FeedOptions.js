import { Event, VideoCall } from '@material-ui/icons'
import React from 'react'
import "./FeedOptions.css"

export default function FeedOptions({Icon,Title,Color}) {


  return (
            <div className='feed__item'>
                <Icon style={{ color:Color}}/>
                <h4 >{Title}</h4>



            </div>

      
  )
}

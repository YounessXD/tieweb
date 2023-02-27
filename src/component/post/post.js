import { Avatar  } from "@material-ui/core"
import { SendOutlined , ShareOutlined, InsertCommentOutlined,ThumbUpAltOutlined ,  MoreHoriz } from "@material-ui/icons"

import React from 'react'
import InputOptions from "./InputOptions"
import "./post.css"

export default function Post({profilename,postdate,photoUrl,message,description}) {
  return (
    <div className='post'>
        <div className="post__header">
          <div className="post__profile">
            <Avatar />
            <div className="post__profile__info">
              <a className="post__profile__name">gggggg</a>
              <a className="post__profile__dis" >dsadas</a>
              <a className="post__profile__date" >1.2.2</a>  
            </div>
          </div>
        <MoreHoriz />
        </div>  
        {description}
        <div className="post__reactions">
          <InputOptions Icon={ThumbUpAltOutlined}  Name={"Like"}/>
          <InputOptions Icon={InsertCommentOutlined}  Name={"Comment"}/>
          <InputOptions Icon={ShareOutlined}  Name={"Share"}/>
          <InputOptions Icon={SendOutlined}  Name={"Send"}/>
          {/* <div >     
            <ThumbUpAltOutlined />
            <a>Like</a>
          </div>
          <div>     
            <InsertCommentOutlined />
            <a>Comment</a>
          </div>
          <div>     
            <ShareOutlined />
            <a>Share</a>
          </div>
          <div>     
            <SendOutlined />
            <a>Send</a>
          </div> */}
        </div>
        

    </div>
  )
}

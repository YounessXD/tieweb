import React from 'react'
import "./HeaderOptions.css"
import {Avatar} from "@material-ui/core"
function HeaderOptions({avatar,Icon,titel}) {
  return (
    <div className='HeaderOptions'>
        {Icon && <Icon className="HeaderOptions__icon" />}
        {avatar && (<Avatar className="HeaderOptions__avatar" src={avatar}/>)}
        <h3 className='HeaderOptions__title'>{titel}</h3>



    </div>
  )
}

export default HeaderOptions
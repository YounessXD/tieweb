import React from 'react'
import "./HeaderOptions.css"
function HeaderOptions({Icon,titel}) {
  return (
    <div className='HeaderOptions'>
        {Icon && <Icon />}
        <h3>{titel}</h3>



    </div>
  )
}

export default HeaderOptions
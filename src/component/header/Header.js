import React from 'react'
import './Header.css'
import HeaderOptions from './HeaderOptions'
import SearchIcon from "@material-ui/icons/Search"
import Home from "@material-ui/icons/Home"
import { SupervisorAccount } from '@material-ui/icons'
import { BusinessCenterSharp } from '@material-ui/icons'
function Header() {
  return (
    <div className='header'>
     <div className='header__left'>
      <img src='https://www.custobar.com/images-theme/logo.png' alt=''></img>
      <div className='header__search'>
      <SearchIcon/>
        <input type="text"/>
              </div>


     </div>
     <div className='header__right'>
    <HeaderOptions Icon={Home} titel="Home"/>
    <HeaderOptions Icon={SupervisorAccount} titel="NetWork"/>
    <HeaderOptions Icon={BusinessCenterSharp} titel="Job"/>
    <HeaderOptions avatar="https://pbs.twimg.com/profile_images/719715216427216899/gm3XfRBg_400x400.jpg" titel="ME"/>



     </div>
      
      
      
      
      
    </div>
  )
}

export default Header
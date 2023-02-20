import React from 'react'
import './Header.css'
import HeaderOptions from './HeaderOptions'
import SearchIcon from "@material-ui/icons/Search"
import Home from "@material-ui/icons/Home"
import { SupervisorAccount } from '@material-ui/icons'
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
    <HeaderOptions Icon={Home} titel="home"/>
    <HeaderOptions Icon={SupervisorAccount} titel="network"/>



     </div>
      
      
      
      
      
    </div>
  )
}

export default Header
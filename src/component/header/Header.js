import React, { useEffect, useState } from 'react'
import './Header.css'
import HeaderOptions from './HeaderOptions'
import SearchIcon from "@material-ui/icons/Search"
import { SupervisorAccount, MeetingRoom, BusinessCenterSharp, Home } from '@material-ui/icons'
import AuthUser from '../../API/http'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../../app/features/userSlice';

function Header() {
  const dispatch = useDispatch();
  const { LogOut } = AuthUser();
  const user = useSelector(selectUser);
  const [imageSrc, setImageSrc] = useState('');

  // useEffect(() => {
  //   // Convert the binary data image to a normal image URL
  //   if (user?.user.picture) {
  //     const blob = new Blob([user.user.picture], { type: "image/png" });
  //     setImageUrl(URL.createObjectURL(blob));
  //   }
  // }, [user]);



  useEffect(() => {
    // fetch the binary image data from SQL
    const imageData = user?.user.picture;

    // send the binary image data to the server and save it as a file
    const formData = new FormData();
    formData.append('image', new Blob([imageData], { type: 'image/png' }), 'image.png');
    fetch('http://127.0.0.1:8000/api/', { method: 'POST', body: formData })
      .then(response => response.json())
      .then(data => {
        // set the URL of the image file as the image source
        setImageSrc(`http://127.0.0.1:8000/api/${data.filename}`);
      });
  }, [user?.user.picture]);



  const submitLogOut = () => {
    dispatch(logout());
    LogOut();
  };
  console.log(imageSrc)
  return (
    <div className='header'>
      <div className='header__left'>
        <img src='https://www.custobar.com/images-theme/logo.png' alt='' />
        <div className='header__search'>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOptions Icon={Home} titel="Home" />
        <HeaderOptions Icon={SupervisorAccount} titel="NetWork" />
        <HeaderOptions Icon={BusinessCenterSharp} titel="Job" />
        <img src={`file://${user?.user.picture}`} alt="Screenshot" />
        <div onClick={submitLogOut}>
          <HeaderOptions Icon={MeetingRoom} titel="LogOut" />
        </div>
      </div>
    </div>
  )
}

export default Header

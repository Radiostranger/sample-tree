import React from 'react'
import profile__imglogo from './profile__imglogo.svg';
import './ProfileImg.css';
import _Avatar from './_Avatar.png';


export default function profile_img() {
  return (
    <div>
      <img src={profile__imglogo} id="profile__img" alt="logo" />
      <i src={_Avatar} class="material-icons"></i>
      <h1 id="profile__img1"> Ikechukwu Albert</h1>
      
    </div>
  )
}

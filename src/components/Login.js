import React from 'react'
import "./Login.css";
import SpotifyLogo from "../images/spotifyLogo.png"
import { loginUrl } from '../spotify';
import SpotifyWebApi from 'spotify-web-api-js';

const Login = () => {

    // const logout = () => {
    //     setToken("")
    //     window.localStorage.removeItem("token")
    // }
  return (
    <div className='login'>
         <img className='spotify__logo' src={SpotifyLogo}/>
         <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login

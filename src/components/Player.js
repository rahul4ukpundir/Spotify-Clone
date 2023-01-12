import React from 'react'
import SideBar from './SideBar';
import Body from './Body';
import "./Player.css";
import Footer from './Footer';
import ReactAudioPlayer from 'react-audio-player';
const Player = () => {
  return (
    <div className='player'>
      <div className='player_body'>
      <SideBar />
     <Body />
      </div>
     <div className='player_footer'>
      <Footer />
     </div>

    </div>
  )
}

export default Player

import React from 'react'
import "./Footer.css";
import ReactAudioPlayer from 'react-audio-player';
import {useDataLayerValue} from "../contextAPI/DataLayer";

const Footer = () => {
  const [{selectedTrack}, dispatch] = useDataLayerValue();
  console.log("liverurl", selectedTrack)
  return (
    <div className='footer'>
      <div className='footer_left'>
      <img src={selectedTrack?.album?.images?.[0].url} className ="album_icon"/>
      <div className='album_info'>
            <h1>{selectedTrack?.name}</h1>
            <p>
                {selectedTrack?.artists?.map((artist)=> artist?.name).join(", ")} - {""}
                {selectedTrack?.album?.name}
            </p>
        </div>
      </div>
      <div className='footer_center'>
      <ReactAudioPlayer
        src={selectedTrack?.preview_url}
        autoPlay={true}
        className ="audio_player"
        controls={true}
        
      />
      </div>
      <div className='footer_right'></div>
    
    </div>
  )
}

export default Footer

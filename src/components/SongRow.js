
import React from 'react';
import "./SongRow.css";
import {useDataLayerValue} from "../contextAPI/DataLayer";

const SongRow = ({track, name}) => {
  const [{selectedTrack}, dispatch] = useDataLayerValue();

  const selectedSong = (track) =>{
    dispatch({type: "SET_SELECTEDTRACK", selectedTrack: track})
  }

  return (
    <div className={selectedTrack.name === name ? "songrow selected_song" : "songrow" } onClick={()=>selectedSong(track)}>
        <img src={track.album.images[0].url} className ="songrow_album_icon"/>
        <div className='songrow_info'>
            <h1>{track.name}</h1>
            <p>
                {track?.artists?.map((artist)=> artist?.name).join(", ")} - {""}
                {track?.album?.name}
            </p>
        </div>
      
    </div>
  )
}

export default SongRow

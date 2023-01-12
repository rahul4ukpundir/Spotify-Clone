import { getDefaultNormalizer } from '@testing-library/react';
import React, { useEffect } from 'react';
import "./SongRow.css";
import {useDataLayerValue} from "../contextAPI/DataLayer";

const SongRow = ({track, name}) => {
  const [{}, dispatch] = useDataLayerValue();
  const [selectedRow,setSelectedRow ] = React.useState(null);
  const songRow =['songrow'];

  const selectedSong = (track) =>{
    setSelectedRow(track.name);
    dispatch({type: "SET_SELECTEDTRACK", selectedTrack: track})
  }
  return (
    <div className={selectedRow === name ? "songrow selected_song" : "songrow" } onClick={()=>selectedSong(track)}>
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

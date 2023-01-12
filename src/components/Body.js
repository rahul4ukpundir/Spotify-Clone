import React from 'react'
import "./Body.css";
import Header from './Header';
import { useDataLayerValue } from '../contextAPI/DataLayer';
import { Avatar } from '@material-ui/core';
import { Favorite, More, MoreHoriz, PlayCircleFilled, SmokingRoomsTwoTone } from '@material-ui/icons';
import SongRow from './SongRow';
const Body = () => {
  const [{ playLists, songs }, dispatch] = useDataLayerValue();


  return (
    <div className='body'>
      <Header />
      <div className='body_info'>
        <img src="https://i.scdn.co/image/ab67706c0000bebb053d0eaa593f67736cf45c71" />
        <div className='body_info_text'>
          <strong className='body_playlist'>PLAYLIST</strong>
          <h2>{playLists && playLists?.items?.[0].name}</h2>
          <p>{playLists && playLists?.items?.[0].description}</p>
          <div className='body-info_footer_text'>
            <Avatar className='user_image' src="https://i.scdn.co/image/ab6775700000ee85b806d296bd523d66c136f0f8" />
            <h4>{playLists && playLists?.items?.[0]?.owner?.display_name} - 4 songs</h4>
          </div>
        </div>
      </div>
      
      <div className='body_songs'>
        <div className='body_icons'>
          <PlayCircleFilled className="body_song_icon_big_button " />
          <Favorite className ="body_song_icon"/>
          <MoreHoriz className ="body_song_icon"/>
        </div>

    {
      songs && songs?.tracks?.items.map((item)=><SongRow track = {item.track} name = {item.track.name}/>)
    }
      </div>

    </div>
  )
}

export default Body

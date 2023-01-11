import React from 'react'
import "./SideBar.css";
import spotifyMenuLogo from "../images/spotifyMenuLogo.png";
import SideBarMenuItem from './SideBarMenuItem';
import { Home } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import { LibraryMusic } from '@material-ui/icons';
import { useDataLayerValue } from '../contextAPI/DataLayer';
const SideBar = () => {
  const [{playLists}, dispatch] = useDataLayerValue();
   console.log("raul", playLists)
  return (
    <div className='sideBar'>
      <img src={spotifyMenuLogo} className ="sideBar_logo"/>
       <SideBarMenuItem title="Home" Icon={Home}/>
       <SideBarMenuItem title="Search" Icon={Search}/>
       <SideBarMenuItem title="Your Library" Icon={LibraryMusic}/>
      
      <span className='sideBar_playList'>PLAYLIST</span>
       <hr />

       {
        playLists && playLists?.items?.map((playList)=>
          <SideBarMenuItem title={playList?.name} Icon={LibraryMusic}/>
        )
       }
    </div>
  )
}

export default SideBar

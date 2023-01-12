import React from 'react'
import "./SideBarHR.css";
import spotifyMenuLogo from "../images/spotifyMenuLogo.png";
import SideBarMenuItem from './SideBarMenuItem';
import { Home, More, MoreHoriz } from '@material-ui/icons';
import { Search } from '@material-ui/icons';
import { LibraryMusic } from '@material-ui/icons';
import { useDataLayerValue } from '../contextAPI/DataLayer';
const SidebarHR = () => {
  const [{playLists}, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar-hr'>
      <img src={spotifyMenuLogo} className ="sideBar_logo"/>
       <SideBarMenuItem title="Home" Icon={Home}/>
       <SideBarMenuItem title="Search" Icon={Search}/>
       <SideBarMenuItem title="Your Library" Icon={LibraryMusic}/>
       <MoreHoriz className='more-item' />
    </div>
    
  )
}

export default SidebarHR

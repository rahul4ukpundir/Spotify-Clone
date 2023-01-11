import { Avatar } from '@material-ui/core';
import { Search } from '@material-ui/icons'
import React from 'react';
import { useDataLayerValue } from '../contextAPI/DataLayer';
import "./Header.css";

const Header = () => {
    const [{user}, dispatch] = useDataLayerValue();
    console.log(user)
  return (
    <div className='header'>
      <div className='header_left'>
        <Search className='header_searchicon'/>
        <input className='header_search' placeholder='What do you want to listen to?'/>
      </div>
      <div className='header_right'>
      <Avatar
       src ={user?.images?.[0]?.url}
      />
     <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import "./SideBarMenuItem.css";

const SideBarMenuItem = ({title, Icon}) => {
  return (
    <div className='sideBar_MenuItem'>
      {Icon && <Icon/>}
    <div className='sideBar_title'>{title}</div>
    </div>
  )
}

export default SideBarMenuItem

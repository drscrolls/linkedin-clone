import React from 'react'
import "./Sidebar.css";
import { Icon, Avatar } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="" alt=""/>
            <Avatar className="" />
            <h3>Andrew Nickson</h3>
            <h4>dr.scrolls@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">12,623</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on your post</p>
                <p className="sidebar__statNumber">400</p>
            </div>
        </div>

        <div className="sidebar__button">
            <p>Recent</p>
        </div>
    </div>

  )
}

export default Sidebar

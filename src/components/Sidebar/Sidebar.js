import React from 'react'
import "./Sidebar.css";
import { Icon, Avatar } from '@mui/material';

function Sidebar() {

    const recentItem = (topic) =>{
        return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }



  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://i.pinimg.com/originals/f1/3f/b3/f13fb34cc03956b16ad356f8122b9621.jpg" alt=""/>
            <Avatar className="sidebar__avatar" />
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

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>

  )
}

export default Sidebar

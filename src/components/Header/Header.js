import React from 'react';
import './Header.css';
import HeaderOption from '../HeaderOption/HeaderOption';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className="header">

        <div className="header__left">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
            
            alt=""/>

            <div className="header__search">
                <SearchIcon icon />
                <input type="text"/>
            </div>
        </div>


        <div className="header__right">
            <HeaderOption icon={HomeIcon} title="Home"/>
            <HeaderOption icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption icon={WorkIcon} title="Jobs"/>
            <HeaderOption icon={ChatIcon} title="Messaging"/>
            <HeaderOption icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption avatar="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"/>
        </div>

    </div>
  )

}

export default Header

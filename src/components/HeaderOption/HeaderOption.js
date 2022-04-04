import React from 'react';
import './HeaderOption.css';
import { Icon, Avatar } from '@mui/material';

function HeaderOption({avatar, icon, title}) {
  return (
    <div className="headerOption">
      {icon && <Icon component={icon} className="headerOption__icon"/>}
      {avatar && <Avatar className="headerOption__icon" src={avatar}/> }
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}

export default HeaderOption

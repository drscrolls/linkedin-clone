import React from 'react'
import "./InputOption.css"
import { Icon } from '@mui/material';

function InputOption({title, icon, color}){
    return (
        <div className="inputOption">
            <Icon component={icon} style={{color: color}}/>
            <h4>{title}</h4>
        </div>
    );
}

export default InputOption;
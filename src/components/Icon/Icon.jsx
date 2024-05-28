import React from 'react'
import classes from './icon.module.css'

const Icon = ({label, handleClick}) => {

  return (
    <div 
        className={classes.icon}
        onClick={handleClick}    
    >
        <img
            src='./images/Icon_4.ico'
            className = {classes.AppIcon}
            alt='icon'
        />
        <p className={classes.text}>
            {label}
        </p>
    </div>
  )
}

export default Icon
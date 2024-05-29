import React from 'react'
import classes from './icon.module.css'

import { launchApp } from '../../stateManager/LaunchedAppsSlice'
import { useDispatch } from 'react-redux'

import icons from '../../constats';

const Icon = ({app, top, left, imageSrc}) => {
  const dispatch = useDispatch()

  return (
    <div
      style={{top:top, left:left}} 
      className={classes.icon}
      onClick={() => dispatch(launchApp({app:`${app}`, icon:''}))}    
    >
        <img
            src={icons[app]}
            className = {classes.AppIcon}
            alt='icon'
        />
        <p className={classes.text}>
            {app}
        </p>
    </div>
  )
}

export default Icon
import React from 'react'
import classes from './MiniIcon.module.css'

import icons from '../../../../constats'

import { useDispatch } from 'react-redux'
import { focusApp } from '../../../../stateManager/LaunchedAppsSlice'

const MiniIcon = ({app, focused}) => {
  const dispatch = useDispatch()

  return (
    <div 
      className={[classes.MiniIcon, focused ? classes.focused : ''].join(' ')}
      onClick={() => dispatch(focusApp({app:app}))}  
    >
        <img
          className={classes.icon}
          src={icons[app]}
        />
    </div>
  )
}

export default MiniIcon
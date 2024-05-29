import React from 'react'
import classes from './LowBar.module.css'
import Watches from './elements/Watches/Watches'

import { useSelector, useDispatch  } from 'react-redux'
import { showMenu } from '../../stateManager/LaunchedAppsSlice'

import MiniIcon from './elements/miniIcon/MiniIcon'

const LowBar = () => {
    const dispatch = useDispatch()
    const apps = useSelector(state => state.apps.apps)
    const focused = useSelector(state => state.apps.focused)

  return (
    <div 
        className = {classes.Bar}
        onClick={(e)=>{
            e.stopPropagation()
        }}
    >
        <div className={classes.startButton} onClick={(e)=>dispatch(showMenu())}>
            <p className={classes.startText}>Start</p>
        </div>
        <div className={classes.tabsContainer}>
            {apps.map(app => <MiniIcon app={app} focused={focused === app}/>)}
        </div>
        <div className={classes.rightBar}>
            
            <Watches/>
        </div>
    </div>
  )
}

export default LowBar
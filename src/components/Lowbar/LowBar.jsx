import React from 'react'
import classes from './LowBar.module.css'
import Watches from './elements/Watches/Watches'

const LowBar = () => {
  return (
    <div className = {classes.Bar}>
        <div className={classes.startButton}>
            <p className={classes.startText}>Start</p>
        </div>
        <div className={classes.tabsContainer}>
            <div style={{width:'50px', background: '#020201', height:'100%', margin:'0px 10px 0px 10px'}}>
                TAB
            </div>
            <div style={{width:'50px', background: '#020201', height:'100%', margin:'0px 10px 0px 10px'}}>
                TAB
            </div>
            <div style={{width:'50px', background: '#020201', height:'100%', margin:'0px 10px 0px 10px'}}>
                TAB
            </div>
        </div>
        <div className={classes.rightBar}>
            <Watches/>
        </div>
    </div>
  )
}

export default LowBar
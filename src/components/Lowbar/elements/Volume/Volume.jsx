import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setVolume } from '../../../../stateManager/SettingsSlice'
import { showVolume } from '../../../../stateManager/LaunchedAppsSlice'

import classes from './Volume.module.css'

const Volume = () => {

const volume = useSelector(state => state.settings.volume)
const show = useSelector(state => state.apps.volume)
const dispatch = useDispatch()

  return (
    <div className={[classes.volume, show ? classes.shown: ''].join(' ')}>
        {show &&
        <div className={classes.inputContainer} onClick={e => e.stopPropagation()}>
            <input
                type='range'
                min='0'
                max='100'
                step="1"
                value={volume}
                onChange={(e) => dispatch(setVolume(e.target.value))}
                className={classes.input}
            />
        </div>
        }
        <div className={classes.button} onClick={()=>dispatch(showVolume())}>
            🔊
        </div>
    </div>
  )
}

export default Volume
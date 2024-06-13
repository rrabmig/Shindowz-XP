import React, { useEffect, useRef} from 'react'
import classes from './window.module.css'

import { closeApp, focusApp } from '../../stateManager/LaunchedAppsSlice'
import { useDispatch, useSelector } from 'react-redux'
import appsMap from '../Apps/appsMap'

const Window = ({app}) => {
  let bar = useRef()
  let win = useRef()
  let focused = useSelector(state => state.apps.focused)

  let dispatch = useDispatch()

  useEffect(() => {
    win.current.style.left = '200px'
    win.current.style.top = '200px'
    bar.current.addEventListener("mousedown", () => {
      bar.current.addEventListener('mousemove', handleMove)
    })
    win.current.addEventListener('mouseup', () => {
      if (bar) {
        bar.current.removeEventListener("mousemove", handleMove)
      }
    })
  }, [])

  function handleMove({movementX, movementY}) {
    win.current.style.left = `${parseInt(win.current.style.left) + movementX}px`
    win.current.style.top = `${parseInt(win.current.style.top) + movementY}px`
  }

  return (
    <div 
      className={['window', classes.Window, focused === app? classes.focused : ''].join(' ')}
      ref={win}
      onClick={(e)=>{
        dispatch(focusApp({app:app}))
        e.stopPropagation()
      }}
    >
      <div className="title-bar" ref={bar} style={{cursor: "move"}}>
        <div className="title-bar-text"> {app} </div>
        <div className="title-bar-controls">
          <button 
            aria-label="Close" 
            onClick={() => dispatch(closeApp({app:`${app}`}))} 
            style={{cursor:'pointer'}}
          />
        </div>
      </div>

      <div className={['window-body', classes.WindowBody].join(' ')}>
        {appsMap.get(app)}
      </div>
    </div>
  )
}

export default Window
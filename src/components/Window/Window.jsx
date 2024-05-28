import React, { useEffect, useRef} from 'react'
import classes from './window.module.css'
import PhotoFilter from '../Apps/PhotoFilter/PhotoFilter'

const Window = ({onClose, app}) => {
  let bar = useRef()
  let win = useRef()

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

  let thisApp
  switch (app) {
    case 'PhotoFilter':
      thisApp = <PhotoFilter/>
      break
    default:
  }

  return (
    <div 
      className={['window', classes.Window].join(' ')}
      ref={win}
    >
      <div className="title-bar" ref={bar} style={{cursor: "move"}}>
        <div className="title-bar-text"> {app} </div>
        <div className="title-bar-controls">
          <button aria-label="Close" onClick={onClose} style={{cursor:'pointer'}}/>
        </div>
      </div>
      <div className={['window-body', classes.WindowBody].join(' ')}>
        {thisApp}
      </div>
    </div>
  )
}

export default Window
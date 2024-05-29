import React from 'react'
import classes from './Menu.module.css'

const Menu = () => {
  return (
    <div 
      className={classes.Menu}
      onClick={(e)=>{
        e.stopPropagation();
      }}
    >
        <div>
          User
        </div>
        <div className={classes.middle}>
          <div className={classes.left}>
            left
          </div>
          <div className={classes.right}>
            right
          </div>
        </div>
        <div className={classes.button}>
          buttons
        </div>
    </div>
  )
}

export default Menu
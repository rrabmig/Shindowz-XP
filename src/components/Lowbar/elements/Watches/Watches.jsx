import React from 'react'
import { useState } from 'react';
import classes from './Watches.module.css'

const Watches = () => {
    let currentTimeDate = new Date();
    const [time, setTime] = useState(`${currentTimeDate.getHours()}:${currentTimeDate.getMinutes()}`)
    setInterval(() => {
        let currentTimeDate = new Date();
        setTime(`${currentTimeDate.getHours()}:${currentTimeDate.getMinutes()}`)
    }, 15000)

  return (
    <div className={classes.Watches}>
       {time}
    </div>
  )
}

export default Watches
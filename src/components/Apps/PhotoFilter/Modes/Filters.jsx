import React from 'react'
import classes from './Filters.module.css'

const Filters = () => {

    const applyFilter = (filter) => {
        console.log(filter)
    }

  return (
    <div className={classes.filtersContainer}>
        <h3>Filters</h3>
        <button onClick={() => applyFilter('grayscale')}>Grayscale</button>
        <button onClick={() => applyFilter('sepia')}>Sepia</button>
        <button onClick={() => applyFilter('blur')}>Blur</button>
        <button onClick={() => applyFilter('invert')}>Invert</button>
        <button onClick={() => applyFilter('brightness')}>Brightness</button>
        <button onClick={() => applyFilter('contrast')}>Contrast</button>
        <button onClick={() => applyFilter('hue-rotate')}>Hue Rotate</button>
    </div>
  )
}

export default Filters
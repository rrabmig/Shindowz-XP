import React, {useState, useRef} from 'react'
import classes from './PhotoFilter.module.css'
import { saveAs } from 'file-saver';

const PhotoFilter = () => {
  let canvas = useRef()
  const [mode, setmode] = useState(null)

  function handleImageLoad (e) {
    clearCanvas()
    const file = e.target.files?.[0]
    if (!file) return;
    if (file.size > 2097152) return
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      const imageUrl = reader.result?.toString() || '';
      const imageElement = new Image();
      imageElement.src = imageUrl

      imageElement.addEventListener("load", () => {
          const ctx = canvas.current.getContext('2d')
          ctx.drawImage(imageElement, 0, 0, 200, 200)
      })
    })

    reader.readAsDataURL(file)
  }

  function clearCanvas() {
    const ctx = canvas.current.getContext('2d')
    ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
  }

  function undo() {
    // todo: implement undo functionality
  }

  function saveCanvas () {
    canvas.current.toBlob((blob) => saveAs(blob, 'PhotoFilter.png'))
  }

  return (
    <div className={classes.thisApp}>

      <div className={classes.ui}>
        <input 
          type="file" 
          className={classes.file} 
          id='file' accept="image/png, image/jpeg"
          onChange={handleImageLoad}
        />
        <button style={{padding:'0'}}>
          <label for="file" className={classes.fileButton}>
            Select photo
          </label>
        </button>

        <button onClick={clearCanvas}>
          Clear
        </button>

        <button onClick={undo}>
          Undo
        </button>

        <hr/>

        <button >
          Filters
        </button>

        <button >
          Paint
        </button>

        <hr/>

        <button onClick={saveCanvas}>
          Save
        </button>
        
      </div>



      <div className={classes.canvasContainer}>
        <canvas className={classes.canvas} ref={canvas}>

        </canvas>
      </div>



      <div className={classes.params}>
          <button>jdj</button>
      </div>
    </div>
  )
}

export default PhotoFilter
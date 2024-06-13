import React, {useState, useRef} from 'react'
import classes from './PhotoFilter.module.css'
import { saveAs } from 'file-saver';
import Filters from './Modes/Filters';
import Paint from './Modes/Paint';


const MAX = 500


const PhotoFilter = () => {
  let canvas = useRef()
  const [mode, setmode] = useState(null)
  const [stack, setStack] = useState([])

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
          let width = imageElement.width
          let height = imageElement.height

          let w = imageElement.width
          let h = imageElement.height

          if (width > height) {
            if (width > MAX) {
              height *= MAX / width
              width = MAX
            }
          } else {
            if (height > MAX) {
              width *= MAX / height
              height = MAX
            }
          }
          imageElement.width = 100
          imageElement.height = 100
          ctx.drawImage(imageElement, 0, 0, 100, 100)
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

        <button onClick={() => setmode('filters')}>
          Filters
        </button>

        <button onClick={() => setmode('paint')}>
          Paint
        </button>

        <hr/>

        <button onClick={saveCanvas}>
          Save
        </button>
        
      </div>



      <div className={classes.canvasContainer}>
        <canvas className={classes.canvas} ref={canvas}/>
      </div>



      <div className={classes.params}>
        {mode === 'filters' &&
          <Filters/>
        }

        {mode === 'paint' && 
          <Paint/>
        }
      </div>
    </div>
  )
}

export default PhotoFilter
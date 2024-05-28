import { useRef, useState } from 'react';
import './App.css';


import Window from './components/Window/Window';
import Icon from './components/Icon/Icon';
import AlreadyOpened from './components/Modals/AlreadyOpened/AlreadyOpened';
import LowBar from './components/Lowbar/LowBar';

function App() {
  const background = useRef()
  const [showWindow, setShowWindow] = useState(false)

  const [showAlreadyOpened, setShowAlreadyOpened] = useState(false)

  function clickIcon() {
    if (showWindow) {
      setShowAlreadyOpened(true)
      const errSound = new Audio('sounds/erro.mp3')
      errSound.play()
    } else {
      setShowWindow(true)
    }
  }

  return (
    <div className="App" ref={background}>
      <Icon label={'PhotoFilterXP'} handleClick={clickIcon}/>
      
      {showWindow &&
        <Window 
          background={background.current}
          onClose={() => {setShowWindow(false)}}
          app = 'PhotoFilter'
        />
      }

      {showAlreadyOpened &&
        <AlreadyOpened
          onClose = {() => {setShowAlreadyOpened(false)}}
        />
      }

      <LowBar/>
    </div>
  );
}

export default App;

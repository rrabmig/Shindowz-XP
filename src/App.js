import { useRef, useState } from 'react';
import './App.css';


import Window from './components/Window/Window';
import Icon from './components/Icon/Icon';
import LowBar from './components/Lowbar/LowBar';
import ErrorModal from './components/Modals/ErrorModal';

import {useDispatch, useSelector } from 'react-redux';
import Menu from './components/menu/Menu';
import { hideMenu } from './stateManager/LaunchedAppsSlice';


function App() {
  const dispatch = useDispatch()
  const showError = useSelector(state => state.error.show)
  const apps = useSelector(state => state.apps.apps)
  const menu = useSelector(state => state.apps.menu)

  return (
    <div 
      className="App"
      onClick={()=>dispatch(hideMenu())}
    >
      {/* app icons */}
      <Icon app={'PhotoFilter'} top={'50%'} left={'200px'}/>
      <Icon app={'test'} top={'30%'} left={'200px'}/>
      <Icon app={'calculator'} top={'30%'} left={'300px'}/>
      
      {apps.map(app => <Window app={app}/>)}

      {showError &&
        <ErrorModal/>
      }

      {menu &&
        <Menu/>
      }
      
      <LowBar/>
    </div>
  );
}

export default App;

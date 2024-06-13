import React from 'react'
import classes from './Menu.module.css'
import icons from '../../constats'

const Menu = () => {
  const rand = Math.floor(Math.random() * 100)

  const rightTabs = ['test1', 'test2', 'test3']
  const leftTabs = ['test1', 'test2', 'test3']


  return (
    <div 
      className={classes.Menu}
      onClick={(e)=>{
        e.stopPropagation();
      }}
    >
        <div className={classes.user}>
          <img 
            className={classes.userImg}
            src={`https://randomuser.me/api/portraits/${rand % 2 === 0 ? 'men' : 'women'}/${rand}.jpg`}
            alt='userPic'
          />
          <h3 className={classes.userName}>RandomUser</h3>
        </div>

        <div className={classes.middle}>
          <div className={classes.left}>
            {leftTabs.map((tabName, index) => (
              <div className={classes.leftTab} key={index}>
                <img className={classes.leftTabImg}
                src={icons.PhotoFilter}
                alt='PhotoFilter'
              />
              <p className={classes.leftTabTXT}> {tabName} </p>
            </div>
            ))}
          </div>
          <div className={classes.right}>
            {rightTabs.map((tabName, index) => (
              <div className={classes.rightTab} key={index}>
                <img 
                  className={classes.rightTabImg}
                  src={icons.PhotoFilter}
                  alt='PhotoFilter'
                />
                <p className={classes.rightTabTXT}> {tabName} </p>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.buttons}>
          <img
            className={classes.buttonImg}
            src={icons.LogOff}
            alt='logOff (reload)'
            onClick={() => window.location.reload()}
          />
          <p className={classes.buttonTXT}>Log Off</p>
          <img
            className={classes.buttonImg}
            src={icons.turnOff}
            alt='turnOff'
            onClick={() => {
              window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            }}
          />
          <p className={classes.buttonTXT}>Turn Off</p>
          
        </div>
    </div>
  )
}

export default Menu
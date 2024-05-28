import React from 'react'

const AlreadyOpened = ({onClose}) => {
  return (
    <div
        style={{height:'100%', width:'100%', zIndex:10}}
        onClick={(e) => {
            const errSound = new Audio('sounds/erro.mp3')
            errSound.play()
            e.stopPropagation()
        }}
    >
        <div className="window" style={{width: "300px", position:'absolute', top:'40%', left:'40%'}}>
            <div className="title-bar">
                <div className="title-bar-text">Error!</div>
                <div className="title-bar-controls">
                <button 
                    aria-label="Close"
                    onClick={(e)=>{
                        onClose()
                        e.stopPropagation()
                    }}
                />
                </div>
            </div>
            <div className="window-body">
                <p>This app is already opened</p>
            </div>
        </div>
    </div>
  )
}

export default AlreadyOpened
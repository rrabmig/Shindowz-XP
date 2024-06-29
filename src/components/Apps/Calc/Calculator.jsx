import React from 'react'
import classes from './Calculator.module.scss'

import { useState } from 'react'

const Calculator = () => {
    const [value, setValue] = useState('')

  return (
    <div className={classes.Calculator}>

        <input 
            value={value} 
            type="text" 
            className={classes.input}
            onChange={e => {}}
            onFocus={e => {}}
        />

        <div className={classes.buttonstContainer}>
            <div className={classes.longButtons}>
                <div className={classes.empty}/>
                <button className={classes.backspace}>
                    Backspace
                </button>
                <button className={classes.CE}>
                    CE
                </button>
                <button className={classes.C}>
                    C
                </button>
            </div>
            
            <button className={classes.normal}>
                MC
            </button>
            <div className={classes.normal}> <button>
                7
            </button></div>
            <button className={classes.normal}> 
                8
            </button>
            <button className={classes.normal}>
                9
            </button>
            <button className={classes.normal}>
                /
            </button>
            <button className={classes.normal}>
                sqrt
            </button>
            
            <div className={classes.normal}> <button>MR</button></div>
            <div className={classes.normal}> <button>4</button></div>
            <div className={classes.normal}> <button>5</button></div>
            <div className={classes.normal}> <button>6</button></div>
            <div className={classes.normal}> <button>*</button></div>
            <div className={classes.normal}> <button>%</button> </div>

            <div className={classes.normal}> <button>MS</button></div>
            <div className={classes.normal}> <button>1</button></div>
            <div className={classes.normal}> <button>2</button></div>
            <div className={classes.normal}> <button>3</button></div>
            <div className={classes.normal}> <button>.</button></div>
            <div className={classes.normal}> <button>1/%</button> </div>

            <div className={classes.normal}> <button>M+</button></div>
            <div className={classes.normal}> <button>0</button></div>
            <div className={classes.normal}> <button>+/.</button></div>
            <div className={classes.normal}> <button>.</button></div>
            <div className={classes.normal}> <button>+</button></div>
            <div className={classes.normal}> <button>=</button> </div>
        </div>
    </div>
  )
}

export default Calculator
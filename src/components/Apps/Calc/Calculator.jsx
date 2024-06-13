import React from 'react'
import classes from './Calculator.module.scss'

import { useState } from 'react'

const Calculator = () => {
    const [value, setvalue] = useState('')


  return (
    <div className={classes.Calculator}>

        <input 
            value={value} 
            type="text" 
            className={classes.input}
            onChange={(e) => {}}
            onFocus={e => {}}
        />

        <div className={classes.buttonstContainer}>
            <div className={classes.longButtons}>
                <div className={classes.empty}/>
                <div className={classes.backspace}> <button>
                    Backspace
                </button></div>
                <div className={classes.CE}> <button>
                    CE
                </button></div>
                <div className={classes.C}> <button>
                    C
                </button></div>
            </div>
            
            <div className={classes.normal}> <button>
                MC
            </button></div>
            <div className={classes.normal}> <button>
                7
            </button></div>
            <div className={classes.normal}> <button>
                8
            </button></div>
            <div className={classes.normal}> <button>
                9
            </button></div>
            <div className={classes.normal}> <button>
                /
            </button></div>
            <div className={classes.normal}> <button>
                sqrt
            </button> </div>
            
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
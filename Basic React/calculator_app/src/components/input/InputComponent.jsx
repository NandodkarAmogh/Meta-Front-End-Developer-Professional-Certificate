import React from 'react'
import './input.css'

const InputComponent = ({inpNum, handleInpNum}) => {
  return (
    <div className="inputContainer">
      <div className='input'>
        <input type='number' placeholder='Please enter your input here' value={inpNum} onChange={(e) => handleInpNum(e.target.value)} />
      </div>
    </div>
      
  )
}

export default InputComponent

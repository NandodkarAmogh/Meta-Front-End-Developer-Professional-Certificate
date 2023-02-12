import React from 'react'
import Button from './Button'
import './button.css'

const ButtonContainer = ({handleTotal}) => {
  return (
    <div className='buttonContainer'>
      <Button text = 'Add' val = '+' handleTotal = {handleTotal}  />
      <Button text = 'Subtract' val = '-' handleTotal = {handleTotal}  />
      <Button text = 'Multiply' val = '*' handleTotal = {handleTotal}  />
      <Button text = 'Divide' val = '/'  handleTotal = {handleTotal}  />
      <Button text = 'Reset Input' val = 'resetInput'  handleTotal = {handleTotal}  />
      <Button text = 'Reset Result' val = 'resetResult' handleTotal = {handleTotal}  />
    </div>
  )
}

export default ButtonContainer

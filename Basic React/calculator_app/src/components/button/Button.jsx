import React from 'react'

const Button = ({text, val, handleTotal}) => {
  return (
    <div>
      <button className={(val === 'resetInput' || val === 'resetResult') ? 'button__reset button' : 'button'} type='button' onClick={() =>  handleTotal(val)}>{text}</button>
    </div>
  )
}

export default Button

import React, { useState } from 'react'
import ButtonContainer from '../button/ButtonContainer'
import HeaderComponent from '../header/HeaderComponent'
import InputComponent from '../input/InputComponent'
import ResultComponent from '../result/ResultComponent'
import './calculator.css'

const CalculatorComponent = () => {
    const [result, setResult] = useState(0)
    const [inpNum, setInpNum] = useState(null)
    const handleInpNum = (val) => {
        if(!isNaN(val)) {
            setInpNum(val)
        }
    }

    const handleTotal = (val) => {
        switch(val) {
          case '+' : 
          setResult(result + Number(inpNum))
          setInpNum(0);
          break;
          case '-' :
            setResult(result - inpNum)
            setInpNum(0);
          break;
          case '*' : 
          setResult(result * inpNum)
          setInpNum(0);
          break;
          case '/' :
            if(inpNum === 0){
              return null
            }else{
                setResult(result / inpNum)
                setInpNum(0);
            }
          break;
          case 'resetInput' : 
          setInpNum(0);
          break;
          case 'resetResult' :
          setResult(0)
          break;
        }
    } 
    return (
    <div className='calculatorContainer'>
      <HeaderComponent text='Simplest working calculator' />
      <ResultComponent result={result}  />
      <InputComponent inpNum={inpNum} handleInpNum={handleInpNum}/>
      <ButtonContainer handleTotal={(val) => handleTotal(val)} />
    </div>
  )
}

export default CalculatorComponent

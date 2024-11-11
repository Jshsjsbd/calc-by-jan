'use client'

import React, { useState } from 'react'

export default function ReactCalculator() {
  const [equation, setEquation] = useState('')
  const [result, setResult] = useState('')

  const handleClick = (value: string) => {
    if (value === '=') {
      try {
        // Replace 'x' with '*' for multiplication
        const calculatedResult = eval(equation.replace(/x/g, '*'))
        setResult(calculatedResult.toString())
      } catch (error) {
        setResult('Error')
      }
    } else if (value === 'C') {
      setEquation('')
      setResult('')
    } else if (value === 'backspace') {
      setEquation(prev => prev.slice(0, -1))
    } else {
      setEquation(prev => prev + value)
    }
  }

  const buttons = [
    'C', 'backspace', '7', '8', '9', '/',
    '4', '5', '6', 'x',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ]

  return (
    <div className="react-calculator">
      <div className="display">
        <div className="equation">{equation}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className={`${btn === 'C' ? 'clear' : ''} ${btn === 'backspace' ? 'backspace' : ''}`}
          >
            {btn === 'backspace' ? '← Backspace' : btn}
          </button>
        ))}
      </div>
    </div>
  )
}
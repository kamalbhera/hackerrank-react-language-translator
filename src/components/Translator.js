import React, { useState } from 'react'

const Translator = (props) => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleChange = (value) => {
    setInput(value)
    console.log(value);
    for (let names of props.translations.keys()) {
      if (value === names) {
        setOutput(props.translations.get(value))
      }
    }
  }

  return (
    <React.Fragment>
      <div className='controls'>
        <div className='input-container'>
          <span>Input:</span>
          <input
            type='text'
            className='text-input'
            data-testid='text-input'
            onChange={(e) => handleChange(e.target.value)}
            value={input}
          />
        </div>
        <div className='input-container'>
          <span>Output:</span>
          <input
            type='text'
            className='text-output'
            data-testid='text-output'
            readOnly
            value={output}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Translator

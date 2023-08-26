import React from 'react'

import './Button.css';

export const Button = (props) => {

  return (
    <div>
      <button className={`
        button ${props.operation ? 'operation' : ''} 
                 ${props.double ? 'double' : ''}
                 ${props.triple ? 'triple' : ''}
      `}
      onClick={e =>props.click && props.click(props.label)}      
      >
        {props.label}
      </button>
    </div>
    )
  }
  
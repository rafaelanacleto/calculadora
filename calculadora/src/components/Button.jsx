import React from 'react'

import './Button.css';

export const Button = (props) => {
  return (
    <div>
      <button className={`
        button operation
      `}>
        {props.label}
      </button>
    </div>
    )
  }
  
import React, { Component } from 'react'

import './Calculadora.css'
import { Button } from '../components/Button'

class Calculadora extends Component {
  render() {
    return <div className='calculadora'>
        <Button/>
    </div>
  }
}

/* export the component to be used in other components */
export default Calculadora
import React, { Component } from 'react'

import './Calculadora.css'
import { Button } from '../components/Button'
import { Display } from '../components/Display'

class Calculadora extends Component {

  clearMemory() {
    console.log('clearMemory');
  }

  setOperation(o) {
    console.log(o);
  }

  addDigit(n) {
    console.log(n);
  }

  render() {
    const addDigit = n => this.addDigit(n);
    const setOperation = o => this.setOperation(o);
  
    return <div className='calculadora'>
        <Display value={"1234567890"} />

        <Button label={"AC"} operation={'operation'} double={'double'} click={() => this.clearMemory()} />
        <Button label={"/"} operation={'operation'} click={setOperation("/")}/>
        <Button label={7} click={addDigit(7)}/>
        <Button label={8}/>
        <Button label={9}/>
        <Button label={"*"} operation={'operation'}/>
        <Button label={4}/>
        <Button label={5}/>
        <Button label={6}/> 
        <Button label={"-"} operation={'operation'}/>
        <Button label={1}/>
        <Button label={2}/>
        <Button label={3}/>
        <Button label={"+"} operation={'operation'}/>        
        <Button label={0}/>
        <Button label={","} operation={'operation'}/>
        <Button label={"="} operation={'operation'} double={'double'} triple={'triple'}/>
    </div>
  }
}

/* export the component to be used in other components */
export default Calculadora
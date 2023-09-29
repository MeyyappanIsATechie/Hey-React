import React, { Component } from 'react';
import './Calculator.css';

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      displayValue: '0'
    };
  }

  handleButtonClick = (value) => {
    const { displayValue } = this.state;
    if (displayValue === '0' || displayValue === 'Error') {
      this.setState({ displayValue: value });
    } else {
      this.setState({ displayValue: displayValue + value });
    }
  };

  handleCalculate = () => {
    try {
      const result = eval(this.state.displayValue);
      this.setState({ displayValue: result.toString() });
    } catch (error) {
      this.setState({ displayValue: 'Error' });
    }
  };

  handleClear = () => {
    this.setState({ displayValue: '0' });
  };

  render() {
    return (
      <div className="calculator">
        <input type="text" className="display" value={this.state.displayValue} disabled />
        <div className="buttons">
          <button onClick={() => this.handleButtonClick('1')}>1</button>
          <button onClick={() => this.handleButtonClick('2')}>2</button>
          <button onClick={() => this.handleButtonClick('3')}>3</button>
          <button onClick={() => this.handleButtonClick('4')}>4</button>
          <button onClick={() => this.handleButtonClick('5')}>5</button>
          <button onClick={() => this.handleButtonClick('6')}>6</button>
          <button onClick={() => this.handleButtonClick('7')}>7</button>
          <button onClick={() => this.handleButtonClick('8')}>8</button>
          <button onClick={() => this.handleButtonClick('9')}>9</button>
          <button onClick={() => this.handleButtonClick('+')}>+</button>
          <button onClick={() => this.handleButtonClick('-')}>-</button>
          <button onClick={() => this.handleButtonClick('*')}>*</button>
          <button onClick={() => this.handleButtonClick('/')}>/</button>
          <button onClick={this.handleCalculate}>=</button>
          <button onClick={this.handleClear}>C</button>
        </div>
      </div>
    );
  }
}

export default ClassComponent;

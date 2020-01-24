import React from 'react';
import './App.css';

function Hello(props) {
  return <p>{props.value}</p>;
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ['Hello World!'],
      counter: 0,
      worldIsNext: true,
    };
  }
  
  handleClick() {
    const valuesArr = this.state.values.slice();
    if (this.state.counter % 2) {
      valuesArr.push('Hello World!');
    } else {
      valuesArr.push('Hello React!');
    }
    
    this.setState({
      worldIsNext: !this.state.worldIsNext,
      counter: this.state.counter + 1,
      values: valuesArr,
    });
  }
  
  render() {
    const values = this.state.values;
    const valuesRender = values.map((value) => {
      return <Hello value={value} />
    });
    
    return (
      <div className="app">
        <div className="button-place">
          <button onClick={() => this.handleClick()}>
            Клик!
          </button>
        </div>
        <div className="output-place">
          {valuesRender}
        </div>
      </div>
    );
  }
}

export default App;
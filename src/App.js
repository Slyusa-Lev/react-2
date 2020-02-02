import React from 'react';
import './App.css';

class Hello extends React.Component {
	componentDidMount() {
		console.log('кряк');
	}
	
	componentUnmount() {
		console.log('unmount');
	}
	
  render() {
    return <p>{this.props.value}</p>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: ['Hello World!'],
      counter: 0,
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
      counter: this.state.counter + 1,
      values: valuesArr,
    });
  }
  
  render() {
    const values = this.state.values;
    const valuesRender = values.map((value, index) => {
      return <Hello 
				value={value}
				key={index}/>
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
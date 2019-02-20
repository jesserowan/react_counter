import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0
        }
    }
    increment = () => {
        this.setState({number: this.state.number + 1});
    };
    decrement = () => {
        this.setState({number: this.state.number - 1});
    };
    render(){
        const { deleteCounter } = this.props;
        return (
            <div className="counter">
                <div className="remove-div">
                    <a className="remove" onClick={deleteCounter}>X</a>
                </div>
                <div className="number-div">
                    <h2 className="number">{this.state.number}</h2>
                </div>
                <div className="actions">
                    <div className="button-div">
                        <a className="button" onClick={this.decrement}>Decrement</a>
                    </div>
                    <div className="button-div">
                        <a className="button" onClick={this.increment}>Increment</a>
                    </div>
                </div>
            </div>
        )
    }
}

let nextCounterId = 1;

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            counters: [0]
        }
    }
    addCounter = () => {
        let counters = [...this.state.counters];
        counters.push(nextCounterId);
        nextCounterId++;
        this.setState({ counters: counters });
    };

    deleteCounter = (id) => () => {
        let counters = [...this.state.counters];
        for ( let i in counters ) {
            if (counters[i] === id) {
                counters.splice(i, 1);
                break;
            }
        }
        this.setState({ counters: counters });
    };

    render () {
        const { counters } = this.state;
        return (
            <div className="main">
                <div className="header">
                    <h1>Counter</h1>
                </div>
                <div className="topbar">
                    <a className="button" onClick={this.addCounter}>Add a Counter</a>
                </div>
                <div className="counter-list">
                    { counters.map((id) => <Counter key={id} deleteCounter={this.deleteCounter(id)}/>) }
                </div>
            </div>
        )
    }
}

export default App;

import React, { Component } from 'react';
import Boxes from './Boxes.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      boxes: []
    };

    this.MAX_BOXES = 81;

    this.randomColorPick = this.randomColorPick.bind(this);
    this.mouseEnterBox = this.mouseEnterBox.bind(this);
    this.mouseLeaveBox = this.mouseLeaveBox.bind(this);
  }

  componentDidMount() {
    let boxState = [];

    for (let i = 0; i < this.MAX_BOXES; i++) {
      boxState.push({id: i, color: 'grey', style: {}});
    }

    this.setState({boxes: boxState});
  }

  randomColorPick() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }

  mouseEnterBox(id) {
    let color = this.randomColorPick();

    let currBoxState = this.state.boxes;
    currBoxState[id].color = color;
    currBoxState[id].style = {
                                backgroundColor: color,
                                boxShadow: '0 0 8px white',                                zIndex: 1000
                              };
    this.setState({ boxes: currBoxState});
  }

  mouseLeaveBox(id) {
    let currBoxState = this.state.boxes;
    currBoxState[id].style = {
                                backgroundColor: currBoxState[id].color,
                                boxShadow: 'none',                                         zIndex: 1
                              };
    this.setState({ boxes: currBoxState});
  }
  
  
  render() {

    return (
      <div className="App">
        <div className="box-container">
          <Boxes 
            boxState={this.state.boxes}
            onMouseEnter={this.mouseEnterBox}
            onMouseLeave={this.mouseLeaveBox}
          />
        </div>
        <div className="footer">Needs to link back to my main page</div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: "Goblin",
          id: '1'
        },
        {
          name: "Frankenstein",
          id: '2'
        },
        {
          name: "Dracula",
          id: '3'
        }

      ]
    }
  };





  render(){
    return(
          <div className="App">
            {
  this.state.monsters.map(monsters => <h1 key= {monsters.id}> {monsters.name}</h1> )
            }
          </div>
        );
      

    
    
  }
}


export default App;

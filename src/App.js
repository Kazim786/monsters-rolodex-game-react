import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from '/Users/apple/ZTM-REACT/my-app/src/components/card-list/search-box/search-box.component.jsx'

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  };
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))

  
}
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      ) //this will filter monsters that are not included in the searchField
    return(

          <div className="App">
            
            <SearchBox placeholder= 'search monsters' 
            handleChange= {e => this.setState({searchField: e.target.value})}
            />

            <CardList monsters={filteredMonsters} > 
            {
            
            }
            </CardList>
            
          </div>
        );
      

    
    
  }
}


export default App;

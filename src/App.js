import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';
import SearchBox from './components/searchbox/searchbox';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      filterMonsters: [],
      searchField: ''
    }
    //this.filterMonster = this.filterMonster.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => 
      response.json()
    )
    .then(users => 
      this.setState({
        monsters: users,
        filterMonsters: users
      })
    )
  }

  filterMonster = (e) => {
    console.log(e);
    if(e.target.value.trim() === '') {
      this.setState({
        filterMonsters: this.state.monsters
      })
    } else {
      var filter = this.state.monsters.filter(monster => {
        return monster.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      })
      //console.log(filter)
      this.setState({
        filterMonsters: filter
      })
      console.log(this.state);
    }
    
  }

  render() {
    return(
      <div className="App">
        {/* <input type="text" placeholder="Search monsters" onChange={e => this.filterMonster(e)}>
        </input> */}

        <h1>Monsters Rolodex</h1>

        <SearchBox placeholder="Search monsters" handleChange={this.filterMonster}/>
        
        <CardList monsters={this.state.filterMonsters}>
        </CardList>
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Hello World!</p>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

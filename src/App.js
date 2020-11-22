import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(json => this.setState({monsters: json}))
  }

  render() {
      const {monsters, searchTerm } = this.state;
      const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
      <div className="App">
        {/*<CardList name='Amma'>Amma Amma</CardList>*/}
        <input
          placeholder='search'
          onChange={(event => {
              //set the sate and then call the function that was registered... it's like .then
              // this will set the state of the component and then execute the function
              // will print whatever you type in the search bar
              this.setState({searchTerm: event.target.value}, () => {
                  console.log('value: asynchronous call (call back) --> ', this.state.searchTerm)
                });
              // this does not wait for the setState to happen... will do the execution right after the above statement
              // will be behind one character
              console.log('value: synchronous call --> ', this.state.searchTerm)
            }
          )
          }
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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

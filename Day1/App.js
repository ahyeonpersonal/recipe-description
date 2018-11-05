import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

class App extends Component {
  
  getRecipe = (e) =>{
    e.preventDefault();
    console.log("Working!!!");
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Recipe Search
        </header>
        <Form getRecipe={this.getRecipe}/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

class App extends Component {
  
  getRecipe = (e) =>{
    e.preventDefault();
    
    //6. get RecipeName from Form.js
    const recipeName = e.target.elements.recipeName.value;
    //console.log("Working!!!");
    
    //7. Display recipeName instead 'working' in Console panel
    console.log(recipeName);
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

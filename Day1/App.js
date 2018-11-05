import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

class App extends Component {
  
  //1. Creating getRecipe
  getRecipe = (e) =>{
    e.preventDefault(); //4. prevent full page refreshment
    console.log("Working!!!");
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Recipe Search
        </header>
        <Form getRecipe={this.getRecipe}/>   {/* 2. give permission to Form.js*/}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

//8. input API key
const API_KEY = "a6fa2d4513b2118e543ef7b684a8de4d";

class App extends Component {
  

  getRecipe = async (e) =>{
    e.preventDefault();
    //6. get RecipeName from Form.js
    const recipeName = e.target.elements.recipeName.value;

    //9. create cpi_call to call API link
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken`);
    //10. make data to readable json file
    const data = await api_call.json();
    //11. get data in console panel
    console.log(data);

    //console.log("Working!!!");
    //7. Display recipeName instead 'working' in Console panel
    //console.log(recipeName);
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

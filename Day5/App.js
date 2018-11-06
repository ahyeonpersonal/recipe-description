import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

//8. input API key
const API_KEY = "a6fa2d4513b2118e543ef7b684a8de4d";

class App extends Component {
  
  //12. what we need from array 
  //set up array to store whatever we get back from the API
  //First thing to do is set up empty recipes array
  state = {
    recipes : []
  }

  getRecipe = async (e) =>{
    e.preventDefault();
    //6. get RecipeName from Form.js
    const recipeName = e.target.elements.recipeName.value;

    //9. create cpi_call to call API link
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`); //18. inject {recipeName}
    //10. make data to readable json file
    const data = await api_call.json();
    //11. get data in console panel
    //console.log(data.recipes);

   this.setState({recipes:data.recipes});
    
    //13. Fill recipes []  array with data from API : using built in set state method
    //this.setState({recipes : data})
    
    //15. we want to specificaly want to get data > recepies array so update recipes : data.recipes
    this.setState({recipes : data.recipes});

    //14. now console log state( whicfh is recipes array )
    console.log(this.state.recipes);
    

    //console.log(this.state.recipes);

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
        <Form getRecipe={this.getRecipe} />
        
        {/* 
        16. Print out recipe titles on the screen using map method

        Map : it allows you to go through each element inside of an array
        and then you can manipulate it, change it, and anything you wnat to do with it 
        It's kind of like foreach method.
        */}
        {this.state.recipes.map( (recipe) =>{
          //19. displaying image, recipe title information
          //20. put the key in the most parent element which is <div>
          return (
            <div key={recipe.recipe_id}> 
              <img src={recipe.image_url} alt=""/>
              <p > {recipe.title}</p>
            </div>
          ) 
          // 17. Wraning : input key when using map method
        } )}
      </div>
    );
  }
}

export default App;

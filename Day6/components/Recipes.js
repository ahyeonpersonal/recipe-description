import React from 'react';

//22. Give recipes state-recipes access by props
const Recipes = props =>(
    <div>
        {/* attach 16.17 19.20 and edit them*/}
        {props.recipes.map((recipe) =>{
            return (
              <div key={recipe.recipe_id}> 
                <img src={recipe.image_url} alt=""/>
                <p > {recipe.title}</p>
              </div>
            ) 
        }
        )}
    </div>
);

export default Recipes;

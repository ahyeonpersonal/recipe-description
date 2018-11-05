import React from 'react';

const Form = props =>(
    <form onSubmit={props.getRecipe}> 
        <input type="text" name="recipeName" /> {/* 5. give name as "recipeName" */}
        <button>Search</button>
    </form>
)

export default Form;

import React from 'react';

const Form = props =>(
    <form onSubmit={props.getRecipe}>  {/* 3. get access to getRecipe in Form.js using props */}
        <input type="text" name="" />
        <button>Search</button>
    </form>
)

export default Form;

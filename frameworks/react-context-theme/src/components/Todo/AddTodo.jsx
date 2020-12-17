import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value.trim()) {
            onCreate(value);
            setValue('');
        } 
    }

    return (
        <form className="add-todo">
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)}/>
            <button type="submit" onClick={ (event) => { handleSubmit(event) } }>Add todo</button>
        </form>
    )
} 

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
}

export default AddTodo
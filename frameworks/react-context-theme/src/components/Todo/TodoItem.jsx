import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ todo, index, onChange }) {
    return (
        <li className={`todo-item${ todo.completed ? ' todo-item--done' : '' }`}>
            <span>
                <input 
                    type="checkbox"
                    checked={ todo.completed ? true : false }
                    onChange={() => { onChange(todo.id); }}
                />
                <strong>{ index + 1 } </strong>
                { todo.title }
            </span>

            <button className="todo-item__remove-btn">&times;</button>
        </li>
    )
} 

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem
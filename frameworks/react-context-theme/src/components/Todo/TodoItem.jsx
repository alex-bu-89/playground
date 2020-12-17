import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TodoContext } from '../../context/todoContext';

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(TodoContext);

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

            <button 
                className="todo-item__remove-btn"
                onClick={ () => { removeTodo(todo.id) } }
            >
                &times;
            </button>
        </li>
    )
} 

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, onToggle }) {
    return (
        <ul className="todo-list">
            {
                todos.map((todo, i) => (
                    <TodoItem 
                        key={ todo.id }
                        todo={ todo }
                        index={ i }
                        onChange={ onToggle }
                    />
                ))
            }
        </ul>
    ) 
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired,
}

export default TodoList;
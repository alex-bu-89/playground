import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import AddTodo from '../Todo/AddTodo';
import { TodoContext } from '../../context/todoContext';
import './TodoList.css';

function TodoList({ todos }) {
    const { addTodo, toggleTodo } = useContext(TodoContext);

    const renderTodoList = () => {
        return (
            todos.map((todo, i) => (
                <TodoItem
                    key={ todo.id }
                    todo={ todo }
                    index={ i }
                    onChange={ toggleTodo }
                />
            ))
        )
    }

    return (
        <div className="todo-list">
            {
                todos.length ? (
                    <div>
                        { renderTodoList() }
                        <AddTodo onCreate={addTodo} />
                    </div>
                ) : (
                    <p>No Todos</p>
                )
            }
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList;

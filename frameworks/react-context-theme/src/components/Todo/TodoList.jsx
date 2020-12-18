import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import AddTodo from '../Todo/AddTodo';
import { TodoContext } from './TodoContext';
import './TodoList.css';

// const AddTodo = React.lazy(() => { import('../Todo/AddTodo') })

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

    if (!todos.length) return <p>No Todos</p>

    return (
        <div className="todo-list">
            { renderTodoList() }
            <AddTodo onCreate={addTodo} />
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList;

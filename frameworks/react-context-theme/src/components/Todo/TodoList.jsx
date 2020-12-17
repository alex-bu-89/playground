import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function Todo({ todos }) {
    return (
        <ul className="todo-list">
            {
                todos.map((todo) => (
                    <TodoItem 
                        key={ todo.id }
                        todo={ todo }
                    />
                ))
            }
        </ul>
    )
}
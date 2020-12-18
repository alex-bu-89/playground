import React, { useContext, useState } from 'react';

export const TodoContext = React.createContext();

function TodoProvider(props) {
    const [todos, setTodos] = useState([]);

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => {
                return {
                    ...todo,
                    completed:
                        todo.id === id ? !todo.completed : todo.completed,
                };
            })
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const addTodo = (title) => {
        setTodos([...todos, { id: todos.length + 1, completed: false, title }]);
    };

    return (
        <TodoContext.Provider
            value={(toggleTodo, removeTodo, addTodo, setTodos)}
            {...props}
        />
    );
}

function useTodoContext() {
    return useContext(TodoContext);
}

export {
    TodoProvider,
    useTodoContext,
};

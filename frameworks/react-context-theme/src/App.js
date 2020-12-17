import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './context/themeContext';
import { ImageContext } from './context/imageContext';
import { TodoContext } from './context/todoContext';
import Button from './components/Button/';
import ImageList from './components/Image/ImageList';
import TodoList from './components/Todo/TodoList';
import AddTodo from './components/Todo/AddTodo';

import './App.css';

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [images, setImages] = useState(
    [
      { title: 'Image 1', src: 'https://via.placeholder.com/200/0000FF/FFFFFF/?text=Digital.com' },
      { title: 'Image 2', src: 'https://via.placeholder.com/200/FF0000/808080/?text=Down.com' },
      { title: 'Image 3', src: 'https://via.placeholder.com/200/FFFF00/000000/?text=WebsiteBuilders.com' },
      { title: 'Image 4', src: 'https://via.placeholder.com/200/000000/FFFFFF/?text=IPaddress.net' },
    ]
  );
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => response.json())
      .then((todos) => setTimeout(() => {setTodo(todos)}, 2000))
  }, [])

  const toggleTheme = (e) => {
    setTheme((oldState) => {
      const newTheme = oldState === themes.dark ? themes.light : themes.dark;
      return newTheme;
    });
  }

  const toggleTodo = (id) => {
    setTodo(todos.map((todo) => {
      return {
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      }
    }));
  }

  const removeTodo = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  }

  const addTodo = (title) => {
    setTodo([...todos, { id: todos.length + 1, completed: false, title, }]);
  }

  return (
    <ThemeContext.Provider value={ theme }>
      <ImageContext.Provider value={ images }>
        <TodoContext.Provider value={{ removeTodo }}>
          <div className="App" style={{
            background: theme.background,
            color: theme.foreground
          }}>
            <div className="container">
              <h1>Todo App</h1>
              { todos.length
                ? <TodoList
                    todos={ todos }
                    onToggle={ toggleTodo }
                  />
                : <p>No Todos</p>
              }
              <AddTodo onCreate={ addTodo } />
              <Button onClick={toggleTheme}>Toogle Switch</Button>
              <ImageList></ImageList>
            </div>
          </div>
        </TodoContext.Provider>
      </ImageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

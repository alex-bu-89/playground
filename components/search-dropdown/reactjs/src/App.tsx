import './App.scss';
import React from 'react';
import AutoComplete from './components/AutoComplete/AutoComplete';
import { useFetch } from './hooks/useFetch';

function App() {
  const [ response ] = useFetch('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="container content">
      <h1>Tiny autocomplete field</h1>
      <AutoComplete
        data={ response }
      ></AutoComplete>
    </div>
  );
}

export default App;

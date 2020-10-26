import './App.scss';
import React from 'react';
import AutoComplete from './components/AutoComplete/AutoComplete';
import { useFetch } from './hooks/useFetch';

function App() {
  const [ response, loading ] = useFetch('https://jsonplaceholder.typicode.com/users');
  const userData = {
    src: response
  }

  return (
    <div className="container">
      <h2>Tiny autocomplete field</h2>
      {
        loading
          ? <p>loading data</p>
          : (
            <AutoComplete
              data={ userData }
            ></AutoComplete>
          )
      }
    </div>
  );
}

export default App;

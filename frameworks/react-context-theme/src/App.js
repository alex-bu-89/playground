import React, { useState } from 'react';
import { ThemeContext, themes } from './context/themeContext';
import Button from './components/Button/';

import './App.css';

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = (e) => {
    setTheme((oldState) => {
      const newTheme = oldState === themes.dark ? themes.light : themes.dark;
      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <div className="container" style={{color: theme.foreground}}>
          <Button onClick={toggleTheme}>
            Toogle Switch
          </Button>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

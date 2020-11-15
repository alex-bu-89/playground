import React, { useState } from 'react';
import { ThemeContext, themes } from './context/themeContext';
import { ImageContext } from './context/imageContext';
import Button from './components/Button/';
import ImageList from './components/Image/ImageList';

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

  const toggleTheme = (e) => {
    setTheme((oldState) => {
      const newTheme = oldState === themes.dark ? themes.light : themes.dark;
      return newTheme;
    });
  }

  return (
    <ThemeContext.Provider value={theme}>
      <ImageContext.Provider value={images}>
        <div className="App" style={{
          background: theme.background,
          color: theme.foreground
        }}>
          <div className="container">
            <Button onClick={toggleTheme}>
              Toogle Switch
            </Button>

            <ImageList></ImageList>
          </div>
        </div>
      </ImageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

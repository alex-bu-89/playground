import React from 'react';
import { ThemeContext } from '../../context/themeContext';
import './Button.css';

export function Button(props) {
  return (
    <ThemeContext.Consumer>
      {((theme) => {
        return (
          <button 
            onClick={props.onClick}
            className="Button"
            style={{
              backgroundColor: theme.foreground,
              borderColor: theme.foreground,
              color: theme.background,
            }}
          >
            { props.children }
          </button>
        )
      })}
    </ThemeContext.Consumer>
  );
}

export default Button;

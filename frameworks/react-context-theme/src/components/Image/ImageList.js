import React from 'react';
import { ThemeContext } from '../../context/themeContext';
import { ImageContext } from '../../context/imageContext';
import './Image.css';

export function ImageList(props) {
    return (
        <ThemeContext.Consumer>
            {(theme) => (
                <ImageContext.Consumer>
                    {(images) => {
                        return (
                            <>
                                <h3>Image list</h3>
                                <ul>
                                    {
                                        images.map((img) => (
                                                <li key={`${img.title}_${new Date().getTime()}`}>
                                                    <h5>{ img.title }</h5>
                                                    <img src={ img.src } alt={img.title}/>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </>
                        );
                    }}
                </ImageContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

export default ImageList;

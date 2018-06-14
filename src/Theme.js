/**
 * Created by Martin on 2018/6/14.
 */
import React from 'react';


export const themes = {
    light: {
        foreground: '#ffffff',
        background: '#222222',
    },
    dark: {
        foreground: '#000000',
        background: '#eeeeee',
    },
};

export const ThemeContext = React.createContext(
    themes.dark // 默认值
);
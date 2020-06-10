import { useEffect, useState } from 'react';
import { light as LightTheme, dark as DarkTheme } from "./style";


export const useDarkMode = () => {
    const [theme, setTheme] = useState(LightTheme);

    const toggleTheme = () => {

        if (theme.id === 'light') {
            window.localStorage.setItem('theme', 'dark')
            setTheme(DarkTheme)
        } else {
            window.localStorage.setItem('theme', 'light')
            setTheme(LightTheme)
        }
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        (localTheme === 'light') ? localTheme && setTheme(LightTheme) : localTheme && setTheme(DarkTheme);

    }, []);

    return [theme, toggleTheme]
};
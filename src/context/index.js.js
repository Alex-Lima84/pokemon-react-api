import React, { createContext, useState, useEffect } from "react";

export const themes = {
    light: {
        name: 'light mode',
        background: '#00a6fb',
        fontColor: '#003554',
        fontColor1: '#0d3b66'
    },

    dark: {
        name: 'dark mode',
        background: '#03045e',
        fontColor: '#caf0f8',
        fontColor1: '#ade8f4'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState([])

    useEffect(() => {

        const localTheme = JSON.parse(localStorage.getItem("themes"))
       
        if (!localTheme) {
            localStorage.setItem('themes', JSON.stringify(themes.light))
            setTheme(themes.light)
        }

        if (localTheme) {
            if (localTheme.name === 'light mode') {
                localStorage.setItem('themes', JSON.stringify(themes.light))
                setTheme(themes.light)
            }

            if (localTheme.name === 'dark mode') {
                localStorage.setItem('themes', JSON.stringify(themes.dark))
                setTheme(themes.dark)
            }
        }

    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}





import React, { createContext, useState, useEffect } from "react";

export const themes = {
    light: {
        background: "#41A9EC",
        fontColor: '#FFF'
    },

    dark: {
        background: "#212121",
        fontColor: '#AAB0BC'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState([])

    useEffect(() => {

        const localTheme = JSON.parse(localStorage.getItem("themes"))

        if(!localTheme) {
            setTheme(themes.light)
        }

        if(localTheme) {
            setTheme(localTheme)
        }

        // if (theme === themes.light) {
        //     localStorage.setItem('themes', JSON.stringify(themes.light))
        //     setTheme(themes.light)
        // }
        
        // if (theme === themes.dark) {
        //     localStorage.setItem('themes', JSON.stringify(themes.dark))
        //     setTheme(themes.dark)
        // }
        console.log(localTheme)

    }, [])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}





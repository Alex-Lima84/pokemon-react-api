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

    const [theme, setTheme] = useState(() => {
        if(!localStorage.themes) {
            theme === themes.light
        }
        JSON.parse(localStorage.getItem("themes"))
    })
     
    useEffect(() => {
       if(theme === themes.light) {
        localStorage.setItem('themes', JSON.stringify(themes.light))
        setTheme(themes.light)        
       }

       if(theme === themes.dark) {
        localStorage.setItem('themes', JSON.stringify(themes.dark))
        setTheme(themes.dark)  
       }
    },[theme])
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
import React, { createContext, useState } from "react";

export const themes = {
    light: {
        background: "#41A9EC"
    },

    dark: {
        background: "#010095"
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [ theme, setTheme ] = useState(themes.light)
   
    return(
        <ThemeContext.Provider value = {{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
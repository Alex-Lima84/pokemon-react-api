import React, { useContext } from "react"
import { ThemeContext, themes } from "../../context/theme-toggler"
import { Button } from "../button/button"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    
    return(
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>Theme Toggler</Button>
        </div>
    )
}
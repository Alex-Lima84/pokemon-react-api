import React, { useContext } from "react"
import { ThemeContext, themes } from "../../context/index.js"
import { Button } from "../button"

export const ThemeTogglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    function handleClick() {
        const localTheme = JSON.parse(localStorage.getItem("themes"))
        console.log(localTheme)

        setTheme(theme === themes.light ? themes.dark : themes.light)

        if (localTheme) {
            localStorage.setItem('themes', JSON.stringify(localTheme.name === 'light mode' ? themes.dark : themes.light))

        } else {
            localStorage.setItem('themes', JSON.stringify(themes.light))
        }
    }

    return (

        <Button style={{ backgroundColor: theme.background,
                         color: theme.fontColor }} 
                onClick={() => handleClick()}>{
                    (theme === themes.light ? 
                    themes.dark.name : themes.light.name)}
        </Button>

    )
}
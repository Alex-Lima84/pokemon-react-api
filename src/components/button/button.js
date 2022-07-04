import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme-toggler'

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)
   
    return(
        <button {...props}
                style={{backgroundColor: theme.background}}/>
    )
}
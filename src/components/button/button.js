import React, { useContext } from 'react'
import { ThemeContext } from '../../context/theme-toggler'
import styled from 'styled-components'

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)
   
    return(
        <Butt0n {...props}
                style={{ backgroundColor: theme.background, color: theme.fontColor }}/>
    )
}


const Butt0n = styled.button`
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
`
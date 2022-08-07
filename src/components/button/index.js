import React, { useContext } from 'react'
import { ThemeContext } from '../../context/index.js'
import styled from 'styled-components'

export const Button = (props) => {

    const { theme } = useContext(ThemeContext)
   
    return(
        <StandardButton {...props} theme={theme}/>
    )
}


const StandardButton = styled.button`
    margin: 1rem 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #0d3b66;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    cursor: pointer;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.fontColor}

    @media(max-width: 675px) {
        font-size: 0.8rem;
        padding: 0.3rem;
    }

    @media(max-width: 514px) {
        font-size: 0.6rem;
    }
`
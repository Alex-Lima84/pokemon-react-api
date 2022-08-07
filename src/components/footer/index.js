import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/index.js"

export const PageFooter = () => {

    const { theme } = useContext(ThemeContext)

    return (

        <footer style={{ backgroundColor: theme.background, color: theme.fontColor }}>
            <Div>
                <H2> Powered by:</H2>
                <A href="https://pokeapi.co/" target='_blank'>POKÉAPI</A>
            </Div>
        </footer>

    )
}

const Div = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    padding: 2rem;
`
const H2 = styled.h2`
    margin-right: 0.2rem;
    font-size: 1.2rem;
`
const A = styled.a`
    font-size: 1.5rem; 
    color: #c9184a;
`


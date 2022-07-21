import React, { useContext } from "react";
import { ThemeTogglerButton } from "../theme-toggler-button";
import { ThemeContext } from "../../context/index.js"
import styled from "styled-components";

export const PageHeader = () => {

    const { theme } = useContext(ThemeContext)

    return (

        <Header style={{ backgroundColor: theme.background, color: theme.fontColor1 }}>
            <Div>
                <H1>WELCOME TO THE POKEMON PARADISE</H1>
            </Div>
            <ThemeDiv>
                <ThemeTogglerButton />
            </ThemeDiv>
        </Header>

    )
}

const Header = styled.header`
    padding: 1rem;
`

const Div = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
`

const H1 = styled.h1`
    font-weight: 500;
`

const ThemeDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
`
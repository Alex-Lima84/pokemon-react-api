import React, { useContext } from "react";
import { ThemeTogglerButton } from "../theme-toggler-button";
import { ThemeContext } from "../../context/index.js"
import styled from "styled-components";

export const HomePageHeader = () => {

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
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const Div = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;

    @media(max-width: 900px) {
        justify-content: center;
    }
`

const H1 = styled.h1`
    font-weight: 500;

    @media(max-width: 675px) {
        font-size: 1.5rem;
    }

    @media(max-width: 514px) {
        font-size: 1.2rem;
        text-align: center;
    }
`

const ThemeDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
`
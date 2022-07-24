import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import { useContext } from "react"
import { ThemeContext } from "../../context/index.js"
import { ThemeTogglerButton } from "../theme-toggler-button";
import styled from 'styled-components';

async function getPokemonCards(id) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
}

async function getPokemonAbility(pokemonAbility) {

    const response = await fetch(`https://pokeapi.co/api/v2/ability/${pokemonAbility}`)
    const data = await response.json()
    return data
}

export const PokemonCard = () => {

    const [pokemonCard, setPokemonCard] = useState({})
    const [pokemonAbilityText, setPokemonAbilitytext] = useState([])
    const { id } = useParams()
    const { theme } = useContext(ThemeContext)
    const pokemonName = pokemonCard.name

    useEffect(() => {

        async function fetchData() {

            const pokemonCard = await getPokemonCards(id)
            const abilitiesName = pokemonCard.abilities.map((item) => {
                return item.ability.name
            })

            const data = abilitiesName.map(async (pokemonAbility) => {

                return getPokemonAbility(pokemonAbility)

            })
            const pokemonAbilityText = await Promise.all(data)
            setPokemonAbilitytext(pokemonAbilityText)
            setPokemonCard(pokemonCard)
        }
        fetchData()
    }, [])

    return (
        <>
            <Header style={{ backgroundColor: theme.background, color: theme.fontColor }}>
                <H1>POKEMON CARD</H1>
                <ThemeDiv>
                    <ThemeTogglerButton />
                </ThemeDiv>
            </Header>

            <section style={{ backgroundColor: theme.background, color: theme.fontColor }}>

                <Link to='/'>
                    <H2>Home</H2>
                </Link>
                <Div>
                    <H3>{(pokemonName ? pokemonName.toUpperCase() : '')}</H3>
                    <Img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                        alt={pokemonCard.name}
                    />
                </Div>

                <div>
                    <H3>Moves List</H3>
                    <MovesUl>
                        {pokemonCard.moves ? pokemonCard.moves.map((item, index) => <MovesLi key={index}>{item.move.name}</MovesLi>) : ''}
                    </MovesUl>
                </div>

                <div>
                    <H3>Abilities</H3>
                    <Ul>
                        {pokemonAbilityText ? pokemonAbilityText.map((item, index) => <Li key={index}>{item.name}: {item.flavor_text_entries[2].flavor_text}</Li>) : ''}
                    </Ul>
                </div>

                <div>
                    <H3>Type(s)</H3>
                    <Ul>
                        {pokemonCard.types ? pokemonCard.types.map((item, index) => <Li key={index}>{item.type.name}</Li>) : ''}
                    </Ul>
                </div>


            </section>
        </>
    );
}

const Header = styled.header`
    padding: 1rem;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
`

const H1 = styled.h1`
    font-size: 2.5rem;
    text-align: center;

    @media(max-width: 500px) {
        font-size: 1.5rem;
    }
`

const ThemeDiv = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
`

const H2 = styled.h2`
    font-size: 1.8rem;
    padding: 0 0 2rem 2rem;
    color: #c9184a;

    @media(max-width: 500px) {
        font-size: 1.2rem;
    }
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 2rem;
`

const Img = styled.img`
    width: 400px;
    height: 400px;

    @media(max-width: 500px) {
        width: 300px;
        height: 300px;
    }
`

const H3 = styled.h3`
    font-size: 2rem;
    text-align: center;
`

const MovesUl = styled.ul`
    padding: 1rem 2rem 4rem 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;    
`

const MovesLi = styled.li`
    align-self: center;
    justify-self: center;
    font-size: 1.5rem;

    @media(max-width: 500px) {
        font-size: 1rem;
    }
`

const Ul = styled.ul`
    padding: 1rem 2rem;
`

const Li = styled.li`
    margin-bottom: 1rem;
    font-size: 1.5rem;

    @media(max-width: 500px) {
        font-size: 1rem;
    }
`

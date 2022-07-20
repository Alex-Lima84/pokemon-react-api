import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-toggler"
import styled from 'styled-components';

async function getPokemonTypes(value) {

    const response = await fetch(`https://pokeapi.co/api/v2/type/${value}`)
    const data = await response.json()
    return data
}

async function getPokemonInfo(pokemonId) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const data = await response.json()
    return data
}


export const PokemonTypesCard = () => {

    const [pokemonTypesCard, setPokemonTypesCard] = useState({})
    const [pokemonIdNumber, setPokemonIdNumber] = useState([])
    const [value, setValue] = useState('electric')
    const { theme } = useContext(ThemeContext)

    const handleSelect = (value) => {
        setValue(value)
    }

    useEffect(() => {

        let shouldUpdate = true;

        async function fetchData() {

            const pokemonTypesCard = await getPokemonTypes(value)

            if (!shouldUpdate) return

            const pokemonIdText = pokemonTypesCard.pokemon.map((item) => {
                return item.pokemon.name
            })

            const data = pokemonIdText.map(async (pokemonId) => {
                return getPokemonInfo(pokemonId)

            })
            const pokemonIdNumber = await Promise.all(data)

            if (!shouldUpdate) return

            setPokemonIdNumber(pokemonIdNumber)
            setPokemonTypesCard(pokemonTypesCard)
        }
        fetchData()

        return () => {
            shouldUpdate = false
        }

    }, [value])

    return (
        <Section style={{ backgroundColor: theme.background, color: theme.fontColor }}>

            <Div>
                <label htmlFor='pokemon-types'>Choose a pokemon by its type</label>
                <form>
                    <select onChange={(event) =>
                        handleSelect(event.target.value)}
                        value={value}>
                        <option value='bug'>Bug</option>
                        <option value='dark'>Dark</option>
                        <option value='dragon'>Dragon</option>
                        <option value='electric'>Electric</option>
                        <option value='fairy'>Fairy</option>
                        <option value='fighting'>Fighting</option>
                        <option value='fire'>Fire</option>
                        <option value='flying'>Flying</option>
                        <option value='ghost'>Ghost</option>
                        <option value='grass'>Grass</option>
                        <option value='ground'>Ground</option>
                        <option value='ice'>Ice</option>
                        <option value='normal'>Normal</option>
                        <option value='poison'>Poison</option>
                        <option value='psychic'>Psychic</option>
                        <option value='rock'>Rock</option>
                        <option value='steel'>Steel</option>
                        <option value='water'>Water</option>
                    </select>
                </form>
            </Div>

            {<div>
                <Ul>
                    {!pokemonIdNumber ? '' : pokemonIdNumber.map((item, index) =>
                        <Li key={index}>
                            <Link to={`/pokemon/${item.id}`}>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                                    alt={item.name}
                                />
                            </Link>
                            <P>{item.name}</P>
                        </Li>
                    )}
                </Ul>
            </div>}

        </Section>
    );
}

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0, 1rem;
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem;
`

const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0.8rem;
    padding: 0.5rem;
    border: 1px solid #FFF;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 165px;
    width: 132px;
`

const P = styled.p`
    text-align: center;
    padding: 0.5rem;
    width: 120px;
`
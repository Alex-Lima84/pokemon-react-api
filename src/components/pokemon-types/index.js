import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { ThemeContext } from "../../context/index.js"
import styled from 'styled-components';
import { getPokemonInfo, getPokemonTypes } from './services.js';

getPokemonTypes()
getPokemonInfo()

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

            const cardType = await getPokemonTypes(value)

            if (!shouldUpdate) return

            const pokemonIdText = cardType.pokemon.map((item) => {
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
        <Section theme={theme}>

            <Div>
                <Label htmlFor='pokemon-types'>Choose a pokemon by its type</Label>
                <form>
                    <Select onChange={(event) =>
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
                    </Select>
                </form>
            </Div>

            {<div>
                <Ul>
                    {!pokemonIdNumber ? '' : pokemonIdNumber.map((item, index) =>
                        <Li key={index}>
                            <Link to={`/pokemon/${item.id}`}>
                                <Img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
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
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.fontColor}
`

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Label = styled.label`
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
    text-align: center;

    @media(max-width: 500px) {
        font-size: 1.2rem;
    }
`

const Select = styled.select`
    text-align: center;
    width: 150px;
    border-radius: 0.2rem;
    background-color: #F7F6E2;
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
    border: 1px solid #0d3b66;
    border-radius: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 200px;
    width: 150px;
`
const Img = styled.img`
    height: 100px;
    width: 100px;
`

const P = styled.p`
    text-align: center;
    padding: 0.5rem;
    width: 120px;
`
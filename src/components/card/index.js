import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'
import { useContext } from "react"
import { ThemeContext } from "../../context/index.js"

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
        <section style={{ backgroundColor: theme.background, color: theme.fontColor }}>

            <div>
                <Link to='/'>
                    <h2>⬅back</h2>
                </Link>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={pokemonCard.name}
                />
                <p>{pokemonCard.name}</p>
            </div>

            <ul>
                {pokemonCard.moves ? pokemonCard.moves.map((item, index) => <li key={index}>{item.move.name}</li>) : ''}
            </ul>

            <ul>
                {pokemonAbilityText ? pokemonAbilityText.map((item, index) => <li key={index}>{item.name}: {item.flavor_text_entries[2].flavor_text}</li>) : ''}
            </ul>

            <ul>
                {pokemonCard.types ? pokemonCard.types.map((item, index) => <li key={index}>{item.type.name}</li>) : ''}
            </ul>

        </section>
    );
}
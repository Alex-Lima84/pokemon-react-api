import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'

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

const PokemonCard = () => {

    const [pokemonCard, setPokemonCard] = useState({})
    const [pokemonAbilityText, setPokemonAbilitytext] = useState([])
    const { id } = useParams()

    useEffect(() => {

        async function fetchData() {
            
            const pokemonCard = await getPokemonCards(id)

            const abilitiesName = pokemonCard.abilities.map((item) => {
                return item.ability.name
            })

            const data = abilitiesName.map(async (pokemonAbility) => {
                return (
                    await getPokemonAbility(pokemonAbility)
                )
            })
            const pokemonAbilityText = await Promise.all(data)
            setPokemonAbilitytext(pokemonAbilityText)
            setPokemonCard(pokemonCard)
            console.log(pokemonAbilityText)
        }
        fetchData()
    }, [])

    return (
        <section>
            <div>
                <Link to='/'>
                    <h2>Retornar</h2>
                </Link>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={pokemonCard.name}
                />
                <p>{pokemonCard.name}</p>
            </div>

            <div>
                {pokemonCard.moves ? pokemonCard.moves.map((item, index) => <li key={index}>{item.move.name}</li>) : ''}
            </div>

            <div>
                <ul>
                    {pokemonAbilityText ? pokemonAbilityText.map((item, index) => <li key={index}>{item.name}: {item.flavor_text_entries[0].flavor_text}</li>) : ''}
                </ul>
            </div>

            <div>
                {pokemonCard.types ? pokemonCard.types.map((item, index) => <li key={index}>{item.type.name}</li>) : ''}
            </div>

        </section>
    );
}

export { PokemonCard }
import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'

async function getPokemonCards(id) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
}

async function getPokemonAbility(abilityName) {
    
    const response = await fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`)
    const data = await response.json()
    console.log(data)
    return data
}

const abilityName = 'blaze'

getPokemonAbility(abilityName)

const PokemonCard = () => {

    const [pokemonCard, setPokemonCard] = useState({})
    const { id } = useParams()


    useEffect(() => {
        async function fetchData() {
            const pokemonCard = await getPokemonCards(id)
            setPokemonCard(pokemonCard)
            console.log(pokemonCard)          
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
            {pokemonCard.abilities ? pokemonCard.abilities.map((item, index) => <li key={index}>{item.ability.name}</li>) : ''}
            </div>

            <div>
                {pokemonCard.types ? pokemonCard.types.map((item, index) => <li key={index}>{item.type.name}</li>) : ''}
            </div>
            
        </section>
    );
}

export { PokemonCard }
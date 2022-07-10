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

    const [ pokemonCard, setPokemonCard ] = useState({})
    const [ pokemonAbilityText, setPokemonAbilitytext ] = useState([])
    const { id } = useParams()

    useEffect(() => {

        async function fetchData() {
            const pokemonCard = await getPokemonCards(id)
            setPokemonCard(pokemonCard)
            
            if (pokemonCard) {
                pokemonCard.abilities.forEach(item => {                   
                    const pokemonAbility = item.ability.name
                    console.log(pokemonAbility)
                })
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        
        async function fetchData() {
            const pokemonAbilityText = await getPokemonAbility()
            setPokemonAbilitytext(pokemonAbilityText)    
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
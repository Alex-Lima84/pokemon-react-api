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

    const pokemonAbility = 'blaze' //Deixei fixo somente para testar, porém não descobri uma forma de utilizar os valores que vem da variável pokemonCard.

    useEffect(() => {
        async function fetchData() {
            const pokemonCard = await getPokemonCards(id)
            setPokemonCard(pokemonCard)
            console.log(pokemonCard)          
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function fetchData() {
            const pokemonAbilityText = await getPokemonAbility(pokemonAbility)
            setPokemonAbilitytext(pokemonAbilityText)
            console.log(pokemonAbilityText)
            console.log(pokemonAbilityText.flavor_text_entries[0].flavor_text)          
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
import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'

async function getPokemonTypes(type) {

    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    const data = await response.json()
    return data
}

const type = 'fighting'

const PokemonTypesCard = () => {

    const [ pokemonTypesCard, setPokemonTypesCard ] = useState({})

    useEffect(() => {

        async function fetchData() {

            const pokemonTypesCard = await getPokemonTypes(type)
            setPokemonTypesCard(pokemonTypesCard)
            console.log(pokemonTypesCard.pokemon[0].pokemon)
        }
        fetchData()
    }, [])

    return (
        <section> 

            {<div>
                {pokemonTypesCard.pokemon ? pokemonTypesCard.pokemon.map((item, index) => <li key={index}>{item.pokemon.name}</li>) : ''}
            </div> }
            
        </section>
    );
}

export { PokemonTypesCard }
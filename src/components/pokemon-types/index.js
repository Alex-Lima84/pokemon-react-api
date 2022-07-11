import React from 'react'
import { useState, useEffect } from "react";

async function getPokemonTypes(type) {

    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    const data = await response.json()
    return data
}

const type = 'water'

const PokemonTypesCard = () => {

    const [ pokemonTypesCard, setPokemonTypesCard ] = useState({})

    useEffect(() => {

        async function fetchData() {

            const pokemonTypesCard = await getPokemonTypes(type)
            setPokemonTypesCard(pokemonTypesCard)
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
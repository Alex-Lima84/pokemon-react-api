import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'

async function getPokemonCards(id) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()
    return data
}

const PokemonCard = () => {

    const [pokemonCard, setPokemonCard] = useState({})
    const { id } = useParams()


    useEffect(() => {
        async function fetchData() {
            const pokemonCard = await getPokemonCards(id)
            setPokemonCard([pokemonCard])
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
        </section>
    );
}

export { PokemonCard }
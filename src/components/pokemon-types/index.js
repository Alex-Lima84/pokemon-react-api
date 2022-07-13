import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

async function getPokemonTypes(type) {

    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`)
    const data = await response.json()
    return data
}

async function getPokemonInfo(pokemonId) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const data = await response.json()
    return data
}

const type = 'water'

const PokemonTypesCard = () => {

    const [pokemonTypesCard, setPokemonTypesCard] = useState({})
    const [pokemonId, setPokemonId] = useState({})

    useEffect(() => {

        async function fetchData() {


            const pokemonTypesCard = await getPokemonTypes(type)
            const pokemonIdText = pokemonTypesCard.pokemon.map((item) => {
                return item.pokemon.name
            })
            const data = pokemonIdText.map(async (pokemonId) => {
                return (
                    await getPokemonInfo(pokemonId)
                )
            })
            const pokemonIdNumber = await Promise.all(data)
            setPokemonId(pokemonIdNumber)
            setPokemonTypesCard(pokemonTypesCard)
            console.log(pokemonTypesCard)
            // console.log(pokemonId)
            // console.log(pokemonId[0].id)
            // console.log(pokemonId[0].name)
        }
        fetchData()
    }, [])

    return (
        <section>

            {<div>
                <ul>
                    {/* {!pokemonId ? '' : pokemonId.map((item, index) =>
                        <div key={index}>
                            <Link to={`/pokemon/${item.id}`}>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                                    alt={item.name}
                                />
                            </Link>
                            <p>{item.name}</p>
                        </div>
                    )} */}
                    {!pokemonTypesCard.pokemon ? '' : pokemonTypesCard.pokemon.map((item, index) =>
                        <div key={index}>
                            <Link to={`/pokemon/${index}`}>
                                <img
                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`}
                                    alt={pokemonId.name}
                                />
                            </Link>
                            <p>{pokemonId.name}</p>
                        </div>
                    )}
                </ul>
            </div>}

        </section>
    );
}

export { PokemonTypesCard }
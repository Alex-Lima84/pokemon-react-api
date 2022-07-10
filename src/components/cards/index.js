
import React from 'react'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-toggler"
import { PokemonTypesCard } from '../pokemon-types';

const pokemonDisplayQuantity = 10

async function getPokemonCards(offsetQuantity) {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form?limit=${pokemonDisplayQuantity}&offset=${offsetQuantity}/`)
  const data = await response.json()
  return data
}

const PokemonCardsList = () => {

  const [ pokemonCards, setPokemonCards ] = useState([])
  const [ offsetQuantity, setOffsetQuantity ] = useState(0)
  const { theme } = useContext(ThemeContext)

  const getMorePokemons = () => {
    (setOffsetQuantity(offsetQuantity + pokemonDisplayQuantity))
  }

  useEffect(() => {
    async function fetchData() {
      const morePokemons = await getPokemonCards(offsetQuantity)
      setPokemonCards([...pokemonCards, ...morePokemons.results])
      
    }
    fetchData()
  }, [offsetQuantity])

  return (
    <section style={{backgroundColor: theme.background}}>
      {pokemonCards.map(
        (pokemon, index) =>
          <div key={index}>
            <Link to={`/pokemon/${index+1}`}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
              />
            </Link>
            <p>{pokemon.name}</p>
          </div>
      )}
      <button className="get-more-button" onClick={getMorePokemons}>
        Get more pokemons
      </button>

      <PokemonTypesCard />
    </section>
  );
}

export { PokemonCardsList }
import React from 'react'
import { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { ThemeContext } from "../../context/theme-toggler"

const pokemonDisplayQuantity = 10

async function getPokemonCards(offsetQuantity) {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form?limit=${pokemonDisplayQuantity}&offset=${offsetQuantity}/`)
  const data = await response.json()
  return data
}

export const PokemonCardsList = () => {

  const [pokemonCards, setPokemonCards] = useState([])
  const [offsetQuantity, setOffsetQuantity] = useState(0)
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


    <Section style={{ backgroundColor: theme.background, color: theme.fontColor }}>



      <Div>
        {pokemonCards.map(
          (pokemon, index) =>
            <Ul key={index}>
              <Link to={`/pokemon/${index + 1}`}>
                <Img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                  alt={pokemon.name}
                />
              </Link>
              <P>{pokemon.name}</P>
            </Ul>
        )}
      </Div>

      <div>
        <Button className="get-more-button" onClick={getMorePokemons}>
          GET MORE POKEMONS!
        </Button>
      </div>

    </Section>

  );
}

const Section = styled.section`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0, 1rem;
`

const Div = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 1.5rem;
`

const Ul = styled.ul`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0.8rem;
      border: 0.2px solid #FFF;
      border-radius: 0.5rem;
`

const Img = styled.img`
     
`

const P = styled.p`
      height: 1.5rem;
      line-height: 1.5rem;
`

const Button = styled.button`
  padding: 0.5rem;
`
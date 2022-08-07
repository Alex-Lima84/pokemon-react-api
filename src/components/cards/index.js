import React from 'react'
import { useState, useEffect } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { ThemeContext } from "../../context/index.js"
import { getPokemonCards } from './services.js';

const pokemonDisplayQuantity = 10

getPokemonCards()

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


    <Section theme={theme}>

      <Div>
        {pokemonCards.map(
          (pokemon, index) =>
            <Ul key={index}>
              <Link to={`/pokemon/${index + 1}`}>
                <Img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
                  alt={pokemon.name}
                />
              </Link>
              <P>{pokemon.name}</P>
            </Ul>
        )}
      </Div>

      <div>
        <Button onClick={getMorePokemons}>
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
  padding-bottom: 5rem;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.fontColor}
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
  padding: 0.5rem;
  border: 1px solid #0d3b66;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 200px;
  width: 150px;
`

const Img = styled.img`
  height: 100px;
  width: 100px;
`

const P = styled.p`
  height: 1.5rem;
  line-height: 1.5rem;
  text-align: center;
`

const Button = styled.button`
  cursor: pointer;
  padding: 0.5rem;
  background-color: #ffd500;
  color: #003f88;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
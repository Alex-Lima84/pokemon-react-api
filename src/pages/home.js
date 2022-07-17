import  React  from 'react'
import { PokemonCardsList } from "../components/cards";
import { PokemonTypesCard } from '../components/pokemon-types';

export const Home = () => {
    return (
        <>
            <PokemonCardsList />
            <PokemonTypesCard />
        </>
    )
}
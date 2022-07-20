import  React  from 'react'
import { PokemonCardsList } from "../components/cards";
import { PageFooter } from '../components/footer';
import { PageHeader } from '../components/header';
import { PokemonTypesCard } from '../components/pokemon-types';

export const Home = () => {
    return (
        <>
            <PageHeader />
            <PokemonCardsList />
            <PokemonTypesCard />
            <PageFooter />
        </>
    )
}
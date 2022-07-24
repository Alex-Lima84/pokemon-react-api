import  React  from 'react'
import { PokemonCardsList } from "../components/cards";
import { PageFooter } from '../components/footer';
import { HomePageHeader } from '../components/home-page-header';
import { PokemonTypesCard } from '../components/pokemon-types';

export const Home = () => {
    return (
        <>
            <HomePageHeader />
            <PokemonCardsList />
            <PokemonTypesCard />
            <PageFooter />
        </>
    )
}
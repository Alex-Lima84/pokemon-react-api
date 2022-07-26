import  React  from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from '../components/scroll-to-top';
import { Home } from "./home";
import { PokemonPage } from './pokemon-info';

export const AppRoutes = () => {

    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/pokemon/:id" element={<PokemonPage />} />
            </Routes>
        </BrowserRouter>
    )
}
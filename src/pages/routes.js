import  React  from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from "./home";
import { PokemonPage } from './pokemon-info';

const AppRoutes = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/pokemon/:id" element={<PokemonPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }
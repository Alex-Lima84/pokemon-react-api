export async function getPokemonTypes(value) {
    
    const response = await fetch(`https://pokeapi.co/api/v2/type/${value}`)
    const data = await response.json()
    return data
}

export async function getPokemonInfo(pokemonId) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const data = await response.json()
    return data
}
const pokemonDisplayQuantity = 10

export async function getPokemonCards(offsetQuantity) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form?limit=${pokemonDisplayQuantity}&offset=${offsetQuantity}/`)
    const data = await response.json()
    return data
  }
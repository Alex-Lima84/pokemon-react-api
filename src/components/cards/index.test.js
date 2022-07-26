import '@testing-library/jest-dom'

test('getPokemonCards() async function', async () => {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form?limit=10&offset=0/`)
    const data = await response.json()
    
    expect(data.results[0].name).toEqual('bulbasaur')
  })


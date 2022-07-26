import '@testing-library/jest-dom'

test('getPokemonCards(id) async function', async () => {

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/6`)
  const data = await response.json()

  expect(data.abilities[0].ability.name).toEqual('blaze')
})



export const fetchPokemonImg = async (id: number): Promise<string> => {
  const endpoint = `${process.env.NEXT_PUBLIC_POKEMON_API_BASE_URL}/pokemon/${id}`;
  const fetchPokemon = await fetch(endpoint);
  const pokemonJson = await fetchPokemon.json();

  return pokemonJson.sprites.front_default;
};

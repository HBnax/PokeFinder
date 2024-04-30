import { PokemonGrid } from "@/components/pokemon-grid";
import { PokemonCard } from "@/components/pokemon-card";
import Image from "next/image";
import { getPokemonList } from "@/lib/pokemonAPI";

export default async function Home() {
  //load in data from PokeAPI (server component)
  const pokemonList = await getPokemonList();
  //pass data to PokemonGrid (client component)

  // 1. create PokemonGrid component
  // 2. load in data from PokeAPI
  // 3. pass data to PokemonGrid
  return (
    <PokemonGrid pokemonList={pokemonList}/>
  );
}

"use client"
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from './pokemon-card';

interface PokemonGridProps {
    pokemonList: any
}
export function PokemonGrid({ pokemonList } : PokemonGridProps){
    const [ searchText, setSearchText ] = useState("");
    //filter the text
    const searchFilter = (pokemonList:any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }
    //save the filtered array
    const filteredPokemonList = searchFilter(pokemonList);

    return (
        <>
            <div className="m-10">
                <h2 className="text-3xl py-6 text-center">Search For A Pokémon</h2>
                <div className="gric w-full max-w-sm items-center gap-1.5">
                    <Input
                        type="text"
                        value={searchText}
                        autoComplete="off"
                        id="pokemonName"
                        placeholder="Charizard, Pikachu, etc."
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
            </div>
            <div className="mb-32 m-0 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-center">
                {filteredPokemonList.map((pokemon : any) => {
                    return (
                        <PokemonCard key={pokemon.id} name={pokemon.name} />
                    )
                })}
            </div>
        </>
    )
}
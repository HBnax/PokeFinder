import { getPokemon } from "@/lib/pokemonAPI";
import Image from 'next/image';
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { PokemonImage } from "@/components/pokemon-image";
import { Water_Brush } from "next/font/google";
import { PowerSquareIcon } from "lucide-react";


const typeColors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
}
export default async function PokemonPage({ params } : {params: { pokemonName: string }}) {
    //object destructuring
    const { pokemonName } = params;

    //fetch the pokemon data
    const pokemonObject = await getPokemon(pokemonName);

    const primaryType = pokemonObject.types[0].type.name;
    const bgColor: string = typeColors[primaryType as keyof typeof typeColors];

    return (
        <div className="p-4 m-10 rounded-lg" style={{backgroundColor: bgColor}}>
            <div className="bg-black text-white p-4 rounded-t-lg">
                <div className="flex flex-col items-center text-center">
                    <h1 className="text-4xl text-bold pt-4 item-center">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h1>
                    <div className="flex justify-center items-center m-4" style={{position: "relative", width: '300px', height: '300px'}}>
                        <PokemonImage
                            image={pokemonObject.sprites.other['official-artwork'].front_default}
                            name={pokemonName}
                        />
                    </div>
                </div>
                <div className="flex-col">
                    <h3 className="p-3 w-2/4">
                        Type: {pokemonObject.types.map((typeObject: any) => {
                            return (
                                typeObject.type.name.charAt(0).toUpperCase() + typeObject.type.name.slice(1) + " "
                            );
                        })}
                    </h3>
                    <h3 className="p-3 w-2/4">Weight: {pokemonObject.weight} lbs</h3>
                    {pokemonObject.stats.map((statObject: any) => {
                        const statName = statObject.stat.name;
                        const statValue = statObject.base_stat;

                        return (
                            <div className="flex items-stretch" style={{width: '500px'}} key={statName}>
                                <h3 className="p-3 w-2/4">{statName.charAt(0).toUpperCase() + statName.slice(1)} : {statValue}</h3>
                                <Progress className="w-2/4 m-auto" value={statValue}/>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
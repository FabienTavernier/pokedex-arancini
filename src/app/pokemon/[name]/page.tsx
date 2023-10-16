/*
  Pour une route paramétrée, je crée un dossier
  qui a pour nom mon paramètre entre crochets
  `/app/pokemon/[name]`


  Les paramètres seront automatiquement disponibles dans les props
*/

import { Pokemon } from '@/@types/pokemon';

interface SingleProps {
  params: {
    name: string;
  };
}

async function fetchPokemonByName(name: string) {
  const res = await fetch(
    `https://api-pokemon-fr.vercel.app/api/v1/pokemon/${name}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<Pokemon>;
}

export default async function Single({ params }: SingleProps) {
  const pokemon = await fetchPokemonByName(params.name);

  return (
    <main className="bg-cyan-950 min-h-screen">
      <h1 className="font-bold text-cyan-400 text-4xl p-12">
        {pokemon.name.fr}
      </h1>

      <img
        src={pokemon.sprites.shiny || pokemon.sprites.regular}
        alt={pokemon.name.fr}
      />
    </main>
  );
}

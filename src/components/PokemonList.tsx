'use client';

import { Pokemon } from '@/@types/pokemon';
import PokemonCard from '@/components/PokemonCard';
import Link from 'next/link';
import { useState } from 'react';

interface PokemonListProps {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  const [perPage, setPerPage] = useState(20);

  const filteredPokemons = pokemons.slice(0, perPage);

  return (
    <>
      <div>
        <span className="text-slate-300">Afficher </span>
        <select
          className="text-slate-950"
          value={perPage}
          onChange={(e) => setPerPage(Number(e.target.value))}
        >
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="200">200</option>
        </select>
        <span className="text-slate-300"> Pokemons par page</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
        {filteredPokemons.map((pokemon) => (
          <Link
            key={pokemon.pokedexId}
            href={`/pokemon/${pokemon.name.fr.toLowerCase()}`}
            className="flex"
          >
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </>
  );
}

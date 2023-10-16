'use client';

import { Pokemon } from '@/@types/pokemon';
import PokemonCard from '@/components/PokemonCard';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import slugify from 'slugify';

interface PokemonListProps {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const defaultPage = searchParams.get('page') || 0;
  const defaultPerPage = searchParams.get('perPage') || 20;

  const [page, setPage] = useState(Number(defaultPage));
  const [perPage, setPerPage] = useState(Number(defaultPerPage));

  const start = page * perPage;
  const end = start + perPage;

  const pokemonsFiltered = pokemons.slice(start, end);

  useEffect(() => {
    const url =
      page === 0 && perPage === 20
        ? `${pathname}`
        : `${pathname}?page=${page}&perPage=${perPage}`;

    router.push(url);
  }, [router, pathname, searchParams, page, perPage]);

  return (
    <>
      <div className="flex justify-between px-12">
        <div className="flex gap-2 justify-center">
          <button
            type="button"
            className="border border-cyan-900 text-slate-300 transition-all p-2 min-w-[10rem] rounded-lg font-bold hover:border-cyan-400 disabled:border-slate-600 disabled:text-slate-600"
            onClick={() => setPage((nb) => nb - 1)}
            disabled={page === 0}
          >
            Précédent
          </button>

          <button
            type="button"
            className="border border-cyan-900 text-slate-300 transition-all p-2 min-w-[10rem] rounded-lg font-bold hover:border-cyan-400 disabled:border-slate-600 disabled:text-slate-600"
            onClick={() => setPage((nb) => nb + 1)}
            // je calcule le start de ma prochaine page,
            // si il est plus grand que mon nombre d'éléments
            // alors, je n'ai plus rien à afficher
            disabled={pokemons.length <= (page + 1) * perPage}
          >
            Suivant
          </button>
        </div>

        <div>
          <span className="text-slate-300">Afficher </span>
          <select
            className="text-slate-950"
            onChange={(e) => setPerPage(Number(e.target.value))}
            value={perPage}
          >
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
          <span className="text-slate-300"> Pokemons par page</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
        {pokemonsFiltered.map((pokemon) => (
          <Link
            key={pokemon.pokedexId}
            // href={`/pokemon/${pokemon.name.fr.toLowerCase()}`}
            href={`/pokemon/${slugify(pokemon.name.fr, { lower: true })}`}
            className="flex"
          >
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))}
      </div>
    </>
  );
}

/*
  Le page.tsx est le fichier qui décrit le contenu de la page.
  En fonction de l'URL, il sera envoyé en tant que `children`
  du layout.tsx le plus proche (au même niveau d'arborescence
  ou plus proche ancêtre)
*/

import { Pokemon } from '@/@types/pokemon';
import PokemonList from '@/components/PokemonList';

/*
  Pour aller chercher les données depuis l'API,
  je peux le faire côté serveur.

  Je crée ma fonction de fetch (axios) qui retourne les résultats
*/
async function fetchPokemons() {
  const res = await fetch('https://api-pokemon-fr.vercel.app/api/v1/pokemon');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

/* J'indique mon composant comme asynchrone */
export default async function Home() {
  // je récupère les données
  const pokemons: Pokemon[] = await fetchPokemons();
  // Attention, on est en SSR (par défaut) donc côté serveur,
  // les `console.log()` s'affichent côté serveur, donc dans le terminal
  // console.log(pokemons);

  // je les affiche (côté serveur)
  return (
    <main className="grow">
      {/*
        Pour la padding (et les autres espacements), TW utilise
        « son unité » :

        1 tw → 4px = 0.25rem
        x tw → 48px

        x = 48 * 1 / 4 = 48 / 4 = 12 → p-12

        on a le nombre de pixels souhaité, on le divise par 4
      */}
      <h1 className="font-bold text-cyan-400 text-4xl p-12">Pokédex</h1>

      <PokemonList pokemons={pokemons} />
    </main>
  );
}

/*
  Le page.tsx est le fichier qui décrit le contenu de la page.
  En fonction de l'URL, il sera envoyé en tant que `children`
  du layout.tsx le plus proche (au même niveau d'arborescence
  ou plus proche ancêtre)
*/

export default function Home() {
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
    </main>
  );
}

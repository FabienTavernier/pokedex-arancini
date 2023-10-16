/*
  Le layout.tsx est le fichier qui décrit le template (layout)
  de la page.
*/

import './globals.css';
import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

/*
  Par défaut, les composants Next sont rendus côté serveur
  (html, css générés par un serveur et envoyé au client),
  on peut renseigner ici les meta (title, description…).
*/
export const metadata: Metadata = {
  title: 'Pokédex',
  description: 'Mon super Pokédex fabriqué avec NextJS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {/*
          Le contenu de la page sera automatiquement donné via `children`
          au layout en fonction de l’arborescence de l'application.

          (équivalent de `<Outlet />` de React Router)
        */}
        {children}
        <footer>© 2023 – O&apos;clock Arancini </footer>
      </body>
    </html>
  );
}

/*
  Ce layout.tsx servira pour `about/page.tsx` et
  sera intégré dans le `children` du layout parent
  → layouts imbriqués
*/

import React from 'react';
import type { Metadata } from 'next';

/*
  Je peux ré-écrire les metadata
*/
export const metadata: Metadata = {
  title: 'About us | Pokédex',
  description: 'Nous c\'est la promo Arancini !',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="about-layout">{children}</div>
  );
}

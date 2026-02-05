export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        {/* O children é onde o conteúdo da sua page.tsx será renderizado */}
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rodrigo | Desenvolvedor Full Stack',
  description:
    'Portfólio de Rodrigo, Desenvolvedor Full Stack com foco em React, Node.js, APIs REST e bancos de dados SQL.',
};

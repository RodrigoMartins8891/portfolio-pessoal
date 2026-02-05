import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rodrigo | Dev Full Stack",
  description: "Portfólio Full Stack com foco em Next.js e Node.js. Confira o projeto DevBurger!",
  openGraph: {
    title: "Rodrigo | Dev Full Stack",
    description: "Confira meus projetos e habilidades como Desenvolvedor Full Stack.",
    images: [
      {
        url: 'https://seu-link-da-vercel.app/og-image.png', // Opcional: link de uma imagem sua
        width: 1200,
        height: 630,
      },
    ],
  },
};  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
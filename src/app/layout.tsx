import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rodrigo | Desenvolvedor Full Stack",
  description: "Portfólio de Rodrigo, Desenvolvedor Full Stack Júnior.",
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
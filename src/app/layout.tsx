import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Expost AI",
  description: "Painel de Controle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-[#09090b] text-white m-0 p-0">
        {children}
      </body>
    </html>
  );
}

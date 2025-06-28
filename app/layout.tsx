import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manju Edits",
  description: "Manju Edits - A passionate video editor",
    generator: 'v0.dev'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hotel — Room Options",
  description: "Room options and pricing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

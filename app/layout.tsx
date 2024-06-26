import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Priya Singh",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white m-0 p-0">{children}</body>
    </html>
  );
}

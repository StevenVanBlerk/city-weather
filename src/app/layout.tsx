import type { Metadata } from "next";

import "./globals.css";
import Layout from "./_layout";

export const metadata: Metadata = {
  title: "City Weather",
  description: "Get the current weather of a city.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}

import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Boilerplate",
  description: "Next.js Boilerplate",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

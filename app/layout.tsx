import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EatClub Pilot Results Dashboard",
  description: "Pilot campaign performance dashboard for EatClub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ABC Management Portal | Blue Cross of Hyderabad",
  description:
    "Animal Birth Control Management Portal by Blue Cross of Hyderabad. Manage field operations, veterinary records, and shelter activities seamlessly.",
  keywords: "animal welfare, Blue Cross Hyderabad, ABC portal, animal management, shelter",
  openGraph: {
    title: "ABC Management Portal | Blue Cross of Hyderabad",
    description: "Streamlining animal welfare operations across Hyderabad",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

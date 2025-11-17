import Header from "@/components/Header";
import "./globals.css";
import { ReactNode } from "react";
import Footer from "@/components/Footer";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>UltraQuad IT Consulting</title>

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Building Intelligent Solutions for the Future"
        />

        <meta
          name="google-site-verification"
          content="LyjzR2V-4NCRTTiafLgeg-6kYYlQFUAoPuVEZfEzeZM"
        />

        <meta
          name="keyword"
          content="ultraquad,ultraquad company,ultraquad consultancy,IT consulting companies in kenya, Cybersecurity solutions,AI Consulting,Fullstack Services"
        />
      </head>

      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

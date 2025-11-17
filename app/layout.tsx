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
        
        <meta
          name="description"
          content="Building Intelligent Solutions for the Future"
        />

        <meta
          name="google-site-verification"
          content="LyjzR2V-4NCRTTiafLgeg-6kYYlQFUAoPuVEZfEzeZM"
        />
        <meta name="keyword" content="ultraquad,ultraquad company,ultraquad consultancy,IT consulting companies in kenya, Cybersecurity solutions,AI Consulting,Fullstack Services" />

      </head>


      <Header />
      <body className="font-sans antialiased">{children}</body>
      <Footer />
    </html>
  );
}

import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Poppins } from "next/font/google";
import BootstrapClient from "./components/BootstrapClient";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumb from "./components/Breadcrumb";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explore More, Experience More - Travel with Us",
  description: "Next Js Project",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        />
      </head>
      <body>
        <BootstrapClient />
        <Header />
        <Breadcrumb />
        {children}
        <Footer />
      </body>
    </html>
  );
}

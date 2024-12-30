import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import AppProvider from "./components/AppContext";
import { AppContext } from "@/context/AppContext";

import AppContextProvider from "./context/AppContext"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Dev Service",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
      <AppProvider >
      <body className={`${inter.className} max-w-full mx-auto sm:max-w-[95%] md:max-w-[90%] xl:max-w-[85%] relative `}>
        <AppContextProvider>


        {/* 
        <ThemeProvider attribute="class">
        </ThemeProvider>
        */}


          <Navbar />

          <div>{children}</div>
          <Footer />
          <PopupWidget />
        
        </AppContextProvider>
      </body>
      </AppProvider>
    </html>
  );
}
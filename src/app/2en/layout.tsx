import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { PopupWidget }  from "./components/PopupWidget";
import AppProvider from "./components/AppContext";
import { AppContext } from "./context/AppContext";

import AppContextProvider from "./context/AppContext"
import { Providers } from "./provider";


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

      <style>
@import url('https://fonts.googleapis.com/css2?family=Alexandria:wght@100..900&family=Cairo:wght@200..1000&family=Readex+Pro:wght@160..700&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
</style>


      <AppProvider >
      <body className={`${inter.className} max-w-full mx-auto sm:max-w-[95%] md:max-w-[90%] xl:max-w-[85%] relative `}>
        <AppContextProvider>


        {/* 
        <ThemeProvider attribute="class">
        </ThemeProvider>
        */}


          <Navbar />

          
          <Providers>
          <div>{children}</div>
          </Providers>
          
          
          <Footer />
          <PopupWidget />
        
        </AppContextProvider>
      </body>
      </AppProvider>
    </html>
  );
}

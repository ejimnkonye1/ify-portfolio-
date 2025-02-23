import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Loader from "~/components/loader"; 
import "./tailwind.css";
import 'animate.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Skills from './components/skills'
import Reviews from './components/review'
import Contact from './components/contact'
import { useEffect, useState } from "react";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css", // Add Animate.css here
  },
];



export function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simulating a loading delay
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        
      </head>
      <body className="font-poppins">
        <Navbar />
        <Hero />
        
        <div >
        <About />
        <Services />
       
   
        <Skills/>
        <Reviews/>
        <Contact/>
        </div>
       
        {loading && <Loader />}
      {!loading && <>{children}</>}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

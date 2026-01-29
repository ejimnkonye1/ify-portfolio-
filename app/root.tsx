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
import Insights from './components/insights'
import Contact from './components/contact'
import Footer from './components/footer'
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
    href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
        {/* Show loader OR content, not both */}
        {loading ? (
          <Loader />
        ) : (
          <>
            <Navbar />
            <main id="main-content">
              <Hero />
              <div id="about">
                <About />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="skills">
                <Skills />
              </div>
              <div id="insights">
                <Insights />
              </div>
              <div id="contact">
                <Contact />
              </div>
              <Footer />
            </main>
            {children}
          </>
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
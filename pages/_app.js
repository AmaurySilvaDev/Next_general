import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { Analytics } from "@vercel/analytics/react"
import { PortfolioProvider } from "@/contextApi/PortfolioContext"
import ThemeProvider from "@/context/themeContext"
import "@/styles/globals.css"
import "@/styles/animation.css"
import "@/styles/cssGrid.css"
import "@/styles/Home.module.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Check if NEXT_PUBLIC_MEASUREMENT_ID exists
    if (!process.env.NEXT_PUBLIC_MEASUREMENT_ID) {
      console.error("NEXT_PUBLIC_MEASUREMENT_ID is missing. Please add it to your environment variables.");
      return;
    }

    ReactGA.initialize(process.env.NEXT_PUBLIC_MEASUREMENT_ID);

    // This event will trigger once for each page after a route change
    ReactGA.pageview();

    return () => {
      // Cleanup
    };
  }, []);

  return (
    <PortfolioProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </PortfolioProvider>
  )
}

export default MyApp;

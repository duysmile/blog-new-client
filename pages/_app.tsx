import { ThemeProvider } from 'next-themes';

import "tailwindcss/tailwind.css";
import "@moai/core/dist/bundle.css";
import "@moai/core/dist/font/remote.css";
import "../styles/globals.css";
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            storageKey="theme"
            themes={['light', 'dark']}
        >
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

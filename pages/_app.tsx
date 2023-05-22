import type { AppProps } from 'next/app';
import {GlobalStyles} from "@/styles/global.styles";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <style jsx global>{GlobalStyles}</style>
        </>
    );
}

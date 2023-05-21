import type { AppProps } from 'next/app';
import {GlobalStyles} from "@/pages/global.styles";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <style jsx>{GlobalStyles}</style>
        </>
    );
}

import NextNProgress from 'nextjs-progressbar';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <NextNProgress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height="3"
            />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

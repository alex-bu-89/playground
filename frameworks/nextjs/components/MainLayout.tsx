import Link from 'next/link';
import Head from 'next/head';

export function MainLayout({ children, title = "Nextjs App" }) {
    return (
        <>
            <Head>
                <title>{ title } | Next Course</title>
                <meta name="keywords" content="Some keywords" />
                <meta name="description" content="Some description" />
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/about/author"><a>Author</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
            </nav>
            <main>
                { children }
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    top: 0;
                    right: 0;
                    background: #548dbf;
                    display: flex;
                    justify-content: space-around;
                    align-items: center
                }

                nav a {
                    color: #fff;
                }

                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
            `}</style>
        </>
    )
}

export default MainLayout;

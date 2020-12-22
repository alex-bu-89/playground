import Link from 'next/link';

export default function Index() {
    return (
        <>
            <h1>Hello Next.js</h1>
            <p><Link href={'/posts'}><a>To posts</a></Link></p>
            <p><Link href={'/about'}><a>To About</a></Link></p>
            <p>Some text</p>
        </>
    );
}

import Link from 'next/link';
import Head from 'next/head';
import { MainLayout } from '../components/MainLayout';

export default function Error() {
    return (
        <MainLayout title="Error Page">
            <h1>Error 404</h1>
            <p>Please go back to <Link href="/"><a>safety</a></Link></p>
        </MainLayout>
    );
}

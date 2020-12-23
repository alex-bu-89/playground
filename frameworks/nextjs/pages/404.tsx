import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';
import classes from '../styles/error.module.scss'

export default function Error() {
    return (
        <MainLayout title="Error Page">
            <h1 className={classes.error}>Error 404</h1>
            <p>Please go back to <Link href="/"><a>safety</a></Link></p>
        </MainLayout>
    );
}

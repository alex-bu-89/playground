import Router from 'next/router';
import MainLayout from '../../components/MainLayout';

export default function About() {

    const handleClick = () => {
        Router.push('/');
    }

    return (
        <MainLayout title="About">
            <h1>About</h1>
        </MainLayout>
    );
}

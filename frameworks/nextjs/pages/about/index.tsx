import Router from 'next/router';
import MainLayout from '../../components/MainLayout';

export default function About({ title }) {
    return (
        <MainLayout title="About">
            <h1>About</h1>
            <p>{ title }</p>
        </MainLayout>
    );
}

About.getInitialProps = async () => {
    const response = await fetch(`${process.env.API_URL}/about`);
    const data = await response.json();

    return {
        title: data.title,
    };
}

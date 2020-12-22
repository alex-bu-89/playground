import Router from 'next/router';

export default function About() {

    const handleClick = () => {
        Router.push('/');
    }

    return (
        <>
            <h1>About</h1>

            <button onClick={handleClick}>Go back to home</button>
            <button onClick={() => { Router.push('/posts'); }}>Go to posts</button>
        </>
    );
}

import { NextPageContext } from 'next';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import MainLayout from '../components/MainLayout';
import { MyPost, PostsPageProps } from '../interfaces/post';

function Posts({ posts: serverPosts }: PostsPageProps) {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts');
            const posts = await response.json();
            setPosts(posts);
        }

        if (!serverPosts) { load(); }
    }, []);

    if (!posts) {
        return (
             <MainLayout>
                 <p>Loading...</p>
             </MainLayout>
        )
     }

    return (
        <MainLayout title="Posts page">
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={'/post/[id]'} as={`/post/${post.id}`} >
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
    if (!req) {
        return {
            posts: null,
        }
    }

    const response = await fetch(`${process.env.API_URL}/posts`);
    const posts: MyPost[] = await response.json();

    return {
        posts,
    };
};

export default Posts;

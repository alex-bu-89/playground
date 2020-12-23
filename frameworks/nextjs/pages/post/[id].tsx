import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MainLayout from '../../components/MainLayout';
import { NextPageContext } from 'next';
import { MyPost, PostNextPageContext, PostPageProps } from '../../interfaces/post';

function Post({ post: serverPost }: PostPageProps) {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data);
        }

        if (!serverPost) load();
    }, []);

    if (!post) {
       return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
       )
    }

    return (
        <MainLayout>
            <h1>{ post.title }</h1>
            <p>{ post.body }</p>
            <Link href="/posts"><a>Go back to posts</a></Link>
        </MainLayout>
    )
}

// export async function getServerSideProps({ query, req }) {
//     const response = await fetch(`http://localhost:4200/posts/${query.id}`);
//     const post = await response.json();

//     return {
//         props: {
//             post
//         },
//     };
// }

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
    if (!req) {
        return { post: null }
    }

    const response = await fetch(`http://localhost:4200/posts/${query.id}`);
    const post: MyPost = await response.json();

    return {
        post,
    };
};

export default Post;

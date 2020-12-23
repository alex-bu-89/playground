import { NextPageContext } from 'next';

export interface PostNextPageContext extends NextPageContext {
    query: {
        id: string;
    }
}

export interface PostPageProps {
    post: MyPost;
}

export interface PostsPageProps {
    posts: MyPost[];
}

export interface MyPost {
    id: string | number;
    title: string;
    body: string;
}

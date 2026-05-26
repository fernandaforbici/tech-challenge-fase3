export interface Post {
    id: number;
    title: string;
    description: string;
    content: string;
    author: string;
    createdAt: string;
    updatedAt: string;
}

// Para respostas wrappadas (create, update, delete)
export interface PostResponse {
    message: string;
    post: Post;
}

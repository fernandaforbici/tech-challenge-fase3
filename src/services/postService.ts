import { api } from "./api";
import { type Post, type PostResponse } from "../types/Post";

export async function getPosts(): Promise<Post[]> {
    const response = await api.get<Post[]>("/posts");
    return response.data;
}

export async function getPostById(id: number): Promise<Post> {
    const response = await api.get<Post>(`/posts/${id}`);
    return response.data;
}


// GET /posts/search?q=term — retorna Post[]
export const searchPosts = async (term: string): Promise<Post[]> => {
    const response = await api.get<Post[]>(`/posts/search`, {
        params: { q: term },
    });
    return response.data;
};

// export async function createPost(post: Omit<Post, "id" | "createdAt">): Promise<Post> {
//     const response = await api.post<Post>("/posts", post);
//     return response.data;
// }

// POST /posts — retorna { message, post }
export const createPost = async (
    data: { title: string; content: string; author: string }
): Promise<PostResponse> => {
    const response = await api.post<PostResponse>("/posts", data);
    return response.data;
};

// export async function updatePost(id: number, post: Omit<Post, "id" | "createdAt">): Promise<Post> {
//     const response = await api.put<Post>(`/posts/${id}`, post);
//     return response.data;
// }

// PUT /posts/:id — retorna { message, post }
export const updatePost = async (
    id: number | string,
    data: { title: string; content: string; author: string }
): Promise<PostResponse> => {
    const response = await api.put<PostResponse>(`/posts/${id}`, data);
    return response.data;
};


// export async function deletePost(id: number): Promise<void> {
//     await api.delete(`/posts/${id}`);
// }

// DELETE /posts/:id — retorna { message, post }
export const deletePost = async (id: number | string): Promise<PostResponse> => {
    const response = await api.delete<PostResponse>(`/posts/${id}`);
    return response.data;
};

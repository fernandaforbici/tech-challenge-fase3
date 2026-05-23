import { api } from "./api";
import { type Post } from "../types/Post";

export async function getPosts(): Promise<Post[]> {
    const response = await api.get<Post[]>("/posts");
    return response.data;
}

export async function getPostById(id: number): Promise<Post> {
    const response = await api.get<Post>(`/posts/${id}`);
    return response.data;
}

export async function createPost(post: Omit<Post, "id" | "createdAt">): Promise<Post> {
    const response = await api.post<Post>("/posts", post);
    return response.data;
}

export async function updatePost(id: number, post: Omit<Post, "id" | "createdAt">): Promise<Post> {
    const response = await api.put<Post>(`/posts/${id}`, post);
    return response.data;
}

export async function deletePost(id: number): Promise<void> {
    await api.delete(`/posts/${id}`);
}
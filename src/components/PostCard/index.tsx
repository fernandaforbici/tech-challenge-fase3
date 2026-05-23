import { Link } from "react-router-dom";
import { type Post } from "../../types/Post";

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <article style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px" }}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p><strong>Autor:</strong> {post.author}</p>
            <Link to={`/posts/${post.id}`}>Ler mais</Link>
        </article>
    );
}

import { Link } from "react-router-dom";
import { type Post } from "../../types/Post";

interface PostCardProps {
    post: Post;
}

export function PostCard({ post }: PostCardProps) {
    return (
        <article className="card post-card">
            <h2 className="post-card__title">{post.title}</h2>
            <p className="post-card__description">{post.description}</p>
            <p className="post-card__meta"><strong>Autor:</strong> {post.author}</p>
            <Link to={`/posts/${post.id}`}>Ler mais</Link>
        </article>
    );
}

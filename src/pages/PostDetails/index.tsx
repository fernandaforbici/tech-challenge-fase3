import { Link, useParams } from "react-router-dom";
import { mockPosts } from "../../services/mockPosts";

export function PostDetails() {
    const { id } = useParams();
    const post = mockPosts.find((p) => p.id === Number(id));

    if (!post) {
        return (
            <section>
                <h1>Post não encontrado</h1>
                <Link to="/">Voltar para a lista de posts</Link>
            </section>
        );
    }

    return (
        <article>
            <h1>Detalhes do Post</h1>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p><strong>Autor:</strong> {post.author}</p>
            <p><strong>Criado em:</strong> {new Date(post.createdAt).toLocaleDateString()}</p>
            <p>{post.content}</p>
            <Link to="/">Voltar para a lista de posts</Link>
        </article>
    );
}
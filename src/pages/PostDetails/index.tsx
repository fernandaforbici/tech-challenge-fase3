import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostById } from "../../services/postService";
import { type Post } from "../../types/Post";

export function PostDetails() {
    const { id } = useParams();

    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadPost() {
            try {
                if (!id) return;
                const data = await getPostById(Number(id));
                setPost(data);
            } catch (err) {
                setError("Erro ao carregar o post.");
            } finally {
                setLoading(false);
            }
        }
        loadPost();
    }, [id]);

    if (loading) {
        return <p>Carregando detalhes do post...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

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
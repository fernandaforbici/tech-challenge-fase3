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
                if (!id) {
                    setError("Post não encontrado.");
                    return;
                };
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


    if (error || !post) {
        return (
            <section>
                <h1 className="page-title">Detalhes do post</h1>
                <p className="alert alert-error">{error || "Post não encontrado."}</p>

                <Link className="button button--ghost" to="/">Voltar para a lista de posts</Link>
            </section>
        );
    }

    return (
        <section className="post-details">
            <article className="card post-details__card">
                <header className="post-details__header">
                    <p className="post-details__label">Detalhes do Post</p>
                    <h1 className="post-details__title">{post.title}</h1>
                    <div className="post-details__meta">
                        <span><strong>Autor:</strong> {post.author}</span>
                        <span><strong>Criado em:</strong> {new Date(post.createdAt).toLocaleDateString("pt-BR")}</span>
                    </div>
                </header>
                <p className="post-details__description">{post.description}</p>
                <div className="post-details__content">
                    <p>{post.content}</p>
                </div>

                <div className="form-actions">
                    <Link className="button button--ghost" to="/">Voltar para a lista de posts</Link>
                </div>
            </article>
        </section>
    );
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost, getPosts } from "../../services/postService";
import { type Post } from "../../types/Post";

export function Admin() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);

    async function loadPosts() {
        try {
            const data = await getPosts();
            setPosts(data);
        } catch (err) {
            setError("Erro ao carregar os posts.");
        } finally {
            setLoading(false);
        }
    }

    async function handleDelete(id: number) {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir este post?");

        if (!confirmDelete) return;

        try {
            await deletePost(id);
            await loadPosts();
        } catch (error) {
            console.error("Erro ao excluir post:", error);
            alert("Não foi possível excluir o post.");
        }
    }

    useEffect(() => {
        loadPosts();
    }, []);

    if (loading) {
        return <p>Carregando posts...</p>;
    }

    return (
        <section>
            <div className="admin-header">
                <div>
                    <h1 className="page-title">Painel de Administração</h1>
                    <p className="page-description">
                        Gerencie os posts publicados no blog.
                    </p>
                </div>
                <Link className="button" to="/posts/new">
                    Criar Novo Post
                </Link>
            </div>
            {error && <p>{error}</p>}
            {posts.length === 0 ? (
                <p className="alert alert--empty">Nenhum post cadastrado.</p>
            ) : (
                <div className="admin-list">
                    {posts.map((post) => (
                        <article className="card admin-card" key={post.id}>
                            <div>
                                <h2 className="admin-card__title">{post.title}</h2>
                                <p className="admin-card__author">{post.author}</p>
                            </div>

                            <div className="admin-card__actions">
                                <Link className="button button-secondary" to={`/posts/${post.id}/edit`}>Editar</Link>
                                <button className="button button-danger" onClick={() => handleDelete(post.id)}>
                                    Excluir
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            )}
        </section>
    );
}
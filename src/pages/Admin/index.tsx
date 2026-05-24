import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost, getPosts } from "../../services/postService";
import { type Post } from "../../types/Post";

export function Admin() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string>("");

    async function loadPosts() {
        try {
            const data = await getPosts();
            setPosts(data);
        } catch (err) {
            setError("Erro ao carregar os posts.");
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


    return (
        <section>
            <h1>Painel de Administração</h1>

            <Link to="/posts/new">Criar Novo Post</Link>

            {error && <p>{error}</p>}

            {posts.map((post) => (
                <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.author}</p>

                    <Link to={`/posts/${post.id}/edit`}>Editar</Link>
                    <button onClick={() => handleDelete(post.id)}>Excluir</button>

                    <hr />
                </article>
            ))}
        </section>
    );
}
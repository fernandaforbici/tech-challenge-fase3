import { useEffect, useState } from "react";
import { PostCard } from "../../components/PostCard";
import { getPosts } from "../../services/postService";
import type { Post } from "../../types/Post";

export function Home() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
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
        loadPosts();
    }, []);

        const filteredPosts = posts.filter((post) =>
            `${post.title} ${post.description} ${post.author}`
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    if (loading) {
        return <p>Carregando posts...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

        return (
            <section>
                <h1>Home - Lista de Posts</h1>
                
                <label htmlFor="search">Buscar posts:</label>
                <input
                    id="search"
                    type="text"
                    placeholder="Digite uma palavra-chave..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ display: "block", margin: "8px 0 24px", padding: "8px", width: "100%" }}
                />
                {filteredPosts.length === 0 ? (
                    <p>Nenhum post encontrado.</p>
                ) : (
                    filteredPosts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))
                )}
            </section>
        );
    }
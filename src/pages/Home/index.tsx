import { useState } from "react";
import { PostCard } from "../../components/PostCard";
import { mockPosts } from "../../services/mockPosts";

export function Home() {
    const [search, setSearch] = useState("");

    const filteredPosts = mockPosts.filter((post) =>
        `${post.title} ${post.description} ${post.author}`
            .toLowerCase()
            .includes(search.toLowerCase())
    );

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
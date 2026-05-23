import { PostCard } from "../../components/PostCard";
import { mockPosts } from "../../services/mockPosts";
export function Home() {
    return (
        <section>
            <h1>Home - Lista de Posts</h1>
            {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </section>
    );
}
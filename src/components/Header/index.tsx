import { Link } from "react-router-dom";

export function Header() {
    return (
        <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
            <h2>Tech Blog</h2>
            <nav style={{ marginTop: "8px" }}>
                <Link to="/">Posts</Link> |{" "}
                <Link to="/login">Login</Link> |{" "}
                <Link to="/admin">Admin</Link> |{" "}
                <Link to="/posts/new">Novo post</Link>
            </nav>
        </header>
    );
}

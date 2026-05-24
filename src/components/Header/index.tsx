import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
    const { isAuthenticated, logout } = useAuth();
    return (
        <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
            <h2>Tech Blog</h2>
            <nav style={{ marginTop: "8px" }}>
                <Link to="/">Posts</Link> |{" "}
                {isAuthenticated ? (
                    <>
                        <Link to="/admin">Admin</Link> |{" "}
                        <button onClick={logout} style={{ marginLeft: "8px" }}>
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login">Login</Link>
                )}

            </nav>
        </header>
    );
}

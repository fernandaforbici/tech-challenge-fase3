import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Header() {
    const { isAuthenticated, logout } = useAuth();
    return (
        <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }} className="header">
            <div className="header__container">
                <h1 className="header__title">Tech Challenge Blog</h1>
                <h2 className="header__subtitle">Tech Blog</h2>
                <nav style={{ marginTop: "8px" }} className="nav" arial-label="Navegação principal">
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
            </div>
        </header>
    );
}

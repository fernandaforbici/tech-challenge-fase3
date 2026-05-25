import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const validEmail = "admin@blog.com";
        const validPassword = "123456";

        try {
            if (email === validEmail && password === validPassword) {
                localStorage.setItem("@blog:token", "token-fake-123");
                //await login(email, password);
                navigate("/admin", { replace: true });
            } else {
                alert("Credenciais inválidas. Por favor, tente novamente.");
            }
        } catch (err) {
            setError("Credenciais inválidas. Por favor, tente novamente.");
        }
    }

    return (
        <section className="form-container">
            <h1 className="page-title">Login do Professor</h1>
            <p className="page-description">
                Acesse a área administrativa para criar, editar e excluir posts.
            </p>
            {error && <p className="alert alert--error">{error}</p>}
            <form className="form-card" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                        required
                    />
                </div>
                <div className="form-group">
                    <button className="button" type="submit">Entrar</button>
                </div>
            </form>
        </section>
    );
}
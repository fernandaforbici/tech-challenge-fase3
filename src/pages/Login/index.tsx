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
                //await login(email, password);
                localStorage.setItem("@blog:token", "token-fake-123");
                navigate("/admin");
            } else {
                alert("Credenciais inválidas. Por favor, tente novamente.");
            }
        } catch (err) {
            setError("Credenciais inválidas. Por favor, tente novamente.");
        }
    }

    return (
        <section>
            <h1>Login do Professor</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </section>
    );
}
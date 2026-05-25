import { Link } from "react-router-dom";
export function NotFound() {
    return (
        <section className="not-found">
            <div className="card not-found__card">
                <p className="page-description">
                    A página que você tentou acessar não existe, foi removida ou teve o endereço alterado.
                </p>

                <div className="form-actions">
                    <Link className="button" to="/">
                        Voltar para os posts
                    </Link>

                    <Link className="button button--ghost" to="/login">
                        Ir para o login
                    </Link>
                </div>
            </div>
        </section>
    );
}
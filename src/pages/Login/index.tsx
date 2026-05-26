import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const loginSchema = Yup.object({
    email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
    password: Yup.string()
        .min(6, "Mínimo 6 caracteres")
        .required("Senha é obrigatorio"),
});

const Container = styled.div`
max-width: 400px;
margin: 2rem auto;
padding: 2rem;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 0.85rem;
`;

export function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [serverError, setServerError] = useState("");

    // async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    //     event.preventDefault();
    //     const validEmail = "admin@blog.com";
    //     const validPassword = "123456";

    //     try {
    //         if (email === validEmail && password === validPassword) {
    //             localStorage.setItem("@blog:token", "token-fake-123");
    //             //await login(email, password);
    //             navigate("/admin", { replace: true });
    //         } else {
    //             alert("Credenciais inválidas. Por favor, tente novamente.");
    //         }
    //     } catch (err) {
    //         setError("Credenciais inválidas. Por favor, tente novamente.");
    //     }
    // }

    return (
        <Container>
            <h2>Login</h2>
            {serverError && <ErrorText>{serverError}</ErrorText>}
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        setServerError("");
                        await login(values.email, values.password);
                        navigate("/admin", { replace: true });
                    } catch (err: any) {
                        const msg = err?.response?.data?.error || "Credenciais Inválidas";
                        setServerError(msg);
                    } finally {
                        setSubmitting(false);
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="email" id="email" />
                            <ErrorMessage name="email" component={ErrorText} />
                        </div>

                        <div>
                            <label htmlFor="password">Senha</label>
                            <Field name="password" type="password" id="password" />
                            <ErrorMessage name="password" component={ErrorText} />
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Entrando..." : "Entrar"}
                        </button>

                    </Form>
                )}
            </Formik>

        </Container>
    );
}
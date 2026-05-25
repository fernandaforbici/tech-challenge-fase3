import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

interface PostFormData {
    title: string;
    description: string;
    content: string;
    author: string;
    createdAt: string;
}

interface PostFormProps {
    initialValues: PostFormData;
    onSubmit: (values: PostFormData) => Promise<void>;
    buttonText: string;
}

const schema = Yup.object({
    title: Yup.string().required("Título é obrigatório"),
    description: Yup.string().required("Descrição é obrigatória"),
    content: Yup.string().required("Conteúdo é obrigatório"),
    author: Yup.string().required("Autor é obrigatório"),
    createdAt: Yup.date().required("Data de criação é obrigatória"),
});

export function PostForm({ initialValues, onSubmit, buttonText }: PostFormProps) {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            enableReinitialize
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="form-card">
                    <div className="form-group">
                        <label htmlFor="title">Título</label>
                        <Field name="title" type="text" id="title" placeholder="Título do post" required />
                        <ErrorMessage name="title" component="p" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Descrição</label>
                        <Field name="description" type="text" id="description" placeholder="Descrição do post" required />
                        <ErrorMessage name="description" component="p" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Conteúdo</label>
                        <Field name="content" as="textarea" id="content" placeholder="Conteúdo do post" required />
                        <ErrorMessage name="content" component="p" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Autor</label>
                        <Field name="author" type="text" id="author" placeholder="Autor do post" required />
                        <ErrorMessage name="author" component="p" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="createdAt">Data de Criação</label>
                        <Field name="createdAt" type="date" id="createdAt" required />
                        <ErrorMessage name="createdAt" component="p" />
                    </div>
                    <div className="form-actions">
                        <button className="button" type="submit" disabled={isSubmitting}>
                            {buttonText}
                        </button>
                        <Link className="button button--ghost" to="/admin">
                            Cancelar
                        </Link>
                    </div>
                </Form>
            )}

        </Formik>
    );
}
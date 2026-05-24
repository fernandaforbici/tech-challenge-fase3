import { use, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostForm } from "../../components/PostForm";
import { getPostById, updatePost } from "../../services/postService";

export function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [initialValues, setInitialValues] = useState({
        title: "",
        description: "",
        content: "",
        author: "",
        createdAt: new Date().toISOString().split("T")[0],
    });

    useEffect(() => {
        async function loadPost() {
            if (!id) return;

            const post = await getPostById(Number(id));

            setInitialValues({
                title: post.title,
                description: post.description,
                content: post.content,
                author: post.author,
                createdAt: post.createdAt.split("T")[0],
            });
        }

        loadPost();
    }, [id]);

    async function handleUpdatePost(values: {
        title: string;
        description: string;
        content: string;
        author: string;
        createdAt: string;
    }) {
        if (!id) return;

        await updatePost(Number(id), values);
        navigate("/admin");
    }

    return (
        <section>
            <h1>Editar Post</h1>
            <PostForm
                initialValues={initialValues}
                onSubmit={handleUpdatePost}
                buttonText="Atualizar Post"
            />
        </section>
    );
}
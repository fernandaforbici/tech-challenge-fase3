import { useNavigate } from "react-router-dom";
import { PostForm } from "../../components/PostForm";
import { createPost } from "../../services/postService";

export function CreatePost() {
    const navigate = useNavigate();

    async function handleCreatePost(values: {
        title: string;
        description: string;
        content: string;
        author: string;
        createdAt: string;
    }) {
        await createPost(values);
        navigate("/admin");
    }
    return (
        <section>
            <h1>Criar Novo Post</h1>
            <PostForm
                initialValues={{
                    title: "",
                    description: "",
                    content: "",
                author: "",
                    createdAt: new Date().toISOString().split("T")[0],
                }}
                onSubmit={handleCreatePost}
                buttonText="Criar Post"
            />
        </section>
    );

}
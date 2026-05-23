import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Admin } from "../pages/Admin";
import { CreatePost } from "../pages/CreatePost";
import { EditPost } from "../pages/EditPost";
import { NotFound } from "../pages/NotFound";
import { PostDetails } from "../pages/PostDetails";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/posts/new" element={<CreatePost />} />
                <Route path="/posts/:id/edit" element={<EditPost />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
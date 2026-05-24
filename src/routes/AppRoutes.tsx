import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { ProtectedRoute } from "../components/ProtectedRoute";
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
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <Admin />
                            </ProtectedRoute>
                        } />
                    <Route
                        path="/posts/new"
                        element={
                            <ProtectedRoute>
                                <CreatePost />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/posts/:id/edit"
                        element={
                            <ProtectedRoute>
                                <EditPost />
                            </ProtectedRoute>
                        } />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
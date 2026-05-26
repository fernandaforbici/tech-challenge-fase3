import { useState, useCallback } from "react";
import { loginUser } from "../services/authService";


interface User {
    id: number;
    name: string;
    email: string;
}

export function useAuth() {
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("@blog:token")
    );
    const [user, setUser] = useState<User | null>(() => {
        const stored = localStorage.getItem("@blog:user");
        return stored ? JSON.parse(stored) : null;
    });

    const isAuthenticated = !!token;

    const login = useCallback(async (email: string, password: string) => {
        const response = await loginUser(email, password);
        localStorage.setItem("@blog:token", response.token);
        localStorage.setItem("@blog:user", JSON.stringify(response.user));
        setToken(response.token);
        setUser(response.user);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem("@blog:token");
        localStorage.removeItem("@blog:user");
        setToken(null);
        setUser(null);
    }, []);

    return { token, user, isAuthenticated, login, logout };
}

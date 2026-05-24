import { createContext, type ReactNode, useState } from "react";
import { api } from "../services/api";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [token, setToken] = useState(() => {
        return localStorage.getItem("@blog:token") || null;
    });

    async function login(email: string, password: string) {
        const response = await api.post("/login", { email, password });

        const receivedToken = response.data.token;

        localStorage.setItem("@blog:token", receivedToken);
        setToken(receivedToken);
    }

    function logout() {
        localStorage.removeItem("@blog:token");
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{
            isAuthenticated: !!token,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );

}
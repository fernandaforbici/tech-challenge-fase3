
import api from "./api";

interface LoginResponse {
    token: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}

interface RegisterResponse {
    message: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
}

export const loginUser = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/login", {
        email,
        password,
    });
    return response.data;
};

export const registerUser = async (
    name: string,
    email: string,
    password: string
): Promise<RegisterResponse> => {
    const response = await api.post<RegisterResponse>("/auth/register", {
        name,
        email,
        password,
    });
    return response.data;
};

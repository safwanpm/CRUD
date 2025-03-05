
import api from "./api";

export const login = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });

        if (response && response.data) {
            console.log(response.data.message);
            return { success: true, data: response.data  ,message:response.data.message};
        }

        return { success: false, message: "Invalid response from server" };
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, message: "Login failed. Please try again." };
    }
};


export const verifyToken = async () => {
    try {
        const response = await api.get("/auth/verify", { withCredentials: true })
        if (response.status === 200) {
            console.log("Token is valid");
            return { success: true, data: response.data };
        }
    } catch (error) {
        console.error("Token verification error:", error.response?.data || error.message);
        return { success: false, message: "Token invalid or expired" };
    }
};

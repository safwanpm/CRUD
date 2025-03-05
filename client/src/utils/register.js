import api from "./api";

export const registerUser = async ({ name, password, email }) => {
    try {
        const response = await api.post('/register/add', { name, password, email })
        if (response) {
            console.log( response.data);
            return { success: true, data: response.data, message:response.data.message };
        }
        else {
            throw new Error("invalid response from server");

        }

    }
    catch (error) {
        console.error("Add User Error:", error.response?.data || error.message);
        throw error.response?.data?.message || "Failed to add user";
    }
}
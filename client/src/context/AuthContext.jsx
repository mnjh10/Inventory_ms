import React, { createContext, useContext, useState, useEffect } from "react";

// 1️⃣ Create the context
const AuthContext = createContext();

// 2️⃣ Create the provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Load user from localStorage when the app loads
    useEffect(() => {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        if (token && username) {
            setUser({ username });
        }
    }, []);

    // Mock login function
    const login = (username, password) => {
        // ✅ Store fake token and username
        localStorage.setItem("token", "mockToken123");
        localStorage.setItem("username", username);

        // ✅ Set user state
        setUser({ username });
    };

    // Logout function
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// 3️⃣ Hook to use context in other components
export const useAuth = () => useContext(AuthContext);

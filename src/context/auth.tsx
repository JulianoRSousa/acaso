
import React, { createContext, useState } from "react";
import * as auth from "@/services/auth";

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthProviderProps = {
    children: React.ReactNode;
};

interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    };
}

/**
 * A function that acts as an authentication provider in a React application.
 *
 * @param {AuthProviderProps} children - The child components to be rendered within the authentication provider.
 * @return {ReactElement} The authentication provider component.
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);

    async function signIn() {
        const response = auth.signIn();
        setUser(response?.user ?? null);
    }

    async function signOut() {
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

import React, { createContext, useEffect, useState } from "react";
import { useApi } from "@/hooks";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthContextData {
    signed: boolean;
    user: object | null;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
    setUserAuth(userAuthData: userAuthData): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

type AuthProviderProps = {
    children: React.ReactNode;
};

export interface userAuthData {
    token: {
        "access_token": string,
        "id_token": string,
        "refresh_token": string
    },
    user: {
        "id": string,
        "email": string,
        "first_name": string,
        "last_name": string,
        "onboard_complete": boolean,
        "groups": [
            string
        ]
    }
}

/**
 * A function that acts as an authentication provider in a React application.
 *
 * @param {AuthProviderProps} children - The child components to be rendered within the authentication provider.
 * @return {ReactElement} The authentication provider component.
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<userAuthData | null>(null);
    const { signIn } = useApi()

    const loadUserAuthData = async () => {
        const userAuthData: userAuthData = await AsyncStorage.getItem('@authdata').then(data => {
            return data ? JSON.parse(data) : null
        })
        setUserAuth(userAuthData);
        return userAuthData
    }

    useEffect(() => {
        loadUserAuthData()
    }, [])



    const contextSignIn = async (email: string = '', password: string = '') => {
        await signIn(email, password).then(async response => {
            if (response.status === 200 && response?.data) {
                await AsyncStorage.setItem('@authdata', JSON.stringify(response?.data));
                setUserAuth(response?.data)
            }
        }).catch(error => {
            setUser(null);
        })

    }

    const setUserAuth = async (userAuthData: userAuthData) => {
        await AsyncStorage.setItem('@authdata', JSON.stringify(userAuthData));
        setUser(userAuthData)
    }

    async function signOut() {
        await AsyncStorage.removeItem('@authdata');
        setUser(null);
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn: contextSignIn, signOut, setUserAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
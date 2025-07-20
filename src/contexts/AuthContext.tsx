import React, { createContext, useContext, useState, useEffect } from "react";
import * as SecureStore from "expo-secure-store";
import api from "../services/api";
import { User } from "../types";

interface AuthState {
  token: string | null;
  user: User | null;
  isLoading: boolean;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>(null!);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    token: null,
    user: null,
    isLoading: true,
  });

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const token = await SecureStore.getItemAsync("authToken");
        const user = await SecureStore.getItemAsync("authUser");

        if (token && user) {
          // Verifica se o token ainda é válido
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

          setAuthState({
            token,
            user: JSON.parse(user),
            isLoading: false,
          });
        } else {
          setAuthState({
            ...authState,
            isLoading: false,
          });
        }
      } catch (error) {
        console.error("Failed to load auth data", error);
        setAuthState({
          ...authState,
          isLoading: false,
        });
      }
    };

    loadAuthData();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/auth/login", { email, password });

      await SecureStore.setItemAsync("authToken", response.data.token);
      await SecureStore.setItemAsync(
        "authUser",
        JSON.stringify(response.data.user)
      );

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      setAuthState({
        token: response.data.token,
        user: response.data.user,
        isLoading: false,
      });
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      await SecureStore.setItemAsync("authToken", response.data.token);
      await SecureStore.setItemAsync(
        "authUser",
        JSON.stringify(response.data.user)
      );

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${response.data.token}`;

      setAuthState({
        token: response.data.token,
        user: response.data.user,
        isLoading: false,
      });
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync("authToken");
      await SecureStore.deleteItemAsync("authUser");

      delete api.defaults.headers.common["Authorization"];

      setAuthState({
        token: null,
        user: null,
        isLoading: false,
      });
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: authState.user,
        token: authState.token,
        isLoading: authState.isLoading,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// src/types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  monthlyBudget?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ShoppingList {
  id: string;
  name: string;
  items: ShoppingItem[];
  completedAt?: string | null;
  createdAt: string;
}

export interface ShoppingItem {
  id: string;
  name: string;
  price?: number;
  inCart: boolean;
  purchasedAt?: string;
}

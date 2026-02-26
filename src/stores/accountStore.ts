// src/store/accountStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from '../stores/mmkv';
import { Account } from '@/types';

interface AccountState {
  account: Account | null;
  isLoggedIn: boolean;

  setAccount: (account: Account) => void;
  updateAccount: (data: Partial<Account>) => void;
  logout: () => void;
  clearAccount: () => void;
}

const mmkvStorage = {
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ?? null;
  },
  setItem: (name: string, value: string) => {
    storage.set(name, value);
  },
  removeItem: (name: string) => {
    storage.remove(name);
  },
};

export const useAccountStore = create<AccountState>()(
  persist(
    (set) => ({
      account: null,
      isLoggedIn: false,

      setAccount: (account) => 
        set({ account, isLoggedIn: true }),

      updateAccount: (data) =>
        set((state) => ({
          account: state.account ? { ...state.account, ...data } : null,
        })),

      logout: () =>
        set({ account: null, isLoggedIn: false }),

      clearAccount: () => {
        storage.clearAll();
        set({ account: null, isLoggedIn: false });
      },
    }),
    {
      name: 'account-storage', 
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
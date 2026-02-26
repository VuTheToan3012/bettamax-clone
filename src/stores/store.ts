
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage } from '../stores/mmkv';
import { Account, STORE } from '@/types';

interface ShopStoreState {
    selectedStore?: STORE;
    setSelectedStore: (selectedStore: STORE | undefined) => void;
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

export const useShopStore = create<ShopStoreState>()(
  persist(
    (set) => ({
      selectedStore: undefined,
      setSelectedStore: (selectedStore: STORE | undefined) => set({ selectedStore }),
    }),
    {
      name: 'store', 
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
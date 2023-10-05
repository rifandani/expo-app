import { MMKV } from 'react-native-mmkv';
import type { StateStorage } from 'zustand/middleware';

export const userStorageId = 'app-user' as const;
const userStorage = new MMKV({ id: userStorageId });

export const userStateStorage: StateStorage = {
  setItem: (name, value) => {
    return userStorage.set(name, value);
  },
  getItem: (name) => {
    const value = userStorage.getString(name);
    return value ?? null;
  },
  removeItem: (name) => {
    return userStorage.delete(name);
  },
};

import { z } from 'zod';
import { create } from 'zustand';

import { loginApiResponseSchema } from '#auth/api/auth.schema';

export type UserStoreState = z.infer<typeof userStoreStateSchema>;
export type UserStore = z.infer<typeof userStoreSchema>;
export type UserStoreLocalStorage = z.infer<typeof userStoreLocalStorageSchema>;

export const userStoreName = 'app-user' as const;
const userStoreStateSchema = z.object({
  user: loginApiResponseSchema.nullable(),
});
const userStoreActionSchema = z.object({
  setUser: z.function().args(loginApiResponseSchema).returns(z.void()),
  clearUser: z.function().args(z.void()).returns(z.void()),
});
export const userStoreSchema = userStoreStateSchema.merge(userStoreActionSchema);
export const userStoreLocalStorageSchema = z.object({
  state: userStoreStateSchema,
  version: z.number(),
});

// const zustandStorage: StateStorage = {
//   getItem: (name) => {
//     const value= storage.
//   }
// }

/**
 * Hooks to manipulate user store
 *
 * @example
 *
 * ```tsx
 * const { user, setUser, clearUser } = useUserStore()
 * ```
 */
export const useUserStore = create<UserStore>()((set) => ({
  user: null,
  setUser: (newUser) => {
    set({ user: newUser });
  },
  clearUser: () => {
    set({ user: null });
  },
}));
// {
//   name: userStoreName, // name of the item in the storage (must be unique)
//   version: 0, // a migration will be triggered if the version in the storage mismatches this one
//   storage: createJSONStorage(() => localStorage), // by default, 'localStorage' is used
// }

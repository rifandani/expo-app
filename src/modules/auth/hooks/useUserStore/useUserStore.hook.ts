import { z } from 'zod';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { loginApiSuccessResponseSchema } from '#auth/api/auth.schema';
import { userStateStorage, userStorageId } from '#shared/services/mmkv.service';

export type UserStoreState = z.infer<typeof userStoreStateSchema>;
export type UserStore = z.infer<typeof userStoreSchema>;
export type UserStoreLocalStorage = z.infer<typeof userStoreLocalStorageSchema>;

const userStoreStateSchema = z.object({
  user: loginApiSuccessResponseSchema.nullable(),
});
const userStoreActionSchema = z.object({
  setUser: z.function().args(loginApiSuccessResponseSchema).returns(z.void()),
  clearUser: z.function().args(z.void()).returns(z.void()),
});
export const userStoreSchema = userStoreStateSchema.merge(userStoreActionSchema);
export const userStoreLocalStorageSchema = z.object({
  state: userStoreStateSchema,
});

/**
 * Hooks to manipulate user store
 *
 * @example
 *
 * ```tsx
 * const { user, setUser, clearUser } = useUserStore()
 * ```
 */
export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (newUser) => {
        set({ user: newUser });
      },
      clearUser: () => {
        set({ user: null });
      },
    }),
    {
      name: userStorageId, // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => userStateStorage), // by default, 'localStorage' is used
    }
  )
);

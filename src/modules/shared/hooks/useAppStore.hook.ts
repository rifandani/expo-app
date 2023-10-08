import { z } from 'zod';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { loginApiSuccessResponseSchema } from '#auth/api/auth.schema';
import { appStateStorage, appStorageId } from '#shared/services/mmkv.service';

type AppStoreState = z.infer<typeof appStoreStateSchema>;
type AppStore = z.infer<typeof appStoreSchema>;

const appStoreStateSchema = z.object({
  user: loginApiSuccessResponseSchema.nullable(),
  lang: z.enum(['en-US', 'id-ID']),
});
const userStoreActionSchema = z.object({
  reset: z.function().args(z.void()).returns(z.void()),
  resetUser: z.function().args(z.void()).returns(z.void()),
  resetLang: z.function().args(z.void()).returns(z.void()),
  setUser: z.function().args(loginApiSuccessResponseSchema).returns(z.void()),
  setLang: z.function().args(appStoreStateSchema.shape.lang).returns(z.void()),
});
const appStoreSchema = appStoreStateSchema.merge(userStoreActionSchema);

export const appStoreStateDefaultValues: AppStoreState = {
  user: null,
  lang: 'en-US',
};

/**
 * Hooks to manipulate global app store that integrated with MMKV
 *
 * @example
 *
 * ```tsx
 * const { user, lang, reset, setUser, setLang } = useAppStore()
 * ```
 */
export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      user: appStoreStateDefaultValues.user,
      lang: appStoreStateDefaultValues.lang,
      reset: () => {
        set(appStoreStateDefaultValues);
      },
      resetUser: () => {
        set({ user: appStoreStateDefaultValues.user });
      },
      resetLang: () => {
        set({ lang: appStoreStateDefaultValues.lang });
      },
      setUser: (user) => {
        set({ user });
      },
      setLang: (lang) => {
        set({ lang });
      },
    }),
    {
      name: appStorageId, // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => appStateStorage), //langStorageId by default, 'localStorage' is used
    }
  )
);

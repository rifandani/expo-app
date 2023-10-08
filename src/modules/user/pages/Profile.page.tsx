import Feather from '@expo/vector-icons/Feather';
import { nativeApplicationVersion } from 'expo-application';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { H6, Paragraph, Separator, XStack, YStack } from 'tamagui';

import { HeaderLeft } from '#home/components/header/HeaderLeft';
import { useI18nContext } from '#i18n/i18n-react';
import { BaseButton } from '#shared/components/button/BaseButton';
import { CheckAuth } from '#shared/components/templates/auth/CheckAuth';
import { blurhash } from '#shared/constants/global.constant';
import { useAppStore } from '#shared/hooks/useAppStore.hook';
import { ProfileListItem } from '#user/components/profile/ProfileListItem';
import { ThemeChanger } from '#user/components/profile/ThemeChanger';
import { useGetUser } from '#user/hooks/useGetUser.hook';

export function ProfilePage() {
  const { LL } = useI18nContext();
  const { user } = useAppStore();
  const { data } = useGetUser({
    // `user` should not be `null`, we already check it in `CheckAuth` component
    id: user!.id,
  });

  return (
    <CheckAuth>
      <Stack.Screen
        options={{
          title: 'Profile',
          headerLeft: (props) => <HeaderLeft {...props} />,
        }}
      />

      <YStack f={1} p="$3">
        <XStack mb="$3" h="$10" gap="$5">
          <Image
            source={data?.image}
            placeholder={blurhash}
            transition={1_000}
            contentFit="fill"
            style={{ width: 100, borderRadius: 1_000 }}
          />

          <YStack f={1}>
            <H6 bg="$backgroundTransparent">{data?.username}</H6>
            <Paragraph>{data?.email}</Paragraph>

            <BaseButton mt="auto" p="$2" w="$12" preset="primary" icon={<Feather name="edit" />}>
              {LL.user.editProfile()}
            </BaseButton>
          </YStack>
        </XStack>

        <ProfileListItem title="Favourites" icon={<Feather name="heart" />} />
        <ProfileListItem title="Downloads" icon={<Feather name="download" />} />

        <Separator my="$2" />

        <ThemeChanger />
        <ProfileListItem title="Language" icon={<Feather name="globe" />} />
        <ProfileListItem title="Display" icon={<Feather name="tv" />} />
        <ProfileListItem title="Feed preferences" icon={<Feather name="phone" />} />
        <ProfileListItem title="Subscriptions" icon={<Feather name="credit-card" />} />

        <Separator my="$2" />

        <ProfileListItem title="Clear cache" icon={<Feather name="trash" />} />
        <ProfileListItem title="Clear history" icon={<Feather name="file" />} />

        <Paragraph ta="center" mt="auto" color="$color8">
          {LL.common.appVersion()} {nativeApplicationVersion}
        </Paragraph>
      </YStack>
    </CheckAuth>
  );
}

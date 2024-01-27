import Feather from '@expo/vector-icons/Feather';
import { nativeApplicationVersion } from 'expo-application';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { H6, ListItem, Paragraph, Separator, XStack, YStack, getTokenValue } from 'tamagui';

import { useI18nContext } from '#i18n/i18n-react';
import { BaseButton } from '#shared/components/button/base-button';
import { BLURHASH } from '#shared/constants/global';
import { useAppStore } from '#shared/hooks/use-app-store';
import { ProfileListItem } from '#user/components/profile-list-item';
import { ProfileThemeChanger } from '#user/components/profile-theme-changer';
import { useGetUser } from '#user/hooks/use-get-user';

export default function TabsProfileScreen() {
  const { push } = useRouter();
  const { LL } = useI18nContext();
  const user = useAppStore((state) => state.user);
  const { data } = useGetUser({
    // `user` should not be `null`, we already check it in `CheckAuthWrapper` component in _layout
    id: user!.id,
  });

  return (
    <YStack f={1} p="$3">
      <XStack mb="$3" h="$10" gap="$5">
        <Image
          source={data?.image}
          placeholder={BLURHASH}
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

      <ProfileThemeChanger />
      <ProfileListItem title="Language" icon={<Feather name="globe" />} />
      <ProfileListItem title="Display" icon={<Feather name="tv" />} />
      <ProfileListItem title="Feed preferences" icon={<Feather name="phone" />} />
      <ProfileListItem title="Subscriptions" icon={<Feather name="credit-card" />} />

      <Separator my="$2" />

      <ProfileListItem title="Clear cache" icon={<Feather name="trash" />} />
      <ProfileListItem title="Clear history" icon={<Feather name="file" />} />
      <ProfileListItem
        pressStyle={{
          br: '$5',
          bg: '$red1Dark',
        }}
        icon={<Feather name="log-out" color={getTokenValue('$red10Dark')} />}
        iconAfter={<Feather name="chevron-right" color={getTokenValue('$red10Dark')} />}
        onPress={() => {
          push('/login');
        }}>
        <ListItem.Text color="$red10Dark">Logout</ListItem.Text>
      </ProfileListItem>

      <Paragraph ta="center" mt="auto" color="$color8">
        {LL.common.appVersion()} {nativeApplicationVersion}
      </Paragraph>
    </YStack>
  );
}

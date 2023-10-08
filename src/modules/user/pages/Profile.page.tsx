import Feather from '@expo/vector-icons/Feather';
import { nativeApplicationVersion } from 'expo-application';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import { ComponentPropsWithoutRef } from 'react';
import { H6, ListItem, Paragraph, Separator, XStack, YStack } from 'tamagui';

import { HeaderLeft } from '#home/components/header/HeaderLeft';
import { BaseButton } from '#shared/components/button/BaseButton';
import { CheckAuth } from '#shared/components/templates/auth/CheckAuth';
import { blurhash } from '#shared/constants/global.constant';
import { useAppStore } from '#shared/hooks/useAppStore.hook';
import { useGetUser } from '#user/hooks/useGetUser.hook';

function Item(props: ComponentPropsWithoutRef<typeof ListItem>) {
  return (
    <ListItem
      hoverTheme
      pressTheme
      transparent
      iconAfter={<Feather name="chevron-right" />}
      {...props}
    />
  );
}

export function ProfilePage() {
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

      <YStack f={1} p="$3" bg="white">
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
              Edit Profile
            </BaseButton>
          </YStack>
        </XStack>

        <Item title="Favourites" icon={<Feather name="heart" />} />
        <Item title="Downloads" icon={<Feather name="download" />} />

        <Separator my="$2" />

        <Item title="Language" icon={<Feather name="globe" />} />
        <Item title="Location" icon={<Feather name="map-pin" />} />
        <Item title="Display" icon={<Feather name="tv" />} />
        <Item title="Feed preferences" icon={<Feather name="phone" />} />
        <Item title="Subscriptions" icon={<Feather name="credit-card" />} />

        <Separator my="$2" />

        <Item title="Clear cache" icon={<Feather name="trash" />} />
        <Item title="Feed history" icon={<Feather name="file" />} />

        <Paragraph ta="center" mt="auto" color="$color8">
          App version {nativeApplicationVersion}
        </Paragraph>
      </YStack>
    </CheckAuth>
  );
}

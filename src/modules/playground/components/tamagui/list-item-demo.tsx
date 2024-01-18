import Feather from '@expo/vector-icons/Feather';
import { ListItem, Separator, XStack, YGroup } from 'tamagui';

export function ListItemDemo() {
  return (
    <XStack $sm={{ flexDirection: 'column' }} paddingHorizontal="$4" space>
      <ListItemDemo1 />

      <ListItemDemo2 />
    </XStack>
  );
}

function ListItemDemo1() {
  return (
    <YGroup alignSelf="center" bordered width={240} size="$4">
      <YGroup.Item>
        <ListItem hoverTheme icon={<Feather name="star" />} title="Star" subTitle="Twinkles" />
      </YGroup.Item>

      <YGroup.Item>
        <ListItem hoverTheme icon={<Feather name="moon" />}>
          Moon
        </ListItem>
      </YGroup.Item>

      <YGroup.Item>
        <ListItem hoverTheme icon={<Feather name="sun" />}>
          Sun
        </ListItem>
      </YGroup.Item>
    </YGroup>
  );
}

function ListItemDemo2() {
  return (
    <YGroup alignSelf="center" bordered width={240} size="$5" separator={<Separator />}>
      <YGroup.Item>
        <ListItem
          hoverTheme
          pressTheme
          title="Star"
          subTitle="Subtitle"
          icon={<Feather name="star" />}
          iconAfter={<Feather name="chevron-right" />}
        />
      </YGroup.Item>

      <YGroup.Item>
        <ListItem
          hoverTheme
          pressTheme
          title="Moon"
          subTitle="Subtitle"
          icon={<Feather name="moon" />}
          iconAfter={<Feather name="chevron-right" />}
        />
      </YGroup.Item>
    </YGroup>
  );
}

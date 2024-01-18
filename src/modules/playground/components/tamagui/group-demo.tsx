import Feather from '@expo/vector-icons/Feather';
import { Button, Group, ListItem, Separator, XGroup, YGroup, YStack } from 'tamagui';

export function GroupDemo() {
  return (
    <YStack padding="$3" space="$2" alignItems="center">
      <Group orientation="horizontal">
        <Group.Item>
          <Button>First</Button>
        </Group.Item>

        <Group.Item>
          <Button>Second</Button>
        </Group.Item>

        <Group.Item>
          <Button>Third</Button>
        </Group.Item>
      </Group>

      {/* responsive + size */}
      <XGroup size="$3" $gtSm={{ size: '$5' }}>
        <XGroup.Item>
          <Button size="$3">
            <Button.Icon>
              <Feather name="moon" />
            </Button.Icon>
            <Button.Text>First</Button.Text>
          </Button>
        </XGroup.Item>

        <XGroup.Item>
          <Button.Icon>
            <Feather name="sun" />
          </Button.Icon>
          <Button.Text>Second</Button.Text>
        </XGroup.Item>
      </XGroup>

      {/* Separator */}
      <YGroup separator={<Separator />}>
        <YGroup.Item>
          <ListItem title="First" />
        </YGroup.Item>

        <YGroup.Item>
          <ListItem title="Second" subTitle="Second subtitle" />
        </YGroup.Item>

        <YGroup.Item>
          <ListItem>Third</ListItem>
        </YGroup.Item>
      </YGroup>
    </YStack>
  );
}

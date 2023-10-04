import Feather from '@expo/vector-icons/Feather';
import { Checkbox, CheckboxProps, Label, SizeTokens, XStack, YStack } from 'tamagui';

export function CheckboxDemo() {
  return (
    <YStack width={300} alignItems="center" space="$2">
      <CheckboxWithLabel size="$4" defaultChecked />
      <CheckboxWithLabel size="$5" disabled label="Accept terms (disabled)" />
    </YStack>
  );
}

export function CheckboxWithLabel({
  size,
  label = 'Accept terms and conditions',
  disabled,
  defaultChecked,
}: {
  size: SizeTokens;
  label?: string;
  disabled?: CheckboxProps['disabled'];
  defaultChecked?: CheckboxProps['defaultChecked'];
}) {
  const id = `checkbox-${size.toString().slice(1)}`;

  return (
    <XStack width={300} alignItems="center" space="$4">
      <Checkbox id={id} size={size} disabled={disabled} defaultChecked={defaultChecked}>
        <Checkbox.Indicator>
          <Feather name="check" />
        </Checkbox.Indicator>
      </Checkbox>
      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
}

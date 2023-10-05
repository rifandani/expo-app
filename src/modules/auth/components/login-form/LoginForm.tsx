import Feather from '@expo/vector-icons/Feather';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Checkbox, CheckedState, Input, Label, Paragraph, XStack, YStack } from 'tamagui';

import { loginSchema } from '#auth/api/auth.schema';
import { loginFormDefaultValues } from '#auth/constants/login.constant';
import { BaseButton } from '#shared/components/button/BaseButton';

export function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
    defaultValues: loginFormDefaultValues,
  });
  const [state, setState] = useState({ rememberMe: false });
  const router = useRouter();

  const onCheckedChange = (checked: CheckedState) => {
    setState((prev) => ({ ...prev, rememberMe: !!checked }));
  };

  const onSubmit = handleSubmit((data) => {
    console.log('🚀 ~ file: LoginForm.tsx:35 ~ onSubmit ~ onSubmit:', {
      data,
      state,
    });

    // on success
    router.push('/');
  });

  return (
    <YStack mt="$5">
      <Label htmlFor="username" mb="$2">
        Username
      </Label>
      <Controller
        name="username"
        control={control}
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            placeholder="Your username..."
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      {errors.username ? <Paragraph color="$red10">{errors.username.message}</Paragraph> : null}

      <Label htmlFor="password" my="$2">
        Password
      </Label>
      <Controller
        name="password"
        control={control}
        rules={{
          required: true,
          minLength: 6,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            secureTextEntry
            placeholder="Your password..."
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password ? <Paragraph color="$red10">{errors.password.message}</Paragraph> : null}

      <XStack my="$2" ai="center" space="$2">
        <Checkbox id="rememberMe" checked={state.rememberMe} onCheckedChange={onCheckedChange}>
          <Checkbox.Indicator>
            <Feather name="check" />
          </Checkbox.Indicator>
        </Checkbox>

        <Label htmlFor="rememberMe">Remember me</Label>
      </XStack>

      <BaseButton preset="primary" icon={<Feather name="log-in" />} onPress={onSubmit}>
        Login
      </BaseButton>
    </YStack>
  );
}

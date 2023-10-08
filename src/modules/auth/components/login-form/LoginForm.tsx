import Feather from '@expo/vector-icons/Feather';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToastController } from '@tamagui/toast';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Checkbox, CheckedState, Input, Label, Paragraph, XStack, YStack } from 'tamagui';
import { fromZodError } from 'zod-validation-error';

import { authApi } from '#auth/api/auth.api';
import { loginSchema } from '#auth/api/auth.schema';
import { loginFormDefaultValues } from '#auth/constants/login.constant';
import { useI18nContext } from '#i18n/i18n-react';
import { BaseButton } from '#shared/components/button/BaseButton';
import { BaseSpinner } from '#shared/components/spinner/BaseSpinner';
import { ToastCustomData } from '#shared/components/toast/BaseToast';
import { useAppStore } from '#shared/hooks/useAppStore.hook';

function RememberMeCheckbox() {
  const { LL } = useI18nContext();
  const [state, setState] = useState({ rememberMe: false });

  const onCheckedChange = (checked: CheckedState) => {
    setState((prev) => ({ ...prev, rememberMe: !!checked }));
  };

  return (
    <XStack my="$2" ai="center" space="$2">
      <Checkbox id="rememberMe" checked={state.rememberMe} onCheckedChange={onCheckedChange}>
        <Checkbox.Indicator>
          <Feather name="check" />
        </Checkbox.Indicator>
      </Checkbox>

      <Label htmlFor="rememberMe">{LL.forms.rememberMe()}</Label>
    </XStack>
  );
}

export function LoginForm() {
  const { LL } = useI18nContext();
  const router = useRouter();
  const toast = useToastController();
  const { setUser } = useAppStore();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
    defaultValues: loginFormDefaultValues,
  });

  const onSubmit = handleSubmit(async (payload) => {
    // if `payload` is not correct, return error object
    const parsed = loginSchema.safeParse(payload);
    if (!parsed.success) {
      const message = fromZodError(parsed.error).message;
      toast.show(message, {
        customData: {
          preset: 'error',
        } as ToastCustomData,
      });
      return;
    }

    // will throw if `login` returns 500 error, therefore `errorElement` will be rendered
    const loginResponse = await authApi.login(parsed.data);
    // on 400 error
    if ('message' in loginResponse) {
      toast.show(loginResponse.message, {
        customData: {
          preset: 'error',
        } as ToastCustomData,
      });
      return;
    }

    // on success
    setUser(loginResponse); // set user data to store
    router.push('/');
  });

  return (
    <YStack mt="$5">
      <Label htmlFor="username" mb="$2">
        {LL.forms.username()}
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
            placeholder={LL.forms.usernamePlaceholder()}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      {errors.username ? <Paragraph color="$red10">{errors.username.message}</Paragraph> : null}

      <Label htmlFor="password" my="$2">
        {LL.forms.password()}
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
            placeholder={LL.forms.passwordPlaceholder()}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password ? <Paragraph color="$red10">{errors.password.message}</Paragraph> : null}

      <RememberMeCheckbox />

      <BaseButton
        preset="primary"
        icon={
          isSubmitting ? <BaseSpinner size="small" preset="primary" /> : <Feather name="log-in" />
        }
        disabled={isSubmitting || !isValid}
        onPress={onSubmit}>
        {isSubmitting ? LL.forms.loginLoading() : LL.forms.login()} (0lelplR)
      </BaseButton>
    </YStack>
  );
}

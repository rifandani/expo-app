import Feather from '@expo/vector-icons/Feather';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToastController } from '@tamagui/toast';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Checkbox, Form, Input, Label, Paragraph, XStack } from 'tamagui';
import { fromZodError } from 'zod-validation-error';

import { authApi } from '#auth/api/auth';
import { loginFormDefaultValues } from '#auth/constants/login';
import { loginSchema } from '#auth/schemas/login';
import { useI18nContext } from '#i18n/i18n-react';
import { BaseButton } from '#shared/components/button/base-button';
import { BaseSpinner } from '#shared/components/spinner/base-spinner';
import { useAppStore } from '#shared/hooks/use-app-store';
import { ToastCustomData } from '#shared/types/component';

function RememberMeCheckbox() {
  const { LL } = useI18nContext();
  const [state, setState] = useState({ rememberMe: false });

  return (
    <XStack my="$2" ai="center" space="$2">
      <Checkbox
        id="rememberMe"
        checked={state.rememberMe}
        onCheckedChange={(checked) => {
          setState((prev) => ({ ...prev, rememberMe: !!checked }));
        }}>
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
  const setUser = useAppStore((state) => state.setUser);

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
    router.push('/home');
  });

  return (
    <Form mt="$5" onSubmit={onSubmit}>
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

      <Form.Trigger asChild>
        <BaseButton
          preset="primary"
          icon={
            isSubmitting ? <BaseSpinner size="small" preset="primary" /> : <Feather name="log-in" />
          }
          disabled={isSubmitting || !isValid}>
          {isSubmitting ? LL.forms.loginLoading() : LL.forms.login()} (0lelplR)
        </BaseButton>
      </Form.Trigger>
    </Form>
  );
}

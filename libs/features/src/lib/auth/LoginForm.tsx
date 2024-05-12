import React from 'react';

import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { Form, FormField } from '@nova-nexus/components';
import { useToastError } from '@nova-nexus/components';
import { FormFieldsLogin, zFormFieldsLogin } from './schemas';

type LoginFormProps = BoxProps & {
  buttonVariant?: ButtonProps['variant'];
};

export const LoginForm = ({
  buttonVariant = '@primary',
  ...rest
}: LoginFormProps) => {
  const { t } = useTranslation(['auth']);
  const toastError = useToastError();

  const form = useForm<FormFieldsLogin>({
    mode: 'onBlur',
    resolver: zodResolver(zFormFieldsLogin()),
    defaultValues: {
      email: '',
    },
  });

  return (
    <Box {...rest}>
      <Form
        {...form}
        onSubmit={(values) => {
          console.log('values on submit', values);
          toastError({
            title: t('auth:login.feedbacks.loginError.title'),
          });
        }}
      >
        <Stack spacing={4}>
          <FormField
            type="email"
            control={form.control}
            name="email"
            size="lg"
            placeholder={t('auth:data.email.label')}
          />
          <Flex>
            <Button type="submit" variant={buttonVariant} size="lg" flex={1}>
              {t('auth:login.actions.login')}
            </Button>
          </Flex>
        </Stack>
      </Form>
    </Box>
  );
};

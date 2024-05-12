import { ReactNode } from 'react';

import { InputProps } from '@chakra-ui/react';
import { Controller, FieldPath, FieldValues } from 'react-hook-form';

import { DayPicker } from '@nova-nexus/components';
import { FieldCommonProps } from '../FormField';
import { FormFieldError } from '../FormFieldError';
import { FormFieldHelper } from '../FormFieldHelper';
import { FormFieldItem } from '../FormFieldItem';
import { FormFieldLabel } from '../FormFieldLabel';

export type FieldDateProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  type: 'date';
  label?: ReactNode;
  helper?: ReactNode;
} & Pick<InputProps, 'placeholder' | 'size' | 'autoFocus'> &
  FieldCommonProps<TFieldValues, TName>;

export const FieldDate = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>(
  props: FieldDateProps<TFieldValues, TName>
) => {
  return (
    <Controller
      {...props}
      render={({ field: { ref: _ref, ...field } }) => (
        <FormFieldItem>
          {!!props.label && <FormFieldLabel>{props.label}</FormFieldLabel>}
          <DayPicker {...field} />
          {!!props.helper && <FormFieldHelper>{props.helper}</FormFieldHelper>}
          <FormFieldError />
        </FormFieldItem>
      )}
    />
  );
};

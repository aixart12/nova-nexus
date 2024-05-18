import { Column, DataType } from 'sequelize-typescript';
import { ModelAttributeColumnOptions } from 'sequelize/types';

/**
 *
 * @param length @default 120
 * @param options
 * @returns
 */
export const TextLengthColumn = (
  length = 120,
  options: Partial<ModelAttributeColumnOptions> = {}
) => {
  return Column({
    type: DataType.STRING(length),
    ...options,
  });
};

/**
 *
 * @param options
 * @returns Column
 */
export const VariableLengthTextColumn = (
  options: Partial<ModelAttributeColumnOptions> = {}
) => {
  return Column({
    type: DataType.TEXT,
    ...options,
  });
};

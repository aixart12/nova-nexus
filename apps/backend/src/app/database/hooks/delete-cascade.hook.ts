import { Model } from 'sequelize-typescript';
import { InstanceDestroyOptions } from 'sequelize/types';

export const onDeleteCascadeHook: <
  M extends Pick<typeof Model, keyof typeof Model> & (new () => Model),
  T extends Model<TModelAttributes, TCreationAttributes>,
  TModelAttributes extends Record<string, unknown> = any,
  TCreationAttributes extends Record<string, unknown> = TModelAttributes
>(
  targetModel: M,
  targetKey: string
) => (instance: T, options: InstanceDestroyOptions) => Promise<void> | void = (
  targetModel,
  targetKey
) => {
  return (instance, options) => {
    targetModel.destroy({
      where: { [targetKey]: instance.id },
      transaction: options.transaction,
    });
  };
};

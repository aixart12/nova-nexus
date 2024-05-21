import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Sequelize,
  Table,
  Unique,
} from 'sequelize-typescript';

import { DATABASE_NAME_CONSTRAINTS } from '../constant/database-constraints.constant';
import { TUser, UserRole } from '@nova-nexus/common-models';
import { TextLengthColumn } from '../decorators';
import { POSTGRES_CURRENT_TIMESTAMP } from '../constant/database-time.constants';
import { CompanySchema } from './company.model';

@Table({
  tableName: DATABASE_NAME_CONSTRAINTS.USER_TABLE,
  underscored: true,
  modelName: DATABASE_NAME_CONSTRAINTS.COMPANY_TABLE,
  timestamps: true,
  paranoid: true,
})
export class UserSchema extends Model<TUser> {
  // Add your user model here
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @TextLengthColumn()
  firstName: string;

  @TextLengthColumn()
  lastName: string;

  @TextLengthColumn()
  phoneNumber: string;

  @Unique
  @TextLengthColumn()
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  role: keyof typeof UserRole;

  @Default(Sequelize.literal(POSTGRES_CURRENT_TIMESTAMP))
  @Column({ type: DataType.DATE })
  updatedAt: string;

  @Column({ type: DataType.DATE })
  deletedAt: string;

  @Column
  @ForeignKey(() => CompanySchema)
  companyId: number;

  @BelongsTo(() => CompanySchema)
  company: CompanySchema;
}

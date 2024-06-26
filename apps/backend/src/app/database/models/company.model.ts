import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Sequelize,
  Table,
  Unique,
} from 'sequelize-typescript';
import { DATABASE_NAME_CONSTRAINTS } from '../constant/database-constraints.constant';
import { TextLengthColumn } from '../decorators';
import { POSTGRES_CURRENT_TIMESTAMP } from '../constant/database-time.constants';
import { TCompany } from '@nova-nexus/common-models';

@Table({
  tableName: DATABASE_NAME_CONSTRAINTS.COMPANY_TABLE,
  underscored: true,
  modelName: DATABASE_NAME_CONSTRAINTS.COMPANY_TABLE,
  timestamps: true,
  paranoid: true,
})
export class CompanySchema extends Model<TCompany> {
  // Add your company model here
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Unique
  @TextLengthColumn()
  email: string;

  @Unique
  @TextLengthColumn()
  website: string;

  @TextLengthColumn()
  name: string;

  @TextLengthColumn()
  address: string;

  @TextLengthColumn()
  city: string;

  @TextLengthColumn()
  country: string;

  @TextLengthColumn()
  phone: string;

  @TextLengthColumn()
  postalCode: string;

  @Default(Sequelize.literal(POSTGRES_CURRENT_TIMESTAMP))
  @Column({ type: DataType.DATE })
  updatedAt: string;

  @Column({ type: DataType.DATE })
  deletedAt: string;
}

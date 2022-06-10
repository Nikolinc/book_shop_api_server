import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.modul';
import { UserRoles } from './user-roles.model';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Admin',
    description: 'role user',
  })
  @Column({ type: DataType.STRING })
  values: string;

  @ApiProperty({ example: 'administration', description: 'Role Description' })
  @Column({ type: DataType.STRING })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[];
}

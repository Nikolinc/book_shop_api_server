import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ tableName:  'tag'})
export class Tag extends Model<Tag>{

 @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  
  @ApiProperty({
    example: 'Horror',
    description: 'tag book',
  })
  @Column({ type: DataType.STRING })
  name:string;

}
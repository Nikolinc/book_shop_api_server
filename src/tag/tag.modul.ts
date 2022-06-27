import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/book/book.modul';
import { BookTag } from './book-tag.modul';

@Table({ tableName: 'tag' })
export class Tag extends Model<Tag> {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Horror',
    description: 'tag book',
  })
  @Column({ type: DataType.STRING })
  value: string;

  @BelongsToMany(() => Book, () => BookTag)
  Book: Book[];
}

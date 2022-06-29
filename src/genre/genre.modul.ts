import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/book/book.modul';
import { BookGener } from './book-genre.modul';

@Table({ tableName: 'genre' })
export class Genre extends Model<Genre> {
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
    description: 'gener book',
  })
  @Column({ type: DataType.STRING })
  value: string;

  @BelongsToMany(() => Book, () => BookGener)
  Book: Book[];
}

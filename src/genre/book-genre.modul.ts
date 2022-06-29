import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/book/book.modul';
import { Genre } from './genre.modul';


@Table({ tableName: 'BookTag', createdAt: false, updatedAt: false })
export class BookGener extends Model<BookGener> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Genre)
  @Column({ type: DataType.INTEGER })
  idGenre: number;

  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  idBook: number;
}

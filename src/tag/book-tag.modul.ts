import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Book } from 'src/book/book.modul';
import { Tag } from './tag.modul';


@Table({ tableName: 'BookTag', createdAt: false, updatedAt: false })
export class BookTag extends Model<BookTag> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Tag)
  @Column({ type: DataType.INTEGER })
  idTag: number;

  @ForeignKey(() => Book)
  @Column({ type: DataType.INTEGER })
  idBook: number;
}

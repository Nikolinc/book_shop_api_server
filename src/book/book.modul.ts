import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'Book' })
export class Book extends Model<Book> {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'The Outsider',
    description: 'name book',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({ example: 'Stephen King', description: 'author book' })
  @Column({ type: DataType.STRING })
  author: string;

  @ApiProperty({ example: 'Scribner', description: 'Publisher book' })
  @Column({ type: DataType.STRING })
  publisher: string;

  @ApiProperty({
    example: 'May 22, 2018',
    description: 'book publication date',
  })
  @Column({ type: DataType.DATE })
  PublicationDate: Date;

  @ApiProperty({ example: 'English', description: 'book language' })
  @Column({ type: DataType.STRING })
  Language: string;

  @ApiProperty({ example: '576 pages', description: 'Book print length' })
  @Column({ type: DataType.STRING })
  PrintLength: string;

  @ApiProperty({
    example:
      'https://images-na.ssl-images-amazon.com/images/I/61BwXgzFbjL._SX425_BO1,204,203,200_.jpg',
    description: 'book cover',
  })
  @Column({ type: DataType.STRING })
  cover: string;

  @ApiProperty({
    example:
      'An unspeakable crime. A confounding investigation. At a time when the King brand has never been stronger, he has delivered one of his most unsettling and compulsively listenable stories ...',
    description: 'description book',
  })
  @Column({ type: DataType.STRING })
  description: string;
}

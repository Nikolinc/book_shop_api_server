import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, isEmail, IsString, Length } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({
    example: 'The Outsider',
    description: 'name book',
  })
  @IsString({ message: 'should be a string' })
  name: string;

  @ApiProperty({ example: 'Stephen King', description: 'author book' })
  @IsString({ message: 'should be a string' })
  author: string;

  @ApiProperty({
    example: 2.1,
    description: 'price per book',
  })
  price: number;

  @ApiProperty({ example: 'dollar', description: 'Price currency per book' })
  currency: string;

  @ApiProperty({ example: 'Scribner', description: 'Publisher book' })
  @IsString({ message: 'should be a string' })
  publisher: string;

  @ApiProperty({
    example: 'May 22, 2018',
    description: 'book publication date',
  })
  @IsString({ message: 'must be date' })
  PublicationDate: Date;

  @ApiProperty({ example: 'English', description: 'book language' })
  @IsString({ message: 'should be a string' })
  Language: string;

  @ApiProperty({ example: '576 pages', description: 'Book print length' })
  @IsString({ message: 'should be a string' })
  PrintLength: string;

  @ApiProperty({
    example:
      'https://images-na.ssl-images-amazon.com/images/I/61BwXgzFbjL._SX425_BO1,204,203,200_.jpg',
    description: 'book cover',
  })
  @IsString({ message: 'should be a string' })
  cover: string;

  @ApiProperty({
    example:
      'An unspeakable crime. A confounding investigation. At a time when the King brand has never been stronger, he has delivered one of his most unsettling and compulsively listenable stories ...',
    description: 'description book',
  })
  @IsString({ message: 'should be a string' })
  description: string;
}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Book } from 'src/book/book.modul';
import { BookGener } from './book-genre.modul';
import { GenreController } from './genre.controller';
import { Genre } from './genre.modul';
import { GenreService } from './genre.service';

@Module({
  controllers: [GenreController],
  providers: [GenreService],
  imports: [SequelizeModule.forFeature([Genre, Book, BookGener])],
  exports: [GenreService],
})
export class GenreModule {}

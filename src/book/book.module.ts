import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookGener } from 'src/genre/book-genre.modul';
import { Genre } from 'src/genre/genre.modul';
import { GenreModule } from 'src/genre/genre.module';
import { BookController } from './book.controller';
import { Book } from './book.modul';
import { BookService } from './book.service';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports: [SequelizeModule.forFeature([Book, Genre, BookGener]),
   GenreModule,
],
  exports: [BookService],
})
export class BookModule {}

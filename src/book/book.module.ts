import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookTag } from 'src/tag/book-tag.modul';
import { Tag } from 'src/tag/tag.modul';
import { TagModule } from 'src/tag/tag.module';
import { BookController } from './book.controller';
import { Book } from './book.modul';
import { BookService } from './book.service';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports: [SequelizeModule.forFeature([Book, Tag, BookTag]),
   TagModule,
],
  exports: [BookService],
})
export class BookModule {}

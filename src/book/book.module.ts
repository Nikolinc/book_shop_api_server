import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookController } from './book.controller';
import { Book } from './book.modul';
import { BookService } from './book.service';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports:[SequelizeModule.forFeature([Book])],
  exports: [BookService]
})
export class BookModule {}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Book } from './book.modul';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book) private bookRepository: typeof Book) {}

  async CreateBook(dto: CreateBookDto) {
    const book = this.bookRepository.create(dto);
    return book;
  }

  async getAllBook() {
    const books = await this.bookRepository.findAll({ include: { all: true } });
    return books;
  }
}

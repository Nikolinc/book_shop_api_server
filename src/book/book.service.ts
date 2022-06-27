import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { TagService } from 'src/tag/tag.service';
import { Book } from './book.modul';
import { addTagDto } from './dto/add-tag.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book) private bookRepository: typeof Book,
    private tagService: TagService,
  ) {}

  async CreateBook(dto: CreateBookDto) {
    const book = this.bookRepository.create(dto);
    return book;
  }

  async getAllBook() {
    const books = await this.bookRepository.findAll({ include: { all: true } });
    return books;
  }

  async getBookByValue(name: string) {
    const tag = await this.bookRepository.findOne({ where: { name } });
    return tag;
  }

  async addTag(dto: addTagDto) {
    const book = await this.bookRepository.findByPk(dto.bookId);
    const tag = await this.tagService.getRoleByValue(dto.value);

    if (tag && book) {
      await book.$add('tag', tag.id);
      return dto;
    }
    throw new HttpException('Tag or book not found', HttpStatus.NOT_FOUND);
  }
}

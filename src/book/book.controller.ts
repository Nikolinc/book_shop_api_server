import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decoration';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@ApiTags('Books')
@Controller('book')
export class BookController {
  constructor(private bookServer: BookService) {}

  @ApiOperation({ summary: 'Create book' })
  @Roles('ADMIN')
  @Post('/create')
  create(@Body() dto: CreateBookDto) {
    return this.bookServer.CreateBook(dto);
  }

  @ApiOperation({ summary: 'get array book' })
  @Get()
  getAllBook() {
    return this.bookServer.getAllBook();
  }
}

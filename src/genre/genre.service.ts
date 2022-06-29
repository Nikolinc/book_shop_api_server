import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTagDto } from './dto/create-tag.dto';
import { Genre } from './genre.modul';

@Injectable()
export class GenreService {
  constructor(@InjectModel(Genre) private genreRepository: typeof Genre) {}

  async createTag(dto: CreateTagDto) {
    const tag = await this.genreRepository.create(dto);
    return tag;
  }
  async getAllTag() {
    const tag = await this.genreRepository.findAll({ include: { all: true } });
    return tag;
  }

  async getRoleByValue(value: string) {
    const tag = await this.genreRepository.findOne({ where: { value } });
    return tag;
  }
}

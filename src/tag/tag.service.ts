import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTagDto } from './dto/create-tag.dto';
import { Tag } from './tag.modul';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag) private tagRepository: typeof Tag) {}

  async createTag(dto: CreateTagDto) {
    const tag = await this.tagRepository.create(dto);
    return tag;
  }
  async getAllTag() {
    const tag = await this.tagRepository.findAll({ include: { all: true } });
    return tag;
  }

  async getRoleByValue(value: string) {
    const tag = await this.tagRepository.findOne({ where: { value } });
    return tag;
  }
}

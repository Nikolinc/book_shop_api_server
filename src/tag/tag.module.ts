import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Book } from 'src/book/book.modul';
import { TagController } from './tag.controller';
import { Tag } from './tag.modul';
import { TagService } from './tag.service';

@Module({
  controllers: [TagController],
  providers: [TagService],
  imports: [SequelizeModule.forFeature([Tag, Book])],
  exports: [TagService],
})
export class TagModule {}

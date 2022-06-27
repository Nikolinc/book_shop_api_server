import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decoration';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagService } from './tag.service';

@ApiTags('Tag')
@Controller('tag')
export class TagController {

  constructor(private tagService:TagService){}

  @ApiOperation({summary:'create tag'})
  @Roles('ADMIN')
  @Post()
  create(@Body() dto:CreateTagDto){
    return this.tagService.createTag(dto);
  }

  @ApiOperation({summary:'get array tag'})
  @Get()
  getAllTag(){
    return this.tagService.getAllTag();
  }

  @ApiOperation({ summary: 'get array tag' })
  @Get('/value')
  getByValue(@Param('value') value: string) {
    return this.tagService.getRoleByValue(value);
  }
}

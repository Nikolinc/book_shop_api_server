import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles-auth.decoration';
import { CreateTagDto } from './dto/create-tag.dto';
import { GenreService } from './genre.service';

@ApiTags('Genre')
@Controller('Genre')
export class GenreController {

  constructor(private genreService:GenreService){}

  @ApiOperation({summary:'create tag'})
  @Roles('ADMIN')
  @Post()
  create(@Body() dto:CreateTagDto){
    return this.genreService.createTag(dto);
  }

  @ApiOperation({summary:'get array tag'})
  @Get()
  getAllTag(){
    return this.genreService.getAllTag();
  }

  @ApiOperation({ summary: 'get array tag' })
  @Get('/value')
  getByValue(@Param('value') value: string) {
    return this.genreService.getRoleByValue(value);
  }
}

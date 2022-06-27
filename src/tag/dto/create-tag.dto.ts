import { ApiProperty } from "@nestjs/swagger";
import { IsString, isString } from "class-validator";

export class CreateTagDto{
  @ApiProperty({
    example: 'Horror',
    description: 'tag book',
  })
  @IsString({ message: 'should be a string' })
  name:string;
}
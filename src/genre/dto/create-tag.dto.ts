import { ApiProperty } from "@nestjs/swagger";
import { IsString, isString } from "class-validator";

export class CreateTagDto{
  @ApiProperty({
    example: 'Horror',
    description: 'Genre book',
  })
  @IsString({ message: 'should be a string' })
  value:string;
}
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, isEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Mailing address' })
  @IsString({message:"should be a string"})
  @IsEmail({},{message:"email entered incorrectly"})
  email: string;

  @ApiProperty({ example: '1234567', description: 'password users' })
  @IsString({message:"should be a string"})
  @Length(4,20,{message:"not less than 4 and not more than 20"})
  password: string;

  @ApiProperty({ example: 'Adam', description: 'firstname user' })
  @IsString({message:"should be a string"})
  firstname: string;

  @ApiProperty({ example: 'Smit', description: 'lastname user' })
  @IsString({message:"should be a string"})
  lastname: string;
}

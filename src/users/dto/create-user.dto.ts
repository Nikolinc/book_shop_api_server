import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@gmail.com', description: 'Mailing address' })
  email: string;

  @ApiProperty({ example: '1234567', description: 'password users' })
  password: string;

  @ApiProperty({ example: 'Adam', description: 'firstname user' })
  firstname: string;

  @ApiProperty({ example: 'Smit', description: 'lastname user' })
  lastname: string;
}

import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'USER', description: 'value role' })
  readonly value: string;

  @ApiProperty({ example: 'user role ', description: 'description role' })
  readonly description: string;
}

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeScopeError } from 'sequelize/types';
import { UserRoles } from 'src/roles/user-roles.model';
import { Role } from 'src/roles/roles.modul';
import { UsersController } from './users.controller';
import { User } from './users.modul';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User,Role,UserRoles])
  ],
  exports: [UsersService],
})
export class UsersModule {}

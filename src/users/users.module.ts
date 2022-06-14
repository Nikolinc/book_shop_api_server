import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeScopeError } from 'sequelize/types';
import { UserRoles } from 'src/roles/user-roles.model';
import { Role } from 'src/roles/roles.modul';
import { UsersController } from './users.controller';
import { User } from './users.modul';
import { UsersService } from './users.service';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature([User,Role,UserRoles]),
    RolesModule
  ],
  exports: [UsersService,UsersModule],
})
export class UsersModule {}

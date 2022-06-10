import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.modul';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { UserRoles } from './user-roles.model';
import { Role } from './roles.modul';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([User,Role,UserRoles])],
})
export class RolesModule {}

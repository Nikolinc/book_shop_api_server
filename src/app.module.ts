import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { triggerAsyncId } from 'async_hooks';
import { User } from './users/users.modul';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.modul';
import { UserRoles } from './roles/user-roles.model';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './book/book.module';
import { Genre } from './genre/genre.modul';
import { GenreModule } from './genre/genre.module';
import { BookGener } from './genre/book-genre.modul';
import { Book } from './book/book.modul';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.PROGRESS_HOST,
      port: Number(process.env.PROGRESS_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Role, UserRoles, Book ,Genre, BookGener],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    BookModule,
    GenreModule,
  ],
})
export class AppModule {}

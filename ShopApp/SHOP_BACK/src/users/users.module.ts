import { Module } from "@nestjs/common";
import { PrismaService } from "src/db.service";
import { ProductsService } from "src/products/products.service";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UsersRepository } from "./users.repository";

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, ProductsService, UsersRepository],
})
export class UsersModule {}

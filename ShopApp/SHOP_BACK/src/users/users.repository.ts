import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/db.service";
import { UserEntity, UserEntityProps } from "./user.entity";
import { User } from "@prisma/client";

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  async Create(data: UserEntityProps): Promise<User> {
    try {
      return await this.prisma.user.create({ data });
    } catch (error) {
      throw error;
    }
  }

  async findUserById(id: number): Promise<User | void> {
    try {
      await this.prisma.user.findUnique({ where: { id } });
    } catch (error) {
      throw error;
    }
  }

  async findUserByEmail(email: string): Promise<User | void> {
    try {
      await this.prisma.user.findUnique({ where: { email } });
    } catch (error) {
      throw error;
    }
  }
}

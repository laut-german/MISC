import {
  ConflictException,
  HttpException,
  Injectable,
  Logger,
  NotFoundException,
} from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/db.service";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./user.entity";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(private userRepository: UsersRepository) {}

  async createUser(data: UserEntity): Promise<User | HttpException> {
    try {
      return await this.userRepository.Create(data.toPrismaObject());
    } catch (error) {
      if (error.code === "P2002") {
        return new ConflictException(
          `User with ${error.meta.target} already in use`,
        );
      }
      this.logger.error(error);
      //return error; No es buena practica retornar los errores directamente al front.
    }
  }

  async userExists(email: string): Promise<User | void> {
    try {
      return await this.userRepository.findUserByEmail(email);
    } catch (error) {
      this.logger.error(error);
      //return error;
    }
  }

  async userById(id: number): Promise<User> {
    try {
      const user = await this.userRepository.findUserById(id);
      if(!user) {
        //TODO: Handle Global errors
        throw new NotFoundException("User not found");
      }
      return user;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

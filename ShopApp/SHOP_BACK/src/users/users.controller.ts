import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ProductsService } from "src/products/products.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UsersService } from "./users.service";
import { UserEntity } from "./user.entity";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly productsService: ProductsService,
  ) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto) {
    const userEntity = await UserEntity.create( {
      email: createUserDto.email,
      password: createUserDto.password,
      role: createUserDto.role,
      country: createUserDto.country,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
     });
  
    return this.usersService.createUser(userEntity);
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    //TODO: AGREGAR SALES Y ORDERS DE USUARIO
    const user = await this.usersService.userById(Number(id));
    const products = await this.productsService.findAll({ authorId: +id });
    return user.role == "BUSINESS" ? { ...user, products: products } : user;
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}

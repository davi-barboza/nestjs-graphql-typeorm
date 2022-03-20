import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = await this.usersRepository.create(createUserInput);
    const userSaved = await this.usersRepository.save(user);

    if (!userSaved) {
      throw new InternalServerErrorException('Não foi possível criar o usuário');
    }
    return user;
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    await this.usersRepository.update(user, { ...updateUserInput });
    const userUpdated = this.usersRepository.create({ ...user, ...updateUserInput });
    return userUpdated;
  }

  async remove(id: number): Promise<boolean> {
    const user = await this.usersRepository.findOne(id);
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const userDeleted = await this.usersRepository.delete(id);
    return userDeleted ? true : false;
  }
}

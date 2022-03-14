import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    return await this.usersRepository.insert(createUserInput);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne(id);
  }

  async update(updateUserInput: UpdateUserInput) {
    return await this.usersRepository.update(
      updateUserInput.id,
      updateUserInput,
    );
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}

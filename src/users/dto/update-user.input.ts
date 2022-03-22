import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  id: number;

  @Field()
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  nome?: string;

  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  @IsOptional()
  email?: string;

  @Field()
  @IsOptional()
  @IsString()
  @IsNotEmpty({ message: 'Password não pode ser vazio' })
  password?: string;
}

import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => ID)
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  id: number;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  @IsOptional()
  nome?: string;

  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  @IsOptional()
  email?: string;
}

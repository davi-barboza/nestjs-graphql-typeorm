import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString({ message: 'O tipo deve ser string' })
  @IsNotEmpty({ message: 'Nome não pode ser vazio' })
  nome: string;

  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'Email não pode ser vazio' })
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty({ message: 'Password não pode ser vazio' })
  password: string;
}

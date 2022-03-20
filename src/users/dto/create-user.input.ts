import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString({ message: 'O tipo deve ser string' })
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  nome: string;

  @Field()
  @IsEmail()
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  email: string;
}

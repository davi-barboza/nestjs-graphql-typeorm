import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  nome: string;

  @Field({ nullable: true })
  email: string;
}

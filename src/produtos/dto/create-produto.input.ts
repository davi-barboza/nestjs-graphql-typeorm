import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProdutoInput {
  @Field()
  produtoId: string;

  @Field(() => Float)
  valorUnitario: number;
}

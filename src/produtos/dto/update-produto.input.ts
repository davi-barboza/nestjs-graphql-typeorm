import { Field, Float, InputType, PartialType } from '@nestjs/graphql';
import { CreateProdutoInput } from './create-produto.input';

@InputType()
export class UpdateProdutoInput extends PartialType(CreateProdutoInput) {
  @Field()
  produtoId: string;

  @Field(() => Float)
  valorUnitario: number;
}

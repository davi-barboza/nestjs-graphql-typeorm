import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProdutosService } from './produtos.service';
import { Produto } from './entities/produto.entity';
import { CreateProdutoInput } from './dto/create-produto.input';
import { UpdateProdutoInput } from './dto/update-produto.input';

@Resolver(() => Produto)
export class ProdutosResolver {
  constructor(private readonly produtosService: ProdutosService) {}

  @Mutation(() => Produto)
  createProduto(
    @Args('createProdutoInput') createProdutoInput: CreateProdutoInput,
  ) {
    return this.produtosService.create(createProdutoInput);
  }

  @Query(() => [Produto], { name: 'produtos' })
  findAll() {
    return this.produtosService.findAll();
  }

  @Query(() => Produto, { name: 'produto' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.produtosService.findOne(id);
  }

  @Mutation(() => Produto)
  updateProduto(
    @Args('updateProdutoInput') updateProdutoInput: UpdateProdutoInput,
  ) {
    return this.produtosService.update(updateProdutoInput);
  }

  @Mutation(() => Produto)
  removeProduto(@Args('id', { type: () => Int }) id: number) {
    return this.produtosService.remove(id);
  }
}

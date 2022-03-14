import { Test, TestingModule } from '@nestjs/testing';
import { ProdutosResolver } from './produtos.resolver';
import { ProdutosService } from './produtos.service';

describe('ProdutosResolver', () => {
  let resolver: ProdutosResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutosResolver, ProdutosService],
    }).compile();

    resolver = module.get<ProdutosResolver>(ProdutosResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

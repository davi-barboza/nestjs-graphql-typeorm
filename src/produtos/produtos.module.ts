import { Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosResolver } from './produtos.resolver';
import { Produto } from './entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  providers: [ProdutosResolver, ProdutosService],
})
export class ProdutosModule {}

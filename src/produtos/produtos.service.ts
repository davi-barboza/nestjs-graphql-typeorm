import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProdutoInput } from './dto/create-produto.input';
import { UpdateProdutoInput } from './dto/update-produto.input';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto) private produtosRepository: Repository<Produto>,
  ) {}

  create(createProdutoInput: CreateProdutoInput) {
    return 'This action adds a new produto';
  }

  findAll(): Promise<Produto[]> {
    return this.produtosRepository.find();
  }

  findOne(id: number) {
    return this.produtosRepository.findOne(id);
  }

  update(updateProdutoInput: UpdateProdutoInput) {
    return `This action updates a # produto`;
  }

  async remove(id: number): Promise<void> {
    await this.produtosRepository.delete(id);
  }
}

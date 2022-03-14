import { registerEnumType } from '@nestjs/graphql';

enum TipoProduto {
  FISICO,
  SERVICO,
}

registerEnumType(TipoProduto, {
  name: 'TipoProduto',
});

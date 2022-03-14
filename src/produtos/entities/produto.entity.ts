import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity('produto')
export class Produto {
  @Field()
  @PrimaryColumn()
  produtoId: string;

  @Field(() => Float)
  @Column()
  valorUnitario: number;
}

import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  userId: number;

  @Field()
  @Column()
  nome: string;

  @Field()
  @Column()
  email: string;
}

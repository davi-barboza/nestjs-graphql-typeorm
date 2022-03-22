import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { hashPasswordTransform } from 'src/common/helpers/crypto';
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

  @Field()
  @Column({
    transformer: hashPasswordTransform,
  })
  @HideField()
  password: string;
}

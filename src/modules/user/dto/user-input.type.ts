import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@InputType()
export class UserInput {
  @Field({ description: '用户名' })
  name?: string;
  @Field({ description: '简介' })
  desc: string;
  @Field({ description: '头像' })
  avatar?: string;
}

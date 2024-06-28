import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field({ description: '用户id' })
  id?: string;
  @Field({ description: '用户名' })
  name?: string;
  @Field({ description: '用户简介' })
  desc?: string;
  @Field({ description: '用户账号' })
  account?: string;
}

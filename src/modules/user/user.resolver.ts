import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserInput } from './dto/user-input.type';
import { UserType } from './dto/user.type';

@Resolver()
export class UserResolver {
  constructor(private readonly UserService: UserService) {}

  @Mutation(() => Boolean)
  async create(@Args('params') params: UserInput): Promise<boolean> {
    return await this.UserService.create(params);
  }

  @Query(() => UserType, { description: 'Get user by id' })
  async find(@Args('id') id: string): Promise<UserType> {
    return await this.UserService.findOne(id);
  }
}

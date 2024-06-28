import { Controller, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { DeepPartial, Repository } from 'typeorm';

// 注入nestjs的service
@Injectable()
export class UserService {
  constructor(
    // 注入typeorm的repository
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // 新增用户 DeepPartial是typeorm的接口，表示可以部分更新
  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepository.insert(entity);
    console.log(res);
    return true;
  }
  // 删除一个用户
  async delete(id: string): Promise<boolean> {
    const res = await this.userRepository.delete(id);
    console.log(res);
    if (res.affected > 0) {
      return true;
    } else {
      return false;
    }
  }
  // 更新一个用户
  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.userRepository.update(id, entity);
    console.log(res);
    if (res.affected > 0) {
      return true;
    } else {
      return false;
    }
  }
  // 查询一个用户
  async findOne(id: string): Promise<User> {
    const res = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    console.log(res);
    return res;
  }
}

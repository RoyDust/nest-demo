import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    comment: '用户名',
    default: '',
    length: 20,
  })
  @IsNotEmpty({ message: '用户名不能为空' })
  name: string;

  @Column({
    comment: '描述',
    default: '',
  })
  desc: string;

  @Column({
    comment: '电话',
    nullable: true,
    default: '',
  })
  tel: string;

  @Column({
    comment: '密码',
    default: '',
    // select: false,
    nullable: true,
  })
  password: string;

  @Column({
    comment: '账号',
    default: '',
    nullable: true,
  })
  account: string;
}

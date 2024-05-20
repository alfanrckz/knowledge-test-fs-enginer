import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany } from "typeorm";
import * as bcrypt from "bcrypt";
import { Product } from "./Product";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  gender: string;

  
  @OneToMany(() => Product, (product) => product.created_by, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE"
})
products: Product[];


 
}

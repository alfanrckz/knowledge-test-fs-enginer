import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column('float')
    price: number

    @Column()
    description: string;

    @Column()
    image: string

    @ManyToOne(() => User, (user) => user.products, {
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "created_by" })
    created_by: User;

}
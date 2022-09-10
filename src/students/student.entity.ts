import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({default: false})
    isActive: boolean;
}
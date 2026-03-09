import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class StudentProfile {

  @PrimaryGeneratedColumn()
  id!: number; 
  
  @Column()
  age!: number;

  @Column()
  address!: string;

  @Column()
  phone!: string;
}
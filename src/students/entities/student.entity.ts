import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { StudentProfile } from '../../student-profiles/entities/student-profile.entity';


@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @OneToOne(() => StudentProfile, {
        cascade: true,
        eager: true,
        nullable: true,
    })
    @JoinColumn()
    studentProfile!: StudentProfile;
}
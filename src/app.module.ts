import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsModule } from './students/students.module';
import { StudentProfilesModule } from './student-profiles/student-profiles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'sarim9999',
      database: 'nest-assignment-DB2',
      autoLoadEntities: true,
      synchronize: true,
    }),
    StudentsModule,
    StudentProfilesModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

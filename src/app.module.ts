import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { StudentController } from './students/student.controller';
import { Student } from './students/student.entity';
import { StudentService } from './students/student.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type : 'mysql',
        host : 'localhost',
        port : 3306,
        database : 'nest_crud',
        username : 'root',
        password : '',
        autoLoadEntities : true, 
        synchronize : true      
    }), 
    TypeOrmModule.forFeature([Student]) // entity
  ],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}

import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { createStudentDto } from "./create-student.dto";
import { Student } from "./student.entity";


@Injectable()
export class StudentService{

    constructor(@InjectRepository(Student) private readonly userRepository: Repository<Student>){}

    findAll(){
        return this.userRepository.find()
    }

    findOne(id: number){
        /**
         * findOne          : data || null
         * findOneBy        : data || null
         * findOneOrFail    : data || { statusCode: 500, message: 'Internal server error' }
         * findOneByOrFail  : data || { statusCode: 500, message: 'Internal server error' }
         * 
         * https://typeorm.io/repository-api#repository-api
         */

        return this.userRepository.findOneOrFail({
            where: {
                id: id
            }
        })
    }

    create(data: createStudentDto){
        /** response 
         * "firstName": "deka",
            "lastName": "Hermawan",
            "isActive": true,
            "id": 4
         */
        return this.userRepository.save(data)

    }

}
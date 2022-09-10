import { Controller, Get } from "@nestjs/common";
import { StudentService } from "./student.service";

@Controller('students')
export class StudentController {

    constructor(private readonly studentService: StudentService){}

    @Get()
    async findAll(){
        return{
            data : await this.studentService.findAll()
        }
    }
    
}
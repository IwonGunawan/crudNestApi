import { Controller, Get, Post, Param, Body, UseFilters, Put, Delete, HttpCode, HttpStatus } from "@nestjs/common";
import { EntityNotFoundExceptionFilter } from "src/utils/entity-not-found-exception.filter";
import { createStudentDto } from "./create-student.dto";
import { StudentService } from "./student.service";

@Controller('students')
@UseFilters(new EntityNotFoundExceptionFilter)
export class StudentController {

    constructor(private readonly studentService: StudentService){}

    @Get()
    async findAll(){
        return{
            data : await this.studentService.findAll()
        }
    }

    @Get(":id")
    async findOne(@Param("id") id: number){
        return{
            data : await this.studentService.findOne(id)
        }
    }

    @Post()
    async create(@Body() data: createStudentDto){
        return {
            data : await this.studentService.create(data)
        }
    }

    @Put(':id')
    async update(@Body() data: createStudentDto, @Param('id') id: number){
        return{
            data : await this.studentService.update(data, id)
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async remove(@Param('id') id: number){
        return{
            data : await this.studentService.remove(id)
        }
    }
    
}
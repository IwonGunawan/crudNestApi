import { ArgumentsHost, ExceptionFilter, HttpStatus, Catch } from "@nestjs/common";
import { EntityNotFoundError } from "typeorm";


@Catch(EntityNotFoundError)
export class EntityNotFoundExceptionFilter implements ExceptionFilter{
    catch(error: EntityNotFoundError, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse()
        response.status(HttpStatus.NOT_FOUND).json({
            statusCode  : HttpStatus.NOT_FOUND, 
            message     : 'Data Not Found'
        })
    }
}
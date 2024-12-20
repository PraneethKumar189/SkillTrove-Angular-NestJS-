import { Body, Controller, HttpStatus, Post, Res,  } from '@nestjs/common';

import { CreateUserDTO } from '../dto/createUser.dto';
import { Userservice } from '../services/user.service';

@Controller('user')
export class UserController {
    constructor(private dss:Userservice){}

  @Post()
  async createUser(@Res() response,@Body() CUD:CreateUserDTO ){
    try{
        const newUser= await this.dss.createUser(CUD);
       
        return response.status(HttpStatus.CREATED).json(
            {
                message:'New user created',
                newUser
            
            }
        )
    }
    catch(err)
    {
        return response.status(HttpStatus.BAD_REQUEST).json({
            message:'new user not created',
            err:'bad request'
        })
    }
   
    
    
}
}
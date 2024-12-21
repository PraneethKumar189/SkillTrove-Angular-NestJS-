import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res,  } from '@nestjs/common';

import { CreateUserDTO } from '../dto/createUser.dto';
import { Userservice } from '../services/user.service';
import { UpdateUserDTO } from '../dto/updateUser.dto';
import { ok } from 'assert';
import { response } from 'express';

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
@Get()
async getAllUser(@Res() response){
 try{
    const users=await this.dss.getAllUser()
    return response.status(HttpStatus.OK).json({
    
        message: 'All students data found successfully',
        users,
      });
 }
    
 catch(err)
 {
    return response.status(err.status).json(err.response);

 }
    
}

@Put('/:id')
async updateUser(@Res() response,@Param('id') reg_num:string,@Body() UUD:UpdateUserDTO ){
    try{
        const upuser= await this.dss.updateuser(reg_num,UUD);
        return response.status(HttpStatus.OK).json({
            message:'User updated successfully',
            upuser
        });
    }
    catch(err)
    {
        return response.status(err.status).json(err.response)
    }
}


@Get('/:id')
async getUserbyId(@Res() response,@Param('id') regnum:string ){
    try{

        const userId = await this.dss.getUserById(regnum)
        return response.status(HttpStatus.OK).json({
            message:'User data found succsessfully',
            userId

        })
    }
    catch(err){
        return response.status(err.status).json(err.response)

    }



}

@Delete('/:id')
async deleteUserById(@Res() response,@Param('id') reg_num:string ){
    try{
        const delUser=await this.dss.deleteUser(reg_num)
        return response.status(HttpStatus.OK).json({
            message:'User deleted successfully',
            delUser
        })
    }
  catch(err){
    return response.status(err.status).json(err.response)
  }
}

}
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Userservice } from 'src/user/services/user.service';
import * as bcrypt from 'bcrypt'
@Injectable()
export class AuthService {
    constructor(private userSer:Userservice,private jwtSer:JwtService){}

    async ValidatorUser

}

import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { UserDto } from 'src/user/dto/user.dto';
export declare class AuthService {
    private readonly srv;
    constructor(srv: JwtService);
    generateJWT(user: UserDto): Observable<string>;
}

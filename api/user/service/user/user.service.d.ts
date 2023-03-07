import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/service/auth/auth.service';
import { UserDto } from 'src/user/dto/user.dto';
export declare class UserService {
    private readonly srv;
    private username;
    private pass;
    constructor(srv: AuthService);
    login(data: UserDto): Promise<object>;
    validate(pwd: string): Observable<any>;
}
